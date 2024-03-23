import Button from "../../general/Button/Button";
import Image from "../../general/Image/Image";
import TextField from "../../general/TextField/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedSection,
  updateSection,
} from "../../../../../../store/slices/templatesSlice";
import "./Hero3.scss";
import styled from "styled-components";

const Hero = styled.div`
  background: #fff;
`;
export default function Hero1({ options }) {
  const heroState = useSelector((state) => {
    const selectedTemplate = state.templatesSlice.selectedTemplate;
    return state.templatesSlice.templates[selectedTemplate].sections[
      options.index
    ];
  });
  const colors = useSelector((state) => state.templatesSlice.pallet);
  const dispatch = useDispatch();
  const handleButton = (e) => {
    let state2 = { ...JSON.parse(JSON.stringify(heroState.state)) };
    state2.buttons[e.index].text = e.text;
    dispatch(updateSection(state2));
  };
  const buttonsTemplate = heroState?.state?.buttons?.map((el, i) => {
    return (
      <Button
        onChange={handleButton}
        options={{ ...el, index: i }}
        key={el.id}
        id={el.id}
      />
    );
  });
  const handleInput = (text, name) => {
    dispatch(updateSection({ ...heroState.state, [name]: text }));
  };
  const updateSelectedSection = () => {
    dispatch(setSelectedSection({ index: options.index }));
  };

  return (
    <>
      <Hero colors={colors} className="hero-3" onClick={updateSelectedSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="hero-content">
                <TextField
                  options={{
                    style: {
                      fontSize: "50px",
                      fontWeight: "bold",
                    },
                    name: "head",
                    text: heroState.state.head,
                    hideActions: true,
                  }}
                  onInput={handleInput}
                />
                <TextField
                  options={{
                    style: {
                      fontSize: "20px",
                      marginBottom: "20px",
                    },
                    name: "paragraph",
                    text: heroState.state.paragraph,
                    hideActions: true,
                  }}
                  onInput={handleInput}
                />

                <div className="d-flex" style={{ gap: "10px" }}>
                  {buttonsTemplate}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Image
                options={{
                  src: heroState?.state?.img?.src,
                  width: "100%",
                  name: "img",
                  hasOverlay: heroState?.state?.img?.hasOverlay,
                  color: heroState?.state?.img?.color,
                }}
              />
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
}
