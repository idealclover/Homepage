<template>
  <a :href="url" target="_blank">
    <div
      class="card rounded-xl shadow-xl hover:bg-gray-50 hover:shadow-gray-400 w-[26rem] h-[5rem] mb-8"
    >
      <div class="card-body">
        <div class="flex">
          <img :src="iconUrl" class="w-8 h-8 mr-2" />
          <h2 class="card-title" :class="textStyle">{{ title }}</h2>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  url: String,
  imgUrl: String,
  iconUrl: String,
  textStyle: String,
});
</script>
