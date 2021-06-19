import React from 'react';
import { useAppDispatch } from '../app/hooks';
import {Button, Modal} from 'react-bootstrap'
import { selectMarker } from '../redux/MapReducer';

const InfoBox = ({open, info}) => {

    const dispatch = useAppDispatch();

    return (
        <>
        <Modal
          show={open}
          onHide={() => dispatch(selectMarker(-1))}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title><p>Name: { (info ? info.name: '')}</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Type: { (info ? info.type: '')}</p>
            <p>Population: { (info ? info.population: '')}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" 
            onClick={() => dispatch(selectMarker(-1))}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default InfoBox;