webpackJsonp([18],{1056:function(n,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u793a\u4f8b","en-US":"Basic"},filename:"components/info-panel/demo/basic.md",id:"components-info-panel-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InfoPanel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dui-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Item <span class="token operator">=</span> InfoPanel<span class="token punctuation">.</span>Item\n\n<span class="token keyword">const</span> PlaceHolder <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> className <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token operator">...</span>restProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>className<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> placeholder`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">{...restProps}</span><span class="token punctuation">></span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> FlexExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InfoPanel</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u6807\u9898\u4e00<span class="token punctuation">\'</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac<span class="token punctuation">\'</span>/</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u95e8\u5e97\u540d\u79f0<span class="token punctuation">\'</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac..\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac..\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac<span class="token punctuation">\'</span>/</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u95e8\u5e97\u5730\u5740<span class="token punctuation">\'</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac<span class="token punctuation">\'</span>/</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u5907\u6ce8<span class="token punctuation">\'</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac<span class="token punctuation">\'</span>/</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>\u6807\u9898\u4e00<span class="token punctuation">\'</span></span> <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>span style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">\'gold\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u554a\u662f\u6253\u53d1\u65af\u8482\u82ac<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InfoPanel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlexExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".sub-title {\n  margin: 5px 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">5</span>px <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},999:function(n,a,s){n.exports={basic:s(1056)}}});