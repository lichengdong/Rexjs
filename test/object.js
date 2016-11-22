void function(SimpleTest, test){

test.group("对象测试");

test.true("空对象", "!{}");
test.true("单个标识符属性名", "!{ a: 1 }");
test.true("多个标识符属性名", "!{ a: 1, b: 2, c: 3 }");
test.true("多个标识符属性名并带有一一对应的逗号", "!{ a: 1, b: 2, c: 3, }");
test.true("单个关键字属性名", "!{ var: 1 }");
test.true("多个关键字属性名", "!{ var: 1, switch: 2 + 3 / 4 * (7), throw: 99 }");
test.true("多个关键字属性名并带有一一对应的逗号", "!{ var: 1, switch: 2 + 3 / 4 * (7), throw: 99, }");
test.true("单个简写属性名", "!{ a }");
test.true("多个简写属性名", "!{ a, b, c }");
test.true("多个简写属性名并带有一一对应的逗号", "!{ a, b, c, }");
test.true("单个字符串属性名", "!{ 'a': 1 }");
test.true("多个字符串属性名", "!{ 'a': 1, \"b\": 2, 'c': 3 }");
test.true("多个字符串属性名并带有一一对应的逗号", "!{ 'a': 1, \"b\": 2, 'c': 3, }");
test.true("单个数字属性名", "!{ 1: 1 }");
test.true("多个数字属性名", "!{ 1: 1, 2.22333: 2, 3: 3, 1e+1: 5, 0x1234567890abcdef: 6, .14e+1: 7, 0b10: 8 }");
test.true("多个字符串属性名并带有一一对应的逗号", "!{ 1: 1, 2: 2, 3: 3, }");
test.true("所有情况属性名并存", "!{ a, b: 2, var: 3, c, for: 4, d: 5, 'e': 6, if: 7, 8: 8, 9.333: 9 }");

// test.true(
// 	"复杂的测试",
// 	SimpleTest.innerContentOf(function(){
// 		var a = 1;

// 		a += parseInt(10, 2);
// 		a += parseInt(110, 2);

// 		a += (1,2,3,3,4, parseInt(parseInt(10000, 2), 2));

// 		if(
// 			a !== 10
// 		){
// 			throw "错误的运算结果";
// 		}
// 	}),
// 	true
// );

// test.false(
// 	"函数调用表达式内带其他语句",
// 	"a(break)",
// 	function(parser, err){
// 		return err.context.tag instanceof Rexjs.BreakTag ? "" : "没有识别出 break 关键字";
// 	}
// );

test.false(
	"非法属性名",
	"!{ +: 1 }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.PlusTag ? "" : "没有识别出加号";
	}
);

test.false(
	"2属性间缺少逗号",
	"!{ a: 1\n 3: 2 }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.NumberTag ? "" : "没有识别出数字";
	}
);

test.false(
	"负值属性名",
	"!{ -1: 1 }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.NegationTag ? "" : "没有识别出减号";
	}
);

test.false(
	"逗号后面接非法属性名",
	"!{ var: 1, +: 2 }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.PlusTag ? "" : "没有识别出加号";
	}
);

test.false(
	"简写关键字属性",
	"!{ var }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.CloseBraceTag ? "" : "没有识别出结束大括号";
	}
);

test.false(
	"简写数字属性",
	"!{ 1 }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.CloseBraceTag ? "" : "没有识别出结束大括号";
	}
);

test.false(
	"简写字符串属性",
	"!{ 'abc' }",
	function(parser, err){
		return err.context.tag instanceof Rexjs.CloseBraceTag ? "" : "没有识别出结束大括号";
	}
);

test.groupEnd();

}(
	Rexjs.SimpleTest,
	test
);