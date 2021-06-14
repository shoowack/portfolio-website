import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Section from "../components/section";
import getPosts from "../getposts";

export default function DesignPage() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts.then((posts) => setPosts(posts)).then(setIsLoading(false));
  }, [posts]);

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

      {posts?.map((post, i) => (
        <Section key={i} {...post} />
      ))}
    </>
  );
}
