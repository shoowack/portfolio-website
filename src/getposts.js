import matter from "gray-matter";
import yaml from "js-yaml";

const path = require("path");
const fs = require("fs");

const getPosts = async () => {
  const dirPath = path.join(__dirname, `../public/_designs/design`);
  // Get file names under /posts
  const fileNames = fs.readdirSync(dirPath);

  const allPostsData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA })
        }
      });

      const matterData = matterResult.data;

      const slug = fileName.replace(/\.md$/, "");

      // Validate slug string
      // if (matterData.slug !== slug) {
      //   throw "slug field not match with the path of its content source";
      // }

      return matterResult;
    });

  // // Sort posts by date
  // postCache = allPostsData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  // return postCache;
  return allPostsData;
};

export default getPosts();
