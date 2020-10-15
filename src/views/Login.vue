<template>
  <div class="h-100">
    <header class="header">
      <p class="font-md">Pacemaker</p>
      <p class="font-xl">Device Controller-Monitor</p>
      <p class="font-md">SFWRENG 3K04 Lab 4 Team 2</p>
    </header>
    <div class="card-container">
      <div class="card">
        <p class="font-md">Login</p>
      </div>
      <div class="card">
        <p class="font-md">Register</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header
  background: $bg-darker
  text-align: center
  padding: 4rem 0 1rem 0
  margin: 0 0 1rem 0
  border-bottom: $border
  .font-xl
    font-weight: bold
    color: $color-lightest

.card-container
  display: flex
  justify-content: center 
  flex-wrap: wrap 
  width: 100%

.card
  max-width: 25rem
  flex: 1
  padding: 1rem
</style>