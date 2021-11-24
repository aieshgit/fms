import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleCloseModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Delete Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this record ?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleCloseModal}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            props.handleDelete(props.id);
            props.handleCloseModal();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
