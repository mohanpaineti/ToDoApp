import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { sidebarLinks, projcts } from "./utils/data";
import Projecct from "./Components/Projecct";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Get the project name from the input field
    const projectName = document.getElementById("projectName").value;

    // Check if projectName is not empty
    if (projectName.trim() !== "") {
      // Make a POST request to the API to create a new project
      fetch("http://127.0.0.1:8000/api/projects/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: projectName }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the API, if needed
          window.location.reload();
          console.log("Project created successfully:", data);
        })
        .catch((error) => console.error("Error creating project:", error));
    }
  };

  // const projectsupdate = () => {};
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch TODO data from an API
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Run once on component mount

  return (
    <>
      <div className="row">
        <aside className="col-md-2 mx-0 vh-100 border-end px-0 mx-0">
          <div className="d-flex gap-2 h-20 justify-content-center align-items-center py-3 border-bottom">
            <img src="" alt="" />
            <h2>Task Board</h2>
          </div>
          <ul className="list-unstyled mt-5 pb-5 align-items-center px-4 border-bottom">
            {projects.map((link) => (
              <li
                key={link.id}
                className={`px-4 py-2 my-2 rounded cursor-pointer ${
                  link.id === 1 ? "bg-light" : ""
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
          <button className="btn text-blue mt-2 px-4" onClick={handleShowModal}>
            + Add a new Project
          </button>
        </aside>
        <div className="col-md-10 px-0">
          <h2 className="d-flex gap-2 h-20 align-items-center py-3 px-4 border-bottom border-left mx-0">
            My Projects
          </h2>
          <div className="row pt-4 px-4">
            {projcts.map((project) => (
              <Projecct key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for adding a new project */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ... your form or content for adding a new project ... */}
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="projectName" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                placeholder="Enter project name"
              />
            </div>
            {/* Add more form fields as needed */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
