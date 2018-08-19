$(() => {
    $('.Register-body').hide();
    $('#register').click(() => {
        $('.login-body').hide();
        $('.Register-body').show(300);
    });
    $('#login').click(() => {
        $('.Register-body').hide();
        $('.login-body').show(300);
    });
    $('#Login-Button').click(() => {
        $('#Login-Button>i').removeClass('fa-paper-plane')
            .addClass('fa-spinner fa-pulse');
        setTimeout(() => {
            $('#Login-Form').submit();
        }, 800)
    });
    $('#Enroll-Button').click(() => {
        $('#Enroll-Button>i').removeClass('fa-paper-plane-o')
            .addClass('fa-spinner fa-pulse');
        setTimeout(() => {
            $('#Enroll-Form').submit();
        }, 800)
    });
});