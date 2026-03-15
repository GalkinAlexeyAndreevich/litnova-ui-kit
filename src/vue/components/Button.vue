<script setup lang="ts">
import '../../core/components/ui-button'

const props = defineProps<{
  variant: 'primary' | 'danger'
}>()
</script>

<template>
  <ui-button :variant="variant">
    <slot>Button</slot>
  </ui-button>
</template>