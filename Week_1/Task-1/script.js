function myFunction() {
  console.log("working");
  console.log("not working");
  console.log("working 100%");
}
//calcidisplay
function calc(input){
    if (input == 7)
    {
         document.getElementById("result").innerHTML+=7;
         document.getElementById("calcidisplay").value+=7;
    }
    else if (input == 8)
    {
         document.getElementById("result").innerHTML+=8;
         document.getElementById("calcidisplay").value+=8;
    }
    else if (input == 9)
    {
         document.getElementById("result").innerHTML+=9;
         document.getElementById("calcidisplay").value+=9;
    }
    else if (input == 4)
    {
         document.getElementById("result").innerHTML+=4;
         document.getElementById("calcidisplay").value+=4;
    }
    else if (input == 5)
    {
         document.getElementById("result").innerHTML+=5;
         document.getElementById("calcidisplay").value+=5;
    }
    else if (input == 6)
    {
         document.getElementById("result").innerHTML+=6;
         document.getElementById("calcidisplay").value+=6;
    }
    else if (input == 1)
    {
         document.getElementById("result").innerHTML+=1;
         document.getElementById("calcidisplay").value+=1;
    }
    else if (input == 2)
    {
         document.getElementById("result").innerHTML+=2;
         document.getElementById("calcidisplay").value+=2;
    }
    else if (input == 3)
    {
         document.getElementById("result").innerHTML+=3;
         document.getElementById("calcidisplay").value+=3;
    }
    
    else if (input == "+")
    {
         document.getElementById("result").innerHTML+="+";
         document.getElementById("calcidisplay").value+="+";
    }
    else if (input == "-")
    {
         document.getElementById("result").innerHTML+="-";
         document.getElementById("calcidisplay").value+="-";
    }
    else if (input == "/")
    {
         document.getElementById("result").innerHTML+="/";
         document.getElementById("calcidisplay").value+="÷";
    }
    else if (input == "*")
    {
         document.getElementById("result").innerHTML+="*";
         document.getElementById("calcidisplay").value+="✕";
    }
    
    else if (input == "C")
    {
         document.getElementById("result").innerHTML="";
         document.getElementById("calcidisplay").value="";
    }
    
    else if (input == "=")
    {
         document.getElementById("result").innerHTML=math.evaluate(document.getElementById("result").innerHTML);
         document.getElementById("calcidisplay").value=math.evaluate(document.getElementById("result").innerHTML);
    }
    else if (input == "0")
    {
         document.getElementById("result").innerHTML+="0";
         document.getElementById("calcidisplay").value+="0";
    }
    else if (input == ".")
    {
         document.getElementById("result").innerHTML+=".";
         document.getElementById("calcidisplay").value+=".";
    }
    
    
    
    
    
    else if (input == "x2")
    {
         document.getElementById("result").innerHTML+="^2";
         document.getElementById("calcidisplay").value+="²";
    }
    else if (input == "sqrt")
    {
         document.getElementById("result").innerHTML+="sqrt";
         document.getElementById("calcidisplay").value+="√";
    }
    else if (input == "log")
    {
         document.getElementById("result").innerHTML+="log";
         document.getElementById("calcidisplay").value+="log";
    }
    else if (input == "pi")
    {
         pival=Math.PI
         document.getElementById("result").innerHTML+=pival;
         document.getElementById("calcidisplay").value+="π";
    }
    else if (input == "sin")
    {
         document.getElementById("result").innerHTML+="sin";
         document.getElementById("calcidisplay").value+="sin";
    }
    else if (input == "cos")
    {
         document.getElementById("result").innerHTML+="cos";
         document.getElementById("calcidisplay").value+="cos";
    }
    else if (input == "tan")
    {
         document.getElementById("result").innerHTML+="tan";
         document.getElementById("calcidisplay").value+="tan";
    }
    else if (input == "e")
    {
         document.getElementById("result").innerHTML+="e";
         document.getElementById("calcidisplay").value+="e";
    }
    else if (input == "e")
    {
         document.getElementById("result").innerHTML+="e";
         document.getElementById("calcidisplay").value+="e";
    }
    else if (input == "deg")
    {
         document.getElementById("result").innerHTML+=" deg";
         document.getElementById("calcidisplay").value+="°";
    }
    else if (input == "openbracket")
    {
         document.getElementById("result").innerHTML+="(";
         document.getElementById("calcidisplay").value+="(";
    }
    else if (input == "closebracket")
    {
         document.getElementById("result").innerHTML+=")";
         document.getElementById("calcidisplay").value+=")";
    }
    
}