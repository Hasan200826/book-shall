"use client";

import { BookType } from "@/type/BookType";
import React, {
  createContext,
  useState,
  ReactNode,
} from "react";


type DataContextType = {
  readBook:BookType[];
  setReadBook: React.Dispatch<React.SetStateAction<BookType[]>>;
  WishList:BookType[];
  setWishList: React.Dispatch<React.SetStateAction<BookType[]>>;
};

export const DataProvider = createContext<DataContextType | undefined>(undefined);

function BookData({ children }: { children: ReactNode }) {
  const [readBook, setReadBook] = useState<BookType[]>([]);
  const [WishList, setWishList] = useState<BookType[]>([]);

  const user: DataContextType = {
    readBook,
    setReadBook,
    WishList,
    setWishList,
  };

  return (
    <DataProvider.Provider value={user}>
      {children}
    </DataProvider.Provider>
  );
}

export default BookData;