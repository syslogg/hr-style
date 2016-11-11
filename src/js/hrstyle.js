$(function(){
    
    //- Settings
    $('body').append('<div class="modal-background"></div>');
    var firstModalOpen = null;
    var countModalAjaxOpened = 0;

    //- Classes: Modal
    var bgModal = $('.modal-background');
    var closeModal = $('.modal-close');
    var openModal = $('[rel="hr:modal"]'); 
    var openModalAjax = $('[rel="hr:modalAjax"]'); 

    //- Functions
    //Function that calls a modal
    //Params: Element: Modal element
    var hr = {
        'modal': function(element) {
            bgModal.fadeIn("fast",function(){
                element.fadeIn("fast");
                if(firstModalOpen == null)
                    firstModalOpen = element.attr("id");
            });
        }
    };
    
    //- Events
    //Click to open a modal
    openModal.click(function(){
        var modalT = $($(this).attr('href'));
        hr.modal(modalT);
        return false;
    });

    openModalAjax.on('click',function(e){
        
        $('body').append('<div class="modal" style="background:white;" modal-ajax="true" id="'+$(this).attr("data-id") +'"></div>');
        
        //$("#"+$(this).attr("data-id")).load($(this).attr("href"));
        
        $.ajax({ type: "GET",   
            url: $(this).attr("href"),   
            //async: false,
            success : function(text)
            {
                
                console.log($("#"+$(this).attr("data-id")).append(text));
            }
        });
        

        $("#"+$(this).attr("data-id")).html("Testee");
        //$("#"+$(this).attr("data-id")).load($(this).attr("href"));
        hr.modal($("#"+$(this).attr("data-id")));
        
        return false;
    });

    //Click to close a modal
    closeModal.on('click',function(){
        $(this).parent('.modal').fadeOut("fast",function(){ 

            if(firstModalOpen ==  $(this).attr("id")){
                bgModal.fadeOut();
                firstModalOpen = null;
            }
            if(Boolean($(this).attr("modal-ajax"))) {
                $(this).remove();
            }
        });
        return false;
    });
   

});
