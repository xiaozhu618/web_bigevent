$(function() {
    var layer = layui.layer;
    var form = layui.form;
    initCate();
    function initCate() {
        //定义加载文章分类的方法
        $.ajax({
            url:'/my/article/cates',
            method:'GET',
            success:function(res) {
                if(res.status!==0) {
                    return layer.msg('初始化文章分类失败！！');
                }
                console.log(res);
                var htmlStr = template('tempo',res);
                $('[name=cate_id]').html(htmlStr);
                form.render()
            }
        })k
    }
    // 初始化富文本编辑器
initEditor();
})