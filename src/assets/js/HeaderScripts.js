import $ from 'jquery';

export default class HeaderScripts {
    setNavbar() {
        $(window).scroll(function() {
            let $this = $(this);
            if($this.scrollTop() > $(".hero").outerHeight() - 150) {
                $(".main-navbar").addClass("bg-dark");
            }else{
                $(".main-navbar").removeClass("bg-dark");
            }

            $("section").each(function() {
                if($this.scrollTop() >= ($(this).offset().top - $(".main-navbar").outerHeight())) {
                    $(".smooth-link").parent().removeClass("active");
                    $(".smooth-link[href='#"+$(this).attr("id")+"']").parent().addClass('active');
                }
            });
        });
    }

    setEaseScroll() {
        $(".smooth-link").click(function() {
            let $this = $(this),
                $target = $($this.attr("href"));
            $("html, body").animate({
                scrollTop: $target.offset().top - ($(".main-navbar").outerHeight() - 1)
            });

            return false;
        });
    }
}