import { useDispatch, useSelector } from "react-redux";
import Image from "../../general/Image/Image";
import TextField from "../../general/TextField/TextField";
import "./DefaultClients.scss";
import {
  setSelectedSection,
  updateSection,
} from "../../../../../../store/slices/templatesSlice";
export default function DefaultClients({ options }) {
  const dispatch = useDispatch();

  const clientsState = useSelector((state) => {
    const selectedTemplate = state.templatesSlice.selectedTemplate;
    return state.templatesSlice.templates[selectedTemplate].sections[
      options.index
    ];
  });
  const handleInput = (text, name) => {
    const newState = { ...JSON.parse(JSON.stringify(clientsState.state)) };
    newState[name] = text;
    dispatch(updateSection(newState));
  };
  const updateSelectedSection = () => {
    dispatch(setSelectedSection({ index: options.index }));
  };
  const clientsTemplate = clientsState?.state?.clients?.map((el, i) => (
    <div className="col-md-3" key={el.id}>
      <div className="img-container mb-3">
        <Image
          options={{
            ...el.img,
            name: "img",
            deep: {
              module: "clients",
              index: i,
            },
          }}
        />
      </div>
    </div>
  ));
  return (
    <div className="default-clients" onClick={updateSelectedSection}>
      {/* {JSON.stringify(clientsState)} */}
      <div className="container text-center">
        <TextField
          options={{
            style: {
              fontSize: "30px",
              marginBottom: "16px",
            },
            name: "title",
            text: clientsState.state.title,
            hideActions: true,
          }}
          onInput={handleInput}
        />
        <div className="row align-items-center">{clientsTemplate}</div>
      </div>
    </div>
  );
}
