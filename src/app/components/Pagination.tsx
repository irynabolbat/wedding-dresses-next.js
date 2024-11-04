"use client";
import "@/app/styles/Pagination.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => {
              onPageChange(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}
