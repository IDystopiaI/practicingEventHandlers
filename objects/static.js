/* static = keyword that defines properties or methods that
            belongs to the class itself rather than the objects created
            from that class (class owns anything static, not the objects)
*/

class MathUtil{
    // static properties, accessed through class not an
    // instance of the class
    static PI = 3.14159;

    // static method, same as above
    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return  2 * radius * this.PI;
    }

    static getArea(radius) {
        return this.PI * radius**2
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

console.log("\nClass User examples");

class User {
    // track how many users have been created
    static userCount = 0;

    constructor(username) {
        this.username = username;
        // User to target the class, not an instance of the object (this.)
        User.userCount++;
    }

    // non-static method
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    // static method
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(User.userCount);
console.log(user1.userCount); // undefined

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
