import { Link } from "react-router-dom";
import "./TemplatesList.scss";
export default function TemplatesList() {
  return (
    <>
      <div className="templates-list pt-4">
        <div className="container">
          <h3 className="head">Templates List</h3>
          <div className="templates">
            <div className="row gy-4">
              <div className="col-md-3">
                <Link className="template" to="edit">
                  <div>Template Name</div>
                </Link>
              </div>

              <div className="col-md-3">
                <div className="template new-template"> + New Template</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
