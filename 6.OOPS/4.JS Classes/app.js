class Color{
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
        console.log("INSIDE CONSTRUCTOR!!")
        console.log(r, g, b)
    }
    greet(){
        return `HELLO FROM ${this.name}`
    }
    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`

    }
    rgb(){
        const {r, g, b} = this;
        return  `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0){
        const {r, g, b} = this;
        return  `rgb(${this.innerRGB()}, ${a})`
    }

    hsl(){
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    calHSL(){
        let {r, g, b} = this;

        
    }
}

const c1 = new Color(255, 67, 89, "tomato")
console.log(c1.greet())
console.log(c1.rgba())
console.log(c1.rgb())