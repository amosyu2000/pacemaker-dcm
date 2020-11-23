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
        <span class="selected-option-name">{{ selectedOptionName }}</span>
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
      selectedOptionName: undefined,
    }
  },
  watch: {
    // Used to watch for changes in either the 'value' or 'options' prop so that we 
    // can reload the component
    value: {
      immediate: true,
      handler: function (newVal) {
        if (newVal === undefined || newVal === null) return
        const initialOption = this.options.find(o => o.value === newVal)
        this.makeSelection(initialOption)
      },
    },
    options: {
      immediate: true,
      handler: function(newOptions) {
        // Empty placeholder option
        if (newOptions.length === 0) {
          this.makeSelection({name: '\u00A0', value: null})
        }
        // If there is only 1 option, pick that one by default
        else if (newOptions.length === 1 || this.value === undefined || this.value === null) {
          this.makeSelection(newOptions[0])
        }
        else {
          const initialOption = newOptions.find(o => o.value === this.value)
          this.makeSelection(initialOption)
        }
      }
    }
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
  font-size: $font-md
  margin: 0.25rem 0
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
  padding: 0.5rem
  border-radius: 0.25rem
  transition: border 0.1s
  display: flex
  align-items: center
  position: relative

.selected-option-name
  flex: 1
  padding-right: 0.5rem
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis

.selection-list
  background: $bg-input
  border: $border
  border-radius: 0.25rem
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
  transition: background 0.1s, color 0.1s
  user-select: none
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
  &:hover
    color: $color-lighter
    background: $bg-overlay
</style>