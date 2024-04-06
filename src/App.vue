<template>
  <AppTopBar />

  <AppMenu />

  <div class="pt-16 flex flex-col justify-between min-h-screen ml-64">
    <div class="p-4 flex-1">
      <Suspense>
        <router-view :key="$route.path" />
      </Suspense>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from './AppFooter.vue';
import AppMenu from './AppMenu.vue';
import AppTopBar from './AppTopBar.vue';
</script>