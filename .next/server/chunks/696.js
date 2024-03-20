"use strict";exports.id=696,exports.ids=[696],exports.modules={1696:(e,t,n)=>{n.r(t),function(){var e=function(){this.init()};e.prototype={init:function(){var e=this||t;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var n=this||t;if(e=parseFloat(e),n.ctx||s(),void 0!==e&&e>=0&&e<=1){if(n._volume=e,n._muted)return n;n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e,t.ctx.currentTime);for(var o=0;o<n._howls.length;o++)if(!n._howls[o]._webAudio)for(var r=n._howls[o]._getSoundIds(),i=0;i<r.length;i++){var a=n._howls[o]._soundById(r[i]);a&&a._node&&(a._node.volume=a._volume*e)}return n}return n._volume},mute:function(e){var n=this||t;n.ctx||s(),n._muted=e,n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e?0:n._volume,t.ctx.currentTime);for(var o=0;o<n._howls.length;o++)if(!n._howls[o]._webAudio)for(var r=n._howls[o]._getSoundIds(),i=0;i<r.length;i++){var a=n._howls[o]._soundById(r[i]);a&&a._node&&(a._node.muted=!!e||a._muted)}return n},stop:function(){for(var e=this||t,n=0;n<e._howls.length;n++)e._howls[n].stop();return e},unload:function(){for(var e=this||t,n=e._howls.length-1;n>=0;n--)e._howls[n].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,s()),e},codecs:function(e){return(this||t)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||t;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio){if("undefined"!=typeof Audio)try{var n=new Audio;void 0===n.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(t){e.noAudio=!0}else e.noAudio=!0}try{var n=new Audio;n.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||t,n=null;try{n="undefined"!=typeof Audio?new Audio:null}catch(t){return e}if(!n||"function"!=typeof n.canPlayType)return e;var o=n.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",i=r.match(/OPR\/([0-6].)/g),a=i&&33>parseInt(i[0].split("/")[1],10),u=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),d=r.match(/Version\/(.*?) /),s=u&&d&&15>parseInt(d[1],10);return e._codecs={mp3:!(a||!o&&!n.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!o,opus:!!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(n.canPlayType('audio/wav; codecs="1"')||n.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!n.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!n.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(n.canPlayType("audio/x-m4b;")||n.canPlayType("audio/m4b;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(n.canPlayType("audio/x-mp4;")||n.canPlayType("audio/mp4;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(s||!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(s||!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(n.canPlayType("audio/x-flac;")||n.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||t;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var n=function(t){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch(t){e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var i=e._howls[r]._getSoundIds(),a=0;a<i.length;a++){var u=e._howls[r]._soundById(i[a]);u&&u._node&&!u._node._unlocked&&(u._node._unlocked=!0,u._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),void 0===d.start?d.noteOn(0):d.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",n,!0),document.removeEventListener("touchend",n,!0),document.removeEventListener("click",n,!0),document.removeEventListener("keydown",n,!0);for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("unlock")}};return document.addEventListener("touchstart",n,!0),document.addEventListener("touchend",n,!0),document.addEventListener("click",n,!0),document.addEventListener("keydown",n,!0),e}},_obtainHtml5Audio:function(){var e=this||t;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var n=(new Audio).play();return n&&"undefined"!=typeof Promise&&(n instanceof Promise||"function"==typeof n.then)&&n.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var n=this||t;return e._unlocked&&n._html5AudioPool.push(e),n},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&t.usingWebAudio){for(var n=0;n<e._howls.length;n++)if(e._howls[n]._webAudio){for(var o=0;o<e._howls[n]._sounds.length;o++)if(!e._howls[n]._sounds[o]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var t=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(t,t)}},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&t.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var t=new e,n=function(e){if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");this.init(e)};n.prototype={init:function(e){var n=this;return t.ctx||s(),n._autoplay=e.autoplay||!1,n._format="string"!=typeof e.format?e.format:[e.format],n._html5=e.html5||!1,n._muted=e.mute||!1,n._loop=e.loop||!1,n._pool=e.pool||5,n._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,n._rate=e.rate||1,n._sprite=e.sprite||{},n._src="string"!=typeof e.src?e.src:[e.src],n._volume=void 0!==e.volume?e.volume:1,n._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},n._duration=0,n._state="unloaded",n._sounds=[],n._endTimers={},n._queue=[],n._playLock=!1,n._onend=e.onend?[{fn:e.onend}]:[],n._onfade=e.onfade?[{fn:e.onfade}]:[],n._onload=e.onload?[{fn:e.onload}]:[],n._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],n._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],n._onpause=e.onpause?[{fn:e.onpause}]:[],n._onplay=e.onplay?[{fn:e.onplay}]:[],n._onstop=e.onstop?[{fn:e.onstop}]:[],n._onmute=e.onmute?[{fn:e.onmute}]:[],n._onvolume=e.onvolume?[{fn:e.onvolume}]:[],n._onrate=e.onrate?[{fn:e.onrate}]:[],n._onseek=e.onseek?[{fn:e.onseek}]:[],n._onunlock=e.onunlock?[{fn:e.onunlock}]:[],n._onresume=[],n._webAudio=t.usingWebAudio&&!n._html5,void 0!==t.ctx&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(n),n._autoplay&&n._queue.push({event:"play",action:function(){n.play()}}),n._preload&&"none"!==n._preload&&n.load(),n},load:function(){var e,n,r=null;if(t.noAudio)return void this._emit("loaderror",null,"No audio support.");"string"==typeof this._src&&(this._src=[this._src]);for(var a=0;a<this._src.length;a++){if(this._format&&this._format[a])e=this._format[a];else{if("string"!=typeof(n=this._src[a])){this._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(e=/^data:audio\/([^;,]+);/i.exec(n))||(e=/\.([^.]+)$/.exec(n.split("?",1)[0])),e&&(e=e[1].toLowerCase())}if(e||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),e&&t.codecs(e)){r=this._src[a];break}}return r?(this._src=r,this._state="loading","https:"===window.location.protocol&&"http:"===r.slice(0,5)&&(this._html5=!0,this._webAudio=!1),new o(this),this._webAudio&&i(this),this):void this._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,n){var o=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===o._state&&!o._sprite[e])return null;if(void 0===e&&(e="__default",!o._playLock)){for(var i=0,a=0;a<o._sounds.length;a++)o._sounds[a]._paused&&!o._sounds[a]._ended&&(i++,r=o._sounds[a]._id);1===i?e=null:r=null}}var u=r?o._soundById(r):o._inactiveSound();if(!u)return null;if(r&&!e&&(e=u._sprite||"__default"),"loaded"!==o._state){u._sprite=e,u._ended=!1;var d=u._id;return o._queue.push({event:"play",action:function(){o.play(d)}}),d}if(r&&!u._paused)return n||o._loadQueue("play"),u._id;o._webAudio&&t._autoResume();var s=Math.max(0,u._seek>0?u._seek:o._sprite[e][0]/1e3),_=Math.max(0,(o._sprite[e][0]+o._sprite[e][1])/1e3-s),l=1e3*_/Math.abs(u._rate),c=o._sprite[e][0]/1e3,f=(o._sprite[e][0]+o._sprite[e][1])/1e3;u._sprite=e,u._ended=!1;var h=function(){u._paused=!1,u._seek=s,u._start=c,u._stop=f,u._loop=!(!u._loop&&!o._sprite[e][2])};if(s>=f)return void o._ended(u);var p=u._node;if(o._webAudio){var m=function(){o._playLock=!1,h(),o._refreshBuffer(u);var e=u._muted||o._muted?0:u._volume;p.gain.setValueAtTime(e,t.ctx.currentTime),u._playStart=t.ctx.currentTime,void 0===p.bufferSource.start?u._loop?p.bufferSource.noteGrainOn(0,s,86400):p.bufferSource.noteGrainOn(0,s,_):u._loop?p.bufferSource.start(0,s,86400):p.bufferSource.start(0,s,_),l!==1/0&&(o._endTimers[u._id]=setTimeout(o._ended.bind(o,u),l)),n||setTimeout(function(){o._emit("play",u._id),o._loadQueue()},0)};"running"===t.state&&"interrupted"!==t.ctx.state?m():(o._playLock=!0,o.once("resume",m),o._clearTimer(u._id))}else{var v=function(){p.currentTime=s,p.muted=u._muted||o._muted||t._muted||p.muted,p.volume=u._volume*t.volume(),p.playbackRate=u._rate;try{var r=p.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(o._playLock=!0,h(),r.then(function(){o._playLock=!1,p._unlocked=!0,n?o._loadQueue():o._emit("play",u._id)}).catch(function(){o._playLock=!1,o._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),u._ended=!0,u._paused=!0})):n||(o._playLock=!1,h(),o._emit("play",u._id)),p.playbackRate=u._rate,p.paused)return void o._emit("playerror",u._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||u._loop?o._endTimers[u._id]=setTimeout(o._ended.bind(o,u),l):(o._endTimers[u._id]=function(){o._ended(u),p.removeEventListener("ended",o._endTimers[u._id],!1)},p.addEventListener("ended",o._endTimers[u._id],!1))}catch(e){o._emit("playerror",u._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===p.src&&(p.src=o._src,p.load());var y=window&&window.ejecta||!p.readyState&&t._navigator.isCocoonJS;if(p.readyState>=3||y)v();else{o._playLock=!0,o._state="loading";var g=function(){o._state="loaded",v(),p.removeEventListener(t._canPlayEvent,g,!1)};p.addEventListener(t._canPlayEvent,g,!1),o._clearTimer(u._id)}}return u._id},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var r=t._soundById(n[o]);if(r&&!r._paused&&(r._seek=t.seek(n[o]),r._rateSeek=0,r._paused=!0,t._stopFade(n[o]),r._node)){if(t._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),t._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause()}arguments[1]||t._emit("pause",r?r._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),r=0;r<o.length;r++){n._clearTimer(o[r]);var i=n._soundById(o[r]);i&&(i._seek=i._start||0,i._rateSeek=0,i._paused=!0,i._ended=!0,n._stopFade(o[r]),i._node&&(n._webAudio?i._node.bufferSource&&(void 0===i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),n._cleanBuffer(i._node)):isNaN(i._node.duration)&&i._node.duration!==1/0||(i._node.currentTime=i._start||0,i._node.pause(),i._node.duration===1/0&&n._clearSound(i._node))),t||n._emit("stop",i._id))}return n},mute:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"mute",action:function(){o.mute(e,n)}}),o;if(void 0===n){if("boolean"!=typeof e)return o._muted;o._muted=e}for(var r=o._getSoundIds(n),i=0;i<r.length;i++){var a=o._soundById(r[i]);a&&(a._muted=e,a._interval&&o._stopFade(a._id),o._webAudio&&a._node?a._node.gain.setValueAtTime(e?0:a._volume,t.ctx.currentTime):a._node&&(a._node.muted=!!t._muted||e),o._emit("mute",a._id))}return o},volume:function(){var e,n,o,r=this,i=arguments;if(0===i.length)return r._volume;if(1===i.length||2===i.length&&void 0===i[1]?r._getSoundIds().indexOf(i[0])>=0?o=parseInt(i[0],10):n=parseFloat(i[0]):i.length>=2&&(n=parseFloat(i[0]),o=parseInt(i[1],10)),!(void 0!==n&&n>=0&&n<=1))return(e=o?r._soundById(o):r._sounds[0])?e._volume:0;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,i)}}),r;void 0===o&&(r._volume=n),o=r._getSoundIds(o);for(var a=0;a<o.length;a++)(e=r._soundById(o[a]))&&(e._volume=n,i[2]||r._stopFade(o[a]),r._webAudio&&e._node&&!e._muted?e._node.gain.setValueAtTime(n,t.ctx.currentTime):e._node&&!e._muted&&(e._node.volume=n*t.volume()),r._emit("volume",e._id));return r},fade:function(e,n,o,r){var i=this;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"fade",action:function(){i.fade(e,n,o,r)}}),i;e=Math.min(Math.max(0,parseFloat(e)),1),n=Math.min(Math.max(0,parseFloat(n)),1),o=parseFloat(o),i.volume(e,r);for(var a=i._getSoundIds(r),u=0;u<a.length;u++){var d=i._soundById(a[u]);if(d){if(r||i._stopFade(a[u]),i._webAudio&&!d._muted){var s=t.ctx.currentTime,_=s+o/1e3;d._volume=e,d._node.gain.setValueAtTime(e,s),d._node.gain.linearRampToValueAtTime(n,_)}i._startFadeInterval(d,e,n,o,a[u],void 0===r)}}return i},_startFadeInterval:function(e,t,n,o,r,i){var a=this,u=t,d=n-t,s=Math.abs(d/.01),_=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var r=(Date.now()-_)/o;_=Date.now(),u+=d*r,u=Math.round(100*u)/100,u=d<0?Math.max(n,u):Math.min(n,u),a._webAudio?e._volume=u:a.volume(u,e._id,!0),i&&(a._volume=u),(n<t&&u<=n||n>t&&u>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))},Math.max(4,s>0?o/s:o))},_stopFade:function(e){var n=this._soundById(e);return n&&n._interval&&(this._webAudio&&n._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(n._interval),n._interval=null,this.volume(n._fadeTo,e),n._fadeTo=null,this._emit("fade",e)),this},loop:function(){var e,t,n,o=arguments;if(0===o.length)return this._loop;if(1===o.length){if("boolean"!=typeof o[0])return!!(n=this._soundById(parseInt(o[0],10)))&&n._loop;e=o[0],this._loop=e}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var r=this._getSoundIds(t),i=0;i<r.length;i++)(n=this._soundById(r[i]))&&(n._loop=e,this._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop,this.playing(r[i])&&(this.pause(r[i],!0),this.play(r[i],!0)))));return this},rate:function(){var e,n,o,r=this,i=arguments;if(0===i.length?o=r._sounds[0]._id:1===i.length?r._getSoundIds().indexOf(i[0])>=0?o=parseInt(i[0],10):n=parseFloat(i[0]):2===i.length&&(n=parseFloat(i[0]),o=parseInt(i[1],10)),"number"!=typeof n)return(e=r._soundById(o))?e._rate:r._rate;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,i)}}),r;void 0===o&&(r._rate=n),o=r._getSoundIds(o);for(var a=0;a<o.length;a++)if(e=r._soundById(o[a])){r.playing(o[a])&&(e._rateSeek=r.seek(o[a]),e._playStart=r._webAudio?t.ctx.currentTime:e._playStart),e._rate=n,r._webAudio&&e._node&&e._node.bufferSource?e._node.bufferSource.playbackRate.setValueAtTime(n,t.ctx.currentTime):e._node&&(e._node.playbackRate=n);var u=r.seek(o[a]),d=1e3*((r._sprite[e._sprite][0]+r._sprite[e._sprite][1])/1e3-u)/Math.abs(e._rate);!r._endTimers[o[a]]&&e._paused||(r._clearTimer(o[a]),r._endTimers[o[a]]=setTimeout(r._ended.bind(r,e),d)),r._emit("rate",e._id)}return r},seek:function(){var e,n,o=this,r=arguments;if(0===r.length?o._sounds.length&&(n=o._sounds[0]._id):1===r.length?o._getSoundIds().indexOf(r[0])>=0?n=parseInt(r[0],10):o._sounds.length&&(n=o._sounds[0]._id,e=parseFloat(r[0])):2===r.length&&(e=parseFloat(r[0]),n=parseInt(r[1],10)),void 0===n)return 0;if("number"==typeof e&&("loaded"!==o._state||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,r)}}),o;var i=o._soundById(n);if(i){if(!("number"==typeof e&&e>=0)){if(o._webAudio){var a=o.playing(n)?t.ctx.currentTime-i._playStart:0,u=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(u+a*Math.abs(i._rate))}return i._node.currentTime}var d=o.playing(n);d&&o.pause(n,!0),i._seek=e,i._ended=!1,o._clearTimer(n),o._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var s=function(){d&&o.play(n,!0),o._emit("seek",n)};if(d&&!o._webAudio){var _=function(){o._playLock?setTimeout(_,0):s()};setTimeout(_,0)}else s()}return o},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0;return!1},duration:function(e){var t=this._duration,n=this._soundById(e);return n&&(t=this._sprite[n._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,n=e._sounds,o=0;o<n.length;o++)n[o]._paused||e.stop(n[o]._id),e._webAudio||(e._clearSound(n[o]._node),n[o]._node.removeEventListener("error",n[o]._errorFn,!1),n[o]._node.removeEventListener(t._canPlayEvent,n[o]._loadFn,!1),n[o]._node.removeEventListener("ended",n[o]._endFn,!1),t._releaseHtml5Audio(n[o]._node)),delete n[o]._node,e._clearTimer(n[o]._id);var i=t._howls.indexOf(e);i>=0&&t._howls.splice(i,1);var a=!0;for(o=0;o<t._howls.length;o++)if(t._howls[o]._src===e._src||e._src.indexOf(t._howls[o]._src)>=0){a=!1;break}return r&&a&&delete r[e._src],t.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var r=this["_on"+e];return"function"==typeof t&&r.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),this},off:function(e,t,n){var o=this["_on"+e],r=0;if("number"==typeof t&&(n=t,t=null),t||n)for(r=0;r<o.length;r++){var i=n===o[r].id;if(t===o[r].fn&&i||!t&&i){o.splice(r,1);break}}else if(e)this["_on"+e]=[];else{var a=Object.keys(this);for(r=0;r<a.length;r++)0===a[r].indexOf("_on")&&Array.isArray(this[a[r]])&&(this[a[r]]=[])}return this},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var o=this["_on"+e],r=o.length-1;r>=0;r--)o[r].id&&o[r].id!==t&&"load"!==e||(setTimeout((function(e){e.call(this,t,n)}).bind(this,o[r].fn),0),o[r].once&&this.off(e,o[r].fn,o[r].id));return this._loadQueue(e),this},_loadQueue:function(e){if(this._queue.length>0){var t=this._queue[0];t.event===e&&(this._queue.shift(),this._loadQueue()),e||t.action()}return this},_ended:function(e){var n=e._sprite;if(!this._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(this._ended.bind(this,e),100),this;var o=!(!e._loop&&!this._sprite[n][2]);if(this._emit("end",e._id),!this._webAudio&&o&&this.stop(e._id,!0).play(e._id),this._webAudio&&o){this._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=t.ctx.currentTime;var r=1e3*(e._stop-e._start)/Math.abs(e._rate);this._endTimers[e._id]=setTimeout(this._ended.bind(this,e),r)}return this._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,this._clearTimer(e._id),this._cleanBuffer(e._node),t._autoSuspend()),this._webAudio||o||this.stop(e._id,!0),this},_clearTimer:function(e){if(this._endTimers[e]){if("function"!=typeof this._endTimers[e])clearTimeout(this._endTimers[e]);else{var t=this._soundById(e);t&&t._node&&t._node.removeEventListener("ended",this._endTimers[e],!1)}delete this._endTimers[e]}return this},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){this._drain();for(var e=0;e<this._sounds.length;e++)if(this._sounds[e]._ended)return this._sounds[e].reset();return new o(this)},_drain:function(){var e=this._pool,t=0,n=0;if(!(this._sounds.length<e)){for(n=0;n<this._sounds.length;n++)this._sounds[n]._ended&&t++;for(n=this._sounds.length-1;n>=0;n--){if(t<=e)return;this._sounds[n]._ended&&(this._webAudio&&this._sounds[n]._node&&this._sounds[n]._node.disconnect(0),this._sounds.splice(n,1),t--)}}},_getSoundIds:function(e){if(void 0===e){for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=t.ctx.createBufferSource(),e._node.bufferSource.buffer=r[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,t.ctx.currentTime),this},_cleanBuffer:function(e){var n=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(t._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=t._scratchBuffer}catch(e){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var o=function(e){this._parent=e,this.init()};o.prototype={init:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++t._counter,e._sounds.push(this),this.create(),this},create:function(){var e=this._parent,n=t._muted||this._muted||this._parent._muted?0:this._volume;return e._webAudio?(this._node=void 0===t.ctx.createGain?t.ctx.createGainNode():t.ctx.createGain(),this._node.gain.setValueAtTime(n,t.ctx.currentTime),this._node.paused=!0,this._node.connect(t.masterGain)):t.noAudio||(this._node=t._obtainHtml5Audio(),this._errorFn=this._errorListener.bind(this),this._node.addEventListener("error",this._errorFn,!1),this._loadFn=this._loadListener.bind(this),this._node.addEventListener(t._canPlayEvent,this._loadFn,!1),this._endFn=this._endListener.bind(this),this._node.addEventListener("ended",this._endFn,!1),this._node.src=e._src,this._node.preload=!0===e._preload?"auto":e._preload,this._node.volume=n*t.volume(),this._node.load()),this},reset:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._rateSeek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++t._counter,this},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(t._canPlayEvent,this._loadFn,!1)},_endListener:function(){var e=this._parent;e._duration===1/0&&(e._duration=Math.ceil(10*this._node.duration)/10,e._sprite.__default[1]===1/0&&(e._sprite.__default[1]=1e3*e._duration),e._ended(this)),this._node.removeEventListener("ended",this._endFn,!1)}};var r={},i=function(e){var t=e._src;if(r[t])return e._duration=r[t].duration,void d(e);if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),i=0;i<n.length;++i)o[i]=n.charCodeAt(i);u(o.buffer,e)}else{var s=new XMLHttpRequest;s.open(e._xhr.method,t,!0),s.withCredentials=e._xhr.withCredentials,s.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(t){s.setRequestHeader(t,e._xhr.headers[t])}),s.onload=function(){var t=(s.status+"")[0];if("0"!==t&&"2"!==t&&"3"!==t)return void e._emit("loaderror",null,"Failed loading audio file with status: "+s.status+".");u(s.response,e)},s.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[t],e.load())},a(s)}},a=function(e){try{e.send()}catch(t){e.onerror()}},u=function(e,n){var o=function(){n._emit("loaderror",null,"Decoding audio data failed.")},i=function(e){e&&n._sounds.length>0?(r[n._src]=e,d(n,e)):o()};"undefined"!=typeof Promise&&1===t.ctx.decodeAudioData.length?t.ctx.decodeAudioData(e).then(i).catch(o):t.ctx.decodeAudioData(e,i,o)},d=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},s=function(){if(t.usingWebAudio){try{"undefined"!=typeof AudioContext?t.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch(e){t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),n=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),o=n?parseInt(n[1],10):null;if(e&&o&&o<9){var r=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!r&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=void 0===t.ctx.createGain?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:t,Howl:n}}),"undefined"!=typeof exports&&(exports.Howler=t,exports.Howl=n),"undefined"!=typeof global?(global.HowlerGlobal=e,global.Howler=t,global.Howl=n,global.Sound=o):"undefined"!=typeof window&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=o)}()}};