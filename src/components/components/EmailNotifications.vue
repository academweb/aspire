<template>
  <div class="">
    <label class="form-label">{{ label }}</label>
    <div
      class="row align-items-center mb-2"
      v-for="(email, index) in data"
      :key="index"
    >
      <ValidationProvider
        :name="name"
        rules="email|required"
        v-slot="{ errors }"
        tag="div"
        class="col-10"
      >
        <input
          class="form-control"
          type="email"
          :placeholder="placeholder"
          v-model="data[index]"
          :class="{ 'is-invalid ': !!errors[0] }"
        />
        <span class="text-danger" style="font-size: 14px">{{ errors[0] }}</span>
      </ValidationProvider>

      <div class="col-2">
        <button
          class="btn"
          v-if="data.length && data.length == index + 1"
          @click.prevent="$emit('add')"
        >
          <Tooltip
            :size="24"
            class="ms-2"
            title="Use the + sign to add additional fields."
            info
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
          </Tooltip>
        </button>
        <button v-else @click.prevent="$emit('remove', index)" class="btn">
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
  </div>
</template>

<script>
import Tooltip from "./Tooltip.vue";

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    label: String,
    placeholder: String,
    name: String,
  },
  components: { Tooltip },
};
</script>

<style>
</style>