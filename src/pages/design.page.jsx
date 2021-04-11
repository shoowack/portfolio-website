import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Section from "../components/section";
import getPosts from "../getposts";

export default function DesignPage() {
  const designData = require("./../data/design-data.json");
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts.then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <Navigation />

      {designData.map((design) => (
        <Section {...design} />
      ))}
    </>
  );
}
