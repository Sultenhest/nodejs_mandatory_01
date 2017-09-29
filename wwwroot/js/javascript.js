$( document ).ready( function() {
    $( '#sendmsg' ).click( function () {
        var name = $( '#name' ).val();
        var msg  = $( '#msg' ).val();

        if ( name == '' && msg == '' ) {
            alert('You didnt even fill out any of the fields.. :( ');
        } else if ( name == '' ) {
            alert('You need to fill out a name!');
        } else if ( msg == '' ) {
            alert('You need to fill out a message!');
        } else {
            var newMessage = '<div class="student-msg"><b>Message From:</b>' + name + '<br><b>Student Wrote: </b>' + msg + '</div>';

            $( '#msg-box' ).append( newMessage );
        }
    });
});