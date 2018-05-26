// JavaScript File with JQuery
function showHide(lg = 1200, md = 992, sm = 768) {
    /*  -HTML class syntax: [lg/md/sm]-[show/hide]-[lg/md/sm]
            ex.) <div class="md-show"></div>
        -Default Variables:
            lg = 1200px
            md = 992px
            sm = 768px
        (Aligns with bootstrap [col]-[lg/md/sm/xs]-[1~12] min-width values)
        -Examples of defining restraints for element visibility, depending on screen width:
            [.lg-show-md]: Element only appears within range of less than lg and greater than/equal to sm
            [.show-md]: Element appears if width is anything greater than md
            [.lg-show]: Element appears as long as width is less than lg
        -Difference between show & hide (ex. sm-show vs. sm-hide):
            When width is within restraints, if the active effect is [show], the element will only appear within range
            If the active effect is [hide], the element won't appear within range and is visible otherwise
        -Examples of hide & show:
            [.show-md]: Element appears if greater than/equal to md and is hidden if less than md
            [.hide-md]: Element is hidden if greater than/equal to md and visible if less than md
    */
    
    $('.show-lg').hide();
    $('.show-md').hide();
    $('.show-sm').hide();
    $('.lg-show').hide();
    $('.lg-show-sm').hide()
    $('.lg-show-md').hide()
    $('.md-show').hide();
    $('.md-show-sm').hide()
    $('.sm-show').hide();
    
    $('.hide-lg').show();
    $('.hide-md').show();
    $('.hide-sm').show();
    $('.lg-hide').show();
    $('.lg-hide-sm').show()
    $('.lg-hide-md').show()
    $('.md-hide').show();
    $('.md-hide-sm').show()
    $('.sm-hide').show();
    
    //  lg screens
    if ($('*').width() >= lg) {
        //Shows in screen range
        $('.show-lg').show();
        $('.show-md').show();
        $('.show-sm').show();
        //Hidden in screen range
        $('.hide-lg').hide();
        $('.hide-md').hide();
        $('.hide-sm').hide();
    }
    //  md screens
    else if ($('*').width() >= md){
        //Shows in screen range
        $('.show-md').show();
        $('.show-sm').show();
        $('.lg-show').show();
        $('.lg-show-sm').show();
        $('.lg-show-md').show();
        //Hidden in screen range
        $('.hide-md').hide();
        $('.hide-sm').hide();
        $('.lg-hide').hide();
        $('.lg-hide-sm').hide();
        $('.lg-hide-md').hide();
    }
    //  sm screens
    else if ($('*').width() >= sm) {
        //Shows in screen range
        $('.show-sm').show();
        $('.lg-show').show();
        $('.lg-show-sm').show();
        $('.md-show').show();
        $('.md-show-sm').show();
        //Hidden in screen range
        $('.hide-sm').hide();
        $('.lg-hide').hide();
        $('.lg-hide-sm').hide();
        $('.md-hide').hide();
        $('.md-hide-sm').hide();
    }
    //  xs (less than sm) screens
    else {
        //Shown in screen range
        $('.lg-show').show();
        $('.md-show').show();
        $('.sm-show').show();
        //Hidden in screen range
        $('.lg-hide').hide();
        $('.md-hide').hide();
        $('.sm-hide').hide();
    }
}
function main() {
    $('.about-btn').click(function() {
       $(this).parentsUntil("#about").find('.text-left').slideToggle(400);
    });
    
    $('.js-parallax').width(function(index,currentValue){
        $(this).height(currentValue/4)
    });
    
    showHide();
    $(window).resize(function() {
        $('.js-parallax').width(function(index,currentValue){
            $(this).height(currentValue/4)
        });
        showHide();
    }); //Executes if window changes size
}
$(document).ready(main);