<template>
  <div class="text-left">  
    <label :for="title">
      {{ title }}
    </label>
    <div 
      class="selection-box" 
      :class="{focused: focused}" 
      tabindex="0"
      @click="setFocus(!focused)"
      @blur="setFocus(false)"
    >
      <div class="selected-option">
        <span>{{ selectedOptionName }}</span>
        <span class="button" v-if="focused"><FontAwesomeIcon icon="caret-up"/></span>
        <span class="button" v-else><FontAwesomeIcon icon="caret-down"/></span>
      </div>
      <div class="selection-list">
        <div 
          v-for="option in options"
          :key="option.value"
          @click="makeSelection(option)"
          class="option"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "AppInputSelect",
  components: {
    FontAwesomeIcon,
  },
  props: {
    title: String,
    value: [String, Number],
    // Accepts an array of options as a prop
    // Each option should be an object {name: '', value: ''}
    options: Array,
  },
  data: function() {
    return {
      focused: false,
      selectedOptionName: null,
    }
  },
  watch: {
    // Watch for a change in the 'prop' value so that we can reload the component
    value: {
      immediate: true,
      handler: function (newVal) {
        if (newVal === undefined || this.options.length === 0) return
        const initialOption = this.options.find(o => o.value === newVal)
        this.makeSelection(initialOption)
      },
    },
  },
  methods: {
    makeSelection: function(option) {
      this.selectedOptionName = option.name
      this.$emit('input', option.value)
    },
    setFocus: function(bool) {
      this.focused = bool
    },
  },
}
</script>

<style lang="sass" scoped>
label
  display: block
  white-space: nowrap
  overflow: hidden

.button
  font-size: $font-sm
  color: $color-light

.selection-box
  margin: 0.25rem 0
  min-width: 8rem
  width: 100%
  cursor: pointer
  position: relative
  &:hover .button
    color: $color-lighter

.focused
  & .button
    color: $color-lighter
  & .selected-option
    border: $border-blue
    border-bottom-left-radius: 0px
    border-bottom-right-radius: 0px
  & .selection-list
    display: inherit
    border-top: none
    border-top-left-radius: 0px
    border-top-right-radius: 0px

.selected-option
  color: $color-lighter
  border: $border
  background: $bg-input
  font-size: $font-md
  padding: 0.5rem
  border-radius: 0.25rem
  transition: border 0.1s
  display: flex
  align-items: center
  justify-content: space-between
  position: relative

.selection-list
  background: $bg-input
  border: $border
  font-size: $font-sm
  border-radius: 0.25rem
  padding: 0.25rem
  margin-bottom: 1rem
  max-height: 15rem
  left: 0
  right: 0
  z-index: 1
  position: absolute
  display: none
  overflow: auto

.option
  color: $color-light
  padding: 0.5rem
  border-radius: 0.25rem
  transition: background 0.1s, color 0.1s
  user-select: none
  &:hover
    color: $color-lighter
    background: $bg-overlay
</style>