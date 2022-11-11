import './App.css';
import { useEffect, useState } from 'react';
import logo from './/Images/youtube.png';
import Top10Songs from './Top10Songs';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [plays, setPlays] = useState([]);
  const [showTop10, setShowTop10] = useState(false);
  const [showUniqueSongs, setShowUniqueSongs] = useState(false);
  const [totalClicks, setTotalClicks] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/plays')
      .then(response => response.json())
      .then(data => setPlays(data));
  }, []);

  //object with key value pairs of all songs
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
    return sortedPlays;
  };

  const handleTop10Click = () => {
    console.log('clicked');
    setShowTop10(showTop10 => !showTop10);
  };

  const handleUniqueCountClick = () => {
    console.log('clicked');
    console.log(countTitles());
    setShowUniqueSongs(showUniqueSongs => !showUniqueSongs);
  };

  const handleTotalClicks = () => {
    console.log('clicked');
    console.log(plays);
    setTotalClicks(totalClicks => !totalClicks);
  };

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <h1>YouTube Music Rewind</h1>
        <TypeAnimation
          sequence={['See how you listened!']}
          wrapper="span"
          speed={20}
          cursor={true}
          repeat={3}
          style={{ fontSize: '1.2em' }}
          className="animation"
        />
        <button onClick={handleTop10Click}>
          <Top10Songs countTitles={countTitles} />
        </button>

        <button onClick={handleUniqueCountClick}>
          {showUniqueSongs ? countTitles().length : 'Unique Song Listens'}
        </button>

        <button onClick={handleTotalClicks}>
          {totalClicks ? plays.length : 'Total Streams'}
        </button>
      </div>
    </div>
  );
}

export default App;
