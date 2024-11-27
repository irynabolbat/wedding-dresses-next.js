import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
  notFound();
}

export function generateStaticParams() {
  return [];
}
