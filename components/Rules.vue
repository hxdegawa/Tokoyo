<template lang="pug">
.rules
  heading.rules__heading(
    :icon='require("~/assets/image/sunrise.svg")',
    :center='true'
  ) トコヨでのきまりごと。
  .rules__wrapper
    .rules__block
      .rules__block__heading
        img(src='~/assets/image/samurai.svg')
        h3 ゲームをするとき

      ul
        li 穏やかに戯れるべし。
        li 初心者に優しくすべし。
        li 雰囲気を大切にすべし。
        li 楽んで勝利を目指すべし。

    .rules__block
      .rules__block__heading
        img(src='~/assets/image/yacho.svg')
        h3 募集をするとき

      ul
        li 極力お初の人を誘うべし。
        li マウントをとるべからず。
        li ランクにこだわるべからず。

    .rules__block
      .rules__block__heading
        img(src='~/assets/image/matsushima.svg')
        h3 雑談をするとき

      ul
        li 政治の話題は避けるべし。
        li 出会い厨になるべからず。
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

  &__heading {
    margin: 0 auto;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 60px 0 0 0;
    gap: 30px;

    @media screen and (min-width: $width-tablet-large) {
      @for $i from 1 to 4 {
        .rules__block:nth-of-type(#{$i}) {
          margin-top: 60px - 20px * $i;
        }
      }
    }

    @media screen and (max-width: $width-tablet-large) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }

    @media screen and (max-width: $width-tablet-small) {
      grid-template-columns: repeat(1, 1fr);
      gap: 60px;
    }
  }

  &__block {
    position: relative;
    padding: 20px;

    &:nth-of-type(2) {
      &::before {
        content: '';
        z-index: 1;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, calc(-50% - 25px)) rotateZ(-7.5deg);
        width: 120vw;
        height: 300px;
        background-color: white;
        mix-blend-mode: luminosity;

        @media screen and (max-width: $width-tablet-small) {
          transform: translate(-50%, calc(-50% - 5px)) rotateZ(-7.5deg);
          height: 240px;
        }
      }
    }

    &__heading {
      position: relative;
      display: block;
      z-index: 2;

      img {
        height: 30px;
        object-fit: contain;
      }

      h3 {
        display: inline-block;
        vertical-align: top;
        line-height: 30px;
        font-size: 1.1rem;
        margin-bottom: 20px;
        padding-left: 10px;
      }
    }

    ul {
      position: relative;
      z-index: 2;

      li {
        margin-bottom: 10px;
        font-size: 1rem;
      }
    }
  }
}
</style>
