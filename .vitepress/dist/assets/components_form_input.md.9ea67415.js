import{C as e}from"./chunks/nethren-ui.47a12bb5.js";import{d as p,h as r,c,k as i,J as o,l as n,S as t,o as u}from"./chunks/framework.dccd38af.js";const y=t(`<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h1><p>Input component can be used as a input field for a form.This n-input component is for input types of text, url, email, password, tel only.Please use the other specially crafted components in Nethren-ui for needs like date input, file input and color inputs.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NInput</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nethren-ui/vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Add any props described here as well --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="different-colors" tabindex="-1">Different Colors <a class="header-anchor" href="#different-colors" aria-label="Permalink to &quot;Different Colors&quot;">​</a></h2>`,5),D={class:"gallery"},d=t('<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Checkbox has role of checkbox.</li><li>When Checkbox has focus, Space or Enter activates it.</li><li>using <code>aria-label</code> attribute is a must when not using any visible label</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>Prop</th><th style="text-align:left;">Purpose</th><th style="text-align:left;">Expected values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td>color</td><td style="text-align:left;">To set the color scheme of the checkbox</td><td style="text-align:left;"><a href="/theme/colors.html">Color scheme value -&gt;</a></td><td style="text-align:left;">&quot;primary&quot;</td></tr><tr><td>v-model</td><td style="text-align:left;">To bind the checkbox status</td><td style="text-align:left;">Boolean (Need to be a vue ref values, ex: <code>const isEnabled = ref(false)</code> )</td><td style="text-align:left;">None (Mandatory to be given)</td></tr></tbody></table>',5),v=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/input.md","filePath":"components/form/input.md"}'),F={name:"components/form/input.md"},A=p({...F,setup(m){const s=r("");return(f,a)=>(u(),c("div",null,[y,i("div",D,[o(n(e),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),label:"Primary color",id:"value1",name:"value1",color:"primary"},null,8,["modelValue"]),o(n(e),{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=l=>s.value=l),label:"Secondary color",id:"value2",name:"value2",color:"secondary"},null,8,["modelValue"]),o(n(e),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=l=>s.value=l),label:"Success color",id:"value3",name:"value3",color:"success"},null,8,["modelValue"]),o(n(e),{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=l=>s.value=l),label:"Info color",id:"value4",name:"value4",color:"info"},null,8,["modelValue"]),o(n(e),{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=l=>s.value=l),label:"Warning color",id:"value5",name:"value5",color:"warning"},null,8,["modelValue"])]),d]))}});export{v as __pageData,A as default};