<template>
  <div class="mt-4" style="margin-bottom: 3rem">
    <p class="display-5 mb-3 bg-light text-success fw-bold p-4 border-start border-5 border-success">
      {{ header }}
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