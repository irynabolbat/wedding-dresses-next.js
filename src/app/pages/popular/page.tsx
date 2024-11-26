"use client";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import { AppDispatch, RootState } from "@/store/store";

import { Dress } from "@/types/Dress";
import Loader from "../../components/Loader";
import PageTitle from "../../components/PageTitle";
import Pagination from "../../components/Pagination";
import ProductItem from "../../components/ProductItem";

export default function PopularProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);

  const sortedDresses = useMemo(() => {
    if (!collection) return [];
    return [...collection]
      .sort((a: Dress, b: Dress) => b.price - a.price)
      .slice(0, 30);
  }, [collection]);
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  const visibleDresses = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedDresses.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(sortedDresses.length / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="popular">
      <PageTitle title="Popular Dresses" />
      <hr />

      {collection.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ul className="popular__list">
            {visibleDresses().map((dress: Dress) => (
              <ProductItem
                key={dress.id}
                dress={dress}
                baseUrl="popular"
                className="itemWidth"
              />
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </>
      )}
    </div>
  );
}
