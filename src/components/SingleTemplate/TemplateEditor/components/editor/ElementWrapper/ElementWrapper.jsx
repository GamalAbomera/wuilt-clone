import { useDispatch } from "react-redux";
import "./ElementWrapper.scss";
import {
  handleSelectTemplateMenu,
  moveSection,
} from "../../../../../../store/slices/templatesSlice";
import styled from "styled-components";
const Actions = styled.div`
  bottom: ${(props) => (props.index === 0 ? "calc(100% - 80px)" : "100%")};
`;
export default function ElementWrapper({
  title,
  addAfter,
  hideActions,
  children,
  index,
  isSection,
  sectionsLength,
}) {
  const dispatch = useDispatch();
  function openSectionsList() {
    dispatch(handleSelectTemplateMenu({ index }));
  }
  function moveSectionUpDown(dir) {
    dispatch(moveSection({ dir, index }));
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
              <button>
                <i className="fa-solid fa-gear"></i>
              </button>
              <button>
                <i className="fa-solid fa-minus"></i>
              </button>
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
