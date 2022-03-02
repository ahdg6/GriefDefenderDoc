---
title: 预制标签
tag: 设置
category: 标签
icon: fa-solid fa-sidebar
---

## 概览

预制标签系统为用户及管理员提供了简便管理领地标签的可能。
GriefDefender 默认提供了一些较为通用的预制标签，默认提供的标签数据只适用于纯净且可以于以下文件找到
### Sponge
`./config/GriefDefender/presets/minecraft.conf`
### Bukkit
`./plugins/GriefDefender/presets/minecraft.conf`

:::: details 名词详解
flag definitions - 预制标签
flag - 基础标签
permission - 规则
PUBLC - 公众
OWNER - 受信者
::::

## 管理标签

管理员能根据需要对预制标签进行**增删改**，以便最大程度的客制化用户的标签使用体验。

如果要向默认提供的 minecraft 预制标签组添加新标签，请打开 `./presets/minecraft.conf` 文件。
在本节，您将看到两个预制标签页 'admin' 和 'user'。  

### 添加新的预制标签

我们假设您要往 'admin' 标签页添加新标签。
1. 克隆一个预制标签，我们以 `ambient-spawn` 作为样例。

```
ambient-spawn {
    contexts=[
        "gd_claim_default=user"
    ]
    default-value=true
    enabled=true
    permissions=[
        "flag=entity-spawn, target=#ambient"
    ]
}
```

让我们一步步拆分其组成

#### 名称  

`ambient-spawn` - 这是定义的名称，当用户在标签 GUI中打开它时，该名称将显示给用户。它可以是你喜欢的任何东西。

#### 情境  

```
contexts=[
        "gd_claim_default=user"
    ]
```
这是预制标签中所包含权限 `permissions=[...]` 的作用情境。
其目前只接受以下值 `gd_claim_default`, `gd_claim_override`，或 `gd_claim`。
预知更多，详见 https://github.com/bloodmc/GriefDefender/wiki/Contexts 来进一步了解情境的作用。

#### 默认值  

`default-value=true` - 这是 GD 在启动期间应用预制标签时使用的默认值。
GD 仅在启动期间将此值作为临时权限应用，前提是情境包括 `gd_claim_default` 或 `gd_claim_override`。
如果定义不包含这些情境之一，则忽略默认值。

#### 启用与否  

`enabled=true` - 该选项决定了 GD 是否使用该预制标签，如果设为 `false`，该预制标签将被忽略。


#### 规则

```
permissions=[
    "flag=entity-spawn, target=#ambient",
    "flag=xxx"
]
```
这里定义了该预制标签中包含的基础标签。一个预制标签可以拥有一个乃至多个基础标签。如果要将多条基础标签整合进预制标签，那么应在每行末尾插入一个 `,` 再添加新行。
在每行中需要定义 `flag=<基础标签>` 及其紧接着的目标和来源。  
因为 GD 会自动应用到所有检测目标，如果您想要一条规则应用到全部可能的目标，则不填 `target` 。
因为 GD 会自动检测所有来源，如果您想要一条规则应用到全部可能的来源，则不填 `source`。

一些常用的规则情境
```
source  行为来源
target  作用目标
used_item  使用物品
item_name  物品名称
server  所处服务器
state  状态
world  世界
```

提供的情境必须是有效且适用于标签。要在游戏中找到合适的值，请执行以下操作

1. 运行命令 `/gddebug record claim` - 这将在您所在的领地中启动调试会话。
2. 做您想通过领地标签来限制的事
3. 运行命令 `/gddebug paste` - 这将显示一个 web链接 以查看调试结果。
4. 打开链接，您将看到 GD 为领地检查的操作列表。您会在 `source` `target` 列看到您所需要的值。

要知晓 `used_item` 或任何其他情境，找到情境列，您将会在特定行看到该操作所支持的情境。

另一个找到您想获取的情境的方法是查阅相关资料。

## GUI 组成及工作方式

标签 GUI旨在允许用户和管理员轻松管理其领地标签。

打开标签界面的指令是 `/cf` 或 `/gd flag claim`

在 GD 2.0 中, 所有预制标签可以应用到两种新玩家类型，即 : PUBLIC 和 OWNER。

`PUBLIC` - 在标签界面中切换预制标签页为 `PUBLIC`，所有未被信任的玩家都将被影响。
`OWNER` - 在标签界面中切换预制标签页为 `OWNER`，所有领地受信者及所有者本身都将被影响。


### 权限  

以下权限控制着用户对预制标签的访问 `griefdefender.user.custom.flag.<标签组>.<预制标签名称>`.
我们假设您不想让用户有权控制 `damage-animals` 预制标签。 您需要在 LuckPerms 输入以下命令 `/lp group <groupname> set griefdefender.user.custom.flag.user.damage-animals false`

### 标签值

如下所示，两个 管理/用户 预制标签都以 `true` 或 `false` 来显示您所处领地的标签影响。

### 管理员GUI相关
:warning: 管理员标签组的标签只会影响您所在领地。

![Admin GUI](https://i.imgur.com/tSVSC7q.png)


默认情况下，管理员可以访问2种模式 `PRESET` 和 `ADVANCED`。
`PRESET` 模式直接链接到 minecraft 预设标签定义预设文件。每个组都作为一个选项页并将该选项页定义的内容读入 GUI。
GD 随附 2 个预制标签组，即 `USER` 和 `ADMIN`。
 
这两个小组都将使用预制标签。如果需要将标志设置为默认值，请在配置中进行设置，如上所示。

### 用户GUI
:warning: 用户标签组的预制标签只会影响您所在的领地。
:warning: 如果您想要更改 `USER` 于别人的领地中，那您必须有忽略领地的权限并输入 `/ignoreclaims`，之后就能使用 `/cf` 命令了。


作为用户，如果您输入 `/cf` 命令，您将看到以下内容

![User GUI](https://i.imgur.com/LTeNaaD.png)



