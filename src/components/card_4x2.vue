<template>
  <a :href="url" target="_blank">
    <div
      class="card rounded-2xl shadow-xl w-[26rem] h-[12rem] mb-8"
      :class="[bgStyle, textStyle]"
    >
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p>{{ desc }}</p>
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
  </a>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  url: String,
  btnText: String,
  bgStyle: String,
  textStyle: String,
  btnStyle: String,
  btnTextStyle: String,
});
</script>
