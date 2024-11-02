import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ConfirmationModal {
    handleAction: () => void;
    show?: boolean;
    onHide?: () => void;
  }
const ConfirmationModal: React.FC<ConfirmationModal> = ({handleAction, show, onHide}) => {
  
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your Blog?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="danger" onClick={handleAction}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmationModal