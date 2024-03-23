import { createSlice, original } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import sectionsHelper from "../../shared/helpers/sections.helper";

export const templatesSlice = createSlice({
  name: "templatesSlice",
  initialState: {
    templates: [
      {
        id: uuidv4(),
        name: "Algoronic Academy",
        sections: [
          {
            id: uuidv4(),
            component: "navbars/DefaultNavbar/DefaultNavbar",
            state: {
              frameColor: "rgb(250, 197, 21)",
              hideActions: true,
              name: "default-navbar",
              img: {
                src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                height: "",
                width: "100%",
                alt: "Hero Img",
                hasOverlay: false,
                color: "",
              },
              buttons: [
                {
                  id: uuidv4(),
                  className: "outline",
                  text: "Login",
                  link: "#",
                  action: {
                    name: "external link",
                    value: "",
                  },
                },
                {
                  id: uuidv4(),
                  className: "primary",
                  text: "Sign up",
                  link: "#",
                  action: {
                    name: "external link",
                    value: "",
                  },
                },
              ],
            },
          },
          {
            id: uuidv4(),
            component: "hero/Hero1/Hero1",
            state: {
              name: "default-hero",
              head: "Hello there,",
              paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste natus quidem tempore voluptas numquam, molestiae minus reprehenderit, rerum adipisci ex dolorem ab ad a? Excepturi veniam perferendis sunt porro.",
              img: {
                src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05112023133347645ceebb3dedb.png",
                height: "",
                width: "100%",
                alt: "Hero Img",
                hasOverlay: false,
                color: "",
              },
              buttons: [
                {
                  id: uuidv4(),
                  className: "outline",
                  text: "Start Now",
                  link: "#",
                  action: {
                    name: "external link",
                    value: "",
                  },
                },
                {
                  id: uuidv4(),
                  className: "primary",
                  text: "Contact Us",
                  link: "#",
                  action: {
                    name: "email address",
                    value: "",
                  },
                },
              ],
            },
          },
          {
            id: uuidv4(),
            component: "services/Service1/Service1",
            state: {
              name: "default-services",
              title: "Our Popular Services",
              subTitle: "Our Services",
              paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate quod ab perferendis cumque vitae quas architecto cupiditate assumenda ut.",
              services: [
                {
                  id: uuidv4(),
                  title: "Service 1",
                  col: 4,
                  img: {
                    src: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&h=350",
                    width: "100%",
                    height: "300px",
                    alt: "service alt",
                    hasOverlay: false,
                    color: "",
                  },
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique, expedita aliquid ea a illum, provident laborum quaerat soluta et. Tempore ratione placeat perferendis non animi?",
                  buttons: [
                    {
                      id: uuidv4(),
                      className: "primary",
                      text: "Read More",
                      link: "#",
                      action: {
                        name: "external link",
                        value: "",
                      },
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  title: "Service 2",
                  col: 4,
                  img: {
                    src: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&h=350",
                    width: "100%",
                    height: "300px",
                    alt: "service alt",
                    hasOverlay: false,
                    color: "",
                  },
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique, expedita aliquid ea a illum, provident laborum quaerat soluta et. Tempore ratione placeat perferendis non animi?",
                  buttons: [
                    {
                      id: uuidv4(),
                      className: "primary",
                      text: "Read More",
                      link: "#",
                      action: {
                        name: "external link",
                        value: "",
                      },
                    },
                  ],
                },
                {
                  id: uuidv4(),
                  title: "Service 3",
                  col: 4,
                  img: {
                    src: "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?auto=compress&cs=tinysrgb&h=350",
                    width: "100%",
                    height: "300px",
                    alt: "service alt",
                    hasOverlay: false,
                    color: "",
                  },
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique, expedita aliquid ea a illum, provident laborum quaerat soluta et. Tempore ratione placeat perferendis non animi?",
                  buttons: [
                    {
                      id: uuidv4(),
                      className: "primary",
                      text: "Read More",
                      link: "#",
                      action: {
                        name: "external link",
                        value: "",
                      },
                    },
                  ],
                },
              ],
            },
          },
          {
            id: uuidv4(),
            component: "clients/DefaultClients/DefaultClients",
            state: {
              name: "default-clients",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nihil.",
              title: "Our Clients",
              clients: [
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: uuidv4(),
                  col: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
              ],
            },
          },
          {
            id: uuidv4(),
            component: "footers/DefaultFooter/DefaultFooter",
            state: {
              frameColor: "rgb(250, 197, 21)",
              hideAddAfter: true,
              hideActions: true,
              name: "default-footer",
              text: "all rights reserved © 2023",
            },
          },
        ],
      },
    ],
    selectedTemplate: 0,
    selectedSection: null,
    newSectionData: null,
    selectedImageName: "",
    selectedButtonId: "",
    selectDeepData: null,
    timeOut: null,
    isSelectingSection: false,
    pallet: {
      mainColor: "#76ABAE",
      subColor: "#31363F",
      textColor: "#EEEEEE",
    },
  },
  reducers: {
    handleSelectTemplateMenu(state, action) {
      if (action.payload?.index >= 0) {
        state.selectedSection = action.payload?.index;
      }
      state.isSelectingSection = !state.isSelectingSection;
    },
    updateSection(state, action) {
      state.templates[state.selectedTemplate].sections[
        state.selectedSection
      ].state = { ...action?.payload };
    },
    addNewSection(state, action) {
      if (state.selectedSection >= 0) {
        state.templates[state.selectedTemplate].sections.splice(
          state.selectedSection + 1,
          0,
          sectionsHelper[action.payload.type][action.payload.component]
        );
      }
    },
    setSelectedSection(state, action) {
      if (state.selectedSection != action.payload.index) {
        state.selectedSection = action.payload.index;
      }
    },
    setSelectedTemplate(state, action) {},
    moveSection(state, action) {
      const currentSection = action.payload.index;
      if (action.payload.dir === "up" && currentSection > 0) {
        const selectedSection =
          state.templates[state.selectedTemplate].sections[currentSection];
        state.templates[state.selectedTemplate].sections.splice(
          currentSection,
          1
        );
        state.templates[state.selectedTemplate].sections.splice(
          currentSection - 1,
          0,
          selectedSection
        );
      } else if (
        action.payload.dir === "down" &&
        currentSection <
          state.templates[state.selectedTemplate].sections.length - 2
      ) {
        const selectedSection =
          state.templates[state.selectedTemplate].sections[currentSection];
        state.templates[state.selectedTemplate].sections.splice(
          currentSection,
          1
        );
        state.templates[state.selectedTemplate].sections.splice(
          currentSection + 1,
          0,
          selectedSection
        );
      }
    },
    removeSection(state, action) {
      state.templates[state.selectedTemplate].sections.splice(
        action.payload,
        1
      );
    },
    setSelectedImageName(state, action) {
      if (action.payload?.deep) {
        state.selectDeepData = action.payload?.deep;
      } else {
        state.selectDeepData = null;
      }
      state.selectedImageName = action.payload?.name;
    },
    setImage(state, action) {
      if (state.selectDeepData) {
        state.templates[state.selectedTemplate].sections[
          state.selectedSection
        ].state[state.selectDeepData.module][state.selectDeepData.index][
          state.selectedImageName
        ] = action.payload;
      } else {
        state.templates[state.selectedTemplate].sections[
          state.selectedSection
        ].state[state.selectedImageName] = action.payload;
      }
    },
    setButton(state, action) {
      let buttons = null;
      const section =
        state.templates[state.selectedTemplate].sections[state.selectedSection];
      if (state.selectDeepData) {
        buttons =
          section.state[state.selectDeepData.module][state.selectDeepData.index]
            .buttons;
      } else {
        buttons = section.state.buttons;
      }
      const index = buttons.findIndex((el) => el.id == state.selectedButtonId);
      if (action.payload.name == "className") {
        buttons[index][action.payload.name] = action.payload.value;
      } else {
        buttons[index].action[action.payload.name] = action.payload.value;
      }
    },
    setSelectedButtonId(state, action) {
      if (action.payload?.deep) {
        state.selectDeepData = action.payload?.deep;
      } else {
        state.selectDeepData = null;
      }
      state.selectedButtonId = action.payload?.id;
    },
    applyColorsPallet(state, action) {
      state.pallet = { ...action.payload };
    },
    cloneElement(state, action) {
      const section =
        state.templates[state.selectedTemplate].sections[state.selectedSection];
      const module = section.state[action.payload.module];
      const item = { ...module[action.payload.index] };
      item.id = uuidv4();
      module.push(item);
    },
    removeElement(state, action) {
      const section =
        state.templates[state.selectedTemplate].sections[state.selectedSection];
      const module = section.state[action.payload.module];
      module.splice(action.payload.index, 1);
    },
    moveElement(state, action) {
      const section =
        state.templates[state.selectedTemplate].sections[state.selectedSection];
      const module = section.state[action.payload.module];
      let item = { ...module[action.payload.index] };
      let nextSectionIndex = null;
      if (action.payload.dir === "right") {
        nextSectionIndex = action.payload.index + 1;
      } else {
        nextSectionIndex = action.payload.index - 1;
      }
      module.splice(action.payload.index, 1);
      module.splice(nextSectionIndex, 0, item);
    },
  },
});
export const {
  updateSection,
  addNewSection,
  setImage,
  setSelectedImageName,
  setSelectedSection,
  handleSelectTemplateMenu,
  moveSection,
  removeSection,
  applyColorsPallet,
  setSelectedButtonId,
  setButton,
  cloneElement,
  removeElement,
  moveElement,
} = templatesSlice.actions;
export default templatesSlice.reducer;
