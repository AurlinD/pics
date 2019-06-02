import React from "react";

//class based component as there is a state change depending
//on user's input

// input creates a textbox for us to use in App

//onInputChange callback has no () attached to it as we want it to be called
//at some point of time and not every time image is rendered. VERY COMMON ERROR

class SearchBar extends React.Component {
  // the name is community convention onInputClick,onInputChange,onInputSubmit
  state = { term: "" };

  // prevents reset of image when enter is clicked which is default
  //gives error if used, ** check what is left of the
  //function when this is called and assign it instead of THIS
  //BEFORE WHICH IS FALSE
  // onFormSubmit: function(event) {
  //    event.preventDefault();
  //   console.log(this.state.term);
  //}

  // this is how to fix the undefined error if you need more than 1 line of code for user response such as onFormSubmit
  onFormSubmit = event => {
    event.preventDefault();
    //when using props in a class based component, include THIS.
    this.props.onSubmit(this.state.term);
  };

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
