webpackJsonp([6],{495:function(n,s,a){n.exports={basic:a(636),cascade:a(637)}},636:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u9009\u62e9\u5668","en-US":"Basic"},filename:"components/picker-view/demo/basic.md",id:"components-picker-view-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> PickerView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dui-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// const seasons = [</span>\n<span class="token comment" spellcheck="true">//   [</span>\n<span class="token comment" spellcheck="true">//     {</span>\n<span class="token comment" spellcheck="true">//       label: \'2013\',</span>\n<span class="token comment" spellcheck="true">//       value: \'2013\',</span>\n<span class="token comment" spellcheck="true">//     },</span>\n<span class="token comment" spellcheck="true">//     {</span>\n<span class="token comment" spellcheck="true">//       label: \'2014\',</span>\n<span class="token comment" spellcheck="true">//       value: \'2014\',</span>\n<span class="token comment" spellcheck="true">//     },</span>\n<span class="token comment" spellcheck="true">//   ],</span>\n<span class="token comment" spellcheck="true">//   [</span>\n<span class="token comment" spellcheck="true">//     {</span>\n<span class="token comment" spellcheck="true">//       label: \'\u6625\',</span>\n<span class="token comment" spellcheck="true">//       value: \'\u6625\',</span>\n<span class="token comment" spellcheck="true">//     },</span>\n<span class="token comment" spellcheck="true">//     {</span>\n<span class="token comment" spellcheck="true">//       label: \'\u590f\',</span>\n<span class="token comment" spellcheck="true">//       value: \'\u590f\',</span>\n<span class="token comment" spellcheck="true">//     },</span>\n<span class="token comment" spellcheck="true">//   ],</span>\n<span class="token comment" spellcheck="true">// ];</span>\n<span class="token keyword">const</span> seasons <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          label<span class="token punctuation">:</span> <span class="token string">\'3123\'</span><span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          label<span class="token punctuation">:</span> <span class="token string">\'31231\'</span><span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'52342\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          label<span class="token punctuation">:</span> <span class="token string">\'41212\'</span><span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          label<span class="token punctuation">:</span> <span class="token string">\'423423\'</span><span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">PickerViewExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// onChange = (value) => {</span>\n  <span class="token comment" spellcheck="true">//   console.log(\'val\', value);</span>\n  <span class="token comment" spellcheck="true">//   this.setState({</span>\n  <span class="token comment" spellcheck="true">//     value,</span>\n  <span class="token comment" spellcheck="true">//   });</span>\n  <span class="token comment" spellcheck="true">// }</span>\n  onScrollChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'scroll\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScrollChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onScrollChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>seasons<span class="token punctuation">}</span></span>\n        <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerViewExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),t=a(72);function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}var e=[{label:"2013",value:"2013",children:[{label:"3123",value:"2014"},{label:"31231",value:"2014"}]},{label:"52342",value:"2013",children:[{label:"41212",value:"2014"},{label:"423423",value:"2014"}]}],o=function(a){function o(){var n,s,a;!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,e=Array(t),c=0;c<t;c++)e[c]=arguments[c];return s=a=p(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),a.state={value:null},a.onScrollChange=function(n){console.log("scroll",n)},p(a,s)}return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}(o,n.Component),s(o,[{key:"render",value:function(){return n.createElement(t.PickerView,{onChange:this.onChange,onScrollChange:this.onScrollChange,value:this.state.value,data:e,cascade:!0})}}]),o}();return n.createElement(o,null)}}},637:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u9009\u62e9\u5668","en-US":"Basic"},filename:"components/picker-view/demo/cascade.md",id:"components-picker-view-demo-cascade"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> PickerView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dui-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> seasons <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">PickerViewExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onScrollChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScrollChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onScrollChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>seasons<span class="token punctuation">}</span></span>\n        <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerViewExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),t=a(72);function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}var e=[[{label:"2013",value:"2013"},{label:"2014",value:"2014"}],[{label:"\u6625",value:"\u6625"},{label:"\u590f",value:"\u590f"}]],o=function(a){function o(){var n,s,a;!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,e=Array(t),c=0;c<t;c++)e[c]=arguments[c];return s=a=p(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),a.state={value:null},a.onChange=function(n){console.log(n),a.setState({value:n})},a.onScrollChange=function(n){console.log(n)},p(a,s)}return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}(o,n.Component),s(o,[{key:"render",value:function(){return n.createElement(t.PickerView,{onChange:this.onChange,onScrollChange:this.onScrollChange,value:this.state.value,data:e,cascade:!1})}}]),o}();return n.createElement(o,null)}}}});