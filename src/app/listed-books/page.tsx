"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/components/shared/BookCard";
import { BookContext } from "@/context/BookContext";
import { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);

  // One-column card design
  const renderBook = (book: Book) => (
    <article
      key={book.bookId}
      className="flex flex-col gap-5 rounded-3xl border border-base-300/60 bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center"
    >
      {/* Cover */}
      <div className="flex shrink-0 items-center justify-center rounded-2xl bg-base-200 px-6 py-5 sm:w-44">
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={120}
          height={160}
          unoptimized
          className="h-36 w-auto rounded-md object-cover shadow-md"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold leading-snug">{book.bookName}</h3>
          <p className="text-base-content/70">By {book.author}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-base-content/70">Tags:</span>
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#23BE0A]/10 px-3 py-1 text-sm font-medium text-[#23BE0A]"
            >
              #{tag}
            </span>
          ))}
          <span className="text-sm text-base-content/60">
            · Year: {book.yearOfPublishing}
          </span>
        </div>

        <p className="text-sm text-base-content/60">
          Publisher: {book.publisher} · Pages: {book.totalPages}
        </p>

        <div className="flex flex-wrap items-center gap-2 border-t border-dashed border-base-300 pt-3">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
            {book.category}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            ★ {book.rating}
          </span>

          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-sm ml-10 border-none bg-[#23BE0A] text-white hover:bg-[#1da008]"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <div className="mx-auto mt-10 w-[85%]">
      <div className="tabs tabs-border">
        {/* Read books tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-10">
          <div className="flex flex-col gap-5">
            {readBooks.length > 0 ? (
              readBooks.map(renderBook)
            ) : (
              <p className="font-semibold">No Read Books Found</p>
            )}
          </div>
        </div>

        {/* Wishlist tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wish List (${wishlist.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-4 sm:p-10">
          <div className="flex flex-col gap-5">
            {wishlist.length > 0 ? (
              wishlist.map(renderBook)
            ) : (
              <p className="font-semibold">No Wish List Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;