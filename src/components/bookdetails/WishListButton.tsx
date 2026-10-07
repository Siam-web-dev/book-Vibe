"use client"

import React, { useContext } from "react";
import { Book } from "../shared/BookCard";
import { BookContext } from "@/context/BookContext";
import { toast } from "react-toastify";



const WishListButton = ({book} : {book: Book}) => {

    const { wishlist , setWishList , } = useContext(BookContext);

    const handleWishList = () => {
      console.log("button treggurd" , book) ;
        setWishList([...wishlist , book]) ;
        toast.success(`${book.bookName} to wish list`)
    }
  return (
    <button
    onClick={ () => handleWishList() }
    
      type="button"
      className="btn border-none bg-[#23BE0A] px-8 text-white transition-colors hover:bg-[#1da008]"
    >
      Wish List
    </button> 
  );
};

export default WishListButton;
