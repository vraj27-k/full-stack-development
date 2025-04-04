function reversenum(num)
{
 let rev=0;

while(num>0)
    {
    rev=rev*10+(num%10);
    //num=12 (0*10+12%10) rev=2
    //num=1 (2*10+1%10) rev=21
    //num=441 (0*10+441%10) rev=1
    //num=44 (1*10+44%10) rev=14
    //num=4 (14*10+144%10) rev=144
   
    num=parseInt(num/10);
    //num 1,num=0,num=44,num==4,num=0
    }
    return rev;
   }
   function square(num){ return num*num; }
   function checknum(num)
   {
    a=square(num) //a=144
    b=square(reversenum(num)) //b=441
    if(a==reversenum(b)) { console.log("Equal") }
    else{ console.log("Not equal") }
   }
   module.exports.checknum = checknum

   