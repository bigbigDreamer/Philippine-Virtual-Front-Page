# Philippine-Virtual-Front-Page
 + Description
    - 我计划和我一个叫储亚波的小伙伴合作，完成一个叫Virtual-club-of-red-willow的项目。他负责后台代码，我负责整个前台代码。（En：I plan to cooperate with a small friend named ya bo chu to complete a project called Virtual-club-of-red-willow. He is responsible for the background code, and I am responsible for the entire front page.）
 + Tools
    - BootStrap@3.3.7
    - jQuery@3.2.1
    - Animate.css@3.7.0
    - FontAwesome@4.7.0
 + MainPages
    - index.html
    - homePage.html
 + FileDescription
    - css
      - 包含除了BootStrap默认样式的其他DIY样式文件。（En：Contains other DIY style files other than the BootStrap default style.）
    - js
      - 包含除了jQuery以外的DIY函数库，用于操作页面，使得页面动起来。（En：The DIY function library besides jQuery is included to manipulate the page and make it move.）
    - img
      - 包含整个网页美化图片。（En：Contains the entire page beautification picture.）
    - Tools-Box
      - 包含BootStrap,jQuery,Animate.css等外部依赖文件。（En：Contains the BootStrap, jQuery, the Animate. CSS external dependencies files, etc.）
    - views 
      - 包含所有的网页.html文件。（En：Contains all webpages. HTML files.）
 + Version
    - V1.0.0     @Time 2018.8.19
      - 创建仓库并且上传了文件夹Tools-Box，内部包含我所用到的各种依赖库以及相关文件。（En：I created the warehouse and uploaded the tools-box folder, which contained the various dependent libraries and related files I used.）
    - V1.0.1     @Time 2018.8.19
      - 完成了登录注册页面的编写，并且完善了页面的美化以及用户交互体验。（En：Finished writing the login and registration page, and improved the page beautification and user interaction experience.）
    - V1.0.2     @Time 2018.8.21  AM
      - 应后端工程师需要，修改了登陆页面的用户名为学号。(En：The user name of the login page was changed as required by the back-end engineer.)
    - V1.0.3     @Time 2018.8.21  PM
      - 完成了mainPage页面的编码，美化并且完善了用户体验。整体采用了BootStrap固定容器以及栅格布局，完成了常规响应式页面的基本规模。(En：Complete the coding of the mainPage page, beautify and perfect the user experience. The overall adopted BootStrap fixed container and grid layout to complete the basic scale of conventional responsive pages.)
    - V1.0.4     @Time 2018.8.22 AM
      - 应后端工程师的要求，简化方案，取消了登陆错误页面的计划，直接采用ajax技术，实现局部刷新的功能，具体代码，我放置在了index.js这个文件中，并且带有详细的说明。(En：At the request of the back-end engineer, the program was simplified, the plan of landing on the error page was cancelled, and the ajax technology was adopted directly to achieve the function of partial refresh. The specific code was placed in the file of index.js with detailed instructions.)
    - V1.0.5     @Time 2018.8.22 PM
      - 取消ajax的使用，将数据放入服务器session中，前台判断session数据信息，为空提交，不为空渲染。(En：Cancel the use of ajax, put the data into the server session, the front desk judges the session data information, submit for null, not render for empty.)
    - V1.0.6     @Time 2018.8.24 PM
      - 完成noticePage页面的编写以及美化，主要对应主页中的首页点击相应页面。(En：NoticePage page main writing and beautification, corresponding to the home page of the home page, click on the corresponding page.)
 + Question
    - NO.1      @Time 2018.8.19
      - 在使用FontAwesome旋转属性的时候，发现会有上下闪动的情况，在查阅了相关文档之后，发现是浏览器不兼容，尚未解决。（En：When using FontAwesome to rotate the property, it will flash up and down. After consulting relevant documents, it is found that the browser is not compatible and has not been solved.）
    - No.2      @Time 2018.8.24
      - 在构建页面时发现自己的UI审美以及色彩审美能力较弱，正在思考如何在以后的学习中加以拓展。(En：When building the page, I found my UI aesthetics and color aesthetics are weak, and I am thinking about how to expand them in the future study.)
 + Solution
    - NO.1    @Time 2018.8.20
      - 今天算是弄懂了为什么chrome浏览器上边使用animate.css的动图为什么会有抖动，后来在火狐浏览器上做了测试，我惊喜的发现完美兼容，这个问题算是告一段落。（En：Today, I figured out why animate.css animations were jittery on chrome, and when I tested them on firefox, I was surprised to find that they were perfectly compatible.）
