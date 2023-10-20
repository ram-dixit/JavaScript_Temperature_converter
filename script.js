var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function (){
    console.log("cell changed........");
    let c = this.value;
    let f = ((c * 9/5) + 32);
    fah.value = Math.round(f*10)/10;
});

fah.addEventListener('input', function(){
    //convert from Fahrenheit to Celsius
    let f = this.value;
    let c = ((f - 32)*5/9);
    cel.value = Math.round(c*10)/10;
    console.log("far changed........");
});