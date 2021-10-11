<template>
  <div id="app">
<CustomerForm />
  </div>
</template>

<script>
import CustomerForm from './components/CustomerForm.vue';
export default {
  name: 'App',
  components: {
    CustomerForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
