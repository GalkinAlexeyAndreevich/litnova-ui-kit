<script setup lang="ts">
import "../../../core/components/select/ui-select";

type UISelectOption = {
  label: string;
  value: string;
};

const props = withDefaults(
  defineProps<{
    options?: UISelectOption[];
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    options: () => [],
    modelValue: "",
    placeholder: "Select option",
    disabled: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  const ce = event as CustomEvent<{ value?: string }>;
  emit("update:modelValue", ce.detail?.value ?? "");
};
</script>

<template>
  <ui-select
    :value="props.modelValue"
    :disabled="props.disabled"
    :placeholder="props.placeholder"
    :options.prop="props.options"
    @input="onInput"
  />
</template>

