<template lang="pug">
.heading
  img.heading__icon(:src='icon')
  p.heading__text: slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Heading extends Vue {
  @Prop({ default: '~/assets/image/logo.svg' })
  icon?: string
}
</script>

<style lang="scss">
.heading {
  display: block;

  &__icon {
    display: inline-block;
    height: 60px;
    object-fit: contain;
  }

  &__text {
    display: inline-block;
    vertical-align: top;
    padding-left: 10px;
    line-height: 60px;
    font-size: 1.4rem;
    font-weight: $weight-medium;
  }
}
</style>
