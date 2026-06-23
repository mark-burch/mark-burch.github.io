import { WEBSITES } from "@/app/resources/websites";
import Widget from "@/components/widget";

export default function WidgetWebsite() {
  const website = WEBSITES[0];

  return (
    <Widget
      title="Recommended Website"
      image={website.image}
      content={website.summary}
      Footer={website.footer}
    />
  );
}
