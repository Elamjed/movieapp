import React from 'react'
import '../add/add.css'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {useState} from 'react'

const Add = ({addMovie}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movie,setMovie]= useState(
        {
            Title: "",
            Year: "",
            Rate: "",
            Type: "",
            Poster:""
        }
    )
    const handleOnchange =(e)=>{
        setMovie({...movie,[e.target.name]:e.target.value})
    }
            return (
            <>
            <Button className="addbtn" variant="primary" onClick={handleShow}>Add Movie</Button>
             <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <input  type="text" placeholder="Title" name=" " onChange={handleOnchange}/>
                  <input  type="text" placeholder="Year" name=" " onChange={handleOnchange}/>
                  <input  type="text" placeholder="Rate"name=" "  onChange={handleOnchange}/>
                  <input  type="text" placeholder="Type" name=" " onChange={handleOnchange}/>
                  <input  type="text" placeholder="Poster"name=" " onChange={handleOnchange}/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={()=> {
                    addMovie(movie);
                    setMovie(
                        {
                            Title: "",
                            Year: "",
                            Rate: "",
                            Type: "",
                            Poster:""
                        }

                    )
                    handleClose()}}>ADD</Button>
              </Modal.Footer>
            </Modal>

</>
            )
}

export default Add
