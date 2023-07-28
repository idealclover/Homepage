<template>
  <div
    class="'card rounded-2xl shadow-xl w-[12rem] h-[12rem] mb-8"
    :class="bgColor"
  >
    <div class="card-body w-full h-full">
      <h2 class="card-title text-white">{{ title }}</h2>
      <div class="h-full"></div>
      <div class="card-actions justify-end">
        <button
          class="btn btn-sm rounded-xl capitalize border-0"
          :class="[btnColor, btnTextColor]"
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
  bgColor: String,
  btnColor: String,
  textColor: String,
  btnTextColor: String,
});
</script>
