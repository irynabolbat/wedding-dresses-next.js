"use client";
import { useEffect } from "react";
import { Dress } from "@/types/Dress";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";

export default function Catalog() {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  return (
    <div className="catalog">
      <PageTitle title="Catalog" />
      <hr />

      {!collection ? (
        <Loader />
      ) : (
        <ul className="catalog__list">
          {collection.map((dress: Dress) => (
            <ProductItem
              key={dress.id}
              dress={dress}
              baseUrl="catalog"
            />
          ))}
        </ul>
      )}
    </div>
  );
}
