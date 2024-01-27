<template>
  <div class="container m-auto lg:max-xl:w-min">
    <div class="xl:flex xl:flex-row xl:justify-between max-w-screen-2xl px-10">
      <aside
        class="min-w-full md:min-w-0 xl:basis-1/3 xl:h-screen xl:sticky xl:top-0"
      >
        <div class="pt-20"></div>
        <div class="w-64">
          <img
            class="w-32 h-32 md:w-52 md:h-52 rounded-full"
            :src="info.imgUrl"
            :alt="info.title"
          />
          <div class="pt-10"></div>
          <h1 class="text-4xl font-bold pl-2">{{ info.title }}</h1>
          <p class="text-lg pl-2">{{ info.desc }}</p>

          <div class="pt-5"></div>
          <div class="flex flex-row w-full">
            <a
              class="basis-1/4"
              v-for="card in info.teleCards"
              :key="card.title"
              :aria-label="card.title"
              :href="card.url"
              target="_blank"
            >
              <div :class="card.iconInfoClass"></div>
              <!-- <img :src="card.iconUrl" :alt="card.title" /> -->
            </a>
          </div>
        </div>
      </aside>

      <main>
        <div class="pt-20"></div>
        <!-- <p v-for="index in 1000" :key="index">// Content</p> -->
        <div class="grid grid-cols-4 gap-x-8 lg:w-[54rem]">
          <div class="col-span-4 md:col-span-2">
            <card_4x2
              v-bind="showCV ? info.cvTitleCard : info.titleCard"
            ></card_4x2>
            <card_4x2 v-bind="info.blogCard"></card_4x2>
          </div>

          <div class="hidden md:block col-span-4 md:col-span-2 md:col-start-3">
            <card_2x1
              v-for="card in info.secondaryCards"
              v-bind="card"
              :key="card.title"
            ></card_2x1>
          </div>
          <div class="col-span-2 md:col-span-1">
            <card_2x2 v-bind="info.primaryCards[0]"></card_2x2>
            <card_2x2 v-bind="info.primaryCards[1]"></card_2x2>
          </div>
          <div class="col-span-2 md:col-span-1">
            <card_2x2 v-bind="info.primaryCards[2]"></card_2x2>
            <card_2x2 v-bind="info.primaryCards[3]"></card_2x2>
          </div>

          <div
            v-if="width >= 768"
            class="col-span-4 md:col-span-2 w-full lg:w-[26rem] lg:h-[26rem] relative"
          >
            <div
              class="rounded-xl shadow-xl shadow-accent hover:shadow-gray-500 w-full h-full lg:w-[26rem] lg:h-[26rem] absolute"
              id="map-container"
            ></div>
            <div
              class="absolute bottom-8 right-8 badge badge-neutral p-4 rounded-xl font-semibold"
            >
              {{ info.location }}
            </div>
          </div>

          <!-- 文章列表 -->
          <div class="col-span-4">
            <card_8x1 v-bind="info.sectionTitles[0]"></card_8x1>
            <article_list></article_list>
          </div>

          <!-- 个人项目 -->
          <div class="col-span-4">
            <card_8x1 v-bind="info.sectionTitles[1]"></card_8x1>
          </div>
          <div class="col-span-4 md:col-span-2">
            <card_4x2 v-bind="info.projectCardStart"></card_4x2>
          </div>
          <div
            class="col-span-2 md:col-span-1"
            v-for="card in info.projectCards"
            :key="card.title"
          >
            <card_2x2 v-bind="card"></card_2x2>
          </div>
          <div class="col-span-4 md:col-span-2">
            <card_4x2 v-bind="info.projectCardEnd"></card_4x2>
          </div>

          <!-- 音乐创作 -->
          <div class="col-span-4">
            <card_8x1 v-bind="info.sectionTitles[2]"></card_8x1>
          </div>
          <div
            class="col-span-4 md:col-span-2"
            v-for="card in info.musicCards"
            :key="card.title"
          >
            <card_4x2 v-bind="card"></card_4x2>
          </div>

          <!-- 联系方式 -->
          <div class="col-span-4">
            <card_8x1 v-bind="info.sectionTitles[3]"></card_8x1>
          </div>
          <div
            class="col-span-4 md:col-span-2"
            v-for="card in info.teleCards"
            :key="card.title"
          >
            <card_2x1 v-bind="card"></card_2x1>
          </div>
        </div>
        <div class="pt-16"></div>
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
          <div>
            🚀 powered by
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              class="text-gray-400"
            >
              tailwindcss
            </a>
            <a href="https://vuejs.org/" target="_blank" class="text-gray-400">
              Vue.js
            </a>
          </div>
          <div>
            💡 inspired by
            <a href="https://bento.me" target="_blank" class="text-gray-400">
              bento.me
            </a>
          </div>
          <!-- <div>
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              class="text-gray-400"
            >
              京ICP备2024045824号
            </a>
          </div> -->
        </footer>
        <div class="pt-10"></div>
      </main>
    </div>
  </div>
</template>

<script setup>
import card_4x2 from "./components/card_4x2.vue";
import card_2x2 from "./components/card_2x2.vue";
import card_8x1 from "./components/card_8x1.vue";
import card_2x1 from "./components/card_2x1.vue";
import article_list from "./components/article_list.vue";
import { ref, onMounted, onUnmounted } from "vue";

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

const width = ref(0);
const flag = ref(false);

const info = ref({
  title: "idealclover",
  desc: "Stay simple, stay naive.",
  imgUrl: "https://cdn.idealclover.cn/Projects/homepage/icon.png",
  location: "Beijing, China",
  titleCard: {
    title: "翠翠 @idealclover",
    desc: "产品经理/独立开发者/个人博主/Vocaloid",
    url: "https://idealclover.top/about.html",
    // url: "https://cdn.idealclover.cn/Projects/homepage/resume.pdf",
    bgStyle:
      "bg-primary shadow-accent hover:bg-primary-focus hover:shadow-gray-500",
    btnText: "了解更多",
  },
  cvTitleCard: {
    title: "翠翠 @idealclover",
    desc: "Project Manager @Bytedance\n产品经理/独立开发者/个人博主/Vocaloid",
    url: "https://idealclover.top/about.html",
    bgStyle:
      "bg-primary shadow-accent hover:bg-primary-focus hover:shadow-gray-500 whitespace-pre-line",
    btnText: "查看简历",
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
      // iconUrl: "https://cdn.idealclover.cn/Projects/homepage/jike.png",
      iconClass: "jike",
    },
    {
      title: "酷安",
      url: "https://www.coolapk.com/u/999081",
      // iconUrl: "https://cdn.idealclover.cn/Projects/homepage/coolapk.svg",
      iconClass: "coolapk",
    },
    {
      title: "少数派",
      url: "https://sspai.com/u/idealclover",
      // iconUrl: "https://cdn.idealclover.cn/Projects/homepage/sspai.svg",
      iconClass: "sspai",
    },
    {
      title: "Steam",
      url: "https://steamcommunity.com/id/idealclover",
      // iconUrl: "https://cdn.idealclover.cn/Projects/homepage/Steam.svg",
      iconClass: "Steam",
    },
  ],
  primaryCards: [
    {
      title: "知乎",
      url: "https://www.zhihu.com/people/cuicuijiang",
      // bgStyle: "bg-[#0275D2] hover:bg-[#0275D2]/75",
      bgStyle:
        "bg-[#0275D2] shadow-[#0275D2]/75 hover:bg-[#0275D2]/75 hover:shadow-[#0275D2]",
      btnText: "Follow",
      textStyle: "text-white",
      btnStyle: "bg-[#3A91EC] hover:bg-[#78B0F9]",
      btnTextStyle: "text-white",
      updateUrl: "https://api.swo.moe/stats/zhihu/cuicuijiang",
    },
    {
      title: "Bilibili",
      url: "https://space.bilibili.com/5044093",
      bgStyle:
        "bg-[#FB7299] shadow-[#FB7299]/75 hover:bg-[#FB7299]/75 hover:shadow-[#FB7299]",
      btnText: "Follow",
      textStyle: "text-white",
      btnStyle: "bg-[#FD91AA] hover:bg-[#FEB2BF]",
      btnTextStyle: "text-white",
      updateUrl: "https://api.swo.moe/stats/bilibili/5044093",
    },
    {
      title: "GitHub",
      url: "https://github.com/idealclover",
      bgStyle:
        "bg-[#181717] shadow-[#181717]/75 hover:bg-[#181717]/75 hover:shadow-[#181717]",
      btnText: "Follow",
      textStyle: "text-white",
      btnStyle: "bg-[#4F4A4A] hover:bg-[#9D9796]",
      btnTextStyle: "text-white",
      updateUrl: "https://api.swo.moe/stats/github/idealclover",
    },
    {
      title: "网易云",
      url: "https://music.163.com/#/artist?id=52267156",
      bgStyle:
        "bg-[#C20B0D] shadow-[#C20B0D]/75 hover:bg-[#C20B0D]/75 hover:shadow-[#C20B0D]",
      btnText: "Follow",
      textStyle: "text-white",
      btnStyle: "bg-[#E54141] hover:bg-[#F77D7D]",
      btnTextStyle: "text-white",
      updateUrl: "https://api.swo.moe/stats/neteasemusic/78983390",
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
      "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_nnkb_2.jpg')] bg-cover bg-center shadow-[#2C3E50]/75 hover:shadow-[#2C3E50]",
    textStyle: "text-black whitespace-pre-line",
    btnStyle: "glass",
    btnTextStyle: "text-black lowercase",
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
      url: "https://idealclover.top/archives/602",
      btnText: "1M+ 👤",
      bgStyle:
        "bg-primary hover:bg-primary-focus shadow-accent hover:shadow-gray-500",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_mask_2.jpg')] bg-cover",
      // btnStyle: "bg-[#162D3B]",
      // btnTextStyle: "text-white",
    },
    {
      title: "毕业帽头像",
      desc: "微信小程序",
      url: "https://idealclover.top/archives/622",
      btnText: "1K+ 👤",
      bgStyle:
        "bg-primary hover:bg-primary-focus shadow-accent hover:shadow-gray-500",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_bachelor.png')] bg-cover",
      // btnStyle: "bg-[#162D3B]",
      // btnTextStyle: "text-white",
    },
    {
      title: "可配置打赏页",
      desc: "H5网页",
      url: "https://donate.idealclover.cn",
      btnText: "62 ✨",
      bgStyle:
        "bg-primary hover:bg-primary-focus shadow-accent hover:shadow-gray-500",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      // btnStyle: "bg-[#162D3B]",
      // btnTextStyle: "text-white",
    },
    {
      title: "可配置下载页",
      desc: "H5网页",
      url: "https://nju.app",
      btnText: "32 ✨",
      bgStyle:
        "bg-primary hover:bg-primary-focus shadow-accent hover:shadow-gray-500",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      // btnStyle: "bg-[#162D3B]",
      // btnTextStyle: "text-white",
    },
    {
      title: "Caritas APP",
      desc: "优质文章整理",
      url: "https://zhuanlan.zhihu.com/p/556201282",
      btnText: "900+ 👍",
      // bgStyle: "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover",
      textStyle: "text-white",
      btnStyle: "bg-[#FEAD68] hover:bg-[#FFCC96]",
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
      btnStyle: "bg-[#54E236] hover:bg-[#84F675]",
      btnTextStyle: "text-white",
      bgStyle:
        "bg-[#2cbb00] shadow-[#2cbb00]/75 hover:bg-[#2cbb00]/75 hover:shadow-[#2cbb00]",
    },
  ],
  projectCardEnd: {
    title: "在 GitHub 查看更多开源创作",
    // desc: "@idealclover",
    url: "https://github.com/idealclover",
    btnText: "2500+ Stars ✨",
    bgStyle:
      "bg-[url('https://cdn.idealclover.cn/Projects/homepage/project_github.jpg')] bg-cover bg-center shadow-[#6e5494]/75 hover:shadow-[#6e5494]",
    textStyle: "text-white",
    btnStyle: "glass",
    btnTextStyle: "text-white capitalize",
  },
  musicCards: [
    {
      title: "为谁而为（原作 @COPY）",
      desc: "青溯 version",
      url: "https://www.bilibili.com/video/BV1cs4y1z7Mq",
      btnText: "2227 views 🎥",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_1.jpg')] bg-cover bg-center shadow-accent hover:shadow-gray-500",
      textStyle: "text-white",
      btnStyle: "glass",
      btnTextStyle: "text-white capitalize",
    },
    {
      title: "我从人间走过（原作 @瞳荧荧）",
      desc: "青溯 version",
      url: "https://www.bilibili.com/video/BV1BF411L7AH",
      btnText: "1400 views 🎥",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_2.jpg')] bg-cover bg-center shadow-accent hover:shadow-gray-500",
      textStyle: "text-white",
      btnStyle: "glass",
      btnTextStyle: "text-white capitalize",
    },
    {
      title: "千里邀月（原作 @纯白）",
      desc: "星尘inf/青溯/沨漪 version",
      url: "https://www.bilibili.com/video/BV11G4y1z7XZ",
      btnText: "1861 views 🎥",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_3.jpg')] bg-cover bg-center shadow-accent hover:shadow-gray-500",
      textStyle: "text-white",
      btnStyle: "glass",
      btnTextStyle: "text-white capitalize",
    },
    {
      title: "在 Bilibili 查看更多创作",
      desc: "@idealclover",
      url: "https://space.bilibili.com/5044093",
      btnText: "查看更多",
      bgStyle:
        "bg-[url('https://cdn.idealclover.cn/Projects/homepage/music_4.jpg')] bg-cover bg-center shadow-accent hover:shadow-gray-500",
      textStyle: "text-white",
      btnStyle: "glass",
      btnTextStyle: "text-white capitalize",
    },
  ],
  teleCards: [
    {
      title: "Email: idealclover@163.com",
      url: "mailto:idealclover@163.com",
      // iconUrl: "https://image.idealclover.cn/blog/assets/icons/mail.png",
      iconClass: "mail_s",
      iconInfoClass: "mail",
      textStyle: "font-normal",
    },
    {
      title: "QQ: 1455169173",
      url: "http://wpa.qq.com/msgrd?v=3&uin=1455169173&site=qq&menu=yes",
      // iconUrl: "https://image.idealclover.cn/blog/assets/icons/QQ.png",
      iconClass: "QQ_s",
      iconInfoClass: "QQ",
      textStyle: "font-normal",
    },
    {
      title: "Telegram: @idealclover",
      url: "http://t.me/idealclover",
      // iconUrl: "https://image.idealclover.cn/blog/assets/icons/telegram.png",
      iconClass: "telegram_s",
      iconInfoClass: "telegram",
      textStyle: "font-normal",
    },
    {
      title: "Twitter: @idealclover",
      url: "https://twitter.com/idealclover",
      // iconUrl: "https://image.idealclover.cn/blog/assets/icons/twitter.png",
      iconClass: "twitter_s",
      iconInfoClass: "twitter",
      textStyle: "font-normal",
    },
  ],
});

// 按需加载高德地图组件 tmd 要不太拖累性能了
window.addEventListener("resize", handleResize);
handleResize();

window.init = function () {
  var map = new AMap.Map("map-container", {
    center: [116.397428, 39.90923],
    zoom: 10,
  });
};

onMounted(() => {
  for (let i = 0; i < info.value.primaryCards.length; i++) {
    fetch(info.value.primaryCards[i].updateUrl, {
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        info.value.primaryCards[i].btnText =
          info.value.primaryCards[i].btnText + " " + response.count;
      });
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

function handleResize() {
  width.value = window.innerWidth;
  if (!flag.value && width.value >= 768) {
    var newScript = document.createElement("script");
    newScript.src = "https://webapi.amap.com/maps?v=1.4.15&callback=init";
    document.head.appendChild(newScript);
    flag.value = true;
  }

  if (flag.value && width.value < 768) {
    flag.value = false;
  }
}
</script>
