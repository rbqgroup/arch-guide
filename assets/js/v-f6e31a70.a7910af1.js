(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[543],{2464:(l,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>n});const n={key:"v-f6e31a70",path:"/rookie/transparent.html",title:"透明代理",lang:"zh-CN",frontmatter:{title:"透明代理",sidebarDepth:2,next:"/advanced/optional-cfg-1.md"},excerpt:"",headers:[{level:3,title:"🕊 纵使千山多万壑，犹有青鸾踏云间",slug:"🕊-纵使千山多万壑-犹有青鸾踏云间",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"鉴于Qv2ray原项目已停止开发，新的版本还不够完善，有魔法上网需求者建议使用v2rayA替代Qv2ray",slug:"鉴于qv2ray原项目已停止开发-新的版本还不够完善-有魔法上网需求者建议使用v2raya替代qv2ray",children:[{level:3,title:"安装v2ray和v2rayA:",slug:"安装v2ray和v2raya",children:[]},{level:3,title:"配置v2raya",slug:"配置v2raya",children:[]}]},{level:2,title:"1. 安装 Qv2ray 和 V2Ray / Xray 内核",slug:"_1-安装-qv2ray-和-v2ray-xray-内核",children:[]},{level:2,title:"2. 配置 Qv2ray",slug:"_2-配置-qv2ray",children:[]},{level:2,title:"3. 配置订阅",slug:"_3-配置订阅",children:[]},{level:2,title:"4. 通过系统代理方式尝试连接",slug:"_4-通过系统代理方式尝试连接",children:[]},{level:2,title:"5. 安装 cgproxy",slug:"_5-安装-cgproxy",children:[]},{level:2,title:"6. 配置 Qv2ray 透明代理设置",slug:"_6-配置-qv2ray-透明代理设置",children:[]},{level:2,title:"7. 配置 cgproxy",slug:"_7-配置-cgproxy",children:[]},{level:2,title:"8. 配置可用的 DNS 服务",slug:"_8-配置可用的-dns-服务",children:[]},{level:2,title:"9. 启动 cgproxy 服务",slug:"_9-启动-cgproxy-服务",children:[]},{level:2,title:"其它代理方法（非透明代理）",slug:"其它代理方法-非透明代理",children:[{level:3,title:"系统代理",slug:"系统代理",children:[]},{level:3,title:"应用自身的代理配置",slug:"应用自身的代理配置",children:[]},{level:3,title:"export",slug:"export",children:[]},{level:3,title:"proxychains-ng",slug:"proxychains-ng",children:[]}]}],filePathRelative:"rookie/transparent.md",git:{updatedTime:1650072388e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:4},{name:"Sirius Su",email:"2943048735@qq.com",commits:1},{name:"六六",email:"hexsixology@gmail.com",commits:1}]}}},6103:(l,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>Ja});var n=a(6252);const s=a.p+"assets/img/transparent_qv2ray.80b15094.png",m=a.p+"assets/img/transparent_cfg-1.1590b34f.png",r=a.p+"assets/img/transparent_cfg-2.f0dc98a3.png",t=a.p+"assets/img/transparent_cfg-3.7038c9ec.png",c=a.p+"assets/img/transparent_cfg-4.3417c442.png",u=a.p+"assets/img/transparent_cfg-5.66bbb60f.png",i=a.p+"assets/img/transparent_cfg-6.9dcf2a3b.png",W=a.p+"assets/img/transparent_connect-1.0493ef28.png",o=a.p+"assets/img/transparent_connect-2.de57acb4.png",d=a.p+"assets/img/transparent_connect-3.1d2ba67a.png",p=a.p+"assets/img/transparent_transparent-qv2ray-1.bd67535d.png",g=a.p+"assets/img/transparent_transparent-qv2ray-2.8e81e767.png",k=a.p+"assets/img/transparent_cgproxy.31f3edf1.png",h=a.p+"assets/img/transparent_system-cfg-1.09ee522c.png",y=a.p+"assets/img/transparent_system-cfg-2.8d626e88.png",v=a.p+"assets/img/transparent_system-cfg-3.afcb4d1f.png",U=a.p+"assets/img/transparent_cgproxy-start.a640f6e8.png",b=a.p+"assets/img/transparent_check.41b45a1e.png",x=a.p+"assets/img/firefox.f551ccf3.png",f=a.p+"assets/img/telegram-1.30ef4e3a.png",_=a.p+"assets/img/telegram-2.3774e3ad.png",Q=a.p+"assets/img/vscode.fbc49656.png",w=a.p+"assets/img/proxychains-1.834c05ee.png",q=a.p+"assets/img/proxychains-2.14721172.png",S=a.p+"assets/img/proxychains-3.8390b8aa.png",E=(0,n.Wm)("h1",{id:"archlinux-透明代理",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#archlinux-透明代理","aria-hidden":"true"},"#"),(0,n.Uk)(" archlinux 透明代理")],-1),A=(0,n.Wm)("blockquote",null,[(0,n.Wm)("h3",{id:"🕊-纵使千山多万壑-犹有青鸾踏云间",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#🕊-纵使千山多万壑-犹有青鸾踏云间","aria-hidden":"true"},"#"),(0,n.Uk)(" 🕊 纵使千山多万壑，犹有青鸾踏云间")]),(0,n.Wm)("p",null,[(0,n.Uk)("全球化浪潮无法阻挡，我们常常有访问一些资料的客观需求。但有的时候因为一些因素往往导致无法正常访问（包括但不限于"),(0,n.Wm)("strong",null,"终端中下载文件特别慢、无法访问部分网站、部分应用无法正常使用"),(0,n.Uk)("等）。虽然前路千沟万壑，但无法阻挡我们前行的脚步。本节我们通过设置透明代理解决这一问题")])],-1),R=(0,n.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,n.Uk)(" 🔖 这一节将会讨论：")],-1),D={class:"custom-container details"},V=(0,n.Wm)("summary",null,"目录",-1),B={class:"table-of-contents"},X=(0,n.Uk)("# 🕊 纵使千山多万壑，犹有青鸾踏云间"),C=(0,n.Uk)("# 🔖 这一节将会讨论："),F=(0,n.Uk)("# 鉴于Qv2ray原项目已停止开发，新的版本还不够完善，有魔法上网需求者建议使用v2rayA替代Qv2ray"),N=(0,n.Uk)("# 安装v2ray和v2rayA:"),P=(0,n.Uk)("# 配置v2raya"),T=(0,n.Uk)("# 1. 安装 Qv2ray 和 V2Ray / Xray 内核"),O=(0,n.Uk)("# 2. 配置 Qv2ray"),L=(0,n.Uk)("# 3. 配置订阅"),G=(0,n.Uk)("# 4. 通过系统代理方式尝试连接"),K=(0,n.Uk)("# 5. 安装 cgproxy"),j=(0,n.Uk)("# 6. 配置 Qv2ray 透明代理设置"),I=(0,n.Uk)("# 7. 配置 cgproxy"),z=(0,n.Uk)("# 8. 配置可用的 DNS 服务"),Y=(0,n.Uk)("# 9. 启动 cgproxy 服务"),H=(0,n.Uk)("# 其它代理方法（非透明代理）"),M=(0,n.Uk)("# 系统代理"),J=(0,n.Uk)("# 应用自身的代理配置"),Z=(0,n.Uk)("# export"),$=(0,n.Uk)("# proxychains-ng"),ll=(0,n.Wm)("div",{class:"custom-container danger"},[(0,n.Wm)("p",{class:"custom-container-title"},"☢️ 警告"),(0,n.Wm)("p",null,[(0,n.Wm)("em",null,"第六条　计算机信息网络直接进行国际联网，必须使用邮电部国家公用电信网提供的国际出入口信道。")]),(0,n.Wm)("p",null,[(0,n.Wm)("em",null,"任何单位和个人不得自行建立或者使用其他信道进行国际联网。")]),(0,n.Wm)("p",null,"-- 中华人民共和国计算机信息网络国际联网管理暂行规定")],-1),el={id:"鉴于qv2ray原项目已停止开发-新的版本还不够完善-有魔法上网需求者建议使用v2raya替代qv2ray",tabindex:"-1"},al=(0,n.Wm)("a",{class:"header-anchor",href:"#鉴于qv2ray原项目已停止开发-新的版本还不够完善-有魔法上网需求者建议使用v2raya替代qv2ray","aria-hidden":"true"},"#",-1),nl=(0,n.Uk)(" 鉴于Qv2ray原项目已"),sl={href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"},ml=(0,n.Uk)("停止开发"),rl=(0,n.Uk)("，新的版本还不够完善，有魔法上网需求者建议使用v2rayA替代Qv2ray"),tl=(0,n.Wm)("p",null,"v2rayA的优势：",-1),cl=(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,"支持一键开启全局代理，配置方便"),(0,n.Wm)("li",null,"客户端运行在浏览器中，轻量")],-1),ul=(0,n.Wm)("h3",{id:"安装v2ray和v2raya",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#安装v2ray和v2raya","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装v2ray和v2rayA:")],-1),il=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" pacman -S v2ray v2raya\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Wl=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" pacman -S v2ray\nyay -S aur/v2raya\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br"),(0,n.Wm)("span",{class:"line-number"},"2"),(0,n.Wm)("br")])],-1),ol=(0,n.Wm)("h3",{id:"配置v2raya",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#配置v2raya","aria-hidden":"true"},"#"),(0,n.Uk)(" 配置v2raya")],-1),dl=(0,n.Wm)("p",null,"安装后启动服务：",-1),pl=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" systemctl "),(0,n.Wm)("span",{class:"token builtin class-name"},"enable"),(0,n.Uk)(" --now v2raya\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),gl=(0,n.Uk)("随后在开始菜单中搜索 v2raya，点击即可打开浏览器页面。在其中加入订阅(没有魔法上网结点？请参考"),kl={href:"https://archlinuxstudio.github.io/ArchLinuxTutorial/#/rookie/fxckGFW?id=%e5%b7%b2%e6%9c%89%e7%a7%91%e5%ad%a6%e4%b8%8a%e7%bd%91%e7%9a%84%e8%8a%82%e7%82%b9%e7%9a%84%e6%83%85%e5%86%b5",target:"_blank",rel:"noopener noreferrer"},hl=(0,n.Uk)("原文档相关内容"),yl=(0,n.Uk)(")。在设置中建议开启全局透明代理(选择"),vl=(0,n.Wm)("code",null,"大陆白名单",-1),Ul=(0,n.Uk)(")，同时开启防止 DNS 劫持功能，否则可能会拿不到被 dns 污染的资源(如 github raw)。"),bl=(0,n.Wm)("h2",{id:"_1-安装-qv2ray-和-v2ray-xray-内核",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_1-安装-qv2ray-和-v2ray-xray-内核","aria-hidden":"true"},"#"),(0,n.Uk)(" 1. 安装 Qv2ray 和 V2Ray / Xray 内核")],-1),xl=(0,n.Uk)("通过以下命令安装 "),fl={href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"},_l=(0,n.Uk)("Qv2ray"),Ql=(0,n.Wm)("sup",null,"cn",-1),wl=(0,n.Uk)(" 和 "),ql={href:"https://archlinux.org/packages/?sort=&q=v2ray&maintainer=&flagged=",target:"_blank",rel:"noopener noreferrer"},Sl=(0,n.Uk)("V2Ray"),El=(0,n.Uk)(" / "),Al={href:"https://github.com/XTLS/Xray-core",target:"_blank",rel:"noopener noreferrer"},Rl=(0,n.Uk)("Xray"),Dl=(0,n.Wm)("sup",null,"cn",-1),Vl=(0,n.Uk)(" 内核："),Bl=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" pacman -S qv2ray-dev-git v2ray\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Xl=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" pacman -S qv2ray-dev-git xray\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Cl=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,"若安装 V2Ray 核心时报错，请尝试更换镜像源。")],-1),Fl=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:s,alt:"Qv2ray"})],-1),Nl=(0,n.Wm)("blockquote",null,[(0,n.Wm)("h4",{id:"📑-相关资料-qv2ray",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#📑-相关资料-qv2ray","aria-hidden":"true"},"#"),(0,n.Uk)(" 📑 相关资料：Qv2ray")]),(0,n.Wm)("p",null,"Qv2ray 是一个使用 Qt 编写的跨平台的 v2ray 图形前端。")],-1),Pl=(0,n.Wm)("h2",{id:"_2-配置-qv2ray",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_2-配置-qv2ray","aria-hidden":"true"},"#"),(0,n.Uk)(" 2. 配置 Qv2ray")],-1),Tl=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("打开 Qv2ray > 点击 "),(0,n.Wm)("code",null,"首选项"),(0,n.Uk)("：")])],-1),Ol=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:m,alt:"Qv2ray_config-1"})],-1),Ll=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("在 "),(0,n.Wm)("code",null,"内核设置"),(0,n.Uk)(" 选项卡中，点击 "),(0,n.Wm)("code",null,"检查 V2Ray 核心设置"),(0,n.Uk)(" 以验证 V2Ray 核心设置：")])],-1),Gl=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:r,alt:"Qv2ray_config-2"})],-1),Kl=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"若使用 Xray 内核，则先需修改："),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("code",null,"V2Ray 核心可执行文件路径"),(0,n.Uk)(" 为 "),(0,n.Wm)("code",null,"/usr/bin/xray")])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("code",null,"V2Ray 资源目录"),(0,n.Uk)(" 为 "),(0,n.Wm)("code",null,"/usr/share/xray")])])])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("再点击 "),(0,n.Wm)("code",null,"检查 V2Ray 核心设置"),(0,n.Uk)(" 以验证 Xray 核心设置：")])])]),(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:t,alt:"Qv2ray_config-3"})])],-1),jl=(0,n.Wm)("h2",{id:"_3-配置订阅",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_3-配置订阅","aria-hidden":"true"},"#"),(0,n.Uk)(" 3. 配置订阅")],-1),Il=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("在主窗口中点击 "),(0,n.Wm)("code",null,"分组"),(0,n.Uk)("：")])],-1),zl=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:c,alt:"Qv2ray_config-4"})],-1),Yl=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("修改 "),(0,n.Wm)("code",null,"分组名称"),(0,n.Uk)(" 的 "),(0,n.Wm)("code",null,"默认分组"),(0,n.Uk)(" 为自定义名称（通常为 ✈ 场名称）：")])],-1),Hl=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:u,alt:"Qv2ray_config-5"})],-1),Ml=(0,n.Wm)("ol",{start:"3"},[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("切换到 "),(0,n.Wm)("code",null,"订阅设置"),(0,n.Uk)(" 选项卡并进行如下配置：")]),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("勾选 "),(0,n.Wm)("code",null,"此组是一个订阅")])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("设置 "),(0,n.Wm)("code",null,"订阅地址"),(0,n.Uk)(" 为 ✈ 场提供的 "),(0,n.Wm)("code",null,"订阅链接")])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("点击 "),(0,n.Wm)("code",null,"更新订阅"),(0,n.Uk)(" 按钮并等待完成")])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("点击 "),(0,n.Wm)("code",null,"确定"),(0,n.Uk)(" 以应用设置并关闭对话框")])])])])],-1),Jl=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:i,alt:"Qv2ray_config-6"})],-1),Zl=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,[(0,n.Uk)("若使用 "),(0,n.Wm)("code",null,"qv2ray-dev-git"),(0,n.Wm)("sup",null,"cn"),(0,n.Uk)("，则需要注意的是最新的 "),(0,n.Wm)("code",null,"qv2ray-dev-git"),(0,n.Uk)(" 已经将机场的默认订阅类型改为规范 "),(0,n.Wm)("code",null,"SIP008"),(0,n.Uk)("。")]),(0,n.Wm)("p",null,[(0,n.Uk)("如果你的 ✈ 场订阅类型为 "),(0,n.Wm)("code",null,"base64"),(0,n.Uk)("，则需要在 "),(0,n.Wm)("code",null,"订阅设置"),(0,n.Uk)(" 面板 > "),(0,n.Wm)("code",null,"订阅类型"),(0,n.Uk)(" 中，将 "),(0,n.Wm)("code",null,"SIP008"),(0,n.Uk)(" 改为 "),(0,n.Wm)("code",null,"base64"),(0,n.Uk)("，否则你将拿不到订阅链接中的任何节点。")])],-1),$l=(0,n.Wm)("h2",{id:"_4-通过系统代理方式尝试连接",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_4-通过系统代理方式尝试连接","aria-hidden":"true"},"#"),(0,n.Uk)(" 4. 通过系统代理方式尝试连接")],-1),le=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("双击分组中添加的订阅即可查看更新出的节点，右键并点击 "),(0,n.Wm)("code",null,"测试延迟"),(0,n.Uk)(" 可以测试分组或节点的延迟：")])],-1),ee=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:W,alt:"Qv2ray_connect-1"})],-1),ae=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("右键需要连接的节点 > 点击 "),(0,n.Wm)("code",null,"连接到此服务器"),(0,n.Uk)(" 即可连接：")])],-1),ne=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:o,alt:"Qv2ray_connect-2"})],-1),se=(0,n.Wm)("ol",{start:"3"},[(0,n.Wm)("li",null,"打开不存在的网站验证连接：")],-1),me=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:d,alt:"Qv2ray_connect-3"})],-1),re=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,[(0,n.Uk)("Qv2ray 会自动配置系统代理。也可以点击托盘图标 > 在弹出菜单中，依次选择 "),(0,n.Wm)("code",null,"系统代理"),(0,n.Uk)(" > "),(0,n.Wm)("code",null,"启用 / 禁用系统代理"),(0,n.Uk)(" 以启用或禁用系统代理。")])],-1),te=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,"GNOME 的系统代理设置非常有效。这是因为 GNOME 的系统代理设置得到了普遍的适配。"),(0,n.Wm)("p",null,"但是 KDE 的系统代理设置更像是一个玩具。甚至 KDE 系列应用程序本身也不会读取和使用那个配置。所以我们需要通过设置透明代理的方式解决这个问题。"),(0,n.Wm)("p",null,"同时这也可以使终端下的应用使用代理连接（如 git）。")],-1),ce=(0,n.Wm)("h2",{id:"_5-安装-cgproxy",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_5-安装-cgproxy","aria-hidden":"true"},"#"),(0,n.Uk)(" 5. 安装 cgproxy")],-1),ue=(0,n.Uk)("通过以下命令安装 "),ie={href:"https://github.com/springzfx/cgproxy",target:"_blank",rel:"noopener noreferrer"},We=(0,n.Uk)("cgproxy"),oe=(0,n.Wm)("sup",null,"cn / aur",-1),de=(0,n.Uk)("："),pe=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" pacman -S cgproxy-git\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),ge=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,"yay -S aur/cgproxy\n")]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),ke=(0,n.Wm)("h2",{id:"_6-配置-qv2ray-透明代理设置",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_6-配置-qv2ray-透明代理设置","aria-hidden":"true"},"#"),(0,n.Uk)(" 6. 配置 Qv2ray 透明代理设置")],-1),he=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("打开 Qv2ray > "),(0,n.Wm)("code",null,"首选项"),(0,n.Uk)(" > "),(0,n.Wm)("code",null,"入站设置"),(0,n.Uk)(" > 取消勾选 "),(0,n.Wm)("code",null,"设置系统代理"),(0,n.Uk)("：")])],-1),ye=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:p,alt:"Qv2ray_transparent-1"})],-1),ve=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("勾选 "),(0,n.Wm)("code",null,"透明代理设置"),(0,n.Uk)("：")])],-1),Ue=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:g,alt:"Qv2ray_transparent-2"})],-1),be=(0,n.Wm)("p",null,[(0,n.Uk)("其它设置保持默认即可，"),(0,n.Wm)("code",null,"IPv4 端口"),(0,n.Uk)(" 可自定义为其它端口。")],-1),xe={class:"custom-container tip"},fe=(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),_e=(0,n.Wm)("p",null,[(0,n.Uk)("关于代理 "),(0,n.Wm)("code",null,"udp"),(0,n.Uk)(" 流量的设置稍微有一些复杂，配置有误便会导致无法上网。")],-1),Qe=(0,n.Uk)("本指南不对此展开介绍，如有需要可参考 "),we={href:"https://www.v2ray.com/chapter_02/04_dns.html",target:"_blank",rel:"noopener noreferrer"},qe=(0,n.Uk)("Project V 官方网站相关内容"),Se=(0,n.Uk)("。一般情况下不需要代理 "),Ee=(0,n.Wm)("code",null,"udp",-1),Ae=(0,n.Uk)(" 流量。"),Re=(0,n.Wm)("p",null,[(0,n.Uk)("而属于 "),(0,n.Wm)("code",null,"udp"),(0,n.Uk)(" 类型的 "),(0,n.Wm)("code",null,"dns"),(0,n.Uk)(" 流量，我们只需要在系统设置里设置一个可用的 DNS 服务器即可。")],-1),De=(0,n.Wm)("ol",{start:"3"},[(0,n.Wm)("li",null,[(0,n.Uk)("点击 "),(0,n.Wm)("code",null,"确定"),(0,n.Uk)(" 保存设置")])],-1),Ve=(0,n.Wm)("h2",{id:"_7-配置-cgproxy",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_7-配置-cgproxy","aria-hidden":"true"},"#"),(0,n.Uk)(" 7. 配置 cgproxy")],-1),Be=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("通过 "),(0,n.Wm)("code",null,"vim"),(0,n.Uk)(" 编辑 "),(0,n.Wm)("code",null,"/etc/cgproxy/config.json"),(0,n.Uk)(" 文件：")])],-1),Xe=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(),(0,n.Wm)("span",{class:"token function"},"vim"),(0,n.Uk)(" /etc/cgproxy/config.json\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Ce=(0,n.Wm)("p",null,"进行如下修改：",-1),Fe=(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Uk)("在 "),(0,n.Wm)("code",null,"cgroup_proxy"),(0,n.Uk)(" 中括号里加上 "),(0,n.Wm)("code",null,'"/"'),(0,n.Uk)("（包含引号）")]),(0,n.Wm)("li",null,[(0,n.Uk)("将 "),(0,n.Wm)("code",null,"port"),(0,n.Uk)(" 改为 Qv2ray 首选项里的透明代理端口（默认是和 Qv2ray 默认对应的 "),(0,n.Wm)("code",null,"12345"),(0,n.Uk)("）")]),(0,n.Wm)("li",null,[(0,n.Uk)("将 "),(0,n.Wm)("code",null,"enable_dns"),(0,n.Uk)("、"),(0,n.Wm)("code",null,"enable_udp"),(0,n.Uk)("、"),(0,n.Wm)("code",null,"enable_ipv6"),(0,n.Uk)(" 改为 "),(0,n.Wm)("code",null,"false")]),(0,n.Wm)("li",null,[(0,n.Uk)("如果希望当本机作为网关设备时为连接到本机网关的其他设备（如连接到本机开设的 wifi 热点的设备）也提供透明代理，则将 "),(0,n.Wm)("code",null,"enable_gateway"),(0,n.Uk)(" 改为 "),(0,n.Wm)("code",null,"true")])],-1),Ne=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:k,alt:"cgproxy"})],-1),Pe=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,[(0,n.Uk)("cgproxy 默认配置是代理所有 "),(0,n.Wm)("code",null,"tcp"),(0,n.Uk)(" 和 "),(0,n.Wm)("code",null,"udp"),(0,n.Uk)("、"),(0,n.Wm)("code",null,"ipv4"),(0,n.Uk)(" 和 "),(0,n.Wm)("code",null,"ipv6"),(0,n.Uk)(" 的流量。")]),(0,n.Wm)("p",null,[(0,n.Uk)("如果不希望代理其中的某种（些）流量，则将对应的 "),(0,n.Wm)("code",null,"enable_xxx"),(0,n.Uk)(" 改为 "),(0,n.Wm)("code",null,"false"),(0,n.Uk)("。注意，这里的配置要和 Qv2ray 选项里的配置一致（例如 Qv2ray 选项里没有勾选 "),(0,n.Wm)("code",null,"udp"),(0,n.Uk)("，则这里务必把 "),(0,n.Wm)("code",null,"enable_udp"),(0,n.Uk)(" 改为 "),(0,n.Wm)("code",null,"false"),(0,n.Uk)("）")])],-1),Te=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("保存并退出 "),(0,n.Wm)("code",null,"vim")])],-1),Oe=(0,n.Wm)("h2",{id:"_8-配置可用的-dns-服务",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_8-配置可用的-dns-服务","aria-hidden":"true"},"#"),(0,n.Uk)(" 8. 配置可用的 DNS 服务")],-1),Le=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("打开 "),(0,n.Wm)("code",null,"系统设置"),(0,n.Uk)(" > 点击侧栏 "),(0,n.Wm)("code",null,"连接"),(0,n.Uk)("：")])],-1),Ge=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:h,alt:"system-config_step-1"})],-1),Ke=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("选择当前连接 > 点击 "),(0,n.Wm)("code",null,"ipv4"),(0,n.Uk)(" 选项卡：")])],-1),je=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:y,alt:"system-config_step-2"})],-1),Ie=(0,n.Wm)("ol",{start:"3"},[(0,n.Wm)("li",null,[(0,n.Uk)("在 "),(0,n.Wm)("code",null,"其它 DNS 服务器"),(0,n.Uk)(" 中添加没有污染的 DNS 服务器：")])],-1),ze=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:v,alt:"system-config_step-3"})],-1),Ye=(0,n.Wm)("ol",{start:"4"},[(0,n.Wm)("li",null,"保存并退出系统设置")],-1),He=(0,n.Wm)("h2",{id:"_9-启动-cgproxy-服务",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#_9-启动-cgproxy-服务","aria-hidden":"true"},"#"),(0,n.Uk)(" 9. 启动 cgproxy 服务")],-1),Me=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"在 Qv2ray 中连接一个节点")]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"在 Qv2ray 托盘菜单中关闭系统代理（如果已经启动）")]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"通过以下命令启动 cgproxy 服务：")])],-1),Je=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" systemctl start cgproxy.service\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Ze=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,"每次重启后都要重新命令启动 cgproxy 服务。"),(0,n.Wm)("p",null,"若要设为开机自启，请执行以下命令："),(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" systemctl "),(0,n.Wm)("span",{class:"token builtin class-name"},"enable"),(0,n.Uk)(" cgproxy.service\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])]),(0,n.Wm)("p",null,"若要关闭 cgproxy 服务，请执行以下命令："),(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" systemctl stop cgproxy.service\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])])],-1),$e=(0,n.Wm)("ol",{start:"4"},[(0,n.Wm)("li",null,"通过以下命令检查 cgproxy 服务运行情况：")],-1),la=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,"systemctl status cgproxy.service\n")]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),ea=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:U,alt:"cgproxy-start"})],-1),aa=(0,n.Wm)("ol",{start:"5"},[(0,n.Wm)("li",null,"打开不存在的网站验证连接：")],-1),na=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:b,alt:"check"})],-1),sa=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,"如果 cgproxy 不生效 😢，请尝试以下步骤："),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,"观察 Qv2ray 日志，看流量是否被定向到了 Qv2ray"),(0,n.Wm)("li",null,"如果没有，请检查配置是否准确、cgproxy 服务是否开启等"),(0,n.Wm)("li",null,"如果还是没发现问题，尝试更换端口"),(0,n.Wm)("li",null,"使用以下命令尝试给核心文件加上相应的特权：")])],-1),ma=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" setcap "),(0,n.Wm)("span",{class:"token string"},'"cap_net_admin,cap_net_bind_service=ep"'),(0,n.Uk)(" /usr/bin/v2ray\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),ra=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" setcap "),(0,n.Wm)("span",{class:"token string"},'"cap_net_admin,cap_net_bind_service=ep"'),(0,n.Uk)(" /usr/bin/xray\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),ta=(0,n.Wm)("h2",{id:"其它代理方法-非透明代理",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#其它代理方法-非透明代理","aria-hidden":"true"},"#"),(0,n.Uk)(" 其它代理方法（非透明代理）")],-1),ca=(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,"虽然 cgproxy 很好，但有的时候就是会有诡异的 bug。本指南为了内容的全面性，介绍其它的代理方法。")],-1),ua=(0,n.Wm)("h3",{id:"系统代理",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#系统代理","aria-hidden":"true"},"#"),(0,n.Uk)(" 系统代理")],-1),ia=(0,n.Uk)("如步骤 "),Wa=(0,n.Uk)("4. 通过系统代理方式尝试连接"),oa=(0,n.Uk)(" 所述，但在很多应用不生效（主流浏览器已支持 KDE 的系统代理）。"),da=(0,n.Wm)("h3",{id:"应用自身的代理配置",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#应用自身的代理配置","aria-hidden":"true"},"#"),(0,n.Uk)(" 应用自身的代理配置")],-1),pa=(0,n.Wm)("h4",{id:"firefox",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#firefox","aria-hidden":"true"},"#"),(0,n.Uk)(" Firefox")],-1),ga=(0,n.Wm)("p",null,"Firefox 可使用系统代理，也可手动配置：",-1),ka=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:x,alt:"Firefox"})],-1),ha=(0,n.Wm)("h4",{id:"telegram",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#telegram","aria-hidden":"true"},"#"),(0,n.Uk)(" Telegram")],-1),ya=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Uk)("点击 "),(0,n.Wm)("code",null,"Settings"),(0,n.Uk)(" > "),(0,n.Wm)("code",null,"Advanced"),(0,n.Uk)(" > "),(0,n.Wm)("code",null,"Connection type"),(0,n.Uk)(" > "),(0,n.Wm)("code",null,"Use custom proxy")])],-1),va=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:f,alt:"Telegram_step-1"})],-1),Ua=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("点击 "),(0,n.Wm)("code",null,"ADD PROXY"),(0,n.Uk)(" > 填写合适的类型和端口 > "),(0,n.Wm)("code",null,"SAVE"),(0,n.Uk)("：")])],-1),ba=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:_,alt:"Telegram_step-2"})],-1),xa=(0,n.Wm)("h4",{id:"visual-studio-code-code-oss",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#visual-studio-code-code-oss","aria-hidden":"true"},"#"),(0,n.Uk)(" Visual Studio Code（code OSS）")],-1),fa=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("点击 "),(0,n.Wm)("code",null,"File"),(0,n.Uk)("（"),(0,n.Wm)("code",null,"文件"),(0,n.Uk)("） > "),(0,n.Wm)("code",null,"Preference"),(0,n.Uk)("（"),(0,n.Wm)("code",null,"首选项"),(0,n.Uk)("） > "),(0,n.Wm)("code",null,"Settings"),(0,n.Uk)("（"),(0,n.Wm)("code",null,"设置"),(0,n.Uk)("）")])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Uk)("搜索 "),(0,n.Wm)("code",null,"proxy"),(0,n.Uk)("，在其中填入 http 代理地址（"),(0,n.Wm)("code",null,"http://127.0.0.1:xxxx"),(0,n.Uk)("）即可：")])])],-1),_a=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:Q,alt:"vscode"})],-1),Qa=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,"其它应用请自行寻找代理设置。")],-1),wa=(0,n.Wm)("h3",{id:"export",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#export","aria-hidden":"true"},"#"),(0,n.Uk)(" export")],-1),qa=(0,n.Wm)("p",null,[(0,n.Uk)("通过以下 "),(0,n.Wm)("code",null,"export"),(0,n.Uk)(" 命令设置当前终端的代理方式：")],-1),Sa=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token builtin class-name"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"token assign-left variable"},"https_proxy"),(0,n.Wm)("span",{class:"token operator"},"="),(0,n.Uk)("http://127.0.0.1:xxxx\n"),(0,n.Wm)("span",{class:"token builtin class-name"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"token assign-left variable"},"http_proxy"),(0,n.Wm)("span",{class:"token operator"},"="),(0,n.Uk)("http://127.0.0.1:xxxx\n"),(0,n.Wm)("span",{class:"token builtin class-name"},"export"),(0,n.Uk)(),(0,n.Wm)("span",{class:"token assign-left variable"},"all_proxy"),(0,n.Wm)("span",{class:"token operator"},"="),(0,n.Uk)("http://127.0.0.1:xxxx\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br"),(0,n.Wm)("span",{class:"line-number"},"2"),(0,n.Wm)("br"),(0,n.Wm)("span",{class:"line-number"},"3"),(0,n.Wm)("br")])],-1),Ea=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,n.Wm)("p",null,[(0,n.Uk)("不同终端命令所识别的环境变量名不同，如 "),(0,n.Wm)("code",null,"all_proxy"),(0,n.Uk)(" 对 "),(0,n.Wm)("code",null,"curl"),(0,n.Uk)(" 生效，而对 "),(0,n.Wm)("code",null,"wget"),(0,n.Uk)(" 则不生效，具体可查看各个命令的 "),(0,n.Wm)("code",null,"man page")])],-1),Aa=(0,n.Wm)("h3",{id:"proxychains-ng",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#proxychains-ng","aria-hidden":"true"},"#"),(0,n.Uk)(" proxychains-ng")],-1),Ra=(0,n.Wm)("p",null,[(0,n.Uk)("如果对于一个应用，KDE 系统代理不生效，在终端 "),(0,n.Wm)("code",null,"export"),(0,n.Uk)(" 了 "),(0,n.Wm)("code",null,"ALL_PROXY"),(0,n.Uk)(" 变量再用终端启动此应用代理也不生效，并且这个应用自身也没有配置代理的选项，此时可以尝试使用 proxychains-ng。")],-1),Da=(0,n.Wm)("p",null,"它可以为单行命令配置代理。它是一个预加载的 hook，允许通过一个或多个 SOCKS 或 HTTP 代理重定向现有动态链接程序的 TCP 流量。",-1),Va=(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,"通过以下命令安装 proxychains-ng 包：")],-1),Ba=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(" pacman -S proxychains-ng\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Xa=(0,n.Wm)("ol",{start:"2"},[(0,n.Wm)("li",null,[(0,n.Uk)("通过 "),(0,n.Wm)("code",null,"vim"),(0,n.Uk)(" 编辑 "),(0,n.Wm)("code",null,"/etc/proxychains.conf"),(0,n.Uk)(" 文件：")])],-1),Ca=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"sudo"),(0,n.Uk)(),(0,n.Wm)("span",{class:"token function"},"vim"),(0,n.Uk)(" /etc/proxychains.conf\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),Fa=(0,n.Wm)("p",null,"把配置文件中最后两行改为 Qv2ray 代理的 ip 和端口：",-1),Na=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:w,alt:"proxychains_step-1"})],-1),Pa=(0,n.Wm)("p",null,[(0,n.Uk)("在 "),(0,n.Wm)("code",null,"proxy_dns"),(0,n.Uk)(" 一行前添加 "),(0,n.Wm)("code",null,"#"),(0,n.Uk)(" 注释掉此行，否则使用 "),(0,n.Wm)("code",null,"proxychains"),(0,n.Uk)(" 启动 yay 会报错：")],-1),Ta=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:q,alt:"proxychains_step-2"})],-1),Oa=(0,n.Wm)("p",null,[(0,n.Uk)("在 "),(0,n.Wm)("code",null,"quiet_mode"),(0,n.Uk)(" 一行前删除 "),(0,n.Wm)("code",null,"#"),(0,n.Uk)(" 解注释掉此行，以关闭调用 library 产生的输出：")],-1),La=(0,n.Wm)("div",{class:"language-properties ext-properties line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-properties"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token comment"},"# Quiet mode (no output from library)"),(0,n.Uk)("\nquiet_mode\n")])]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br"),(0,n.Wm)("span",{class:"line-number"},"2"),(0,n.Wm)("br")])],-1),Ga=(0,n.Wm)("ol",{start:"3"},[(0,n.Wm)("li",null,[(0,n.Uk)("使用代理方式为在单一命令前添加 "),(0,n.Wm)("code",null,"proxychains"),(0,n.Uk)(" 前缀：")])],-1),Ka=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,"proxychains %command%\n")]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),ja=(0,n.Wm)("p",null,"如使用 proxychains-ng 代理 yay:",-1),Ia=(0,n.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,"proxychains yay -Syyu\n")]),(0,n.Wm)("div",{class:"line-numbers"},[(0,n.Wm)("span",{class:"line-number"},"1"),(0,n.Wm)("br")])],-1),za=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:S,alt:"proxychains_step-3"})],-1),Ya=(0,n.Wm)("p",null,"📔 本节参考资料：",-1),Ha={href:"https://qv2ray.net/lang/zh/",target:"_blank",rel:"noopener noreferrer"},Ma=(0,n.Uk)("Qv2ray"),Ja={render:function(l,e){const a=(0,n.up)("RouterLink"),s=(0,n.up)("OutboundLink"),m=(0,n.up)("CodeGroupItem"),r=(0,n.up)("CodeGroup");return(0,n.wg)(),(0,n.j4)(n.HY,null,[E,A,(0,n.Wm)("blockquote",null,[R,(0,n.Wm)("details",D,[V,(0,n.Wm)("nav",B,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#🕊-纵使千山多万壑-犹有青鸾踏云间"},{default:(0,n.w5)((()=>[X])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#🔖-这一节将会讨论"},{default:(0,n.w5)((()=>[C])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#鉴于qv2ray原项目已停止开发-新的版本还不够完善-有魔法上网需求者建议使用v2raya替代qv2ray"},{default:(0,n.w5)((()=>[F])),_:1}),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#安装v2ray和v2raya"},{default:(0,n.w5)((()=>[N])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#配置v2raya"},{default:(0,n.w5)((()=>[P])),_:1})])])]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_1-安装-qv2ray-和-v2ray-xray-内核"},{default:(0,n.w5)((()=>[T])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_2-配置-qv2ray"},{default:(0,n.w5)((()=>[O])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_3-配置订阅"},{default:(0,n.w5)((()=>[L])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_4-通过系统代理方式尝试连接"},{default:(0,n.w5)((()=>[G])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_5-安装-cgproxy"},{default:(0,n.w5)((()=>[K])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_6-配置-qv2ray-透明代理设置"},{default:(0,n.w5)((()=>[j])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_7-配置-cgproxy"},{default:(0,n.w5)((()=>[I])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_8-配置可用的-dns-服务"},{default:(0,n.w5)((()=>[z])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#_9-启动-cgproxy-服务"},{default:(0,n.w5)((()=>[Y])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#其它代理方法-非透明代理"},{default:(0,n.w5)((()=>[H])),_:1}),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#系统代理"},{default:(0,n.w5)((()=>[M])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#应用自身的代理配置"},{default:(0,n.w5)((()=>[J])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#export"},{default:(0,n.w5)((()=>[Z])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(a,{to:"#proxychains-ng"},{default:(0,n.w5)((()=>[$])),_:1})])])])])])])]),ll,(0,n.Wm)("h2",el,[al,nl,(0,n.Wm)("a",sl,[ml,(0,n.Wm)(s)]),rl]),tl,cl,ul,(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"cn"},{default:(0,n.w5)((()=>[il])),_:1}),(0,n.Wm)(m,{title:"aur"},{default:(0,n.w5)((()=>[Wl])),_:1})])),_:1}),ol,dl,pl,(0,n.Wm)("p",null,[gl,(0,n.Wm)("a",kl,[hl,(0,n.Wm)(s)]),yl,vl,Ul]),bl,(0,n.Wm)("p",null,[xl,(0,n.Wm)("a",fl,[_l,(0,n.Wm)(s)]),Ql,wl,(0,n.Wm)("a",ql,[Sl,(0,n.Wm)(s)]),El,(0,n.Wm)("a",Al,[Rl,(0,n.Wm)(s)]),Dl,Vl]),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"V2Ray"},{default:(0,n.w5)((()=>[Bl])),_:1}),(0,n.Wm)(m,{title:"Xray"},{default:(0,n.w5)((()=>[Xl])),_:1})])),_:1}),Cl,Fl,Nl,Pl,Tl,Ol,Ll,Gl,Kl,jl,Il,zl,Yl,Hl,Ml,Jl,Zl,$l,le,ee,ae,ne,se,me,re,te,ce,(0,n.Wm)("p",null,[ue,(0,n.Wm)("a",ie,[We,(0,n.Wm)(s)]),oe,de]),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"cn"},{default:(0,n.w5)((()=>[pe])),_:1}),(0,n.Wm)(m,{title:"aur"},{default:(0,n.w5)((()=>[ge])),_:1})])),_:1}),ke,he,ye,ve,Ue,be,(0,n.Wm)("div",xe,[fe,_e,(0,n.Wm)("p",null,[Qe,(0,n.Wm)("a",we,[qe,(0,n.Wm)(s)]),Se,Ee,Ae]),Re]),De,Ve,Be,Xe,Ce,Fe,Ne,Pe,Te,Oe,Le,Ge,Ke,je,Ie,ze,Ye,He,Me,Je,Ze,$e,la,ea,aa,na,sa,(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{title:"V2Ray"},{default:(0,n.w5)((()=>[ma])),_:1}),(0,n.Wm)(m,{title:"Xray"},{default:(0,n.w5)((()=>[ra])),_:1})])),_:1}),ta,ca,ua,(0,n.Wm)("p",null,[ia,(0,n.Wm)(a,{to:"/rookie/transparent.html#_4-%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E4%BB%A3%E7%90%86%E6%96%B9%E5%BC%8F%E5%B0%9D%E8%AF%95%E8%BF%9E%E6%8E%A5"},{default:(0,n.w5)((()=>[Wa])),_:1}),oa]),da,pa,ga,ka,ha,ya,va,Ua,ba,xa,fa,_a,Qa,wa,qa,Sa,Ea,Aa,Ra,Da,Va,Ba,Xa,Ca,Fa,Na,Pa,Ta,Oa,La,Ga,Ka,ja,Ia,za,(0,n.Wm)("blockquote",null,[Ya,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("a",Ha,[Ma,(0,n.Wm)(s)])])])])],64)}}}}]);