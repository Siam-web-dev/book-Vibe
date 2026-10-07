import Image from "next/image";
import Link from "next/link";

export type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
};

const BookCard = ({ book }: { book: Book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    tags,
    rating,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <Link
      href={`/books/${bookId}`}
      className="group flex h-full flex-col rounded-3xl border border-base-300/60 bg-base-100 p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23BE0A]"
    >
      {/* Cover */}
      <div className="relative flex items-center justify-center rounded-2xl bg-base-200 px-6 py-8">
        <Image
          src={image}
          alt={`Cover of ${bookName}`}
          width={180}
          height={240}
          unoptimized
          className="h-56 w-auto rounded-md object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#23BE0A]/10 px-3 py-1 text-sm font-medium text-[#23BE0A]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title + author */}
      <div className="mt-4 flex-1">
        <h3 className="text-xl font-bold leading-snug">{bookName}</h3>
        <p className="mt-1 text-base-content/70">By {author}</p>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-dashed border-base-300 pt-4 text-sm">
        <span className="font-medium text-base-content/70">{category}</span>

        <span className="flex items-center gap-1 font-medium">
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
          <span className="sr-only">out of 5</span>
        </span>
      </div>

      {/* Meta */}
      <p className="mt-2 text-sm text-base-content/60">
        {totalPages} pages · {yearOfPublishing}
      </p>
    </Link>
  );
};

export default BookCard;