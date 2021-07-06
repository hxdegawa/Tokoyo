<template lang="pug">
.landing
  section#top.landing__top
    logo
    indicator

  section#intro.landing__introduce
    introduce

  section#rules.landing__rule
    rules

  section#info.landing__info
    members
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Logo from '~/components/Logo.vue'
import Indicator from '~/components/ScrollIndicator.vue'
import Introduce from '~/components/Introduce.vue'
import Rules from '~/components/Rules.vue'
import Members from '~/components/Members.vue'

@Component({
  components: {
    Logo,
    Introduce,
    Indicator,
    Rules,
    Members,
  },
})
export default class IndexPage extends Vue {}
</script>

<style lang="scss">
.landing {
  section {
    position: relative;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
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

  &__info {
    background-color: $color-bg-primary;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
