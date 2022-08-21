function giaiPT()
{
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var c = parseInt(document.getElementById("c").value)
    if (isNaN(a) || isNaN(b) || isNaN(c))
    {
        alert("Nhập chưa đúng");
        return false;
    }
    var kq, x1, x2;
    if (a == 0)
        if (b == 0)
            if (c == 0)
                kq = "Phương trình vô số nghiệm";
            else
                kq = "Phương trình vô nghiệm";
        else
        {
            x1 = -c / b;
            kq = "Phương trình có nghiệm là: " + x1.toFixed(2);
        }
    else
    {
        var delta = b * b - 4 * a * c;
        if (delta == 0)
        {
            x1 = -b / 2 * a;
            kq = "Phương trình có nghiệm kép là: " + x1.toFixed(2);
        }
        else if (delta < 0)
            kq = "Phương trình vô nghiệm";
        else
        {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            kq = "<h2>Phương trình có 2 nghiệm phân biệt:<br>" +
                "x1= " + x1.toFixed(2) + " và x2= " + x2.toFixed(2);  
        }
    }
    document.getElementById("ketQua").innerHTML = kq;
}
function xoa()
{
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("ketQua").innerHTML = "";
}