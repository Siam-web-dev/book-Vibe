"use client"

import React, { useContext } from "react";
import { Book } from "../shared/BookCard";
import { BookContext } from "@/context/BookContext";
import { toast } from "react-toastify";



const ReadButton = ({book} : {book: Book}) => {

    const { readBooks , setReadBooks } = useContext(BookContext);

    const handleReadBook = () => {
      console.log("button treggurd" , book) ;
        setReadBooks([...readBooks , book]) ;
        toast.success(`${book.bookName} added to Read`)
    }
  return (
    <button
    onClick={ () => handleReadBook() }
      type="button"
      className="btn border-none bg-[#23BE0A] px-8 text-white transition-colors hover:bg-[#1da008]"
    >
      Read
    </button> 
  );
};

export default ReadButton;
