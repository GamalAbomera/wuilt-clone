import { useDispatch, useSelector } from "react-redux";
import Image from "../../general/Image/Image";
import TextField from "../../general/TextField/TextField";
import "./DefaultClients.scss";
import {
  setSelectedSection,
  updateSection,
} from "../../../../../../store/slices/templatesSlice";
import Column from "../../general/Column/Column";
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
  const clientsTemplate = clientsState?.state?.clients?.map((el, i, arr) => (
    <Column
      options={el}
      index={i}
      module="clients"
      itemsLength={arr.length}
      key={el.id}
      hideDelete={arr.length <= 1}
    >
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
    </Column>
  ));
  return (
    <div className="default-clients" onClick={updateSelectedSection}>
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
