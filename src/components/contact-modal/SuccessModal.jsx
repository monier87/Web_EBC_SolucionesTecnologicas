import "./modal.scss";

const successModal = (props) => (
  <div className="sucess__modal">
    <p>Envio exitoso!</p>
    <p>
      Gracias por contactarnos.<br></br>Le responderemos lo antes posible.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
