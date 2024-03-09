import { useDispatch } from "react-redux";
import "./SectionsMenu.scss";
import {
  handleSelectTemplateMenu,
  addNewSection,
} from "../../../../../store/slices/templatesSlice";

export default function SectionsMenu() {
  const dispatch = useDispatch();
  function closeMenu() {
    dispatch(handleSelectTemplateMenu());
  }
  function addSection(section) {
    dispatch(addNewSection(section));
    closeMenu();
  }
  return (
    <>
      <div className="sections-menu">
        <h4 className="d-flex">Choose Section</h4>
        <div className="sections">
          <div className="section" onClick={() => addSection("hero")}>
            <img src="/src/assets/sections/hero.png" alt="" />
          </div>
          <div className="section" onClick={() => addSection("services")}>
            <img src="/src/assets/sections/service.png" alt="" />
          </div>
          <div className="section" onClick={() => addSection("clients")}>
            <img src="/src/assets/sections/clients.png" alt="" />
          </div>
        </div>
      </div>
      <div className="overlay" onClick={closeMenu}></div>
    </>
  );
}
