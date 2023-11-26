class Key {
	private signature: number;
	constructor() {
		this.signature = Math.random();
	}
	getSignature(this: Key): number {
		return this.signature;
	}
}
class Person {
	private key: Key;
	constructor(key: Key) {
		this.key = key;
	}
	getKey(this: Person) {
		return this.key;
	}
}

abstract class House {
	door: true | false;
	key: Key;

	comeIn(person: Person) {
		let tenants: Person[] = [];
		if (this.door) {
			tenants.push(person);
		}
		return tenants;
	}
	abstract openDoor(key: Key): boolean;
}
class MyHouse extends House {
	constructor(key: Key) {
		super();
		this.key = key;
	}
	openDoor(key: Key): boolean {
		if (key === this.key) {
			return (this.door = true);
		} else {
			return (this.door = false);
		}
	}
}

export {};
