import{_ as e,o as a,c as t,d as n}from"./app-0bbefb76.js";const d={},i=n(`<h1 id="查看-nuget-仓库" tabindex="-1"><a class="header-anchor" href="#查看-nuget-仓库" aria-hidden="true">#</a> 查看 Nuget 仓库</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet nuget list source
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="添加私有-nuget-仓库" tabindex="-1"><a class="header-anchor" href="#添加私有-nuget-仓库" aria-hidden="true">#</a> 添加私有 Nuget 仓库</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet nuget add source &lt;package_source_path&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="创建包" tabindex="-1"><a class="header-anchor" href="#创建包" aria-hidden="true">#</a> 创建包</h1><h2 id="基于-nusepc" tabindex="-1"><a class="header-anchor" href="#基于-nusepc" aria-hidden="true">#</a> 基于 nusepc</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nuget pack &lt;package&gt;.nuspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nuspec-文件" tabindex="-1"><a class="header-anchor" href="#nuspec-文件" aria-hidden="true">#</a> nuspec 文件</h3><p>文件和项目文件一层级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;package xmlns=&quot;http://schemas.microsoft.com/packaging/2012/06/nuspec.xsd&quot;&gt;
  &lt;metadata&gt;
    &lt;id&gt;项目的唯一标识&lt;/id&gt;
    &lt;version&gt;版本（1.0.0）&lt;/version&gt;
    &lt;description&gt;
      描述
    &lt;/description&gt;
    &lt;authors&gt;作者&lt;/authors&gt;
	&lt;projectUrl&gt;项目仓库地址&lt;/projectUrl&gt;
	&lt;license type=&quot;expression&quot;&gt;（协议）Apache-2.0&lt;/license&gt;
    &lt;packageTypes&gt;
      &lt;packageType name=&quot;Template&quot; /&gt;
    &lt;/packageTypes&gt;
  &lt;/metadata&gt;
  &lt;files&gt;
	&lt;file src=&quot;src\\**&quot; target=&quot;src&quot; exclude=&quot;**\\bin\\**;**\\obj\\**&quot; /&gt;
  &lt;/files&gt;
&lt;/package&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于-csproj" tabindex="-1"><a class="header-anchor" href="#基于-csproj" aria-hidden="true">#</a> 基于.csproj</h2><h1 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h1><h2 id="基于-dotnet" tabindex="-1"><a class="header-anchor" href="#基于-dotnet" aria-hidden="true">#</a> 基于 dotnet</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet nuget push  package.nupkg  -s  &lt;package_source_path&gt;  -k &lt;secret key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基于-nuget" tabindex="-1"><a class="header-anchor" href="#基于-nuget" aria-hidden="true">#</a> 基于 nuget</h2><h1 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h1><h2 id="基于-dotnet-1" tabindex="-1"><a class="header-anchor" href="#基于-dotnet-1" aria-hidden="true">#</a> 基于 dotnet</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet nuget delete 包名 版本号 -s &lt;package_source_path&gt; -k &lt;secret key&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="安装项目模板" tabindex="-1"><a class="header-anchor" href="#安装项目模板" aria-hidden="true">#</a> 安装项目模板</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet new install &lt;package&gt;::&lt;version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),s=[i];function r(l,c){return a(),t("div",null,s)}const o=e(d,[["render",r],["__file","nuget.html.vue"]]);export{o as default};
