# Migrate to Nuxt 3


## Background

Migrating from Nuxt 2 to Nuxt 3 requires careful consideration and a step-by-step process. This exercise will guide you through the initial stages of this migration, ensuring that you establish a solid foundation upon which to build the rest of your Nuxt 3 app.

## Exercise

👨‍💼 Migrating to Nuxt 3 (folder nuxt-3) is an exciting journey. To kick things off, we will begin by setting up a new Nuxt 3 app and migrating some basic configurations from your Nuxt 2 app (folder nuxt-2).

### Files

- `nuxt.config.ts`
- `app.vue`
- `layouts/default.vue`
- `pages/index.vue`

### Steps:

A fresh Nuxt 3 app is already created into nuxt-3 folder. You don't need to initiate a new project.

2. **Create Boilerplate**
   - **Update `app.vue`**: By default, Nuxt 3 does not generate the layouts folder in the same manner as Nuxt 2. To bridge this, modify `app.vue` to use `NuxtLayout` and `NuxtPage`. This ensures that your app structure remains familiar.
     ```vue
     <template>
     <div>
       <NuxtLayout>
         <NuxtPage />
       </NuxtLayout>
     </div>
     </template>
     ```
   - **Set Up Default Layout**: Design a basic structure in `layouts/default.vue` that can be enhanced later. At the moment, don't migrate yet the content of default.vue in nuxt-2 folder
     ```vue
     <template>
     <div>
       <h1>I am the layout</h1>
       <slot />
     </div>
     </template>
     ```
   - **Initialize Index Page**: Kick things off with a simple greeting in `pages/index.vue`. At the moment, don't migrate yet the content of default.vue in nuxt-2 folder
     ```vue
     <script setup lang="ts">
        const route = useRoute()
     </script>
    <template>
      <div>
        <p>Current route: {{ route.path }}</p>
        <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
      </div>
    </template>
     ```

     3. **Migrate Runtime Config / env**
        - **Reference Documentation**: It's crucial to keep the [Migrate Runtime Config](https://nuxt.com/docs/bridge/overview#update-runtime-config) documentation handy. This will be your guide.
          - **Config Changes**: Nuxt 3 no longer supports the `env` key in `nuxt.config.ts`. Instead, you'll employ runtime config.
             - **Nuxt 2 Structure**:
               ```ts
               export default {
                 privateRuntimeConfig: {
                   apiKey: process.env.NUXT_API_KEY || 'super-secret-key'
                 },
                 publicRuntimeConfig: {
                    apiURL: 'https://jsonplaceholder.typicode.com'
                 },
                 env: {
                   NUXT_API_KEY: process.env.NUXT_API_KEY
                 }
               }
               ```
             - **Nuxt 3 Structure**:
               ```ts
               export default defineNuxtConfig({
                   runtimeConfig: {
                       apiKey: process.env.NUXT_API_KEY || 'super-secret-key',
                       // Note: `public` is exposed on both client and server
                       public: {
                           apiURL: 'https://jsonplaceholder.typicode.com'
                       }
                   }
               })
               ```
        - **TypeScript Caveat**: Don't be alarmed by TypeScript issues that arise due to these changes. They can be safely ignored for now.
4. **Migrate Head Configuration**
    - **Move to `app.head`**: If your Nuxt 2 app had `head` configuration in the `nuxt.config.ts`, transfer this to the `app.head` config in Nuxt 3.
      ```ts
      // Nuxt 2
      head: {
        meta: [
            { hid: 'description', name: 'description', content: 'Nuxt.js 2 project' }
        ]
      }
      ```
      ```ts
      // Nuxt 3
      app: {
        head: {
          meta: [
            { name: 'description', content: 'Nuxt.js 2 project' }
          ]
        }
      }
      ```

5. **Copy Static Files**
    - **Rename to `/public`**: Nuxt 3 has transitioned from `/static` to `/public`. Create a `public` directory and migrate all files from `static`.

6. **Transfer CSS / Assets**
    - **Move Assets**: The assets folder remains consistent in Nuxt 3. Just shift your assets folder from Nuxt 2 to your Nuxt 3 project.
    - **Update layout/default.vue**: Once you’ve migrated your assets, ensure that you migrate the `style` field in `layout/default.vue`.
    - **Update CSS Reference**: Once you’ve migrated your assets, ensure that you update the `css` field in `nuxt.config.ts`.
      ```ts
      css: [
        '~/assets/main.css',
      ]
      ```
> Most CSS pre-processors should integrate with Nuxt 3 without additional configuration. If you encounter errors indicating missing pre-processor dependencies, such as: "Preprocessor dependency "sass" not found. Did you install it?"
  Address this by installing the mentioned dependency. For the above error, run npm install -D sass.
> If you're facing issues with linked images within your CSS files, transition to using absolute links that reference the images from the public directory.
