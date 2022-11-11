import React from 'react';

const Top10Songs = ({ countTitles }) => {
  let top10SongTitles = countTitles()
    .slice(0, 10)
    .map((song, index) => {
      return <li key={index}>{`${song[0].toString().slice(8)}`}</li>;
    });

  return (
    <div>
      <ol>{top10SongTitles}</ol>
    </div>
  );
};

export default Top10Songs;
