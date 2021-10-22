import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Section from "../components/section";
import Footer from "../components/footer";
import useContentfulIntegration from "./../hooks/use-contentful-integration";

export default function InnerPage({ type }) {
  const [items, setItems] = useState();
  const [navLinks, setNavLinks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const client = useContentfulIntegration();

  useEffect(() => {
    client
      .getEntries({
        content_type: "headerLinks"
      })
      .then((entry) => {
        setNavLinks(entry);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    client
      .getEntries({
        content_type: "entry",
        "fields.type": type.toString(),
        order: "fields.order"
      })
      .then((entry) => {
        setItems(entry.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setItems, type]);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div class="wrapper" style={{ marginBottom: "355px" }}>
      <Navigation {...navLinks} />

      {items?.map((item) => (
        <Section {...item.fields} />
      ))}

      <Footer />
    </div>
  );
}
