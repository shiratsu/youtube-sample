<template>
  <div>
    <div>
      <font size="6" color="#c71585">YouTube Search list (Vue.js CLI)</font>
    </div>
    <br />

    ソート順:
    <select v-model="order">
      <option></option>
      <option>date</option>
      <option>rating</option>
      <option>relevance</option>
      <option>title</option>
      <option>videoCount</option>
      <option>viewCount</option>
    </select>
    ビデオの長さ:
    <select v-model="videoDuration">
      <option></option>
      <option>any</option>
      <option>long</option>
      <option>medium</option>
      <option>short</option>
    </select>
    タイプ:
    <select v-model="type">
      <option>channel</option>
      <option>video</option>
      <option>playlist</option>
    </select>

    キーワード:<input
      size="40"
      v-model="keyword"
      placeholder="検索キーワードを入力"
    />
    <button @click="search_video">検索</button>
    <table cellspacing="0" cellpadding="5" v-show="results">
      <tr>
        <th width="50">
          <font>No</font>
        </th>
        <th width="200">
          <font>Video</font>
        </th>
        <th width="700">
          <font>Contents</font>
        </th>
      </tr>

      <tr v-for="(movie, index) in results" v-bind:key="movie.id.videoId">
        <!-- No -->
        <td valign="top" width="50">{{ index + 1 }}</td>
        <!-- Video -->
        <td valign="top" width="300">
          <a
            v-bind:href="'https://www.youtube.com/watch?v=' + movie.id.videoId"
          >
            <img
              width="300"
              height="200"
              v-bind:src="movie.snippet.thumbnails.medium.url"
            />
          </a>
        </td>
        <!-- titleとdescription -->
        <td align="left" valign="top" width="700">
          <font size="5" color="#c71585"
            ><b>{{ movie.snippet.title }}</b></font
          >
          <br />
          {{ movie.snippet.description }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchVideo",
  data: function() {
    return {
      results: null,
      type: "",
      videoDuration: "",
      keyword: "",
      order: "viewCount", // リソースを再生回数の多い順に並べます。
      regionCode: "JP", // リソースを再生回数の多い順に並べます。
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet",
        type: "",
        order: "",
        videoDuration: "",
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
      this.params.regionCode = this.regionCode;
      this.params.q = this.keyword;
      this.params.type = this.type;
      this.params.videoDuration = this.videoDuration;
      if (this.order != undefined) {
        this.params.order = this.order;
      }
      console.log(this.params.type);
      console.log(this.params.order);
      console.log(this.params.videoDuration);
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
