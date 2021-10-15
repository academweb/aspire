<template>
  <div class="px-1 px-md-5">
    <div class="row">
      <div class="col-12 col-md-6 row align-items-center mb-4">
            <div class="col-12 col-md-4 mb-0">Call type</div>
              <div class="col-12 col-md-8 col-md-auto">
                <select
                  class="form-select form-select-lg"
                  aria-label="Call types"
                  v-model="data.type"
                >
                <option selected value="null" disabled>Select</option>
                  <option v-for="m in callTypes" :value="m.id" :key="m.id">
                    {{ m.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6 row align-items-center mb-4">
              <div class="col-6 col-md-4 mb-0"># of calls</div>
              <div class="col-12 col-md-8 col-md-auto">
                <select
                
                  class="form-select form-select-lg"
                  aria-label="Default select example"
                  v-model="data.count"
                >
                <option selected value="null" disabled>Select</option>
                  <option v-for="m in 999" :value="m" :key="m">{{ m }}</option>
                </select>
              </div>
            </div>
             <div class="col-12 row align-items-center">
                        <div class="col-12 col-md-2">
                          Month
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="">
                        
                            <select
                              class="form-select form-select-lg"
                              aria-label="Start month"
                              v-model="data.start_month"
                            >
                            <option selected value="null" disabled>Select</option>
                              <option v-for="m in month" :value="m" :key="m">{{ m }}</option>
                            </select>
                        <label for="exampleFormControlInput1" class="form-label form-label-sm text-muted"
                          >Select the monthly you'd like there calls to run</label
                        >
                      </div>
                        </div>
                      </div>
                      
                    </div>
  </div>
                      
                      
                     
</template>

<script>
import mock from "../utils/mock";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        type: null,
        count: null,
        start_month: null
      })
    },
  },
  data() {
    return {
      callTypes: mock.callTypes,
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
    }
  },
};
</script>