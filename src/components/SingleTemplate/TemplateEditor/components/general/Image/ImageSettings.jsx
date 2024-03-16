import Panel from "../../../../../../shared/components/Panel/Panel";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../../../../store/slices/templatesSlice";
import "./Image.scss";
import ImageSearch from "./ImageSearch";
import { useState } from "react";

export default function ImageSettings({ onClose }) {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
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
    let val = e.target.value;
    dispatch(setImage({ ...imageSettings, [e.target.name]: val }));
  };
  const toggleImageSearch = () => {
    setShowSearch(!showSearch);
  };
  const handleImageSelection = (url) => {
    dispatch(setImage({ ...imageSettings, src: url }));
    setShowSearch(!showSearch);
  };
  return (
    <>
      <div className="image-settings">
        <Panel title="Image Settings" onClose={onClose}>
          <div className="form-group mb-3">
            <div className="preview" onClick={toggleImageSearch}>
              <img
                className="image-preview"
                src={imageSettings?.src}
                width="100%"
                height="200px"
              />
              <div className="preview-overlay">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
            </div>
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
        </Panel>
        {showSearch && (
          <ImageSearch
            onClose={toggleImageSearch}
            onSelect={handleImageSelection}
          />
        )}
      </div>
    </>
  );
}
