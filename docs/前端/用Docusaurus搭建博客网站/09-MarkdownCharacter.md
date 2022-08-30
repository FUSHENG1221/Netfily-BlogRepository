---
id: MarkdownCharacter
title: Markdown特性
tags: 
  - Markdown
  - React
---

本站只涉及较浅层的特性，详细内容查看[官网网站的Markdown特性](https://docusaurus.io/zh-CN/docs/markdown-features)。

## 告示

除了基本的 Markdown 语法， 我们还有一种特殊的告示语法。它用 3 个连续的冒号包裹文本，然后紧跟着一个表示其类型的文本标签。

示例：

```md
:::note

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::
```

渲染结果如下：

:::note

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `api`](#)。

:::

### 指定标题

你也可以为告示提供一个可选的标题。

```md
:::note 你的标题
<!-- 注意note与标题间存在空格 -->

一些包含 _Markdown_ `语法` 的 **内容**。

:::
```

渲染结果如下：

:::note 你的标题

一些包含 _Markdown_ `语法` 的 **内容**。

:::

## 




