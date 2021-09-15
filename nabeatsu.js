// まずはfizzBuzz書いていく
// そこから応用を考えていく
// ルール：3の倍数と3がつく時だけアホになる
// 8の倍数と8がつくときはおもろく無いけどオモローって表示する
// 3と8が被ったときに「ナベアツ！」って表示させたい

for(var i = 1; i <= 1000; i++) {
	if (i % 3 === 0 || /[3]/.test(i)) {
		document.write(i + "アホ〜!!" + "<br/>");
	} else if (i % 8 === 0 || /[8]/.test(i)) {
		document.write(i + "オーモロー!!" + "</br>");
	// かぶったとき"ナベアツ"って表示させたい
	} else if (i) {
		document.write(i + "ナベアツッ!!" + "</br>");
	} else {
		document.write (i + "<br/>");
	}
}