import { useDispatch } from "react-redux";
import "./ElementWrapper.scss";
import { handleSelectTemplateMenu } from "../../../../../../store/slices/templatesSlice";
export default function ElementWrapper({
  title,
  addAfter,
  hideActions,
  children,
  index,
}) {
  const dispatch = useDispatch();

  function openSectionsList() {
    dispatch(handleSelectTemplateMenu({ index }));
  }
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
          <div className="add-after" onClick={openSectionsList}>
            <i className="fa fa-plus"></i>
          </div>
        )}
      </div>
    </>
  );
}
