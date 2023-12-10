import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Projecct({ project }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='col-md-3  border-end'>
            <span className={project.infoclasses}>• {project.info}</span>
            <div className='my-4'>
                <Button variant={project.variant} className='container-fluid' onClick={handleShow}>
                    + Add New
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Name of Task</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Create a to do app" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Start Date</label>
                                <input type="date" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Deadline</label>
                                <input type="date" class="form-control" id="inputEmail4" />
                            </div>
                            <select className="form-select" aria-label="Default select example">
                                <option value="" disabled selected>Status</option>
                                <option value="1">In Progress</option>
                                <option value="2">In Review</option>
                                <option value="3">Completed</option>
                            </select>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={() => handleClose()}>
                            Cancel
                        </Button>
                        <Button variant={"primary"} onClick={() => handleClose()}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}