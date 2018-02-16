/*function args(num1, num2) {
	console.log('argumento 1: '+num1);
	console.log('argumento 2: '+num2);
	
	//esto tb cambia el valor de num1!
	arguments[0] = num2;
	
	console.log(arguments);

	console.log('argumento 1: '+num1);
	console.log('argumento 2: '+num2);
}

function args2(num1, num2) {
	console.log('argumento 1: '+num1);
	console.log('argumento 2: '+num2);
	console.log(arguments);
	//
	num1 = arguments[1];

	console.log('argumento 1: '+num1);
	console.log('argumento 2: '+num2);
	console.log(arguments);
}*/

function argumentos(arg1, arg2) {
	console.log('Parámetros formales:\n');

	console.log('arg2: '+arg2);

	console.log('objeto arguments: ');
	console.log(arguments);

	console.log('cambiamos el valor de arg1, ahora valdrá "hola":');
	arg1 = 'hola';
	console.log('arg1: '+arg1);
	
	arg2 = 'adios';
	console.log('pero arguments no ha variado...'); console.log(arguments);
}
argumentos(1);

function argumentos2(arg1, arg2) {
	console.log('Parámetros formales:\n');
	console.log('arg1: '+arg1);
	console.log('arg2: '+arg2);

	console.log('objeto arguments: ');
	console.log(arguments);

	console.log('asignamos a arguments[1], el valor de arg1:');
	arguments[1] = arg1;
	console.log('arguments[1]: '+arguments[1]);
	
	console.log('arguments se ha actualizado: '); console.log(arguments);
	console.log('qué ocurrirá con arg2?: ');
	console.log('arg2: '+arg2);
}
argumentos2(1);