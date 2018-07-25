/*==================== GLOBAL VARIABLES & OBJECTs =======================================*/
var number = 10;//global variable, can be used in every function, every statement
				//bien toan cuc co the duoc su dung o bat cu ham, cau lenh nao trong file js
// var arr = [1,2,3];
var arr = [];
	arr[0] = 1;
	arr[1] = 2;
	arr[2] = 3;

var ball = {// an object// truy cap: ball.color
	color : "green",
	weight : 10,
	height : 10,
	yell : function(){
	document.write("I'm yelling!");
	}
};

var str = "hai le";
/*====================FUNCTIONS=======================================*/

function doSomething(){

	for(i = 0; i<3; i++){
		document.write(arr[i]);
	}
}

/*===================== STATEMENTS ======================================*/

// doSomething();
// ball.color;
// ball.yell();
//co the add/ delete properties/ methods ben ngoai objects
str.toUpperCase();
document.write(str);