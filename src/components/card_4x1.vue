<template>
  <div class="card rounded-xl shadow-xl w-[51rem] h-[5.5rem] mb-4">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>