
class Animal{

	
	constructor(color)
	{
		 var _type = type;
		 var _color = color;
		
	}
	getColor()
	{
    return '${this._color}';
	}
}
class Fish extends Animal
{
	constructor(fishType)
	{
		 var _fishType = fishType;
		 getFishType();
		this.getFishType = function(){return _fishType;}
	}

}

class Dog extends Animal
{

	constructor(dt)
	{
		let dt = new dogType();
		var _dt = dt;
	}
	getFurColor()
	{
    return '${this._dt}';;
	}
}
class dogType
{
	constructor(furColor)
	{
		 var _typeName = typeName;
		 var _furColor = furColor;
		
	}
	getFurColor()
	{
		console.log('red');
    return '${this._furColor}';
	}
}



//es5
var type;
function Animal1(color)
{
	this.color = color;
	this.type = type;
}
	function getColor1()
	{
    return this.color;
	}
var animal = new Animal1('red');
animal.color;
animal.type;


function Fish1(fishType)
{
	this.fishType = fishType;
}
function getFishType1()
	{
    return this.fishType;
	}

Fish1.prototype = new Animal1();
var f = new Fish1();
console.log(f.color);


function Dog1(dogType)
{
	this.dogType = dogType;
	
}
	function getFurColor1()
	{
    return this.dogType;
	}

function DogType1(furColor)
{
	this.typeName = typeName;
	this.furColor = furColor;
}
	function getFurColor1()
	{
    return this.furColor;
	}

