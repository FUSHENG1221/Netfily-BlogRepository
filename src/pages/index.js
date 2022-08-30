import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// 从 src\components 文件夹中引入了一个可以反复使用的组件 HomepageFeatures
// 把这个 HomepageFeatures 看为一个黑盒，先看看这个黑盒是怎么调用
import styles from './index.module.css';

// js函数:方便维护
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🎉 Welcome to my site 🎉
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // 创建了一个 Html layout 布局，
    // 在这个布局中，它传递了一个叫 title 的参数，这个参数实际上是决定标签页名字的
    // 然后创建了一个 <HomepageHeader />,实际上是
    // 使用 Html 的标签引用了下面的名为 HomepageHeader 的函数，渲染了这个函数中定义的内容
    <Layout
      title={`FuSheng ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
