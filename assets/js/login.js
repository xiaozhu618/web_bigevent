$(function() {
    $('#link_reg').on('click',function() {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    $('#link_login').on('click',function() {
        $('.reg-box').hide();
        $('.login-box').show();
    })
    var form = layui.form;
    form.verify({
        pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],
        repwd:function(value) {
            var pwd = $('.ppp').val();
            if (pwd !== value) {
                return '两次密码不一致！'
              }
        }
    })
})