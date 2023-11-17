var link = 'http://c.ganjoor.net/beyt-json.php';

let file = "index.html";

fetch (link)
.then(response => response.text())
.then(y => document.getElementById("fortune").innerHTML = y);
// .then(y => console.log(y));
// console.log('f')
// function myFunction() {
//   document.getElementById("fortune").innerHTML = "Paragraph changed.";
// }
// myFunction();

// var gabjoorblock = '';
// var ganjoorblocktitle;
// if(ganjoorblocktitle == undefined)
// {
//   ganjoorblocktitle = 'دردانه‌ای از گنجور';
// }
// gabjoorblock += '<div class="ganjoor-block">';
// gabjoorblock += '<div class="ganjoor-block-title">';
// gabjoorblock += ganjoorblocktitle;
// gabjoorblock += '</div>';
// gabjoorblock += '<div class="ganjoor-poem-block">';
// gabjoorblock += '<div class="ganjoor-m1">گوشم همه بر قول نی و نغمه چنگ است</div>';
// gabjoorblock += '<div class="ganjoor-m2">چشمم همه بر لعل لب و گردش جام است</div>';
// gabjoorblock += '<br style="clear:both;" />';
// gabjoorblock += '</div>';
// gabjoorblock += '<div class="ganjoor-footer">';
// gabjoorblock += '<div class="ganjoor-poet"><a href="https://ganjoor.net/hafez/ghazal/sh46/">حافظ</a></div>';
// gabjoorblock += '<br style="clear:both;" />';
// gabjoorblock += '</div>';
// gabjoorblock += '</div>';
// document.write(gabjoorblock);
