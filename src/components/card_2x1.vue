<template>
  <div class="card rounded-xl shadow-xl w-[26rem] h-[5rem] mb-8">
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