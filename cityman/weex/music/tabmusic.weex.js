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
	var __vue_template__ = __webpack_require__(13)
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

	var modal = weex.requireModule('modal');
	var musicService = __webpack_require__(12);

	exports.default = {
	  data: function data() {
	    return {
	      currentIndex: 0,
	      currentPage: 1,
	      capacity: 30,
	      currentUrl: "",
	      musicList: [],
	      musicName: ""
	    };
	  },

	  methods: {
	    play: function play() {
	      var self = this;
	      self.currentIndex = 0;
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
	          currentIndex = 0;
	          currentPage = 1;
	          setTimeout(function () {
	            _this.loadPage();
	          }, 6000);
	        }
	      });
	    },
	    loadMusic: function loadMusic(musicInfo) {
	      var self = this;
	      musicService.getMusicInfo(musicInfo, function (json) {
	        if (json.code == 0) {
	          self.currentUrl = json.data.play_url;
	          self.musicName = json.data.song_name ? json.data.song_name : json.data.audio_name ? json.data.audio_name : "未知";
	          modal.toast({ message: self.musicName });
	        } else {
	          self.currentIndex = 0;
	          self.currentPage = 1;
	          setTimeout(function () {
	            self.loadPage();
	          }, 6000);
	        }
	      });
	    },
	    onstart: function onstart(event) {},
	    onpause: function onpause(event) {},
	    onfinish: function onfinish(event) {
	      this.nextMusic();
	    },
	    onfail: function onfail(event) {},

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
	var listApiParams = "platform=WebFilter";

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

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('video', {
	    staticClass: ["video"],
	    attrs: {
	      "src": _vm.currentUrl,
	      "autoplay": "",
	      "controls": ""
	    },
	    on: {
	      "start": _vm.onstart,
	      "pause": _vm.onpause,
	      "finish": _vm.onfinish,
	      "fail": _vm.onfail
	    }
	  }), _c('div', {
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
	  })])], 1)
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