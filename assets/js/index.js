$(function() {
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            method:'GET',
            url:'/my/userinfo',
            success:function(res) {
                if(res.status!==0){
                    return layui.layer.msg('获取用户信息失败！');
                }
                //调用函数渲染头像
                console.log(res);
                renderAvatar(res.data)
            }
        })
    }
   function renderAvatar(user) {
        var name = user.nickname || user.username;
        $('#welcome').html('欢迎&nbsp;&nbsp;'+name);
        if(user.user_pic!==null){
            $('.text-avatar').hide();
            $('.layui-nav-img').attr('src',user.user_pic);
        }else{
            var first = name[0].toUpperCase()
            $('.text-avatar').html(first).show();
            $('.layui-nav-img').hide();
        }
   }
   var layer = layui.layer;
   $('#btnLogout').on('click',function() {
    layer.confirm('确定退出吗？', {icon: 3, title:'提示'}, function(index){
        //do something
        localStorage.removeItem('token');
        location.href='/login.html';
        layer.close(index);
      });
   })
})