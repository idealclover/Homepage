<template>
  <div
    class="card rounded-2xl shadow-xl shadow-accent hover:shadow-gray-500 bg-primary w-full lg:w-[54rem] min-h-[26rem] mb-8"
  >
    <div class="card-body">
      <div class="pt-2"></div>

      <div class="tabs tabs-boxed rounded-xl max-sm:py-2">
        <div
          class="tab tab-sm sm:tab-lg"
          v-for="(articleList, index) in articlesList"
          :key="articleList.title"
          :class="tabIndex == index ? 'tab-active' : ''"
          @click="changeIndex(index)"
        >
          {{ articleList.title }}
        </div>
      </div>

      <div class="pt-1"></div>

      <!-- <div
        v-for="article in articlesList[tabIndex].articles"
        :key="article"
        tabindex="0"
        class="collapse collapse-arrow rounded-xl bg-base-200"
      >
        <div class="collapse-title md:text-xl sm:flex sm:justify-between">
          {{ article.title }}
          <div class="inline-block float-right text-gray-500">2020.06.11</div>
        </div>
        <div class="collapse-content">
          <p></p>
        </div>
      </div> -->

      <a
        :key="article"
        v-for="article in articlesList[tabIndex].articles"
        class="card card-compact rounded-xl bg-base-200"
        :href="article.url"
        target="_blank"
      >
        <div class="card-body">
          <div class="text-base md:text-xl sm:flex sm:justify-between">
            {{ article.title }}
            <div class="inline-block float-right text-gray-500">
              {{ article.time }}
            </div>
          </div>
        </div>
      </a>

      <div class="pt-1"></div>

      <div class="card-actions justify-end">
        <a
          class="btn btn-md btn-wide rounded-xl capitalize border-0 max-w-full"
          :href="articlesList[tabIndex].url"
          target="_blank"
        >
          查看更多
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const articlesList = [
  {
    title: "技术",
    url: "https://idealclover.top/category/blog",
    articles: [
      {
        title: "Caritas APP 2.0 版本发布",
        url: "https://idealclover.top/archives/635",
        time: "2022.08.21",
      },
      {
        title: "友链屋 - 建个网站订阅友链们的更新～",
        url: "https://idealclover.top/archives/634",
        time: "2022.05.22",
      },
      {
        title: "为博客添加 COVID-19 疫情地图",
        url: "https://idealclover.top/archives/632",
        time: "2022.05.04",
      },
      {
        title: "2020 年，或许你应当试试这样记笔记",
        url: "https://idealclover.top/archives/625",
        time: "2020.06.14",
      },
      {
        title: "南哪指南 - 南大人的专属浏览器主页",
        url: "https://idealclover.top/archives/623",
        time: "2020.05.18",
      },
    ],
  },
  {
    title: "生活",
    url: "https://idealclover.top/category/life",
    articles: [
      {
        title: "再见了，大小周",
        url: "https://idealclover.top/archives/629",
        time: "2021.11.07",
      },
      {
        title: "2020 年年终总结：致即将 22 岁的自己",
        url: "https://idealclover.top/archives/627",
        time: "2021.05.01",
      },
      {
        title: "Hello&bye, days",
        url: "https://idealclover.top/archives/626",
        time: "2020.10.01",
      },
      {
        title: "南哪课表的钱捐哪了",
        url: "https://idealclover.top/archives/609",
        time: "2020.02.29",
      },
      {
        title: "博客建立 1000 天纪念：一个自说自话的故事",
        url: "https://idealclover.top/archives/607",
        time: "2020.02.23",
      },
    ],
  },
  {
    title: "随想",
    url: "https://idealclover.top/category/thinking",
    articles: [
      {
        title: "2020 年年终总结：致即将 22 岁的自己",
        url: "https://idealclover.top/archives/627",
        time: "2021.05.01",
      },
      {
        title: "idealclover@科技 X",
        url: "https://idealclover.top/archives/624",
        time: "2020.05.26",
      },
      {
        title: "关于《后浪》，随便写点什么",
        url: "https://idealclover.top/archives/621",
        time: "2020.05.04",
      },
      {
        title: "我看好 Fluent Design，但不看好微软",
        url: "https://idealclover.top/archives/615",
        time: "2020.04.12",
      },
      {
        title: "身份、立场与偏见：为什么互联网愈发 “水火不容”",
        url: "https://idealclover.top/archives/614",
        time: "2020.04.03",
      },
    ],
  },

  {
    title: "测评",
    url: "https://idealclover.top/category/testing",
    articles: [
      {
        title: "Pico Neo 3 开箱体验 - XR 或许已经走出了最低谷",
        url: "https://idealclover.top/archives/630",
        time: "2022.02.04",
      },
      {
        title: "iPhone SE 2020 测评：我用爽了，但也许你并不需要",
        url: "https://idealclover.top/archives/620",
        time: "2020.04.30",
      },
      {
        title: "9102 年都快过了，这 iPhone SE 还香吗？",
        url: "https://idealclover.top/archives/595",
        time: "2019.12.26",
      },
      {
        title: "开箱一份字节跳动校招生大礼包！",
        url: "https://idealclover.top/archives/594",
        time: "2019.12.19",
      },
      {
        title: "开箱一只初音趴趴！",
        url: "https://idealclover.top/archives/593",
        time: "2019.12.16",
      },
    ],
  },
];

export default {
  data() {
    return {
      articlesList: articlesList,
      tabIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.tabIndex = index;
      // console.log(this.tabIndex)
    },
  },
};
</script>
