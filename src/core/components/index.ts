import { defineUIButton } from "./button";
import { defineUICard } from "./card";
import { defineUIInput } from "./input";

export * from "./button";
export * from "./card";
export * from "./input";

export function defineAll() {
  defineUIInput();
  defineUIButton();
  defineUICard();
}