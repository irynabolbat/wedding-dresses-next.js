import Loader from "@/app/components/Loader";
import ProductPage from "@/app/components/Product";
import { Dress } from "@/types/Dress";
import { fetchCollection } from "@/api/dressesCollection/route";

type ProductProps = {
  params: {
    id: string;
  };
};

export default async function Product({ params: { id } }: ProductProps) {
  const collection: Dress[] = await fetchCollection()

  const product = collection.find((dress: Dress) => dress.id === id) || null;

  if (!product) return <Loader />;

  return <ProductPage product={product} />;
}

export async function generateStaticParams() {
  const collection: Dress[] = await fetchCollection();
  return collection.map((item: Dress) => ({
    id: item.id,
  }));
}
