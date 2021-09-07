import React, { useEffect, useReducer, useState } from "react";
import FormAdd from "../Form/FormAdd";
import { ContactsReducer } from "../reducers/ContactsReducer";
import TableContacts from "./TableContacts";

const init = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setShowForm(!showForm)}
        className="btn btn-success"
      >
        {showForm ? "Ocultar Formulario" : "Agregar Contacto"}
      </button>

      {showForm && <FormAdd dispatch={dispatch} />}

      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
