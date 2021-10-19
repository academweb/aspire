<template>
  <div class="">
    <h1 class="text-start text-capitalise border-bottom border-5 border-success">Payment information</h1>
    <StripeForm :amount="callData" :autopay="autopay"  />
  </div>
</template>

<script>
import StripeForm from "./components/StripeForm.vue";
import {mapState} from 'vuex';

export default {
  computed:{
    ...mapState({
      callData: (state) =>  state.call.data.amount.total,
      autopay: (state) =>  state.call.data.autopay,
    })
  },
  components: { StripeForm },
};
</script>

<style>
</style>