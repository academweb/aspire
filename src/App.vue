<template>
  <div id="app">
    <CallOrderForm />
  </div>
</template>

<script>

import CallOrderForm from "./components/CallOrderForm.vue";
export default {
  name: "App",
  components: {
    CallOrderForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
