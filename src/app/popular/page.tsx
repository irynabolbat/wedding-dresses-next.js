"use client";
import { useEffect } from "react";
import { Dress } from "@/types/Dress";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";

export default function PopularProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);
  const sortedDresses = collection
    ? [...collection]
        .sort((a: Dress, b: Dress) => b.price - a.price)
        .slice(0, 30)
    : [];

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  return (
    <div className="popular">
      <PageTitle title="Popular Dresses" />
      <hr />

      {!sortedDresses ? (
        <Loader />
      ) : (
        <ul className="popular__list">
          {sortedDresses.map((dress: Dress) => (
            <ProductItem
              key={dress.id}
              dress={dress}
              baseUrl="popular"
            />
          ))}
        </ul>
      )}
    </div>
  );
}
