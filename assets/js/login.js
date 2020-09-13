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
    var layer = layui.layer;
    $('#form_reg').on('submit',function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.post('/api/reguser',data,function(res) {
            if(res.status!= 0) {
                return layer.msg(res.message);
            }
            console.log(res);
            layer.msg('注册成功，请登录！');
            $('#link_login').click();
        })
    })
    $('#form_login').on('submit',function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.post('/api/login',data,function(res) {
            if(res.status!=0){
                return layer.msg('登录失败');
            }
            console.log(res);
            layer.msg('登录成功！');
            // 将登录成功得到的 token 字符串，保存到 localStorage 中
            localStorage.setItem('token', res.token);
            // 跳转到后台主页
            location.href = '/index.html';                                                           
        })
    })
})