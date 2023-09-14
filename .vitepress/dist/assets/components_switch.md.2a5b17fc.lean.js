import{t as l}from"./chunks/nethren-ui.d1a22235.js";import{d as t,h as c,c as r,k as i,H as o,l as e,Q as p,o as E}from"./chunks/framework.0732542d.js";const y=p(`<h1 id="switch" tabindex="-1">Switch <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;Switch&quot;">​</a></h1><p>Switch component is used to enable or disable something. (Example: Color mode switching)</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { NSwitch } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@nethren-ui/vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isChecked</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- Add any props described here as well --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">n-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;add some area label (mandatory)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;add-id-mandatory&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { NSwitch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@nethren-ui/vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isChecked</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- Add any props described here as well --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">n-switch</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">aria-label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;add some area label (mandatory)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;add-id-mandatory&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="different-colors" tabindex="-1">Different Colors <a class="header-anchor" href="#different-colors" aria-label="Permalink to &quot;Different Colors&quot;">​</a></h2>`,5),u={class:"gallery"},d=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">n-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">isChecked</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">aria-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary-switch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;n-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  aria-label=&quot;secondary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  id=&quot;secondary-switch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  color=&quot;secondary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;n-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  aria-label=&quot;success&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  id=&quot;success-switch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  color=&quot;success&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;n-switch v-model=&quot;isChecked&quot; aria-label=&quot;info&quot; id=&quot;info-switch&quot; color=&quot;info&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;n-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  aria-label=&quot;warning&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  id=&quot;warning-switch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  color=&quot;warning&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;n-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  aria-label=&quot;danger&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  id=&quot;danger-switch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  color=&quot;danger&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">n-switch</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">isChecked</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">aria-label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary-switch&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;n-switch</span></span>
<span class="line"><span style="color:#24292E;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#24292E;">  aria-label=&quot;secondary&quot;</span></span>
<span class="line"><span style="color:#24292E;">  id=&quot;secondary-switch&quot;</span></span>
<span class="line"><span style="color:#24292E;">  color=&quot;secondary&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;n-switch</span></span>
<span class="line"><span style="color:#24292E;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#24292E;">  aria-label=&quot;success&quot;</span></span>
<span class="line"><span style="color:#24292E;">  id=&quot;success-switch&quot;</span></span>
<span class="line"><span style="color:#24292E;">  color=&quot;success&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;n-switch v-model=&quot;isChecked&quot; aria-label=&quot;info&quot; id=&quot;info-switch&quot; color=&quot;info&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;n-switch</span></span>
<span class="line"><span style="color:#24292E;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#24292E;">  aria-label=&quot;warning&quot;</span></span>
<span class="line"><span style="color:#24292E;">  id=&quot;warning-switch&quot;</span></span>
<span class="line"><span style="color:#24292E;">  color=&quot;warning&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;n-switch</span></span>
<span class="line"><span style="color:#24292E;">  v-model=&quot;isChecked&quot;</span></span>
<span class="line"><span style="color:#24292E;">  aria-label=&quot;danger&quot;</span></span>
<span class="line"><span style="color:#24292E;">  id=&quot;danger-switch&quot;</span></span>
<span class="line"><span style="color:#24292E;">  color=&quot;danger&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Switch has role of switch.</li><li>When Switch has focus, Space or Enter activates it.</li><li>using <code>aria-label</code> attribute is a must when not using any visible label</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>Prop</th><th style="text-align:left;">Purpose</th><th style="text-align:left;">Expected values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td>color</td><td style="text-align:left;">Color scheme of the switch</td><td style="text-align:left;"><a href="/theme/colors.html">Color scheme value -&gt;</a></td><td style="text-align:left;">&quot;primary&quot;</td></tr><tr><td>v-model</td><td style="text-align:left;">Switch status</td><td style="text-align:left;">Boolean (Need to be a vue ref value, ex: <code>const isEnabled = ref(false)</code> )</td><td style="text-align:left;">None (Must to be given)</td></tr></tbody></table>`,5),w=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}'),q={name:"components/switch.md"},f=t({...q,setup(h){const s=c(!1);return(m,a)=>(E(),r("div",null,[y,i("div",u,[o(e(l),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),"aria-label":"primary",id:"primary-switch",color:"primary"},null,8,["modelValue"]),o(e(l),{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=n=>s.value=n),"aria-label":"secondary",id:"secondary-switch",color:"secondary"},null,8,["modelValue"]),o(e(l),{modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=n=>s.value=n),"aria-label":"success",id:"success-switch",color:"success"},null,8,["modelValue"]),o(e(l),{modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=n=>s.value=n),"aria-label":"info",id:"info-switch",color:"info"},null,8,["modelValue"]),o(e(l),{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=n=>s.value=n),"aria-label":"warning",id:"warning-switch",color:"warning"},null,8,["modelValue"]),o(e(l),{modelValue:s.value,"onUpdate:modelValue":a[5]||(a[5]=n=>s.value=n),"aria-label":"danger",id:"danger-switch",color:"danger"},null,8,["modelValue"])]),d]))}});export{w as __pageData,f as default};
