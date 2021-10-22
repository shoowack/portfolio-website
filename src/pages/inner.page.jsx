import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Section from "../components/section";
import Footer from "../components/footer";
const contentful = require("contentful");

export default function InnerPage({ type }) {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
    });

    client
      .getEntries({
        content_type: "entry",
        "fields.type": type.toString()
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
      <Navigation />

      {items.map((item) => {
        const {
          title,
          type,
          description,
          gallery,
          backgroundColor
        } = item.fields;

        return (
          <Section
            title={title}
            type={type}
            description={description}
            gallery={gallery}
            backgroundColor={backgroundColor}
          />
        );
      })}

      <Footer />
    </div>
  );
}
