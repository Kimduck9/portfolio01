$(document).ready(function(){
    //로그인 탭메뉴
    const log_tab = $(".login_tab ul li")
        const log_cont = $(".login_cont > article")
        log_cont.hide().eq(0).show()
    
        log_tab.click(function(e){
        e.preventDefault();
        let target = $(this)
        let index = target.index()
        console.log(index)

        log_tab.removeClass("active")
        target.addClass("active")
        log_cont.hide().eq(index).show()
    });

    $(".login_tab .click").click(function(){
        $(".cs").show()
    });
    $(".login_tab .active").click(function(){
        $(".cs").hide()
    });
});