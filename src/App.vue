
<template>
  <a-config-provider
    :theme="theme"
  >
    <h1>You did it!</h1>
    <a-button type="primary">Primary Button</a-button>
    <p>
      Visit
      <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a>
      to read the documentation
    </p>
    <a-radio>Radio</a-radio>
    <a-checkbox>Checkbox</a-checkbox>
  </a-config-provider>
</template>
<script setup>
import theme from '@/assets/styles/antdv/index'
</script>
<style scoped></style>
