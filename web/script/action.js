var reg =  document.querySelectorAll('.form-reg > ul > li')[0],
    login = document.querySelectorAll('.form-reg > ul > li')[1];
var readme = document.querySelectorAll('.form-readme')[0],
    proto = document.querySelectorAll('.form-readme > span.protocol')[0],
    find = document.querySelectorAll('.form-readme > span.find')[0],
    code = document.querySelectorAll('.form-tips > a.getcode')[0],
    overseas = document.querySelectorAll('.form-tips > a.overseas')[0],
    inputList = document.querySelectorAll('.form-item');
var form1 = document.querySelectorAll('.form-item')[0],
    title = document.querySelectorAll('.form-item > .select-item > .title')[0],
    phnoeul = document.querySelectorAll('.form-item > .select-item > ul')[0],
    x = document.querySelectorAll('.form-item > .select-item > ul > i')[0];

reg.onclick = function () {
    login.className = "";
    reg.className = "on";
    proto.style.display = "";
    find.style.display = "none";
    readme.style.textAlign = "";
    code.style.display = "";
    overseas.style.display = "none";
    inputList[0].style.display = "";
    inputList[1].style.display = "";
    inputList[2].style.display = "none";
    inputList[3].style.display = "none";
}

login.onclick = function () {
    reg.className = "";
    login.className = "on";
    find.style.display = "";
    proto.style.display = "none";
    readme.style.textAlign = "right";
    code.style.display = "none";
    overseas.style.display = "";
    inputList[0].style.display = "none";
    inputList[1].style.display = "none";
    inputList[2].style.display = "";
    inputList[3].style.display = "";
}

title.onclick = function () {
    phnoeul.style.display = "";
}
x.onclick = function () {
    phnoeul.style.display = "none";
}