<template lang="pug">
.introduce
  .introduce__text
    heading
      | 「
      ruby 常世
        rt トコヨ
      | 」と「
      ruby 現世
        rt ウツシヨ
      | 」

    p 常世は、古代日本で信仰された、海の彼方にあるとされる異世界です。
      br
      | 完全に現世とは隔絶され、永久不変である常世の国は、一種の理想郷として観想されていました。
    p 常世の如く、我々の過ごす現世から完全に隔絶された「別次元の居場所」として、トコヨサーバーは生まれました。
    p 現世の煩悩から解き放たれ、トコヨの仲間と和やかなるひとときを。
    p "空想とは、魂の眠りである。"
      br
      | ─ ジョセフ・ジューベル

  .introduce__icon
    img(src='~/assets/image/jinja.svg')
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

<style lang="scss">
.introduce {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 30px;

  @media screen and (max-width: $width-tablet-large) {
    grid-template-columns: repeat(1, 1fr);
    gap: 80px;
  }

  &__text {
    padding: 30px;
    max-width: 640px;

    @media screen and (max-width: $width-tablet-large) {
      grid-row: 2;
    }

    p {
      line-height: 24px;

      &:first-of-type {
        padding-top: 40px;
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }

  &__icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: $width-tablet-large) {
      grid-row: 1;
    }

    img {
      z-index: 3;
      object-fit: contain;
      width: 140px;
    }

    @mixin aura {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-image: url('~assets/image/aura.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 220px;
      height: 220px;
      opacity: 0.4;
    }

    &::before {
      @include aura;

      animation: spin 12s linear infinite;
    }

    &::after {
      @include aura;

      animation: spin 16s linear infinite reverse;
    }

    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotateZ(0deg);
      }

      to {
        transform: translate(-50%, -50%) rotateZ(360deg);
      }
    }
  }
}
</style>
