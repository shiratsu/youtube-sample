<template>
  <div>
    <div>
      <font size="6" color="#c71585">YouTube Search list (Vue.js CLI)</font>
    </div>
    <br />
    <input size="40" v-model="keyword" placeholder="検索キーワードを入力" />
    <button @click="search_video">検索</button>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Video</th>
            <th class="text-left">Title</th>
            <th class="text-left">Contents</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in results" :key="item.name">
            <td>
              <a :href="'https://www.youtube.com/watch?v=' + item.id.videoId">
                <v-img
                  width="300"
                  height="200"
                  :src="item.snippet.thumbnails.medium.url"
                />
              </a>
            </td>
            <td>{{ item.snippet.title }}</td>
            <td>{{ item.snippet.description }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchYouTubeVideo",
  data: function() {
    return {
      results: null,
      keyword: "nonkapibara",
      order: "viewCount", // リソースを再生回数の多い順に並べます。
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet",
        type: "video",
        maxResults: "20", // 最大検索数
        key: "AIzaSyB52s6AmGryeSRyyi-Ai-VJxDCu6PyGHPM"
      }
    };
  },
  props: {
    msg: String
  },
  methods: {
    search_video: function() {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params
        })
        .then(function(res) {
          self.results = res.data.items;
        });
    }
  }
};
</script>

<style>
table {
  border-collapse: collapse;
  border: solid 2px #c71585; /*表全体を線で囲う*/
}
table th {
  color: #fff0f5; /*文字色*/
  background: #ff69b4; /*背景色*/
  border: dashed 1px #c71585;
}

table td {
  background: #fff0f5;
  border: dashed 1px #c71585;
}
</style>
