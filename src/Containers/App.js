import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const onSearchChange = event => {
      this.setState({ searchField: event.target.value });
    };

    const { robots, searchField } = this.state;

    const filteredList = robots.filter(robot => {
      return (
        robot.name
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        robot.email
          .toLocaleLowerCase()
          .includes(searchField.toLocaleLowerCase())
      );
    });

    return !robots.length ? (
      <article class="vh-100 dt w-100 bg-dark-pink">
        <div class="dtc v-mid tc white ph3 ph4-l">
          <h2 class="f6 f2-m f-subheadline-l fw6 tc">LOADING!!!</h2>
        </div>
      </article>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredList} />
        </Scroll>
      </div>
    );
  }
}

export default App;
