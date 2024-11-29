import { notFound } from "next/navigation";

export const dynamic = 'force-static'

export default function NotFoundCatchAll() {
  notFound();
}

export function generateStaticParams() {
  return [];
}