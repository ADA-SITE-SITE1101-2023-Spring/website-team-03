const titleDisplay=document.getElementById('titleContainer');
const titleString ='The Web and Education';

let titleDiv=document.getElementById('title');
let cursor=document.getElementById('cursor');

let dd=null;
    let iii=0;
    clearInterval(dd);
    dd = setInterval(titleType,50);

    function titleType(){
        if(iii==21){
            clearInterval(dd);
            cursor.setAttribute('id','null');
        }
        else{
            titleDiv.innerHTML=titleDiv.innerHTML+titleString[iii];
            iii++;
        }
    }