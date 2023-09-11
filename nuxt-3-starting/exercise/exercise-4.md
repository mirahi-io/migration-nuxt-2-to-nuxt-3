# Migrating Modules and Plugins to Nuxt 3

## Background

Migrating modules and plugins when transitioning from Nuxt 2 to Nuxt 3 can be intricate. Each module and plugin has its own specificities that need to be considered. In this exercise, you'll tackle the migration of both modules and plugins, ensuring they're compatible with Nuxt 3.
## Exercise


👨‍💼 Migrating modules and plugins is a critical step in transitioning to Nuxt 3. Let's delve into the migration process. In our Nuxt 2 applications, we have `@nuxtjs/robots` module and the `vue-notifications` plugin.
Before diving into the migration process, ensure you have a comprehensive list of your current modules and plugins. This is essential for several reasons:

- Compatibility Check: Not all Nuxt 2 modules are immediately compatible with Nuxt 3. You'll need to verify if the module has been updated for Nuxt 3 compatibility.
- Alternative Solutions: Some modules might not have a direct upgrade path for Nuxt 3. In such cases, you might need to adopt an alternative module and adjust your code accordingly.
- In-house Solutions: For some specific functionalities, it might be simpler to write custom code instead of relying on an external module, especially if it's not too complex.

Once you're armed with this knowledge, proceed with the following steps:
- listing every module under the modules key, moving them from both buildModules and modules fields.
- removing obsolete modules like @nuxtjs/axios and @nuxt/http, they are now redundant in Nuxt 3. Utilize the built-in $fetch / useFetch API as a more efficient replacement.


### Part I: Modules Migration

#### Steps:

1.  **Migrate `@nuxtjs/robots` with `nuxt-simple-robots`**
   - Install and configure the `nuxt-simple-robots` as its replacement.
   - When restarting your application, if navigate to `/robots.txt` you should see `/robots.txt`

### Part II: Plugins Migration

#### Steps:

1. **Migrate `vue-notifications` Plugin**
   - Update the `vue-notifications` plugin to be compatible with Nuxt 3.Transition plugins to the Nuxt 3 format, which now accept only the `nuxtApp` argument. Employ the `defineNuxtPlugin` helper if you plan to use new Nuxt composables within your plugins.
   - Use the fork [vue3-notification](https://github.com/kyvg/vue3-notification) which offers Nuxt 3 compatibility but with some breaking changes. Make necessary adjustments to your application to accommodate these changes. Don't bother porting the override. It is not supported
   - Migrate `pages/plugin.vue` from nuxt-2 app to nuxt-3 app
