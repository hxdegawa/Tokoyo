import { Repositories } from '@/plugins/repository'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $repositories: Repositories
  }
}

declare module '@nuxt/types/app' {
  interface NuxtAppOptions {
    readonly $repositories: Repositories
  }
}

declare module 'vuex' {
  interface Store<S> {
    readonly $repositories: Repositories
  }
}
