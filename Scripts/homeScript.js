//Developed by: Adam Johnes

document.addEventListener("DOMContentLoaded", function() 
{
    resetValues();
});

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

    matchLitterbox(length, width, front, back, left, right);
}

function matchLitterbox(length, width, front, back, left, right)
{
    imgLeft = document.getElementById("imgOutputLeft");
    imgRight = document.getElementById("imgOutputRight");
    imgLinkLeft = document.getElementById("imgOutputLeftLink");
    imgLinkRight = document.getElementById("imgOutputRightLink");
    var x = length + front + back;
    var y = width + left + right;

    if (length <= 5 || width <= 5)
    {
        outputText.innerHTML = "Your litterbox is too small for our liners, please check your length and width measurements";
        return;
    }
    if (length > 27)
    {
        outputText.innerHTML = "Your length is too large for any of our liners";
        return;
    }
    if (width > 26)
    {
        outputText.innerHTML = "Your width is too large for any of our liners";
        return;
    }
    if (front > 13)
    {
        outputText.innerHTML = "Your front side is too tall for any of our liners";
        return;
    }
    if (back > 13)
    {
        outputText.innerHTML = "Your back side is too tall for any of our liners";
        return;
    }
    if (left > 13)
    {
        outputText.innerHTML = "Your left side is too tall for any of our liners";
        return;
    }
    if (right > 13)
    {
        outputText.innerHTML = "Your right side is too tall for any of our liners";
        return;
    }
    if (x > 44 || y > 42)
    {
        outputText.innerHTML = "At least one of your sides is too large for any of our liners";
        return;
    }

    imgLeft.style.display = "inline";
    imgRight.style.display = "inline";

    if (x <= 31 && y <= 34)
    {
        if (window.innerWidth > 1400)
        {
            outputText.innerHTML = "The correct size is Large.<br>Click on the large-size AlfaPet product to be taken \
            to our amazon or walmart  store page!"
            imgLeft.src = "../Images/large.AVIF";
            imgRight.src = "../Images/large.AVIF";
            imgLinkLeft.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
            imgLinkRight.href = "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20";
        }
        else
        {
            document.getElementById("imgOutputLeft").style.display = "none";
            document.getElementById("imgOutputRight").style.display = "none";
            outputText.innerHTML = "The correct size is Large.<br>Scroll down and click on the large-size AlfaPet product to be taken \
            to our amazon or walmart  store page!"
        }
    }

    else if (x <= 38 && y <= 36)
    {
        if (window.innerWidth > 1400)
        {
            outputText.innerHTML = "The correct size is Extra Giant or Jumbo.<br>Click on the Extra-Giant or Jumbo AlfaPet products to be taken \
            to our amazon or walmart  store page!"
            imgLeft.src = "../Images/extraGiant.AVIF";
            imgRight.src = "../Images/walmart.AVIF";
            imgLinkLeft.href = "https://www.amazon.com/Alfapet-Extra-giant-Elastic-Sta-put-Litter/dp/B016095M6G/ref=sr_1_15?dchild=1&keywords=cat+pan+liners+alfapet&qid=1610991048&sr=8-15";
            imgLinkRight.href = "https://www.walmart.com/ip/Alfa-Pet-Sifting-Elastic-Cat-Pan-Liners/384544432";
        }
        else
        {
            document.getElementById("imgOutputLeft").style.display = "none";
            document.getElementById("imgOutputRight").style.display = "none";
            outputText.innerHTML = "The correct size is Extra Giant or Jumbo.<br>Scroll down and click on the Extra-Giant or Jumbo AlfaPet products to be taken \
            to our amazon or walmart  store page!"
        }
    }

    else if (x <= 44 && y <= 42)
    {
        if (window.innerWidth > 1400)
        {
            outputText.innerHTML = "The correct size is Super Jumbo.<br>Click on the Super Jumbo product to be taken \
            to our amazon or walmart store page!"
            imgLeft.src = "../Images/superJumbo.AVIF";
            imgRight.src = "../Images/superJumbo.AVIF";
            imgLinkLeft.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
            imgLinkRight.href = "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18";
        }
        else
        {
            document.getElementById("imgOutputLeft").style.display = "none";
            document.getElementById("imgOutputRight").style.display = "none";
            outputText.innerHTML = "The correct size is Super Jumbo.<br>Scroll down and click on the Super Jumbo product to be taken \
            to our amazon or walmart store page!"
        }
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
    document.getElementById("imgOutputLeft").style.display = "none";
    document.getElementById("imgOutputRight").style.display = "none";
    outputText.innerHTML = null;
}

function checkValues()
{
    validInputs();
}
