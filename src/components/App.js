import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { Helmet } from "react-helmet";

class App extends React.Component {
  // if expect an array, then initialize empty array
  state = { images: [] };
  // passing props that is coming from CHILD to PARENT.
  onSearchSubmit = async term => {
    //method 2 use the axios library to wait for request (easier)
    //first arugment is the root url+end point, second arugemnt is parameters of queries to
    //return the term
    //gonna at queries=term at the end of the string URL
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );
    //method 1 to get a response from async request using PROMISE (harder)
    //.then(response => {
    // status 200 means successfull
    //console.log(response.data.results);
    // });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="body">
        <Helmet>
          <style>{"body { background-color: #e6ffe6; }"}</style>
        </Helmet>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
