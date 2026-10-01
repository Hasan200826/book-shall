"use client";

import React, {
  createContext,
  useState,
  ReactNode,
} from "react";

type Book = {
  id: number;
  title: string;
};

type DataContextType = {
  readBook: Book[];
  setReadBook: React.Dispatch<React.SetStateAction<Book[]>>;
  WishList: Book[];
  setWishList: React.Dispatch<React.SetStateAction<Book[]>>;
};

export const DataProvider = createContext<DataContextType | undefined>(undefined);

function BookData({ children }: { children: ReactNode }) {
  const [readBook, setReadBook] = useState<Book[]>([]);
  const [WishList, setWishList] = useState<Book[]>([]);

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