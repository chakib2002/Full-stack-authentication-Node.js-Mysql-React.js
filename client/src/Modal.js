import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function MyVerticallyCenteredModal({onHide, show, message}) {
    return (
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            {message ==="user registered successfully" ? "Success" : "Error"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{message}</h4>
          <p>
            {message ==="Wrong username/password combination" ? "Please check the if you are using the right username and Password." : `Your registration wasn't valid, please register again .Thank's for your understanding.`}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }