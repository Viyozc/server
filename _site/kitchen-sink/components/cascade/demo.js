webpackJsonp([26],{465:function(n,a,s){n.exports={basic:s(617)}},617:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u793a\u4f8b","en-US":"demo"},filename:"components/cascade/demo/basic.md",id:"components-cascade-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Cascade<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dui-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Deptree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>tabs<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onChange\'</span><span class="token punctuation">,</span> tabs<span class="token punctuation">,</span> index<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>activeTab<span class="token punctuation">:</span> tabs<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> single <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5355\u884c\u9009\u62e9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">1</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5355\u884c\u9009\u62e9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">2</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5355\u884c\u9009\u62e9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">3</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5355\u884c\u9009\u62e9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">4</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5355\u884c\u9009\u62e9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">5</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5355\u884c\u9009\u62e9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">6</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e00\u7ea7\u5217\u8868.\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'\u4e8c\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n            children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n              label<span class="token punctuation">:</span> <span class="token string">\'\u4e09\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token number">54</span><span class="token punctuation">,</span>\n              children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                  label<span class="token punctuation">:</span> <span class="token string">\'\u56db\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n                  value<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">]</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'\u4e8c\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                label<span class="token punctuation">:</span> <span class="token string">\'\u4e09\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n                value<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n                children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                  label<span class="token punctuation">:</span> <span class="token string">\'\u56db\u7ea7\u5217\u8868-I\'</span><span class="token punctuation">,</span>\n                  value<span class="token punctuation">:</span> <span class="token number">542</span><span class="token punctuation">,</span>\n                  children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                    <span class="token punctuation">{</span>\n                      label<span class="token punctuation">:</span> <span class="token string">\'\u4e94\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n                      value<span class="token punctuation">:</span> <span class="token number">422</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span><span class="token punctuation">]</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                label<span class="token punctuation">:</span> <span class="token string">\'\u4e09\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n                value<span class="token punctuation">:</span> <span class="token number">314</span><span class="token punctuation">,</span>\n                \n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e00\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n          label<span class="token punctuation">:</span> <span class="token string">\'\u4e8c\u7ea7\u5217\u8868-I\'</span><span class="token punctuation">,</span>\n          value<span class="token punctuation">:</span> <span class="token number">51</span><span class="token punctuation">,</span>\n          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              label<span class="token punctuation">:</span> <span class="token string">\'\u4e09\u7ea7\u5217\u8868\'</span><span class="token punctuation">,</span>\n              value<span class="token punctuation">:</span> <span class="token number">43</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>cascade-demo<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e00\u7ea7\u7b5b\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e8c\u7ea7\u7b5b\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span><span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u591a\u7ea7\u7b5b\u9009<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascade</span> \n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onOk</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>single<span class="token punctuation">}</span></span>\n          <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>div style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>textAlign<span class="token punctuation">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span> paddingLeft<span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>label<span class="token punctuation">}</span><span class="token punctuation">:</span> ID<span class="token punctuation">:</span> <span class="token punctuation">{</span>item<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascade</span> \n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">54</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onOk</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> \n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascade</span> \n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onOk</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> \n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(8),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(72);var p=function(s){function p(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p);var a=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,n));return a.onChange=function(n,s){console.log("onChange",n,s),a.setState({activeTab:n.key})},a.state={},a}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(p,n.Component),a(p,[{key:"render",value:function(){var a=this,s=[{label:"\u4e00\u7ea7\u5217\u8868.",value:1,children:[{label:"\u4e8c\u7ea7\u5217\u8868",value:2,children:[{label:"\u4e09\u7ea7\u5217\u8868",value:54,children:[{label:"\u56db\u7ea7\u5217\u8868",value:42}]}]},{label:"\u4e8c\u7ea7\u5217\u8868",value:3,children:[{label:"\u4e09\u7ea7\u5217\u8868",value:12,children:[{label:"\u56db\u7ea7\u5217\u8868-I",value:542,children:[{label:"\u4e94\u7ea7\u5217\u8868",value:422}]}]},{label:"\u4e09\u7ea7\u5217\u8868",value:314}]}]},{label:"\u4e00\u7ea7\u5217\u8868",value:11,children:[{label:"\u4e8c\u7ea7\u5217\u8868-I",value:51,children:[{label:"\u4e09\u7ea7\u5217\u8868",value:43}]}]}];return n.createElement("div",{className:"cascade-demo"},n.createElement(t.Button,{onClick:function(){return a.setState({value:1})}},"\u4e00\u7ea7\u7b5b\u9009"),n.createElement(t.WhiteSpace,null),n.createElement(t.Button,{onClick:function(){return a.setState({value:2})}},"\u4e8c\u7ea7\u7b5b\u9009"),n.createElement(t.WhiteSpace,null),n.createElement(t.Button,{onClick:function(){return a.setState({value:3})}},"\u591a\u7ea7\u7b5b\u9009"),n.createElement(t.Cascade,{value:3,visible:1===this.state.value,onCancel:function(){return a.setState({value:null})},onOk:function(n,a){return console.log(n,a)},data:[{label:"\u5355\u884c\u9009\u62e9",value:1},{label:"\u5355\u884c\u9009\u62e9",value:2},{label:"\u5355\u884c\u9009\u62e9",value:3},{label:"\u5355\u884c\u9009\u62e9",value:4},{label:"\u5355\u884c\u9009\u62e9",value:5},{label:"\u5355\u884c\u9009\u62e9",value:6}],renderItem:function(a){return n.createElement("div",{style:{textAlign:"left",paddingLeft:120}},a.label,": ID: ",a.value)}}),n.createElement(t.Cascade,{value:54,onOk:function(n,a){return console.log(n,a)},visible:2===this.state.value,onCancel:function(){return a.setState({value:null})},data:s}),n.createElement(t.Cascade,{visible:3===this.state.value,onOk:function(n,a){return console.log(n,a)},onCancel:function(){return a.setState({value:null})},data:s}))}}]),p}();return n.createElement(p,null)},style:".cascade-demo {\n\n}",highlightedStyle:'<span class="token selector"><span class="token class">.cascade-demo</span> </span><span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>'}}});