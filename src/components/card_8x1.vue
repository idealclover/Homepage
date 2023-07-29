<template>
  <div class="card max-lg:card-compact rounded-xl shadow-xl w-full lg:w-[54rem] lg:h-[5rem] mb-4">
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