import axios from "axios";
import clientid from "./secret";

export default axios.create({
  baseURL: "https://api.twitch.tv/kraken/",
  headers: { "Client-ID": clientid, accept: "application/vnd.twitchtv.v5+json" }
});
