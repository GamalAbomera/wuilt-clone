import Button from "../../general/Button/Button";
import Image from "../../general/Image/Image";
import "./DefaultNavbar.scss";
export default function DefaultNavbar() {
  return (
    <div className="default-navbar">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              options={{
                src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                width: "140px",
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
            <div className="ms-auto d-flex">
              <Button options={{ text: "Contact us", className: "primary" }} />
              <Button options={{ text: "Start Now", className: "primary" }} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
