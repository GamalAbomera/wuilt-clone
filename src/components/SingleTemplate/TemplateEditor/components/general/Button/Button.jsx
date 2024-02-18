import { useEffect, useState } from "react";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import "./Button.scss";
export default function Button({ options, onChange, children }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(options.text);
  }, []);
  const handleInput = (e) => {
    onChange({ index: options.index, text: e.target.innerText });
  };
  return (
    <>
      <ElementWrapper title="button">
        <button className={options.className + " button-widget"}>
          <span
            onInput={handleInput}
            suppressContentEditableWarning={true}
            contentEditable
          >
            {text}
          </span>
        </button>
      </ElementWrapper>
    </>
  );
}
