<template>
  <div class="container mx-auto my-5">
    <h1
      class="
        text-start text-capitalise
        display-2
        border-bottom border-5 border-success
      "
    >
      Call order form
    </h1>

    <div class="my-4 px-5">
      <h4 class="mb-3">
        Use this form to puschase calls either individually or at a quarterly or
        annual discount.
      </h4>
      <div class="py-2">
        <div class="row mb-3">
          <div class="col-3 row align-items-center">
            <p class="fs-4 mb-0">Client</p>
          </div>
          <div class="col-auto row align-items-center">
            <select
              class="form-select form-select-lg"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-3 row align-items-center">
            <p class="fs-4 mb-0">Property</p>
          </div>
          <div class="col-auto row align-items-center">
            <select
              class="form-select form-select-lg"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <FormBlock header="Monthly Calls">
      <div class="mb-4 fs-5">
        <p>
          Use this section to purchase regular monthly calls at a monthly or
          quarterly discount.
        </p>
        <p>For individual calls, got to the next section</p>
      </div>
      <div class="mb-4 fs-5">
        <p>Choose the number of each type of call you'd like to purchase</p>

        <div class="row align-items-center mb-4">
          <div class="col-12 col-md-2 mb-0">Custom</div>
          <div class="col-6 col-md-2">
            <select
              class="form-select form-select-lg"
              aria-label="Default select example"
            >
              <option v-for="m in 12" :value="m" :key="m">{{ m }}</option>
            </select>
          </div>
          <div class="col-6 col-md-auto">monthly</div>
        </div>

        <div class="row align-items-center mb-4">
          <div class="col-12 col-md-2 mb-0">Standart</div>
          <div class="col-6 col-md-2">
            <select
              class="form-select form-select-lg"
              aria-label="Default select example"
            >
              <option v-for="m in 12" :value="m" :key="m">{{ m }}</option>
            </select>
          </div>
          <div class="col-6 col-md-auto">monthly</div>
        </div>

        <div class="alert alert-success px-4" role="alert">
          <h4 class="alert-heading fw-bold">Discount</h4>
          <p>Choose the term to get a discount</p>

          <div class="my-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="discount"
                id="quarterly"
                value="quarterly"
              />
              <label class="form-check-label" for="quarterly">
                Quarterly 5% *
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="discount"
                id="annual"
                checked
                value="annual"
              />
              <label class="form-check-label" for="annual"> Annual 10% </label>
            </div>
          </div>
          <hr />
          <p class="mb-0">* - Auto-renews quarterly</p>
        </div>

        <div class="row align-items-center mb-4">
          <div class="col-12 col-md-2 mb-0">Starting month</div>
          <div class="col-6 col-md-2">
            <select
              class="form-select form-select-lg"
              aria-label="Default select example"
            >
              <option v-for="m in 12" :value="m" :key="m">{{ m }}</option>
            </select>
          </div>
          <div class="col-6 col-md-auto">monthly</div>
        </div>

        <h4>Months to Exclude</h4>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exclude"
                id="all_year"
              />
              <label class="form-check-label" for="all_year"> All year </label>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="radio"
                name="exclude"
                id="specific_month"
              />
              <label class="form-check-label" for="specific_month">
                Specific months
              </label>
            </div>
            <p>Enter excluded date ranges for calls</p>
            <div class="mb-3 row">
              <label for="excluded_start" class="col-sm-4 col-form-label"
                >Starting date</label
              >
              <div class="col-sm-8">
                <input type="date" class="form-control" id="excluded_start" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="excluded_end" class="col-sm-4 col-form-label"
                >Ending date</label
              >
              <div class="col-sm-8">
                <input type="date" class="form-control" id="excluded_end" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormBlock>

    <FormBlock header="Individual Calls">
      <div class="fs-5">
        <p>Use this form to purchase individual calls without a discount.</p>
      </div>
    </FormBlock>
    <FormBlock header="Notifications">
      <div class="fs-5">
        <p>Who should receive shop call notifications?</p>
        <p>Enter email addresses, separated by commas</p>
      </div>
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Emails"
        aria-label=".form-control-lg example"
      />
    </FormBlock>
    <FormBlock header="Order Summary">
      <table class="table table-borderless fs-5">
        <tbody>
          <tr>
            <td>5 Custom/mo.</td>
            <td>60/year</td>
            <td>$ x.xxx.xx</td>
          </tr>
          <tr>
            <td>5 Standart/mo.</td>
            <td>60/year</td>
            <td>$ x.xxx.xx</td>
          </tr>
          <tr>
            <td colspan="2">Annual discount (applied)</td>
            <td>$ x.xxx.xx</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td ><hr class="my-0"></td>
          </tr>
          <tr>
            <td colspan="2" class="fw-bold">Total</td>
            <td >$ x.xxx.xx</td>
          </tr>
        </tbody>
      </table>
    </FormBlock>
  </div>
</template>

<script>
import FormBlock from "./components/FormBlock.vue";
export default {
  components: {
    FormBlock,
  },
};
</script>

<style>
</style>