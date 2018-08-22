/**
 *@Time  2018/8/19 19:28
 *@Author  沐沐
 *@Description
 *       -整个界面的动态切换
 *       -采用ES6语法
 *@return
 **/
$(() => {
    //初始化，注册面板隐藏
    $('.Register-body').hide();
    //点击注册按钮进行动态切换
    $('#register').click(() => {
        $('.login-body').hide();
        $('.Register-body').show(300);
    });
    //点击登陆按钮进行动态切换
    $('#login').click(() => {
        $('.Register-body').hide();
        $('.login-body').show(300);
    });
    //登陆面板，图标变换，预设800毫秒之后提交表单
    $('#Login-Button').click(() => {
        $('#Login-Button>i').removeClass('fa-paper-plane')
            .addClass('fa-spinner fa-pulse');
        let studentNumber = $('#Usernumber').val();
        let password = $('#password').val();
        let obj = {studentNumber,password};
        setTimeout(() => {
            //点击登陆同时验证ajax，如果后台返回success,那么延迟八毫秒提交表单，如果返回error，那么在当前页面显示错误信息
            $.post('/check',{obj},(data)=>{
                if(Object.is(data,'success')){
                    $('#Login-Form').submit();
                }
                else if(Object.is(data,'error')){
                    $('#message').html('用户名或者密码错误！')
                }
            })
        }, 800)
    });
    //注册面板，图标变换，预设800毫秒之后提交表单
    $('#Enroll-Button').click(() => {
        $('#Enroll-Button>i').removeClass('fa-paper-plane-o')
            .addClass('fa-spinner fa-pulse');
        setTimeout(() => {
            $('#Enroll-Form').submit();
        }, 800)
    });
});
