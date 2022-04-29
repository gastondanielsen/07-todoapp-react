import React, { useEffect, useState } from "react";
import { generarId } from '../utils/generarId';

const FormTareas = ({ crearTarea, edit, setEdit, editarTarea }) => {
  const [input, setInput] = useState({
    nombre: ""
  });

  const { nombre } = input;

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validad que el campo no este vacio
    if(nombre.trim() === '') {
      return;
    }

    if(edit) {
      editarTarea(input);

      // Se limpia el input luego de apretar el boton cancelar
      setInput({
        nombre: ""
      });
    } else {
      input.id = generarId();
      input.estado = false
  
      crearTarea(input)
  
      setInput({
        nombre: ""
      })
    }
  }

  useEffect(() => {
    if (edit) {
      setInput(edit);
    } else {
      setInput(input);
    }
  }, [edit]);

  const cancelar = () => {
    setEdit(null);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese un nombre"
        className="input"
        value={nombre}
        onChange={handleChange}
      />
      <button type="submit" className="btn">{ edit ? 'ACTUALIZAR' : 'AGREGAR' }</button>
      { edit && <button type="submit" className="cancelar">CANCELAR</button>}
    </form>
  );
};

export default FormTareas;
