<template lang="pug">
.indicator
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class ScrollIndicator extends Vue {}
</script>

<style lang="scss">
.indicator {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 1px;
  height: 0;
  background-color: transparentize($color-text-primary, 0.5);
  animation: spring 2s ease alternate infinite;

  &::before {
    position: absolute;
    content: 'スクロール';
    word-break: keep-all;
    left: 50%;
    bottom: 100px;
    color: transparentize($color-text-primary, 0.5);
    transform: translateX(-50%);
  }

  @keyframes spring {
    from {
      height: 0;
    }

    to {
      height: 80px;
    }
  }
}
</style>
