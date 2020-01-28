var storedTodos = []
$(document).ready(function() {

    var nowDay = moment().format("dddd");
    var nowDate = moment().format('Do');
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

    $('#logo').append(dayDisplay);
    $('#logo').append(dateDisplay);
    $('#logo').append(monthDisplay);
    $('#logo').append(yearDisplay);
    $('#logo').append(nowTime);
    $('body').append(planTable);
    $(planTable).append(thead1);
    $(planTable).append(thead2);
    $(planTable).append(thead3);


function update() {
  $('.clock').html(moment().format('H:mm:ss a'));
}

setInterval(update, 1000);

renderList()

$(document).on("click", ".A", function () {
    
    $('.A').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".A").addClass("AA")
        $(".A").removeClass("A");
        

        $(document).on("click", ".1", function() {
    
            var movie = $(input).val();

            storedTodos[0].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));

            $(".AA").addClass("A")
            $(".A").removeClass("AA")
            $(".A").text(storedTodos[0].events);

        });
    });
});
$(document).on("click", ".B", function () {
    
    $('.B').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".B").addClass("BB");
        $(".B").removeClass("B");

        $(document).on("click", ".2", function() {
    
            var movie = $(input).val();

            storedTodos[1].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));
            
            $(".BB").addClass("B")
            $(".B").removeClass("BB")
            $(".B").text(storedTodos[1].events);
        });
    });
});
$(document).on("click", ".C", function () {
    
    $('.C').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".C").addClass("CC");
        $(".C").removeClass("C");

        $(document).on("click", ".3", function() {
    
            var movie = $(input).val();

            storedTodos[2].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));

            $(".CC").addClass("C")
            $(".C").removeClass("CC")
            $(".C").text(storedTodos[2].events);
            
        });
    });
});
$(document).on("click", ".D", function () {
    
    $('.D').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".D").addClass("DD");
        $(".D").removeClass("D");

        $(document).on("click", ".4", function() {
    
            var movie = $(input).val();

            storedTodos[3].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));

            $(".DD").addClass("D")
            $(".D").removeClass("DD")
            $(".D").text(storedTodos[3].events);
            
        });
    });
});
$(document).on("click", ".E", function () {
    
    $('.E').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".E").addClass("EE");
        $(".E").removeClass("E");

        $(document).on("click", ".5", function() {
    
            var movie = $(input).val();

            storedTodos[4].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));
            

            $(".EE").addClass("E")
            $(".E").removeClass("EE")
            $(".E").text(storedTodos[4].events);
            
        });
    });
});
$(document).on("click", ".F", function () {
    
    $('.F').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".F").addClass("FF");
        $(".F").removeClass("F");

        $(document).on("click", ".6", function() {
    
            var movie = $(input).val();

            storedTodos[5].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));
            

            $(".FF").addClass("F")
            $(".F").removeClass("FF")
            $(".F").text(storedTodos[5].events);
            
        });
    });
}); 
$(document).on("click", ".G", function () {
    
    $('.G').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".G").addClass("GG");
        $(".G").removeClass("G");

        $(document).on("click", ".7", function() {
    
            var movie = $(input).val();

            storedTodos[6].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));
        

            $(".GG").addClass("G")
            $(".G").removeClass("GG")
            $(".G").text(storedTodos[6].events);
           
        });
    });
});
$(document).on("click", ".H", function () {
    
    $('.H').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".H").addClass("HH");
        $(".H").removeClass("H");

        $(document).on("click", ".8", function() {
    
            var movie = $(input).val();

            storedTodos[7].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));

            $(".HH").addClass("H")
            $(".H").removeClass("HH")
            $(".H").text(storedTodos[7].events);
            
        });
    });
}); 
$(document).on("click", ".I", function () {
    
    $('.I').each(function () {
        var html = $(this).html();
        var input = $('<input></input>');
        input.val(html);
        input.attr("id", "push")
        $(this).html(input);

        $(".I").addClass("II");
        $(".I").removeClass("I");

        $(document).on("click", ".9", function() {
    
            var movie = $(input).val();

            storedTodos[8].events = movie;
            $('#push').remove();
            localStorage.setItem("events", JSON.stringify(storedTodos));

            $(".II").addClass("I")
            $(".I").removeClass("II") 
            $(".I").text(storedTodos[8].events);
           
        });
    });
});       

});
function renderList() {
        storedTodos = localStorage.getItem("events");
        if (!storedTodos) {
            storedTodos = defaultSchedule
        } else {
            storedTodos = JSON.parse(storedTodos)
        }
    
    for (var i = 0; i < storedTodos.length; i++) {

        
        
        
        var todo = storedTodos[i].timeSlot;
        var toro = storedTodos[i].events;

        console.log(storedTodos[4])
    

        var tr = $("<tr></tr>").text(todo);
        var td = $('<td></td>').text(toro);
        var btnDiv = $('<div></div>')
        var editBtn = $('<button></button').text("Submit Changes!")

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