import { useDispatch } from "react-redux";
import "./SectionsMenu.scss";
import {
  handleSelectTemplateMenu,
  addNewSection,
} from "../../../../../store/slices/templatesSlice";
import { useState } from "react";

export default function SectionsMenu() {
  const [tab, setTab] = useState("hero");
  const [sections, setSection] = useState([
    {
      id: 1,
      title: "Hero",
      sections: [
        {
          id: 1,
          title: "default hero",
          type: "heros",
          img: "/src/assets/sections/heros/hero.png",
          component: "hero",
        },
        {
          id: 2,
          title: "hero-2",
          type: "heros",
          img: "/src/assets/sections/heros/hero2.png",
          component: "hero2",
        },
        {
          id: 3,
          title: "hero-2",
          type: "heros",
          img: "/src/assets/sections/heros/hero3.png",
          component: "hero3",
        },
      ],
    },
    {
      id: 2,
      title: "Services",
      sections: [
        {
          id: 1,
          title: "default services",
          type: "services",
          img: "/src/assets/sections/services/service.png",
          component: "services",
        },
        {
          id: 2,
          title: "services-2",
          type: "services",
          img: "/src/assets/sections/services/service2.png",
          component: "services2",
        },
        {
          id: 3,
          title: "services-3",
          type: "services",
          img: "/src/assets/sections/services/service3.png",
          component: "services3",
        },
      ],
    },
    {
      id: 3,
      title: "Logos",
      sections: [
        {
          id: 1,
          title: "default clients",
          type: "clients",
          img: "/src/assets/sections/clients/clients.png",
          component: "clients",
        },
        {
          id: 2,
          title: "clients-2",
          type: "clients",
          img: "/src/assets/sections/clients/clients2.png",
          component: "clients2",
        },
      ],
    },
    {
      id: 4,
      title: "Gallery",
      sections: [
        {
          id: 1,
          title: "default gallery",
          type: "gallery",
          img: "/src/assets/sections/gallery/gallery.png",
          component: "gallery",
        },
        {
          id: 2,
          title: "gallery 2",
          type: "gallery",
          img: "/src/assets/sections/gallery/gallery2.png",
          component: "gallery2",
        },
        {
          id: 3,
          title: "gallery 3",
          type: "gallery",
          img: "/src/assets/sections/gallery/gallery3.png",
          component: "gallery3",
        },
      ],
    },
  ]);
  const dispatch = useDispatch();
  function closeMenu() {
    dispatch(handleSelectTemplateMenu());
  }
  function addSection(section) {
    dispatch(addNewSection(section));
    closeMenu();
  }

  const sectionsTemplate = sections.map((el) => {
    let active = "";
    if (el.title.toLowerCase() === tab.toLowerCase()) {
      active = " active";
    }
    return (
      <div
        key={el.id}
        onClick={() => setTab(el.title.toLowerCase())}
        className={"category" + active}
      >
        <b>{el.title}</b>
      </div>
    );
  });

  const filtered = sections.find(
    (el) => el.title.toLowerCase() === tab.toLowerCase()
  );
  const subSections = filtered.sections.map((el) => (
    <div className="section" onClick={() => addSection(el)} key={el.id}>
      <img src={el.img} alt="" />
    </div>
  ));

  return (
    <>
      <div className="sections-menu">
        <h4>
          Choose Section{" "}
          <button onClick={closeMenu}>
            <i className="fa fa-times"></i>
          </button>
        </h4>
        <div className="menu">
          <div className="categories">{sectionsTemplate}</div>
          <div className="sections">{subSections}</div>
        </div>
      </div>
      <div className="overlay" onClick={closeMenu}></div>
    </>
  );
}
