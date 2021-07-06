<template lang="pug">
.heading(:class='{ center: center }')
  img.heading__icon(v-if='icon', :src='icon')
  p.heading__text(:class='{ "has-icon": icon }'): slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Heading extends Vue {
  @Prop()
  icon?: string

  @Prop({ default: false })
  center?: boolean
}
</script>

<style lang="scss" scoped>
.heading {
  display: block;

  &.center {
    text-align: center;
  }

  &__icon {
    display: inline-block;
    height: 60px;
    object-fit: contain;

    @media screen and (max-width: $width-tablet-small) {
      display: block;
      margin: 0 auto;
    }
  }

  &__text {
    display: inline-block;
    vertical-align: top;
    line-height: 60px;
    font-size: 1.4rem;
    font-weight: $weight-medium;

    &.has-icon {
      padding-left: 10px;
    }

    @media screen and (max-width: $width-tablet-small) {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
