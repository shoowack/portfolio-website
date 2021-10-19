import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import RichText from "@madebyconnor/rich-text-to-jsx";
const contentful = require("contentful");

export default function DesignPage() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    client
      .getEntries({
        content_type: "entry",
        "fields.type": "Design"
      })
      .then((entry) => {
        setItems(entry.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
    <>
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
          <section style={{ backgroundColor: `#${backgroundColor}` }}>
            <h2>{title}</h2>
            <div className="desc">
              <RichText richText={description} />
            </div>
            {gallery?.map((item) => {
              const { title, type, images } = item.fields;

              return (
                <>
                  <h3>{title}</h3>
                  {images?.map((image) => {
                    const {
                      file: { url }
                    } = image.fields;

                    return <img src={url} alt="" />;
                  })}
                </>
              );
            })}
          </section>
        );
      })}
    </>
  );
}
