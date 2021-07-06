import { NuxtAxiosInstance } from '@nuxtjs/axios'

export class DiscordBot {
  private readonly axios: NuxtAxiosInstance
  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  get(path?: string, data?: object) {
    return this.axios.$get(`/discord/${path}`, { params: { ...data } })
  }
}
