webpackJsonp([19],{481:function(n,s,a){n.exports={basic:a(626)}},626:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u7b80\u5355\u7684\u56fe\u7247\u9009\u62e9\u7ec4\u4ef6","en-US":"Simple image picker"},filename:"components/image-upload/demo/basic.md",id:"components-image-upload-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ImageUpload<span class="token punctuation">,</span> WingSpace<span class="token punctuation">,</span> Segment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dui-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg\'</span><span class="token punctuation">,</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> uploadImages <span class="token punctuation">(</span>data<span class="token punctuation">,</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cb <span class="token operator">=</span> data\n    data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">hackBr</span><span class="token punctuation">(</span><span class="token punctuation">(</span>bridge<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> bridge<span class="token punctuation">.</span><span class="token function">callHandler</span><span class="token punctuation">(</span><span class="token string">\'uploadImage\'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> response <span class="token operator">=</span><span class="token operator">></span> <span class="token function">parseStr</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> parseStr <span class="token punctuation">(</span>response<span class="token punctuation">,</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> response <span class="token operator">===</span> <span class="token string">\'string\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    response <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token function">cb</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> Bridge <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nBridge<span class="token punctuation">.</span>uploadImages <span class="token operator">=</span> uploadImages\n<span class="token keyword">const</span> hackBridge <span class="token operator">=</span> <span class="token punctuation">{</span>\n  callHandler <span class="token punctuation">(</span>type<span class="token punctuation">,</span> params<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">hackUpload</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> response<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> hackBr <span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token function">cb</span><span class="token punctuation">(</span>hackBridge<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> hackUpload <span class="token punctuation">(</span>params<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span>\n  input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">\'file\'</span>\n  input<span class="token punctuation">.</span>multiple <span class="token operator">=</span> <span class="token boolean">true</span>\n  input<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  input<span class="token punctuation">.</span>onchange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> files <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files\n    <span class="token keyword">let</span> count <span class="token operator">=</span> params<span class="token punctuation">.</span>maxCount <span class="token operator">||</span> <span class="token number">1</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>files<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      count <span class="token operator">=</span> files<span class="token punctuation">.</span>length\n    <span class="token punctuation">}</span>\n    input <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token keyword">let</span> setData <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'hackImages\'</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> picker <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>setData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>picker<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>setData<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      picker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">\'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      success<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      data<span class="token punctuation">:</span> picker<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ImagePickerExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    images<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>images<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>images<span class="token punctuation">,</span> type<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      images<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onSegChange <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> index <span class="token operator">=</span> item<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      multiple<span class="token punctuation">:</span> index<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> images <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingSpace</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageUpload</span>\n          <span class="token attr-name">Bridge</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Bridge<span class="token punctuation">}</span></span>\n          <span class="token attr-name">images</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>images<span class="token punctuation">}</span></span>\n          <span class="token attr-name">maxCount</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onFail</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onImageClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> images<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> images<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingSpace</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImagePickerExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),t=a(72);function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}var o=["https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg","https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg"];var e={};e.uploadImages=function(n,s){s||(s=n,n={}),function(n){n(c)}(function(a){return a.callHandler("uploadImage",n,function(n){return function(n,s){return"string"==typeof n&&(n=JSON.parse(n)),s(n)}(n,s)})})};var c={callHandler:function(n,s,a){!function(n,s){var a=document.createElement("input");a.type="file",a.multiple=!0,a.click(),a.onchange=function(t){var p=t.target.files,o=n.maxCount||1;p.length<o&&(o=p.length),a=null;var e=localStorage.getItem("hackImages"),c=[];e?new Array(10).fill(1).map(c.concat(e.split(","))):c=new Array(10).fill("https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg"),s({success:!0,data:c.slice(0,o)})}}(s,a)}};var u=function(a){function c(){var n,s,a;!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,e=Array(t),u=0;u<t;u++)e[u]=arguments[u];return s=a=p(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this].concat(e))),a.state={images:o},a.onChange=function(n,s,t){console.log(n,s,t),a.setState({images:n})},a.onSegChange=function(n){var s=n.value;a.setState({multiple:s})},p(a,s)}return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}(c,n.Component),s(c,[{key:"render",value:function(){var s=this.state.images;return n.createElement(t.WingSpace,null,n.createElement(t.ImageUpload,{Bridge:e,images:s,maxCount:9,onChange:this.onChange,onFail:function(){},onImageClick:function(n,s){return console.log(n,s)}}))}}]),c}();return n.createElement(u,null)}}}});