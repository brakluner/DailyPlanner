$(document).ready(function() {

    var nowDay = moment().format("dddd");
    var nowDate = moment().format('do');
    var nowMonth = moment().format("MMMM");
    var nowYear = moment().format("YYYY");
    var nowTime = moment().format('h:mm:ss a')

    var nowTime = $("<div></div>").text(nowTime)
    var yearDisplay = $("<div></div>").text(nowYear);
    var monthDisplay = $("<div></div>").text(nowMonth);
    var dateDisplay = $("<div></div>").text(nowDate);
    var dayDisplay = $('<span></span>').text(nowDay);
    var planTable = $("<table></table");
    var thead1 = $("<th></th>").text("Time");
    var thead2 = $("<th></th>").text("Events");
    var thead3 = $("<th></th>").text("Edit")



    yearDisplay.addClass('displayYear')
    monthDisplay.addClass("displayMonth")
    planTable.addClass("mainTable");
    dayDisplay.addClass('displayDay');
    dateDisplay.addClass("displayDate");
    nowTime.addClass("clock")
    planTable.attr("style", "width:100%")

    $('body').append(dayDisplay);
    $('body').append(dateDisplay);
    $('body').append(monthDisplay);
    $('body').append(yearDisplay);
    $('body').append(nowTime);
    $('body').append(planTable);
    $(planTable).append(thead1);
    $(planTable).append(thead2);
    $(planTable).append(thead3);

function update() {
  $('.clock').html(moment().format('H:mm:ss a'));
}

setInterval(update, 1000);

renderList()

$(document).on("click", ".1", function () {
    
    $('.A').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".1").addClass("AA");
        $(".1").removeClass("1");

        $(document).on("click", ".AA", function() {
    
            var movie = $(input).val();

            schedule[0].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[0].events)


            $(".A").text(schedule[0].events);
            $(".AA").addClass("1")
            $(".AA").removeClass("AA")
        });
    });
});
$(document).on("click", ".2", function () {
    
    $('.B').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".2").addClass("BB");
        $(".2").removeClass("2");

        $(document).on("click", ".BB", function() {
    
            var movie = $(input).val();

            schedule[1].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[1].events)

            $(".B").text(schedule[1].events);
            $(".BB").addClass("2")
            $(".BB").removeClass("BB")
        });
    });
});
$(document).on("click", ".3", function () {
    
    $('.C').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".3").addClass("CC");
        $(".3").removeClass("3");

        $(document).on("click", ".CC", function() {
    
            var movie = $(input).val();

            schedule[2].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[2].events)

        
            $(".C").text(schedule[2].events);
            $(".CC").addClass("3")
            $(".CC").removeClass("CC")
        });
    });
});
$(document).on("click", ".4", function () {
    
    $('.D').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".4").addClass("DD");
        $(".4").removeClass("4");

        $(document).on("click", ".DD", function() {
    
            var movie = $(input).val();

            schedule[3].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[3].events)

            $(".D").text(schedule[3].events);
            $(".DD").addClass("4")
            $(".DD").removeClass("DD")
        });
    });
});
$(document).on("click", ".5", function () {
    
    $('.E').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".5").addClass("EE");
        $(".5").removeClass("5");

        $(document).on("click", ".EE", function() {
    
            var movie = $(input).val();

            schedule[4].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[4].events)


            $(".E").text(schedule[4].events);
            $(".EE").addClass("5")
            $(".EE").removeClass("EE")
        });
    });
});
$(document).on("click", ".6", function () {
    
    $('.F').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".6").addClass("FF");
        $(".6").removeClass("6");

        $(document).on("click", ".FF", function() {
    
            var movie = $(input).val();

            schedule[5].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[5].events)

            
            $(".F").text(schedule[5].events);
            $(".FF").addClass("6")
            $(".FF").removeClass("FF")
        });
    });
}); 
$(document).on("click", ".7", function () {
    
    $('.G').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".7").addClass("GG");
        $(".7").removeClass("7");

        $(document).on("click", ".GG", function() {
    
            var movie = $(input).val();

            schedule[6].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[6].events)

        
            $(".G").text(schedule[6].events);
            $(".GG").addClass("7")
            $(".GG").removeClass("GG")
        });
    });
});
$(document).on("click", ".8", function () {
    
    $('.H').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".8").addClass("HH");
        $(".8").removeClass("8");

        $(document).on("click", ".HH", function() {
    
            var movie = $(input).val();

            schedule[7].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[7].events)

    
            $(".H").text(schedule[7].events);
            $(".HH").addClass("8")
            $(".HH").removeClass("HH")
        });
    });
}); 
$(document).on("click", ".9", function () {
    
    $('.I').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".9").addClass("II");
        $(".9").removeClass("9");

        $(document).on("click", ".II", function() {
    
            var movie = $(input).val();

            schedule[8].events.push(movie);
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(schedule));
            console.log(schedule[8].events)

            
            $(".I").text(schedule[8].events);
            $(".II").addClass("9")
            $(".II").removeClass("II")
        });
    });
});       

});
function renderList() {
    
    for (var i = 0; i < schedule.length; i++) {

        var storedTodos = JSON.parse(localStorage.getItem("events")) || [];
        
        var todo = schedule[i].timeSlot;
        var toro = storedTodos[i].events;

        console.log(storedTodos[4])
    

        var tr = $("<tr></tr>").text(todo);
        var td = $('<td></td>').text(toro);
        var btnDiv = $('<div></div>')
        var editBtn = $('<button></button').text("Edit")

        btnDiv.attr("id", "btnBack")
        tr.attr("id", "ZYXWVUTSRQ" [i]);
        td.addClass("ABCDEFGHI" [i]);
        editBtn.addClass("123456789" [i]);
        
        $(".mainTable").append(tr);
        td.appendTo(tr);
        btnDiv.appendTo(tr)
        editBtn.appendTo(btnDiv);    
    }
}
   
$(document).ready(function() {
    
    NOW = moment().format("H");

    var row1 = $("#Z");

    $("#Z").hover(function() {
        row1.animate({ height: "50px" });
    }, function() {
        row1.animate({height:""});
    })
    if (NOW<10) {
        $(row1).css("background-color", "#c5e100") &&
        $(row1).css("color", "#647ea4");

    } else $(row1).css("background-color", "#861200") &&
           $(row1).css("color", "#ffb45e");

    var row2 = $("#Y");

    $("#Y").hover(function() {
        row2.animate({ height: "50px" });
    }, function() {
        row2.animate({height:""});
    })
    if (NOW<11) {
        $(row2).css("background-color", "#c5e100") &&
        $(row2).css("color", "#647ea4");

    } else $(row2).css("background-color", "#861200") &&
           $(row2).css("color", "#ffb45e");
    
   var row3 = $("#X");

    $("#X").hover(function() {
        row3.animate({ height: "50px" });
    }, function() {
        row3.animate({height:""});
    })
    if (NOW<12) {
        $(row3).css("background-color", "#c5e100") &&
        $(row3).css("color", "#647ea4");

    } else $(row3).css("background-color", "#861200") &&
           $(row3).css("color", "#ffb45e");

    var row4 = $("#W");

    $("#W").hover(function() {
        row4.animate({ height: "50px" });
    }, function() {
        row4.animate({height:""});
    })
    if (NOW<13) {
        $(row4).css("background-color", "#c5e100") &&
        $(row4).css("color", "#647ea4");

    } else $(row4).css("background-color", "#861200") &&
           $(row4).css("color", "#ffb45e");

    var row5 = $("#V");

    $("#V").hover(function() {
        row5.animate({ height: "50px" });
    }, function() {
        row5.animate({height:""});
    })
    if (NOW<14) {
        $(row5).css("background-color", "#c5e100") &&
        $(row5).css("color", "#647ea4");

    } else $(row5).css("background-color", "#861200") &&
           $(row5).css("color", "#ffb45e");

    var row6 = $("#U");

    $("#U").hover(function() {
        row6.animate({ height: "50px" });
    }, function() {
        row6.animate({height:""});
    })
    if (NOW<15) {
        $(row6).css("background-color", "#c5e100") &&
        $(row6).css("color", "#647ea4");

    } else $(row6).css("background-color", "#861200") &&
           $(row6).css("color", "#ffb45e");

    var row7 = $("#T");

    $("#T").hover(function() {
        row7.animate({ height: "50px" });
    }, function() {
        row7.animate({height:""});
    })
    if (NOW<16) {
        $(row7).css("background-color", "#c5e100") &&
        $(row7).css("color", "#647ea4");

    } else $(row7).css("background-color", "#861200") &&
           $(row7).css("color", "#ffb45e");

    var row8 = $("#S");

    $("#S").hover(function() {
        row8.animate({ height: "50px" });
    }, function() {
        row8.animate({height:""});
    })
    if (NOW<17) {
        $(row8).css("background-color", "#c5e100") &&
        $(row8).css("color", "#647ea4");

    } else $(row8).css("background-color", "#861200") &&
           $(row8).css("color", "#ffb45e");

    var row9 = $("#R");

    $("#R").hover(function() {
        row9.animate({ height: "50px" });
    }, function() {
        row9.animate({height:""});
    })
    if (NOW<18) {
        $(row9).css("background-color", "#c5e100") &&
        $(row9).css("color", "#647ea4");

    } else $(row9).css("background-color", "#861200") &&
           $(row9).css("color", "#ffb45e");

    var row10 = $("#Q");

    $("#Q").hover(function() {
        row10.animate({ height: "50px" });
    }, function() {
        row10.animate({height:""});
    })
    if (NOW<19) {
        $(row10).css("background-color", "#e8ff9c");

    } else $(row10).css("background-color", "#861200");
           $(row10).css("color", "#ffb45e");
})