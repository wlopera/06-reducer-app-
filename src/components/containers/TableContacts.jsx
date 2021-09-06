import React from "react";

const TableContacts = ({ contacts = [], dispatch }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "DELETE",
      payload: id,
    };

    dispatch(actionDelete);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Número</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          const finalId = contact.id.split("-")[0];
          return (
            <tr key={contact.id}>
              <th>{finalId}</th>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableContacts;
