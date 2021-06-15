import fs from "fs";
import matter from "gray-matter";
import path from "path";

const dirPath = path.join(__dirname, "../public/_designs/design");
let postlist = [];

const getPosts = async () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        // Use gray-matter to parse the post metadata section

        const matterResult = matter(contents);

        post = {
          id: i + 1,
          layout: matterResult.data.layout
            ? matterResult.data.layout
            : "No layout given",
          title: matterResult.data.title
            ? matterResult.data.title
            : "No title given",
          date: matterResult.data.date
            ? matterResult.data.date
            : "No date given",
          bgColor: matterResult.data.bgColor
            ? matterResult.data.bgColor
            : "No background color given",
          galleryImages: matterResult.data.galleryImages
            ? matterResult.data.galleryImages
            : "No gallery images",
          content: matterResult.content
            ? matterResult.content
            : "No content given"
        };

        postlist.push(post);
      });
    });
  });

  return postlist;
};

export default getPosts();
