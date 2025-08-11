<template>
  <i :class="[$attrs.class, 'iconfont']" :style="getWrapStyle" />
</template>

<script lang="js">
import {
  defineComponent,
  computed,
} from 'vue';
import { isString } from '@/utils/is';

export default defineComponent({
  name: 'Icon',
  props: {
    // icon name
    icon: String,
    // icon color
    color: String,
    // icon size
    size: {
      type: [String, Number],
      default: 16,
    },
  },
  setup (props) {
    const getWrapStyle = computed(() => {
      const { size, color } = props;
      let fs = size;
      if (isString(size)) {
        fs = parseInt(size, 10);
      }

      return {
        cursor: 'pointer',
        fontSize: `${fs}px`,
        color: color,
        display: 'inline-flex',
      };
    });

    return { getWrapStyle };
  },
});
</script>
