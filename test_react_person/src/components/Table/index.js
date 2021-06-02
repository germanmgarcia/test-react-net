import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons";
import ModalTable from "../Modal";

export default function TablePerson() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  const handleOpen = (event, rowData) => {
    setOpen(true);
    setItem(rowData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { title: "Identificación", field: "identificacion" },
    { title: "Nombre", field: "nombre" },
    { title: "Edad", field: "edad" },
    {
      title: "Fecha de Nacimiento",
      field: "fechaNacimiento",
      render: (rowData) =>
        rowData.fechaNacimiento &&
        `${new Date(rowData.fechaNacimiento).getMonth()}/${new Date(
          rowData.fechaNacimiento
        ).getDay()}/${new Date(rowData.fechaNacimiento).getFullYear()}`,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:28458/person", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ width: "90%" }}>
      <MaterialTable
        title="User list from API"
        columns={columns}
        data={data}
        icons={tableIcons}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              console.log(newData, oldData);
              resolve();
            }),
        }}
        actions={[
          {
            icon: "check",
            tooltip: "Seleccionar",
            onClick: (event, rowData) => handleOpen(event, rowData),
          },
        ]}
      />
      <ModalTable open={open} handleClose={handleClose} item={item} />
    </div>
  );
}
