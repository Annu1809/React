import React from 'react';
import { Table, Button } from 'reactstrap';

function TableComp({ data, onDelete, onUpdate }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{row.email}</td>
            <td>{row.name}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.phone}</td>
            <td>
              <Button
                color="warning"
                size="sm"
                className="me-2"
                onClick={() => onUpdate(index)}
              >
                Update
              </Button>
              <Button
                color="danger"
                size="sm"
                onClick={() => onDelete(index)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComp;
