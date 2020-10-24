<template>
  <div class="text-left">
    <label :for="title">
      {{ title }}
    </label>
    <div class="input-container">
      <input
        type="number"
        ref="numberField"
        :id="title" 
        :name="title"
        :value="numericValue"
        @input="onInput($event.target.value)"
      />
      <div class="v-flex justify-content-center">
        <button @click="updateValue(numericValue+1)" tabindex="-1">
          <FontAwesomeIcon icon="caret-up"/>
        </button>
        <button @click="updateValue(numericValue-1)" tabindex="-1">
          <FontAwesomeIcon icon="caret-down"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "AppInputNumber",
  components: {
    FontAwesomeIcon,
  },
  props: {
    title: String,
    value: {
      type: Number,
      default: 0,
    },
  },
  data: function() {
    // Need a data value derived from the 'value' prop so that
    // the buttons can mutate it
    return {
      numericValue: null,
    }
  },
  watch: {
    value: {
      // Runs immediately upon creation
      immediate: true,
      handler (newValue) {
        this.updateValue(newValue)
      }
    },
  },
  methods: {
    toNumber: function(val) {
      const num = Number(val)
      return isNaN(num) ? 0 : num
    },
    onInput: function (newValue) {
      this.updateValue(newValue)
      this.$refs.numberField.value = this.numericValue
    },
    updateValue: function (newValue) {
      this.numericValue = this.toNumber(newValue)
      this.$emit('input', this.numericValue)
    },
  }
}
</script>

<style lang="sass" scoped>
label
  display: block
  white-space: nowrap
  overflow: hidden

input
  padding: 0.5rem
  flex: 1
  font-size: $font-md
  // Remove arrows/spinners
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

button
  padding: 0 0.5rem
  font-size: $font-sm
  &:hover
    color: $color-lighter

.input-container
  background: $bg-input
  border: $border
  border-radius: 0.25rem
  margin: 0.25rem 0
  transition: border 0.1s
  display: flex
  &:focus-within
    border: $border-blue
</style>