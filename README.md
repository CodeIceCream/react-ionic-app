# 创建项目
## 使用ionic

1. 引入ionic库

   `npm install -g @ionic/cli`

2. 创建ionic项目

   ` ionic start react-ionic-app tabs`

   使用`ionic start --list`可查看可创建的框架模板，开始的时候有三种框架（Angular、Vue、React），三种ionic模板（tabs、sidemenu、blank）选择

3. 运行项目

   ` ionic serve` 可以让你的应用跑着浏览器上

4. 添加运行环境（容器）

   `ionic capacitor add xxx`

5. 生成引用图标和卖弄你的屏幕

   `cordova-res --skip-config --copy`

6. 浏览Ionic文档中的组件、教程

   https://ion.link/docs

 ## ionic6更新说明
  + ionic6支持react17+，建议react相关库升级到最新版本
        `npm install react@latest react-dom@latest`
      `npm install @ionic/react@6 @ionic/react-router@6`
  + 在你的项目中找到`package.json`，找到`script`的`test`字段，更新为以下内容
  ```json
  {
    "test": "react-scripts test --transformIgnorePatterns 'node_modules/(?!(@ionic/react|@ionicreact-router|@ionic/core|@stencil/core|ionicons)/)'"
  }
  
  ```

+ 在你的引用中导入和调用 `setupIonicReact`，开发人员必须导入并调用`setupIonicReact`，即使他们没有设置自定义配置。(最新项目模板已有)

  ```tsx
  import { setupIonicReact } from '@ionic/react';
  setupIonicReact()
  ```

  

+ 需要在React项目中引入必须的CSS，添加至根组件App中(最新项目模板已有)

  ```tsx
  /* Core CSS required for Ionic components to work properly */
  import '@ionic/react/css/core.css';
  
  /* Basic CSS for apps built with Ionic */
  import '@ionic/react/css/normalize.css';
  import '@ionic/react/css/structure.css';
  import '@ionic/react/css/typography.css';
  
  /* Optional CSS utils that can be commented out */
  import '@ionic/react/css/padding.css';
  import '@ionic/react/css/float-elements.css';
  import '@ionic/react/css/text-alignment.css';
  import '@ionic/react/css/text-transformation.css';
  import '@ionic/react/css/flex-utils.css';
  import '@ionic/react/css/display.css';
  ```

  

+ 使用以下命令都可在默认浏览器中开启你的本地服务器启动ionic项目

  `ionic serve`  开启本地8100端口

  `npm start`  开启本地3000端口

+ 需要安装ionic一些工具

  安装Ionic CLI（ionic）、native-run（用于在设备和模拟器/仿真器上运行本机二进制文件）和cordova-res（用于生成本机应用程序图标和闪屏）

  `npm install -g @ionic/cli native-run cordova-res`

  安装发现有个`sharp库`一直下不下来，本项目解决途径：

  为该库配置专门的镜像地址后再次执行安装命令

  ```shell
  npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
  npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
  ```

## 在手机中运行你的项目
  ### 生成你的原生项目
    + 使用capacitor(推荐：项目自带)  

      生成Android项目：
        `ionic capacitor add android`  

      生成iOS项目：
        `ionic capacitor add ios`

      设置包ID：
        对于`capacitor`请打开`capacitor.config.json`文件并修改`appId`属性.
    
    + 使用Cordova  

      生成Android项目：
        `ionic cordova prepare android`  

      生成iOS项目：
        `ionic cordova prepare ios`
     
      设置包ID：
      对于Cordova，打开`config.xml`文件并修改标识符根元素的属性，<widget>
  
  ### 同步代码至已有项目
    + 更新本机平台项目以包含新添加的插件
      `ionic cap sync`
      会把新改动的代码更新同步至本机原生项目中