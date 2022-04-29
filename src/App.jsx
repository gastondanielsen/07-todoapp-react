import { useState } from "react";
import FormTareas from "./components/FormTareas";
import ListadoTareas from "./components/ListadoTareas";

const initialState = [
  // {
  //   id: 1,
  //   nombre: "Salir a correr",
  //   estado: false,
  // },
  // {
  //   id: 2,
  //   nombre: "Leer un libro",
  //   estado: false,
  // },
  // {
  //   id: 3,
  //   nombre: "Pasear al perro",
  //   estado: false,
  // },
];

function App() {
  const [tareas, setTareas] = useState(initialState);
  const [edit, setEdit] = useState(null);

  // CREAR UNA NUEVA TAREA
  const crearTarea = (tarea) => {
    const nuevaTarea = {
      ...tarea,
      estado: false,
    };
    setTareas([nuevaTarea, ...tareas]);
  };

  // ELIMINAR UNA TAREA
  const eliminarTarea = (id) => {
    const eliminar = tareas.filter((tarea) => tarea.id !== id);
    setTareas(eliminar);
  };

  // CAMBIAR EL ESTADO DE UNA TAREA
  const cambiarEstado = (id) => {
    const estadoActualizado = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, estado: !tarea.estado } : tarea
    );
    setTareas(estadoActualizado);
  };

  // EDITAR UNA TAREA
  const editarTarea = (tarea) => {
    const actualizarTarea = tareas.map((item) =>
      item.id === tarea.id ? tarea : item
    );
    setTareas(actualizarTarea);
    setEdit(null);
  };

  return (
    <>
      <div className="autor">GDcode</div>
      <div className="container">
        <h1 className="titulo">Aplicación de Tareas</h1>

        <div className="box">
          <FormTareas
            crearTarea={crearTarea}
            edit={edit}
            setEdit={setEdit}
            editarTarea={editarTarea}
          />
          <ListadoTareas
            tareas={tareas}
            eliminarTarea={eliminarTarea}
            cambiarEstado={cambiarEstado}
            setEdit={setEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
