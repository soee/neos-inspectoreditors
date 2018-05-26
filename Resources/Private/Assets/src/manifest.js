import manifest from "@neos-project/neos-ui-extensibility";
import ColorPickerEditor from "./ColorPickerEditor";
manifest("Soee.InspectorEditors:ColorPickerEditor", {}, globalRegistry => {
  const editorsRegistry = globalRegistry.get("inspector").get("editors");
  editorsRegistry.set("Soee.InspectorEditors/ColorPickerEditor", {
    component: ColorPickerEditor
  });
});
