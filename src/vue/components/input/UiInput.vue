<script setup lang="ts">
import { onMounted, ref } from "vue";
import "../../../core/components/input/ui-input";

// Prevent Vue from resolving `<ui-input>` inside this component as itself.
defineOptions({ name: "UiInputWrapper" });

type InputType = "text" | "email" | "password" | "search" | "tel" | "url" | "number";

const props = withDefaults(
  defineProps<{
    type?: InputType;
    placeholder?: string;
    modelValue?: string;
    disabled?: boolean;
  }>(),
  {
    type: "text",
    placeholder: "",
    modelValue: "",
    disabled: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const onInput = (event: Event) => {
  // Lit dispatches a CustomEvent("input", { detail: { value } }).
  // Add a guard to avoid feedback loops when Storybook/parent re-renders.
  if (!isMounted.value) return;
  const ce = event as CustomEvent<{ value?: string }>;
  const nextValue = ce.detail?.value ?? "";

  if (nextValue === props.modelValue) return;
  emit("update:modelValue", nextValue);
};
</script>

<template>
  <component
    :is="'ui-input'"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    :disabled="props.disabled"
    @input="onInput"
  />
</template>

