import Navigation from "../components/navigation";
import Section from "../components/section";

export default function DesignPage() {
  const designData = require("./../data/design-data.json");

  return (
    <>
      <Navigation />

      {designData.map((design) => (
        <Section {...design} />
      ))}
    </>
  );
}
