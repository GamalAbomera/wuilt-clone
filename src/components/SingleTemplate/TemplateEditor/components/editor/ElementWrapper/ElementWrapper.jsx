import { useDispatch } from "react-redux";
import "./ElementWrapper.scss";
import {
  handleSelectTemplateMenu,
  moveSection,
  setSelectedImageName,
  setSelectedButtonId,
} from "../../../../../../store/slices/templatesSlice";
import styled from "styled-components";
const Actions = styled.div`
  ${(props) => {
    return `
  bottom: ${props?.index === 0 ? "calc(100% - 80px)" : "100%"};
  
  `;
  }}
`;
export default function ElementWrapper({
  title,
  addAfter,
  hideActions,
  children,
  index,
  isSection,
  sectionsLength,
  onRemoveElement,
  hideDelete,
  settings,
}) {
  const dispatch = useDispatch();
  function openSectionsList() {
    dispatch(handleSelectTemplateMenu({ index }));
  }
  function moveSectionUpDown(dir) {
    dispatch(moveSection({ dir, index }));
  }
  function handleSettings() {
    switch (settings.type) {
      case "button":
        dispatch(setSelectedButtonId(settings.meta));
        break;
      case "image":
        dispatch(setSelectedImageName(settings.meta));
        break;

      default:
        console.log("no settings for this element");
        break;
    }
  }

  return (
    <>
      <div className="element-wrapper">
        {!hideActions && (
          <Actions index={index} className="actions">
            <span>{title}</span>
            <div className="buttons">
              {isSection ? (
                <>
                  {index < sectionsLength - 2 ? (
                    <button onClick={() => moveSectionUpDown("down")}>
                      <i className="fa-solid fa-arrow-down"></i>
                    </button>
                  ) : null}
                  {index > 0 && index < sectionsLength - 1 ? (
                    <button onClick={() => moveSectionUpDown("up")}>
                      <i className="fa-solid fa-arrow-up"></i>
                    </button>
                  ) : null}
                </>
              ) : null}
              {settings && (
                <button onClick={handleSettings}>
                  <i className="fa-solid fa-gear"></i>
                </button>
              )}

              {!hideDelete ? (
                <button onClick={() => onRemoveElement(index)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
              ) : null}
            </div>
          </Actions>
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
