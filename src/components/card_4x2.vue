<template>
  <div
    class="card rounded-2xl shadow-xl w-[26rem] h-[12rem] mb-8"
    :class="[bgColor, textColor]"
  >
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ desc }}</p>
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
  desc: String,
  btnText: String,
  bgColor: String,
  textColor: String,
  btnColor: String,
  btnTextColor: String,
});
</script>
