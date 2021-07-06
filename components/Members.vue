<template lang="pug">
.members
  .members__active
    p Hoge
    //- p {{  }}

  .members__active
    p オンライン
    p {{ activeMember }}

  .members__active
    p 合計
    p {{ fullMember }}
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'

@Component({})
export default class Members extends Vue {
  @Provide() activeMember: number = 0
  @Provide() fullMember: number = 0
  @Provide() error: boolean = false

  async mounted() {
    try {
      const {fullMember, activeMember} = await this.$repositories.discordBot.get('member')

      this.activeMember = activeMember.length
      this.fullMember = fullMember.length
    } catch (error) {
      this.error = true
    }
  }
}
</script>

<style lang="scss" scoped>
.members {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &__active {
    padding: 20px;
  }
}
</style>
