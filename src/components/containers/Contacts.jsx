import React, { useReducer } from "react";
import FormAdd from "../Form/FormAdd";
import { ContactsReducer } from "../reducers/ContactsReducer";
import TableContacts from "./TableContacts";

const contacts = [
  {
    id: "1234-sdfg",
    name: "Leonel Messi",
    number: "111111",
  },
  {
    id: "4325-sdfg",
    name: "Cristiano Rolnaldo",
    number: "222222",
  },
  {
    id: "6532-sdfg",
    name: "Neymar Jr.",
    number: "3333333",
  },
  {
    id: "7654-sdfg",
    name: "Juan Arango",
    number: "444444",
  },
];

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, contacts);

  return (
    <div className="container mt-3">
      <FormAdd dispatch={dispatch} />
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
