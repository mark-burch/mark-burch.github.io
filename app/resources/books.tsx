export const BOOKS = [
  {
    id: 0,
    image: "/images/recommendations/books/designing-data-applications.webp",
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
    image: "/images/recommendations/books/team-topologies.webp",
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
        organisational structure and team composition in software companies. The
        book does a good job of formalising the art and, perhaps more
        importantly, lays out a bunch of anti-patterns that we've all observed.
      </>
    ),
    footer: <></>,
  },
  {
    id: 2,
    image: "/images/recommendations/books/empire-of-ai.webp",
    title: "Empire of AI",
    summary: (
      <>
        Karen Hao's Empire of AI is an exploration of how OpenAI shipped a
        beautiful mission statement and then quietly rebranded itself a
        non-profit promising open, humanity-benefiting research before mutating
        into a closed, hyper-scaling commercial juggernaut. Her thesis is that
        the race to AGI runs on colonial-style extractive practice: vacuum up
        the world's data without consent, lean on cheap exploited labour, and
        burn egregious amounts of compute and resources to brute-force
        capability.
      </>
    ),
    extended: (
      <>
        The colonialism analogy was a bit heavy-handed and some events are
        probably over-dramatised (for example, Altman's exit from and
        reinstatement into OpenAI). Worth a read, still.
      </>
    ),
    footer: <></>,
  },
];
