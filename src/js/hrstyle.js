$(function(){
    
    //- Settings
    $('body').append('<div class="modal-background"></div>');

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
            bgModal.fadeOut();
        });
        return false;
    });
   

});
