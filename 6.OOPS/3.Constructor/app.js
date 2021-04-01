function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
    // console.log(this)

    // if we do in this way, this function will be copied in each object
    // this.rgb = function(){
    //     const {r, g, b} = this;
    //     return `rgb(${r}, ${g}, ${b})`
    // }
}


Color.prototype.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function(){
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function(a = 1.0){
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}


const c1 = new Color(40, 50, 60);
const c2 = new Color(4, 5, 60);
console.log(c1)
console.log(c1.rgb())
document.body.style.backgroundColor = c1.rgba(0.5)
console.log(c1.rgba(0.5))
console.log(c1.rgb === c2.rgb)