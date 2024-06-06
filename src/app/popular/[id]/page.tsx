"use client"
import ProductPage from "@/app/components/Product";
import { fetchCollectionAsync } from "@/store/slices/collectionSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Dress } from "@/types/Dress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type ProductProps = {
  params: {
    id: string,
  }
}

export default function Product({params: {id}}: ProductProps) {
  const dispatch = useDispatch<AppDispatch>();
  const collection = useSelector((state: RootState) => state.collection.value);

  useEffect(() => {
    dispatch(fetchCollectionAsync());
  }, [dispatch]);

  const product = collection.find((dress: Dress) => dress.id === id) || null;

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductPage product={product} />;
}