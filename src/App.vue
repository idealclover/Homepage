<template>
  <div class="flex flex-row justify-between max-w-screen-2xl m-auto px-10">
    <aside class="h-screen sticky top-0 basis-1/3">
      <div class="pt-20"></div>
      <div class="w-60">
        <img class="w-52 rounded-full" :src="imgUrl" />
        <div class="pt-10"></div>
        <h1 class="text-4xl font-bold">{{ title }}</h1>
        <p class="text-lg">{{ desc }}</p>
      </div>
    </aside>

    <main>
      <div class="pt-20"></div>
      <!-- <p v-for="index in 1000" :key="index">// Content</p> -->
      <div class="grid grid-cols-4 gap-x-8 w-[54rem]">
        <div class="col-span-2">
          <card_4x2 v-bind="titleCard"></card_4x2>
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
          <card_2x2 v-bind="primaryCards[1]"></card_2x2>
        </div>
        <div class="col-span-1">
          <card_2x2 v-bind="primaryCards[2]"></card_2x2>
          <card_2x2 v-bind="primaryCards[3]"></card_2x2>
        </div>
        <div class="col-span-2 relative">
          <div
            class="rounded-xl shadow-xl w-[26rem] h-[26rem] absolute"
            id="map-container"
          ></div>
          <div
            class="absolute bottom-16 right-8 badge badge-neutral p-4 rounded-xl font-semibold"
          >
            Beijing, China
          </div>
        </div>

        <!-- 文章列表 -->
        <div class="col-span-4">
          <card_8x1 v-bind="sectionTitles[0]"></card_8x1>
          <article_list></article_list>
        </div>

        <!-- 个人项目 -->
        <div class="col-span-4">
          <card_8x1 v-bind="sectionTitles[1]"></card_8x1>
        </div>
        <div class="col-span-2">
          <card_4x2 v-bind="projectCardStart"></card_4x2>
        </div>
        <div class="col-span-1" v-for="card in projectCards" :key="card.title">
          <card_2x2 v-bind="card"></card_2x2>
        </div>
        <div class="col-span-2">
          <card_4x2 v-bind="projectCardEnd"></card_4x2>
        </div>

        <!-- 音乐创作 -->
        <div class="col-span-4">
          <card_8x1 v-bind="sectionTitles[2]"></card_8x1>
        </div>
        <div class="col-span-2" v-for="card in musicCards" :key="card.title">
          <card_4x2 v-bind="card"></card_4x2>
        </div>

        <!-- 联系方式 -->
        <div class="col-span-4">
          <card_8x1 v-bind="sectionTitles[3]"></card_8x1>
        </div>
        <div class="col-span-2" v-for="card in teleCards" :key="card.title">
          <card_2x1 v-bind="card"></card_2x1>
        </div>
      </div>
      <div class="pt-40"></div>
    </main>
  </div>
</template>

<script>
import card_4x2 from "./components/card_4x2.vue";
import card_2x2 from "./components/card_2x2.vue";
import card_8x1 from "./components/card_8x1.vue";
import card_2x1 from "./components/card_2x1.vue";
import article_list from "./components/article_list.vue";

// function colorStyleGen(color) {
//   return (
//     "bg-[" +
//     color +
//     "] shadow-[" +
//     color +
//     "]/75 hover:bg-[" +
//     color +
//     "]/75 hover:shadow-[" +
//     color +
//     "]"
//   );
// }

const info = {
  title: "idealclover",
  desc: "Stay simple, stay naive.",
  imgUrl: "https://image.idealclover.cn/blog/assets/icon.png",
  titleCard: {
    title: "翠翠 @idealclover",
    desc: "产品经理/独立开发者/个人博主/Vocaloid",
    bgStyle: "hover:bg-gray-50 hover:shadow-gray-400",
    btnText: "我的简历",
  },
  blogCard: {
    title: "博客",
    desc: "idealclover.top",
    btnText: "去逛逛",
    bgStyle:
      "bg-[#2C3E50] shadow-[#2C3E50]/75 hover:bg-[#2C3E50]/75 hover:shadow-[#2C3E50]",
    textStyle: "text-white",
    btnStyle: "bg-[#162D3B]",
    btnTextStyle: "text-white",
  },
  secondaryCards: [
    {
      title: "即刻",
      url: "https://web.okjike.com/u/e2ede1ee-79e6-420b-92fc-9983566db44c",
      iconUrl: "https://image.idealclover.cn/projects/Homepage/jike.png",
    },
    {
      title: "酷安",
      url: "https://www.coolapk.com/u/999081",
      iconUrl: "https://image.idealclover.cn/projects/Homepage/coolapk.svg",
    },
    {
      title: "少数派",
      url: "https://sspai.com/u/idealclover",
      iconUrl: "https://image.idealclover.cn/projects/Homepage/sspai.svg",
    },
    {
      title: "Steam",
      url: "https://steamcommunity.com/id/idealclover",
      iconUrl: "https://image.idealclover.cn/projects/Homepage/Steam.svg",
    },
  ],
  primaryCards: [
    {
      title: "知乎",
      url: "https://www.zhihu.com/people/cuicuijiang",
      // bgStyle: "bg-[#0275D2] hover:bg-[#0275D2]/75",
      bgStyle:
        "bg-[#0275D2] shadow-[#0275D2]/75 hover:bg-[#0275D2]/75 hover:shadow-[#0275D2]",
      btnText: "Follow 2636",
      textStyle: "text-white",
      btnStyle: "bg-[#3A91EC]",
      btnTextStyle: "text-white",
    },
    {
      title: "Bilibili",
      url: "https://space.bilibili.com/5044093",
      bgStyle:
        "bg-[#FB7299] shadow-[#FB7299]/75 hover:bg-[#FB7299]/75 hover:shadow-[#FB7299]",
      btnText: "Follow 1150",
      textStyle: "text-white",
      btnStyle: "bg-[#FD91AA]",
      btnTextStyle: "text-white",
    },
    {
      title: "GitHub",
      url: "https://github.com/idealclover",
      bgStyle:
        "bg-[#181717] shadow-[#181717]/75 hover:bg-[#181717]/75 hover:shadow-[#181717]",
      btnText: "Follow 624",
      textStyle: "text-white",
      btnStyle: "bg-[#4F4A4A]",
      btnTextStyle: "text-white",
    },
    {
      title: "网易云",
      url: "https://music.163.com/#/artist?id=52267156",
      bgStyle:
        "bg-[#C20B0D] shadow-[#C20B0D]/75 hover:bg-[#C20B0D]/75 hover:shadow-[#C20B0D]",
      btnText: "Follow 54",
      textStyle: "text-white",
      btnStyle: "bg-[#E54141]",
      btnTextStyle: "text-white",
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
  projectCardStart: {
    title: "南哪课表（Android & iOS）",
    desc: "",
    btnText: "800 Stars",
    // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
    // textStyle: "text-white",
    btnStyle: "bg-[#162D3B]",
    btnTextStyle: "text-white",
  },
  projectCards: [
    {
      title: "iOS",
      desc: "",
      btnText: "800 Stars",
      bgStyle:
        "bg-[#2072f3] shadow-[#2072f3]/75 hover:bg-[#2072f3]/75 hover:shadow-[#2072f3]",
      textStyle: "text-white",
      btnStyle: "bg-[#548AFA]",
      btnTextStyle: "text-white",
    },
    {
      title: "Android",
      desc: "",
      btnText: "800 Stars",
      bgStyle:
        "bg-[#11ab60] shadow-[#11ab60]/75 hover:bg-[#11ab60]/75 hover:shadow-[#11ab60]",
      textStyle: "text-white",
      btnStyle: "bg-[#45DB9B]",
      btnTextStyle: "text-white",
    },
    {
      title: "我要戴口罩",
      desc: "",
      btnText: "800 Stars",
      // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
      textStyle: "text-black",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "毕业帽头像",
      desc: "",
      btnText: "800 Stars",
      // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "可配置打赏页",
      desc: "",
      btnText: "800 Stars",
      // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "可配置下载页",
      desc: "",
      btnText: "800 Stars",
      // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "Caritas APP",
      desc: "",
      btnText: "800 Stars",
      // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "Unitypecho",
      desc: "",
      btnText: "800 Stars",
      // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
  ],
  projectCardEnd: {
    title: "在 GitHub 查看更多开源创作",
    desc: "",
    btnText: "800 Stars",
    // bgStyle: "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover",
    // textStyle: "text-white",
    btnStyle: "bg-[#162D3B]",
    btnTextStyle: "text-white",
  },
  musicCards: [
    {
      title: "为谁而为（原作 @COPY）",
      desc: "青溯 version",
      url: "https://www.bilibili.com/video/BV1cs4y1z7Mq",
      btnText: "Follow 800",
      bgStyle:
        "bg-[url('https://image.idealclover.cn/projects/Homepage/music_1.jpg')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "我从人间走过（原作 @瞳荧荧）",
      desc: "青溯 version",
      url: "https://www.bilibili.com/video/BV1BF411L7AH",
      btnText: "Follow 800",
      bgStyle:
        "bg-[url('https://image.idealclover.cn/projects/Homepage/music_2.jpg')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "千里邀月（原作 @纯白）",
      desc: "星尘inf/青溯/沨漪 version",
      url: "https://www.bilibili.com/video/BV11G4y1z7XZ",
      btnText: "Follow 800",
      bgStyle:
        "bg-[url('https://image.idealclover.cn/projects/Homepage/music_3.jpg')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "在 Bilibili 查看更多创作",
      // desc: "idealclover.top",
      url: "https://space.bilibili.com/5044093",
      btnText: "查看更多",
      bgStyle:
        "bg-[url('https://image.idealclover.cn/projects/Homepage/music_4.png')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
  ],
  teleCards: [
    {
      title: "Email: idealclover@163.com",
      url: "mailto:idealclover@163.com",
      iconUrl: "https://image.idealclover.cn/blog/assets/icons/mail.png",
      textStyle: "font-normal",
    },
    {
      title: "QQ: 1455169173",
      url: "http://wpa.qq.com/msgrd?v=3&uin=1455169173&site=qq&menu=yes",
      iconUrl: "https://image.idealclover.cn/blog/assets/icons/QQ.png",
      textStyle: "font-normal",
    },
    {
      title: "Telegram: @idealclover",
      url: "http://t.me/idealclover",
      iconUrl: "https://image.idealclover.cn/blog/assets/icons/telegram.png",
      textStyle: "font-normal",
    },
    {
      title: "Twitter: @idealclover",
      url: "https://twitter.com/idealclover",
      iconUrl: "https://image.idealclover.cn/blog/assets/icons/twitter.png",
      textStyle: "font-normal",
    },
  ],
};

window.init = function () {
  var map = new AMap.Map("map-container", {
    center: [116.397428, 39.90923],
    zoom: 10,
  });
};

export default {
  components: { card_4x2, card_2x2, card_8x1, card_2x1, article_list },
  data() {
    return info;
  },
};
</script>
