const person = {
    firstName: "abhishek",
    lastName: "Soni",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    fullName2: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() => {
            console.log("this :: ", this);
            console.log(this.fullName())
        }, 3000)
    },
    shoutName2: function(){
        setTimeout(function(){
            console.log("this :: ", this);
            console.log(this.fullName())
        }, 3000)
    }

}
console.log(person.fullName())
console.log(person.shoutName())
console.log(person.fullName2()) // ERROR this is pointing to window
console.log(person.shoutName2())