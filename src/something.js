import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = async () => {
  try {
    return fs.readdirSync("../public/_designs/design").map((fileName) => {
      const post = fs.readFileSync(
        path.resolve("../public/_designs/design", fileName),
        "utf-8"
      );

      return grayMatter(post);
    });
  } catch (e) {
    return [];
  }
};

export default getAllPosts();
