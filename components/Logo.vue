<template lang="pug">
.logo
  img.logo__image(src='~/assets/image/logo.svg')
  .logo__text
    p 「トコヨ」 へ ようこそ。
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Logo extends Vue {}
</script>

<style lang="scss">
.logo {
  max-width: 300px;

  &__image {
    display: block;
    margin: 0 auto;
    object-fit: contain;
    width: 80px;
  }

  &__text {
    padding-top: 20px;

    p {
      font-size: 1rem;
      font-weight: $weight-medium;
    }
  }
}
</style>
