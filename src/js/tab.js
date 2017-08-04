$(function() {

    //Classes: tabs

    //Selectors
    var tab = $(".tab");

    //settings
    var speedAnimation = 200;

    var hrs = {
        'tab': function(tabParam){
            var btnClickTab = tabParam.find(".tab-header a");
            btnClickTab.first().addClass("tab-active");

            btnClickTab.on("click",function() {
                var divTab = $($(this).attr("href"));
                btnClickTab.removeClass("tab-active");
                tabParam.find(".tab-contents .tab-content").fadeOut(speedAnimation);
                divTab.delay(speedAnimation).fadeIn(speedAnimation);
                $(this).addClass("tab-active");
            });
        }
    };

    //Event
    hrs.tab(tab);
    

});