<script setup lang="ts">
import '../../../core/components/button/ui-button'

const props = defineProps<{
  variant: 'primary' | 'danger'
}>()
</script>

<template>
  <ui-button :variant="variant">
    <slot></slot>
  </ui-button>
</template>