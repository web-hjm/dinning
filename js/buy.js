$(function(){
    var data = [{
        name: '盐焗鸡',
        price: 38,
        sum: 25,
        size: ['整只', '半只']
    },
    {
        name: '仔姜焖鸭',
        price: 45,
        sum: 10,
        size: ['整只', '半只']
    },
    {
        name: '茶树菇炒牛柳',
        price: 45,
        sum: 188,
    },
    {
        name: '鲍汁百合红腰豆',
        price: 20,
        sum: 999,
    },{
        name: '茶树菇炒牛柳',
        price: 45,
        sum: 188,
    },
    {
        name: '鲍汁百合红腰豆',
        price: 20,
        sum: 999,
    }]
   
    $('.buy_li').click(function(){
        $(this).addClass('buy_active').siblings('.buy_li').removeClass('buy_active');
        $('.buy_tittle').html($(this).text());
    });
    $('.buy_li').eq(0).trigger('click');

    function commodityMenu (data) {
        var html = '';
        for (var i = 0; j = data.length, i < j; i++) {
            html+='<div class="weui-cells"><div class="weui-cell"><div class="but_commodity_left"><img src="./微信图片_20180831105945.jpg" width="100%" style="display: inline-block"><p style="color: red" class="price" price=' + data[i].price + '>￥' + data[i].price.toFixed(2) + '</p></div><div class="but_commodity_right"><p >' +  data[i].name + '</p><p >已售'+ data[i].sum + '份</p><span class="buy_count"><span class="weui-count__decrease">-</span><span class="weui-count__number"></span><span class="weui-count__increase">+</span></span></div></div></div>';
        };
        $('.buy_right').append(html);
    }

    commodityMenu(data);

    function countSum () {
        var MAX = 99, MIN = 0;
        $('.weui-count__decrease').click(function (e) {
            var $input = $(e.currentTarget).parent().find('.weui-count__number');
            var number = parseInt($input.text() || "0") - 1;
            number < 1 &&  $(e.currentTarget).hide();
            if (number <= 0) {
                $(this).css('display', "none").siblings('.weui-count__number').css('display', "none");
            };
            $input.html(number);
            countNum();
        });
        $('.weui-count__increase').click(function (e) {
            var $input = $(e.currentTarget).parent().find('.weui-count__number');
            var number = parseInt($input.text() || "0") + 1;
            number >= 1 &&  $(e.currentTarget).parent().find('.weui-count__decrease,.weui-count__number').css("display", "inline-block");
            if (number > MAX) number = MAX;
            $input.html(number);
            countNum();
        });
    }

    function countNum() {
        let list = document.getElementsByClassName('weui-count__number');
        let arr = [];
        let arr2 = [];
        for (var i = 0; i < list.length; i++) {
           if (list[i].innerText) {
                arr.push(parseInt(list[i].innerText));
                arr2.push(parseInt($(list[i]).parents('.weui-cell').find('.price').attr('price')) * parseInt(list[i].innerText));
           }
        };
        console.log(arr2);
        $('.footer_text').html(arr.reduce((total, num) => {
            return total + num;
        })).css("display","inline-block");
        $('.footer_sum').html('￥' + arr2.reduce((total, num) => {
            return total + num;
        })).css("display","inline-block");
    }
    
    countSum();
});