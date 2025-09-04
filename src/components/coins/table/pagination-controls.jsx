import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default async function PaginationControls({ PageCount, searchParams }) {
  const currentPage = +(await searchParams)?.page;

  const paginationLinks = Array.from({ length: PageCount }, (_, index) => {
    const pageNumber = index + 1;
    return (
      <li key={pageNumber}>
        <Link
          href={`/prices?page=${pageNumber}`}
          className={`${
            pageNumber === currentPage ? 'text-blue-500' : ''
          } hover:text-blue-500`}
        >
          {pageNumber}
        </Link>
      </li>
    );
  });

  return (
    <ul className="flex text-lg gap-2 justify-center font-bold">
      {currentPage > 1 && (
        <li className="mt-1">
          <Link
            href={`/prices?page=${currentPage - 1}`}
            className="hover:text-blue-500"
          >
            <FaChevronRight className="size-4" />
          </Link>
        </li>
      )}
      {paginationLinks}

      <li className="mt-1">
        <Link
          href={`/prices?page=${currentPage + 1}`}
          className="hover:text-blue-500"
        >
          <FaChevronLeft className="size-4" />
        </Link>
      </li>
    </ul>
  );
}
