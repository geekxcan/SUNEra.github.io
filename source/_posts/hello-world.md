---
title: My First Blog
---

## 为什么要写blog

做开发十几年了，从来没想过写blog，因为觉得没有什么高深的东西值得分享，都是自己记录笔记，但是想想也不是要做分享，在网上留点足迹，记录下自己的学习和生活，锻炼下写作和表达能力也是不错的嘛，顺便还能帮到人就更好了。

## 为什么要用hexo

这一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub，在加上搭配Next主题，大量可配置参数，不用自己手写前端页面，还能自动适配移动端，简直完美。特别适合我这种懒人。

## 为什么要用GitHub

GitHub作为最大的同性交友网站（笑），因为它的开源性，所以可以免费托管静态网页，而且还可以绑定自己的域名，再加上workflow，突出一个方便。

## 为什么要用Next主题

Next主题是一款基于hexo的主题，它的作者是一位中国人，所以中文文档很全，而且还有很多第三方插件，可以满足大部分需求，而且还有很多可配置参数，可以自定义，比如我就把它的默认主题色改成了蓝色，因为我喜欢蓝色。

### 常用命令

```bash
hexo new "My New Post" # 新建文章
hexo new page "about" # 新建页面
hexo clean # 清除缓存文件 (db.json) 和已生成的静态文件 (public)
hexo generate # 生成静态文件
hexo server # 启动服务预览
hexo deploy # 部署到GitHub
```

### Next常用配置
[Next配置参考](https://theme-next.js.org/docs/getting-started/)
    
    scheme 主题
    menu: 菜单
    ...
    custom_file_path 深度定制
    inject: 注入
    ...
简单的注入比如，在根目录下建个scripts文件夹，hexo会自动加载此文件夹的文件，然后添加个js文件，写入
``` JavaScript
hexo.extend.filter.register('theme_inject', function(injects) {
injects.sidebar.raw('随便一个名字', '你的raw html代码', {}, {cache: true});
});
```
其中 injects.sidebar.raw 中的 sidebar 可选范围是
```javascript
module.exports = {
views: ['head', 'header', 'sidebar', 'postMeta', 'postBodyStart', 'postBodyEnd', 'footer', 'bodyEnd', 'comment'],
styles: ['variable', 'mixin', 'style']
};
```

[inject参考](https://theme-next.js.org/docs/advanced-settings/injects.html)
    


