export const BOOKS = [
  {
    id: 0,
    image: "/images/recommendations/books/designing-data-applications.jpg",
    title: "Designing Data-Intensive Applications",
    summary: (
      <>
        The backend engineer's bible. I'd argue that, nowadays, falling back on
        well-established system design principles is more important than ever.
        There's no replacement for understanding database internals, event-based
        systems and monolith vs. microservice architectures in the types of
        decisions that LLMs often get wrong.
      </>
    ),
    extended: (
      <>
        "You're absolutely right and I apologise profusely. Of course I should
        have used a Kafka topic here instead of writing it to the local
        filesystem." Don't do this to yourself. Don't delegate critical
        architectural decisions to a probabilistic language model.
      </>
    ),
    footer: <></>,
  },
];
