<template>
    <div class="container mx-auto my-5">
        <h1 class="
                    text-start text-capitalise
                    display-2
                    border-bottom border-5 border-success
                  ">
            Call order form
        </h1>
    
        <div class="my-4 px-2 px-md-5">
            <h4 class="mb-3">
                Use this form to puschase calls either individually or at a quarterly or annual discount.
            </h4>
            <div class="py-2">
                <div class="row mb-3">
                    <div class="col-4 col-md-3 row align-items-center order-0">
                        <p class="fs-4 mb-0">Client</p>
                    </div>
                    <div class="col-12 col-md-4 row align-items-center order-3 order-md-2 mt-3 mt-md-0">
                        <select class="form-select form-select-lg" aria-label="Client" v-model="client">
                          <option selected value="null" disabled>Select client</option>
                          <option v-for="client in clients" :value="client.id" :key="client.id">{{ client.name }}</option>
                        </select>
                    </div>
                    <div class="col-auto d-flex align-items-center order-1 order-md-2">
                        <Tooltip title="What company are you with?" />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4 col-md-3 row align-items-center order-0">
                        <p class="fs-4 mb-0">Property</p>
                    </div>
                    <div class="col-12 col-md-4 row align-items-center order-3 order-md-2 mt-3 mt-md-0">
                        <select class="form-select form-select-lg" aria-label="Property" v-model="property">
                          <option selected value="null" disabled>Select property</option>
                          <option v-for="property in properties" :value="property.id" :key="property.id">{{ property.name }}</option>
                        </select>
                    </div>
                    <div class="col-auto d-flex align-items-center order-1 order-md-2">
                        <Tooltip title="For which property would you like to purchase calls?" />
                    </div>
                </div>
            </div>
        </div>
    
        <FormBlock header="Monthly Calls">
            <div class="mb-4 fs-5">
                <p>
                    Use this section to purchase regular monthly calls at a monthly or quarterly discount.
                </p>
                <p>For individual calls, got to the next section</p>
            </div>
            <div class="mb-4 fs-5">
                <p>Choose the number of each type of call you'd like to purchase</p>
    
                <div class="row align-items-center mb-4">
                    <div class="col-12 col-md-2 mb-0">Custom</div>
                    <div class="col-6 col-md-2">
                        <select class="form-select form-select-lg" aria-label="Custom" v-model="monthly.custom">
                          <option selected value="null" disabled>Select</option>
                          <option v-for="m in 999" :value="m" :key="m">{{ m }}</option>
                        </select>
                    </div>
                    <div class="col-6 col-md-auto">monthly</div>
                </div>
    
                <div class="row align-items-center mb-4">
                    <div class="col-12 col-md-2 mb-0">Standart</div>
                    <div class="col-6 col-md-2">
                        <select class="form-select form-select-lg" aria-label="Standart" v-model="monthly.standart">
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
                            <input class="form-check-input" type="radio" name="discount" id="quarterly" value="quarterly" v-model="discount" />
                            <label class="form-check-label" for="quarterly">
                            Quarterly 5% *
                          </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="discount" id="annual" checked value="annual" v-model="discount" />
                            <label class="form-check-label" for="annual"> Annual 10% </label>
                        </div>
                    </div>
                    <hr />
                    <p class="mb-0">* - Auto-renews quarterly</p>
                </div>
    
                <div class="row align-items-center mb-4">
                    <div class="col-12 col-md-2 mb-0">Starting month</div>
                    <div class="col-6 col-md-2">
                        <select class="form-select form-select-lg" aria-label="starting date" v-model="starting_date">
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
                            <input class="form-check-input" type="radio" name="exclude" value="all_year" id="all_year" v-model="exclude" />
                            <label class="form-check-label" for="all_year"> All year </label>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="radio" name="exclude" value="specific_month" id="specific_month" v-model="exclude" />
                            <label class="form-check-label" for="specific_month">
                            Specific months
                          </label>
                        </div>
                        <p>
                            Enter excluded date ranges for calls
                            <Tooltip title="Helpful to avoid calls during off-season times." />
                        </p>
                        <div class="mb-3 row">
                            <label for="excluded_start" class="col-sm-4 col-form-label">Starting date</label
                          >
                          <div class="col-sm-8">
                            <input
                              v-model="specific_month.start"
                              type="date"
                              class="form-control"
                              id="excluded_start"
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
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FormBlock>
            
                <FormBlock header="Individual Calls">
                  <div class="fs-5">
                    <p>Use this form to purchase individual calls without a discount.</p>
                    <CallTypeForm :data="call" v-for="call in calls" :key="call.type" />
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
                    v-model="notification_emails"
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
                        <td><hr class="my-0" /></td>
                      </tr>
                      <tr>
                        <td colspan="2" class="fw-bold">Total</td>
                        <td>$ x.xxx.xx</td>
                      </tr>
                    </tbody>
                  </table>
                </FormBlock>
              </div>
</template>

<script>
import axios from "axios";
import FormBlock from "./components/FormBlock.vue";
import CallTypeForm from "./components/CallTypeForm.vue";
import mock from "./utils/mock";
import Tooltip from "./components/Tooltip.vue";
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
            client: null,
            property: null,
            monthly: {
                custom: null,
                standart: null,
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
                count: null,
                start_month: null
              }
            ],
            notification_emails: null
        };
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
                        Authorization: "Bearer 6cbded2788b7a71f1920043b6df4964c0c5d167a5895c0a9fcfe8729669280fa",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                console.log("data :>> ", data);
                this.calltypes = data;
            } catch (error) {
                console.log("error :>> ", error);
            }
        },
    },
    async mounted() {
        // await this.getCallTypes()
    },
};
</script>

<style>

</style>