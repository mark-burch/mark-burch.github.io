import Widget from "@/components/widget";
import { BOOKS } from "@/app/resources/books";

export default function WidgetBook() {
  const book = BOOKS[0];

  return (
    <Widget
      title="Recommended Book"
      image={book.image}
      content={book.summary}
      Footer={book.footer}
    />
  );
}
