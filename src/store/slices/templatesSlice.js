import { createSlice, original } from "@reduxjs/toolkit";

export const templatesSlice = createSlice({
  name: "templatesSlice",
  initialState: {
    templates: [
      {
        id: 1,
        name: "Algoronic Academy",
        sections: [
          {
            id: 1,
            component: "hero/Hero1/Hero1",
            state: {
              name: "default-hero",
              head: "Hello Rezo",
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
                  id: 1,
                  className: "primary",
                  text: "Start Now",
                  link: "#",
                },
                {
                  id: 2,
                  className: "primary",
                  text: "Contact Us",
                  link: "#",
                },
                {
                  id: 3,
                  className: "primary",
                  text: "Call Boda",
                  link: "#",
                },
              ],
            },
          },
          {
            id: 2,
            component: "services/Service1/Service1",
            state: {
              name: "default-services",
              title: "Our Popular Services",
              subTitle: "Our Services",
              paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate quod ab perferendis cumque vitae quas architecto cupiditate assumenda ut.",
              services: [
                {
                  id: 1,
                  title: "Service 1",
                  img: {
                    src: "https://images.pexels.com/photos/20107913/pexels-photo-20107913/free-photo-of-a-single-red-rose-in-the-middle-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                      id: 1,
                      className: "primary",
                      text: "Read More",
                      link: "#",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Service 2",
                  img: {
                    src: "https://images.pexels.com/photos/20107913/pexels-photo-20107913/free-photo-of-a-single-red-rose-in-the-middle-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                      id: 1,
                      className: "primary",
                      text: "Read More",
                      link: "#",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "Service 3",
                  img: {
                    src: "https://images.pexels.com/photos/20107913/pexels-photo-20107913/free-photo-of-a-single-red-rose-in-the-middle-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                      id: 1,
                      className: "primary",
                      text: "Read More",
                      link: "#",
                    },
                  ],
                },
              ],
            },
          },
          {
            id: 3,
            component: "clients/DefaultClients/DefaultClients",
            state: {
              name: "default-clients",

              title: "Our Clients",
              clients: [
                {
                  id: 1,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: 2,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: 3,
                  img: {
                    src: "https://d2pi0n2fm836iz.cloudfront.net/488796/05102023231800645c2628dd416.svg",
                    width: "100%",
                    alt: "client alt",
                    hasOverlay: false,
                    color: "",
                  },
                },
                {
                  id: 4,
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
            id: 4,
            component: "footers/DefaultFooter/DefaultFooter",
            state: {
              hideAddAfter: true,
              name: "default-footer",
              text: "all rights reserved © 2023",
            },
          },
        ],
      },
    ],
    selectedTemplate: 0,
    selectedSection: null,
    selectedImageName: "",
    selectDeepData: null,
    timeOut: null,
  },
  reducers: {
    updateSection(state, action) {
      state.templates[state.selectedTemplate].sections[
        state.selectedSection
      ].state = { ...action.payload };
    },
    addNewSection(state, action) {
      console.log("addnew section");
    },
    setSelectedSection(state, action) {
      if (state.selectedSection != action.payload.index) {
        state.selectedSection = action.payload.index;
      }
    },
    setSelectedTemplate(state, action) {},
    moveSection(state, action) {},
    removeSection(state, action) {},
    setSelectedImageName(state, action) {
      if (action.payload?.deep) {
        console.log(action.payload?.deep);
        state.selectDeepData = action.payload?.deep;
      } else {
        state.selectDeepData = null;
      }
      state.selectedImageName = action.payload.name;
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
  },
});
export const {
  updateSection,
  addNewSection,
  setImage,
  setSelectedImageName,
  setSelectedSection,
} = templatesSlice.actions;
export default templatesSlice.reducer;
