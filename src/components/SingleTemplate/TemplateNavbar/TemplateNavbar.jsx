import { Link } from "react-router-dom";
import "./TemplateNavbar.scss";
export default function TemplateNavbar() {
  return (
    <>
      <nav className="template-navbar">
        <div className="logo">
          <Link to="/">
            <img
              src="https://assets-global.website-files.com/614319338322d2f96eb4dd96/61e7601611ab8777e585cad3_Wuilt%20Logo%20Full%20Colored.svg"
              alt=""
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
