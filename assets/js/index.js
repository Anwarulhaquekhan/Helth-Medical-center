$(document).ready(function () {
    

    function animateText() {
        $(".text-subheader").animate({
            fontSize: "15px"
        }, 1000);
        $(".text-header").animate({
            fontSize: "35px"
        }, 1000);
    }


    animateText();

    $("#menubar ul li").click(function () {
        $("#menubar ul li").removeClass("active");
        $(this).addClass("active");

        let idName = this.firstElementChild.id;
        $(".text-subheader").text("");

        $("#consultBtn").hide();

        if (idName == "homeItem") {

            $("#consultBtn").show();
            $(".text-subheader").text("LET'S MAKE YOUR LIFE HAPPIER");
            $(".text-header").text("Healthy Living");

            $(".text-subheader").css({
                fontSize: "1px"
            }, 1000);
            $(".text-header").css({
                fontSize: "1px"
            }, 1000);
            animateText();
           
        }
        else if (idName == "aboutusItem") {
            $(".text-header").text("About Us");
        } else if (idName == "doctorsItem") {
            $(".text-header").text("Doctors");
        } else if (idName == "contactusItem") {
            $(".text-header").text("Contact Us");
        }

    });

    $("#chat").click(function () {
        window.open(
            'https://api.whatsapp.com/send?phone=9619089689&text=',
            '_blank'
        );
    });
});