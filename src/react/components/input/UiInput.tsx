import React from "react";
import { UIInput as UIInputElement } from "../../../core/components/input/ui-input";
import { createComponent } from "@lit/react";

export const UIInput = createComponent({
  tagName: "ui-input",
  elementClass: UIInputElement,
  react: React,
});

