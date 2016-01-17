function deCode() {
	var units = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ноль",
		"один",
		"два",
		"три",
		"четыре",
		"пять",
		"шесть",
		"семь",
		"восемь",
		"девять"
		];

	var secondDozen = [
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
		"десять",
		"одиннадцать",
		"двенадцать",
		"тринадцать",
		"четырнадцать",
		"пятнадцать",
		"шестнадцать",
		"семнадцать",
		"восемнадцать",
		"девятнадцать"
	];

	var dozens = [
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety",
		"двадцать",
		"тридцать",
		"сорок",
		"пятьдесят",
		"шестьдесят",
		"семьдесят",
		"восемдесят",
		"девяносто"
	];

	var textNumber = document.getElementById("take-it").value;

	var strings, string1, string2;

	document.getElementById("answer").value = "";

	if (textNumber.length==1) {
		string1 = "";
		if (document.getElementById('en').checked==true) {
			string2 = units[parseInt(textNumber)];
		} else string2 = units[parseInt(textNumber)+10];
	} else if (textNumber.length==2) {
		if (textNumber.charAt(0)==1) {
			if (document.getElementById('en').checked==true) {
				string2 = secondDozen[parseInt(textNumber.charAt(1))]
			} else string2 = secondDozen[parseInt(textNumber.charAt(1))+10];
			string1 = "";
		} else {
			if (document.getElementById('en').checked==true) {
				string1 = dozens[parseInt(textNumber.charAt(0))-2]+' ';
			} else string1 = dozens[parseInt(textNumber.charAt(0))+6]+' ';
			if (parseInt(textNumber.charAt(1))==0) {
				string2 = "";
			} else {
				if (document.getElementById('en').checked==true) {
					string2 = units[parseInt(textNumber.charAt(1))];	
				} else string2 = units[parseInt(textNumber.charAt(1))+10];
				
			};
		}

	};
	
	strings = string1+string2;
	console.log(strings);
	console.log(typeof(strings)+'1');
	if (typeof(strings.length)!="undefined") {
		document.getElementById("answer").value = strings;
	} else {
		if (document.getElementById('en').checked==true) {
			document.getElementById("answer").value = "don`t be so stupid";
		} else document.getElementById("answer").value = "не тупи так сильно!!!";;
	}
}