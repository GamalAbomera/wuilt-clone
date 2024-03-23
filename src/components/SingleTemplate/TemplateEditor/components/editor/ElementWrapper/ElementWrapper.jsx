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
    let position = "";
    switch (props?.position) {
      case "left":
        position = "left:0";
        break;
      default:
        position = "right:0";
        break;
    }
    let color = "#009f20";
    if (props?.color) {
      color = props?.color;
    }
    return `
  bottom: 100%;
  border:1px solid ${color};
  span{
    background:${color}
  }
  ${position}
  `;
  }}
`;
const Wrapper = styled.div`
  ${(props) => {
    let color = "#009f20";
    if (props?.color) {
      color = props?.color;
    }
    return `
    border: 1px solid transparent;
  &:hover{
    border: 1px solid ${color};
  }
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
  hideDelete,
  settings,
  actionsPosition,
  color,
  show,
  onClone,
  onRemoveElement,
  onMove,
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
      <Wrapper color={color} className="element-wrapper">
        <Actions
          color={color}
          index={index}
          position={actionsPosition}
          className="actions"
        >
          <span>{title}</span>
          {!hideActions && (
            <div className="buttons">
              {isSection ? (
                <>
                  {index < sectionsLength - 2 ? (
                    <button onClick={() => moveSectionUpDown("down")}>
                      <i className="fa-solid fa-arrow-down"></i>
                    </button>
                  ) : null}
                  {index > 1 && index < sectionsLength - 1 ? (
                    <button onClick={() => moveSectionUpDown("up")}>
                      <i className="fa-solid fa-arrow-up"></i>
                    </button>
                  ) : null}
                </>
              ) : null}

              {show?.clone && (
                <button onClick={onClone}>
                  <i className="fa-regular fa-clone"></i>
                </button>
              )}
              {show?.moveLeft && (
                <button onClick={() => onMove("left")}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              )}
              {show?.moveRight && (
                <button onClick={() => onMove("right")}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              )}
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
          )}
        </Actions>

        <div className="element">{children}</div>
        {addAfter && (
          <div className="add-after" onClick={openSectionsList}>
            <i className="fa fa-plus"></i>
          </div>
        )}
      </Wrapper>
    </>
  );
}
