import Panel from "../../../../../../shared/components/Panel/Panel";
import { useDispatch, useSelector } from "react-redux";
import { setButton } from "../../../../../../store/slices/templatesSlice";

export default function ButtonSettings({ onClose }) {
  const dispatch = useDispatch();

  const buttonSettings = useSelector((state) => {
    const section =
      state.templatesSlice.templates[state.templatesSlice.selectedTemplate]
        .sections[state.templatesSlice.selectedSection];
    let buttons = null;
    const deepSelectData = state.templatesSlice.selectDeepData;
    if (deepSelectData) {
      buttons =
        section.state[deepSelectData.module][deepSelectData.index].buttons;
    } else {
      buttons = section.state.buttons;
    }
    const index = buttons?.findIndex(
      (el) => el.id == state.templatesSlice.selectedButtonId
    );
    return buttons[index];
  });

  const handleValue = (e) => {
    let val = e.target.value;
    dispatch(setButton({ name: e.target.name, value: val }));
  };
  const placeholder = () => {
    switch (buttonSettings?.action?.name) {
      case "email address":
        return "example@example.com";
        break;
      case "phone number":
        return "+123456788";
        break;

      default:
        return "http://example.com";
        break;
    }
  };
  return (
    <>
      <div className="image-settings">
        <Panel title={buttonSettings?.text} onClose={onClose}>
          <div className="form-group mb-3">
            <label className="mb-2">
              <b>Style</b>
            </label>
            <select
              value={buttonSettings?.className}
              className="form-control"
              name="className"
              onChange={handleValue}
            >
              <option value="primary">Solid</option>
              <option value="outline">Outline</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label className="mb-2">
              <b>Action</b>
            </label>
            <select
              value={buttonSettings?.action?.name}
              className="form-control"
              name="name"
              onChange={handleValue}
            >
              <option value="external link">External Link</option>
              <option value="email address">Email Address</option>
              <option value="phone number">Phone Number</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="value"
              className="form-control"
              placeholder={placeholder()}
              value={buttonSettings?.action?.value}
              onInput={handleValue}
            />
          </div>
        </Panel>
      </div>
    </>
  );
}
