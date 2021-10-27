<template>
  <div class="mt-4" style="margin-bottom: 1rem">
    <p class=" mb-3 bg-light  fw-bold px-3 py-2 lead">
      <slot name="header"></slot>
    </p>
    <div class="py-2 px-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    header: String,
  },
  
};
</script>

<style>
</style>