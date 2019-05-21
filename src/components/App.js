import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="row mt-5" style={{marginTop: "3rem"}}>
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
