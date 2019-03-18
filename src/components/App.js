import React from 'react';

import SongList from './SongList';


const App = () => {
  return ( 
  <div className="ui container relaxed grid">
    <div className="ui row">
      <div className="column eight wide">
        <SongList />
      </div>
    </div>
  </div>
  );
};

export default App;

// a named export needs to be imported with {}