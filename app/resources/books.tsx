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
  {
    id: 1,
    image: "/images/recommendations/books/team-topologies.jpg",
    title: "Team Topologies",
    summary: (
      <>
        The book broadly discusses different software engineering team
        archetypes (for example, product stream-aligned teams and platform
        teams) and how to incentivise them in the right manner in order to
        prevent silos and avoid the very common trap of shipping your
        organisation's communication structure (Conway's Law).
      </>
    ),
    extended: (
      <>
        One aspect that AI has not encroached on (yet) is the actual
        organisational structures and team compositions in software companies.
        The book does a good job of formalising the art and, perhaps more
        importantly, lays out a bunch of anti-patterns that we've all observed.
      </>
    ),
    footer: <></>,
  },
];
