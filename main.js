var x = document.querySelectorAll('.left button')
var y = document.querySelectorAll('.left .fa-book')
var z = document.querySelectorAll('.left .fa-book-open')
var t = document.querySelectorAll('.right .bai')

x[0].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[0].style.display = 'none'
        z[i].style.display = 'none'
        z[0].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[0].style.display = 'block'
    }
}
x[1].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[1].style.display = 'none'
        z[i].style.display = 'none'
        z[1].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[1].style.display = 'block'
    }
}
x[2].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[2].style.display = 'none'
        z[i].style.display = 'none'
        z[2].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[2].style.display = 'block'
    }
}
x[3].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[3].style.display = 'none'
        z[i].style.display = 'none'
        z[3].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[3].style.display = 'block'
    }
}
x[4].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[4].style.display = 'none'
        z[i].style.display = 'none'
        z[4].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[4].style.display = 'block'
    }
}

//Bài 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ...+ n > 10000
document.getElementById('btn_bai1').onclick = function () {
    // output: number
    var kqBai1 = 0;
    // progress
    var tong = 0;
    for (var i = 1; ; i++) {
        tong += i
        if (tong > 10000) {
            kqBai1 = 'Số nguyên dương nhỏ nhất là: ' + i
            break;
        }
    }
    // in output ra giao diện
    document.querySelector('.right .kqBai1').innerHTML = kqBai1
}

// Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
document.getElementById('btn_bai2').onclick = function () {
    kqBai2 = tinhTong('soX', 'soN')
    // in output ra giao diện
    document.querySelector('.right .kqBai2').innerHTML = 'Tổng bằng: ' + kqBai2
}
/**
 * Hàm tính tổng S(n) = x + x^2 + x^3 + … + x^n
 * @param {*} idsoX id số x 
 * @param {*} idsoN id số n
 * @returns Tổng S(n)
 */
function tinhTong(idsoX, idsoN) {
    // input: number
    var soX = Number(document.getElementById(idsoX).value)
    var soN = Number(document.getElementById(idsoN).value)
    // output: number
    var tong = -1;
    // progress 
    for (var i = 0; i <= soN; i++) {
        tong += (soX ** i)
    }
    return tong;
}

//Bài 3: Tính giai thừa
document.getElementById('btn_bai3').onclick = function () {
    kqBai3 = tinhGiaiThua('b3_soN')
    // in output ra giao diện
    document.querySelector('.right .kqBai3').innerHTML = kqBai3
}
/**
 * Hàm tính giai thừa
 * @param {*} id id của số nhập vào
 */
function tinhGiaiThua(id) {
    // input: number
    var so = Number(document.getElementById(id).value)
    // output: number
    var ketqua = 1;
    // progress
    for (var i = 1; i <= so; i++) {
        ketqua *= i
    }
    return so + '! = ' + ketqua
}

// Bài 4: In 10 thẻ div: Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
document.getElementById('btn_bai4').onclick = function () {
    // output: string
    kqBai4 = '';
    //progress
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            kqBai4 += '<div style="background-color: red">div chẵn</div>'
        } else {
            kqBai4 += '<div style="background-color: blue">div lẻ</div>'
        }
    }
    // in output ra giao diện
    document.querySelector('.right .kqBai4').innerHTML = kqBai4
}

// Bài 5: In số nguyên tố
document.getElementById('btn_bai5').onclick = function () {
    kqBai5 = inSoNguyenTo('b5_soN')
    // in output ra giao diện
    document.querySelector('.right .kqBai5').innerHTML = kqBai5
}
/**
 * Hàm in số nguyên tố từ 1 tới số đó
 * @param {*} id id của số nhập vào
 */
function inSoNguyenTo(id) {
    // input: number
    var so = Number(document.getElementById(id).value)
    // output: string
    var ketqua = '';
    // progress
    for (i = 2; i <= so; i++) {
        var checkSNT = true
        for (j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                checkSNT = false
                break
            }
        }
        if (checkSNT) {
            ketqua += (i + ' ')
        }
    }
    return ketqua;
}