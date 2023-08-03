<template>
  <a :href="url" target="_blank">
    <div
      class="card max-lg:card-compact rounded-2xl shadow-xl w-full max-sm:aspect-[2/1] md:aspect-[2/1] lg:w-[26rem] lg:h-[12rem] mb-8"
      :class="[bgStyle, textStyle]"
    >
      <div class="card-body rounded-2xl hover:glass">
        <h2 class="card-title whitespace-nowrap">{{ title }}</h2>
        <p>{{ desc }}</p>
        <div class="card-actions justify-end">
          <button
            :class="[btnStyle, btnTextStyle]"
            class="btn btn-sm rounded-xl border-0"
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
