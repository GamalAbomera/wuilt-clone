import { useEffect, useState } from "react";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import "./Button.scss";
import styled from "styled-components";
import { useSelector } from "react-redux";
export default function Button({ options, onChange, children }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(options.text);
  }, []);
  const handleInput = (e) => {
    onChange({ index: options.index, text: e.target.innerText });
  };
  const colors = useSelector((state) => state.templatesSlice.pallet);

  const ButtonStyle = styled.button`
    background: ${options.className === "primary"
      ? colors.mainColor
      : colors.subColor};
    color: ${colors.textColor};
  `;
  return (
    <>
      <ElementWrapper title="button">
        <ButtonStyle className="button-widget">
          <span
            onInput={handleInput}
            suppressContentEditableWarning={true}
            contentEditable
          >
            {text}
          </span>
        </ButtonStyle>
      </ElementWrapper>
    </>
  );
}
