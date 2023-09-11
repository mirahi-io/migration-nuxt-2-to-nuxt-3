import Notifications from '@kyvg/vue3-notification'


// The fork doesn't support all the feature, we accepted it
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Notifications)
})
