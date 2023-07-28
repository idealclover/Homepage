<template>
  <div class="flex flex-row justify-between max-w-screen-2xl m-auto px-10">
    <aside class="h-screen sticky top-0 basis-1/3">
      <div class="pt-20"></div>
      <img class="w-52 rounded-full" :src="imgUrl" />
      <div class="pt-10"></div>
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <p class="text-lg">{{ desc }}</p>
    </aside>

    <main>
      <div class="pt-20"></div>
      <!-- <p v-for="index in 1000" :key="index">// Content</p> -->
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-2">
          <card_4x2 v-bind="titleCard"></card_4x2>
          <div class="p-2"></div>
          <card_4x2 v-bind="blogCard"></card_4x2>
        </div>
        <div class="col-span-2">
          <card_2x1
            v-for="card in secondaryCards"
            v-bind="card"
            :key="card.title"
          ></card_2x1>
        </div>
        <div class="col-span-1">
          <card_2x2 v-bind="primaryCards[0]"></card_2x2>
          <div class="p-2"></div>
          <card_2x2 v-bind="primaryCards[1]"></card_2x2>
        </div>
        <div class="col-span-1">
          <card_2x2 v-bind="primaryCards[2]"></card_2x2>
          <div class="p-2"></div>
          <card_2x2 v-bind="primaryCards[3]"></card_2x2>
        </div>
        <div class="col-span-2">
          <div class="rounded-xl shadow-xl">
            <iframe
              width="400"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://surl.amap.com/GLjKgD1d2ux"
            ></iframe>
          </div>
        </div>
        <div class="col-span-4">
          <card_4x1 v-bind="sectionTitles[0]"></card_4x1>
        </div>
        <div class="col-span-4">
          <card_4x1 v-bind="sectionTitles[1]"></card_4x1>
        </div>
        <div class="col-span-4">
          <card_4x1 v-bind="sectionTitles[2]"></card_4x1>
        </div>
        <div class="col-span-4">
          <card_4x1 v-bind="sectionTitles[3]"></card_4x1>
        </div>
      </div>
      <div class="pt-40"></div>
    </main>
  </div>
</template>

<script>
import card_4x2 from "./components/card_4x2.vue";
import card_2x2 from "./components/card_2x2.vue";
import card_4x1 from "./components/card_4x1.vue";
import card_2x1 from "./components/card_2x1.vue";

let info = {
  title: "idealclover",
  desc: "Stay simple, stay naive.",
  imgUrl: "https://idealclover.top/icon.jpg",
  titleCard: {
    title: "翠翠 @idealclover",
    desc: "产品经理/独立开发者/个人博主/Vocaloid",
    action: "我的简历",
  },
  blogCard: {
    title: "博客",
    desc: "idealclover.top",
    action: "我的简历",
    bgColor: "bg-primary",
    // textColor: "text-white"
  },
  secondaryCards: [
    {
      title: "即刻",
      url: "",
    },
    {
      title: "酷安",
      url: "",
    },
    {
      title: "少数派",
      url: "",
    },
    {
      title: "Steam",
      url: "",
    },
  ],
  primaryCards: [
    {
      title: "知乎",
      bgColor: "bg-[#0275D2]",
    },
    {
      title: "Bilibili",
      bgColor: "bg-[#FB7299]",
    },
    {
      title: "GitHub",
      bgColor: "bg-[#181717]",
    },
    {
      title: "网易云",
      bgColor: "bg-[#C20B0D]",
    },
  ],
  sectionTitles: [
    {
      title: "博客文章",
    },
    {
      title: "个人项目",
    },
    {
      title: "音乐创作",
    },
    {
      title: "与我联系",
    },
  ],
};

export default {
  components: { card_4x2, card_2x2, card_4x1, card_2x1 },
  data() {
    return info;
  },
};
</script>
