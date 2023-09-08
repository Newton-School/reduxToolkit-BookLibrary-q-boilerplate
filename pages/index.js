import AddBook from "@/components/AddBook";
import BookList from "@/components/BookList";

export default function Home() {
  return (
    <>
      <h1>Book Library App</h1>
      <AddBook />
      <BookList />
    </>
  );
}
