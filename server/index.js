import express from "express";
import fs from "node:fs";
import { imageSizeFromFile } from "image-size/fromFile";

// const __dirname = path.dirname(import.meta.url).concat("/public");
const PORT = process.env.PORT;
const ADDRESS = process.env.ADDRESS;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.end("The Image-Server is running!");
});

app.get("/api/v1", (req, res) => {
  res.set("Content-Type", "application/json");
  res.set("Access-Control-Allow-Origin", "*");

  fs.readdir("public/ai-images", async (err, files) => {
    if (err) return res.status(500).send("Failed to read directory");

    let data = { images: [] };

    for (const key in files) {
      let image = {};
      let dimensions = null;

      image["id"] = Math.trunc(Math.random() * 1000000).toString(16);
      image["src"] = `http://${ADDRESS}:${PORT}/ai-images/${files[key]}`;
      image["prompt"] = "placeholder for prompt";

      try {
        dimensions = await imageSizeFromFile(
          `public/ai-images/${files[key]}`
        );
        image["width"] = dimensions.width;
        image["height"] = dimensions.height;
        image["type"] = dimensions.type;
      } catch (error) {
        throw error;
      }

      image["model"] = "stable-diffusion";
      data.images.push(image);
    }
    res.status(200).json(data);
  });
});

app.all(/(.*)/, (req, res) => {
  res.status(404).send("404! Page not found");
});

const server = app.listen(PORT, ADDRESS, () => {
  console.log("Server Info: ", server.address());
});
