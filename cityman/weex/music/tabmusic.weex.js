// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tabmusic = __webpack_require__(9);

	var _tabmusic2 = _interopRequireDefault(_tabmusic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_tabmusic2.default.el = '#tabmusic';
	exports.default = new Vue(_tabmusic2.default);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jsen/Documents/Projects/Weex/tiny/Music/src/tabmusic.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1f21401f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#f55e53"
	  },
	  "video": {
	    "width": 750,
	    "height": 80
	  },
	  "contain": {
	    "width": 256,
	    "height": 256
	  },
	  "function": {
	    "width": 64,
	    "height": 64
	  },
	  "tip": {
	    "color": "#ffffff",
	    "marginTop": 30,
	    "fontSize": 36
	  },
	  "progress": {
	    "width": 650,
	    "marginLeft": 50,
	    "height": 4,
	    "backgroundColor": "#ff4e43",
	    "marginBottom": 6
	  },
	  "progress_a": {
	    "position": "absolute",
	    "height": 4,
	    "backgroundColor": "#aaaaaa",
	    "borderRadius": 2
	  },
	  "progress_b": {
	    "position": "absolute",
	    "height": 4,
	    "backgroundColor": "#ff4e43",
	    "borderRadius": 2
	  },
	  "song": {
	    "color": "#ffffff"
	  },
	  "timer": {
	    "color": "#ffffff"
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	var globalEvent = weex.requireModule('globalEvent');

	var musicService = __webpack_require__(12);
	var MusicLyrics = __webpack_require__(13);
	var wxpre = weex.requireModule('wxpre');

	exports.default = {
	  data: function data() {
	    return {
	      currentIndex: 0,
	      currentPage: 1,
	      capacity: 30,
	      currentUrl: "",
	      musicList: [],
	      musicName: "",

	      dprogress: 0.0,
	      dwnprogress: 0.0,
	      timeStr: "00:00/00:00",
	      latestSong: ""

	    };
	  },

	  methods: {
	    play: function play() {
	      var self = this;
	      self.currentIndex = 1;
	      self.currentPage = 1;
	      this.loadPage();
	    },
	    loadPage: function loadPage() {
	      var _this = this;

	      var self = this;
	      musicService.fetchMusicList("摇滚", self.currentPage, self.capacity, function (data) {
	        self.musicList = data;

	        if (self.musicList.length > 0) {

	          self.loadMusic(self.musicList[self.currentIndex]);
	        } else {
	          self.currentIndex = 0;
	          self.currentPage = 1;
	          setTimeout(function () {
	            _this.loadPage();
	          }, 6000);
	        }
	      });
	    },
	    loadMusic: function loadMusic(musicInfo) {
	      var self = this;
	      MusicLyrics.reset();
	      musicService.getMusicInfo(musicInfo, function (json) {
	        if (json.code == 0) {
	          // self.currentUrl = json.data.play_url;
	          var eventUrl = "music://play.url?url=" + json.data.play_url;

	          wxpre.execEvent(eventUrl, function (result) {
	            // modal.toast({message:JSON.stringify(result)});
	          });
	          self.musicName = json.data.song_name ? json.data.song_name : json.data.audio_name ? json.data.audio_name : "未知";
	          MusicLyrics.setLyrics(json.data.lyrics);
	        } else {
	          self.currentIndex = 0;
	          self.currentPage = 1;
	          setTimeout(function () {
	            self.loadPage();
	          }, 6000);
	        }
	      });
	    },
	    lastMusic: function lastMusic() {
	      this.currentIndex--;
	      if (this.currentIndex < 0) {
	        this.currentIndex = 0;
	        this.currentPage--;
	        if (this.currentPage < 1) this.currentPage = 1;
	        this.loadPage();
	      } else {
	        this.loadMusic(this.musicList[this.currentIndex]);
	      }
	    },
	    nextMusic: function nextMusic() {
	      this.currentIndex++;
	      if (this.currentIndex >= this.musicList.length) {
	        this.currentIndex = 0;
	        this.currentPage++;
	        this.loadPage();
	      } else {
	        this.loadMusic(this.musicList[this.currentIndex]);
	      }
	    }
	  },
	  mounted: function mounted() {
	    // 获取音乐权限
	    wxpre.execEvent("authority://request.music", function (result) {
	      // modal.toast({message:JSON.stringify(result)});
	    });
	    var self = this;
	    self.dprogress = 0;
	    self.dwnprogress = 0;
	    globalEvent.addEventListener("update", function (json) {
	      self.dprogress = json.progress * 650.0;
	      self.dwnprogress = json.downloadProgress * 650.0;
	      self.timeStr = json.timeStr;
	      if (json.progress > 0) {
	        self.latestSong = MusicLyrics.getLyrics(json.timeStr);
	      }
	    });
	    globalEvent.addEventListener("playStop", function (json) {
	      //do work or refresh 
	      self.nextMusic();
	    });
	    globalEvent.addEventListener("play", function (json) {
	      //do work or refresh 
	      self.play();
	    });
	    globalEvent.addEventListener("previous", function (json) {
	      //do work or refresh 
	      self.lastMusic();
	    });
	    globalEvent.addEventListener("next", function (json) {
	      //do work or refresh 
	      self.nextMusic();
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    globalEvent.removeEventListener('update');
	    globalEvent.removeEventListener('playStop');
	    globalEvent.removeEventListener('play');
	    globalEvent.removeEventListener('previous');
	    globalEvent.removeEventListener('next');
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var wxpre = weex.requireModule('wxpre');

	var listApi = "http://songsearch.kugou.com/song_search_v2";
	var listApiParams = "&platform=WebFilter";

	var musicInfoApi = "http://www.kugou.com/yy/index.php?r=play/getdata&hash=42243F9FC148147063E9F0C85F733A5D&album_id=978066";

	var buildPath = function buildPath(key, page, capacity) {
	  return listApi + "?keyword=" + key + "&page=" + page + "&pagesize=" + capacity + listApiParams;
	};
	module.exports = {
	  fetchMusicList: function fetchMusicList(key, page, capacity, callback) {
	    wxpre.restGetJson(buildPath(key, page, capacity), function (data) {
	      var json = JSON.parse(data);

	      if (json && json.error_code == 0) {
	        callback(json.data.lists);
	      } else {
	        callback([]);
	      }
	    });
	  },
	  getMusicInfo: function getMusicInfo(musicInfo, callback) {
	    stream.fetch({
	      method: 'GET',
	      type: 'text',
	      url: musicInfoApi + "&hash=" + musicInfo.FileHash + "&album_id=" + musicInfo.AlbumID
	    }, function (res) {
	      if (res.ok) {
	        var json = JSON.parse(res.data);
	        if (json && json.err_code == 0) {
	          callback({ code: 0, data: json.data });
	        } else {
	          callback({ code: 1 });
	        }
	      } else {
	        callback({ code: 1 });
	      }
	    });
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	var lyrics = [];
	var latest = "";
	module.exports = {
		setLyrics: function setLyrics(lstr) {
			lyrics = lstr.split("\r\n");
		},
		reset: function reset() {
			latest = "";
		},
		getLyrics: function getLyrics(timeStr) {
			if (lyrics.length > 0 && lyrics[0].indexOf("[" + timeStr.substring(0, 5)) == 0) {
				latest = lyrics.shift();
				latest = latest.substring(latest.indexOf("]") + 1, latest.length);
			}
			return latest;
		}

	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }, [_c('text', {
	    staticClass: ["song"],
	    staticStyle: {
	      textAlign: "center"
	    },
	    attrs: {
	      "value": _vm.latestSong
	    }
	  })]), _c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('image', {
	    staticClass: ["function"],
	    attrs: {
	      "src": "https://raw.githubusercontent.com/jsenjobs/Res/master/cityman/icon/last.png"
	    },
	    on: {
	      "click": _vm.lastMusic
	    }
	  }), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })]), _c('image', {
	    staticClass: ["contain"],
	    attrs: {
	      "src": "https://raw.githubusercontent.com/jsenjobs/Res/master/cityman/icon/play.png"
	    },
	    on: {
	      "click": _vm.play
	    }
	  }), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('image', {
	    staticClass: ["function"],
	    attrs: {
	      "src": "https://raw.githubusercontent.com/jsenjobs/Res/master/cityman/icon/next.png"
	    },
	    on: {
	      "click": _vm.nextMusic
	    }
	  }), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })])]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('text', {
	    staticClass: ["tip"]
	  }, [_vm._v(_vm._s(_vm.musicName))]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })]), _vm._m(0), _c('div', {
	    staticStyle: {
	      flex: "2"
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      marginRight: "60px"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('text', {
	    staticClass: ["timer"],
	    attrs: {
	      "value": _vm.timeStr
	    }
	  })]), _c('div', {
	    staticClass: ["progress"]
	  }, [_c('div', {
	    staticClass: ["progress_a"],
	    style: {
	      width: _vm.dwnprogress + 'px'
	    }
	  }), _c('div', {
	    staticClass: ["progress_b"],
	    style: {
	      width: _vm.dprogress + 'px'
	    }
	  })])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      flexDirection: "row"
	    }
	  }, [_c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  }), _c('text', {
	    staticClass: ["tip"]
	  }, [_vm._v("随心放")]), _c('div', {
	    staticStyle: {
	      flex: "1"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);
