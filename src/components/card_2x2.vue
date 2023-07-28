<template>
  <div
    class="'card rounded-2xl shadow-xl w-[12rem] h-[12rem] mb-8"
    :class="bgStyle"
  >
    <div class="card-body w-full h-full">
      <h2 class="card-title" :class="textStyle">{{ title }}</h2>
      <div class="h-full"></div>
      <div class="card-actions justify-end">
        <button
          class="btn btn-sm rounded-xl capitalize border-0"
          :class="[btnStyle, btnTextStyle]"
        >
          {{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  btnText: String,
  bgStyle: String,
  btnStyle: String,
  textStyle: String,
  btnTextStyle: String,
});
</script>
