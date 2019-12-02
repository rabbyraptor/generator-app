<template>
  <div>
    <h1 style="text-align:center;">News</h1>
    <v-ons-list>
      <v-ons-list-item v-for="news in news" :key="news.title">
        <div class="news-grid">
          <div class="news-image" :style="{backgroundColor:news.backgroundColor}"></div>
          <div class="news-content">
            <b v-html="news.title" />
            <p v-html="news.content" />
          </div>
          <div class="fav-heart" @click="news.favorite = !news.favorite">
            <ios-heart-icon v-if="news.favorite" />
            <ios-heart-empty-icon v-else />
          </div>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        news1: {
          title: "News 1",
          content: "These are the number one news.",
          favorite: false,
          backgroundColor: "blue"
        },
        news2: {
          title: "News 2",
          content: "These are the number two news.",
          favorite: true,
          backgroundColor: "red"
        },
        news3: {
          title: "News 3",
          content: "These are the number three news.",
          favorite: false,
          backgroundColor: "black"
        },
        news4: {
          title: "News 4",
          content: "These are the number four news.",
          favorite: false,
          backgroundColor: "blue"
        },
        news5: {
          title: "News 5",
          content: "These are the number five news.",
          favorite: false,
          backgroundColor: "red"
        },
        news6: {
          title: "News 6",
          content: "These are the number six news.",
          favorite: false,
          backgroundColor: "black"
        }
      }
    };
  }
};
</script>

<style>
.list-item,
.list-item__center {
  padding: 0;
}

.news-grid {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100px minmax(100px, 1fr) 30px;
  align-items: center;
}

.news-image {
  height: 100px;
  width: 100px;
}

.news-content {
  font-size: 14px;
  padding: 12px;
}

.fav-heart {
  font-size: 20px;
}
</style>
