/**
 * Creating a sidebar enables you to:
 * 创建侧边栏使您可以:
 - create an ordered group of docs
 创建一个有序的文档组
 - render a sidebar for each doc of that group
 为该组的每个文档呈现侧边栏
 - provide next/previous navigation
 提供下/以前的导航

 The sidebars can be generated from the filesystem, or explicitly defined here.
侧栏可以从文件系统中生成，也可以在这里显式地定义。

 Create as many sidebars as you want.
 创建尽可能多的侧边栏。
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //默认情况下，Docusaurus从docs文件夹结构生成侧边栏
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  //但是您可以手动创建侧边栏
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
