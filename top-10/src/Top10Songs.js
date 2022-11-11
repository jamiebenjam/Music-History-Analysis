import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Top10Songs = ({ countTitles }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let top10SongTitles = countTitles()
    .slice(0, 10)
    .map((song, index) => {
      return <li key={index}>{`${song[0].toString().slice(8)}`}</li>;
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
            <Modal.Title>Most Listened to Songs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ol>{top10SongTitles}</ol>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Top10Songs;
