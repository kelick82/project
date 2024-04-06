<template>
  <div class="flex justify-start content-start">
    <div class="flex min-w-60 min-h-screen flex-col bg-LogiNavy-300">
      <div class="flex h-[80px] p-4 justify-center items-center">
        <div class="flex h-[24px] justify-center items-center align-middle  gap-[8px] flex-shrink-0">
          <img class="pt-[2px] pl-[3px] pb-[1.77px] pr-[2.85px]" v-bind:src="logoUrl"/>
          <img class="pt-[2px] pl-[3px] pb-[1.77px] pr-[2.85px]" v-bind:src="wordmark"/>
        </div>
      </div>
      <div class="h-[48px] flex p-4 items-center justify-center self-stretch text-white gap-[8px]">Menu1</div>
      <div class="h-[48px] flex p-4 items-center justify-center self-stretch text-white gap-[8px]">Menu2</div>
      <div class="h-[48px] flex p-4 items-center justify-center self-stretch text-white gap-[8px]">Menu3</div>
    </div>
    <div class="flex flex-col">
      <div class="min-w-[1200px] min-w-screen h-16 justify-center content-center px-5 border-b-2">
        <InputText>SEARCH BAR</InputText>
      </div>
      <div class="pt-5 px-5">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script setup>
const logoUrl = '/Icon_logi.svg';
const wordmark = '/wordmark.svg';
</script>