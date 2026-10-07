"use client"

import { Book } from '@/components/shared/BookCard';
import React, { createContext, useState } from 'react';

interface IbookContext {
    readBooks : Book[] ;
        setReadBooks : React.Dispatch<React.SetStateAction<Book[]>> ;
        wishlist : Book[] ; 
        setWishList : React.Dispatch<React.SetStateAction<Book[]>> ; 
}

export const BookContext = createContext<IbookContext>({
        readBooks : [] , 
        setReadBooks : () => {} ,
        wishlist : [] ,
        setWishList : () => {} ,
}) ;

const BookProvider = ( {children} : {children : React.ReactNode} ) => {

    const [readBooks , setReadBooks] = useState<Book[]>([]) ; 
    const [wishlist , setWishList] = useState<Book[]>([])  ;
    
    const sharedData = {
        readBooks ,
        setReadBooks , 
        wishlist , 
        setWishList ,
    } ; 

    return (
        <BookContext.Provider value={sharedData}> {children} </BookContext.Provider>
    );
};

export default BookProvider;