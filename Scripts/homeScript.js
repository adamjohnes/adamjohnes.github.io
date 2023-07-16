//Developed by: Adam Johnes

document.addEventListener("DOMContentLoaded", function() 
{
    resetValues();
});

window.addEventListener('resize', fixImages);

function validInputs ()
{
    var length = +document.getElementById("length").value;
    if (length == null || length == "" || isNaN(length) || length <= 0)
    {
        alert ("Please fill in the length value with a positive number greater than zero.");
        return;
    }
    var width = +document.getElementById("width").value;
    if (width == null || width == "" || isNaN(width) || width <= 0)
    {
        alert ("Please fill in the width value with a positive number greater than zero.");
        return;
    }
    var front = +document.getElementById("front").value;
    if (front == null || front == "" || isNaN(front) || front <= 0)
    {
        alert ("Please fill in the front value with a positive number greater than zero.");
        return;
    }
    var back = +document.getElementById("back").value;
    if (back == null || back == "" || isNaN(back) || back <= 0)
    {
        alert ("Please fill in the back value with a positive number greater than zero.");
        return;
    }
    var left = +document.getElementById("left").value;
    if (left == null || left == "" || isNaN(left) || left <= 0)
    {
        alert ("Please fill in the left value with a positive number greater than zero.");
        return;
    }
    var right = +document.getElementById("right").value;
    if (right == null || right == "" || isNaN(right) || right <= 0)
    {
        alert ("Please fill in the right value with a positive number greater than zero.");
        return;
    }

    matchLitterbox(length, width, front, back, left, right, true);
}

function matchLitterbox(length, width, front, back, left, right, buttonPress)
{
    imgLeftOuter = document.getElementById("imgOutputLeftOuter");
    imgLinkLeftOuter = document.getElementById("imgOutputLeftOuterLink");

    imgLeftMiddle = document.getElementById("imgOutputLeftMiddle");
    imgLinkLeftMiddle = document.getElementById("imgOutputLeftMiddleLink");

    imgLeftInner = document.getElementById("imgOutputLeftInner");
    imgLinkLeftInner = document.getElementById("imgOutputLeftInnerLink");

    imgRightInner = document.getElementById("imgOutputRightInner");
    imgLinkRightInner = document.getElementById("imgOutputRightInnerLink");

    imgRightMiddle = document.getElementById("imgOutputRightMiddle");
    imgLinkRightMiddle = document.getElementById("imgOutputRightMiddleLink");

    var x = length + front + back;
    var y = width + left + right;

    if (length <= 5 || width <= 5)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your litterbox is too small for our liners, please check your length and width measurements";
        return;
    }
    if (length > 27)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your length is too large for any of our liners";
        return;
    }
    if (width > 26)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your width is too large for any of our liners";
        return;
    }
    if (front > 13)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your front side is too tall for any of our liners";
        return;
    }
    if (back > 13)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your back side is too tall for any of our liners";
        return;
    }
    if (left > 13)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your left side is too tall for any of our liners";
        return;
    }
    if (right > 13)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "Your right side is too tall for any of our liners";
        return;
    }
    if (x > 44 || y > 42)
    {
        if (!buttonPress)
        {
            return;
        }
        outputText.innerHTML = "At least one of your sides is too large for any of our liners";
        return;
    }

    if (window.innerWidth <= 625 && buttonPress == true)
    {
        window.scrollTo({top: 1650, behavior: "smooth"});
    }
    else if (window.innerWidth <= 1350 && buttonPress == true)
    {
        window.scrollTo({top: 1350, behavior: "smooth"});
    }
    else 
    {
        window.scrollTo({top: 1000, behavior: "smooth"});
    }

    if (x <= 31 && y <= 34)
    {
        if (window.innerWidth <= 625)
        {
                    //clean sizes
            imgLeftOuter.style.width = "19vw";
            imgLeftMiddle.style.width = "15vw";
            imgLeftInner.style.width = "15vw";
            imgRightInner.style.width = "19vw";
            imgRightMiddle.style.width = "19vw";
            divOutputLeftOuter.style.width = "19vw";
            divOutputLeftMiddle.style.width = "15vw";
            divOutputLeftInner.style.width = "15vw";
            divOutputRightInner.style.width = "19vw";
            divOutputRightMiddle.style.width = "19vw";
            imgLeftOuter.style.width = "39vw";
            imgRightInner.style.width = "39vw";
            divOutputLeftOuter.style.width = "39vw";
            divOutputRightInner.style.width = "39vw";
            imgLeftOuter.src = "../Images/large.AVIF";
            imgRightInner.src = "../Images/large.AVIF";
            imgLeftOuter.style.display = "inline";
            imgLeftOuter.style.visibility = "visible";
            imgLeftMiddle.style.display = "inline";
            imgLeftMiddle.style.visibility = "hidden";
            imgLeftInner.style.display = "none";
            imgLeftInner.style.visibility = "hidden";
            imgRightInner.style.display = "inline";
            imgRightInner.style.visibility = "visible";
            imgRightMiddle.style.display = "none";
            imgRightMiddle.style.visibility = "hidden";
            imgLinkLeftOuter.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
            imgLinkRightInner.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
        }

        else if (window.innerWidth <= 1350)
        {
            //clean sizes
            imgLeftOuter.style.width = "19vw";
            imgLeftMiddle.style.width = "19vw";
            imgLeftInner.style.width = "19vw";
            imgRightInner.style.width = "19vw";
            imgRightMiddle.style.width = "19vw";
            divOutputLeftOuter.style.width = "19vw";
            divOutputLeftMiddle.style.width = "19vw";
            divOutputLeftInner.style.width = "19vw";
            divOutputRightInner.style.width = "19vw";
            divOutputRightMiddle.style.width = "19vw";
            imgLeftInner.src = "../Images/large.AVIF";
            imgLeftOuter.style.display = "inline";
            imgLeftOuter.style.visibility = "hidden";
            imgLeftMiddle.style.display = "inline";
            imgLeftMiddle.style.visibility = "hidden";
            imgLeftInner.style.display = "inline";
            imgLeftInner.style.visibility = "visible";
            imgRightInner.style.display = "none";
            imgRightInner.style.visibility = "hidden";
            imgRightMiddle.style.display = "none";
            imgRightMiddle.style.visibility = "hidden";
            imgLinkLeftInner.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
        }

        else 
        {
            imgLeftOuter.src = "../Images/large.AVIF";
            imgRightMiddle.src = "../Images/large.AVIF";
            imgLeftOuter.style.display = "inline";
            imgLeftOuter.style.visibility = "visible";
            imgLeftMiddle.style.display = "none";
            imgLeftMiddle.style.visibility = "hidden";
            imgLeftInner.style.display = "none";
            imgLeftInner.style.visibility = "hidden";
            imgRightInner.style.display = "none";
            imgRightInner.style.visibility = "hidden";
            imgRightMiddle.style.display = "inline";
            imgRightMiddle.style.visibility = "visible";
            imgLinkLeftOuter.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
            imgLinkRightMiddle.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
        }

        outputText.innerHTML = "The correct size is Large.<br>Click on the large-size AlfaPet product to be taken \
        to our amazon store page!"

        
    }

    else if (x <= 38 && y <= 36)
    {
        //clean sizes
        if (window.innerWidth <= 1350)
        {
            imgLeftOuter.style.width = "19vw";
            imgLeftMiddle.style.width = "19vw";
            imgLeftInner.style.width = "19vw";
            imgRightInner.style.width = "19vw";
            imgRightMiddle.style.width = "19vw";
            divOutputLeftOuter.style.width = "19vw";
            divOutputLeftMiddle.style.width = "19vw";
            divOutputLeftInner.style.width = "19vw";
            divOutputRightInner.style.width = "19vw";
            divOutputRightMiddle.style.width = "19vw";
        }

        imgLeftOuter.src = "../Images/extraGiant.AVIF";
        imgLeftMiddle.src = "../Images/flatBottom.AVIF";
        imgLeftInner.src = "../Images/jumbo.AVIF";
        imgRightInner.src = "../Images/walmart.AVIF";
        imgRightMiddle.src = "../Images/sifting.AVIF";

        imgLeftOuter.style.display = "inline";
        imgLeftMiddle.style.display = "inline";
        imgLeftInner.style.display = "inline";
        imgRightInner.style.display = "inline";
        imgRightMiddle.style.display = "inline";

        imgLeftOuter.style.visibility = "visible";
        imgLeftMiddle.style.visibility = "visible";
        imgLeftInner.style.visibility = "visible";
        imgRightInner.style.visibility = "visible";
        imgRightMiddle.style.visibility = "visible";

        imgLinkLeftOuter.href = "https://www.amazon.com/Alfapet-Extra-giant-Elastic-Sta-put-Litter/dp/B016095M6G/ref=sr_1_15?dchild=1&keywords=cat+pan+liners+alfapet&qid=1610991048&sr=8-15";
        imgLinkLeftMiddle.href = "https://www.amazon.com/Alfapet-Drawstring-Disposal-Placement-Pan-Disposable/dp/B084G8GZHJ/ref=sr_1_25?dchild=1&keywords=alfapet+kitty+cat+elastic+litter+box+liners&qid=1611767423&sr=8-25";
        imgLinkLeftInner.href = "https://www.amazon.com/Alfapet-Sta-Put-Elastic-Sifting-Litter/dp/B00U1O9BAA/ref=sr_1_10?dchild=1&keywords=alfapet+kitty+cat+elastic+litter+box+liners&qid=1611768287&sr=8-10";
        imgLinkRightInner.href = "https://www.walmart.com/ip/Alfa-Pet-Sifting-Elastic-Cat-Pan-Liners/384544432";
        imgLinkRightMiddle.href = "https://www.amazon.com/Kitty-Cat-Alfa-Liners-Count/dp/B00IWUB36A/ref=sr_1_14?dchild=1&keywords=alfapet+kitty+cat+elastic+litter+box+liners&qid=1611768359&sr=8-14";

        outputText.innerHTML = "The correct size is Extra Giant or Jumbo.<br>Scroll down and click on the Extra-Giant or Jumbo AlfaPet products to be taken \
        to our amazon or walmart  store page!"
    }

    else if (x <= 44 && y <= 42)
    {
        if (window.innerWidth <= 625)
        {
            //clean sizes
            imgLeftOuter.style.width = "19vw";
            imgLeftMiddle.style.width = "15vw";
            imgLeftInner.style.width = "15vw";
            imgRightInner.style.width = "1vw";
            imgRightMiddle.style.width = "19vw";
            divOutputLeftOuter.style.width = "19vw";
            divOutputLeftMiddle.style.width = "15vw";
            divOutputLeftInner.style.width = "15vw";
            divOutputRightInner.style.width = "19vw";
            divOutputRightMiddle.style.width = "19vw";
            imgLeftOuter.style.width = "39vw";
            imgRightInner.style.width = "39vw";
            divOutputLeftOuter.style.width = "39vw";
            divOutputRightInner.style.width = "39vw";
            imgLeftOuter.src = "../Images/superJumbo.AVIF";
            imgRightInner.src = "../Images/superJumbo.AVIF";
            imgLeftOuter.style.display = "inline";
            imgLeftOuter.style.visibility = "visible";
            imgLeftMiddle.style.display = "inline";
            imgLeftMiddle.style.visibility = "hidden";
            imgLeftInner.style.display = "none";
            imgLeftInner.style.visibility = "hidden";
            imgRightInner.style.display = "inline";
            imgRightInner.style.visibility = "visible";
            imgRightMiddle.style.display = "none";
            imgRightMiddle.style.visibility = "hidden";
            imgLinkLeftOuter.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
            imgLinkRightInner.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
        }

        else if (window.innerWidth <= 1350)
        {
            //clean sizes
            imgLeftOuter.style.width = "19vw";
            imgLeftMiddle.style.width = "19vw";
            imgLeftInner.style.width = "19vw";
            imgRightInner.style.width = "19vw";
            imgRightMiddle.style.width = "19vw";
            divOutputLeftOuter.style.width = "19vw";
            divOutputLeftMiddle.style.width = "19vw";
            divOutputLeftInner.style.width = "19vw";
            divOutputRightInner.style.width = "19vw";
            divOutputRightMiddle.style.width = "19vw";
            imgLeftInner.src = "../Images/superJumbo.AVIF";
            imgLeftOuter.style.display = "inline";
            imgLeftOuter.style.visibility = "hidden";
            imgLeftMiddle.style.display = "inline";
            imgLeftMiddle.style.visibility = "hidden";
            imgLeftInner.style.display = "inline";
            imgLeftInner.style.visibility = "visible";
            imgRightInner.style.display = "none";
            imgRightInner.style.visibility = "hidden";
            imgRightMiddle.style.display = "none";
            imgRightMiddle.style.visibility = "hidden";
            imgLinkLeftInner.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
        }
        else 
        {
            imgLeftOuter.src = "../Images/superJumbo.AVIF";
            imgRightMiddle.src = "../Images/superJumbo.AVIF";
            imgLeftOuter.style.display = "inline";
            imgLeftOuter.style.visibility = "visible";
            imgLeftMiddle.style.display = "none";
            imgLeftMiddle.style.visibility = "hidden";
            imgLeftInner.style.display = "none";
            imgLeftInner.style.visibility = "hidden";
            imgRightInner.style.display = "none";
            imgRightInner.style.visibility = "hidden";
            imgRightMiddle.style.display = "inline";
            imgRightMiddle.style.visibility = "visible";
            imgLinkLeftOuter.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
            imgLinkRightMiddle.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
        }

        outputText.innerHTML = "The correct size is Super Jumbo.<br>Click on the Super Jumbo product to be taken \
        to our amazon store page!"
    }
}

function meetAlfapet ()
{
    window.location = "https://www.alfapetco.com/about-alfapet/";
}

function ourLiners ()
{
    window.location = "https://www.alfapetco.com/products/";
}

function contactUs ()
{
    window.location = "https://www.alfapetco.com/contact-us/";
}

function resetValues ()
{
    document.getElementById("length").value = null;
    document.getElementById("width").value = null;
    document.getElementById("front").value = null;
    document.getElementById("back").value = null;
    document.getElementById("left").value = null;
    document.getElementById("right").value = null;

    document.getElementById("imgOutputLeftOuter").style.display = "none";
    document.getElementById("imgOutputLeftMiddle").style.display = "none";
    document.getElementById("imgOutputLeftInner").style.display = "none";
    document.getElementById("imgOutputRightInner").style.display = "none";
    document.getElementById("imgOutputRightMiddle").style.display = "none";

    outputText.innerHTML = null;

    if (window.innerWidth <= 625)
    {
        window.scrollTo({top: 785, behavior: "smooth"});
    }
    else if (window.innerWidth <= 1050)
    {
        window.scrollTo({top: 715, behavior: "smooth"});
    }
}

function fixImages()
{
    var length = +document.getElementById("length").value;
    var width = +document.getElementById("width").value;
    var front = +document.getElementById("front").value;
    var back = +document.getElementById("back").value;
    var left = +document.getElementById("left").value;
    var right = +document.getElementById("right").value;
    if (window.innerWidth <= 1350)
    {
        //clean sizes
        imgLeftOuter.style.width = "19vw";
        imgLeftMiddle.style.width = "19vw";
        imgLeftInner.style.width = "19vw";
        imgRightInner.style.width = "19vw";
        imgRightMiddle.style.width = "19vw";
        divOutputLeftOuter.style.width = "19vw";
        divOutputLeftMiddle.style.width = "19vw";
        divOutputLeftInner.style.width = "19vw";
        divOutputRightInner.style.width = "19vw";
        divOutputRightMiddle.style.width = "19vw";
        matchLitterbox(length, width, front, back, left, right, false);
    }
    else
    {
        divOutputLeftOuter.style.width = "16.66%";
        divOutputLeftMiddle.style.width = "16.66%";
        divOutputLeftInner.style.width = "16.66%";
        divOutputRightInner.style.width = "16.66%";
        divOutputRightMiddle.style.width = "16.66%";
        matchLitterbox(length, width, front, back, left, right, false);
    }
}

function checkValues()
{
    validInputs();
}