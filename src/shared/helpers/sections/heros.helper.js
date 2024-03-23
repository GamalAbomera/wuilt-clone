import { v4 as uuidv4 } from "uuid";
const heros = {
  hero: {
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
          id: 1,
          className: "primary",
          text: "Start Now",
          link: "#",
          action: {
            name: "external link",
            value: "",
          },
        },
        {
          id: 2,
          className: "primary",
          text: "Contact Us",
          link: "#",
          action: {
            name: "external link",
            value: "",
          },
        },
      ],
    },
  },
  hero2: {
    id: uuidv4(),
    component: "hero/Hero2/Hero2",
    state: {
      name: "default-hero",
      head: "Hello there,",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste natus quidem tempore voluptas numquam, molestiae minus reprehenderit, rerum adipisci ex dolorem ab ad a? Excepturi veniam perferendis sunt porro.",
      buttons: [
        {
          id: 1,
          className: "primary",
          text: "Start Now",
          link: "#",
          action: {
            name: "external link",
            value: "",
          },
        },
        {
          id: 2,
          className: "primary",
          text: "Contact Us",
          link: "#",
          action: {
            name: "external link",
            value: "",
          },
        },
      ],
    },
  },
  hero3: {
    id: uuidv4(),
    component: "hero/Hero3/Hero3",
    state: {
      name: "default-hero",
      head: "Hello there,",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste natus quidem tempore voluptas numquam, molestiae minus reprehenderit, rerum adipisci ex dolorem ab ad a? Excepturi veniam perferendis sunt porro.",
      img: {
        src: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&h=350",
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
          action: {
            name: "external link",
            value: "",
          },
        },
        {
          id: 2,
          className: "primary",
          text: "Contact Us",
          link: "#",
          action: {
            name: "external link",
            value: "",
          },
        },
      ],
    },
  },
};
export default heros;
