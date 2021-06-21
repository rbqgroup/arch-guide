(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[130],{409:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-5b5d34f0",path:"/advanced/system-ctl.html",title:"合格的系统管理员",lang:"zh-CN",frontmatter:{title:"合格的系统管理员"},excerpt:"",headers:[{level:3,title:"🐱‍🚀 路漫漫其修远兮，吾将上下而求索",slug:"🐱‍🚀-路漫漫其修远兮-吾将上下而求索",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"必须掌握的 Linux 知识",slug:"必须掌握的-linux-知识",children:[]},{level:2,title:"终端操作基础",slug:"终端操作基础",children:[]},{level:2,title:"Pacman 包管理",slug:"pacman-包管理",children:[{level:3,title:"Octopi",slug:"octopi",children:[]}]},{level:2,title:"终端编辑器 vim 的使用",slug:"终端编辑器-vim-的使用",children:[]},{level:2,title:"系统服务的介绍与操作",slug:"系统服务的介绍与操作",children:[]},{level:2,title:"硬件信息检测",slug:"硬件信息检测",children:[{level:3,title:"磁盘检测",slug:"磁盘检测",children:[]},{level:3,title:"CPU 与显卡",slug:"cpu-与显卡",children:[]}]},{level:2,title:"磁盘空间清理",slug:"磁盘空间清理",children:[{level:3,title:"清理 yay 缓存",slug:"清理-yay-缓存",children:[]},{level:3,title:"清理软件包缓存及孤立包",slug:"清理软件包缓存及孤立包",children:[]},{level:3,title:"考虑快照大小",slug:"考虑快照大小",children:[]}]},{level:2,title:"文件传输与系统备份",slug:"文件传输与系统备份",children:[]},{level:2,title:"文件解压缩",slug:"文件解压缩",children:[]},{level:2,title:"制作 win10 启动盘",slug:"制作-win10-启动盘",children:[]}],filePathRelative:"advanced/system-ctl.md",git:{updatedTime:1624293997e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:3}]}}},9138:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>Sn});var a=e(6252);const l=(0,a.Wm)("h1",{id:"linux-日常操作与基础知识"},[(0,a.Wm)("a",{class:"header-anchor",href:"#linux-日常操作与基础知识"},"#"),(0,a.Uk)(" Linux 日常操作与基础知识")],-1),c=(0,a.Wm)("h3",{id:"🐱‍🚀-路漫漫其修远兮-吾将上下而求索"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🐱‍🚀-路漫漫其修远兮-吾将上下而求索"},"#"),(0,a.Uk)(" 🐱‍🚀 路漫漫其修远兮，吾将上下而求索")],-1),i=(0,a.Wm)("p",null,"阅读完 🌱 新手上路章节，你的系统已完全可以使用",-1),o=(0,a.Uk)("KDE 桌面环境提供了强大的 "),p={href:"https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("GUI"),r=(0,a.Uk)(" 以供普通用户使用"),m=(0,a.Wm)("p",null,"绝大多数系统设置项可在 KDE 系统设置中找到（就像 windows 一样！）",-1),d=(0,a.Wm)("p",null,"但如果想要游刃有余的掌控你的系统，你还需要阅读掌握本小节的内容",-1),u=(0,a.Wm)("h3",{id:"🔖-这一节将会讨论"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论"},"#"),(0,a.Uk)(" 🔖 这一节将会讨论：")],-1),h={class:"table-of-contents"},b=(0,a.Uk)("🐱‍🚀 路漫漫其修远兮，吾将上下而求索"),k=(0,a.Uk)("🔖 这一节将会讨论："),g=(0,a.Uk)("必须掌握的 Linux 知识"),v=(0,a.Uk)("终端操作基础"),f=(0,a.Uk)("Pacman 包管理"),W=(0,a.Uk)("Octopi"),x=(0,a.Uk)("终端编辑器 vim 的使用"),y=(0,a.Uk)("系统服务的介绍与操作"),w=(0,a.Uk)("硬件信息检测"),U=(0,a.Uk)("磁盘检测"),_=(0,a.Uk)("CPU 与显卡"),S=(0,a.Uk)("磁盘空间清理"),E=(0,a.Uk)("清理 yay 缓存"),L=(0,a.Uk)("清理软件包缓存及孤立包"),q=(0,a.Uk)("考虑快照大小"),C=(0,a.Uk)("文件传输与系统备份"),D=(0,a.Uk)("文件解压缩"),P=(0,a.Uk)("制作 win10 启动盘"),R=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>如果你想进一步详细了解本文各部分的详细知识，可以点击在各个小节给出的拓展链接进行学习。</p><p>如果你不想详细了解，本章介绍的知识也足够你来应付日常的使用。</p></div><h2 id="必须掌握的-linux-知识"><a class="header-anchor" href="#必须掌握的-linux-知识">#</a> 必须掌握的 Linux 知识</h2><p>此处只介绍最基本的，最必要的 Linux 知识点与小技巧。</p><ol><li>在 Linux 中，文件目录结构与 windows 完全不同。windows 存在 C 盘、D 盘等盘符，而在 Linux 中不存在这些划分。最上层的目录是根目录，路径为 <code>/</code> ，并以一个树形结构从此向下一级一级区分</li><li>对于 Linux 的树形文件结构，存在相对路径与绝对路径之分： <ul><li>绝对路径代表从根目录 <code>/</code> 开始的完整路径： <ul><li>比如 <code>/home/myusername/Download</code></li></ul></li><li>相对路径代表从当前目录或当前目录的上级目录，到目标目录的一个部分路径： <ul><li><code>.</code> 代表当前目录</li><li><code>..</code> 代表当前目录的上级目录</li><li>比如当前你所在的目录为 <code>/home/myusername</code>，那么绝对路径下的 <code>/home/myusername/Download</code> 文件夹的相对路径即为 <code>./Download</code></li><li>比如你当前所在的路径为<code>/home/myusername/Download</code>，向上寻找到 <code>/home/myusername/Desktop</code> 的相对路径即为 <code>../Desktop</code></li></ul></li></ul></li><li>简单来说，Linux 中存在两类用户： <ul><li>第一类用户即为 root 用户，也称为超级用户，它拥有系统中最高的权限</li><li>第二类用户就是除了 root 用户之外的普通用户，它们可以拥有不同等级的权限 使用 root 权限时需要十分小心</li></ul></li><li>理论上来说，任何图形化界面中的操作都可以用对应的命令行命令完成。如果你打开某个程序报错，不妨试试找到它的对应启动命令，在终端中执行此命令，并观察它运行时的错误日志输出，查阅相关资料，解决问题</li></ol><h2 id="终端操作基础"><a class="header-anchor" href="#终端操作基础">#</a> 终端操作基础</h2><p>如果想要熟练掌握 Linux，就必须掌握终端的常见命令与使用方式。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> /some_path <span class="token comment"># 查看某个文件夹下的文件与子文件夹。/ 代表根目录，是 Linux 最顶端的路径，以此开头则为绝对路径</span>\n<span class="token builtin class-name">pwd</span> <span class="token comment"># 查看当前终端所在路径</span>\n<span class="token builtin class-name">cd</span> /home/testuser <span class="token comment"># 切换目录命令。将当前终端切换到某一个路径下</span>\n<span class="token function">cp</span> ./a.py ./b.py <span class="token comment"># 复制命令。将当前路径下的 a.py 复制一份并命名为 b.py。./ 代表当前文件夹所在路径，以此开头则为相对路径</span>\n<span class="token function">cp</span> -r ./a ./b <span class="token comment"># 复制整体文件夹</span>\n<span class="token function">rm</span> b.py <span class="token comment"># 删除命令。删除 b.py</span>\n<span class="token function">mv</span> a.py b.py <span class="token comment"># 移动（重命名）命令。将 a.py 更名为 b.py</span>\n<span class="token function">mkdir</span> my_folder <span class="token comment"># 新建名为 my_folder 的文件夹</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',7),B=(0,a.Uk)("⛓ 拓展链接："),T={href:"https://archlinuxstudio.github.io/ShellTutorial/#/",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("Linux 命令行与 Shell 脚本教程"),F=(0,a.uE)('<h2 id="pacman-包管理"><a class="header-anchor" href="#pacman-包管理">#</a> Pacman 包管理</h2><p>在 archlinux 上安装的软件都通过 Pacman 来进行管理。</p><p>你可以把它理解为一个软件管理器，可以进行软件的安装、删除、查询等。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S package_name <span class="token comment"># 安装软件包</span>\n<span class="token function">sudo</span> pacman -Syyu <span class="token comment"># 升级系统。yy：标记强制刷新、u：标记升级动作</span>\n<span class="token function">sudo</span> pacman -R package_name <span class="token comment"># 删除软件包</span>\n<span class="token function">sudo</span> pacman -Rs package_name <span class="token comment"># 删除软件包，及其所有没有被其他已安装软件包使用的依赖包</span>\n<span class="token function">sudo</span> pacman -Qdt <span class="token comment"># 找出孤立包。Q：查询本地软件包数据库、d：标记依赖包、t：标记不需要的包、dt：合并标记孤立包</span>\n<span class="token function">sudo</span> pacman -Rs <span class="token variable"><span class="token variable">$(</span>pacman -Qtdq<span class="token variable">)</span></span> <span class="token comment"># 删除孤立软件包</span>\n<span class="token function">sudo</span> pacman -Fy <span class="token comment"># 更新命令查询文件列表数据库</span>\n<span class="token function">sudo</span> pacman -F xxx <span class="token comment"># 当不知道某个命令属于哪个包时，用来查询某个 xxx 命令属于哪个包</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="octopi"><a class="header-anchor" href="#octopi">#</a> Octopi</h3>',5),O=(0,a.Uk)("此外，还可以使用图形化的包管理软件（Pacman / AUR 的图形前端）"),G={href:"https://github.com/aarnt/octopi",target:"_blank",rel:"noopener noreferrer"},z=(0,a.Uk)("Octopi"),N=(0,a.Wm)("sup",null,"aur",-1),Q=(0,a.Uk)("。"),Y=(0,a.Wm)("p",null,"安装 Octopi：",-1),I=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S octopi\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),K=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S octopi-git\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),$=(0,a.Uk)("⛓ 拓展链接："),j={href:"https://wiki.archlinux.org/index.php/Pacman",target:"_blank",rel:"noopener noreferrer"},H=(0,a.Uk)("archWiki 相关内容"),M=(0,a.uE)('<h2 id="终端编辑器-vim-的使用"><a class="header-anchor" href="#终端编辑器-vim-的使用">#</a> 终端编辑器 vim 的使用</h2><p>你需要掌握一个能在终端中进行文本编辑的软件，这里介绍 vim。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> hello.txt <span class="token comment"># 创建并编辑名为 hello.txt 的文件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>你可以看到进入了一个空的界面。</p><ul><li>此时你处在 vim 的 <code>命令模式</code>。在 <code>命令模式</code> 下，可以用一些快捷指令来对文本进行操作。</li><li>现在我们输入 <code>a</code> 进入 vim 的 <code>编辑模式</code>，此时输入任意文本，即可进行编辑。</li><li>在输入完成后，我们按下 Esc 键，即可从 <code>编辑模式</code> 退出到 <code>命令模式</code>。此时输入 <code>:wq</code> 即可保存并退出 vim。</li></ul><p>下面介绍一些在命令模式下常用的命令：</p><ul><li><code>:wq</code> —— 保存退出</li><li><code>:q!</code> —— 不保存，强制退出</li><li><code>dd</code> —— 删除一行</li><li><code>2dd</code> —— 删除两行</li><li><code>gg</code> —— 回到文本第一行</li><li><code>shift</code> + <code>g</code> —— 转到文本最后一行</li><li><code>/xxx</code> —— 在文中搜索 xxx 内容。回车 <code>Enter</code> 搜索，按 <code>n</code> 键转到下一个</li><li><code>?xxx</code> —— 反向搜索</li></ul><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>可以在终端中输入以下命令来学习完整的 vim 教程：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vimtutor\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h2 id="系统服务的介绍与操作"><a class="header-anchor" href="#系统服务的介绍与操作">#</a> 系统服务的介绍与操作</h2><p>Linux 系统中运行着各种服务，你需要掌握查询，变更服务状态的方式。同时对创建服务最好也有大致的了解。</p><p>这里讲述命令 <code>systemctl</code> 的用法。以 <code>dhcpcd</code> 服务为例：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start dhcpcd <span class="token comment"># 启动服务</span>\nsystemctl stop dhcpcd <span class="token comment"># 停止服务</span>\nsystemctl restart dhcpcd <span class="token comment"># 重启服务</span>\nsystemctl reload dhcpcd <span class="token comment"># 重新加载服务以及它的配置文件</span>\nsystemctl status dhcpcd <span class="token comment"># 查看服务状态</span>\nsystemctl <span class="token builtin class-name">enable</span> dhcpcd <span class="token comment"># 设置开机启动服务</span>\nsystemctl <span class="token builtin class-name">enable</span> --now dhcpcd <span class="token comment"># 设置服务为开机启动并立即启动这个单元</span>\nsystemctl disable dhcpcd <span class="token comment"># 取消开机自动启动</span>\nsystemctl daemon-reload dhcpcd <span class="token comment"># 重新载入 systemd 配置。扫描新增或变更的服务单元、不会重新加载变更的配置。加载变更的配置用 reload</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',12),J=(0,a.Wm)("p",null,"⛓ 拓展链接：",-1),V={href:"https://wiki.archlinux.org/index.php/Systemd#Basic_systemctl_usage",target:"_blank",rel:"noopener noreferrer"},X=(0,a.Uk)("archWiki 相关内容"),Z={href:"https://www.freedesktop.org/software/systemd/man/systemd.service.html#Examples",target:"_blank",rel:"noopener noreferrer"},nn=(0,a.Uk)("systemd 配置文件样例解释"),sn=(0,a.Wm)("h2",{id:"硬件信息检测"},[(0,a.Wm)("a",{class:"header-anchor",href:"#硬件信息检测"},"#"),(0,a.Uk)(" 硬件信息检测")],-1),en=(0,a.Wm)("h3",{id:"磁盘检测"},[(0,a.Wm)("a",{class:"header-anchor",href:"#磁盘检测"},"#"),(0,a.Uk)(" 磁盘检测")],-1),an=(0,a.Uk)("使用 "),ln={href:"https://archlinux.org/packages/extra/x86_64/smartmontools/",target:"_blank",rel:"noopener noreferrer"},cn=(0,a.Uk)("smartmontools"),on=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S smartmontools\n<span class="token function">sudo</span> smartctl -A /dev/sda   <span class="token comment">#硬盘</span>\n<span class="token function">sudo</span> smartctl -d sat -A /dev/sdc <span class="token comment">#usb设备</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>磁盘空间分析：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">df</span> -h <span class="token comment"># 以人类可读格式显示文件系统磁盘使用情况统计</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),pn=(0,a.Uk)("使用 "),tn={href:"https://archlinux.org/packages/extra/x86_64/filelight/",target:"_blank",rel:"noopener noreferrer"},rn=(0,a.Uk)("Filelight"),mn=(0,a.uE)('<p>图形化界面直观查看磁盘占用情况</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S filelight\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="cpu-与显卡"><a class="header-anchor" href="#cpu-与显卡">#</a> CPU 与显卡</h3><p>如下两款是目前找到的，最佳的图形化查看 cpu 与显卡信息的软件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S cpu-x\nyay -S gpu-viewer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>系统完整信息:<br> 使用 dmidecode 可以完整查看系统绝大部分硬件信息，包括较难得到的内存频率等。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S dmidecode\n<span class="token function">sudo</span> dmidecode\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="磁盘空间清理"><a class="header-anchor" href="#磁盘空间清理">#</a> 磁盘空间清理</h2><p>有时需要对磁盘空间进行清理，以免磁盘空间不足，保证系统的正常运行。首先应结合上文对磁盘空间占用情况进行分析，随后采取对应的有效应对措施。下面介绍一些通用措施。</p><h3 id="清理-yay-缓存"><a class="header-anchor" href="#清理-yay-缓存">#</a> 清理 <code>yay</code> 缓存</h3><p>如果使用 <code>yay</code> 来安装 AUR 中的软件包的话，可以清理 <code>yay</code> 的缓存目录。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf ~/.cache/yay\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="清理软件包缓存及孤立包"><a class="header-anchor" href="#清理软件包缓存及孤立包">#</a> 清理软件包缓存及孤立包</h3><p>执行以下命令清理软件包文件缓存及删除孤立软件包。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -Rns <span class="token variable"><span class="token variable">$(</span>pacman -Qtdq<span class="token variable">)</span></span> <span class="token comment"># 如上文所述，删除孤立软件包</span>\npaccache -r <span class="token comment"># 删除已安装和未安装包的所有缓存版本，但最近 3 个版本除外</span>\n<span class="token function">sudo</span> pacman -Sc <span class="token comment"># 删除当前未安装的所有缓存包和未使用的同步数据库（可选）</span>\n<span class="token function">sudo</span> pacman -Scc <span class="token comment"># 从缓存中删除所有文件，这是最激进的方法，不会在缓存文件夹中留下任何内容（一般不使用）</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="考虑快照大小"><a class="header-anchor" href="#考虑快照大小">#</a> 考虑快照大小</h3><p>此外，若使用了 RSYNC 方式的 <code>Timeshift</code> 快照，还应考虑 <code>Timeshift</code> 快照占用情况。一般来说 RSYNC 方式的快照大小略大于当前实际使用大小。因为虽然 RSYNC 方式的快照是增量的，但历史最久远的快照依然是完整备份，随后是增量的。而简单来说增量大小取决于历史最久远的快照和最新快照之间的差异。通过 <code>Timeshift</code> 自动清理历史最久远的快照是简单有效的方法。</p><h2 id="文件传输与系统备份"><a class="header-anchor" href="#文件传输与系统备份">#</a> 文件传输与系统备份</h2>',18),dn=(0,a.Uk)("有一点 Linux 经验的同学应该知道"),un={href:"https://wiki.archlinux.org/index.php/SCP_and_SFTP#Secure_copy_protocol_(SCP)",target:"_blank",rel:"noopener noreferrer"},hn=(0,a.Uk)("scp"),bn=(0,a.Uk)("这个命令。它常被用来在服务器间传输文件。但是目前它应该被更现代的工具"),kn={href:"https://wiki.archlinux.org/index.php/Rsync",target:"_blank",rel:"noopener noreferrer"},gn=(0,a.Uk)("rsync"),vn=(0,a.Uk)("替代，其拥有即时压缩，差量传输等新特性。同时，"),fn=(0,a.Wm)("code",null,"rsync",-1),Wn=(0,a.Uk)("也被用来进行备份操作。"),xn=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rsync</span> foo.txt me@server:/home/me/   <span class="token comment"># 最基础的复制文件 与scp的操作完全相同</span>\n<span class="token function">rsync</span> -a bar/ me@server:/home/me/   <span class="token comment"># -a 标记实现目录复制等 比scp -r 能更好的处理符号链接等情况</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',1),yn=(0,a.Uk)("关于全盘备份，请阅读"),wn={href:"https://wiki.archlinux.org/index.php/Rsync#Full_system_backup",target:"_blank",rel:"noopener noreferrer"},Un=(0,a.Uk)("官方文档"),_n=(0,a.uE)('<h2 id="文件解压缩"><a class="header-anchor" href="#文件解压缩">#</a> 文件解压缩</h2><p>除了众所周知的 tar 命令，我们在之前安装过的 ark 包可以配合 dolphin 文件管理器轻松的右键直接解压缩，其可选依赖提供了各个压缩格式的支持，可以自行选择安装。需要注意的是解压 windows 下的压缩包，可能会乱码。使用 unar 可以避免这个问题。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S unarchiver\nunar xxx.zip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="制作-win10-启动盘"><a class="header-anchor" href="#制作-win10-启动盘">#</a> 制作 win10 启动盘</h2><p>有时你可能在 Linux 下需要制作 win10 的启动盘。在以往，在 Linux 下制作一个 win10 启动盘还是很简单的，但是随着近几年微软的更新，其 iso 安装镜像中存在一个名为<code>install.wim</code>的文件，其大小已经超出了 4GB，超出了 fat32 所要求的单个文件最大 4GB 的限制。这使得必须用额外的步骤才能制作一个启动盘。这里依旧使用 fat32 格式是因为其兼容性是最好的，ntfs 的 uefi 启动盘很多情况下不被识别。</p><p>首先和基础安装中的部分步骤类似，首先用 parted 命令创建 U 盘的分区 label 为 gpt。接下来用 cfdisk 命令创建新分区，在 Type 中选择 Microsoft basic data。接下来使用 mkfs.vfat 命令格式化所创建的分区。这样 U 盘就准备好了。</p><p>接下来下载 win10 的 iso 镜像并解压。在某些文件管理器中，你会得到如下错误。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>This disc contains a <span class="token string">&quot;UDF&quot;</span> <span class="token function">file</span> system and requires an operating system\nthat supports the ISO-13346 <span class="token string">&quot;UDF&quot;</span> <span class="token function">file</span> system specification.w\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这种情况下则需要手动挂载并复制出来</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mount</span> -o loop /path/of/windows10.iso /mnt/your/mountpoint\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>得到复制出来的文件后，最后要进行的就是压缩 install.wim 文件，这里需要首先安装一个包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S wimlib\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>接下来进行压缩，这一步会持续较长时间，耐心等待。完成后可以看到文件已经被压缩到了 3.x GB。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> wimlib-imagex optimize install.wim --solid\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>最后把全部文件复制到 U 盘中即可。</p>',15),Sn={render:function(n,s){const e=(0,a.up)("OutboundLink"),Sn=(0,a.up)("RouterLink"),En=(0,a.up)("CodeGroupItem"),Ln=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)("blockquote",null,[c,i,(0,a.Wm)("p",null,[o,(0,a.Wm)("a",p,[t,(0,a.Wm)(e)]),r]),m,d]),(0,a.Wm)("blockquote",null,[u,(0,a.Wm)("nav",h,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#🐱‍🚀-路漫漫其修远兮-吾将上下而求索"},{default:(0,a.w5)((()=>[b])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#🔖-这一节将会讨论"},{default:(0,a.w5)((()=>[k])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#必须掌握的-linux-知识"},{default:(0,a.w5)((()=>[g])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#终端操作基础"},{default:(0,a.w5)((()=>[v])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#pacman-包管理"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#octopi"},{default:(0,a.w5)((()=>[W])),_:1})])])]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#终端编辑器-vim-的使用"},{default:(0,a.w5)((()=>[x])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#系统服务的介绍与操作"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#硬件信息检测"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#磁盘检测"},{default:(0,a.w5)((()=>[U])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#cpu-与显卡"},{default:(0,a.w5)((()=>[_])),_:1})])])]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#磁盘空间清理"},{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#清理-yay-缓存"},{default:(0,a.w5)((()=>[E])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#清理软件包缓存及孤立包"},{default:(0,a.w5)((()=>[L])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#考虑快照大小"},{default:(0,a.w5)((()=>[q])),_:1})])])]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#文件传输与系统备份"},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#文件解压缩"},{default:(0,a.w5)((()=>[D])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(Sn,{to:"#制作-win10-启动盘"},{default:(0,a.w5)((()=>[P])),_:1})])])])]),R,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[B,(0,a.Wm)("a",T,[A,(0,a.Wm)(e)])])]),F,(0,a.Wm)("p",null,[O,(0,a.Wm)("a",G,[z,(0,a.Wm)(e)]),N,Q]),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[Y,(0,a.Wm)(Ln,null,{default:(0,a.w5)((()=>[(0,a.Wm)(En,{title:"aur"},{default:(0,a.w5)((()=>[I])),_:1}),(0,a.Wm)(En,{title:"aur（git）"},{default:(0,a.w5)((()=>[K])),_:1})])),_:1})])]),(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[$,(0,a.Wm)("a",j,[H,(0,a.Wm)(e)])])]),M,(0,a.Wm)("blockquote",null,[J,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",V,[X,(0,a.Wm)(e)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",Z,[nn,(0,a.Wm)(e)])])])]),sn,en,(0,a.Wm)("p",null,[an,(0,a.Wm)("a",ln,[cn,(0,a.Wm)(e)])]),on,(0,a.Wm)("p",null,[pn,(0,a.Wm)("a",tn,[rn,(0,a.Wm)(e)])]),mn,(0,a.Wm)("p",null,[dn,(0,a.Wm)("a",un,[hn,(0,a.Wm)(e)]),bn,(0,a.Wm)("a",kn,[gn,(0,a.Wm)(e)]),vn,fn,Wn]),xn,(0,a.Wm)("p",null,[yn,(0,a.Wm)("a",wn,[Un,(0,a.Wm)(e)])]),_n],64)}}}}]);