(function ($) {
    $.fn.marquee = function(urls, options) {
        var el = this;
        if(!urls) return;
        if(!this.hasClass('marquee')) this.addClass('marquee');
        //OPTIONS
        if(!options) options = {};
        if(!options.height) options.height = 500;
        if(!options.width) options.width= 300;
        if(!options.html) options.html = "";
        //RENDER 
        this.attr('style','height:'+options.height+'px;');
        var h="";
        $.each(urls,function(i,o){
            h+="<span style=\"width:"+options.width+"px;height:"+options.height+"px; background-image:url('"+o+"');\"></span>";
        });
        this.html("<div class='marquee-dark'>"+options.html+"</div><div class='marquee-wrap'>"+h+h+"</div>");
        //SET DIMENSIONS
        $(window).resize(function(){
            var marqWidth = urls.length*options.width;
            var marqWidthPad = (urls.length*2)*options.width;
            var bodyWidth = $(window).width();
            var end = bodyWidth-marqWidth;
            var id = Math.round(Math.random()*1000000);
            var speed = Math.round(marqWidth/bodyWidth*10)+10;
            var newRule = "@-webkit-keyframes marquee"+id+" {0% {left: 0;}100% {left: -"+marqWidth+"px;}};";
            $("body").append("<style>"+newRule+"</style>");
            el.find('.marquee-wrap').attr('style',' width:'+marqWidthPad+'px; -webkit-animation: marquee'+id+' '+speed+'s infinite linear;')
          });
          $(window).trigger('resize');
    };
}(jQuery));