<template>
  <a :href="url" target="_blank">
    <div
      class="'card max-lg:card-compact rounded-2xl shadow-xl w-full max-sm:aspect-[1/1] md:aspect-[1/1] lg:w-[12rem] lg:h-[12rem] mb-8"
      :class="bgStyle"
    >
      <div class="card-body w-full h-full">
        <h2
          class="card-title text-base sm:text-xl whitespace-nowrap"
          :class="textStyle"
        >
          {{ title }}
        </h2>
        <p :class="textStyle">{{ desc }}</p>
        <div class="h-full"></div>
        <div class="card-actions justify-end">
          <button
            class="btn btn-sm rounded-xl capitalize border-0 max-w-full whitespace-nowrap"
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
  btnStyle: String,
  textStyle: String,
  btnTextStyle: String,
});
</script>
