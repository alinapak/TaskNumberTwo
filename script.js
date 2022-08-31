
let input = document.querySelector('input');
parentElement = document.querySelector('p');

function getDiamond(n, i = 1) {
   n = parseInt(input.value);
   lineSpace = document.createElement('pre')
   x = document.createElement("span");
   let star = '*'
   let space = ' ';
   let line = space.repeat((n - i) / 2) + star.repeat(i) + space.repeat((n - i) / 2);
   parentElement.appendChild(lineSpace);
   if (n % 2 === 0) {
      if (i >= n) {
         return
      }
      lineSpace.appendChild(document.createTextNode(line));
      getDiamond(n, i + 2);
      lineSpace.appendChild(document.createTextNode(line));

   } else if (n % 2 === 1) {
      lineSpace.appendChild(document.createTextNode(line));
      parentElement.appendChild(lineSpace);
      if (i >= n) {
         downLineSpace = document.createElement('pre');
         lineSpace.appendChild(downLineSpace);
         return
      }
      getDiamond(n, i + 2);
      lineSpace.appendChild(document.createTextNode(line));
   }
   downLineSpace = document.createElement('pre');
   lineSpace.appendChild(downLineSpace);
}