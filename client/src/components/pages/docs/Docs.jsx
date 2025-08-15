import "./Docs.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Programmer from "../../../assets/images/programmer.jpg";

function Docs() {
  useEffect(() => {
    document.title = "Lexica Search API";
  }, []);

  return (
    <div className="docs__container">
      <Link to="?prgogrammer_images">
        <img src={Programmer} alt="programmer" />
      </Link>

      <div className="docs__content">
        <h2 style={{ marginBottom: "0.6rem" }}>Lexica Search API</h2>
        <p>
          To use Lexica's search API, create a{" "}
          <span className="blackBkg">GET</span> request with a query parameter{" "}
          <span className="blackBkg">q</span> as your search term. For example,
          to search for the term "apples", you would make a request to:
        </p>

        <p className="blueLink">
          <Link to="https://lexica.art/api/v1/search?q=apples">
            GET https://lexica.art/api/v1/search?q=apples
          </Link>
        </p>

        <p>
          For a reverse image search, you can pass in the URL of an image as the
          query.
        </p>

        <p className="blueLink">
          <Link to="https://lexica.art/api/v1/search?q=https://media.gettyimages.com/photos/crete-senesi-countryside-in-summer-tuscany-italy-picture-id1411845730">
            GET
            https://lexica.art/api/v1/search?q=https://media.gettyimages.com/photos/crete-senesi-countryside-in-summer-tuscany-italy-picture-id1411845730
          </Link>
        </p>

        <h3 style={{ marginTop: "1rem" }}>Search Response</h3>
        <p>
          The API will return a JSON object containing an array of 50 image
          search results.
        </p>

        <div className="docs__json">
          <div>{"{"}</div>

          <div className="line">
            <span className="key">"images"</span>
            <span className="colon">:</span>
            <span className="tab">{"["}</span>
          </div>

          <div style={{ margin: "0 4rem" }}>
            <div>{"{"}</div>
            <div style={{ margin: "0 2.5rem" }}>
              <div>// The ID of the image</div>
              <div style={{ display: "flex" }}>
                <div className="key">"id"</div>
                <div className="colon">:</div>
                <div className="value">
                  "0482ee68-0368-4eca-8846-5930db866b33"
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// URL for the image's gallery</div>
              <div style={{ display: "flex" }}>
                <div className="key">"gallery"</div>
                <div className="colon">:</div>
                <div className="value">
                  "https://lexica.art?q=0482ee68-0368-4eca-8846-5930db866b33"
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// Link to this image</div>
              <div style={{ display: "flex" }}>
                <div className="key">"src"</div>
                <div className="colon">:</div>
                <div className="value">
                  "https://image.lexica.art/md/0482ee68-0368-4eca-8846-5930db866b33"
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>
                // Link to an compressed & optimized version of this image
              </div>
              <div style={{ display: "flex" }}>
                <div className="key">"srcSmall"</div>
                <div className="colon">:</div>
                <div className="value">
                  "https://image.lexica.art/sm/0482ee68-0368-4eca-8846-5930db866b33"
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// The prompt used to generate this image</div>
              <div style={{ display: "flex" }}>
                <div className="key">"prompt"</div>
                <div className="colon">:</div>
                <div className="value">
                  "cute chubby blue fruits icons for mobile game ui "
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// Image dimensions</div>
              <div style={{ display: "flex" }}>
                <div className="key">"width"</div>
                <div className="colon">:</div>
                <div className="value" style={{ color: "#e09142" }}>
                  512
                </div>
                ,
              </div>

              <div style={{ display: "flex" }}>
                <div className="key">"height"</div>
                <div className="colon">:</div>
                <div className="value" style={{ color: "#e09142" }}>
                  512
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// Seed</div>
              <div style={{ display: "flex" }}>
                <div className="key">"seed"</div>
                <div className="colon">:</div>
                <div className="value">"1413536227"</div>,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// Whether this image is a grid of multiple images</div>
              <div style={{ display: "flex" }}>
                <div className="key">"grid"</div>
                <div className="colon">:</div>
                <div className="value">false</div>,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// The model used to generate this image</div>
              <div style={{ display: "flex" }}>
                <div className="key">"model"</div>
                <div className="colon">:</div>
                <div className="value">"stable-diffusion"</div>,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// Guidance scale</div>
              <div style={{ display: "flex" }}>
                <div className="key">"guidance"</div>
                <div className="colon">:</div>
                <div className="value">7</div>,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// The ID for this image's prompt</div>
              <div style={{ display: "flex" }}>
                <div className="key">"promptid"</div>
                <div className="colon">:</div>
                <div className="value">
                  "d9868972-dad8-477d-8e5a-4a0ae1e9b72b"
                </div>
                ,
              </div>
            </div>

            <div style={{ margin: "0 2.5rem" }}>
              <div>// Whether this image is classified as NSFW</div>
              <div style={{ display: "flex" }}>
                <div className="key">"nsfw"</div>
                <div className="colon">:</div>
                <div className="value">false</div>,
              </div>
            </div>

            <div>{"}"}</div>
          </div>
          <div>{"}"}</div>
        </div>
        <h3 style={{ marginTop: "2rem" }}>Support and more</h3>

        <p>
          For API support or to share what you're building with the Lexica API,
          check out the #development channel in the Lexica Discord.
        </p>

        <Link to="https://discord.com/invite/bMHBjJ9wRh">
          <button className="discordBtn">
            <svg
              stroke="currentColor"
              fill="#888"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class="text-base mr-2"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
            </svg>
            Join the Discord
          </button>
        </Link>

        <div style={{ margin: "2rem 0" }}> </div>
      </div>
    </div>
  );
}

export default Docs;
