import './App.css';
import { useEffect, useState } from 'react';
import logo from './/Images/youtube.png';

function App() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/plays')
      .then(response => response.json())
      .then(data => setPlays(data));
  }, []);

  const countTitles = () => {
    let songList = {};

    plays.map(play => {
      if (!(play.title in songList)) {
        return (songList = { ...songList, [play.title]: 1 });
      } else {
        return (songList[play.title] = songList[play.title] + 1);
      }
    });

    let sortedPlays = [];

    for (let song in songList) {
      sortedPlays.push([song, songList[song]]);
    }
    sortedPlays.sort(function (a, b) {
      return b[1] - a[1];
    });
    return sortedPlays.slice(0, 10).map(song => {
      return <li>{`${song[0].toString().slice(8)} Plays: ${song[1]}`}</li>;
    });
  };

  console.log(countTitles());

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <h1>YouTube Rewind</h1>
        <p>Your Top 10 Listened to Songs</p>
        <ol>{countTitles()}</ol>
        {/* <button onClick={handleClick}>My Top 10</button> */}
      </div>
    </div>
  );
}

export default App;
