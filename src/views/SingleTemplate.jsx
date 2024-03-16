import { useDispatch, useSelector } from "react-redux";
import TemplateEditor from "../components/SingleTemplate/TemplateEditor/TemplateEditor";
import ImageSettings from "../components/SingleTemplate/TemplateEditor/components/general/Image/ImageSettings";
import TemplateNavbar from "../components/SingleTemplate/TemplateNavbar/TemplateNavbar";
import {
  setSelectedButtonId,
  setSelectedImageName,
} from "../store/slices/templatesSlice";
import SectionsMenu from "../components/SingleTemplate/TemplateEditor/components/sectionsMenu/SectionsMenu";
import ColorsPanel from "../shared/components/ColorsPanel/ColorsPanel";
import ButtonSettings from "../components/SingleTemplate/TemplateEditor/components/general/Button/ButtonSettings";

export default function SingleTemplate() {
  const dispatch = useDispatch();
  const toggleColorsPanel = useSelector(
    (state) => state.colors.toggleColorsPanel
  );
  const showImageSettings = useSelector(
    (state) => state.templatesSlice.selectedImageName
  );
  const showButtonSettings = useSelector(
    (state) => state.templatesSlice.selectedButtonId
  );
  const isSelectingSection = useSelector(
    (state) => state.templatesSlice.isSelectingSection
  );
  const handleOnClose = () => {
    dispatch(setSelectedImageName({ name: "" }));
  };
  const handleOnCloseButtonPanel = () => {
    dispatch(setSelectedButtonId({ id: "" }));
  };
  let classes = "";
  if (toggleColorsPanel) {
    classes = "show";
  } else {
    classes = "";
  }
  return (
    <>
      <ColorsPanel className={classes} />
      <TemplateNavbar />
      <TemplateEditor />
      {showImageSettings && <ImageSettings onClose={handleOnClose} />}
      {showButtonSettings && (
        <ButtonSettings onClose={handleOnCloseButtonPanel} />
      )}
      {isSelectingSection && <SectionsMenu />}
    </>
  );
}
