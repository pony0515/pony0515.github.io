var PlayerNum = 0; ///人員總數量
var CourtsNum = 1; ///球場總數量
var WaitNum = 0; ///等待區人員目前數量
var WaitArray = new Array(0); ///等待區人員名單
var RestArray = new Array(0); ///休息區人員名單
var Court1Array = new Array(0); ///球場1名單
var Court2Array = new Array(0); ///球場2名單
var Court3Array = new Array(0); ///球場3名單
var Court4Array = new Array(0); ///球場4名單

var NWaitArray = new Array(0); ///等待區人員名單
var NRestArray = new Array(0); ///休息區人員名單
var NCourt1Array = new Array(0); ///球場1名單
var NCourt2Array = new Array(0); ///球場2名單
var NCourt3Array = new Array(0); ///球場3名單
var NCourt4Array = new Array(0); ///球場4名單

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
    $('#Waitgrouped span').css('width', '16vw');
    $('#Waitgrouped span').css('display', 'inline-block');
    CheckArray();
}

///true: 存在 false: 不存在
function checkspanValExist(name) {
    var n = $('#CourtsManage span').length;
    for (let i = 0; i < n; i++) {
        if (name === $('#CourtsManage span')[i].textContent) {
            return true;
        }
    }
    return false;
}

function AddTeamMembersToRest() {
    for (i = 0; i < MaleNum; i++) {
        ////不存在 則添加
        if (!checkspanValExist(MaleArray[i])) {
            PlayerNum++;
            str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + MaleArray[i] + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped input').css('width', '50px');
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', '16vw');
            $('#Restgrouped span').css('display', 'inline-block');
            CheckArray();
        }
    }
    for (i = 0; i < FemaleNum; i++) {
        if (!checkspanValExist(FemaleArray[i])) {
            PlayerNum++;
            str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + FemaleArray[i] + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped input').css('width', '50px');
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', '16vw');
            $('#Restgrouped span').css('display', 'inline-block');
            CheckArray();
        }
    }
    for (i = 0; i < VIPNum; i++) {
        if (!checkspanValExist(VIPArray[i])) {
            PlayerNum++;
            str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + VIPArray[i] + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped input').css('width', '50px');
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', '16vw');
            $('#Restgrouped span').css('display', 'inline-block');
            CheckArray();
        }
    }
}

function CheckElement() {
    $('#Court1').empty();
    $('#Court2').empty();
    $('#Court3').empty();
    $('#Court4').empty();
    $('#Waitgrouped').empty();
    $('#Restgrouped').empty();

    for (let index = 0; index < Court1Array.length; index++) {
        $('#Court1').append($(Court1Array[index]));
        $('#Court1 input').css('width', '50px');
        $('#Court1 input').hide();
        $('#Court1 span').css('width', '16vw');
        $('#Court1 span').css('display', 'inline-block');
    }
    for (let index = 0; index < Court2Array.length; index++) {
        $('#Court2').append($(Court2Array[index]));
        $('#Court2 input').css('width', '50px');
        $('#Court2 input').hide();
        $('#Court2 span').css('width', '16vw');
        $('#Court2 span').css('display', 'inline-block');
    }
    for (let index = 0; index < Court3Array.length; index++) {
        $('#Court3').append($(Court3Array[index]));
        $('#Court3 input').css('width', '50px');
        $('#Court3 input').hide();
        $('#Court3 span').css('width', '16vw');
        $('#Court3 span').css('display', 'inline-block');
    }
    for (let index = 0; index < Court4Array.length; index++) {
        $('#Court4').append($(Court4Array[index]));
        $('#Court4 input').css('width', '50px');
        $('#Court4 input').hide();
        $('#Court4 span').css('width', '16vw');
        $('#Court4 span').css('display', 'inline-block');
    }
    for (let index = 0; index < WaitArray.length; index++) {
        $('#Waitgrouped').append($(WaitArray[index]));
        $('#Waitgrouped input').css('width', '50px');
        $('#Waitgrouped input').hide();
        $('#Waitgrouped span').css('width', '16vw');
        $('#Waitgrouped span').css('display', 'inline-block');
    }
    for (let index = 0; index < RestArray.length; index++) {
        $('#Restgrouped').append($(RestArray[index]));
        $('#Restgrouped input').css('width', '50px');
        $('#Restgrouped input').hide();
        $('#Restgrouped span').css('width', '16vw');
        $('#Restgrouped span').css('display', 'inline-block');
    }
}

function CheckArray() {
    Court1Array.length = 0;
    Court2Array.length = 0;
    Court3Array.length = 0;
    Court4Array.length = 0;
    WaitArray.length = 0;
    RestArray.length = 0;

    NCourt1Array.length = 0;
    NCourt2Array.length = 0;
    NCourt3Array.length = 0;
    NCourt4Array.length = 0;
    NWaitArray.length = 0;
    NRestArray.length = 0;

    var n = $('.Court1 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court1 li')[index].className;
        targetspan = $('.Court1 span')[index].textContent;
        targetinput = $('.Court1 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        Court1Array.push(target);
        NCourt1Array.push(targetspan);
    }
    var n = $('.Court2 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court2 li')[index].className;
        targetspan = $('.Court2 span')[index].textContent;
        targetinput = $('.Court2 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        Court2Array.push(target);
        NCourt2Array.push(targetspan);
    }
    var n = $('.Court3 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court3 li')[index].className;
        targetspan = $('.Court3 span')[index].textContent;
        targetinput = $('.Court3 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        Court3Array.push(target);
        NCourt3Array.push(targetspan);
    }
    var n = $('.Court4 li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Court4 li')[index].className;
        targetspan = $('.Court4 span')[index].textContent;
        targetinput = $('.Court4 input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        Court4Array.push(target);
        NCourt4Array.push(targetspan);
    }
    var n = $('.Wait li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Wait li')[index].className;
        targetspan = $('.Wait span')[index].textContent;
        targetinput = $('.Wait input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        WaitArray.push(target);
        NWaitArray.push(targetspan);
    }
    var n = $('.Rest li').length;
    for (let index = 0; index < n; index++) {
        targetli = $('.Rest li')[index].className;
        targetspan = $('.Rest span')[index].textContent;
        targetinput = $('.Rest input')[index].id;
        targetli = (String)(targetli).replace(' dragging', '');
        target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
        RestArray.push(target);
        NRestArray.push(targetspan);
    }
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