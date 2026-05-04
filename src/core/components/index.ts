import { defineUIButton } from "./button";
import { defineUICard } from "./card";
import { defineUIInput } from "./input";

export function defineAll() {
  defineUIInput();
  defineUIButton();
  defineUICard();
}