<template>
  <div class="container mx-auto my-5">
    <h1
      class="text-start text-capitalise border-bottom border-5 border-success"
    >
      Call order form
    </h1>
    <form @submit="onSubmit" class="needs-validation">
      <div class="my-4 px-2 px-md-5">
        <h4 class="mb-3">
          Use this form to puschase calls either individually or at a quarterly
          or annual discount.
        </h4>
        <div class="py-2">
          <div class="row mb-3">
            <div class="col-4 col-md-3 row align-items-center order-0">
              <p class="mb-0">Client</p>
            </div>
            <div
              class="
                col-12 col-md-4
                row
                align-items-center
                order-3 order-md-2
                mt-3 mt-md-0
              "
            >
              <select class="form-select" aria-label="Client" v-model="client" required>
                <option selected value="null" disabled>Select client</option>
                <option
                  v-for="client in clients"
                  :value="client.id"
                  :key="client.id"
                >
                  {{ client.name }}
                </option>
              </select>
            </div>
            <div class="col-auto d-flex align-items-center order-1 order-md-2">
              <Tooltip title="What company are you with?" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4 col-md-3 row align-items-center order-0">
              <p class="mb-0">Property</p>
            </div>
            <div
              class="
                col-12 col-md-4
                row
                align-items-center
                order-3 order-md-2
                mt-3 mt-md-0
              "
            >
              <select
                class="form-select"
                aria-label="Property"
                v-model="property"
                required
              >
                <option selected value="null" disabled>Select property</option>
                <option
                  v-for="property in properties"
                  :value="property.id"
                  :key="property.id"
                >
                  {{ property.name }}
                </option>
              </select>
            </div>
            <div class="col-auto d-flex align-items-center order-1 order-md-2">
              <Tooltip
                title="For which property would you like to purchase calls?"
              />
            </div>
          </div>
        </div>
      </div>

      <FormBlock header="Monthly Calls">
        <div class="mb-4">
          <p>
            Use this section to purchase regular monthly calls at a monthly or
            quarterly discount.
          </p>
          <p>For individual calls, got to the next section</p>
        </div>
        <div class="">
          <p>Choose the number of each type of call you'd like to purchase</p>
          <div class="row align-items-center mb-4">
            <div class="col-12 col-md-2 mb-0">Standard</div>
            <div class="col-6 col-md-2">
              <select
                class="form-select"
                aria-label="Standard"
                v-model="monthly.standard"
                required
              >
                <option selected value="null" disabled>Select</option>
                <option v-for="m in 999" :value="m" :key="m">{{ m }}</option>
              </select>
            </div>
            <div class="col-6 col-md-auto">monthly</div>
          </div>

          <div class="row align-items-center mb-4">
            <div class="col-12 col-md-2 mb-0">Custom</div>
            <div class="col-6 col-md-2">
              <select
                class="form-select"
                aria-label="Custom"
                v-model="monthly.custom"
                required
              >
                <option selected value="null" disabled>Select</option>
                <option v-for="m in 999" :value="m" :key="m">{{ m }}</option>
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
                  v-model="discount"
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
                  v-model="discount"
                />
                <label class="form-check-label" for="annual">
                  Annual 10%
                </label>
              </div>
            </div>
            <hr />
            <p class="mb-0">* - Auto-renews quarterly</p>
          </div>

          <div class="row align-items-center mb-4">
            <div class="col-12 col-md-2 mb-0">Starting month</div>
            <div class="col-6 col-md-2">
              <select
                class="form-select"
                aria-label="starting date"
                v-model="starting_date"
                required
              >
                <option selected value="null" disabled>Select</option>
                <option v-for="m in month" :value="m" :key="m">{{ m }}</option>
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
                  value="all_year"
                  id="all_year"
                  v-model="exclude"
                />
                <label class="form-check-label" for="all_year"
                  >No exclusions (run calls all year)
                </label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exclude"
                  value="specific_month"
                  id="specific_month"
                  v-model="exclude"
                />
                <label class="form-check-label" for="specific_month">
                  Specific months
                </label>
              </div>
              <p>
                Enter excluded date ranges for calls
                <Tooltip
                  title="Helpful to avoid calls during off-season times."
                />
              </p>
              <div class="mb-3 row">
                <label for="excluded_start" class="col-sm-4 col-form-label"
                  >Starting date</label
                >
                <div class="col-sm-8">
                  <input
                    v-model="specific_month.start"
                    type="date"
                    class="form-control"
                    id="excluded_start"
                    :disabled="exclude === 'all_year'"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="excluded_end" class="col-sm-4 col-form-label"
                  >Ending date</label
                >
                <div class="col-sm-8">
                  <input
                    v-model="specific_month.end"
                    type="date"
                    class="form-control"
                    id="excluded_end"
                    :disabled="exclude === 'all_year'"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormBlock>

      <FormBlock header="Individual Calls">
        <div class="">
          <p>Use this form to purchase individual calls without a discount.</p>
          <ul class="list-group">
            <CallTypeForm
              :data="call"
              v-for="(call, index) in calls"
              :key="index"
              @addCall="addCall"
              @removeCall="removeCall"
              :new-item="calls.length && calls.length == index + 1"
              :index="index"
            />
          </ul>
        </div>
      </FormBlock>
      <FormBlock header="Notifications">
        <div class="">
          <p>Who should receive shop call notifications?</p>
        </div>
        <div
          class="row align-items-center mb-2"
          v-for="(email, index) in notification_emails"
          :key="index"
        >
          <div class="col-10 col-md-4">
            <input
              class="form-control"
              type="email"
              placeholder="Email"
              aria-label=".form-control-lg example"
              v-model="notification_emails[index]"
              required
            />
          </div>
          <div class="col-2">
            <button
              class="btn"
              v-if="
                notification_emails.length &&
                notification_emails.length == index + 1
              "
              @click.prevent="addEmail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-journal-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                />
                <path
                  d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                />
                <path
                  d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                />
              </svg>
            </button>
            <button v-else @click.prevent="removeEmail(index)" class="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-journal-minus text-danger"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                />
                <path
                  d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                />
              </svg>
            </button>
          </div>
        </div>
      </FormBlock>

      <FormBlock header="Order Summary">
        <table class="table table-borderless table-responsive">
          <tbody>
            <tr>
              <td>{{ monthly.standard }} Standard/mo.</td>
              <td>{{ starting_date }}</td>
              <td>{{ resultTableData.standardAmoutn }}</td>
            </tr>
            <tr>
              <td>{{ monthly.custom }} Custom/mo.</td>
              <td>{{ resultTableData.calls.length ? "--" : starting_date }}</td>
              <td>{{ resultTableData.customAmoutn }}</td>
            </tr>
            <tr
              v-for="(coll, index) in resultTableData.calls"
              :key="coll.id"
              class="text-muted"
              style="font-size: 14px"
            >
              <td class="ps-4">{{ index + 1 }}. {{ coll.label }}</td>
              <td>{{ coll.start }}</td>
              <td>
                {{ coll.amount }}<br class="d-block d-md-none" />
                ({{ coll.count }} x {{ coll.price }})
              </td>
            </tr>
            <tr>
              <td colspan="2">{{ discountArray[discount].label }} (applied)</td>
              <td>{{ resultTableData.discount }}</td>
            </tr>
            <tr>
              <td colspan="2">Payment fee</td>
              <td>{{ resultTableData.payment_fee }}</td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td><hr class="my-0" /></td>
            </tr>
            <tr class="fw-bold fs-3">
              <td colspan="2">Total</td>
              <td>{{ resultTableData.total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-center text-md-end">
          <button type="submit" class="btn btn-lg btn-success px-5">
            Place order
          </button>
        </div>
      </FormBlock>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import FormBlock from "./components/FormBlock.vue";
import CallTypeForm from "./components/CallTypeForm.vue";
import mock from "./utils/mock";
import Tooltip from "./components/Tooltip.vue";

const moneyFilter = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
};

export default {
  components: {
    FormBlock,
    CallTypeForm,
    Tooltip,
  },
  data() {
    return {
      callTypes: mock.callTypes,
      clients: mock.clients,
      properties: mock.properties,
      month: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      discountArray: {
        quarterly: {
          label: "Quarterly discount 5%",
          amount: 5,
        },
        annual: {
          label: "Annual discount 10%",
          amount: 10,
        },
      },
      client: null,
      property: null,
      monthly: {
        custom: 1,
        standard: 1,
      },
      discount: "quarterly",
      starting_date: null,
      exclude: "all_year",
      specific_month: {
        start: null,
        end: null,
      },
      calls: [
        {
          type: null,
          count: 1,
          start_month: null,
        },
      ],
      notification_emails: [""],
    };
  },
  computed: {
    resultTableData() {
      const standardPrice =
        this.callTypes.find((call) => call.id === 2)?.price || 1;
      const standardCallsAmount = standardPrice * this.monthly.standard;
      const customCallsAmount =
        this.calls.reduce((acc, c) => {
          const price =
            this.callTypes.find((call) => call.id === c.type)?.price || 1;
          return c?.type ? acc + c.count * price : acc;
        }, 0) * this.monthly.custom;
      const total = customCallsAmount + standardCallsAmount;
      const discount =
        total -
        total * ((100 - this.discountArray[this.discount].amount) / 100);
      const payment_fee =
        this.discount === "annual" ? "3.5%" : "3.5% (per payment)";
      const notEmpty = (val) => !!val.type && !!val.count;
      const calls = this.calls.filter(notEmpty).map((c) => {
        const callItem = this.callTypes.find(
          (call) => !c?.type || call.id === c.type
        );
        return {
          label: callItem?.name,
          count: c.count,
          start: c.start_month,
          price: moneyFilter(callItem?.price),
          amount: moneyFilter(callItem?.price * c.count),
        };
      });
      return {
        custom: null,
        standard: null,
        standardAmoutn: moneyFilter(standardCallsAmount),
        customAmoutn: moneyFilter(customCallsAmount),
        total: moneyFilter(total - discount),
        discount: moneyFilter(discount),
        payment_fee: payment_fee,
        calls: calls,
      };
    },
  },
  methods: {
    async getCallTypes() {
      try {
        // const {data} = await axios.get('/api/call-types')
        const data = await axios({
          method: "GET",
          baseURL: "https://aspire.academweb.tech/",
          url: "/api/call-types",
          // params: {
          //   api_token: '6cbded2788b7a71f1920043b6df4964c0c5d167a5895c0a9fcfe8729669280fa'
          // },
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 6cbded2788b7a71f1920043b6df4964c0c5d167a5895c0a9fcfe8729669280fa",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log("data :>> ", data);
        this.calltypes = data;
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    addCall() {
      this.calls.push({
        type: null,
        count: 1,
        start_month: null,
      });
    },
    addEmail() {
      this.notification_emails.push("");
    },
    removeEmail(index) {
      this.notification_emails.splice(index, 1);
    },
    removeCall(index) {
      this.calls.splice(index, 1);
    },
    onSubmit(e){
      e.preventDefault();
      console.log('e.target :>> ', e.target);

    }
  },
  async mounted() {
    // await this.getCallTypes()
  },
};
</script>

<style>
</style>