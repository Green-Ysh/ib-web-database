<template>
  <div class="left-side-content">
    <div class="title" v-if="slotTitle || props.title">
      <slot name="title">
        <span v-if="title">{{ title }}</span>
      </slot>
    </div>
    <slot></slot>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup>
import { useSlots } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
});

//判断<slot/>是否有传值
const slotTitle = !!useSlots().title;
</script>

<style lang="scss">
.left-side-content {
  width: 100%;
  height: 100%;
  padding: 20px 30px 20px 20px;
  overflow-y: auto;
  background-color: #f4f8fb;

  .title {
    margin-top: 3px;
    margin-bottom: 15px;
    color: #393b41;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }

  .content {
    height: 100%;
  }
}
</style>
