/**
 * Created by young on 2017/3/15.
 */
// CMD  用到的时候require 进来
define(function(require, exports, module){
    var jQuery = require('jquery');
    var GoTop = require('com/gotop');

    new GoTop();
})




// requireJs 的实现  实际是 AMD 的规范
require(['carousel', 'tab', 'lazy'], function(Carousel, Tab, Lazy){
    new Carousel();
    Tab.init();
    Lazy.init();
})




// 用到的时候 require  这是 CMD 的规范

// var carousel = require('./carousel');
//
// new carousel('.ct');
//
//
// var tab = require('./tab');
//
// tab.init();
//
// var lazy = require('./lazy');
//
// lazy.init('',function(){
//
// })
