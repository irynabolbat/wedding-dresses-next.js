import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1 className="notFound__heading">Not found – 404!</h1>
      <div>
        <Link
          href="/"
          className="notFound__link"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
