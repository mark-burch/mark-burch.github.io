import Widget from "@/components/widget";

export default function WidgetBook() {
  return (
    <Widget
      title="Recommended Book"
      image="/images/book.png"
      content={
        <>
          A line or two about the book here — the author, the central idea, and
          what made it worth reading.
        </>
      }
      Footer={
        <>
          Read it:{" "}
          <a
            className="font-medium text-sky-500 hover:underline"
            href="#"
            target="_blank"
          >
            Link
          </a>
        </>
      }
    />
  );
}
