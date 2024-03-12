import { useDispatch, useSelector } from "react-redux";
import TemplateEditor from "../components/SingleTemplate/TemplateEditor/TemplateEditor";
import ImageSettings from "../components/SingleTemplate/TemplateEditor/components/general/Image/ImageSettings";
import TemplateNavbar from "../components/SingleTemplate/TemplateNavbar/TemplateNavbar";
import { setSelectedImageName } from "../store/slices/templatesSlice";
import SectionsMenu from "../components/SingleTemplate/TemplateEditor/components/sectionsMenu/SectionsMenu";
import ColorsPanel from "../shared/components/ColorsPanel/ColorsPanel";

export default function SingleTemplate() {
  const dispatch = useDispatch();
  const toggleColorsPanel = useSelector(
    (state) => state.colors.toggleColorsPanel
  );
  const showImageSettings = useSelector(
    (state) => state.templatesSlice.selectedImageName
  );
  const isSelectingSection = useSelector(
    (state) => state.templatesSlice.isSelectingSection
  );
  const handleOnClose = () => {
    dispatch(setSelectedImageName({ name: "" }));
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
      {isSelectingSection && <SectionsMenu />}
    </>
  );
}
