import { useDispatch, useSelector } from "react-redux";
import Button from "../../general/Button/Button";
import Image from "../../general/Image/Image";
import "./DefaultNavbar.scss";
import {
  setSelectedSection,
  updateSection,
} from "../../../../../../store/slices/templatesSlice";
export default function DefaultNavbar({ options }) {
  const dispatch = useDispatch();

  const navbar = useSelector((state) => {
    const selectedTemplate = state.templatesSlice.selectedTemplate;
    return state.templatesSlice.templates[selectedTemplate].sections[
      options.index
    ];
  });
  const handleButton = (e) => {
    let state2 = { ...JSON.parse(JSON.stringify(navbar.state)) };
    state2.buttons[e.index].text = e.text;
    dispatch(updateSection(state2));
  };

  const buttonsTemplate = navbar?.state?.buttons?.map((el, i) => {
    return (
      <Button
        onChange={handleButton}
        options={{ ...el, index: i }}
        key={el.id}
        id={el.id}
      />
    );
  });
  const updateSelectedSection = () => {
    dispatch(setSelectedSection({ index: options.index }));
  };
  return (
    <div className="default-navbar" onClick={updateSelectedSection}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              options={{
                src: navbar?.state?.img?.src,
                width: "100%",
                name: "img",
                hasOverlay: navbar?.state?.img?.hasOverlay,
                color: navbar?.state?.img?.color,
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="ms-auto d-flex">{buttonsTemplate}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}
