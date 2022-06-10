import React from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleCloseModal}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title className="text-danger">Errors</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-danger">{props.error}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
