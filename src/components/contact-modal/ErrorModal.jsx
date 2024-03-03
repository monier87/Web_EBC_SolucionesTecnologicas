import "./modal.scss";

const errorModal = (props) => (
    <div className="error__modal">
      <p>Error, intentelo mas tarde!!!</p>
      <p>
        Something went wrong :{"("}</p>
      <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
        <p>Ok</p>
      </div>
    </div>
  );


export default errorModal;
