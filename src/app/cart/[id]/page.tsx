"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import { AppDispatch, RootState } from "@/store/store";

import Loader from "@/app/components/Loader";
import ProductPage from "@/app/components/Product";
import { Dress } from "@/types/Dress";
import { fetchCollection } from "@/api/dressesCollection/route";

type ProductProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  // Пример: данные можно взять из API, базы данных или определить вручную
  const catalogItems = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

  // Возвращаем массив параметров
  return catalogItems.map((item) => ({
    id: item.id,
  }));
}



export default function Product({ params: { id } }: ProductProps) {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  const product = collection.find((dress: Dress) => dress.id === id) || null;

  if (!product) return <Loader />;

  return <ProductPage product={product} />;
}
