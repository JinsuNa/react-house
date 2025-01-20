function Modal(props) {
  return (
    <div className="modal">
      <p>{props.content}</p>
      <p className="price-content">{props.prices}만원</p>
    </div>
  );
  }
  
  export default Modal;
  