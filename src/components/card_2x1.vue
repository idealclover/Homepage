<template>
  <div class="card rounded-xl shadow-xl w-[26rem] h-[5rem] mb-8">
    <div class="card-body">
      <h2 class="card-title" :class="textStyle">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  imgUrl: String,
  textStyle: String
});
</script>
