import "./ElementWrapper.scss";
export default function ElementWrapper({
  title,
  addAfter,
  hideActions,
  children,
}) {
  return (
    <>
      <div className="element-wrapper">
        {!hideActions && (
          <div className="actions">
            <span>{title}</span>
            <div className="buttons">
              <button>
                <i className="fa-solid fa-gear"></i>
              </button>
              <button>
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
        )}

        <div className="element">{children}</div>
        {addAfter && (
          <div className="add-after">
            <i className="fa fa-plus"></i>
          </div>
        )}
      </div>
    </>
  );
}
