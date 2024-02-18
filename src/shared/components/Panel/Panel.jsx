import "./Panel.scss";
export default function Panel({ title, onClose, children }) {
  return (
    <>
      <div className="panel">
        <div className="panel-head">
          <div className="title">{title}</div>
          <i className="fa fa-times" onClick={onClose}></i>
        </div>
        <div className="panel-body">{children}</div>
      </div>
    </>
  );
}
