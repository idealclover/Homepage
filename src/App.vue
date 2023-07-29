<template>
  <div class="container m-auto lg:max-xl:w-min">
    <div class="xl:flex xl:flex-row xl:justify-between max-w-screen-2xl px-10">
      <aside
        class="min-w-full md:min-w-0 xl:basis-1/3 xl:h-screen xl:sticky xl:top-0"
      >
        <div class="pt-20"></div>
        <div class="w-60">
          <img class="w-32 md:w-52 rounded-full" :src="imgUrl" />
          <div class="pt-10"></div>
          <h1 class="text-4xl font-bold">{{ title }}</h1>
          <p class="text-lg">{{ desc }}</p>
        </div>
      </aside>

      <main>
        <div class="pt-20"></div>
        <!-- <p v-for="index in 1000" :key="index">// Content</p> -->
        <div class="grid grid-cols-4 gap-x-8 lg:w-[54rem]">
          <div class="col-span-4 md:col-span-2">
            <card_4x2 v-bind="titleCard"></card_4x2>
            <card_4x2 v-bind="blogCard"></card_4x2>
          </div>

          <div class="hidden md:block col-span-4 md:col-span-2 md:col-start-3">
            <card_2x1
              v-for="card in secondaryCards"
              v-bind="card"
              :key="card.title"
            ></card_2x1>
          </div>
          <div class="col-span-2 md:col-span-1">
            <card_2x2 v-bind="primaryCards[0]"></card_2x2>
            <card_2x2 v-bind="primaryCards[1]"></card_2x2>
          </div>
          <div class="col-span-2 md:col-span-1">
            <card_2x2 v-bind="primaryCards[2]"></card_2x2>
            <card_2x2 v-bind="primaryCards[3]"></card_2x2>
          </div>

          <div
            class="hidden md:block col-span-4 md:col-span-2 w-full lg:w-[26rem] lg:h-[26rem] relative"
          >
            <div
              class="rounded-xl shadow-xl w-full h-full lg:w-[26rem] lg:h-[26rem] absolute"
              id="map-container"
            ></div>
            <div
              class="absolute bottom-8 right-8 badge badge-neutral p-4 rounded-xl font-semibold"
            >
              {{ location }}
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
          <div class="col-span-4 md:col-span-2">
            <card_4x2 v-bind="projectCardStart"></card_4x2>
          </div>
          <div
            class="col-span-2 md:col-span-1"
            v-for="card in projectCards"
            :key="card.title"
          >
            <card_2x2 v-bind="card"></card_2x2>
          </div>
          <div class="col-span-4 md:col-span-2">
            <card_4x2 v-bind="projectCardEnd"></card_4x2>
          </div>

          <!-- 音乐创作 -->
          <div class="col-span-4">
            <card_8x1 v-bind="sectionTitles[2]"></card_8x1>
          </div>
          <div
            class="col-span-4 md:col-span-2"
            v-for="card in musicCards"
            :key="card.title"
          >
            <card_4x2 v-bind="card"></card_4x2>
          </div>

          <!-- 联系方式 -->
          <div class="col-span-4">
            <card_8x1 v-bind="sectionTitles[3]"></card_8x1>
          </div>
          <div
            class="col-span-4 md:col-span-2"
            v-for="card in teleCards"
            :key="card.title"
          >
            <card_2x1 v-bind="card"></card_2x1>
          </div>
        </div>
        <div class="pt-20"></div>
        <footer class="text-center">
          <div class="">
            made with ❤️ by
            <a
              href="https://idealclover.top"
              target="_blank"
              class="text-gray-400"
              >idealclover</a
            >
          </div>
          <div class="">
            💡 inspired by
            <a href="https://bento.me" target="_blank" class="text-gray-400"
              >bento.me</a
            >
          </div>
        </footer>
        <div class="pt-10"></div>
      </main>
    </div>
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
  location: "Beijing, China",
  titleCard: {
    title: "翠翠 @idealclover",
    desc: "产品经理/独立开发者/个人博主/Vocaloid",
    url: "https://cdn.idealclover.cn/Projects/homepage/resume.pdf",
    bgStyle: "hover:bg-gray-50 hover:shadow-gray-400",
    btnText: "我的简历",
  },
  blogCard: {
    title: "博客",
    desc: "idealclover.top",
    url: "https://idealclover.top/articles.html",
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
      iconUrl: "https://cdn.idealclover.cn/Projects/homepage/jike.png",
    },
    {
      title: "酷安",
      url: "https://www.coolapk.com/u/999081",
      iconUrl: "https://cdn.idealclover.cn/Projects/homepage/coolapk.svg",
    },
    {
      title: "少数派",
      url: "https://sspai.com/u/idealclover",
      iconUrl: "https://cdn.idealclover.cn/Projects/homepage/sspai.svg",
    },
    {
      title: "Steam",
      url: "https://steamcommunity.com/id/idealclover",
      iconUrl: "https://cdn.idealclover.cn/Projects/homepage/Steam.svg",
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
    desc: "简洁无广告的南大专属课表\n累积服务 3w+ 南大同学",
    url: "https://nju.app",
    btnText: "https://nju.app",
    bgStyle:
      "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_nnkb_2.png')] bg-cover shadow-[#2C3E50]/75 hover:shadow-[#2C3E50]",
    textStyle: "whitespace-pre-line",
    btnStyle: "bg-[#162D3B]",
    btnTextStyle: "text-white lowercase",
  },
  projectCards: [
    {
      title: "iOS",
      desc: "APP Store",
      url: "https://apps.apple.com/cn/app/id1511705694",
      btnText: "✨ 4.9/5",
      bgStyle:
        "bg-[#2072f3] shadow-[#2072f3]/75 hover:bg-[#2072f3]/75 hover:shadow-[#2072f3]",
      textStyle: "text-white",
      btnStyle: "bg-[#548AFA]",
      btnTextStyle: "text-white",
    },
    {
      title: "Android",
      desc: "CoolAPK",
      url: "https://www.coolapk.com/apk/218862",
      btnText: "✨ 8.9/10",
      bgStyle:
        "bg-[#11ab60] shadow-[#11ab60]/75 hover:bg-[#11ab60]/75 hover:shadow-[#11ab60]",
      textStyle: "text-white",
      btnStyle: "bg-[#45DB9B]",
      btnTextStyle: "text-white",
    },
    {
      title: "我要戴口罩",
      desc: "微信小程序",
      url: "",
      btnText: "1M+ 👤",
      bgStyle: "bg-gray-100 hover:bg-gray-50 hover:shadow-gray-400",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_mask_2.jpg')] bg-cover",
      textStyle: "text-black",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "毕业帽头像",
      desc: "微信小程序",
      url: "",
      btnText: "1K+ 👤",
      bgStyle: "bg-gray-100 hover:bg-gray-50 hover:shadow-gray-400",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_bachelor.png')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "可配置打赏页",
      desc: "H5网页",
      url: "https://donate.idealclover.cn",
      btnText: "62 ✨",
      bgStyle: "bg-gray-100 hover:bg-gray-50 hover:shadow-gray-400",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "可配置下载页",
      desc: "H5网页",
      url: "https://nju.app",
      btnText: "32 ✨",
      bgStyle: "bg-gray-100 hover:bg-gray-50 hover:shadow-gray-400",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      // textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white",
    },
    {
      title: "Caritas APP",
      desc: "优质文章整理",
      url: "https://zhuanlan.zhihu.com/p/556201282",
      btnText: "900+ 👍",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      textStyle: "text-white",
      btnStyle: "bg-[#FEAD68]",
      btnTextStyle: "text-white",
      bgStyle:
        "bg-[#fc883b] shadow-[#fc883b]/75 hover:bg-[#fc883b]/75 hover:shadow-[#fc883b]",
    },
    {
      title: "Unitypecho",
      desc: "小程序版本博客",
      url: "https://idealclover.top/archives/613",
      btnText: "118 ✨",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      textStyle: "text-white",
      btnStyle: "bg-[#54E236]",
      btnTextStyle: "text-white",
      bgStyle:
        "bg-[#2cbb00] shadow-[#2cbb00]/75 hover:bg-[#2cbb00]/75 hover:shadow-[#2cbb00]",
    },
  ],
  projectCardEnd: {
    title: "在 GitHub 查看更多开源创作",
    // desc: "@idealclover",
    url: "",
    btnText: "2500+ ✨",
    bgStyle:
      "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_github.png')] bg-cover shadow-[#6e5494]/75 hover:shadow-[#6e5494]",
    textStyle: "text-white",
    btnStyle: "bg-[#181717]",
    btnTextStyle: "text-white capitalize",
  },
  musicCards: [
    {
      title: "为谁而为（原作 @COPY）",
      desc: "青溯 version",
      url: "https://www.bilibili.com/video/BV1cs4y1z7Mq",
      btnText: "2227 views 🎥",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white capitalize",
    },
    {
      title: "我从人间走过（原作 @瞳荧荧）",
      desc: "青溯 version",
      url: "https://www.bilibili.com/video/BV1BF411L7AH",
      btnText: "1400 views 🎥",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_2.jpg')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white capitalize",
    },
    {
      title: "千里邀月（原作 @纯白）",
      desc: "星尘inf/青溯/沨漪 version",
      url: "https://www.bilibili.com/video/BV11G4y1z7XZ",
      btnText: "1861 views 🎥",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_3.jpg')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white capitalize",
    },
    {
      title: "在 Bilibili 查看更多创作",
      desc: "@idealclover",
      url: "https://space.bilibili.com/5044093",
      btnText: "查看更多",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_4.png')] bg-cover shadow-gray-400 hover:shadow-gray-600",
      textStyle: "text-white",
      btnStyle: "bg-[#162D3B]",
      btnTextStyle: "text-white capitalize",
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
