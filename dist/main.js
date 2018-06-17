!function(e){function t(t){for(var n,a,o=t[0],i=t[1],l=t[2],s=0,c=[];s<o.length;s++)a=o[s],O[a]&&c.push(O[a][0]),O[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(M&&M(t);c.length;)c.shift()();return B.push.apply(B,l||[]),r()}function r(){for(var e,t=0;t<B.length;t++){for(var r=B[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==O[o]&&(n=!1)}n&&(B.splice(t--,1),e=P(P.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!v[e]||!k[e])return;for(var r in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(h[r]=t[r]);0==--y&&0===g&&C()}(e,t),n&&n(e,t)};var a,o=!0,i="8ca505cdc0ae849968b4",l=1e4,s={},c=[],u=[];var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var _,h,m,y=0,g=0,b={},k={},v={};function E(e){return+e+""===e?+e:e}function L(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=l,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,a=P.p+""+i+".hot-update.json";n.open("GET",a,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+a+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;k={},b={},v=e.c,m=e.h,f("prepare");var t=new Promise(function(e,t){_={resolve:e,reject:t}});for(var r in h={},O)w(r);return"prepare"===p&&0===g&&0===y&&C(),t});var t}function w(e){v[e]?(k[e]=!0,y++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=P.p+""+e+"."+i+".hot-update.js",t.appendChild(r)}(e)):b[e]=!0}function C(){f("ready");var e=_;if(_=null,e)if(o)Promise.resolve().then(function(){return x(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&t.push(E(r));e.resolve(t)}}function x(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,n,a,o,l;function u(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var a=n.pop(),i=a.id,l=a.chain;if((o=j[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:l,moduleId:i};for(var s=0;s<o.parents.length;s++){var c=o.parents[s],u=j[c];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:l.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[i]?(r[c]||(r[c]=[]),d(r[c],[i])):(delete r[c],t.push(c),n.push({chain:l.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var _={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+L.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var L;l=E(k);var w=!1,C=!1,x=!1,B="";switch((L=h[k]?u(l):{type:"disposed",moduleId:k}).chain&&(B="\nUpdate propagation: "+L.chain.join(" -> ")),L.type){case"self-declined":t.onDeclined&&t.onDeclined(L),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+L.moduleId+B));break;case"declined":t.onDeclined&&t.onDeclined(L),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+L.moduleId+" in "+L.parentId+B));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(L),t.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+B));break;case"accepted":t.onAccepted&&t.onAccepted(L),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(L),x=!0;break;default:throw new Error("Unexception type "+L.type)}if(w)return f("abort"),Promise.reject(w);if(C)for(l in g[l]=h[l],d(y,L.outdatedModules),L.outdatedDependencies)Object.prototype.hasOwnProperty.call(L.outdatedDependencies,l)&&(_[l]||(_[l]=[]),d(_[l],L.outdatedDependencies[l]));x&&(d(y,[L.moduleId]),g[l]=b)}var D,A=[];for(n=0;n<y.length;n++)l=y[n],j[l]&&j[l].hot._selfAccepted&&A.push({module:l,errorHandler:j[l].hot._selfAccepted});f("dispose"),Object.keys(v).forEach(function(e){!1===v[e]&&function(e){delete O[e]}(e)});for(var H,M,R=y.slice();R.length>0;)if(l=R.pop(),o=j[l]){var I={},q=o.hot._disposeHandlers;for(a=0;a<q.length;a++)(r=q[a])(I);for(s[l]=I,o.hot.active=!1,delete j[l],delete _[l],a=0;a<o.children.length;a++){var U=j[o.children[a]];U&&((D=U.parents.indexOf(l))>=0&&U.parents.splice(D,1))}}for(l in _)if(Object.prototype.hasOwnProperty.call(_,l)&&(o=j[l]))for(M=_[l],a=0;a<M.length;a++)H=M[a],(D=o.children.indexOf(H))>=0&&o.children.splice(D,1);for(l in f("apply"),i=m,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var N=null;for(l in _)if(Object.prototype.hasOwnProperty.call(_,l)&&(o=j[l])){M=_[l];var F=[];for(n=0;n<M.length;n++)if(H=M[n],r=o.hot._acceptedDependencies[H]){if(-1!==F.indexOf(r))continue;F.push(r)}for(n=0;n<F.length;n++){r=F[n];try{r(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:M[n],error:e}),t.ignoreErrored||N||(N=e)}}}for(n=0;n<A.length;n++){var T=A[n];l=T.module,c=[l];try{P(l)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),t.ignoreErrored||N||(N=r),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise(function(e){e(y)}))}var j={},O={1:0},B=[];function P(t){if(j[t])return j[t].exports;var r=j[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:L,apply:x,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return a=void 0,t}(t),parents:(u=c,c=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=j[e];if(!t)return P;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(c=[e],a=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),P(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var o in P)Object.prototype.hasOwnProperty.call(P,o)&&"e"!==o&&Object.defineProperty(r,o,n(o));return r.e=function(e){return"ready"===p&&f("prepare"),g++,P.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||w(e),0===g&&0===y&&C())}},r}(t)),r.l=!0,r.exports}P.m=e,P.c=j,P.d=function(e,t,r){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(P.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)P.d(r,n,function(t){return e[t]}.bind(null,n));return r},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return i};var D=window.webpackJsonp=window.webpackJsonp||[],A=D.push.bind(D);D.push=t,D=D.slice();for(var H=0;H<D.length;H++)t(D[H]);var M=A;B.push([418,0]),r()}({107:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.Code=exports.Blog=exports.Words=exports.Photos=exports.F00px=exports.Instagram=exports.Flickr=exports.GitHub=exports.LinkedIn=exports.Email=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(2),_propTypes2=_interopRequireDefault(_propTypes),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(8).enterModule,enterModule&&enterModule(module);var Link=function(_React$Component){function Link(e,t,r){return _classCallCheck(this,Link),_possibleConstructorReturn(this,(Link.__proto__||Object.getPrototypeOf(Link)).call(this,e,t,r))}return _inherits(Link,_React$Component),_createClass(Link,[{key:"toString",value:function(){return this.props.href}},{key:"render",value:function(){return _react2.default.createElement("a",_extends({className:"link",target:"__blank"},this.props),this.props.text)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Link}(_react2.default.Component);Link.propTypes={href:_propTypes2.default.string.isRequired,text:_propTypes2.default.string.isRequired};var _default=Link;exports.default=_default;var Email=exports.Email=function(_Link){function Email(e,t,r){return _classCallCheck(this,Email),_possibleConstructorReturn(this,(Email.__proto__||Object.getPrototypeOf(Email)).call(this,e,t,r))}return _inherits(Email,_Link),_createClass(Email,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"mailto:randytarampi@randytarampi.ca",text:"Email"}}}]),Email}(Link),LinkedIn=exports.LinkedIn=function(_Link2){function LinkedIn(e,t,r){return _classCallCheck(this,LinkedIn),_possibleConstructorReturn(this,(LinkedIn.__proto__||Object.getPrototypeOf(LinkedIn)).call(this,e,t,r))}return _inherits(LinkedIn,_Link2),_createClass(LinkedIn,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"https://www.linkedin.com/in/randytarampi",text:"LinkedIn"}}}]),LinkedIn}(Link),GitHub=exports.GitHub=function(_Link3){function GitHub(e,t,r){return _classCallCheck(this,GitHub),_possibleConstructorReturn(this,(GitHub.__proto__||Object.getPrototypeOf(GitHub)).call(this,e,t,r))}return _inherits(GitHub,_Link3),_createClass(GitHub,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"https://github.com/randytarampi",text:"GitHub"}}}]),GitHub}(Link),Flickr=exports.Flickr=function(_Link4){function Flickr(e,t,r){return _classCallCheck(this,Flickr),_possibleConstructorReturn(this,(Flickr.__proto__||Object.getPrototypeOf(Flickr)).call(this,e,t,r))}return _inherits(Flickr,_Link4),_createClass(Flickr,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"https://www.flickr.com/randytarampi",text:"Flickr"}}}]),Flickr}(Link),Instagram=exports.Instagram=function(_Link5){function Instagram(e,t,r){return _classCallCheck(this,Instagram),_possibleConstructorReturn(this,(Instagram.__proto__||Object.getPrototypeOf(Instagram)).call(this,e,t,r))}return _inherits(Instagram,_Link5),_createClass(Instagram,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"https://www.instagram.com/randytarampi",text:"Instagram"}}}]),Instagram}(Link),F00px=exports.F00px=function(_Link6){function F00px(e,t,r){return _classCallCheck(this,F00px),_possibleConstructorReturn(this,(F00px.__proto__||Object.getPrototypeOf(F00px)).call(this,e,t,r))}return _inherits(F00px,_Link6),_createClass(F00px,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"https://www.500px.com/randytarampi",text:"500px"}}}]),F00px}(Link),Photos=exports.Photos=function(_Link7){function Photos(e,t,r){return _classCallCheck(this,Photos),_possibleConstructorReturn(this,(Photos.__proto__||Object.getPrototypeOf(Photos)).call(this,e,t,r))}return _inherits(Photos,_Link7),_createClass(Photos,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"http://photos.randytarampi.ca",text:"Photos"}}}]),Photos}(Link),Words=exports.Words=function(_Link8){function Words(e,t,r){return _classCallCheck(this,Words),_possibleConstructorReturn(this,(Words.__proto__||Object.getPrototypeOf(Words)).call(this,e,t,r))}return _inherits(Words,_Link8),_createClass(Words,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"http://words.randytarampi.ca",text:"Words"}}}]),Words}(Link),Blog=exports.Blog=function(_Link9){function Blog(e,t,r){return _classCallCheck(this,Blog),_possibleConstructorReturn(this,(Blog.__proto__||Object.getPrototypeOf(Blog)).call(this,e,t,r))}return _inherits(Blog,_Link9),_createClass(Blog,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"http://blog.randytarampi.ca",text:"Words"}}}]),Blog}(Link),Code=exports.Code=function(_Link10){function Code(e,t,r){return _classCallCheck(this,Code),_possibleConstructorReturn(this,(Code.__proto__||Object.getPrototypeOf(Code)).call(this,e,t,r))}return _inherits(Code,_Link10),_createClass(Code,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{href:"https://github.com/randytarampi",text:"Code"}}}]),Code}(Link),reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(8).default,leaveModule=__webpack_require__(8).leaveModule,reactHotLoader&&(reactHotLoader.register(Link,"Link","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Email,"Email","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(LinkedIn,"LinkedIn","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(GitHub,"GitHub","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Flickr,"Flickr","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Instagram,"Instagram","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(F00px,"F00px","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Photos,"Photos","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Words,"Words","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Blog,"Blog","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(Code,"Code","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),reactHotLoader.register(_default,"default","/Users/randytarampi/Development/randytarampi.github.io/public/components/link.jsx"),leaveModule(module))}).call(this,__webpack_require__(31)(module))},147:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=s(r(1)),o=r(55),i=s(r(75)),l=s(r(74));function s(e){return e&&e.__esModule?e:{default:e}}(n=r(8).enterModule)&&n(e);var c,u,d=function(){return a.default.createElement(i.default,{name:"intro"},a.default.createElement(o.Col,{className:"block__bear hide-on-med-and-down",l:5},a.default.createElement(l.default,null)),a.default.createElement(o.Col,{className:"block__text",l:7,m:8,offset:"m2"},a.default.createElement("h2",null,a.default.createElement("span",{className:"text"},"And the Bears?")),a.default.createElement("p",null,a.default.createElement("span",{className:"text"},"Well, there was this co-op student, and then I got tasked with internationalization... If you ",a.default.createElement("em",null,"really")," want to know, get in touch and I'll come up with some coherent and appropriate explanation, depending entirely on who you introduce yourself as.")),a.default.createElement("p",null,a.default.createElement("span",{className:"text"},"Try not to bonk them on the nose, they're not big fans of that."))))},p=d;t.default=p,c=r(8).default,u=r(8).leaveModule,c&&(c.register(d,"Bears","/Users/randytarampi/Development/randytarampi.github.io/public/views/bears.jsx"),c.register(p,"default","/Users/randytarampi/Development/randytarampi.github.io/public/views/bears.jsx"),u(e))}).call(this,r(31)(e))},148:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(r(75)),o=c(r(1)),i=r(55),l=r(74),s=c(r(107));function c(e){return e&&e.__esModule?e:{default:e}}(n=r(8).enterModule)&&n(e);var u,d,p=function(){return o.default.createElement(a.default,{name:"code"},o.default.createElement(i.Col,{className:"block__text",l:7,m:8,offset:"m2"},o.default.createElement("h2",null,o.default.createElement("span",{className:"text"},"If you insist on knowing more...")),o.default.createElement("p",null,o.default.createElement("span",{className:"text"},"I've built a couple things of note that you might be interested in if you're into software. ",o.default.createElement(s.default,{href:"https://github.com/randytarampi/randytarampi.github.io",text:"This page"})," you're currently looking at, ",o.default.createElement(s.default,{href:"https://github.com/randytarampi/me.photos",text:"that Photo blog"})," I was shilling earlier, a ",o.default.createElement(s.default,{href:"https://github.com/randytarampi/pseudolocalize.woof",text:"string pseudolocalization library"}),", and an ",o.default.createElement(s.default,{href:"https://github.com/randytarampi/pseudolocalize.woof",text:"image pseudolocalization library"}),"."))),o.default.createElement(i.Col,{className:"block__bear hide-on-med-and-down",l:5},o.default.createElement(l.DoubtBear,null)))},f=p;t.default=f,u=r(8).default,d=r(8).leaveModule,u&&(u.register(p,"Code","/Users/randytarampi/Development/randytarampi.github.io/public/views/code.jsx"),u.register(f,"default","/Users/randytarampi/Development/randytarampi.github.io/public/views/code.jsx"),d(e))}).call(this,r(31)(e))},149:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(2),_propTypes2=_interopRequireDefault(_propTypes),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(8).enterModule,enterModule&&enterModule(module);var Emoji=function(_React$Component){function Emoji(e,t,r){_classCallCheck(this,Emoji);var n=_possibleConstructorReturn(this,(Emoji.__proto__||Object.getPrototypeOf(Emoji)).call(this,e,t,r));return n.state={components:n.props.components||[]},n}return _inherits(Emoji,_React$Component),_createClass(Emoji,[{key:"toString",value:function(){return(this.components||[]).join("")}},{key:"render",value:function(){return _react2.default.createElement("span",null,this.toString())}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}},{key:"components",get:function(){return this.state.components},set:function(e){this.setState({components:e})}}]),Emoji}(_react2.default.Component);Emoji.propTypes={components:_propTypes2.default.array};var _default=Emoji,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(8).default,leaveModule=__webpack_require__(8).leaveModule,reactHotLoader&&(reactHotLoader.register(Emoji,"Emoji","/Users/randytarampi/Development/randytarampi.github.io/public/components/emoji.jsx"),reactHotLoader.register(_default,"default","/Users/randytarampi/Development/randytarampi.github.io/public/components/emoji.jsx"),leaveModule(module))}).call(this,__webpack_require__(31)(module))},152:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(r(1)),o=r(55),i=c(r(75)),l=r(74),s=r(107);function c(e){return e&&e.__esModule?e:{default:e}}(n=r(8).enterModule)&&n(e);var u,d,p=function(){return a.default.createElement(i.default,{name:"intro"},a.default.createElement(o.Col,{className:"block__bear",l:5,m:8,offset:"m2"},a.default.createElement(l.HelloBear,null)),a.default.createElement(o.Col,{className:"block__text",l:7,m:8,offset:"m2"},a.default.createElement("h2",null,a.default.createElement("span",{className:"text"},"Yo. Hi.")),a.default.createElement("p",null,a.default.createElement("span",{className:"text"},"'Sup? As you can see, there isn't really much to see here yet.")),a.default.createElement("p",null,a.default.createElement("span",{className:"text"},"Check me out on ",a.default.createElement(s.GitHub,null),", try and poach me on ",a.default.createElement(s.LinkedIn,null),", send me an ",a.default.createElement(s.Email,{text:"email"})," if you want to chat, or follow me on ",a.default.createElement(s.Instagram,null)," if you want to see some of my ",a.default.createElement(s.Photos,null),"."))))},f=p;t.default=f,u=r(8).default,d=r(8).leaveModule,u&&(u.register(p,"Intro","/Users/randytarampi/Development/randytarampi.github.io/public/views/intro.jsx"),u.register(f,"default","/Users/randytarampi/Development/randytarampi.github.io/public/views/intro.jsx"),d(e))}).call(this,r(31)(e))},153:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=s(r(1)),o=s(r(152)),i=s(r(148)),l=s(r(147));function s(e){return e&&e.__esModule?e:{default:e}}(n=r(8).enterModule)&&n(e);var c,u,d=function(){return a.default.createElement("div",{className:"page-content"},a.default.createElement(o.default,null),a.default.createElement(i.default,null),a.default.createElement(l.default,null))},p=d;t.default=p,c=r(8).default,u=r(8).leaveModule,c&&(c.register(d,"PageContent","/Users/randytarampi/Development/randytarampi.github.io/public/views/content.jsx"),c.register(p,"default","/Users/randytarampi/Development/randytarampi.github.io/public/views/content.jsx"),u(e))}).call(this,r(31)(e))},163:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(1),o=s(a),i=r(162),l=s(r(153));function s(e){return e&&e.__esModule?e:{default:e}}(n=r(8).enterModule)&&n(e);var c,u,d=function(){return o.default.createElement(a.Fragment,null,o.default.createElement(i.Helmet,null,o.default.createElement("title",null,"ʕ•ᴥ•ʔﾉ゛")),o.default.createElement(l.default,null))},p=d;t.default=p,c=r(8).default,u=r(8).leaveModule,c&&(c.register(d,"Main","/Users/randytarampi/Development/randytarampi.github.io/public/views/main.jsx"),c.register(p,"default","/Users/randytarampi/Development/randytarampi.github.io/public/views/main.jsx"),u(e))}).call(this,r(31)(e))},215:function(e,t,r){"use strict";r(214),r(55);var n=i(r(1)),a=r(110),o=i(r(163));function i(e){return e&&e.__esModule?e:{default:e}}(0,a.render)(n.default.createElement(o.default,null),document.querySelector("#main"))},418:function(e,t,r){r(417),e.exports=r(215)},74:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.DoubtBear=exports.HelloBear=void 0;var _compact2=__webpack_require__(150),_compact3=_interopRequireDefault(_compact2),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_emoji=__webpack_require__(149),_emoji2=_interopRequireDefault(_emoji),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(8).enterModule,enterModule&&enterModule(module);var Bear=function(_Emoji){function Bear(e,t,r){_classCallCheck(this,Bear);var n=_possibleConstructorReturn(this,(Bear.__proto__||Object.getPrototypeOf(Bear)).call(this,e,t,r));return n.state={leftAction:n.props.leftAction||null,leftLeaningLeftArm:n.props.leftLeaningLeftArm||null,leftEar:n.props.leftEar||null,rightLeaningLeftArm:n.props.rightLeaningLeftArm||null,leftEye:n.props.leftEye||null,nose:n.props.nose||null,rightEye:n.props.rightEye||null,leftLeaningRightArm:n.props.leftLeaningRightArm||null,rightEar:n.props.rightEar||null,rightLeaningRightArm:n.props.rightLeaningRightArm||null,rightAction:n.props.rightAction||null},n}return _inherits(Bear,_Emoji),_createClass(Bear,[{key:"onClick",value:function(e){switch(e){case"nose":var t=this.state.pokes||0,r={pokes:t+=1};switch(t){case 1:r.leftEye="ಠಿ",r.rightEye="ಠ";break;case 2:r.leftEye="ಠ",r.rightEye="ಠ";break;case 3:r.pokes=0}this.setState(r)}}},{key:"render",value:function(){return _react2.default.createElement("div",{className:["bear",this.toString()].join(" ")},_react2.default.createElement("span",{className:"bear__leftAction",onClick:this.onClick.bind(this,"leftAction")},this.state.leftAction),_react2.default.createElement("span",{className:"bear__leftLeaningLeftArm",onClick:this.onClick.bind(this,"leftLeaningLeftArm")},this.state.leftLeaningLeftArm),_react2.default.createElement("span",{className:"bear__leftEar",onClick:this.onClick.bind(this,"leftEar")},this.state.leftEar),_react2.default.createElement("span",{className:"bear__rightLeaningLeftArm",onClick:this.onClick.bind(this,"rightLeaningLeftArm")},this.state.rightLeaningLeftArm),_react2.default.createElement("span",{className:"bear__leftEye",onClick:this.onClick.bind(this,"leftEye")},this.state.leftEye),_react2.default.createElement("span",{className:"bear__nose",onClick:this.onClick.bind(this,"nose")},this.state.nose),_react2.default.createElement("span",{className:"bear__rightEye",onClick:this.onClick.bind(this,"rightEye")},this.state.rightEye),_react2.default.createElement("span",{className:"bear__leftLeaningRightArm",onClick:this.onClick.bind(this,"leftLeaningRightArm")},this.state.leftLeaningRightArm),_react2.default.createElement("span",{className:"bear__rightEar",onClick:this.onClick.bind(this,"rightEar")},this.state.rightEar),_react2.default.createElement("span",{className:"bear__rightLeaningRightArm",onClick:this.onClick.bind(this,"rightLeaningRightArm")},this.state.rightLeaningRightArm),_react2.default.createElement("span",{className:"bear__rightAction",onClick:this.onClick.bind(this,"rightAction")},this.state.rightAction))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}},{key:"components",set:function(e){this.setState({leftAction:e.leftAction||this.props.leftAction,leftLeaningLeftArm:e.leftLeaningLeftArm||this.props.leftLeaningLeftArm,leftEar:e.leftEar||this.props.leftEar,rightLeaningLeftArm:e.rightLeaningLeftArm||this.props.rightLeaningLeftArm,leftEye:e.leftEye||this.props.leftEye,nose:e.nose||this.props.nose,rightEye:e.rightEye||this.props.rightEye,leftLeaningRightArm:e.leftLeaningRightArm||this.props.leftLeaningRightArm,rightEar:e.leftLeaningRightArm||this.props.rightEar,rightLeaningRightArm:e.rightLeaningRightArm||this.props.rightLeaningRightArm,rightAction:e.rightAction||this.props.rightAction})},get:function(){return Bear.assembleComponents(this.state.leftAction,this.state.leftLeaningLeftArm,this.state.leftEar,this.state.rightLeaningLeftArm,this.state.leftEye,this.state.nose,this.state.rightEye,this.state.leftLeaningRightArm,this.state.rightEar,this.state.rightLeaningRightArm,this.state.rightAction)}}],[{key:"assembleComponents",value:function(e,t,r,n,a,o,i,l,s,c,u){return(0,_compact3.default)([e,t,r,n,a,o,i,l,s,c,u])}},{key:"defaultProps",get:function(){return{leftEar:"ʕ",leftEye:"•",nose:"ᴥ",rightEye:"•",rightEar:"ʔ"}}}]),Bear}(_emoji2.default),_default=Bear;exports.default=_default;var HelloBear=exports.HelloBear=function(_Bear){function HelloBear(e,t,r){return _classCallCheck(this,HelloBear),_possibleConstructorReturn(this,(HelloBear.__proto__||Object.getPrototypeOf(HelloBear)).call(this,e,t,r))}return _inherits(HelloBear,_Bear),_createClass(HelloBear,[{key:"onClick",value:function(e){switch(e){case"nose":var t=this.state.pokes||0,r={pokes:t+=1};switch(t%38){case 1:r.rightLeaningLeftArm=null,r.rightLeaningRightArm=null,r.rightAction=null;break;case 2:r.leftEye="ಠಿ",r.rightEye="ಠ";break;case 3:r.leftEye="ಠ",r.rightEye="ಠ";break;case 5:r.leftEye="◕",r.rightEye="◕";break;case 8:r.leftEye="°",r.rightEye="°";break;case 13:r.rightLeaningLeftArm=null,r.leftEye="–",r.rightEye="–",r.rightLeaningRightArm=null,r.rightAction=null;break;case 21:r.leftEye=" ͡°",r.rightEye=" ͡°";break;case 34:r.rightLeaningRightArm="ﾉ゛",window.open("mailto:rt@randytarampi.ca?subject=ʕ•ᴥ•ʔﾉ゛&body=I got to the end and couldn't stop clicking!","_blank");break;case 35:window.open("mailto:rt@randytarampi.ca?subject=ʕಠᴥಠʔﾉ゛&body=These windows won't stop popping up!","_blank");break;case 36:r.pokes=0,window.open("mailto:rt@randytarampi.ca?subject=Hey there…&body=I reached the end of the line, and finally stopped at "+t+" clicks. What is this?","_blank")}this.setState(r)}}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{leftEar:"ʕ",leftEye:"•",nose:"ᴥ",rightEye:"•",rightEar:"ʔ",rightLeaningRightArm:"ﾉ゛"}}}]),HelloBear}(Bear),DoubtBear=exports.DoubtBear=function(_Bear2){function DoubtBear(e,t,r){return _classCallCheck(this,DoubtBear),_possibleConstructorReturn(this,(DoubtBear.__proto__||Object.getPrototypeOf(DoubtBear)).call(this,e,t,r))}return _inherits(DoubtBear,_Bear2),_createClass(DoubtBear,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"defaultProps",get:function(){return{leftEar:"ʕ",leftEye:"ಠಿ",nose:"ᴥ",rightEye:"ಠ",rightEar:"ʔ"}}}]),DoubtBear}(Bear),reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(8).default,leaveModule=__webpack_require__(8).leaveModule,reactHotLoader&&(reactHotLoader.register(Bear,"Bear","/Users/randytarampi/Development/randytarampi.github.io/public/components/bear.jsx"),reactHotLoader.register(HelloBear,"HelloBear","/Users/randytarampi/Development/randytarampi.github.io/public/components/bear.jsx"),reactHotLoader.register(DoubtBear,"DoubtBear","/Users/randytarampi/Development/randytarampi.github.io/public/components/bear.jsx"),reactHotLoader.register(_default,"default","/Users/randytarampi/Development/randytarampi.github.io/public/components/bear.jsx"),leaveModule(module))}).call(this,__webpack_require__(31)(module))}});
//# sourceMappingURL=main.js.map