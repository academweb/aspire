<template>
  <span
    data-bs-toggle="tooltip"
    :data-bs-placement="position"
    :title="title"
    :ref="refs"
  >
    <slot>
      !
    </slot>
  </span>
</template>

<script>
import {Tooltip} from 'bootstrap';
export default {
  props: {
    title: String,
    position: {
      type: String,
      default: 'left'
    },
    refs: String
  },
  mounted(){
    
    new Tooltip(this.$refs[this.refs], {})
  }
};
</script>

<style>
</style>