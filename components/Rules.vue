<template lang="pug">
.rules
  heading(:icon='require("~/assets/image/sunrise.svg")') トコヨのルール
  .rules__block
    h3 ゲーム
    ul
      li hi
      li hi
      li hi
      li hi
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Heading from '~/components/Heading.vue'

@Component({
  components: {
    Heading,
  },
})
export default class Rules extends Vue {}
</script>

<style lang="scss">
.rules {
  padding: 30px 20px;

  &__block {
    padding: 40px 0 0 0;
  }
}
</style>
