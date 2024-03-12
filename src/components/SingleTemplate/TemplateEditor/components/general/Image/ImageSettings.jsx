import Panel from "../../../../../../shared/components/Panel/Panel";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../../../../store/slices/templatesSlice";

export default function ImageSettings({ onClose }) {
  const dispatch = useDispatch();
  const deepSelectData = useSelector((state) => {
    return state.templatesSlice.selectDeepData;
  });
  const imageSettings = useSelector((state) => {
    if (deepSelectData) {
      return state.templatesSlice.templates[
        state.templatesSlice.selectedTemplate
      ].sections[state.templatesSlice.selectedSection].state[
        deepSelectData.module
      ][deepSelectData.index][state.templatesSlice.selectedImageName];
    } else {
      return state.templatesSlice.templates[
        state.templatesSlice.selectedTemplate
      ].sections[state.templatesSlice.selectedSection].state[
        state.templatesSlice.selectedImageName
      ];
    }
  });

  const handleInput = (e) => {
    let val =
      e.target.name === "hasOverlay"
        ? Boolean(!e.target.checked)
        : e.target.value;
    dispatch(setImage({ ...imageSettings, [e.target.name]: val }));
  };
  return (
    <>
      <div className="image-settings">
        <Panel title="Image Settings" onClose={onClose}>
          <div className="form-group mb-3">
            <label>Source:</label>
            <input
              type="text"
              value={imageSettings?.src}
              onInput={handleInput}
              className="form-control"
              name="src"
            />
          </div>
          <div className="form-group mb-3">
            <label>Alt:</label>
            <input
              type="text"
              value={imageSettings?.alt}
              onInput={handleInput}
              className="form-control"
              name="alt"
            />
          </div>
          {/* <div className="form-group mb-3">
            <label>
              Overlay:&nbsp;
              {imageSettings?.hasOverlay ? true : false}
              <input
                type="checkbox"
                value={imageSettings?.hasOverlay ? true : false}
                // checked={imageSettings?.hasOverlay ? true : false}
                onChange={handleInput}
                name="hasOverlay"
              />
            </label>
          </div> */}
          {/* {imageSettings.hasOverlay && (
            <div className="form-group mb-3">
              <label>Color:</label>
              <input
                type="color"
                value={imageSettings.color}
                onInput={handleInput}
                className="form-control"
                name="color"
              />
               <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              className="form-control"
            /> *
            </div>
          )} */}
        </Panel>
      </div>
    </>
  );
}
