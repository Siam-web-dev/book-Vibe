import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Book } from "@/components/shared/BookCard";
import ReadButton from "@/components/bookdetails/ReadButton";
import WishListButton from "@/components/bookdetails/WishListButton";

interface IBookDetailPage {
  params: Promise<{ bookId: string }>;
}

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  if (!res.ok) throw new Error("Failed to load books");
  return res.json();
};

const BookDetailPage = async ({ params }: IBookDetailPage) => {
  const { bookId } = await params;
  const booksData = await getBooks();

  const book = booksData.find((b) => String(b.bookId) === String(bookId));
  if (!book) notFound();

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const stats = [
    { label: "Pages", value: totalPages },
    { label: "Published", value: yearOfPublishing },
    { label: "Publisher", value: publisher },
    { label: "Rating", value: `${rating} / 5` },
  ];

  return (
    <section className="mx-auto my-10 w-[90%] max-w-6xl lg:my-16 lg:w-[85%]">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/70 transition-colors hover:text-[#23BE0A]"
      >
        <span aria-hidden="true">←</span> Back to books
      </Link>

      <article className="grid gap-8 overflow-hidden rounded-3xl border border-base-300/60 bg-base-100 p-5 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12 lg:p-10">
        {/* Cover */}
        <div className="flex items-center justify-center rounded-2xl bg-linear-to-br from-[#23BE0A]/10 via-base-200 to-base-200 px-6 py-10">
          <Image
            src={image}
            alt={`Cover of ${bookName}`}
            width={320}
            height={440}
            priority
            unoptimized
            className="h-auto w-full max-w-65 rounded-lg object-cover shadow-2xl"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-base-200 px-3 py-1 text-sm font-medium text-base-content/70">
              {category}
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-amber-400"
                aria-hidden="true"
              >
                <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.13 5.11a.56.56 0 0 0 .47.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.29 5.38a.56.56 0 0 1-.84.61l-4.73-2.89a.56.56 0 0 0-.58 0l-4.73 2.89a.56.56 0 0 1-.84-.61l1.29-5.38a.56.56 0 0 0-.18-.56l-4.2-3.6a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .47-.35l2.13-5.11Z" />
              </svg>
              {rating}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {bookName}
          </h1>
          <p className="mt-2 text-lg text-base-content/70">By {author}</p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#23BE0A]/10 px-3 py-1 text-sm font-medium text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl bg-base-200/70 px-4 py-3"
              >
                <dt className="text-xs uppercase tracking-wide text-base-content/60">
                  {label}
                </dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Review */}
          <div className="mt-8">
            <h2 className="mb-2 text-lg font-semibold">Review</h2>
            <p className="leading-relaxed text-base-content/80">{review}</p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-dashed border-base-300 pt-6">
            <ReadButton book={book} ></ReadButton>
            <WishListButton book={book} ></WishListButton>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BookDetailPage;