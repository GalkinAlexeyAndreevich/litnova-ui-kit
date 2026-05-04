<script setup lang="ts">
import "../../../core/components/card/ui-card";
</script>

<template>
  <ui-card>
    <div slot="header">
      <slot name="header"></slot>
    </div>
    <div slot="body">
      <slot name="body"></slot>
    </div>
    <div slot="footer">
      <slot name="footer"></slot>
    </div>
  </ui-card>
</template>
