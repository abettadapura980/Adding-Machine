var sum = 0;
var count = 0;


function add(x)
{
  sum = sum + x;
  count = count + 1;
  printInfo(sum);
}

function printInfo()
{
  document.getElementById("output").innerHTML="Number Count: " + count;
  document.getElementById("output2").innerHTML="Sum: " + sum;

}

function clearIt()
{
  sum=0;
  count=0;
  document.getElementById("output").innerHTML= " ";
  document.getElementById("output2").innerHTML= " ";
}
