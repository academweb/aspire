<template>
  <div class="card mx-auto my-4" style="max-width: 30rem">
    <h5 class="card-header">Please enter you card number</h5>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <div class="my-2">
        <code> { test_card_number: 4242 4242 4242 4242 } </code>
      </div>

      <form method="POST" @submit.prevent="onSubmit">
        <div
          class="alert"
          role="alert"
          v-if="!!alert.message"
          :class="alertType[alert.type]"
          @close="
            alert.type = null;
            alert.message = null;
          "
        >
          {{ alert.message }}
        </div>
        <div>
          <input type="hidden" name="token" />

          <div class="mb-3 p-1 border">
            <div id="card-element" class="my-input"></div>
          </div>

          <div v-if="autopay === 'quarterly'" class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="recurringMode"
              id="recurringMode"
            />
            <label class="form-check-label" for="recurringMode">
              Enroll in autopay
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-lg btn-success w-100 fw-bolder"
          :disabled="loader || stripeErrors"
        >
          <template v-if="loader"> Please wait ... </template>
          <template v-else> Pay {{ amount }} </template>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

export default {
  props: {
    amount: [String, Number],
    autopay: String,
  },
  data() {
    return {
      cardElement: null,
      stripe: null,
      elements: null,
      recurringMode: null,
      stripeErrors: false,
      payment_plan: "quarterly",
      loader: false,
      alert: {
        type: null,
        message: null,
      },
      alertType: {
        danger: "alert-danger",
      },
    };
  },
  methods: {
    async cardMount() {
      this.stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
      this.elements = this.stripe.elements();

      var style = {
        base: {
          iconColor: "#666ee8",
          color: "#31325f",
          lineHeight: "40px",
          fontWeight: 300,
          fontFamily: "Arial",
          fontSize: "15px",

          "::placeholder": {
            color: "#cfd7e0",
          },
        },
      };

      this.cardElement = this.elements.create("card", {
        style: style,
        // placeholder: "Card number",
      });
      if (document.querySelector("#card-element"))
        this.cardElement.mount("#card-element");

      this.cardElement.on(
        "change",
        function (event) {
          if (event.complete) {
            this.stripeErrors = false;
            this.alert.type = null;
            this.alert.message = null;
            // enable payment button
          } else if (event.error) {
            this.stripeErrors = true;
            this.alert.type = "danger";
            this.alert.message = event.error?.message;
            // show validation to customer
          }
        }.bind(this)
      );
    },
    async onSubmit() {
      this.loader = true;
      var options = {
        // address_zip: store.getters.GET_ZIP,
      };
      try {
        const { paymentMethod } = await this.stripe.createPaymentMethod(
          "card",
          this.cardElement,
          options
        );
        this.token = paymentMethod?.id;
        const response = await this.payment(
          paymentMethod?.id,
          this.recurringMode
        );
        this.loader = false;
        console.log("response :>> ", response);
        // if (response && 'data' in response) {
        //   emit('paid', {...response, ...response.data});
        // }
      } catch (error) {
        // alert.type = 'danger';
        // alert.message = error.response?.data?.message || error.message;
        this.loader = false;
        console.log("error :>> ", error);
      }
      // stripe.createToken(cardNumberElement, options).then(setOutcome);
    },
    async payment(token_id, recurring_mode) {
      try {
        const { data } = await axios.post(`/api/v1/contracts/purchase`, {
          payment_method_id: token_id,
          recurring_mode: recurring_mode,
          // monthly_mode: payment_plan === 'monthly',
        });
        // alert.type = 'success';
        // alert.message = 'Success! Payment was done.';
        return data;
      } catch (error) {
        // alert.type = 'danger';
        // alert.message = error.response?.data?.message || error.message;
      }
    },
  },
  mounted() {
    this.cardMount();
  },
};
</script>

<style>
pre {
  font-size: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
}
</style>