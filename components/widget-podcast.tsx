import Widget from "@/components/widget";
import { PODCASTS } from "@/app/resources/podcasts";

export default function WidgetPodcast() {
  const podcast = PODCASTS[0];

  return (
    <Widget
      title="Recommended Podcast"
      image={podcast.image}
      content={podcast.summary}
      Footer={podcast.footer}
    />
  );
}
