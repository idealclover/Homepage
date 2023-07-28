<template>
  <div class="card rounded-2xl shadow-xl w-[25rem] h-[12rem]" :class="[bgColor, textColor]">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ desc }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">{{ action }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  action: String,
  bgColor: String,
  textColor: String
});
</script>
