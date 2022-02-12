let firstDiv = "<div><p>Первый заголовок</p><p>Второй заголовок</p></div>"
let i = 0;
let a = 0;
let b = 0;
while (i < firstDiv.length) { 
 if(firstDiv.indexOf("<p>")>=0){
     a++;
     i = firstDiv.indexOf("<p>")+3;
 }
}
i = 0;
while (i < firstDiv.length) { 
    if(firstDiv.indexOf("</p>")>=0){
        a++;
        i = firstDiv.indexOf("<p>")+4;
    }
   }
console.log(a);
console.log(b);
