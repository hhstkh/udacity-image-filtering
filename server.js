import express from "express";
import bodyParser from "body-parser";
import { filterImageFromURL, deleteLocalFiles, isValidImageUrl} from "./util/util.js";

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

/**************************************************************************** */

//! END @TODO1

app.get("/filteredimage", async (req, res) => {
  try {
    console.log("Start handle request, url: " + req.url);
    const imageUrl = req.query.image_url;
    
    const isValidUrl = isValidImageUrl(imageUrl);

    if (!isValidUrl) {
      return res.status(400).send("Sorry, please input valid url");
    }

    const localImgUrl = await filterImageFromURL(imageUrl);

    console.log("Image is written to path: " + localImgUrl);

    res.status(200).sendFile(localImgUrl, err => {
      if (err) {
        console.log(err);
        return res.status(500).send("Sorry, server can't download this image");
      } else {
        console.log("Clean up file: " + localImgUrl);

        deleteLocalFiles([localImgUrl]);
        console.log("End filter image");
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Sorry, server can't download this image");
  }
});

// Root Endpoint
// Displays a simple message to the user
app.get("/", async (req, res) => {
  res.send("try GET /filteredimage?image_url={{}}");
});

// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});
