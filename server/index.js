import express from "express";
import cors from "cors";
import fs from "node:fs";
import { imageSizeFromFile } from "image-size/fromFile";

const PORT = process.env.PORT;
const ADDRESS = process.env.ADDRESS;
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://${ADDRESS}:${PORT}`
    : process.env.PUBLIC_URL;

const app = express();
app.use(express.static("public"));

const allowedOrigins =
  process.env.NODE_ENV === "development"
    ? ["https://lexica-art-clone.onrender.com", "http://localhost:5173"]
    : [
        "https://lexica-art-clone.onrender.com",
        "https://setautomata.github.io",
      ];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.end("The Image-Server is running!");
});

app.get("/api/v1", (req, res) => {
  res.set("Content-Type", "application/json");

  fs.readdir("public/ai-images", async (err, files) => {
    if (err) return res.status(500).send("Failed to read directory");

    let data = { images: [] };

    for (const key in files) {
      let image = {};
      let dimensions = null;

      image["id"] = Math.trunc(Math.random() * 1000000).toString(16);
      image["src"] = `${BASE_URL}/ai-images/${files[key]}`;
      image["prompt"] = "placeholder for prompt";

      try {
        dimensions = await imageSizeFromFile(`public/ai-images/${files[key]}`);
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
