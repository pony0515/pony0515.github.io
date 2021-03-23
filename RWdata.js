var p = {}; //promise
var MembersArray = new Array(0);

function ReadData(){
    p.txt = $.get('隊員名單.txt',null,function(x){
        logCompletion('get(txt)', x);
    });
    logCompletion('init',p.txt);

    window.setTimeout(function(){
        logCompletion('setTimeout',p.txt);
        MembersArray = p.txt.responseText.split(',');
        console.log( MembersArray );
        $.when(p.txt).done(function(a){
            logCompletion('setTimeout',a);
        });
    });
}

function WriteData(){
    $.ajax({
        url: 'Test.php',
        type: 'POST',
        dataType: 'json',
        data:{
            nickname: 'yoyoyo',
            gender: 'hehehe'
        },
        success: function(result){
            alert('OK');
        }
    });
}

function logCompletion() {
    var name = arguments[0];
    for (var i=1; i<arguments.length; ++i) {
	console.log('## ' + name + ' ## ' + JSON.stringify(arguments[i]));
    }
}