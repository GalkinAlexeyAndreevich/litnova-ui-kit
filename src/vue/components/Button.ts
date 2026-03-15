import { defineComponent, h } from 'vue';
import type { PropType, SetupContext } from 'vue';
// Register the underlying web component so styles (Shadow DOM) apply
import '../../core/components/ui-button';

const variants = ['primary', 'danger'] as const;
type Variant = (typeof variants)[number];

export const UiButton = defineComponent({
  name: 'UiButton',
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'primary',
    },
  },
  setup(props: { variant: Variant }, { slots }: SetupContext) {
    return () => h('ui-button', { variant: props.variant }, slots.default?.());
  },
});
