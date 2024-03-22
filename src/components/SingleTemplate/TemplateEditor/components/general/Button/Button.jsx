import { useEffect, useState } from "react";
import ElementWrapper from "../../editor/ElementWrapper/ElementWrapper";
import "./Button.scss";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ButtonStyle = styled.button`
  ${(props) => {
    if (props.colors && props.clsname) {
      let style = "";
      switch (props.clsname) {
        case "outline":
          style = `
            background: transparent;
            color: ${props.colors.mainColor};
            border:1px solid ${props.colors.mainColor};
            font-weight:bolder;
            &:hover{
              background: ${props.colors.mainColor};
              color: ${props.colors.textColor};
            }
          `;
          break;

        default:
          style = `
            background: ${props.colors.mainColor};
            color: ${props.colors.textColor};
            
          `;
          break;
      }
      return style;
    }
  }}
`;
export default function Button({ options, onChange, id, deep }) {
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
      <ElementWrapper
        title="button"
        hideDelete
        settings={{ type: "button", meta: { id, deep } }}
      >
        <ButtonStyle
          colors={colors}
          clsname={options.className}
          className="button-widget"
        >
          <span
            onBlur={handleInput}
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
