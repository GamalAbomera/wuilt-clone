import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedSection,
  updateSection,
} from "../../../../../../store/slices/templatesSlice";
import TextField from "../../general/TextField/TextField";
import "./DefaultFooter.scss";
export default function DefaultFooter({ options }) {
  const dispatch = useDispatch();
  const footerState = useSelector((state) => {
    const selectedTemplate = state.templatesSlice.selectedTemplate;
    return state.templatesSlice.templates[selectedTemplate].sections[
      options.index
    ];
  });
  const handleInput = (text, name) => {
    const newState = { ...JSON.parse(JSON.stringify(footerState.state)) };
    newState[name] = text;
    dispatch(updateSection(newState));
  };
  const updateSelectedSection = () => {
    dispatch(setSelectedSection({ index: options.index }));
  };
  return (
    <footer className="default-footer" onClick={updateSelectedSection}>
      {/* {JSON.stringify(footerState)} */}
      <TextField
        options={{
          text: footerState?.state?.text,
          style: {
            fontSize: "16px",
          },
          name: "text",
        }}
        onInput={handleInput}
      />
    </footer>
  );
}
