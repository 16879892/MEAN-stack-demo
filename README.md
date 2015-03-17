##MEAN Stack学习

-----------------------------------

####项目结构

1.1 水平结构 依据功能角色<br>
小型，目前采用<br>
|----app<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----controllers&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express Controller<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----models&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express Model<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----routes&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express router<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----views&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express View<br>
|<br>
|----config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----env&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express environment<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----config.js&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----express.js&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Express init<br>
|<br>
|----public<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----config&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Angular config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----controllers&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Angular Controller<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----css<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----directives&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Angular directive<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----filters&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Angular filters<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----img<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----views&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Angular Views<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----app.js&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Angular init<br>
|<br>
|----package.json<br>
|----server.js<br>
<br>
1.2 垂直结构 实现的功能<br>
大型，多人<br>
|----core                                             main application files<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----client<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----controllers<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----css<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----directives<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----filters<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----img<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----services<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----views<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----client.application.js<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----server<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----controllers<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----models<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----routes<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----views<br>
|<br>
|----feature                                          feature application files<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----client<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----controllers<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----css<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----directives<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----filters<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----img<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----services<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----views<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----client.application.js<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|----server<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----config<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----controllers<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----models<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----routes<br>
|&ensp;&ensp;&ensp;&ensp;&ensp;|&ensp;&ensp;&ensp;&ensp;&ensp;|----views<br>
|<br>
|----package.json<br>
|----server.js
