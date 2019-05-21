import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please select a song.</div>;
  }
  return (
    <div className="ui card raised">
      <div className="content">
        <h3 className="center aligned">Song Details</h3>
        <p>Title:{' '}{song.title}</p>
        <p>Duration:{' '}{song.duration}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
