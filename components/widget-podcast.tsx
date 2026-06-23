import Widget from "@/components/widget";

export default function WidgetPodcast() {
  return (
    <Widget
      title="Recommended Podcast"
      image="/images/recommendations/cal-newport-deep-questions.jpg"
      content={
        <>
          Hosted by computer-science professor and bestselling author Cal
          Newport, the podcast presents, in my opinion, one of the most balanced
          and nuanced takes on AI that I've seen.
        </>
      }
      Footer={
        <>
          Favourite episodes:{" "}
          <a
            className="font-medium text-sky-500 hover:underline"
            href="https://www.thedeeplife.com/podcasts/episodes/has-ai-conquered-coding-its-not-so-simple-ai-reality-check/"
            target="_blank"
          >
            Has AI conquered coding?
          </a>
          ,{" "}
          <a
            className="font-medium text-sky-500 hover:underline"
            href="https://www.thedeeplife.com/podcasts/episodes/are-we-about-to-lose-control-of-ai-ai-reality-check/"
            target="_blank"
          >
            Are we about to lose control of AI?
          </a>
          ,{" "}
          <a
            className="font-medium text-sky-500 hover:underline"
            href="https://www.thedeeplife.com/podcasts/episodes/do-i-need-a-brain-gym-monday-advice/"
            target="_blank"
          >
            Do I need a brain gym?
          </a>
        </>
      }
    />
  );
}
