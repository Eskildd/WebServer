beforeEnter = true;
operator = false;

let elementsArray = document.querySelectorAll(".button");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        buttonPressed(elem.textContent);
    });
});

function remove()
{
    document.getElementById("upperDisplay").innerHTML=0;
    document.getElementById("lowerDisplay").innerHTML=0;
}

function removeLast()
{
    let text = document.getElementById("lowerDisplay").textContent;
    text = text.slice(0,-1);
    
    if(!isNaN(text[text.length-1]))
    {
        operator=false;
    }
    else
    {
        operator=true;
    }
    if(text=="")
    {
        text=0;
    }
    document.getElementById("lowerDisplay").innerHTML = text;
    document.getElementById("upperDisplay").innerHTML=document.getElementById("lowerDisplay").textContent;
}

function buttonPressed(numORoperation)
{
    if(numORoperation == "enter")
    {
        document.getElementById("lowerDisplay").innerHTML=eval(document.getElementById("lowerDisplay").textContent);
        beforeEnter=false;
        operator=false;
    }
    else if(numORoperation=="Back")
    {
        removeLast();
    }
    else if(numORoperation=="x^2")
    {
        if(document.getElementById("lowerDisplay").textContent!="0")
        {
            document.getElementById("lowerDisplay").innerHTML+="**";
            document.getElementById("upperDisplay").innerHTML=document.getElementById("lowerDisplay").textContent;

            beforeEnter=true;
            operator=true;
        }
    }
    else if(numORoperation == "CE")
    {
        remove();
        operator=false;
    }
    else if(numORoperation == "C")
    {
        
    }
    else if(numORoperation == "1/x")
    {
        
    }
    else if(numORoperation == "sqrt(x)")
    {
        
    }
    else if(numORoperation == "%")
    {
        if(document.getElementById("lowerDisplay").textContent!="0")
        {
            document.getElementById("lowerDisplay").innerHTML+=numORoperation;
            document.getElementById("upperDisplay").innerHTML=document.getElementById("lowerDisplay").textContent;

            beforeEnter=true;
            operator=true;
        }
    }
    else
    {
        if(!beforeEnter && !isNaN(numORoperation))
        {
            document.getElementById("upperDisplay").innerHTML=numORoperation;
            document.getElementById("lowerDisplay").innerHTML=numORoperation;
            beforeEnter=true;
            operator=false;
        }
        else if(isNaN(numORoperation))
        {
            if(!operator)
            {
                document.getElementById("lowerDisplay").innerHTML+=numORoperation;
                document.getElementById("upperDisplay").innerHTML=document.getElementById("lowerDisplay").textContent;
            }
            else
            {
                removeLast();
                document.getElementById("lowerDisplay").innerHTML+=numORoperation;
                document.getElementById("upperDisplay").innerHTML=document.getElementById("lowerDisplay").textContent;
            }
            operator=true;
        }
        else if(document.getElementById("lowerDisplay").textContent=="0")
        {
            document.getElementById("lowerDisplay").innerHTML=numORoperation;
            document.getElementById("upperDisplay").innerHTML=numORoperation;
            operator=false;
        }
        else
        {
            document.getElementById("lowerDisplay").innerHTML+=numORoperation;
            document.getElementById("upperDisplay").innerHTML=document.getElementById("lowerDisplay").textContent;

            beforeEnter=true;
            operator=false;
        }
    }
}
