import React from "react";
import { UISelect as UISelectElement } from "../../../core/components/select/ui-select";
import { createComponent } from "@lit/react";

export const UISelect = createComponent({
  tagName: "ui-select",
  elementClass: UISelectElement,
  react: React,
});

