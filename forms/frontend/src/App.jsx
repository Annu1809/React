import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Forms from './Forms';
import TableComp from './TableComp';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track which record is being edited

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (formData) => {
    if (editingIndex !== null) {
      // Update existing record
      const updatedData = [...tableData];
      updatedData[editingIndex] = formData;
      setTableData(updatedData);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new record
      setTableData([...tableData, formData]);
    }
    toggleModal();
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  const handleUpdate = (index) => {
    setEditingIndex(index);
    toggleModal();
  };

  return (
    <>
      <h1>Click Here to Register</h1>
      <Button color="primary" onClick={() => toggleModal()}>
        Add
      </Button>

      {/* Table Component */}
      <TableComp data={tableData} onDelete={handleDelete} onUpdate={handleUpdate} />

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Registration Form</ModalHeader>
        <ModalBody>
          <Forms
            onSubmit={handleFormSubmit}
            initialData={editingIndex !== null ? tableData[editingIndex] : null}
          />
        </ModalBody>
      </Modal>
    </>
  );
}

export default App;
