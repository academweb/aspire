<template>
  <div class="mt-4" style="margin-bottom: 2rem">
    <h3 class=" mb-3 bg-light text-success fw-bold p-4 border-start border-5 border-success">
      {{ header }}
    </h3>
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