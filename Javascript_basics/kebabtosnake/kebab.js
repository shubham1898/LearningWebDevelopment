var final="";
function kebab(str)
{
   for(var i=0;i<str.length;i++)
   {
       if(str.charAt(i)=="-")
       {
final=final+"_";
       }
       else final=final+str.charAt(i);
    }
    return final;
}
var str=prompt("kebab_case");
alert(kebab(str));


