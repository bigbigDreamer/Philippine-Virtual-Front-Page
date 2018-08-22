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
            //获取后台session,如果为空，提交表单，不为空，显示信息
            let msg = $('#message').html();
            if (msg ==null||msg==""){
                $('#Login-Form').submit();
            }
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
