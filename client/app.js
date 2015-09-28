console.log('Hello Epsilon!');

$(document).ready(function(){

    var jsonArray = [];
    var eps = {};

    $.ajax({
        url: "/getEpsilon"
    }).done(function(response) {
        console.log("--received data--")
        jsonArray = response;
        console.log(response);
        console.log(response.length);
        var epsNames = [];
        eps = jsonArray.Epsilon;


        //get object names in an array so we can index them by number in the carousel
        var numStudents = 0;
        for (name in eps) {
            epsNames.push(name);
            numStudents++;
        }
        var index = 0;

        //bring text data over to the carousel window
        function displayPerson(index){
            $('.name').text       (eps[epsNames[index]].name);
            $('.description').text(eps[epsNames[index]].description);
            $('.shout').text      (eps[epsNames[index]].shoutOut);
            $('span').text(index+1);
        }

        displayPerson(index);

        //////////////////////////////
        // Previous and Next Buttons//
        //////////////////////////////

        //back up one student
        $('.prev').on('click', function(){
            console.log('saw prev button click ' + index);
            if(index==0){
                index=(numStudents-1);
            } else {
                index--;
            }
            $('.carousel').hide();
            displayPerson(index);
            $('.carousel').fadeIn(500);
        });

        //go forward one student
        $('.next').on('click', function(){
            console.log('saw next button click ' + index)
            if(index==(numStudents-1)){
                index=0;
            } else {
                index++;
            }

            //hide the current data then fade in the new
            $('.carousel').hide();
            displayPerson(index);
            $('.carousel').fadeIn(500);

        });

    });
});