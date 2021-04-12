<template lang="pug">
.landing
  section.landing__top
    logo
    indicator

  section.landing__rule
    rules
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Logo from '~/components/Logo.vue'
import Indicator from '~/components/ScrollIndicator.vue'
import Rules from '~/components/Rules.vue'

@Component({
  components: {
    Logo,
    Indicator,
    Rules,
  },
})
export default class IndexPage extends Vue {}
</script>

<style lang="scss">
.landing {
  section {
    position: relative;
    min-height: calc(var(--vh, 1vh) * 100);
  }

  &__top {
    background-color: $color-bg-secondary;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__rule {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
