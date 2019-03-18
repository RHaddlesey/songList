import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
              <button className="ui button primary">
                Select
              </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);


// WHAT DOES CONNECT DO?
/* If we had this code, then connect calls the function in the function

function connect() {
  return function() {
    return 'Hi there!';
  }
}

connect() will show nothing but
connect()() will render Hi there!
() returns the function from redux ()() then invokes the function that got returned
*/