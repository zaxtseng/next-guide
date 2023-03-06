# 开发体验
## 安装Next.js
```
pnpm create next-app --ts
// 其中选择了eslint,src
// 选择app的话,下面chakraUI并没有对应做修改,导致无法使用主题
// 等以后修复可以使用app
// 目前ChakraUI只工作在客户端,但是Nextjs的app文件夹又默认用于服务端组件,
// ChakraUI提供了@chakra-ui/next-js
// 另外使用chakraUI在服务端组件时需要在头部加上use client
```
## 文件目录(约定式路由)
也就是每个文件夹就是一个路由.

`page.tsx`作为该路由主页面.

优点:
1. 实现嵌套路由和持久化缓存
2. 支持 React 18 中的 React server Component，实现 Streaming（流渲染）
3. 实现代码目录分组，将当前路由下的测试文件、组件、样式文件友好地放在一起，避免全局查找
### 示例
这里是Next.js 13的文件目录,本次暂不使用.只是作为下次参考.

```
./app
├── GlobalNav.tsx
├── layout.tsx
├── page.tsx
├── layouts
│   ├── CategoryNav.tsx
│   ├── [categorySlug]
│   │   ├── SubCategoryNav.tsx
│   │   ├── [subCategorySlug]
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── template.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── template.tsx
```
每个文件下至少都有 3 个文件 `layout.tsx`、`page.tsx` 、`template.tsx`.

- `layout.tsx` 该路由下的公共导航，切换路由时，不会刷新，我们可以看箭头处的 Count 组件，并没有刷新
- `template.tsx` 该路由下的公共部分，切换路由时，会刷新.
- `page.tsx` 该路由的主页面.

在 app 目录下每个文件夹下，还可以有 `loading.tsx`、`error.tsx`

`loading.tsx` 该路由的主页面在异步渲染中，会显示的 loading 组件的内容；例如我们可以用它来写骨架屏（Skeleton）
`error.tsx` 该路由的页面渲染出错，会显示该页面，也就是封装了 React 的 ErrorBoundary。

以上除了 `page.tsx` 其他文件都是可选的，除了这些约定名称的文件外，我们可以建立任意文件，
比如 `components.tsx`、 `test.tsx` 等自定义文件。app 目录可以很好地将页面、组件、测试文件放在一起，管理代码目录，避免开发时全局查找。

## 路由分组
app 同层级目录下还支持多个 layout， 使用 （文件夹）区分，（文件夹）不会体现在路由上，只是单纯用来做代码分组。
```
./app
├── (checkout)
│   ├── checkout
│   │   └── page.tsx
│   ├── layout.tsx
│   └── template.tsx
├── (main)
│   ├── layout.tsx
│   ├── page.tsx
│   └── template.tsx
```
比如官方 playground 中关于电子商务的例子，main 和 checkout 的 layout 是不同的，可以根据实现功能自定义分组代码目录。
# 项目体验
## 安装chakraUI
```
pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
## page
```tsx
// pages/_app.ts
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app";

// 引入默认主题
const theme = extendTheme()

const MyApp = ({Component, pageProps}: AppProps) =>{
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
```
## layout
```jsx
// app/layout.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
```
# react-responsive-carousel
使用轮播图.
```
pnpm add react-responsive-carousel
```
## 使用
```jsx
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
