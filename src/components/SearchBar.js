import React from "react";

//class based component as there is a state change depending
//on user's input

// input creates a textbox for us to use in App

//onInputChange callback has no () attached to it as we want it to be called
//at some point of time and not every time image is rendered. VERY COMMON ERROR

class SearchBar extends React.Component {
  // the name is community convention onInputClick,onInputChange,onInputSubmit
  state = { term: "" };

  onFormSubmit(event) {
    // prevents reset of image when enter is clicked which is default
    event.preventDefault();

    //gives error if used, ** check what is left of the
    //function when this is called and assign it instead of THIS
    //console.log(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
