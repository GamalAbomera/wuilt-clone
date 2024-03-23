import { useDispatch, useSelector } from "react-redux";
import Image from "../../general/Image/Image";
import TextField from "../../general/TextField/TextField";
import "./Clients2.scss";
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
    <div className="clients-2" onClick={updateSelectedSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <TextField
              options={{
                style: {
                  fontSize: "36px",
                  fontWeight: "bold",
                },
                name: "title",
                text: clientsState.state.title,
                hideActions: true,
              }}
              onInput={handleInput}
            />
            <TextField
              options={{
                style: {
                  fontSize: "20px",
                  marginBottom: "10px",
                },
                name: "content",
                text: clientsState.state.content,
                hideActions: true,
              }}
              onInput={handleInput}
            />
          </div>
          <div className="col-lg-8">
            <div className="row align-items-center gy-4">{clientsTemplate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
