import { useDispatch } from "react-redux";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import {
  cloneElement,
  moveElement,
  removeElement,
} from "../../../../../../store/slices/templatesSlice";

export default function Column({
  children,
  options,
  index,
  module,
  hideDelete,
  itemsLength,
}) {
  const dispatch = useDispatch();
  function handleClone() {
    dispatch(cloneElement({ module, index }));
  }
  function handleRemoveElement() {
    dispatch(removeElement({ module, index }));
  }
  function handleMove(dir) {
    dispatch(moveElement({ module, index, dir }));
  }

  return (
    <div className={`col-lg-${options.col} col-md-6 col-12`}>
      <ElementWrapper
        hideDelete={hideDelete}
        actionsPosition="left"
        title="Column"
        color="#ee46bc"
        show={{
          clone: true,
          moveRight: index < itemsLength - 1,
          moveLeft: index > 0,
        }}
        onClone={handleClone}
        onRemoveElement={handleRemoveElement}
        onMove={handleMove}
      >
        {children}
      </ElementWrapper>
    </div>
  );
}
