import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization:
      "Client-ID 94aee17ebe7b7ecd7e462d7ce60ae9f51ae8cb36b6b29396010e815728c10f89"
  }
});
