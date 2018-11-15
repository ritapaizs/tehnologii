class Animal{

	constructor(color,type)
	{
		public var _type = type;
		private var _color = color;
		public getColor();
		//this.getColor = function(){return _color;}
	}
	getColor()
	{
    return '${this._color}';;
	}
}
class Fish extends Animal
{
	constructor(fishType)
	{
		private var _fishType = fishType;
		public getFishType();
		this.getFishType = function(){return _fishType;}
	}

}

class Dog extends Animal
{
constructor(dogType)
	{
		private var _dogType = dogType;
	//	private let dogType = new dogType('name','red');
		public getdogType();
		this.getdogType = function(){return _dogType;}
	}
}
class dogType
{
	constructor(typeName,furColor)
	{
		public var _typeName = typeName;
		private var _furColor = furColor;
		
	}
	getFurColor()
	{
    return '${this._furColor}';;
	}
}
let doggy = new Dog('teckel');
doggy.getColor();