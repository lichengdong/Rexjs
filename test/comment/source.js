var a = 1

a = 2, a = 3 // a = 4 /** */ a = 5

if(a !== 3){
	throw "注释解析有误";
}

a = a++ /**
 * 
 */ + 2;

if(a !== 5){
	throw "多行注释后的计算错误"
}

a = a + 2 /** + 3 */ + 4 // +5

if(a !== 11){
	throw "混合型单行注释计算错误"
}