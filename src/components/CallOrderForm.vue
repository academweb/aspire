<template>
  <div class="container mx-auto my-5">
    <transition name="fade" mode="out-in">
      <component :is="componentId[currentStep]" @setStep="setStep"></component>
    </transition>

    <div class="alert alert-secondary" role="alert">
      Test btn
      <hr />
      <div class="row">
        <div
          class="btn-group mx-auto"
          role="group"
          aria-label="Basic outlined example"
          style="max-width: 20rem"
        >
          <button
            v-for="(key, val) in componentId"
            :key="val"
            @click.prevent="setStep(val)"
            type="button"
            class="btn btn-outline-primary"
          >
            {{ key }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerForm from "./CustomerForm.vue";
import FinalForm from "./FinalForm.vue";
import PaymentForm from "./PaymentForm.vue";
import { mapState } from "vuex";

export default {
  components: { CustomerForm, FinalForm, PaymentForm },
  data() {
    return {
      componentId: {
        "step-1": "CustomerForm",
        "step-2": "PaymentForm",
        "step-3": "FinalForm",
      },
      currentStep: "step-1",
    };
  },
  computed: {
    ...mapState({
      callData: (state) => state.call.data,
    }),
  },
  methods: {
    setStep(step) {
      this.currentStep = step;
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.form-control-invalid{
  display: inline-block;
  color: var(--bs-danger);
  font-size: 14px;
  min-height: 22px;
}
</style>