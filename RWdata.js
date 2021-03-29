var MPlayersNum = 0;
var MaleArray = new Array(0); ///男隊員名單 HTML格式
var FemaleArray = new Array(0); ///女隊員名單 HTML格式
var VIPArray = new Array(0); ///VIP隊員名單 HTML格式


function ReadPlayers() {
    CourtsNum = localStorage.getItem('球場總數量');
    if (len === null) CourtsNum = 1;

    var len = localStorage.getItem('球場1數量');
    if (len === null) len = 0;
    Court1Array.length = 0;
    for (i = 0; i < parseInt(len); i++) {
        var name = localStorage.getItem('球場1' + (String)(i + 1));
        Court1Array.push(name);
    }
    var len = localStorage.getItem('球場2數量');
    if (len === null) len = 0;
    Court2Array.length = 0;
    for (i = 0; i < parseInt(len); i++) {
        var name = localStorage.getItem('球場2' + (String)(i + 1));
        Court2Array.push(name);
    }
    var len = localStorage.getItem('球場3數量');
    if (len === null) len = 0;
    Court3Array.length = 0;
    for (i = 0; i < parseInt(len); i++) {
        var name = localStorage.getItem('球場3' + (String)(i + 1));
        Court3Array.push(name);
    }
    var len = localStorage.getItem('球場4數量');
    if (len === null) len = 0;
    Court4Array.length = 0;
    for (i = 0; i < parseInt(len); i++) {
        var name = localStorage.getItem('球場4' + (String)(i + 1));
        Court4Array.push(name);
    }
    var len = localStorage.getItem('等待區數量');
    if (len === null) len = 0;
    WaitArray.length = 0;
    for (i = 0; i < parseInt(len); i++) {
        var name = localStorage.getItem('等待區' + (String)(i + 1));
        WaitArray.push(name);
    }
    var len = localStorage.getItem('休息區數量');
    if (len === null) len = 0;
    RestArray.length = 0;
    for (i = 0; i < parseInt(len); i++) {
        var name = localStorage.getItem('休息區' + (String)(i + 1));
        RestArray.push(name);
    }
    console.log(Court1Array);
    console.log(Court2Array);
    console.log(Court3Array);
    console.log(Court4Array);
    console.log(WaitArray);
    console.log(RestArray);
}

function WritePlayers() {
    localStorage.setItem('球場總數量', CourtsNum);

    localStorage.setItem('球場1數量', Court1Array.length);
    for (i = 0; i < Court1Array.length; i++) {
        localStorage.setItem('球場1' + (String)(i + 1), Court1Array[i]);
    }
    localStorage.setItem('球場2數量', Court2Array.length);
    for (i = 0; i < Court2Array.length; i++) {
        localStorage.setItem('球場2' + (String)(i + 1), Court2Array[i]);
    }
    localStorage.setItem('球場3數量', Court3Array.length);
    for (i = 0; i < Court3Array.length; i++) {
        localStorage.setItem('球場3' + (String)(i + 1), Court3Array[i]);
    }
    localStorage.setItem('球場4數量', Court4Array.length);
    for (i = 0; i < Court4Array.length; i++) {
        localStorage.setItem('球場4' + (String)(i + 1), Court4Array[i]);
    }
    localStorage.setItem('等待區數量', WaitArray.length);
    for (i = 0; i < WaitArray.length; i++) {
        localStorage.setItem('等待區' + (String)(i + 1), WaitArray[i]);
    }
    localStorage.setItem('休息區數量', RestArray.length);
    for (i = 0; i < RestArray.length; i++) {
        localStorage.setItem('休息區' + (String)(i + 1), RestArray[i]);
    }
}

function StringtoMember() {
    var targetStr = prompt('請將複製好的隊員名單貼上\n注意,會刷新隊員名單');
    var target = (String)(targetStr).split(',');

    var findLengthJob = 0;
    var num = 0;
    var len = 0;
    var who = 0; ///0:男隊員 1:女隊員 2:VIP
    try {
        for (let i = 0; i < target.length - 1; i++) {
            switch (findLengthJob) {
                case 0: ///Find Lenght
                    len = parseInt(target[i]);
                    switch (who) {
                        case 0:
                            MaleArray.length = 0;
                            break;
                        case 1:
                            FemaleArray.length = 0;
                            break;
                        case 2:
                            VIPArray.length = 0;
                            break;
                    }
                    findLengthJob = 1;
                    break;

                case 1: ///Read Member
                    switch (who) {
                        case 0:
                            MaleArray.push(target[i]);
                            break;
                        case 1:
                            FemaleArray.push(target[i]);
                            break;
                        case 2:
                            VIPArray.push(target[i]);
                            break;
                    }
                    num++;
                    if (num == len) {
                        who++;
                        num = 0;
                        findLengthJob = 0;
                    }
                    break;
            }
        }
        console.log(MaleArray);
        console.log(FemaleArray);
        console.log(VIPArray);
        WriteMember('Male');
        WriteMember('Female');
        WriteMember('VIP');
        ReadMembers('Male');
        ReadMembers('Female');
        ReadMembers('VIP');
        checkPlayersCount();
    } catch (e) {
        alert(e);
    }
}

function MemberToString() {
    result = '';

    result += MaleArray.length + ',';
    for (let i = 0; i < MaleArray.length; i++) {
        result += MaleArray[i] + ',';
    }
    result += FemaleArray.length + ',';
    for (let i = 0; i < FemaleArray.length; i++) {
        result += FemaleArray[i] + ',';
    }
    result += VIPArray.length + ',';
    for (let i = 0; i < VIPArray.length; i++) {
        result += VIPArray[i] + ',';
    }
    Clipboard.copy(result);
}

function ReadMembers(who) {
    switch (who) {
        case 'Male':
            $('#MMalegrouped').empty();
            var len = localStorage.getItem('男隊員數量');
            if (len === null) len = 0;
            MaleArray.length = 0; ///clear
            for (let index = 0; index < parseInt(len); index++) {
                var name = localStorage.getItem('男隊員' + (String)(index + 1));
                MaleArray.push(name);
                AddMPlayers(who, name);
            }
            break;

        case 'Female':
            $('#MFemalegrouped').empty();
            var len = localStorage.getItem('女隊員數量');
            if (len === null) len = 0;
            FemaleArray.length = 0;
            for (let index = 0; index < parseInt(len); index++) {
                var name = localStorage.getItem('女隊員' + (String)(index + 1));
                FemaleArray.push(name);
                AddMPlayers(who, name);
            }
            break;

        case 'VIP':
            $('#MVIPgrouped').empty();
            var len = localStorage.getItem('VIP隊員數量');
            if (len === null) len = 0;
            VIPArray.length = 0;
            for (let index = 0; index < parseInt(len); index++) {
                var name = localStorage.getItem('VIP隊員' + (String)(index + 1));
                VIPArray.push(name);
                AddMPlayers(who, name);
            }
            break;
    }
}

function WriteMember(who) {
    switch (who) {
        case 'Male':
            localStorage.setItem('男隊員數量', MaleArray.length);
            for (let index = 0; index < MaleArray.length; index++) {
                localStorage.setItem('男隊員' + (String)(index + 1), MaleArray[index]);
            }
            break;
        case 'Female':
            localStorage.setItem('女隊員數量', FemaleArray.length);
            for (let index = 0; index < FemaleArray.length; index++) {
                localStorage.setItem('女隊員' + (String)(index + 1), FemaleArray[index]);
            }
            break;
        case 'VIP':
            localStorage.setItem('VIP隊員數量', VIPArray.length);
            for (let index = 0; index < VIPArray.length; index++) {
                localStorage.setItem('VIP隊員' + (String)(index + 1), VIPArray[index]);
            }
            break;
    }
}

function ManualDel() {
    for (i = 0; i < MaleArray.length; i++) {
        localStorage.removeItem('男隊員' + (String)(i + 1));
        localStorage.removeItem('N男隊員' + (String)(i + 1));
        localStorage.setItem('男隊員數量', 0);
    }
    for (i = 0; i < FemaleArray.length; i++) {
        localStorage.removeItem('女隊員' + (String)(i + 1));
        localStorage.removeItem('N女隊員' + (String)(i + 1));
        localStorage.setItem('女隊員數量', 0);
    }
    for (i = 0; i < VIPArray.length; i++) {
        localStorage.removeItem('VIP隊員' + (String)(i + 1));
        localStorage.removeItem('NVIP隊員' + (String)(i + 1));
        localStorage.setItem('VIP隊員數量', 0);
    }
    for (i = 0; i < MClassName.length; i++) {
        localStorage.removeItem('ClassName' + (String)(i + 1));
        localStorage.setItem('ClassName數量', 0);
    }
}

function checkspanValExist(name) {
    for (let i = 0; i < Court1Array.length; i++) {
        if (name == Court1Array[i]) {
            return true;
        }
    }
    for (let i = 0; i < Court2Array.length; i++) {
        if (name == Court2Array[i]) {
            return true;
        }
    }
    for (let i = 0; i < Court3Array.length; i++) {
        if (name == Court3Array[i]) {
            return true;
        }
    }
    for (let i = 0; i < Court4Array.length; i++) {
        if (name == Court4Array[i]) {
            return true;
        }
    }
    for (let i = 0; i < WaitArray.length; i++) {
        if (name == WaitArray[i]) {
            return true;
        }
    }
    for (let i = 0; i < RestArray.length; i++) {
        if (name == RestArray[i]) {
            return true;
        }
    }
    return false;
}

function McheckspanValExist(name) {
    for (let i = 0; i < MaleArray.length; i++) {
        if (name == MaleArray[i]) {
            return true;
        }
    }
    for (let i = 0; i < FemaleArray.length; i++) {
        if (name == FemaleArray[i]) {
            return true;
        }
    }
    for (let i = 0; i < VIPArray.length; i++) {
        if (name == VIPArray[i]) {
            return true;
        }
    }
    return false;
}

function checkName(name) {
    let target = name;
    while (McheckspanValExist(target)) {
        ///target 存在於 Array
        target = target + '*';
    }
    return target;
}

function AddMember(who, name) {
    switch (who) {
        case 'Male':
            result = checkName(name);
            AddMPlayers(who, result);
            checkMArray(who);
            break;

        case 'Female':
            result = checkName(name);
            AddMPlayers(who, result);
            checkMArray(who);
            break;

        case 'VIP':
            result = checkName(name);
            AddMPlayers(who, result);
            checkMArray(who);
            break;
    }
}

function AddRestPlayers() {
    for (let i = 0; i < MaleArray.length; i++) {
        if (!checkspanValExist(MaleArray[i])) {
            PlayerNum++;
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(MaleArray[i]) + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
        }
    }
    for (let i = 0; i < FemaleArray.length; i++) {
        if (!checkspanValExist(FemaleArray[i])) {
            PlayerNum++;
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(FemaleArray[i]) + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
        }
    }
    for (let i = 0; i < VIPArray.length; i++) {
        if (!checkspanValExist(VIPArray[i])) {
            PlayerNum++;
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(VIPArray[i]) + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
        }
    }
    CheckArray();
    CheckElement();
}

function AddPlayers() {
    for (let i = 0; i < Court1Array.length; i++) {
        PlayerNum++;
        if (McheckspanValExist(Court1Array[i])) {
            ///是隊員 男隊員|女隊員|VIP
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(Court1Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court1').append(el);
            $('#Court1 span').css('width', ViewPlayersSpan);
            $('#Court1 span').css('display', 'inline-block');
        } else {
            str = '<li style="background-color:gold" class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(Court1Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court1').append(el);
            $('#Court1 button').css('width', ViewPlayersbutton);
            $('#Court1 button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Court1 input').css('width', ViewPlayersInput);
            $('#Court1 input').hide();
            $('#Court1 span').css('width', ViewPlayersSpan);
            $('#Court1 span').css('display', 'inline-block');
            let tmp = new Array(Court1Array.length);
            tmp[i] = '.p' + (String)(PlayerNum);
            $('body').on('click', tmp[i] + ' button', function () {
                if ($(tmp[i] + ' button').text() === '改名') {
                    $(tmp[i] + ' input').show();
                    $(tmp[i] + ' button').text('確認');
                } else if ($(tmp[i] + ' button').text() === '確認') {
                    newName = $(tmp[i] + ' input').val();
                    newName = checkName(newName);
                    newName = checkName(newName);
                    newName = checkName(newName);
                    if (newName != '') {
                        $(tmp[i] + ' span').text(newName);
                    }
                    $(tmp[i] + ' input').hide();
                    $(tmp[i] + ' button').text('改名');
                    CheckArray();
                }
            })
        }
    }
    for (let i = 0; i < Court2Array.length; i++) {
        PlayerNum++;
        if (McheckspanValExist(Court2Array[i])) {
            ///是隊員 男隊員|女隊員|VIP
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(Court2Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court2').append(el);
            $('#Court2 span').css('width', ViewPlayersSpan);
            $('#Court2 span').css('display', 'inline-block');
        } else {
            str = '<li style="background-color:gold" class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(Court2Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court2').append(el);
            $('#Court2 button').css('width', ViewPlayersbutton);
            $('#Court2 button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Court2 input').css('width', ViewPlayersInput);
            $('#Court2 input').hide();
            $('#Court2 span').css('width', ViewPlayersSpan);
            $('#Court2 span').css('display', 'inline-block');
            let tmp = new Array(Court1Array.length);
            tmp[i] = '.p' + (String)(PlayerNum);
            $('body').on('click', tmp[i] + ' button', function () {
                if ($(tmp[i] + ' button').text() === '改名') {
                    $(tmp[i] + ' input').show();
                    $(tmp[i] + ' button').text('確認');
                } else if ($(tmp[i] + ' button').text() === '確認') {
                    newName = $(tmp[i] + ' input').val();
                    newName = checkName(newName);
                    newName = checkName(newName);
                    newName = checkName(newName);
                    if (newName != '') {
                        $(tmp[i] + ' span').text(newName);
                    }
                    $(tmp[i] + ' input').hide();
                    $(tmp[i] + ' button').text('改名');
                    CheckArray();
                }
            })
        }
    }
    for (let i = 0; i < Court3Array.length; i++) {
        PlayerNum++;
        if (McheckspanValExist(Court3Array[i])) {
            ///是隊員 男隊員|女隊員|VIP
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(Court3Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court3').append(el);
            $('#Court3 span').css('width', ViewPlayersSpan);
            $('#Court3 span').css('display', 'inline-block');
        } else {
            str = '<li style="background-color:gold" class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(Court3Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court3').append(el);
            $('#Court3 button').css('width', ViewPlayersbutton);
            $('#Court3 button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Court3 input').css('width', ViewPlayersInput);
            $('#Court3 input').hide();
            $('#Court3 span').css('width', ViewPlayersSpan);
            $('#Court3 span').css('display', 'inline-block');
            let tmp = new Array(Court1Array.length);
            tmp[i] = '.p' + (String)(PlayerNum);
            $('body').on('click', tmp[i] + ' button', function () {
                if ($(tmp[i] + ' button').text() === '改名') {
                    $(tmp[i] + ' input').show();
                    $(tmp[i] + ' button').text('確認');
                } else if ($(tmp[i] + ' button').text() === '確認') {
                    newName = $(tmp[i] + ' input').val();
                    newName = checkName(newName);
                    newName = checkName(newName);
                    newName = checkName(newName);
                    if (newName != '') {
                        $(tmp[i] + ' span').text(newName);
                    }
                    $(tmp[i] + ' input').hide();
                    $(tmp[i] + ' button').text('改名');
                    CheckArray();
                }
            })
        }
    }
    for (let i = 0; i < Court4Array.length; i++) {
        PlayerNum++;
        if (McheckspanValExist(Court4Array[i])) {
            ///是隊員 男隊員|女隊員|VIP
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(Court4Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court4').append(el);
            $('#Court4 span').css('width', ViewPlayersSpan);
            $('#Court4 span').css('display', 'inline-block');
        } else {
            str = '<li style="background-color:gold" class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(Court4Array[i]) + '</span></li>';
            var el = $(str);
            $('#Court4').append(el);
            $('#Court4 button').css('width', ViewPlayersbutton);
            $('#Court4 button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Court4 input').css('width', ViewPlayersInput);
            $('#Court4 input').hide();
            $('#Court4 span').css('width', ViewPlayersSpan);
            $('#Court4 span').css('display', 'inline-block');
            let tmp = new Array(Court1Array.length);
            tmp[i] = '.p' + (String)(PlayerNum);
            $('body').on('click', tmp[i] + ' button', function () {
                if ($(tmp[i] + ' button').text() === '改名') {
                    $(tmp[i] + ' input').show();
                    $(tmp[i] + ' button').text('確認');
                } else if ($(tmp[i] + ' button').text() === '確認') {
                    newName = $(tmp[i] + ' input').val();
                    newName = checkName(newName);
                    newName = checkName(newName);
                    newName = checkName(newName);
                    if (newName != '') {
                        $(tmp[i] + ' span').text(newName);
                    }
                    $(tmp[i] + ' input').hide();
                    $(tmp[i] + ' button').text('改名');
                    CheckArray();
                }
            })
        }
    }
    for (let i = 0; i < WaitArray.length; i++) {
        PlayerNum++;
        if (McheckspanValExist(WaitArray[i])) {
            ///是隊員 男隊員|女隊員|VIP
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(WaitArray[i]) + '</span></li>';
            var el = $(str);
            $('#Waitgrouped').append(el);
            $('#Waitgrouped span').css('width', ViewPlayersSpan);
            $('#Waitgrouped span').css('display', 'inline-block');
        } else {
            str = '<li style="background-color:gold" class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(WaitArray[i]) + '</span></li>';
            var el = $(str);
            $('#Waitgrouped').append(el);
            $('#Waitgrouped button').css('width', ViewPlayersbutton);
            $('#Waitgrouped button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Waitgrouped input').css('width', ViewPlayersInput);
            $('#Waitgrouped input').hide();
            $('#Waitgrouped span').css('width', ViewPlayersSpan);
            $('#Waitgrouped span').css('display', 'inline-block');
            let tmp = new Array(Court1Array.length);
            tmp[i] = '.p' + (String)(PlayerNum);
            $('body').on('click', tmp[i] + ' button', function () {
                if ($(tmp[i] + ' button').text() === '改名') {
                    $(tmp[i] + ' input').show();
                    $(tmp[i] + ' button').text('確認');
                } else if ($(tmp[i] + ' button').text() === '確認') {
                    newName = $(tmp[i] + ' input').val();
                    newName = checkName(newName);
                    newName = checkName(newName);
                    newName = checkName(newName);
                    if (newName != '') {
                        $(tmp[i] + ' span').text(newName);
                    }
                    $(tmp[i] + ' input').hide();
                    $(tmp[i] + ' button').text('改名');
                    CheckArray();
                }
            })
        }
    }
    for (let i = 0; i < RestArray.length; i++) {
        PlayerNum++;
        if (McheckspanValExist(RestArray[i])) {
            ///是隊員 男隊員|女隊員|VIP
            str = '<li style="background-color:" class="p' + (String)(PlayerNum) + '"><span class="sortHandle">' + (String)(RestArray[i]) + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
        } else {
            str = '<li style="background-color:gold" class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(RestArray[i]) + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped button').css('width', ViewPlayersbutton);
            $('#Restgrouped button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Restgrouped input').css('width', ViewPlayersInput);
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
            let tmp = new Array(Court1Array.length);
            tmp[i] = '.p' + (String)(PlayerNum);
            $('body').on('click', tmp[i] + ' button', function () {
                if ($(tmp[i] + ' button').text() === '改名') {
                    $(tmp[i] + ' input').show();
                    $(tmp[i] + ' button').text('確認');
                } else if ($(tmp[i] + ' button').text() === '確認') {
                    newName = $(tmp[i] + ' input').val();
                    newName = checkName(newName);
                    newName = checkName(newName);
                    newName = checkName(newName);
                    if (newName != '') {
                        $(tmp[i] + ' span').text(newName);
                    }
                    $(tmp[i] + ' input').hide();
                    $(tmp[i] + ' button').text('改名');
                    CheckArray();
                }
            })
        }
    }
    CheckArray();
    CheckElement();
}

function AddMPlayers(who, name) {
    MPlayersNum++;
    str = '<li class="' + (String)(who) + (String)(MPlayersNum) + '"><input id="Input' + (String)(who) + (String)(MPlayersNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(name) + '</span></li>';
    var el = $(str);
    $('#M' + (String)(who) + 'grouped').append(el);
    $('#M' + (String)(who) + 'grouped button').css('width', ViewPlayersbutton);
    $('#M' + (String)(who) + 'grouped button').css('font-size', ViewPlayersbuttonFontSize);
    $('#M' + (String)(who) + 'grouped input').css('width', ViewPlayersInput);
    $('#M' + (String)(who) + 'grouped input').hide();
    $('#M' + (String)(who) + 'grouped span').css('width', ViewPlayersSpan);
    $('#M' + (String)(who) + 'grouped span').css('display', 'inline-block');

    var tmp = '.' + (String)(who) + (String)(MPlayersNum);

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
            checkMArray('Male');
            checkMArray('Female');
            checkMArray('VIP');
        }
    })
}



function checkMArray(who) {

    switch (who) {
        case 'Male':
            MaleArray.length = 0;
            var len = $('.MMale li').length;
            for (let index = 0; index < len; index++) {
                targetspan = $('.MMale span')[index].textContent;
                MaleArray.push(targetspan);
            }
            WriteMember('Male');
            break;

        case 'Female':
            FemaleArray.length = 0;
            var len = $('.MFemale li').length;
            for (let index = 0; index < len; index++) {
                targetspan = $('.MFemale span')[index].textContent;
                FemaleArray.push(targetspan);
            }
            WriteMember('Female');
            break;

        case 'VIP':
            VIPArray.length = 0;
            var len = $('.MVIP li').length;
            for (let index = 0; index < len; index++) {
                targetspan = $('.MVIP span')[index].textContent;
                VIPArray.push(targetspan);
            }
            WriteMember('VIP');
            break;
    }
}