<template lang="pug">
.landing
  section.landing__top#top
    logo
    indicator

  section.landing__introduce#intro
    introduce

  section.landing__rule#rules
    rules
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Logo from '~/components/Logo.vue'
import Indicator from '~/components/ScrollIndicator.vue'
import Introduce from '~/components/Introduce.vue'
import Rules from '~/components/Rules.vue'

@Component({
  components: {
    Logo,
    Introduce,
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

  &__introduce {
    background-color: $color-bg-primary;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__rule {
    background-color: $color-bg-secondary;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
