import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedSection,
  updateSection,
} from "../../../../../../store/slices/templatesSlice";
import Button from "../../general/Button/Button";
import Image from "../../general/Image/Image";
import TextField from "../../general/TextField/TextField";
import "./Service1.scss";
export default function Service1({ options }) {
  const servicesState = useSelector((state) => {
    const selectedTemplate = state.templatesSlice.selectedTemplate;
    return state.templatesSlice.templates[selectedTemplate].sections[
      options.index
    ];
  });
  const dispatch = useDispatch();
  const handleButton = (e, parentIndex) => {
    let state2 = { ...JSON.parse(JSON.stringify(servicesState.state)) };
    state2.services[parentIndex].buttons[e.index].text = e.text;
    dispatch(updateSection(state2));
  };
  const updateSelectedSection = () => {
    dispatch(setSelectedSection({ index: options.index }));
  };
  const handleInput = (text, name, deep = null) => {
    const newState = { ...JSON.parse(JSON.stringify(servicesState.state)) };
    if (deep) {
      newState[deep.module][deep.index][name] = text;
    } else {
      newState[name] = text;
    }
    dispatch(updateSection(newState));
  };

  const servicesTemplate = servicesState?.state?.services?.map((el, i) => {
    const buttonsTemplate = el.buttons?.map((el, j) => {
      return (
        <Button
          onChange={(e) => handleButton(e, i)}
          options={{ ...el, index: j }}
          key={el.id}
          id={el.id}
          deep={{
            module: "services",
            index: i,
          }}
        />
      );
    });
    return (
      <div className="col-md-4" key={el.id}>
        <div className="service">
          <Image
            options={{
              ...el.img,
              name: "img",
              deep: {
                module: "services",
                index: i,
              },
            }}
          />
          <TextField
            options={{
              text: el.title,
              style: {
                fontSize: "24px",
              },
              name: "title",
            }}
            onInput={(text, name) =>
              handleInput(text, name, {
                module: "services",
                index: i,
              })
            }
          />
          <TextField
            options={{
              text: el.content,
              style: {
                fontSize: "16px",
                marginBottom: "8px",
              },
              name: "content",
            }}
            onInput={(text, name) =>
              handleInput(text, name, {
                module: "services",
                index: i,
              })
            }
          />
          {buttonsTemplate}
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="default-service" onClick={updateSelectedSection}>
        <div className="container">
          {/* {JSON.stringify(servicesState)} */}
          <div className="text-center">
            <TextField
              options={{
                style: {
                  fontSize: "18px",
                },
                text: servicesState.state.subTitle,
                hideActions: true,
                name: "subTitle",
              }}
              onInput={handleInput}
            />
            <TextField
              options={{
                style: {
                  fontSize: "28px",
                },
                text: servicesState.state.title,
                hideActions: true,
                name: "title",
              }}
              onInput={handleInput}
            />
            <TextField
              options={{
                style: {
                  fontSize: "16px",
                  marginBottom: "32px",
                },
                text: servicesState.state.paragraph,
                hideActions: true,
                name: "paragraph",
              }}
              onInput={handleInput}
            />
          </div>
          <div className="row">{servicesTemplate}</div>
        </div>
      </div>
    </>
  );
}
