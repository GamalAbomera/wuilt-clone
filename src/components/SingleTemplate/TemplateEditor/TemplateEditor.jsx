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
    const sections = [];
    for (let i = 0; i < template.sections.length; i++) {
      const section = template.sections[i];
      const module = await import(
        /* @vite-ignore */ "./components/" + section.component + ".jsx"
      );
      const Component = module.default;
      sections.push(
        <ElementWrapper
          key={i}
          title={section.state.name}
          addAfter={section.state.hideAddAfter ? false : true}
          index={i}
        >
          <Component options={{ ...section.state, index: i }} />
        </ElementWrapper>
      );
    }
    setSections(sections);
  };

  useEffect(() => {
    importComponents();
  }, [template.sections.length]);

  return (
    <>
      <div className="template-editor">
        <DefaultNavbar />
        {sections.map((el) => el)}
      </div>
    </>
  );
}
