import{_ as d,M as p,p as l,q as u,R as o,N as a,V as n,t,a1 as e}from"./framework-6ce21b73.js";const r={},i=e('<h1 id="breadcrumb-面包屑" tabindex="-1"><a class="header-anchor" href="#breadcrumb-面包屑" aria-hidden="true">#</a> Breadcrumb 面包屑</h1><p>显示当前页面的路径，并且可以返回之前的页面</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><p>在<code>dz-breadcrumb</code>中使用<code>dz-breadcrumb-item</code>标签来表示从首页开始的每一个页面，每个<code>dz-breadcrumb-item</code>标签内可自定义内容，每两个<code>dz-breadcrumb-item</code>标签中间会有一个分隔符</p>',4),m={class:"container"},b=e(`<details><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Homepage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Information management<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Information list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Member list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><summary>查看代码</summary></details><h2 id="自定义分隔符" tabindex="-1"><a class="header-anchor" href="#自定义分隔符" aria-hidden="true">#</a> 自定义分隔符</h2><p>通过<code>dz-breadcrumb</code>的<code>separator</code>属性可控制之间的分隔符类型，其参数有三个，<code>/</code>，<code>&gt;</code>，<code>|</code>，默认值为<code>/</code></p>`,3),k={class:"container"},g=e(`<details><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb</span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Homepage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Information management<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Information list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>Member list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dz-breadcrumb</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><summary>查看代码</summary></details><h2 id="breadcrumb-api" tabindex="-1"><a class="header-anchor" href="#breadcrumb-api" aria-hidden="true">#</a> Breadcrumb API</h2><h3 id="breadcrumb-属性" tabindex="-1"><a class="header-anchor" href="#breadcrumb-属性" aria-hidden="true">#</a> Breadcrumb 属性</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可取值</th><th>默认值</th></tr></thead><tbody><tr><td>separator</td><td>分隔符</td><td><code>string</code></td><td><code>/</code> <code>&gt;</code> <code>|</code></td><td><code>/</code></td></tr></tbody></table><h3 id="breadcrumb-插槽" tabindex="-1"><a class="header-anchor" href="#breadcrumb-插槽" aria-hidden="true">#</a> Breadcrumb 插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义默认内容</td></tr></tbody></table><h2 id="breadcrumbitem-api" tabindex="-1"><a class="header-anchor" href="#breadcrumbitem-api" aria-hidden="true">#</a> BreadcrumbItem API</h2><h3 id="breadcrumbitem-属性" tabindex="-1"><a class="header-anchor" href="#breadcrumbitem-属性" aria-hidden="true">#</a> BreadcrumbItem 属性</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>路由跳转目标</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="breadcrumbitem-插槽" tabindex="-1"><a class="header-anchor" href="#breadcrumbitem-插槽" aria-hidden="true">#</a> BreadcrumbItem 插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义默认内容</td></tr></tbody></table>`,11);function h(v,_){const s=p("dz-breadcrumb-item"),c=p("dz-breadcrumb");return l(),u("div",null,[i,o("div",m,[a(c,null,{default:n(()=>[a(s,null,{default:n(()=>[t("Homepage")]),_:1}),a(s,null,{default:n(()=>[t("Information management")]),_:1}),a(s,null,{default:n(()=>[t("Information list")]),_:1}),a(s,null,{default:n(()=>[t("Member list")]),_:1})]),_:1})]),b,o("div",k,[a(c,{separator:">"},{default:n(()=>[a(s,null,{default:n(()=>[t("Homepage")]),_:1}),a(s,null,{default:n(()=>[t("Information management")]),_:1}),a(s,null,{default:n(()=>[t("Information list")]),_:1}),a(s,null,{default:n(()=>[t("Member list")]),_:1})]),_:1})]),g])}const z=d(r,[["render",h],["__file","breadcrumb.html.vue"]]);export{z as default};
