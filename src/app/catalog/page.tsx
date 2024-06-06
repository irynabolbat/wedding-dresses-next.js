"use client";
import { useEffect, useState } from "react";
import { Dress } from "@/types/Dress";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

export default function Catalog() {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  const visibleDresses = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return collection.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(collection.length / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="catalog">
      <PageTitle title="Catalog" />
      <hr />

      {!collection ? (
        <Loader />
      ) : (
        <>
          <ul className="catalog__list">
            {visibleDresses().map((dress: Dress) => (
              <ProductItem
                key={dress.id}
                dress={dress}
                baseUrl="catalog"
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
