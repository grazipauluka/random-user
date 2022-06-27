$.ajax({
    url: 'https://randomuser.me/api/?results=15',
    dataType: 'json',
    success: function(data) {


        $.each(data.results, function(key, person) {
                let iconClass = person.gender;
              //  $("#users").append( `<div class = "col-md-2">`+ `<img src="${person.picture.large}">` + `<div>` + person.name.title.toLowerCase() + ' ' + person.name.first.toLowerCase() + ' ' + person.name.last.toLowerCase() + `</div>`  + '<div class="flag-icon flag-icon-' + person.nat.toLowerCase() + '"></div>' + ` <div class="`+iconClass+`">`  + ` <ion-icon name="logo-github"></ion-icon>` + ` <ion-icon name="logo-facebook"></ion-icon>` + `<ion-icon name="logo-twitter" </ion-icon>`  + ` </div>` + `</div>`)
                $("#users").append(`<div class = "col-md-2 mainDiv">`+ `</div>`)
                $(".mainDiv").append(`<img src="${person.picture.large}">`)
                $("img").addClass('rounded-circle');
                $(".mainDiv").append(`<div>` + person.name.title.toLowerCase() + ' ' + person.name.first.toLowerCase() + ' ' + person.name.last.toLowerCase() + `</div>`);
                $('.mainDiv').append('<div class="flag-icon flag-icon-' + person.nat.toLowerCase() + '"></div>')
                $(".mainDiv").append(` <div class="`+iconClass+`">`  + ` <ion-icon name="logo-github"></ion-icon>` + ` <ion-icon name="logo-facebook"></ion-icon>` + `<ion-icon name="logo-twitter" </ion-icon>`  + ` </div>`)
                $('.flag-icon').addClass('align-center');            
                })
            }
        });