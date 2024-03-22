import { setSelectedImageName } from "../../../../../../store/slices/templatesSlice";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import "./Image.scss";
import { useDispatch } from "react-redux";
export default function Image({ options }) {
  const dispatch = useDispatch();
  return (
    <>
      <ElementWrapper
        title="Image"
        hideDelete={true}
        settings={{
          type: "image",
          meta: { name: options?.name, deep: options?.deep },
        }}
      >
        <div
          className="image-wrapper"
          onClick={() => {
            dispatch(
              setSelectedImageName({ name: options?.name, deep: options?.deep })
            );
          }}
        >
          <img
            src={options.src}
            alt={options.alt}
            className="image"
            style={{ width: options.width, height: options.height }}
          />
          {options?.hasOverlay && <div className="overlay"></div>}
        </div>
      </ElementWrapper>
    </>
  );
}
