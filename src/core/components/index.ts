import { defineUIButton } from "./button";
import { defineUICard } from "./card";
import { defineUIInput } from "./input";
import { defineUISelect } from "./select";

export * from "./button";
export * from "./card";
export * from "./input";
export * from "./select";

export function defineAll() {
  defineUIInput();
  defineUIButton();
  defineUICard();
  defineUISelect()
}