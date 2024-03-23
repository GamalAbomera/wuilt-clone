import { v4 as uuidv4 } from "uuid";
const services = {
  services: {
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
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
  services2: {
    id: uuidv4(),
    component: "services/Service2/Service2",
    state: {
      name: "services-2",
      title: "Our Popular Services",
      subTitle: "Our Services",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate quod ab perferendis cumque vitae quas architecto cupiditate assumenda ut.",
      services: [
        {
          id: uuidv4(),
          title: "Service 1",
          col: 3,
          img: {
            src: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHwxMnx8bGFwdG9wfGVufDB8fHx8MTcxMTIyOTU4OHww&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
          col: 3,
          img: {
            src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHwxMXx8bGFwdG9wfGVufDB8fHx8MTcxMTIyOTU4OHww&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
          col: 3,
          img: {
            src: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHwyN3x8bGFwdG9wfGVufDB8fHx8MTcxMTIyOTU4OHww&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
          title: "Service 4",
          col: 3,
          img: {
            src: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHwyN3x8bGFwdG9wfGVufDB8fHx8MTcxMTIyOTU4OHww&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
  services3: {
    id: uuidv4(),
    component: "services/Service3/Service3",
    state: {
      name: "services-3",
      title: "Our Popular Services",
      subTitle: "Our Services",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate quod ab perferendis cumque vitae quas architecto cupiditate assumenda ut.",
      services: [
        {
          id: uuidv4(),
          title: "Service 1",
          col: 6,
          img: {
            src: "https://images.unsplash.com/photo-1545845497-f57021dae168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHw2fHxibGFjayUyMGxhcHRvcHxlbnwwfHx8fDE3MTEyMzEwNTJ8MA&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
          col: 6,
          img: {
            src: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHw4fHxibGFjayUyMGxhcHRvcHxlbnwwfHx8fDE3MTEyMzEwNTJ8MA&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
          col: 6,
          img: {
            src: "https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHw0fHxibGFjayUyMGxhcHRvcHxlbnwwfHx8fDE3MTEyMzEwNTJ8MA&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
          title: "Service 4",
          col: 6,
          img: {
            src: "https://images.unsplash.com/photo-1578041832635-16cc24aa97e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMTc4NTl8MHwxfHNlYXJjaHwyNXx8YmxhY2slMjBsYXB0b3B8ZW58MHx8fHwxNzExMjMxMDUyfDA&ixlib=rb-4.0.3&q=80&w=400",
            width: "100%",
            height: "300px",
            alt: "service alt",
            hasOverlay: false,
            color: "",
          },
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quas repellendus. Asperiores alias similique,",
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
};

export default services;
