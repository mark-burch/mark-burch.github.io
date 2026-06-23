import Widget from "@/components/widget";

export default function WidgetWebsite() {
  return (
    <Widget
      title="Recommended Website"
      image="/images/book.png"
      content={
        <>
          A line or two about the website here — what it offers and why you keep
          coming back to it.
        </>
      }
      Footer={
        <>
          Visit:{" "}
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
