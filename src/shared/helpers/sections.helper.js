import { v4 as uuidv4 } from "uuid";

const hero = {
  id: uuidv4(),
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
    ],
  },
};

const services = {
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
        img: {
          src: "https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Service 2",
        img: {
          src: "https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Service 3",
        img: {
          src: "https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          },
        ],
      },
    ],
  },
};

const clients = {
  id: uuidv4(),
  component: "clients/DefaultClients/DefaultClients",
  state: {
    name: "default-clients",

    title: "Our Clients",
    clients: [
      {
        id: uuidv4(),
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
};

export default {
  hero,
  services,
  clients,
};
