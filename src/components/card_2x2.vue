<template>
  <div
    class="'card rounded-xl shadow-xl w-[12rem] h-[12rem]"
    :class="bgColor"
  >
    <div class="card-body">
      <h2 class="card-title text-white">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  bgColor: String
});
</script>
