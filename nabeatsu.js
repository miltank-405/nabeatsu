// まずはfizzBuzz書いていく
// そこから応用を考えていく
// ルール：3の倍数と3がつく時だけアホになる
//   8の倍数と8がつくときはおもろく無いけどオモローって表示する

for(var i = 1; i <= 100; i++) {
	if (i % 3 === 0 || /3/.test(i)) {
		document.write(i + "アホ〜!!" + "<br/>");
	} else if (i % 8 === 0) {
		document.write(i + "オーモロー!!" + "</br>");
	} else {
		document.write (i + "<br/>");
	}
}