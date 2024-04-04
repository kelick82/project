<template>
  <div class="flex justify-start content-start">
    <div class="flex min-w-60 min-h-screen flex-col bg-gray-300 ">
      <div>Menu1</div>
      <div>Menu2</div>
    </div>
    <div class="flex flex-col">
      <div class="bg-yellow-300 min-w-[1200px] min-w-screen h-16 justify-center content-center px-5">
        SEARCH BAR
      </div>
      <div class="pt-5 px-5">
        <slot/>
      </div>
    </div>

  </div>
</template>
<script setup>
</script>