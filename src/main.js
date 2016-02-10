
var imgnum = 1;
var maximg = 12;

var Next = document.getElementById("Next");
var Back = document.getElementById("Back");


Next.onclick = function(){

    console.log(Next);
    
    imgnum++
    
    if (imgnum > maximg) {
        imgnum = 1 
    }

    var img = document.getElementById("MainImage");
    console.log(img);
    img.src = "img\\img" + imgnum + ".jpg"
    
    console.log(img);
    
}

Back.onclick = function(){

    console.log(Back);
    
    imgnum--
    
    if (imgnum < 1) {
        imgnum = maximg 
    }

    var img = document.getElementById("MainImage");
    console.log(img);
    img.src = "img\\img" + imgnum + ".jpg"
    
    console.log(img);
    
}