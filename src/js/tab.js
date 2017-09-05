$(function() {

    //Classes: tabs

    //Selectors
    var tab = $(".tab");

    //Classes
    var tabTxt = ".tab";
    var tabHeader = ".tab-header";
    var tabContent = ".tab-content";
    var tabActive = ".tab-active";
    var tabActiveNc = "tab-active";


    //settings
    var speedAnimation = 200;

    var hrs = {
        'tab': function(tabParam){
            var btnClickTab = tabParam.find(tabHeader+" a");
            tabParam.each(function() {
                $(this).find(tabHeader+" a").first().addClass(tabActiveNc);
            });

            btnClickTab.on("click",function() {

                if($(this).is(tabActive)) {
                    return false;
                }

                var divTab = $($(this).attr("href"));
                var test = $(this).parents(tabHeader).find(tabActive);
                
                $(this).parents(tabTxt).find(tabContent).fadeOut(speedAnimation);
                divTab.delay(speedAnimation).fadeIn(speedAnimation);
                test.removeClass(tabActiveNc);
                $(this).addClass(tabActiveNc);
            });

            
        }
    };

    //Event
    hrs.tab(tab);
});