<template>
  <div class="h-screen flex justify-start content-start">
    <SideGnb />
    <div class="flex flex-col grow">
      <AppBar />
      <main class="flex grow py-10 bg-LogiGray-50">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- content -->
          <slot />
        </div>
      </main>
    </div>
  </div>

</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import SideGnb from "../components/SideGnb.vue";

</script>


