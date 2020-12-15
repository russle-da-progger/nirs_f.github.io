var images = [
    {name:"(1/5)ЛА производит взлет в режиме ВРД. Для этого открываются дроссельные клапаны, обеспечивающие подачу гелия из ёмкости 33 (баллон со сжатым гелием), который затем подается на турбины 17, 19, 25, чтобы привести их во вращение.", src: "4_images/one.png"},
    {name:"(2/5)После непродолжительной раскрутки соответствующих турбин, водородные ТНА 17-18 и 25-26, а также кислородный ТНА 19-20 выходят на рабочий режим.", src: "4_images/two.png"},
    {name:"(3/5)Одновременно открываются клапаны, осуществляющие доступ компонентов топлива в газогенераторы 7, 11 и 16, куда также подается пусковое горючее из ампул", src: "4_images/three.png"},
    {name:"(4/5)Раскрываются клапаны перед камерой ВРД 30.", src: "4_images/four.png"},
    {name:"(5/5)После раскрутки подпитывающих компрессоров гелия 9, 14, а также воздушного компрессора 3, двигательная установка выходит на режим запуска, после чего в камеру сгорания 30 подаётся пусковое горючее, топливная смесь воспламеняется и двигатель приходит в полное функционирование.", src: "4_images/five.png"},
];
var endofimages = images.length;
var i = -1;

btnPrev = addEventListener('click', prevImg);
btnNext = addEventListener('click', nextImg);

function prevImg() {
    i = i+1;
    if (i === images.length) i = 0;
    imagesName.innerHTML=images[i].name;
    imagesImage.setAttribute('src', images[i].src);
}

function nextImg() {
    i = i-1;
    if (i < 0) i = endofimages - 1;
    imagesName.innerHTML=images[i].name;
    imagesImage.setAttribute('src', images[i].src);
}

nextImg();