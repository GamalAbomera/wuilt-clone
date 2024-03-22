import { useEffect, useState } from "react";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import "./TextField.scss";
export default function TextField({ options, onInput }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(options.text);
  }, []);
  const onChange = (e) => {
    onInput(e.target.innerText, options?.name);
  };

  return (
    <>
      <ElementWrapper
        title="TextField"
        hideDelete
        hideActions={options?.hideActions}
      >
        <div
          className="text-field"
          onBlur={onChange}
          contentEditable
          style={options?.style}
          suppressContentEditableWarning={true}
        >
          {text}
        </div>
      </ElementWrapper>
    </>
  );
}
