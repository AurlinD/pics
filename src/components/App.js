import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // passing props that is coming from CHILD to PARENT.
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 94aee17ebe7b7ecd7e462d7ce60ae9f51ae8cb36b6b29396010e815728c10f89"
      }
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
