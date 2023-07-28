<template>
  <div
    class="card rounded-2xl shadow-xl w-[54rem] min-h-[26rem] mb-8"
    :class="[bgColor, textColor]"
  >
    <div class="card-body">
      <div class="tabs">
        <a
          class="tab tab-lg"
          v-for="articleList in articlesList"
          :key="articleList.title"
          >{{ articleList.title }}</a
        >
      </div>
      <div
        v-for="article in articlesList[0].articles"
        :key="article"
        tabindex="0"
        class="collapse border border-base-300 bg-base-200"
      >
        <div class="collapse-title text-xl font-medium">
          {{ article.title }}
        </div>
        <div class="collapse-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div class="card-actions justify-end">
        <button
          class="btn btn-md btn-wide rounded-xl capitalize border-0"
          :class="[btnColor, btnTextColor]"
        >
          查看更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
let articlesList = [
  {
    title: "技术",
    articles: [
      {
        title: "Caritas APP 2.0 版本发布",
        link: "https://idealclover.top/archives/635/",
      },
      {
        title: "友链屋 - 建个网站订阅友链们的更新～",
        link: "https://idealclover.top/archives/634/",
      },
      {
        title: "（22.05.04 更新）为博客添加 COVID-19 疫情地图",
        link: "https://idealclover.top/archives/632/",
      },
      {
        title: "2020 年，或许你应当试试这样记笔记",
        link: "https://idealclover.top/archives/625/",
      },
      {
        title: "南哪指南 - 南大人的专属浏览器主页",
        link: "https://idealclover.top/archives/623/",
      },
    ],
  },
  {
    title: "随想",
    articles: [],
  },
  {
    title: "生活",
    articles: [],
  },
  {
    title: "测评",
    articles: [],
  },
];

export default {
  data() {
    return {
      articlesList: articlesList,
    };
  },
};
</script>
