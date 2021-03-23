var PlayerNum = 0; ///人員總數量
var CourtsNum = 1; ///球場總數量
var WaitNum = 0; ///等待區人員目前數量
var WaitArray = new Array(0); ///等待區人員名單
var Court1Array = new Array(0); ///球場1名單
var Court2Array = new Array(0); ///球場2名單
var Court3Array = new Array(0); ///球場3名單
var Court4Array = new Array(0); ///球場4名單


function TargetError(el) {
    $(el).css('background-color', 'red');
}

function TargetOK(el) {
    $(el).css('background-color', 'sandybrown');
}

function AddPlayers() {
    PlayerNum++;
    str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">人員' + (String)(PlayerNum) + '</span></li>';
    var el = $(str);
    $('#Waitgrouped').append(el);
    $('#Waitgrouped input').css('width', '50px');
    $('#Waitgrouped input').hide();
    $('#Waitgrouped span').css('width', '18vw');
    $('#Waitgrouped span').css('display', 'inline-block');
    CheckArray();
}

function CheckElement() {
    $('#Court1').empty();
    $('#Court2').empty();
    $('#Court3').empty();
    $('#Court4').empty();
    $('#Waitgrouped').empty();

    for (let index = 0; index < Court1Array.length; index++) {
        $('#Court1').append($(Court1Array[index]));
        $('#Court1 input').css('width', '50px');
        $('#Court1 input').hide();
        $('#Court1 span').css('width', '18vw');
        $('#Court1 span').css('display', 'inline-block');
    }
    for (let index = 0; index < Court2Array.length; index++) {
        $('#Court2').append($(Court2Array[index]));
        $('#Court2 input').css('width', '50px');
        $('#Court2 input').hide();
        $('#Court2 span').css('width', '18vw');
        $('#Court2 span').css('display', 'inline-block');
    }
    for (let index = 0; index < Court3Array.length; index++) {
        $('#Court3').append($(Court3Array[index]));
        $('#Court3 input').css('width', '50px');
        $('#Court3 input').hide();
        $('#Court3 span').css('width', '18vw');
        $('#Court3 span').css('display', 'inline-block');
    }
    for (let index = 0; index < Court4Array.length; index++) {
        $('#Court4').append($(Court4Array[index]));
        $('#Court4 input').css('width', '50px');
        $('#Court4 input').hide();
        $('#Court4 span').css('width', '18vw');
        $('#Court4 span').css('display', 'inline-block');
    }
    for (let index = 0; index < WaitArray.length; index++) {
        $('#Waitgrouped').append($(WaitArray[index]));
        $('#Waitgrouped input').css('width', '50px');
        $('#Waitgrouped input').hide();
        $('#Waitgrouped span').css('width', '18vw');
        $('#Waitgrouped span').css('display', 'inline-block');
    }
}

function CheckArray() {
    Court1Array.length = 0;
    Court2Array.length = 0;
    Court3Array.length = 0;
    Court4Array.length = 0;
    WaitArray.length = 0;
    var n = $('.Court1 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court1 li')[index].className;
        targetspan = $('.Court1 span')[index].textContent;
        targetinput = $('.Court1 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        Court1Array.push(target);
    }
    var n = $('.Court2 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court2 li')[index].className;
        targetspan = $('.Court2 span')[index].textContent;
        targetinput = $('.Court2 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        Court2Array.push(target);

    }
    var n = $('.Court3 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court3 li')[index].className;
        targetspan = $('.Court3 span')[index].textContent;
        targetinput = $('.Court3 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';

        Court3Array.push(target);
    }
    var n = $('.Court4 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court4 li')[index].className;
        targetspan = $('.Court4 span')[index].textContent;
        targetinput = $('.Court4 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';

        Court4Array.push(target);
    }
    var n = $('.Wait li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Wait li')[index].className;
        targetspan = $('.Wait span')[index].textContent;
        targetinput = $('.Wait input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';

        WaitArray.push(target);
    }
    console.log(Court1Array);
    console.log(Court2Array);
    console.log(Court3Array);
    console.log(Court4Array);
    console.log(WaitArray);
}

function CheckCourtsNum() {
    switch (CourtsNum) {
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

function SetWaitting() {
    str = '<div class="Empty"></div>'
    console.log(str);
    var el = $(str);
    $('#Waitgrouped').append(el);
    $('.Empty').css('float', 'left');
    $('.Empty').css('width', '960px');
    $('.Empty').css('margin', '10px');
}