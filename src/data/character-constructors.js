export function Stats() {
	this.power = new Stat();
	this.agility = new Stat();
	this.constitution = new Stat();
	this.acuity = new Stat();
	this.intellect = new Stat();
	this.willpower = new Stat();
	// Note: Priority has a static value determined by agility and acuity
	this.priority = 5;
}

export function Stat() {
	this.value = 10;
	this.exp = 0;
	this.talent = 1;
}

export function Resources() {
	this.health = 100;
	this.vigor = 10;
	this.fatigue = 0;
	this.wounds = 0;
	this.focus = 0;
}

export function Character() {
	this.stats = new Stats();
	this.currentResources = new Resources();
	this.maxResources = new Resources();
	this.name = "Name";
	this.gender = "Undefined";
	this.race = "Human";
	this.level = 0;
	this.skills = {0: new Skill()};
	this.abilities = {0: new Ability()};
	this.inventory = {0: new InventoryItem()};
	this.equipment = new Equipment();
}

export function Skill() {
	this.name = "Skill";
	this.rank = 1;
	this.level = 1;
	this.exp = 0;
	this.talent = 1;
	this.description = "Description Here";
}
export function Ability() {
	this.name = "Ability";
	this.rank = 1;
	this.level = 1;
	this.exp = 0;
	this.description = "Description Here";
}

export function InventoryItem() {
	this.name = "Item";
	this.quantity = 1;
	this.rank = 1;
	this.level = 1;
	this.mod = 1;
	this.weight = 1;
	this.description = "Description here";
}

export function Equipment() {
	this.leftHand = new InventoryItem();
	this.rightHand = new InventoryItem();
	this.head = new InventoryItem();
	this.leftWrist = new InventoryItem();
	this.rightWrist = new InventoryItem();
	this.armor = new InventoryItem();
	this.back = new InventoryItem();
	this.leftAnklet = new InventoryItem();
	this.rightAnklet = new InventoryItem();
	this.accessory1 = new InventoryItem();
	this.accessory2 = new InventoryItem();
	this.accessory3 = new InventoryItem();
	this.boots = new InventoryItem();
	this.spellFocus = new InventoryItem();
}