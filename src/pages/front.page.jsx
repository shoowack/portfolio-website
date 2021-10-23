import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useContentfulIntegration from "./../hooks/use-contentful-integration";

export default function FrontPage() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const client = useContentfulIntegration();

  useEffect(() => {
    client
      .getEntries({
        content_type: "section"
      })
      .then((entry) => {
        setItems(entry.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setItems]);

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
    <div className="site-main">
      {items.map((section, index) => {
        const {
          link,
          openInNewTab,
          title,
          subscript,
          superscript,
          backgroundImage: {
            fields: {
              file: { url }
            }
          }
        } = section.fields;

        return (
          <Link
            to={link}
            target={openInNewTab ? "_blank" : ""}
            className="section"
            key={index}
          >
            {title && subscript && (
              <div className="section-title">
                {title && <h1>{title}</h1>}
                {subscript && <h3>{subscript}</h3>}
              </div>
            )}
            {superscript && (
              <div className="section-description">
                <p>{superscript}</p>
              </div>
            )}
            {url && <img className="section-bg-img" src={url} alt="" />}
          </Link>
        );
      })}
    </div>
  );
}
