// $('.hasframe').on('mouseenter',function(e){
//     popout(e);
// })
// $('.closeframe').on('click',function(e){
//     $('.hasframe').off('mouseenter');
//     $('.iframe-recharge').stop(true,true).animate({top: '209px'},500,function(){
//         setTimeout(function(){
//             $('.hasframe').on('mouseenter',function(e){
//                 popout(e)
//             })
//         },0);
//     })
// })
// $('.iframe-button').on('mouseenter',function(e){
//     $('.iframe-content.active,.iframe-button.active').removeClass('active')
//     $(this).addClass('active')
//     $(this).next('.iframe-content').addClass('active')
//     console.log(this)
// })
// function popout(e){
//     var $current = $(e.currentTarget)
//     var index = $current.attr('data-index')
//     var indexNumber = +index
//     $('.iframe-content.active,.iframe-button.active').removeClass('active')
//     $('.iframe-button').eq(indexNumber).addClass('active')
//     $('.iframe-content').eq(indexNumber).addClass('active')
//     $('.iframe-recharge').animate({top: '0px'},500,function(){})
// }


/************** 第一屏 中间轮播 封装 ********************/

var  Carousel = (function(){
    function _Carousel($ele) {
        this.$ele = $ele;
        this.init();
    }

    _Carousel.prototype = {
        init: function(){
                this.$imgList = this.$ele.find('.imglist');
                this.$items = this.$imgList.children();
                this.$prev = this.$ele.find('.prev');
                this.$next = this.$ele.find('.next');
                this.$jumpSec = this.$ele.find('.jumpto');
                this.imgCount = this.$items.length;
                this.curIdx = 0;
                this.inProcess = false;
                this.bind();
                this.play(0);
                this.autoPlay();
        },
        bind: function(){
                var _this = this;
                this.$prev.on('click',function(){
                    _this.playPrev();
                });
                this.$next.on('click',function(){
                    _this.playNext();
                });
                this.$jumpSec.find('li').on('mouseenter',function(){
                    var idx = $(this).index();
                    _this.play(idx);
                });
            },
        play: function(idx){
                var _this = this;
                if(this.inProcess){
                    return;
                }
                this.inProcess = true;
                this.$items.eq(_this.curIdx).fadeOut(500);
                this.$items.eq(idx).fadeIn(500,function (){
                    _this.inProcess = false;
                });
                this.curIdx = idx;
                this.jumpTo();
        },
        playNext: function(){
                    this.play((this.curIdx+1)%this.imgCount);
        },
        playPrev: function(){
                    this.play((this.curIdx-1)%this.imgCount);

        },
        jumpTo: function(){
                    this.$jumpSec.find('li').removeClass('active')
                                    .eq(this.curIdx).addClass('active');
        },
        stopAuto: function (){
                    clearInterval(_this.clock);
        },
        autoPlay: function(){
                    var _this = this;
                    _this.clock = setInterval(function(){
                       _this.playNext();
                    },5000)
                }
    };

    return {
        todo: function ($ct) {
                $ct.each(function(idx,node){
                    new _Carousel($(node));
                })
            }
    }
})();


Carousel.todo($('#first-screen .carousel'));

// Tab 封装
var Tab = (function(){

    function DoTab($ele) {
        this.$ele = $ele;
        var $tabCt = this.$ele.find('.tabs'),
            $tabNodes = $tabCt.children(),
            $panelNodes;

        $tabNodes.on('mouseenter', function (e) {
            // console.log(e);
            // console.log(this)
            var $target = $(this),
                index = $target.index();
            console.log(index);
            $tabNodes.removeClass('active');
            $target.addClass('active');
            $panelNodes = $target.parents('.mod-tab').find('.panel');
            $panelNodes.removeClass('active');
            $panelNodes.eq(index).addClass('active');
            });
        }

        return {
            doTab: function($ele){
                new DoTab($ele);
            }
        }

})()

Tab.doTab($('#first-screen .mod-tab'));

//
// $('#first-screen .mod_tab_head_item').on('mouseenter',function(e){
//     var idx = e.target.valueOf(),
//         $target = $(this);
//     console.log(e);
//     $('#first-screen .service-hidden .panel').removeClass('active');
//     $panelNodes = $target.parents('.service-hidden').find('.panel');
//     $panelNodes.eq(idx).addClass('active');
//
// });


// Tab.doTab($('#first-screen .right .bottom .mod-tab'))




