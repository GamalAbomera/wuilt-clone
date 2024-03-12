import { useEffect, useState } from "react";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import "./Button.scss";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ButtonStyle = styled.button`
  ${(props) => {
    if (props.colors && props.clsname) {
      return `
       background: ${
         props.clsname === "primary"
           ? props.colors.mainColor
           : props.colors.subColor
       };
      color: ${props.colors.textColor};
      `;
    }
  }}
`;
export default function Button({ options, onChange, children }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(options.text);
  }, []);
  const handleInput = (e) => {
    onChange({ index: options.index, text: e.target.innerText });
  };
  const colors = useSelector((state) => state.templatesSlice.pallet);

  return (
    <>
      <ElementWrapper title="button">
        <ButtonStyle
          colors={colors}
          clsname={options.className}
          className="button-widget"
        >
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
