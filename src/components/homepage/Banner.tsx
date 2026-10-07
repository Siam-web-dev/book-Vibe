import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="mx-auto mt-10 w-[90%] max-w-7xl lg:mt-20 lg:w-[85%]">
      <div className="relative grid items-center gap-10 rounded-3xl bg-amber-100 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#23BE0A]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#23BE0A]/10 blur-3xl" />

        {/* Text content */}
        <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Books to freshen up your bookshelf
          </h1>

          <Link
            href="/listed-books"
            className="btn btn-lg border-none bg-[#23BE0A] px-8 text-white transition-colors hover:bg-[#1da008] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23BE0A]"
          >
            View the list
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative z-10 order-1 flex justify-center lg:order-2 lg:justify-end">
          <Image
            src={banner}
            alt="A stack of books on a shelf"
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="h-auto w-full max-w-md rounded-2xl object-cover shadow-xl lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;