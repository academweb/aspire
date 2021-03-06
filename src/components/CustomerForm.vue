<template>
  <div>
    <h1
      class="text-start text-capitalise border-bottom border-5 border-success"
    >
      Call order form
    </h1>
    <ValidationObserver v-slot="{ handleSubmit }" ref="form">
      <form @submit.prevent="handleSubmit(onSubmit)" class="needs-validation">
        <div class="my-4 px-2 px-md-5">
          <h4 class="mb-3">
            Use this form to puschase calls either individually or at a
            quarterly or annual discount.
          </h4>
          <div class="py-2">
            <div class="row mb-3">
              <div class="col-4 col-md-3 row align-items-center order-0">
                <p class="mb-0">Client</p>
              </div>
              <ValidationProvider
                name="Client"
                rules="required"
                v-slot="{ errors }"
                tag="div"
                class="
                  col-12 col-md-4
                  row
                  align-items-center
                  order-3 order-md-2
                  mt-3 mt-md-0
                "
              >
                <input
                  class="form-control"
                  type="text"
                  readonly
                  v-model="client"
                  :class="{ 'is-invalid ': !!errors[0] }"
                />
                <span class="text-danger" style="font-size: 14px">{{
                  errors[0]
                }}</span>
                <span class="text-danger" style="font-size: 14px">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <div
                class="col-auto d-flex align-items-center order-1 order-md-2"
              >
                <Tooltip title="What company are you with?" />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-4 col-md-3 row align-items-center order-0">
                <p class="mb-0">Property</p>
              </div>
              <ValidationProvider
                name="Property"
                rules="required"
                v-slot="{ errors }"
                tag="div"
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
                  :class="{ 'is-invalid ': !!errors[0] }"
                >
                  <option selected value="null" disabled>
                    Select property
                  </option>
                  <option
                    v-for="property in properties"
                    :value="property.id"
                    :key="property.id"
                  >
                    {{ property.name }}
                  </option>
                </select>
                <span class="text-danger" style="font-size: 14px">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <div
                class="col-auto d-flex align-items-center order-1 order-md-2"
              >
                <Tooltip
                  title="For which property would you like to purchase calls?"
                />
              </div>
            </div>
          </div>
        </div>

        <FormBlock header="Recurring Monthly Calls">
          <div class="mb-4">
            <p>
              Use this section to purchase regular monthly calls at a annual or
              quarterly discount
            </p>
            <p>For calls for an individual month, go to the next section.</p>
          </div>
          <div class="">
            <p>Choose the number of each type of call you'd like to purchase</p>
            <ul class="list-group my-4" ref="monthly_call">
              <MonthlyCallForm
                :data="call"
                v-for="(call, index) in monthlyCall"
                :key="index"
                @addCall="addItem('monthlyCall')"
                @removeCall="removeItem('monthlyCall', index)"
                :new-item="
                  monthlyCall.length && monthlyCall.length == index + 1
                "
                :index="index"
              />
            </ul>
            <div
              class="alert alert-success px-4"
              role="alert"
              style="max-width: 40rem"
            >
              <h4 class="alert-heading fw-bold">Discount</h4>
              <div>Choose the term to get a discount</div>

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
              <hr class="my-0" />
              <p class="mb-0" style="font-size: 14px">
                * - auto-renews quarterly
              </p>
            </div>

            <ValidationProvider
              name="Starting month"
              rules=""
              v-slot="{ errors }"
              tag="div"
              class="row align-items-center mb-4"
              slim
            >
              <div class="col-12 col-md-2 mb-0">Starting month</div>
              <div class="col-6 col-md-3">
                <select
                  class="form-select"
                  aria-label="Starting date"
                  v-model="starting_date"
                  :class="{ 'is-invalid ': !!errors[0] }"
                >
                  <option selected value="null" disabled>Select</option>
                  <option v-for="m in month" :value="m" :key="m">
                    {{ m }}
                  </option>
                </select>
              </div>
              <div class="col-6 col-md-7">monthly</div>
              <div
                class="col-12 col-md-12 text-danger mt-2"
                style="font-size: 14px"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider>

            <h4>Months to Exclude</h4>
            <div class="form-check mb-2">
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
            <div class="">
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
                  <div class="d-flex align-items-center">
                    <span
                      >Specific months (enter excluded date ranges for
                      calls)</span
                    >
                    <Tooltip
                      :size="24"
                      class="ms-2"
                      title="Helpful to avoid calls during off-season times."
                    />
                  </div>
                </label>
              </div>
              <transition name="fade" type="out-in">
                <ul
                  class="list-group"
                  v-if="exclude != 'all_year'"
                  style="max-width: 40rem"
                >
                  <SpecificMonthForm
                    v-for="(m, index) in excluded_specific_month"
                    :data="m"
                    :index="index"
                    :key="index"
                    @addItem="addItem('excluded_specific_month')"
                    @removeItem="removeItem('excluded_specific_month', index)"
                    :new-item="
                      excluded_specific_month.length &&
                      excluded_specific_month.length == index + 1 &&
                      excluded_specific_month.length < 3
                    "
                  />
                </ul>
              </transition>
            </div>
          </div>
        </FormBlock>

        <FormBlock header="Additional Month Calls">
          <div class="">
            <p>
              Use this section to purchase additional, a la carte calls specific
              to months you choose. If you need to buy calls in bulk, at a
              discount, use the above section instead.
            </p>
            <div class="my-3 ps-0 ps-md-4">
              <p class="mb-1">
                <span class="fw-bold">-</span> Add calls for a specific month,
                such as when you anticipate opening back up after an off-season.
              </p>
              <p class="mb-1">
                <span class="fw-bold">-</span> Buy calls for specific months at
                a time, for example, when you're onboarding staff during March
                and November.
              </p>
            </div>

            <ul class="list-group">
              <CallTypeForm
                :data="call"
                v-for="(call, index) in calls"
                :key="index"
                @addCall="addItem('calls')"
                @removeCall="removeItem('calls', index)"
                :new-item="calls.length && calls.length == index + 1"
                :index="index"
              />
            </ul>
            <p class="text-muted mt-3">
              * - Only use this section to buy a la carte calls. If you need to
              buy calls in bulk, at a discount, use the above section instead.
            </p>
          </div>
        </FormBlock>
        <FormBlock header="Notifications">
          <div class="row">
            <div class="col-12 col-md-6">
              <EmailNotifications
                label="Who should receive shop call notifications?"
                placeholder="Notifications Email"
                name="Notifications Email"
                :data="notification_emails"
                @add="addItem('notification_emails')"
                @remove="removeItem('notification_emails')"
              />
            </div>

            <div class="col-12 col-md-6">
              <EmailNotifications
                label="Who should receive cancellation notifications?"
                placeholder="Cancellation email"
                name="Cancellation Notifications email"
                :data="cancellation_notification_emails"
                @add="addItem('cancellation_notification_emails')"
                @remove="removeItem('cancellation_notification_emails')"
              />
            </div>
          </div>
        </FormBlock>

        <FormBlock header="Order Summary">
          <table class="table table-borderless table-responsive">
            <tbody>
              <tr v-for="coll in resultTableData.monthlyCalls" :key="coll.id">
                <td>{{ coll.label }}</td>
                <td>{{ starting_date }}</td>
                <td>
                  {{ coll.amount }}<br class="d-block d-md-none" />
                  ({{ coll.count }} x {{ coll.price }})
                </td>
              </tr>
              <!-- <tr>
                
                <td>
                  <strong v-show="monthly.standard"
                    >{{ monthly.standard }}x</strong
                  >
                  Standard/mo.
                </td>
                <td>{{ starting_date }}</td>
                <td>
                  {{ resultTableData.standardAmoutn }} ({{ monthly.standard }} x
                  {{ resultTableData.standard }})
                </td>
              </tr>
              <tr>
                <td>
                  <strong v-show="monthly.custom">{{ monthly.custom }}x</strong>
                  Custom/mo.
                </td>
                <td>{{ starting_date }}</td>
                <td>
                  {{ resultTableData.customAmoutn }} ({{ monthly.custom }} x
                  {{ resultTableData.custom }})
                </td>
              </tr> -->
              <tr>
                <td colspan="2">Individual/mo.</td>
                <td>{{ resultTableData.individualCallsAmount }}</td>
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
                <td colspan="2">
                  {{ discountArray[discount].label }} (applied)
                </td>
                <td>{{ resultTableData.discount }}</td>
              </tr>
              <tr>
                <td colspan="2">Payment fee</td>
                <td>
                  {{ resultTableData.paymentFeeAmount }}
                  <span class="text-muted"
                    >({{ resultTableData.payment_fee }})</span
                  >
                </td>
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
    </ValidationObserver>
  </div>
</template>

<script>
import axios from "axios";
import FormBlock from "./components/FormBlock.vue";
import CallTypeForm from "./components/CallTypeForm.vue";
import mock from "./utils/mock";
import Tooltip from "./components/Tooltip.vue";
import SpecificMonthForm from "./components/SpecificMonthForm.vue";
import MonthlyCallForm from "./components/MonthlyCallForm.vue";
import EmailNotifications from "./components/EmailNotifications.vue";

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
    SpecificMonthForm,
    MonthlyCallForm,
    EmailNotifications,
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
      client: "Client",
      property: null,
      monthlyCall: [
        {
          type: null,
          count: 1,
        },
      ],
      monthly: {
        custom: null,
        standard: null,
      },
      discount: "quarterly",
      starting_date: null,
      exclude: "all_year",
      specific_month: [
        {
          start: null,
          end: null,
        },
      ],
      excluded_specific_month: [""],
      calls: [
        {
          type: null,
          count: 1,
          start_month: null,
        },
      ],
      notification_emails: [""],
      cancellation_notification_emails: [""],
    };
  },
  computed: {
    resultTableData() {
      const notEmpty = (val) => !!val.type && !!val.count;
      const standardPrice =
        this.callTypes.find((call) => call.id === 2)?.price || 0;
      const customPrice =
        this.callTypes.find((call) => call.id === 1)?.price || 0;

      const standardCallsAmount = standardPrice * this.monthly.standard;
      const customCallsAmount = customPrice * this.monthly.custom;

      const monthlyCallsAmount = this.monthlyCall.reduce((acc, c) => {
        const price =
          this.callTypes.find((call) => call.id === c.type)?.price || 1;
        return c?.type ? acc + c.count * price : acc;
      }, 0);

      const monthlyCalls = this.monthlyCall.filter(notEmpty).map((c) => {
        const callItem = this.callTypes.find(
          (call) => !c?.type || call.id === c.type
        );
        return {
          label: callItem?.name,
          count: c.count,
          price: moneyFilter(callItem?.price),
          amount: moneyFilter(callItem?.price * c.count),
        };
      });

      const individualCallsAmount = this.calls.reduce((acc, c) => {
        const price =
          this.callTypes.find((call) => call.id === c.type)?.price || 1;
        return c?.type ? acc + c.count * price : acc;
      }, 0);
      // const total = customCallsAmount + standardCallsAmount;
      const discount =
        monthlyCallsAmount -
        monthlyCallsAmount *
          ((100 - this.discountArray[this.discount].amount) / 100);
      const payment_fee = "3%";
      // this.discount === "annual" ? "3%" : "3% (per payment)";

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
      const sum = monthlyCallsAmount - discount + individualCallsAmount;
      const paymentFee = sum - sum * ((100 - 3) / 100);
      return {
        custom: moneyFilter(customPrice),
        standard: moneyFilter(standardPrice),
        standardAmoutn: moneyFilter(standardCallsAmount),
        customAmoutn: moneyFilter(customCallsAmount),
        individualCallsAmount: moneyFilter(individualCallsAmount),
        total: moneyFilter(sum + paymentFee),
        discount: moneyFilter(discount),
        payment_fee: payment_fee,
        paymentFeeAmount: moneyFilter(paymentFee),
        calls: calls,
        monthlyCallsAmount: moneyFilter(monthlyCallsAmount),
        monthlyCalls: monthlyCalls,
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
    addItem(type) {
      let el = null;
      switch (type) {
        case "calls":
          el = {
            type: null,
            count: 1,
            start_month: null,
          };
          break;
        case "monthlyCall":
          el = {
            type: null,
            count: 1,
          };
          break;
        case "excluded_specific_month":
          el = "";
          break;
        case "notification_emails":
          el = "";
          break;
        case "cancellation_notification_emails":
          el = "";
          break;
        default:
          el = "";
      }
      this[type].push(el);
    },
    removeItem(ob, index) {
      this[ob].splice(index, 1);
    },
    onSubmit() {
      // const checkCall = this.calls.filter((el) => !el.type);
      // if (checkCall.length) {
      //   this.$refs.form.setErrors({
      //     type: ["Please check all call type"],
      //   });
      //   return;
      // }
      this.$nextTick(() => {
        this.$refs.monthly_call.scrollIntoView({
          block: "start",
          scrollBehavior: "smooth",
        });
      });

      // const monthlyCall = this.calls.filter((el) => !el.type);
      // if (monthlyCall.length) {
      //   this.$refs.form.setErrors({
      //     monthly_call: ["Please check all call type"],
      //   });
      //   this.$refs.monthly_call.scrollTop = 0
      //   return;
      // }
      const request = {
        client: this.client,
        property: this.property,
        calls: this.calls,
        discount: this.discount,
        monthly: this.monthlyCall,
        amount: this.resultTableData,
      };
      this.$store.commit("setData", request);
      this.$emit("setStep", "step-2");
    },
  },
  async mounted() {
    // await this.getCallTypes()
  },
};
</script>

<style>
</style>