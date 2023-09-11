# Migrating Components to Nuxt 3

## Background

As part of the migration process from Nuxt 2 to Nuxt 3, components play a crucial role. In Nuxt 3, components are only parsed when imported, but this allows us to safely transfer all components and mixin files from Nuxt 2 without any issues. In this exercise, we'll focus on migrating the `AppLogo` and `NavBar` components and updating the associated layout and page files.

## Exercise

### Files

- `components/NavBar.vue`
- `layouts/default.vue`
- `pages/index.vue`

### Steps:

1. **Transfer All Components**
    - Simply move all components from your Nuxt 2 project to Nuxt 3's `components` directory.
    - There's no need to modify `nuxt.config.ts` as the components will be auto-imported.

2. **Understand Component Auto-imports**
    - If any of your components aren't detected, it might be due to the default path-prefixing behavior in Nuxt 3's component auto-imports.
    - Refer to the [Component Names](https://nuxt.com/docs/guide/directory-structure/components#component-names) documentation to gain more clarity.

3. **Migrate NavBar Component to Composition API**
    - Adapt the existing `NavBar.vue` from Nuxt 2 to work with the Composition API in Nuxt 3. Ensure you're familiar with the [Component Options Migration](https://nuxt.com/docs/migration/component-options) guide.
    - Your primary task involves converting the component to the Composition API style.

4. **Update `layouts/default.vue` and `pages/index.vue`**
    - With `NavBar` and `AppLogo` components migrated, it's time to integrate them into your layout and pages. Ensure you adapt the code to take advantages of Nuxt 3's component auto-imports.

🦉 Tips:
- [vue-composition-convertor](https://github.com/miyaoka/vue-composition-converter) may give you a head start
- [ChatGPT](https://chat.openai.com/) is pretty good at converting Vue 2 options API to Vue 3 composition API