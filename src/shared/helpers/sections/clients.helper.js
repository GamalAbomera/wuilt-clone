import { v4 as uuidv4 } from "uuid";
const clients = [
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
];
const clientsTemplates = {
  clients: {
    id: uuidv4(),
    component: "clients/DefaultClients/DefaultClients",
    state: {
      name: "default-clients",
      title: "Our Clients",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nihil.",
      clients,
    },
  },
  clients2: {
    id: uuidv4(),
    component: "clients/Clients2/Clients2",
    state: {
      name: "clients-2",
      title: "Our Clients",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nihil.",
      clients,
    },
  },
};

export default clientsTemplates;
