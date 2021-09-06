import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormAdd = ({ dispatch }) => {
  const [data, setData] = useState({ name: "", number: "" });

  const { name, number } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const actionAdd = {
    type: "ADD",
    payload: {
      id: uuid(),
      name,
      number,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre:
          <input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Número:
          <input
            onChange={handleChange}
            name="number"
            value={number}
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button className="btn btn-info mt-2" onClick={handleAdd}>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

export default FormAdd;
