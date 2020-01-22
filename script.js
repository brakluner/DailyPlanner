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
    
    for (var i = 0; i < schedule.length; i++) {
        
        var todo = schedule[i].timeSlot;
        var toro = schedule[i].events;

        var tr = $("<tr></tr>").text(todo);
        var td = $('<td></td>').text(toro);
        var editBtn = $('<button></button').text("Edit")

        tr.attr("id", "ZYXWVUTSRQ" [i]);
        td.addClass("ABCDEFGHI" [i]);
        editBtn.addClass("123456789" [i]);
        tr.appendTo(planTable);
        td.appendTo(tr);
        editBtn.appendTo(tr);    
    }
});
$(document).ready(function() {
    
    NOW = moment().format("H");

    var row1 = $("#Z");

    $("#Z").hover(function() {
        row1.animate({ height: "100px" });
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
        row2.animate({ height: "100px" });
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
        row3.animate({ height: "100px" });
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
        row4.animate({ height: "100px" });
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
        row5.animate({ height: "100px" });
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
        row6.animate({ height: "100px" });
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
        row7.animate({ height: "100px" });
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
        row8.animate({ height: "100px" });
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
        row9.animate({ height: "100px" });
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
        row10.animate({ height: "100px" });
    }, function() {
        row10.animate({height:""});
    })
    if (NOW<19) {
        $(row10).css("background-color", "#e8ff9c");

    } else $(row10).css("background-color", "#861200");
           $(row10).css("color", "#ffb45e");
})