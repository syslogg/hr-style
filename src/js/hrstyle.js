$(function(){
    
    //- Settings
    $('body').append('<div class="modal-background"></div>');
    var firstModalOpen = null;

    //- Classes: Modal
    var bgModal = $('.modal-background');
    var closeModal = $('.modal-close');
    var openModal = $('[rel="hr:modal"]');  

    //- Functions
    //Function that calls a modal
    //Params: Element: Modal element
    var modal = function(element) {
        bgModal.fadeIn("fast",function(){
            element.fadeIn("fast");
            if(firstModalOpen == null)
                firstModalOpen = element.attr("id");
        });
    };
    
    //- Events
    //Click to open a modal
    openModal.click(function(){
        var modalT = $($(this).attr('href'));
        modal(modalT);
        return false;
    });

    //Click to close a modal
    closeModal.click(function(){
        $(this).parent('.modal').fadeOut("fast",function(){
            //console.log($(this).attr("id"));
            if(firstModalOpen ==  $(this).attr("id")){
                bgModal.fadeOut();
                firstModalOpen = null;
            }
        });
        return false;
    });
   

});
