"use client";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return <h2 className="pageTitle">{title}</h2>;
}
