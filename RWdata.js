var MPlayersNum = 0;
var MaleArray = new Array(0);
var FemaleArray = new Array(0);
var VIPArray = new Array(0);

var NMaleArray = new Array(0);
var NFemaleArray = new Array(0);
var NVIPArray = new Array(0);

function ReadMembers(who) {
    switch (who) {
        case 'Male':
            var len = localStorage.getItem('男隊員數量');
            if (len === null) len = 0;
            NMaleArray.length = 0; ///clear
            for (let index = 0; index < parseInt(len); index++) {
                var name = localStorage.getItem('男隊員' + (String)(index + 1));
                //NMaleArray.push(name);
                AddMember('Male', name);
            }
            break;

        case 'Female':
            var len = localStorage.getItem('女隊員數量');
            if (len === null) len = 0;
            NFemaleArray.length = 0;
            for (let index = 0; index < parseInt(len); index++) {
                var name = localStorage.getItem('女隊員' + (String)(index + 1));
                //NFemaleArray.push(name);
                AddMember('Female', name);
            }
            break;

        case 'VIP':
            var len = localStorage.getItem('VIP隊員數量');
            if (len === null) len = 0;
            NVIPArray.length = 0;
            for (let index = 0; index < parseInt(len); index++) {
                var name = localStorage.getItem('VIP隊員' + (String)(index + 1));
                //NVIPArray.push(name);
                AddMember('VIP', name);
            }
            break;
    }
}

function WriteMember(who) {
    switch (who) {
        case 'Male':
            localStorage.setItem('男隊員數量', NMaleArray.length);
            for (let index = 0; index < NMaleArray.length; index++) {
                localStorage.setItem('男隊員' + (String)(index + 1), NMaleArray[index]);
            }
            break;
        case 'Female':
            localStorage.setItem('女隊員數量', NFemaleArray.length);
            for (let index = 0; index < NFemaleArray.length; index++) {
                localStorage.setItem('女隊員' + (String)(index + 1), NFemaleArray[index]);
            }
            break;
        case 'VIP':
            localStorage.setItem('VIP隊員數量', NVIPArray.length);
            for (let index = 0; index < NVIPArray.length; index++) {
                localStorage.setItem('VIP隊員' + (String)(index + 1), NVIPArray[index]);
            }
            break;
    }
}

function ManualDel() {
    for (i = 0; i < NMaleArray.length; i++) {
        localStorage.removeItem('男隊員' + (String)(i + 1));
        localStorage.setItem('男隊員數量', 0);
    }
    for (i = 0; i < NFemaleArray.length; i++) {
        localStorage.removeItem('女隊員' + (String)(i + 1));
        localStorage.setItem('女隊員數量', 0);
    }
    for (i = 0; i < NVIPArray.length; i++) {
        localStorage.removeItem('VIP隊員' + (String)(i + 1));
        localStorage.setItem('VIP隊員數量', 0);
    }
}

Array.prototype.in_array = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

function checkName(array, name) {
    var target = name;
    while (array.in_array(target)) {
        ///target 存在於 Array
        target = target + '*';
    }
    return target;
}

function AddMember(who, name) {
    switch (who) {
        case 'Male':
            result = checkName(NMaleArray, name);
            AddMPlayers('male', result);
            checkMArray(who);
            PlayerNum++;
            str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + result + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped button').css('width', ViewPlayersbutton);
            $('#Restgrouped button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Restgrouped input').css('width', ViewPlayersInput);
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
            CheckArray();
            AddClick(PlayerNum);
            break;

        case 'Female':
            result = checkName(NFemaleArray, name);
            AddMPlayers('female', result);
            checkMArray(who);
            PlayerNum++;
            str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + result + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped button').css('width', ViewPlayersbutton);
            $('#Restgrouped button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Restgrouped input').css('width', ViewPlayersInput);
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
            CheckArray();
            AddClick(PlayerNum);
            break;

        case 'VIP':
            result = checkName(NVIPArray, name);
            AddMPlayers('VIP', result);
            checkMArray(who);
            PlayerNum++;
            str = '<li class="p' + (String)(PlayerNum) + '"><input id="InputName' + (String)(PlayerNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + result + '</span></li>';
            var el = $(str);
            $('#Restgrouped').append(el);
            $('#Restgrouped button').css('width', ViewPlayersbutton);
            $('#Restgrouped button').css('font-size', ViewPlayersbuttonFontSize);
            $('#Restgrouped input').css('width', ViewPlayersInput);
            $('#Restgrouped input').hide();
            $('#Restgrouped span').css('width', ViewPlayersSpan);
            $('#Restgrouped span').css('display', 'inline-block');
            CheckArray();
            AddClick(PlayerNum);
            break;
    }
}

function AddMPlayers(who, name) {
    MPlayersNum++;
    str = '<li class="' + (String)(who) + (String)(MPlayersNum) + '"><input id="Input' + (String)(who) + (String)(MPlayersNum) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + (String)(name) + '</span></li>';
    var el = $(str);
    console.log(str);
    $('#M' + (String)(who) + 'grouped').append(el);
    $('#M' + (String)(who) + 'grouped button').css('width', ViewPlayersbutton);
    $('#M' + (String)(who) + 'grouped button').css('font-size', ViewPlayersbuttonFontSize);
    $('#M' + (String)(who) + 'grouped input').css('width', ViewPlayersInput);
    $('#M' + (String)(who) + 'grouped input').hide();
    $('#M' + (String)(who) + 'grouped span').css('width', ViewPlayersSpan);
    $('#M' + (String)(who) + 'grouped span').css('display', 'inline-block');
    AddMClick(who, MPlayersNum);
}

function AddMClick(who, target) {
    var name = target;
    $('body').on('click', '.' + (String)(who) + (String)(name) + ' button', function () {

        if ($('.' + (String)(who) + (String)(name) + ' button').text() === '改名') {
            $('#Input' + (String)(who) + (String)(name)).show();
            $('.' + (String)(who) + (String)(name) + ' button').text('確認');
        } else if ($('.' + (String)(who) + (String)(name) + ' button').text() === '確認') {
            newName = $('#Input' + (String)(who) + (String)(name)).val();
            newName = checkName(MaleArray, newName);
            newName = checkName(FemaleArray, newName);
            newName = checkName(VIPArray, newName);
            if (newName != '') {
                $('.' + (String)(who) + (String)(name) + ' span').text(newName);
            }
            $('#Input' + (String)(who) + (String)(name)).hide();
            $('.' + (String)(who) + (String)(name) + ' button').text('改名');
            checkMArray('Male');
            checkMArray('Female');
            checkMArray('VIP');
        }
    })
}

function displayMembers() {
    $('#Mmalegrouped').empty();
    $('#Mfemalegrouped').empty();
    $('#MVIPgrouped').empty();

    for (i = 0; i < MaleArray.length; i++) {
        $('#Mmalegrouped').append($(MaleArray[i]));
        $('#Mmalegrouped button').css('width', ViewPlayersbutton);
        $('#Mmalegrouped button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Mmalegrouped input').css('width', ViewPlayersInput);
        $('#Mmalegrouped input').hide();
        $('#Mmalegrouped span').css('width', ViewPlayersSpan);
        $('#Mmalegrouped span').css('display', 'inline-block');
    }
    for (i = 0; i < FemaleArray.length; i++) {
        $('#Mfemalegrouped').append($(FemaleArray[i]));
        $('#Mfemalegrouped button').css('width', ViewPlayersbutton);
        $('#Mfemalegrouped button').css('font-size', ViewPlayersbuttonFontSize);
        $('#Mfemalegrouped input').css('width', ViewPlayersInput);
        $('#Mfemalegrouped input').hide();
        $('#Mfemalegrouped span').css('width', ViewPlayersSpan);
        $('#Mfemalegrouped span').css('display', 'inline-block');
    }
    for (i = 0; i < VIPArray.length; i++) {
        $('#MVIPgrouped').append($(VIPArray[i]));
        $('#MVIPgrouped button').css('width', ViewPlayersbutton);
        $('#MVIPgrouped button').css('font-size', ViewPlayersbuttonFontSize);
        $('#MVIPgrouped input').css('width', ViewPlayersInput);
        $('#MVIPgrouped input').hide();
        $('#MVIPgrouped span').css('width', ViewPlayersSpan);
        $('#MVIPgrouped span').css('display', 'inline-block');
    }
}

function checkMArray(who) {

    switch (who) {
        case 'Male':
            MaleArray.length = 0;
            NMaleArray.length = 0;
            var len = $('.Mmale li').length;
            for (let index = 0; index < len; index++) {
                targetli = $('.Mmale li')[index].className;
                targetspan = $('.Mmale span')[index].textContent;
                targetinput = $('.Mmale input')[index].id;
                targetli = (String)(targetli).replace(' dragging', '');
                target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
                MaleArray.push(target)
                NMaleArray.push(targetspan);
            }
            WriteMember('Male');
            break;

        case 'Female':
            FemaleArray.length = 0;
            NFemaleArray.length = 0;
            var len = $('.Mfemale li').length;
            for (let index = 0; index < len; index++) {
                targetli = $('.Mfemale li')[index].className;
                targetspan = $('.Mfemale span')[index].textContent;
                targetinput = $('.Mfemale input')[index].id;
                targetli = (String)(targetli).replace(' dragging', '');
                target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
                FemaleArray.push(target)
                NFemaleArray.push(targetspan);
            }
            WriteMember('Female');
            break;

        case 'VIP':
            VIPArray.length = 0;
            NVIPArray.length = 0;
            var len = $('.MVIP li').length;
            for (let index = 0; index < len; index++) {
                targetli = $('.MVIP li')[index].className;
                targetspan = $('.MVIP span')[index].textContent;
                targetinput = $('.MVIP input')[index].id;
                targetli = (String)(targetli).replace(' dragging', '');
                target = '<li class="' + targetli + '"><input id="' + targetinput + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + targetspan + '</span></li>';
                VIPArray.push(target)
                NVIPArray.push(targetspan);
            }
            WriteMember('VIP');
            break;
    }
}