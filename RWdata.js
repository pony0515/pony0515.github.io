var MaleArray = new Array(0);
var FemaleArray = new Array(0);
var VIPArray = new Array(0);
var MaleNum = 0;
var FemaleNum = 0;
var VIPNum = 0;

function ReadMembers(who) {
    switch (who) {
        case 'Male':
            MaleNum = localStorage.getItem('男隊員數量');
            if (MaleNum === null) MaleNum = 0;
            MaleArray.length = 0; ///clear
            for (let index = 0; index < parseInt(MaleNum); index++) {
                MaleArray.push(localStorage.getItem('男隊員' + (String)(index + 1)));
            }
            break;

        case 'Female':
            FemaleNum = localStorage.getItem('女隊員數量');
            if (FemaleNum === null) FemaleNum = 0;
            FemaleArray.length = 0;
            for (let index = 0; index < parseInt(FemaleNum); index++) {
                FemaleArray.push(localStorage.getItem('女隊員' + (String)(index + 1)));
            }
            break;

        case 'VIP':
            VIPNum = localStorage.getItem('VIP隊員數量');
            if (VIPNum === null) VIPNum = 0;
            VIPArray.length = 0;
            for (let index = 0; index < parseInt(VIPNum); index++) {
                VIPArray.push(localStorage.getItem('VIP隊員' + (String)(index + 1)));
            }
            break;
    }
}

function WriteMember(who) {
    switch (who) {
        case 'Male':
            localStorage.setItem('男隊員數量', MaleNum);
            for (let index = 0; index < MaleNum; index++) {
                localStorage.setItem('男隊員' + (String)(index + 1), MaleArray[index]);
            }
            break;
        case 'Female':
            localStorage.setItem('女隊員數量', FemaleNum);
            for (let index = 0; index < FemaleNum; index++) {
                localStorage.setItem('女隊員' + (String)(index + 1), FemaleArray[index]);
            }
            break;
        case 'VIP':
            localStorage.setItem('VIP隊員數量', VIPNum);
            for (let index = 0; index < VIPNum; index++) {
                localStorage.setItem('VIP隊員' + (String)(index + 1), VIPArray[index]);
            }
            break;
    }
}

function ManualDel() {
    for (i = 0; i < MaleNum; i++) {
        localStorage.removeItem('男隊員' + (String)(i + 1));
        localStorage.setItem('男隊員數量', 0);
    }
    for (i = 0; i < FemaleNum; i++) {
        localStorage.removeItem('女隊員' + (String)(i + 1));
        localStorage.setItem('女隊員數量', 0);
    }
    for (i = 0; i < VIPNum; i++) {
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
            result = checkName(MaleArray, name);
            console.log(result);
            MaleNum++;
            MaleArray.push(result);
            WriteMember(who);
            break;

        case 'Female':
            result = checkName(FemaleArray, name);
            FemaleNum++;
            FemaleArray.push(result);
            WriteMember(who);
            break;

        case 'VIP':
            result = checkName(VIPArray, name);
            VIPNum++;
            VIPArray.push(result);
            WriteMember(who);
            break;

    }
}

function RemoveMember(who, name) {
    switch (who) {
        case 'Male':
            if (MaleArray.in_array(name)) {
                ////name存在於Array
                MaleNum--;
                MaleArray.remove(name);
                WriteMember(who);
            }
            break;

        case 'Female':
            if (FemaleArray.in_array(name)) {
                ////name存在於Array
                FemaleNum--;
                FemaleArray.remove(name);
                WriteMember(who);
            }
            break;

        case 'VIP':
            if (VIPArray.in_array(name)) {
                ////name存在於Array
                VIPNum--;
                VIPArray.remove(name);
                WriteMember(who);
            }
            break;

    }
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
            newName = checkName(VIParray, newName);
            if (newName != '') {
                $('.' + (String)(who) + (String)(name) + ' span').text(newName);
            }
            $('#Input' + (String)(who) + (String)(name)).hide();
            $('.' + (String)(who) + (String)(name) + ' button').text('改名');
            checkMArray();
        }
    })
}

function displayMembers() {
    $('#Mmalegrouped').empty();
    $('#Mfemalegrouped').empty();
    $('#MVIPgrouped').empty();

    for (let i = 0; i < MaleNum; i++) {
        str = '<li class="male' + (String)(i + 1) + '"><input id="Inputmale' + (String)(i + 1) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + MaleArray[i] + '</span></li>';
        var el = $(str);
        $('#Mmalegrouped').append(el);
        $('#Mmalegrouped input').css('width', '50px');
        $('#Mmalegrouped input').hide();
        $('#Mmalegrouped span').css('width', '16vw');
        $('#Mmalegrouped span').css('display', 'inline-block');
        AddMClick('male', i + 1);
    }
    for (let i = 0; i < FemaleNum; i++) {
        str = '<li class="female' + (String)(i + 1) + '"><input id="Inputfemale' + (String)(i + 1) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + FemaleArray[i] + '</span></li>';
        var el = $(str);
        $('#Mfemalegrouped').append(el);
        $('#Mfemalegrouped input').css('width', '50px');
        $('#Mfemalegrouped input').hide();
        $('#Mfemalegrouped span').css('width', '16vw');
        $('#Mfemalegrouped span').css('display', 'inline-block');
        AddMClick('female', i + 1);
    }
    for (let i = 0; i < VIPNum; i++) {
        str = '<li class="vip' + (String)(i + 1) + '"><input id="Inputvip' + (String)(i + 1) + '" type="text"><button class="Name">改名</button><span class="sortHandle">' + VIPArray[i] + '</span></li>';
        var el = $(str);
        $('#MVIPgrouped').append(el);
        $('#MVIPgrouped input').css('width', '50px');
        $('#MVIPgrouped input').hide();
        $('#MVIPgrouped span').css('width', '16vw');
        $('#MVIPgrouped span').css('display', 'inline-block');
        AddMClick('vip', i + 1);
    }
}

function checkMArray() {
    MaleArray.length = 0;
    FemaleArray.length = 0;
    VIPArray.length = 0;

    MaleNum = $('.Mmale li').length;
    for (let index = 0; index < MaleNum; index++) {
        target = $('.Mmale span')[index].textContent;
        MaleArray.push(target);
    }
    WriteMember('Male');

    FemaleNum = $('.Mfemale li').length;
    for (let index = 0; index < FemaleNum; index++) {
        target = $('.Mfemale span')[index].textContent;
        FemaleArray.push(target);
    }
    WriteMember('Female');

    VIPNum = $('.MVIP li').length;
    for (let index = 0; index < VIPNum; index++) {
        target = $('.MVIP span')[index].textContent;
        VIPArray.push(target);
    }
    WriteMember('VIP');
}
