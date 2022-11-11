import './App.css';
import { useEffect, useState } from 'react';
import logo from './/Images/youtube.png';
import Top10Songs from './Top10Songs';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [playCount, setPlayCount] = useState(0);
  const [showTop10, setShowTop10] = useState(false);
  const [showUniqueSongs, setShowUniqueSongs] = useState(false);
  const [totalClicks, setTotalClicks] = useState(false);
  const [sortedPlays, setSortedPlays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/plays')
      .then(response => response.json())
      .then(data => {
        setPlayCount(data.length);
        setSortedPlays(sortPlays(data));
      });
  }, []);

  const sortPlays = totalPlays => {
    let songList = {};

    totalPlays.map(play => {
      if (!(play.title in songList)) {
        return (songList = { ...songList, [play.title]: 1 });
      } else {
        return (songList[play.title] = songList[play.title] + 1);
      }
    });

    let sortedPlaysByListens = [];

    for (let song in songList) {
      sortedPlaysByListens.push([song, songList[song]]);
    }
    sortedPlaysByListens.sort(function (a, b) {
      return b[1] - a[1];
    });
    return sortedPlaysByListens;
  };

  const handleTop10Click = () => {
    setShowTop10(showTop10 => !showTop10);
  };

  const handleUniqueCountClick = () => {
    setShowUniqueSongs(showUniqueSongs => !showUniqueSongs);
  };

  const handleTotalClicks = () => {
    setTotalClicks(totalClicks => !totalClicks);
  };

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <h1>YouTube Music Rewind</h1>
        <TypeAnimation
          sequence={[
            'Ready for your 2022 rewind?',
            2000,
            "Let's see how you listened",
            2000,
          ]}
          wrapper="span"
          speed={40}
          cursor={true}
          repeat={3}
          style={{ fontSize: '1.2em' }}
          className="animation"
        />
        <button onClick={handleTop10Click}>
          <Top10Songs sortedPlays={sortedPlays} />
        </button>

        <button onClick={handleUniqueCountClick}>
          {showUniqueSongs ? sortedPlays.length : 'Total Songs Listened To'}
        </button>

        <button onClick={handleTotalClicks}>
          {totalClicks ? playCount : 'Total Streams'}
        </button>
      </div>
    </div>
  );
}

export default App;
