import React, { Component } from "react";
import "./App.css";
import Album from "./Album.js";

import months from "./months.js";

class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="pad-s grid__item grid__span2">
          <p>
            Playlists By <a href="https://www.seelay.in">SEELAY</a>
          </p>

          <p>
            Tap on a cover to open its Spotify playlist, or read some
            <a href="https://www.seelay.in/blog"> blogs </a> just in case you
            change your mind.
          </p>
        </div>
        {months.map((month) => (
          <Album month={month.month} url={month.url} cover={month.cover} />
        ))}
      </div>
    );
  }
}

export default App;
