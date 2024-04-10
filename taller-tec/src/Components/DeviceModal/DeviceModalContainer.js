import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeviceModalContainer = ({ isModalOpened, setIsModalOpened }) => {
  return (
    <Modal show={isModalOpened}>
      <Modal.Header closeButton onClick={() => setIsModalOpened(false)}>
        <Modal.Title>Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
        <div className="mb-3">
          <label htmlFor="deviceModel" className="form-label">Model</label>
          <input type="text" className="form-control" id="deviceModel" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="deviceColor" className="form-label">Color</label>
          <input type="text" className="form-control" id="deviceColor"/>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      </Modal.Body>
    </Modal>
  );
};

export default DeviceModalContainer;
