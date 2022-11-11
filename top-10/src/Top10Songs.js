import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Top10Songs = ({ sortedPlays }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(sortedPlays);

  let top10SongTitles = sortedPlays.slice(0, 10).map((song, index) => {
    return <li key={index}>{`${song[0].toString().slice(8)}`}</li>;
  });

  let top10SongCount = sortedPlays.slice(0, 10).map((song, index) => {
    return <li key={index}>{`${song[1]}`}</li>;
  });

  return (
    <div>
      <>
        <button onClick={handleShow}>Top 10 Songs</button>

        <Modal
          className="modal"
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              Song & Number of Streams
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="ol-div"></div>
            <div className="ol-div">
              {/* <p>Songs</p> */}
              <ol>{top10SongTitles}</ol>
              {/* <p className="listens-header">Number of Listens</p> */}
              <ul className="listens-count">{top10SongCount}</ul>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Top10Songs;
