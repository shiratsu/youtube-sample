exports.ids=[1],exports.modules={27:function(t,e,o){var content=o(29);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(5).default;t.exports.__inject__=function(t){r("0cd7e4ee",content,!0,t)}},28:function(t,e,o){"use strict";o.r(e);var r=o(27),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,(function(){return r[t]}))}(d);e.default=n.a},29:function(t,e,o){(e=o(4)(!1)).push([t.i,"table{border-collapse:collapse;border:2px solid #c71585}table th{color:#fff0f5;background:#ff69b4}table td,table th{border:1px dashed #c71585}table td{background:#fff0f5}",""]),t.exports=e},30:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.components=component.exports.options.components),e.components=e.components||{},t)e.components[i]=e.components[i]||t[i]}},31:function(t,e,o){var content=o(32);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),o(5).default("7c06aa28",content,!0)},32:function(t,e,o){(e=o(4)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table thead tr th{color:rgba(0,0,0,.6)}.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--light.v-data-table tbody tr:not(:last-child) th:last-child,.theme--light.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr.active{background:#f5f5f5}.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr:last-child th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--dark.v-data-table tbody tr:not(:last-child) th:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table tbody tr.active{background:#505050}.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{max-width:100%}.v-data-table table{width:100%;border-spacing:0}.v-data-table td,.v-data-table th{padding:0 16px}.v-data-table th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table th{text-align:left}.v-application--is-rtl .v-data-table th{text-align:right}.v-data-table td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress .v-progress-linear{position:absolute}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense td{height:24px}.v-data-table--dense th{height:32px}.v-data-table--fixed-header .v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header thead th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header thead tr:nth-child(2) th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th{top:32px}",""]),t.exports=e},34:function(t,e,o){"use strict";o.r(e);var r=o(24),n=o.n(r),d={name:"SearchVideo",data:function(){return{results:null,type:"",videoDuration:"",keyword:"",viewcount:["","date","rating","relevance","title","videoCount","viewCount"],duration:["","any","long","medium","short"],type:["channel","video","playlist"],order:"viewCount",regionCode:"JP",params:{q:"",part:"snippet",type:"",order:"",videoDuration:"",maxResults:"20",key:"AIzaSyCk3u1OPYqyg8BWGRUgL2is_2UbZB8zc78"}}},props:{msg:String},methods:{search_video:function(){this.params.regionCode=this.regionCode,this.params.q=this.keyword,this.params.type=this.type,this.params.videoDuration=this.videoDuration,null!=this.order&&(this.params.order=this.order),console.log(this.params.type),console.log(this.params.order),console.log(this.params.videoDuration);var t=this;n.a.get("https://www.googleapis.com/youtube/v3/search",{params:this.params}).then((function(e){t.results=e.data.items}))}}},l=o(2),h=o(30),v=o.n(h),c=(o(31),o(1)),m=o(0),_=o.n(m);const f=_.a.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:()=>({themeableProvide:{isDark:!1}}),computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});var x=function(...t){return _.a.extend({mixins:t})}(f).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(c.c)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}});var component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._ssrNode("<div>","</div>",[o("font",{attrs:{size:"6",color:"#c71585"}},[t._v("YouTube Search list (Vue.js CLI)")])],1),t._ssrNode(" <br>\n\n  ソート順:\n  "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"order"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.order=e.target.multiple?o:o[0]}}},[o("option"),t._v(" "),o("option",[t._v("date")]),t._v(" "),o("option",[t._v("rating")]),t._v(" "),o("option",[t._v("relevance")]),t._v(" "),o("option",[t._v("title")]),t._v(" "),o("option",[t._v("videoCount")]),t._v(" "),o("option",[t._v("viewCount")])]),t._ssrNode("\n  ビデオの長さ:\n  "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.videoDuration,expression:"videoDuration"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.videoDuration=e.target.multiple?o:o[0]}}},[o("option"),t._v(" "),o("option",[t._v("any")]),t._v(" "),o("option",[t._v("long")]),t._v(" "),o("option",[t._v("medium")]),t._v(" "),o("option",[t._v("short")])]),t._ssrNode("\n  タイプ:\n  "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?o:o[0]}}},[o("option",[t._v("channel")]),t._v(" "),o("option",[t._v("video")]),t._v(" "),o("option",[t._v("playlist")])]),t._ssrNode('\n\n  キーワード:<input size="40" placeholder="検索キーワードを入力"'+t._ssrAttr("value",t.keyword)+"> <button>検索</button> "),o("v-simple-table",{attrs:{cellspacing:"0",cellpadding:"5"},scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{attrs:{width:"50"}},[o("font",[t._v("No")])],1),t._v(" "),o("th",{attrs:{width:"200"}},[o("font",[t._v("Video")])],1),t._v(" "),o("th",{attrs:{width:"700"}},[o("font",[t._v("Contents")])],1)])]),t._v(" "),o("tbody",t._l(t.results,(function(e,r){return o("tr",{key:e.id.videoId},[o("td",{attrs:{valign:"top",width:"50"}},[t._v(t._s(r+1))]),t._v(" "),o("td",{attrs:{valign:"top",width:"300"}},[o("a",{attrs:{href:"https://www.youtube.com/watch?v="+e.id.videoId,target:"_blank"}},[o("img",{attrs:{width:"300",height:"200",src:e.snippet.thumbnails.medium.url}})])]),t._v(" "),o("td",{attrs:{align:"left",valign:"top",width:"700"}},[o("font",{attrs:{size:"5",color:"#c71585"}},[o("b",[t._v(t._s(e.snippet.title))])]),t._v(" "),o("br"),t._v("\n            "+t._s(e.snippet.description)+"\n          ")],1)])})),0)]},proxy:!0}])})],2)}),[],!1,(function(t){var e=o(28);e.__inject__&&e.__inject__(t)}),null,"3b253088"),y=component.exports;v()(component,{VSimpleTable:x});var k={name:"app",components:{SearchVideo:y}},w=Object(l.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app"},[e("SearchVideo")],1)}),[],!1,null,null,"88f53fd6");e.default=w.exports}};