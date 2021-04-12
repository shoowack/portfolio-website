const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../public/_designs/design");
let postlist = [];

const getPosts = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            console.log(obj);

            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        post = {
          id: i + 1,
          layout: metadata.layout ? metadata.layout : "No layout given",
          title: metadata.title ? metadata.title : "No title given",
          date: metadata.date ? metadata.date : "No date given",
          galleryImages: metadata.galleryImages
            ? metadata.galleryImages
            : "No galleries",
          bgColor: metadata.bgColor
            ? metadata.bgColor.replace(/['"]+/g, "")
            : "No Background color specified",
          content: content ? content : "No content given"
        };
        postlist.push(post);
      });
    });
  });
  return postlist;
};

export default getPosts();
