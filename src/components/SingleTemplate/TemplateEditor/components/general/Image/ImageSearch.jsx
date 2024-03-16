import { useEffect, useState } from "react";
import Panel from "../../../../../../shared/components/Panel/Panel";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../../../../../store/slices/imageSlice";

export default function ImageSearch({ onSelect, onClose }) {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.images);
  const [apiType, setApiType] = useState("pexels");
  const imagesTemplate = data.map((el, index) => (
    <div className="col-md-4" key={index}>
      <img src={el} onClick={() => onSelect(el)} width="100%" height="150px" />
    </div>
  ));
  let timeOut = null;
  function onSearch(e) {
    if (e.target.value) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        dispatch(getImages({ searchQuery: e.target.value, api: apiType }));
      }, 500);
    }
  }
  function setTabs(tab) {
    setApiType(tab);
  }

  return (
    <>
      <Panel title="Image Search..." onClose={onClose}>
        <div className="image-search">
          <div className="tabs">
            <button
              onClick={() => setTabs("pexels")}
              className={`tab ${apiType == "pexels" && "active"}`}
            >
              Pexels
            </button>
            <button
              onClick={() => setTabs("unsplash")}
              className={`tab ${apiType == "unsplash" && "active"}`}
            >
              Unsplash
            </button>
          </div>
          <div className="search-bar">
            <input
              type="text"
              onInput={onSearch}
              className="search"
              placeholder="Type Here"
            />
          </div>
          <div className="tabs-content">
            {isLoading ? (
              <div className="loading">
                <i className="fa-solid fa-fan fa-spin"></i> loading...
              </div>
            ) : (
              <div className="row gy-1 gx-1">{imagesTemplate}</div>
            )}
          </div>
        </div>
      </Panel>
    </>
  );
}
