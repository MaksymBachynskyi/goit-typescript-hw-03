class Key {
	private signature: number = Math.random();

	getSignature(): number {
		return this.signature;
	}
}
class Person {
	constructor(private key: Key) {}

	getKey(this: Person): Key {
		return this.key;
	}
}

abstract class House {
	public door: boolean = false;
	private tenants: Person[] = [];
	constructor(protected key: Key) {}
	comeIn(person: Person) {
		if (this.door) {
			this.tenants.push(person);
		}
	}
	abstract openDoor(key: Key): boolean;
}
class MyHouse extends House {
	openDoor(key: Key): boolean {
		if (key.getSignature() === this.key.getSignature()) {
			return (this.door = true);
		} else {
			return (this.door = false);
		}
	}
}

export {};
