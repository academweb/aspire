<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <label for="call_type" class="form-label">Call type</label>
          <select
            id="call_type"
            class="form-select"
            aria-label="Call types"
            v-model="data.type"
          >
            <option selected value="null" disabled>Select</option>
            <option v-for="m in callTypes" :value="m.id" :key="m.id">
              {{ m.name }}
            </option>
          </select>
        </div>
        <div class="col-12 col-md-3">
          <label for="call_count" class="form-label"># of calls</label>
          <select
            id="call_count"
            class="form-select"
            aria-label="Default select example"
            v-model="data.count"
          >
            <option selected value="null" disabled>Select</option>
            <option v-for="m in 999" :value="m" :key="m">{{ m }}</option>
          </select>
        </div>
        <div class="col-12 col-md-3">
          <label for="call_count" class="form-label">Month *</label>
          <select
            class="form-select"
            aria-label="Start month"
            v-model="data.start_month"
          >
            <option selected value="null" disabled>Select</option>
            <option v-for="m in month" :value="m" :key="m">{{ m }}</option>
          </select>
        </div>

        <span class="col-12 text-muted mt-1" style="font-size: 14px"
          >* - select the monthly you'd like there calls to run</span
        >
      </div>
    </div>
    <div class="ms-3 row justify-content-end align-items-center" @click="$emit('addCall', true)">
      <svg
        
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-clipboard-plus"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
        />
        <path
          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
        />
        <path
          d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
        />
      </svg>
    </div>
  </li>
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
        start_month: null,
      }),
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
    };
  },
};
</script>