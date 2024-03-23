import { useEffect, useState } from "react";
import DefaultNavbar from "./components/navbars/DefaultNavbar/DefaultNavbar";
import "./TemplateEditor.scss";
import { useDispatch, useSelector } from "react-redux";
import ElementWrapper from "./components/editor/ElementWrapper/ElementWrapper";
import { removeSection } from "../../../store/slices/templatesSlice";
export default function TemplateEditor() {
  const templates = useSelector((state) => state.templatesSlice);
  const template = templates.templates[0];
  const [sections, setSections] = useState([]);
  const dispatch = useDispatch();
  function onRemoveElement(index) {
    const conf = confirm("are you sure to remove this section?");
    if (conf) {
      dispatch(removeSection(index));
    }
  }
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
          key={section.id}
          title={section.state.name}
          addAfter={section.state.hideAddAfter ? false : true}
          hideDelete={template.sections.length == 2}
          index={i}
          isSection={true}
          color={section?.state?.frameColor}
          sectionsLength={template.sections.length}
          onRemoveElement={onRemoveElement}
          hideActions={section?.state?.hideActions}
        >
          <Component options={{ ...section.state, index: i }} />
        </ElementWrapper>
      );
    }
    setSections(sections);
  };

  useEffect(() => {
    importComponents();
  }, [template.sections]);

  return (
    <>
      <div className="template-editor">
        {/* <DefaultNavbar /> */}
        {sections.map((el) => el)}
      </div>
    </>
  );
}
