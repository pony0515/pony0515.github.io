var PlayerNum = 0; ///人員總數量
var CourtsNum = 1; ///球場總數量
var WaitArray = new Array(0); ///等待區人員名單 HTML格式
var RestArray = new Array(0); ///休息區人員名單 HTML格式
var Court1Array = new Array(0); ///球場1名單 HTML格式
var Court2Array = new Array(0); ///球場2名單 HTML格式
var Court3Array = new Array(0); ///球場3名單 HTML格式
var Court4Array = new Array(0); ///球場4名單 HTML格式

// var ViewPlayersbutton = '';
// var ViewPlayersbuttonFontSize = '';
// var ViewPlayersInput = '5vw';
// var ViewPlayersSpan = '17vw';

var ViewPlayersbutton = '';
var ViewPlayersbuttonFontSize = '';
var ViewPlayersInput = '';
var ViewPlayersSpan = '17vw';

var Court1Html = new Array(0);
var Court2Html = new Array(0);
var Court3Html = new Array(0);
var Court4Html = new Array(0);
var WaitHtml = new Array(0);
var RestHtml = new Array(0);

function InitHideCourtNameInput() {
    $('#Court1NameInput').hide();
    $('#Court2NameInput').hide();
    $('#Court3NameInput').hide();
    $('#Court4NameInput').hide();
}

function shuffle(a, b) {
    var num = Math.random() > 0.5 ? -1 : 1;
    return num;
}

function checkPlayersCount() {
    var len = $('#Court1 li').length;
    $('.Court1Name u').text((String)(len) + '人');
    var len = $('#Court2 li').length;
    $('.Court2Name u').text((String)(len) + '人');
    var len = $('#Court3 li').length;
    $('.Court3Name u').text((String)(len) + '人');
    var len = $('#Court4 li').length;
    $('.Court4Name u').text((String)(len) + '人');
    var len = $('#Waitgrouped li').length;
    $('.Wait u').text((String)(len) + '人');
    var len = $('#Restgrouped li').length;
    $('.Rest u').text((String)(len) + '人');

    var len = $('#MMalegrouped li').length;
    $('.MMale u').text((String)(len) + '人');
    var len = $('#MFemalegrouped li').length;
    $('.MFemale u').text((String)(len) + '人');
    var len = $('#MVIPgrouped li').length;
    $('.MVIP u').text((String)(len) + '人');
}

function AddPayPlayers() {
    PlayerNum++;
    str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span style="background-color:gold" class="sortHandle">人員' + (String)(PlayerNum) + '</span></li>';
    var el = $(str);
    $('#Waitgrouped').append(el);
    $('#Waitgrouped button').css('width', ViewPlayersbutton);
    $('#Waitgrouped button').css('font-size', ViewPlayersbuttonFontSize);
    $('#Waitgrouped input').css('width', ViewPlayersInput);
    $('#Waitgrouped input').hide();
    $('#Waitgrouped span').css('width', ViewPlayersSpan);
    $('#Waitgrouped span').css('display', 'inline-block');
    var tmp = '.p' + (String)(PlayerNum);

    $('body').on('click', tmp + ' button', function () {
        if ($(tmp + ' button').text() === '改名') {
            $(tmp + ' input').show();
            $(tmp + ' button').text('確認');
        } else if ($(tmp + ' button').text() === '確認') {
            newName = $(tmp + ' input').val();
            newName = checkName(newName);
            newName = checkName(newName);
            newName = checkName(newName);
            if (newName != '') {
                $(tmp + ' span').text(newName);
            }
            $(tmp + ' input').hide();
            $(tmp + ' button').text('改名');
            CheckArray();
        }
    })
    CheckArray();
}


function CheckElement() {
    Court1Html.length = 0;
    Court2Html.length = 0;
    Court3Html.length = 0;
    Court4Html.length = 0;
    WaitHtml.length = 0;
    RestHtml.length = 0;
    
    var tmp = $('#Court1').html().split('</li>');
    for(i=0;i<tmp.length;i++){
        var tmp1 = tmp[i].split('<li');
        if( tmp1[1] != null ){
            Court1Html.push( tmp1[1] );
        }       
    }
    var tmp = $('#Court2').html().split('</li>');
    for(i=0;i<tmp.length;i++){
        var tmp1 = tmp[i].split('<li');
        if( tmp1[1] != null ){
            Court2Html.push( tmp1[1] );
        }       
    }
    var tmp = $('#Court3').html().split('</li>');
    for(i=0;i<tmp.length;i++){
        var tmp1 = tmp[i].split('<li');
        if( tmp1[1] != null ){
            Court3Html.push( tmp1[1] );
        }       
    }
    var tmp = $('#Court4').html().split('</li>');
    for(i=0;i<tmp.length;i++){
        var tmp1 = tmp[i].split('<li');
        if( tmp1[1] != null ){
            Court4Html.push( tmp1[1] );
        }       
    }
    var tmp = $('#Waitgrouped').html().split('</li>');
    for(i=0;i<tmp.length;i++){
        var tmp1 = tmp[i].split('<li');
        if( tmp1[1] != null ){
            WaitHtml.push( tmp1[1] );
        }       
    }
    var tmp = $('#Restgrouped').html().split('</li>');
    for(i=0;i<tmp.length;i++){
        var tmp1 = tmp[i].split('<li');
        if( tmp1[1] != null ){
            RestHtml.push( tmp1[1] );
        }       
    }
    checkPlayersCount();
}

function RefreshView(){
    $('#Court1').empty();
    $('#Court2').empty();
    $('#Court3').empty();
    $('#Court4').empty();
    $('#Waitgrouped').empty();
    $('#Restgrouped').empty();   

    for(i=0;i<Court1Html.length;i++){
        str = '<li' + Court1Html[i] + '</li>';
        var el = $(str);
        $('#Court1').append(el);
        $('#Court1 button').css('width', ViewPlayersbutton);
        $('#Court1 button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Court1 input').css('width', ViewPlayersInput);
        $('#Court1 input').hide();
        $('#Court1 span').css('width', ViewPlayersSpan);
        $('#Court1 span').css('display', 'inline-block');
        var tmp =   $('#Court1 li')[i].className;
        $('body').on('click', tmp + ' button', function () {
            if ($(tmp + ' button').text() === '改名') {
                $(tmp + ' input').show();
                $(tmp + ' button').text('確認');
            } else if ($(tmp + ' button').text() === '確認') {
                newName = $(tmp + ' input').val();
                newName = checkName(newName);
                newName = checkName(newName);
                newName = checkName(newName);
                if (newName != '') {
                    $(tmp + ' span').text(newName);
                }
                $(tmp + ' input').hide();
                $(tmp + ' button').text('改名');
                CheckArray();
            }
        })
    }
    for(i=0;i<Court2Html.length;i++){
        str = '<li' + Court2Html[i] + '</li>';
        var el = $(str);
        $('#Court2').append(el);
        $('#Court2 button').css('width', ViewPlayersbutton);
        $('#Court2 button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Court2 input').css('width', ViewPlayersInput);
        $('#Court2 input').hide();
        $('#Court2 span').css('width', ViewPlayersSpan);
        $('#Court2 span').css('display', 'inline-block');
        var tmp =   $('#Court2 li')[i].className;
        $('body').on('click', tmp + ' button', function () {
            if ($(tmp + ' button').text() === '改名') {
                $(tmp + ' input').show();
                $(tmp + ' button').text('確認');
            } else if ($(tmp + ' button').text() === '確認') {
                newName = $(tmp + ' input').val();
                newName = checkName(newName);
                newName = checkName(newName);
                newName = checkName(newName);
                if (newName != '') {
                    $(tmp + ' span').text(newName);
                }
                $(tmp + ' input').hide();
                $(tmp + ' button').text('改名');
                CheckArray();
            }
        })
    }
    for(i=0;i<Court3Html.length;i++){
        str = '<li' + Court3Html[i] + '</li>';
        var el = $(str);
        $('#Court3').append(el);
        $('#Court3 button').css('width', ViewPlayersbutton);
        $('#Court3 button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Court3 input').css('width', ViewPlayersInput);
        $('#Court3 input').hide();
        $('#Court3 span').css('width', ViewPlayersSpan);
        $('#Court3 span').css('display', 'inline-block');
        var tmp =   $('#Court3 li')[i].className;
        $('body').on('click', tmp + ' button', function () {
            if ($(tmp + ' button').text() === '改名') {
                $(tmp + ' input').show();
                $(tmp + ' button').text('確認');
            } else if ($(tmp + ' button').text() === '確認') {
                newName = $(tmp + ' input').val();
                newName = checkName(newName);
                newName = checkName(newName);
                newName = checkName(newName);
                if (newName != '') {
                    $(tmp + ' span').text(newName);
                }
                $(tmp + ' input').hide();
                $(tmp + ' button').text('改名');
                CheckArray();
            }
        })
    }
    for(i=0;i<Court4Html.length;i++){
        str = '<li' + Court4Html[i] + '</li>';
        var el = $(str);
        $('#Court4').append(el);
        $('#Court4 button').css('width', ViewPlayersbutton);
        $('#Court4 button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Court4 input').css('width', ViewPlayersInput);
        $('#Court4 input').hide();
        $('#Court4 span').css('width', ViewPlayersSpan);
        $('#Court4 span').css('display', 'inline-block');
        var tmp =   $('#Court4 li')[i].className;
        $('body').on('click', tmp + ' button', function () {
            if ($(tmp + ' button').text() === '改名') {
                $(tmp + ' input').show();
                $(tmp + ' button').text('確認');
            } else if ($(tmp + ' button').text() === '確認') {
                newName = $(tmp + ' input').val();
                newName = checkName(newName);
                newName = checkName(newName);
                newName = checkName(newName);
                if (newName != '') {
                    $(tmp + ' span').text(newName);
                }
                $(tmp + ' input').hide();
                $(tmp + ' button').text('改名');
                CheckArray();
            }
        })
    }
    for(i=0;i<WaitHtml.length;i++){
        str = '<li' + WaitHtml[i] + '</li>';
        var el = $(str);
        $('#Waitgrouped').append(el);
        $('#Waitgrouped button').css('width', ViewPlayersbutton);
        $('#Waitgrouped button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Waitgrouped input').css('width', ViewPlayersInput);
        $('#Waitgrouped input').hide();
        $('#Waitgrouped span').css('width', ViewPlayersSpan);
        $('#Waitgrouped span').css('display', 'inline-block');
        var tmp =   $('#Waitgrouped li')[i].className;
        $('body').on('click', tmp + ' button', function () {
            if ($(tmp + ' button').text() === '改名') {
                $(tmp + ' input').show();
                $(tmp + ' button').text('確認');
            } else if ($(tmp + ' button').text() === '確認') {
                newName = $(tmp + ' input').val();
                newName = checkName(newName);
                newName = checkName(newName);
                newName = checkName(newName);
                if (newName != '') {
                    $(tmp + ' span').text(newName);
                }
                $(tmp + ' input').hide();
                $(tmp + ' button').text('改名');
                CheckArray();
            }
        })
    }
    for(i=0;i<RestHtml.length;i++){
        str = '<li' + RestHtml[i] + '</li>';
        var el = $(str);
        $('#Restgrouped').append(el);
        $('#Restgrouped button').css('width', ViewPlayersbutton);
        $('#Restgrouped button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Restgrouped input').css('width', ViewPlayersInput);
        $('#Restgrouped input').hide();
        $('#Restgrouped span').css('width', ViewPlayersSpan);
        $('#Restgrouped span').css('display', 'inline-block');
        var tmp =   $('#Restgrouped li')[i].className;
        $('body').on('click', tmp + ' button', function () {
            if ($(tmp + ' button').text() === '改名') {
                $(tmp + ' input').show();
                $(tmp + ' button').text('確認');
            } else if ($(tmp + ' button').text() === '確認') {
                newName = $(tmp + ' input').val();
                newName = checkName(newName);
                newName = checkName(newName);
                newName = checkName(newName);
                if (newName != '') {
                    $(tmp + ' span').text(newName);
                }
                $(tmp + ' input').hide();
                $(tmp + ' button').text('改名');
                CheckArray();
            }
        })
    }
    CheckArray();
    checkPlayersCount();
}

function ClearCourtView(){
    $('#Court1').empty();
    $('#Court2').empty();
    $('#Court3').empty();
    $('#Court4').empty();
    $('#Waitgrouped').empty();
    $('#Restgrouped').empty();
    Court1Array.length = 0;
    Court2Array.length = 0;
    Court3Array.length = 0;
    Court4Array.length = 0;
    WaitArray.length = 0;
    RestArray.length = 0;
    Court1Html.length = 0;
    Court2Html.length = 0;
    Court3Html.length = 0;
    Court4Html.length = 0;
    WaitHtml.length = 0;
    RestHtml.length = 0;
    CheckArray();
    PlayerNum = 0;
}

function CheckArray() {
    Court1Array.length = 0;
    Court2Array.length = 0;
    Court3Array.length = 0;
    Court4Array.length = 0;
    WaitArray.length = 0;
    RestArray.length = 0;

    var n = $('.Court1 li').length;
    for (let index = 0; index < n; index++) {
        targetspan = $('.Court1 span')[index].textContent;     
        Court1Array.push(targetspan);
    }
    var n = $('.Court2 li').length;
    for (let index = 0; index < n; index++) {
        targetspan = $('.Court2 span')[index].textContent;
        Court2Array.push(targetspan);
    }
    var n = $('.Court3 li').length;
    for (let index = 0; index < n; index++) {
        targetspan = $('.Court3 span')[index].textContent;
        Court3Array.push(targetspan);
    }
    var n = $('.Court4 li').length;
    for (let index = 0; index < n; index++) {
        targetspan = $('.Court4 span')[index].textContent;
        Court4Array.push(targetspan);
    }
    var n = $('.Wait li').length;
    for (let index = 0; index < n; index++) {
        targetspan = $('.Wait span')[index].textContent;
        WaitArray.push(targetspan);
    }
    var n = $('.Rest li').length;
    for (let index = 0; index < n; index++) {
        targetspan = $('.Rest span')[index].textContent;
        RestArray.push(targetspan);
    }
    WritePlayers();
}

function CheckCourtsNum() {
    switch ( parseInt(CourtsNum) ) {
        case 1:
            $('.AdjustCourtsNum_1 button').css('background-color', 'yellowgreen');
            $('.AdjustCourtsNum_2 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_3 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_4 button').css('background-color', 'wheat');
            $('.Court1').show();
            $('.Court2').hide();
            $('.Court3').hide();
            $('.Court4').hide();
            break;

        case 2:
            $('.AdjustCourtsNum_1 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_2 button').css('background-color', 'yellowgreen');
            $('.AdjustCourtsNum_3 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_4 button').css('background-color', 'wheat');
            $('.Court1').show();
            $('.Court2').show();
            $('.Court3').hide();
            $('.Court4').hide();
            break;

        case 3:
            $('.AdjustCourtsNum_1 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_2 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_3 button').css('background-color', 'yellowgreen');
            $('.AdjustCourtsNum_4 button').css('background-color', 'wheat');
            $('.Court1').show();
            $('.Court2').show();
            $('.Court3').show();
            $('.Court4').hide();
            break;

        case 4:
            $('.AdjustCourtsNum_1 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_2 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_3 button').css('background-color', 'wheat');
            $('.AdjustCourtsNum_4 button').css('background-color', 'yellowgreen');
            $('.Court1').show();
            $('.Court2').show();
            $('.Court3').show();
            $('.Court4').show();
            break;

        default:
            $('.AdjustCourtNumBtn_1').css('background-color', 'wheat');
            $('.AdjustCourtNumBtn_2').css('background-color', 'wheat');
            $('.AdjustCourtNumBtn_3').css('background-color', 'wheat');
            $('.AdjustCourtNumBtn_4').css('background-color', 'wheat');
            $('.Court1').hide();
            $('.Court2').hide();
            $('.Court3').hide();
            $('.Court4').hide();
            break;
    }
}