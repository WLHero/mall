    $(document).ready(function(){
        //移动端屏幕适配
        /*document.documentElement.style.fontSize = $("html").width() / 7.5 + 'px';
        if(parseFloat(document.documentElement.style.fontSize) > 56) {*/
            document.documentElement.style.fontSize = 50 + "px";
        // }
        $(window).on("change, resize",function(){
        document.documentElement.style.fontSize = $("html").width() / 7.5 + 'px';
         /*document.documentElement.style.fontSize = $("html").width() / 7.5 + 'px';
        if(parseFloat(document.documentElement.style.fontSize) > 50) {*/
            document.documentElement.style.fontSize = 50 + "px";
        // }
        });

        index();
        resizes();
    })
    
    $(window).resize(function(){
        resizes();
    })

    function index(){
       /**
         * 默认调用
         */
        !function () {
            if($('#J_Address').length > 0) {
                var $target = $('#J_Address');

                $target.citySelect();

                $target.on('click', function (event) {
                    event.stopPropagation();
                    $target.citySelect('open');
                });

                $target.on('done.ydui.cityselect', function (ret) {
                    $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area).css({'opacity':1});
                });
            }
            
        }();
    }

function resizes(){
   if($('.fix_nav').length > 0) {
        $("body").css({'padding-bottom':$('.fix_nav').height()});
    }
     $('.minWinH').css({"min-height":$(window).height() - parseFloat($("body").css("padding-bottom")) - $('.commonHeader').height() - $('.nextStepPlace').height()});
}

$(function(){
    $("[data-original]").lazyload({effect: "fadeIn",threshold:"200"})
})

    