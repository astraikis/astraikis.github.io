var sushiRepublicActiveImgId = null;
var slicesPizzaActiveImgId = null;
var jimmyJohnsActiveImgId = null;

function onImgClick(restaurant, imgId) {
    if (restaurant === "sushiRepublic") {
        const img = document.getElementById(imgId);
        img.style.height = "300px";

        const imgText = document.getElementById(imgId + "-text");
        imgText.style.display = "block";
        
        if (sushiRepublicActiveImgId !== null) {
            document.getElementById(sushiRepublicActiveImgId).style.height = "200px";
            document.getElementById(sushiRepublicActiveImgId + "-text").style.display = "none";
        }

        sushiRepublicActiveImgId = imgId;
    } else if (restaurant === "slicesPizza") {
        const img = document.getElementById(imgId);
        img.style.height = "300px";

        const imgText = document.getElementById(imgId + "-text");
        imgText.style.display = "block";
        
        if (slicesPizzaActiveImgId !== null) {
            document.getElementById(slicesPizzaActiveImgId).style.height = "200px";
            document.getElementById(slicesPizzaActiveImgId + "-text").style.display = "none";
        }

        slicesPizzaActiveImgId = imgId;
    } else if (restaurant === "jimmyJohns") {
        const img = document.getElementById(imgId);
        img.style.height = "300px";

        const imgText = document.getElementById(imgId + "-text");
        imgText.style.display = "block";
        
        if (jimmyJohnsActiveImgId !== null) {
            document.getElementById(jimmyJohnsActiveImgId).style.height = "200px";
            document.getElementById(jimmyJohnsActiveImgId + "-text").style.display = "none";
        }

        jimmyJohnsActiveImgId = imgId;
    }
}