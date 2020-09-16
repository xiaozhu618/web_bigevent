$(function() {
    var layer=layui.layer;
    //渲染页面
    //获取数据
    getData()
    function getData() {
        var trs = [];
        $.ajax({
            url:'/my/article/cates',
            method:'GET',
            success:function(res) {
                if(res.status!==0) {
                    return layer.msg('获取用户数据失败！')
                }
                console.log(res);
                var htmlStr = template('moban',res);
                $('tbody').html(htmlStr)
            }
        })
    }
    var indexEdit = null
    $('tbody').on('click', '.btn-edit', function() {
      // 弹出一个修改文章分类信息的层
      indexEdit = layer.open({
        type: 1,
        area: ['500px', '250px'],
        title: '修改文章分类',
        content: $('#dialog-edit').html()
      })
    })
})