import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";
import moment from 'moment';
// Add all rules
Object.keys(rules).map(rule => extend(rule, rules[rule]))

// Add a rule.
// extend('secret', {
//   validate: value => value === 'example',
//   message: 'This is not the magic word'
// });

// extend('required', {
//   validate(value) {
//     return {
//       required: true,
//       valid: ['', null, undefined].indexOf(value) === -1
//     };
//   },
//   message: '{_field_} is required',
//   computesRequired: true
// });

extend("more", {
  params: ["otherValue", "more"],
  validate: (value, { otherValue, more }) => {
    return moment(more).diff(moment(otherValue), 'days') > 0
  },
  message:
    "The end date must be greater than the start date."
});

export default (Vue) => {
  // Register it globally
  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);
}
