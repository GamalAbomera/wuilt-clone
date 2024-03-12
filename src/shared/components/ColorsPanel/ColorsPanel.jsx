import { useDispatch, useSelector } from "react-redux";
import "./ColorsPanel.scss";
import { handleToggleColorsPanel } from "../../../store/slices/colorsSlice";
import { applyColorsPallet } from "../../../store/slices/templatesSlice";
export default function ColorsPanel({ className }) {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors.pallets);
  const colorsTemplate = colors.map((el, index) => (
    <div className="color-pallet" onClick={() => applyColors(el)} key={index}>
      <h5>{el.title}</h5>
      <span style={{ background: el.mainColor }} className="color"></span>
      <span style={{ background: el.subColor }} className="color"></span>
      <span style={{ background: el.textColor }} className="color"></span>
    </div>
  ));
  function closeColorPanel() {
    dispatch(handleToggleColorsPanel());
  }
  function applyColors(pallet) {
    dispatch(applyColorsPallet(pallet));
    closeColorPanel();
  }
  return (
    <>
      {className == "show" && (
        <div onClick={closeColorPanel} className="overlay"></div>
      )}

      <div className={"colors-panel " + className}>
        <h4>Choose Your Colors</h4>
        {colorsTemplate}
      </div>
    </>
  );
}
