<template lang="pug">
.introduce
  heading
    | 「
    ruby 常世
      rt トコヨ
    | 」と「
    ruby 現世
      rt ウツシヨ
    | 」

  p
    span 常世は、古代日本で信仰された、海の彼方にあるとされる異世界です。
    br
    span 完全に現世とは隔絶され、永久不変である常世の国は、一種の理想郷として観想されていました。
  p: span 常世の如く、我々の過ごす現世から完全に隔絶された「別次元の居場所」として、トコヨサーバーは生まれました。
  p: span 現世の煩悩から解き放たれ、トコヨの仲間と和やかなるひとときを。
  p
    span "空想とは、魂の眠りである。"
    br
    span ─ ジョセフ・ジューベル

  img.introduce__pic(src='~/assets/image/shrine.jpg')
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Heading from '~/components/Heading.vue'

@Component({
  components: {
    Heading,
  },
})
export default class Introduce extends Vue {}
</script>

<style lang="scss" scoped>
.introduce {
  position: relative;
  display: block;
  padding: 30px 20px 70px;
  max-width: 640px;

  @media screen and (max-width: $width-tablet-small) {
    overflow: hidden;
  }

  p {
    position: relative;
    z-index: 2;
    line-height: 27px;

    span {
      box-decoration-break: clone;
      box-sizing: content-box;
      border: solid transparent;
      border-width: 0 0.5rem;
      background-color: transparentize($color-bg-primary, 0.1);
      color: $color-text-primary;
      padding: 5px 0;
    }

    &:first-of-type {
      padding-top: 40px;
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  &__pic {
    position: absolute;
    right: -50px;
    bottom: 0;
    z-index: 1;
    object-fit: contain;
    width: 500px;
    // filter: grayscale(1);
  }
}
</style>
