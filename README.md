## 说明

这是CC友链仓库，将友链一一记录在`data`文件夹中

上述教程仅为演示 不建议各位互换友链的小伙伴新建文件进行合并后，建议各位小伙伴选择已有标签进行合并。

你所申请的友链将全部在[CC的小伙伴们 | CC的部落格](https://blog.ccknbc.cc/blogroll/)中显示。

## 提交友链

### 第一步 fork项目

第一步，进入仓库并点击fork

![image-20220212172632781](https://file.acs.pw/picGo/2022/02/12/20220212172802.png)

### 第二步 添加连接

![image-20220212172859359](https://file.acs.pw/picGo/2022/02/12/20220212172859.png)

进入data目录，找到你想添加的分组，并单击文件。（如果没有，可以点击右上方的`Add file`按钮进行新增）

例如，我添加如下友链到新的文件`测试.yml`

```yaml
name: CC康纳百川
link: https://blog.ccknbc.cc
avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
descr: CC康纳百川的小窝
```



1. 点击`Add file`按钮，并选择`Create new file`按钮

   ![image-20220212173144260](https://file.acs.pw/picGo/2022/02/12/20220212173144.png)

2. 写入内容

   ```yaml
   class_name: 测试分组
   class_desc: 这是一个测试使用的分组
   link_list:
     - name: CC康纳百川
       link: https://blog.ccknbc.cc
       avatar: https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/ccknbc.png
       descr: CC康纳百川的小窝
       theme:
         style: default
         siteImage:
         
   ```

   > - `class_name`
   >
   >   该分组名称
   >
   > - `class_desc`
   >
   >   该分组的描述
   >
   > - `link_list`
   >
   >   连接数组
   >
   > - 文件名
   >
   >   理论上文件名可以随意填写（注意结尾的yml后缀），但是为了方便查找，建议将文件名命名为标签名。

   ![image-20220212173552246](https://file.acs.pw/picGo/2022/02/12/20220212173552.png)

3. 点击下方的按钮 提交文件到自己的仓库

   ![image-20220212173729095](https://file.acs.pw/picGo/2022/02/12/20220212173729.png)

4. 进行pull request

   ![image-20220212173834131](https://file.acs.pw/picGo/2022/02/12/20220212173834.png)

   点击`Open pull request`按钮后将跳转我的仓库，检查无误后即可`Create pull request`

   ![image-20220212174042068](https://file.acs.pw/picGo/2022/02/12/20220212174042.png)

   ![image-20220212174119470](https://file.acs.pw/picGo/2022/02/12/20220212174119.png)

   

5. 等待主人合并分支后，在主人的友链页即可看到你的友链



## 想要自用

如果你想通过此种方式进行友链互换，那么你也可以将此仓库进行fork。

### 原gitee友链迁移

将此仓库fork后，然后将此仓库拉取到本地。

1. 查看`src/transfer.js`文件，将第50行附近的连接修改为你的gitee友链json地址。
2. 运行`npm install && npm run transfer`即可在data文件生成文件。
3. 根据你的需要修改文件名即可

### 构建

将你迁移后的文件推送到GitHub后，只需要在`vercel`部署时修改构建命令和产物目录即可。cf pages同理 例如：

![image-20220212175154310](https://file.acs.pw/picGo/2022/02/12/20220212175154.png)

![image-20220212175232232](https://file.acs.pw/picGo/2022/02/12/20220212175232.png)

