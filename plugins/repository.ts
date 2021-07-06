import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { DiscordBot } from '@/api/discord-bot'

export interface Repositories {
  discordBot: DiscordBot
}

export default function (ctx: Context, inject: Inject) {
  const discordBot = new DiscordBot(ctx.$axios)
  const repositories: Repositories = {
    discordBot,
  }
  inject('repositories', repositories)
}
