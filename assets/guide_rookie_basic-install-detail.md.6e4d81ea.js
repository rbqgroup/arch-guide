import{_ as s}from"./chunks/btrfs-logo.4fec00e8.js";import{_ as a,c as n,o as e,a as l}from"./app.c9b5fec3.js";const m=JSON.parse('{"title":"基础安装详解","description":"","frontmatter":{},"headers":[{"level":2,"title":"💾 分区和格式化","slug":"💾-分区和格式化","link":"#💾-分区和格式化","children":[{"level":3,"title":"💾 为什么要用 Btrfs 文件系统","slug":"💾-为什么要用-btrfs-文件系统","link":"#💾-为什么要用-btrfs-文件系统","children":[]},{"level":3,"title":"💾 传统 ext4 文件系统说明","slug":"💾-传统-ext4-文件系统说明","link":"#💾-传统-ext4-文件系统说明","children":[]},{"level":3,"title":"🆕 全新安装","slug":"🆕-全新安装","link":"#🆕-全新安装","children":[]},{"level":3,"title":"💾 Swap 分区和 Swap 文件","slug":"💾-swap-分区和-swap-文件","link":"#💾-swap-分区和-swap-文件","children":[]}]},{"level":2,"title":"💽 安装环境和新系统的关系","slug":"💽-安装环境和新系统的关系","link":"#💽-安装环境和新系统的关系","children":[{"level":3,"title":"1. 🏠 建房子","slug":"_1-🏠-建房子","link":"#_1-🏠-建房子","children":[]},{"level":3,"title":"2. 🛣️ 建立通道","slug":"_2-🛣️-建立通道","link":"#_2-🛣️-建立通道","children":[]},{"level":3,"title":"3. 🛋️ 添置家具","slug":"_3-🛋️-添置家具","link":"#_3-🛋️-添置家具","children":[]},{"level":3,"title":"4. 🚚 搬进新家","slug":"_4-🚚-搬进新家","link":"#_4-🚚-搬进新家","children":[]}]},{"level":2,"title":"🥙 杂七杂八","slug":"🥙-杂七杂八","link":"#🥙-杂七杂八","children":[]}],"relativePath":"guide/rookie/basic-install-detail.md","lastUpdated":1678893854000}'),p={name:"guide/rookie/basic-install-detail.md"},o=l('<h1 id="基础安装详解" tabindex="-1">基础安装详解 <a class="header-anchor" href="#基础安装详解" aria-hidden="true">#</a></h1><blockquote><h3 id="🔭-知其然-知其所以然" tabindex="-1">🔭 知其然，知其所以然 <a class="header-anchor" href="#🔭-知其然-知其所以然" aria-hidden="true">#</a></h3><p>这一节对上一节 <a href="./basic-install.html">archlinux 基础安装</a> 中关键的几步做出了更进一步的解释，知其然知其所以然。此节没有特定顺序，可根据需要选择性阅读</p><p>需要说明的是，本指南假定你有一定的 Linux 基础知识，基础知识相关的话题<strong>不会</strong>被讨论</p></blockquote><h2 id="💾-分区和格式化" tabindex="-1">💾 分区和格式化 <a class="header-anchor" href="#💾-分区和格式化" aria-hidden="true">#</a></h2><blockquote><ol><li>因本指南介绍使用的文件系统是 <code>Btrfs</code>，很多萌新可能有些不理解。这里有必要说明一下</li><li>若<strong>执意要用传统的 <code>ext4</code> 文件系统</strong>，本指南也给出了示例</li><li>对于全盘格式化后<strong>全新安装</strong>的（单 archlinux 系统）同学，这里也给出了需要做的额外步骤的说明</li><li>对于 <strong>Swap 分区还是 Swap 文件</strong> 的话题，也会在此讨论</li></ol></blockquote><h3 id="💾-为什么要用-btrfs-文件系统" tabindex="-1">💾 为什么要用 Btrfs 文件系统 <a class="header-anchor" href="#💾-为什么要用-btrfs-文件系统" aria-hidden="true">#</a></h3><p><img src="'+s+`" alt="Btrfs"></p><p>纵观 Btrfs 的历史，可以说 Btrfs 未来的发展是道阻且长的。也让我们感受到开源社区也并不是一根绳上的蚂蚱 —— 开源社区之间也有着各种各样的分歧。</p><p>但不管怎么说，Btrfs 的未来现在来看是光明的；我们也可以在 archlinux 上享受到 Btrfs 文件系统的特性带来的好处：</p><ol><li>快照 —— archlinux 作为滚动发行版，若滚挂了可以使用 Btrfs 的快照特性快速回滚 <ul><li>若使用传统的 <code>ext4</code> 文件系统，我们可以使用 <code>timeshift</code> 的 <code>RSYNC</code> 模式进行增量备份。但是，一般来说 RSYNC 方式的快照大小略大于当前实际使用大小，也就是说实际上开启了 <code>timeshift</code> 的 <code>RSYNC</code> 模式快照相当于磁盘可用空间直接少了一半多。因为虽然 RSYNC 方式的快照是增量的，但历史最久远的快照依然是完整备份，随后才是增量的</li></ul></li><li>透明压缩 —— 可以大大减少磁盘的使用空间（压缩率大概在 10% 左右）</li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>更多 Btrfs 文件系统介绍和操作请参阅 <a href="./../advanced/btrfs.html">Btrfs 介绍与相关操作</a>。</p></div><h3 id="💾-传统-ext4-文件系统说明" tabindex="-1">💾 传统 ext4 文件系统说明 <a class="header-anchor" href="#💾-传统-ext4-文件系统说明" aria-hidden="true">#</a></h3><p>若执意使用传统的 <code>ext4</code> 文件系统，那么分区的建议为：</p><ol><li><p>若 archlinux 安装分区小于 <code>256GB</code>：</p><ul><li><code>/</code> 根目录：<code>全部空间</code>（用户主目录不单独分区）</li><li><code>/boot</code> EFI 分区：<code>256MB</code></li><li>Swap 分区：<code>&gt;= 电脑实际运行内存的 60%</code></li></ul></li><li><p>若 archlinux 安装分区大于 <code>256GB</code>：</p><ul><li><code>/</code> 根目录：<code>128GB</code></li><li><code>/home</code> 用户主目录：<code>剩余的全部空间</code></li><li><code>/boot</code> EFI 分区：<code>256MB</code></li><li>Swap 分区：<code>&gt;= 电脑实际运行内存的 60%</code></li></ul></li></ol><p>分区同样使用 <code>cfdisk</code> 工具，具体操作类似上一节 <a href="./basic-install.html#_7-1-分区">7-1. 分区</a> 所述，这里不再赘述。</p><ul><li>使用以下命令格式化 <code>ext4</code> 分区：</li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Xcl4w" id="tab-Qq1bfAw" checked="checked"><label for="tab-Qq1bfAw">SATA</label><input type="radio" name="group-Xcl4w" id="tab-4otdk02"><label for="tab-4otdk02">NVME</label></div><div class="blocks"><div class="language-zsh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkfs.ext4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdax</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkfs.ext4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/nvmexn1pn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><ul><li>使用以下命令挂载 <code>ext4</code> 分区：</li></ul><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-ZPO4j" id="tab--wTPzYm" checked="checked"><label for="tab--wTPzYm">SATA</label><input type="radio" name="group-ZPO4j" id="tab-Yj-rvbt"><label for="tab-Yj-rvbt">NVME</label></div><div class="blocks"><div class="language-zsh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdxn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/home</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 若 /home 目录单独分区</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdxn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/home</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 若 /home 目录单独分区</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/boot</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdxn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/boot</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/nvmexn1pn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/home</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 若 /home 目录单独分区</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/nvmexn1pn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/home</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 若 /home 目录单独分区</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/boot</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/nvmexn1pn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/boot</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div><h3 id="🆕-全新安装" tabindex="-1">🆕 全新安装 <a class="header-anchor" href="#🆕-全新安装" aria-hidden="true">#</a></h3><p>若为全新安装（单 archlinux 系统），首先要对磁盘建立新的 GPT 分区表；同时，由于没有现存的 EFI 分区，所以我们还需要手动创建它（这一步在 <a href="./basic-install.html#_7-分区和格式化-使用-btrfs-文件系统">7. 分区和格式化（使用 Btrfs 文件系统）</a> 步骤之前）：</p><h4 id="_1-建立新的-gpt-分区表" tabindex="-1">1. 建立新的 GPT 分区表 <a class="header-anchor" href="#_1-建立新的-gpt-分区表" aria-hidden="true">#</a></h4><ol><li>同样的，先通过 <code>lsblk</code> 命令，区分要全新安装 archlinux 的磁盘（通过观察磁盘的大小等判断）：</li></ol><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">lsblk</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 显示当前分区情况</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>通过以下命令将磁盘转换为 <code>gpt</code> 类型：</li></ol><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-hz7CQ" id="tab-2gjn3Zv" checked="checked"><label for="tab-2gjn3Zv">SATA</label><input type="radio" name="group-hz7CQ" id="tab-PA3T_kY"><label for="tab-PA3T_kY">NVME</label></div><div class="blocks"><div class="language-zsh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">parted</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdx</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 执行 parted，进行磁盘类型变更</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">parted</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> mktable </span><span style="color:#676E95;font-style:italic;"># 输入 mktable</span></span>
<span class="line"><span style="color:#FFCB6B;">New</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">label</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gpt</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 输入 gpt，将磁盘类型转换为 GPT 类型。如磁盘有数据会警告，输入 Yes 即可</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">parted</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> quit </span><span style="color:#676E95;font-style:italic;"># 退出 parted 命令行交互</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">parted</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/nvmexn1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 执行 parted，进行磁盘类型变更</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">parted</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> mktable </span><span style="color:#676E95;font-style:italic;"># 输入 mktable</span></span>
<span class="line"><span style="color:#FFCB6B;">New</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">label</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">type?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gpt</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 输入 gpt，将磁盘类型转换为 GPT 类型。如磁盘有数据会警告，输入 Yes 即可</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">parted</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> quit </span><span style="color:#676E95;font-style:italic;"># 退出 parted 命令行交互</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><div class="danger custom-block"><p class="custom-block-title">☢️ 警告</p><p>重建分区表会使磁盘所有数据丢失，请事先确认。</p></div><h4 id="_2-建立-efi-分区" tabindex="-1">2. 建立 EFI 分区 <a class="header-anchor" href="#_2-建立-efi-分区" aria-hidden="true">#</a></h4><p>进入 <code>cfdisk</code> 分区工具之后，类似上一节步骤 <a href="./basic-install.html#_7-1-分区">7-1. 分区</a> 的分区说明，建立 EFI 分区：</p><ol><li><p>选中 <code>Free space</code> &gt; 再选中操作 <code>[New]</code> &gt; 然后按下回车 <code>Enter</code> 以新建 <code>EFI</code> 分区</p></li><li><p>输入 <code>分区大小</code>（建议 &gt;= <code>256MB</code>、&lt;= <code>1024MB</code>；推荐 <code>512MB</code>）&gt; 然后按下回车 <code>Enter</code></p></li><li><p>选中操作 <code>[Type]</code> &gt; 然后按下回车 <code>Enter</code> &gt; 通过方向键 <code>↑</code> 和 <code>↓</code> 选中 <code>EFI System</code> &gt; 最后按下回车 <code>Enter</code></p></li><li><p>接下来可以按照上一节 <a href="./basic-install.html#_7-1-分区">7-1. 分区</a> 的步骤创建其它分区</p></li></ol><h4 id="_3-格式化-efi-分区" tabindex="-1">3. 格式化 EFI 分区 <a class="header-anchor" href="#_3-格式化-efi-分区" aria-hidden="true">#</a></h4><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-COiUQ" id="tab-GqOI8wv" checked="checked"><label for="tab-GqOI8wv">SATA</label><input type="radio" name="group-COiUQ" id="tab-PhECrY-"><label for="tab-PhECrY-">NVME</label></div><div class="blocks"><div class="language-zsh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkfs.vfat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdxn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mkfs.vfat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/nvmexn1pn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h3 id="💾-swap-分区和-swap-文件" tabindex="-1">💾 Swap 分区和 Swap 文件 <a class="header-anchor" href="#💾-swap-分区和-swap-文件" aria-hidden="true">#</a></h3><p>如果希望使用 Swap 文件替换 Swap 分区，那么在分区和挂载中不必创建和开启 Swap 分区。</p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>但是，使用 Swap 文件会更加复杂。因为若使用 Swap 文件在 <code>Btrfs</code> 文件系统中设置休眠（hibernate）的时候需要额外的步骤，而且可能有兼容性问题。若没有动态改变 Swap 大小的需求，建议使用 Swap 分区。</p></div><p>通过以下步骤创建和挂载 Swap 文件（这一步在 <a href="./basic-install.html#_18-完成安装">18. 完成安装</a> 步骤之后）：</p><ol><li>通过以下命令创建 Swap File：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">if=/dev/zero</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of=/swapfile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bs=1M</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">count=</span><span style="color:#F78C6C;">16384</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status=progress</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 创建 16G 的交换空间（大小 &gt;= 电脑实际运行内存的 60%）</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/swapfile</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 设置正确的权限</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkswap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/swapfile</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 格式化 Swap 文件</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">swapon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/swapfile</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 挂载 Swap 文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>通过以下命令挂载 Swap 文件：</li></ol><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">swapon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/swapfile</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>使用 <code>free</code> 命令复查 Swap 文件挂载情况：</li></ol><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">free</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># -h 选项会使输出以人类可读的单位显示</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>最后，向 <code>/etc/fstab</code> 中追加如下内容：</li></ol><div class="language-fstab line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">fstab</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/swapfile  none  swap  defaults  0 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="💽-安装环境和新系统的关系" tabindex="-1">💽 安装环境和新系统的关系 <a class="header-anchor" href="#💽-安装环境和新系统的关系" aria-hidden="true">#</a></h2><blockquote><p>理解安装环境和新系统的关系，对于理解 archlinux 安装时所做的步骤具有重大意义。可以说，理解了它们的关系基本上就理解了 archlinux 的安装</p></blockquote><p>为了生动形象的理解安装环境和新系统的关系，我们可以将安装系统的过程想象成搬家 🏠。</p><h3 id="_1-🏠-建房子" tabindex="-1">1. 🏠 建房子 <a class="header-anchor" href="#_1-🏠-建房子" aria-hidden="true">#</a></h3><p>我们可以将安装环境比喻成一个临时的家。为了住进新家，我们需要先把新家的房子建起来。这个过程就是 <a href="./basic-install.html#_7-分区和格式化-使用-btrfs-文件系统">7. 分区和格式化</a>。在磁盘上建立新的分区并格式化，就好比在空余的土地上建立起新的房子。</p><h3 id="_2-🛣️-建立通道" tabindex="-1">2. 🛣️ 建立通道 <a class="header-anchor" href="#_2-🛣️-建立通道" aria-hidden="true">#</a></h3><p>新房建好了，我们首先还要建立一条联通旧家和新家之间的通道 —— 不然我们怎么走到新家去呢！更不要提将家具什么的安置到新家去了。这个步骤就是 <a href="/guide/rookie/basic-install.html#_8-挂载">8. 挂载</a>。通过将新的分区挂载到 <code>/mnt</code> 下，我们才能对新的分区进行操作。</p><h3 id="_3-🛋️-添置家具" tabindex="-1">3. 🛋️ 添置家具 <a class="header-anchor" href="#_3-🛋️-添置家具" aria-hidden="true">#</a></h3><p>光有一个空荡荡的房子是没有用的。为了变成一个能够生活的温馨小窝，我们还需要添置家具。这个步骤就是 <a href="./basic-install.html#_9-安装系统">9. 安装系统</a>。在执行 <code>pacstrap</code> 脚本的过程中，其实就是将系统运行需要的一些基础的东西安装到新的系统中 —— 类似把家具放到新的家里。</p><h3 id="_4-🚚-搬进新家" tabindex="-1">4. 🚚 搬进新家 <a class="header-anchor" href="#_4-🚚-搬进新家" aria-hidden="true">#</a></h3><p>最后，新家建好了，装修啊、家具啊也弄好了，我们可以搬进新家了！这一步骤就是 <a href="./basic-install.html#_11-change-root">11. change root</a>。<code>arch-chroot</code> 脚本是软件包 <a href="https://archlinux.org/packages/?name=arch-install-scripts" target="_blank" rel="noreferrer"><code>arch-install-scripts</code></a> 的一部分，但本质上只是在 <code>chroot</code> 命令的基础上添加了一些功能，简化了“搬家”的流程。其类似（注意，只是类似，<code>arch-chroot</code> 还会做一些其它的工作，安装时请使用 <code>arch-chroot</code>）以下命令：</p><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/proc</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sysfs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/sys</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/dev</span></span>
<span class="line"><span style="color:#FFCB6B;">chroot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>chroot</code> 顾名思义，就是 <strong>ch</strong>ange <strong>root</strong> 的意思。<code>chroot</code> 命令把根目录换成指定的目录。通常，切换根目录一般的目的是为了系统维护，例如重装引导程序或者重置遗忘的密码；而在安装时则是为了安装（大雾 🌫️。在安装过程中，新的根目录就是 <code>/mnt</code>。这个过程就好比从原来的家搬到了新的家一样，是不是这样理解起来就简单一点了呢？</p><h2 id="🥙-杂七杂八" tabindex="-1">🥙 杂七杂八 <a class="header-anchor" href="#🥙-杂七杂八" aria-hidden="true">#</a></h2><p>其它琐碎的问题不在一一展开叙述，这里通过列表统一说明：</p><ol><li>EFI 分区（又称 esp 分区）不一定要挂载在 <code>/boot</code> 目录下；也可以是 <code>/efi</code> 或者其他非常见路径（当然一般推荐挂载在 <code>/boot</code> 下，方便引导程序读取同样在这个目录下的内核、微码等启动系统的必要文件）</li><li>若为<strong>联想小新 Pro14 / YOGA 14s 2021</strong> 机型，发现安装前后键盘都无法正常工作。此时安装时请使用外接键盘。为了解决该问题，在 <a href="./basic-install.html#_17-安装引导程序">17. 安装引导程序</a> 步骤中编辑 <code>/etc/default/grub</code> 文件时添加额外的 GRUB 参数 —— 在 <code>GRUB_CMDLINE_LINUX_DEFAULT</code> 这一行中添加参数 <code>i8042.dumbkbd</code></li></ol><p>修改后复查：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">head</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/default/grub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出如下：</p><div class="language-grub line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">grub</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># GRUB boot loader configuration</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">GRUB_DEFAULT_SUBMENU=y</span></span>
<span class="line"><span style="color:#A6ACCD;">GRUB_DEFAULT=saved</span></span>
<span class="line"><span style="color:#A6ACCD;">GRUB_SAVEDEFAULT=true</span></span>
<span class="line"><span style="color:#A6ACCD;">GRUB_TIMEOUT=2</span></span>
<span class="line"><span style="color:#A6ACCD;">GRUB_DISTRIBUTOR=&quot;Arch&quot;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">GRUB_CMDLINE_LINUX_DEFAULT=&quot;loglevel=5 nowatchdog i8042.dumbkbd&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">GRUB_CMDLINE_LINUX=&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,63),t=[o];function c(r,i,d,C,b,h){return e(),n("div",null,t)}const A=a(p,[["render",c]]);export{m as __pageData,A as default};
