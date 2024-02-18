import { useEffect, useState } from "react";
import DefaultNavbar from "./components/navbars/DefaultNavbar/DefaultNavbar";
import "./TemplateEditor.scss";
import { useSelector } from "react-redux";
import ElementWrapper from "./components/editor/ElementWrapper/ElementWrapper";
export default function TemplateEditor() {
  const templates = useSelector((state) => state.templatesSlice);
  const template = templates.templates[0];
  const [sections, setSections] = useState([]);

  const importComponents = async () => {
    for (let i = 0; i < template.sections.length; i++) {
      const section = template.sections[i];

      const module = await import(
        /* @vite-ignore */ "./components/" + section.component + ".jsx"
      );
      const Component = module.default;
      setSections((sec) => {
        console.log(section.state);
        return [
          ...sec,
          <ElementWrapper
            key={i}
            title={section.state.name}
            addAfter={section.state.hideAddAfter ? false : true}
          >
            <Component options={{ ...section.state, index: i }} />
          </ElementWrapper>,
        ];
      });
    }
  };
  useEffect(() => {
    importComponents();
  }, []);

  return (
    <>
      <div className="template-editor">
        <DefaultNavbar />
        {sections.map((el) => el)}
      </div>
    </>
  );
}
