import React from "react";
import { UICard as UICardElement } from "../../../core/components/card/ui-card";
import { createComponent } from "@lit/react";

export const UICard = createComponent({
  tagName: "ui-card",
  elementClass: UICardElement,
  react: React,
});
