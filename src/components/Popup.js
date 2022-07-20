import React from "react";
import { Modal, Button, Container, Col, Row} from 'react-bootstrap';

const Popup = (props) => {
  
    return (
   <>
   

      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-70w"
        style={{backgroundColor: `${ props.modalData?.color }99` }}
      >
        
        <Modal.Body >
          <Container>
          <Row>
            <Col md={6}>
            <img style={{maxWidth: "100%", maxHeight: "60vh", borderRadius: "5px"}} src={props.modalData?.urls?.full} alt="Detail"/>
            
            </Col>
            <Col md={6}>
            <h2>Updated By:{props.modalData?.user?.name} (@{props.modalData?.user?.id})</h2>
            <hr/>
            <h6>Upload Date: {props.modalData?.created_at}</h6>
            <hr/>
            {props.modalData?.description ? (
              <>
              <h4>description:</h4>
              <h5>{props.modalData?.description } </h5>
              <hr />
              </>
              
            ) : false}
            <br />
            <h6>Width: {props.modalData?.width}</h6>
            <h6>Height: {props.modalData?.height}</h6>
            
           
            </Col>
          </Row>
            
          
          </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary" style= {{backgroundColor: props.modalData?.color}} href={props.modalData?.links?.download} target="_blank">Download</Button>
        </Modal.Footer>
      </Modal>
   
   
   </>
    )
}

export default Popup;