import React from "react";
import Modal from "@material-ui/core/Modal";

export default function ModalTable(props) {
  const { open, handleClose, item } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            top: "40%",
            left: "40%",
            position: "absolute",
            width: 400,
            backgroundColor: "white",
            border: "2px solid #000",
            padding: 5,
          }}
        >
          <div>{`Identificación:${item.identificacion}`}</div>
          <div>{`Nombre:${item.nombre}`}</div>
          <div>{`Edad:${item.edad}`}</div>
          <div>{`Fecha de Nacimiento:${new Date(
            item.fechaNacimiento
          ).getMonth()}/${new Date(item.fechaNacimiento).getDay()}/${new Date(
            item.fechaNacimiento
          ).getFullYear()}`}</div>
        </div>
      </Modal>
    </div>
  );
}
