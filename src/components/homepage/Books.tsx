import React from "react";
import BookCard, { Book } from "../shared/BookCard";


const getBooks = async () => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData);

  return (
    <section className="mx-auto my-16 w-[90%] max-w-7xl lg:w-[85%]">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Books
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book : Book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
