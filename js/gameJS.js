
var range1=document.querySelector('#range1');
var range2=document.querySelector('#range2');
var cube=document.querySelector('.divka');
var p_top=document.querySelector('#p_top');
var p_left=document.querySelector('#p_left');

var win_background=document.querySelector('.winning');
var win_result=document.querySelector('.win_icon');
var lose_background=document.querySelector('.losing');
var lose_result=document.querySelector('.lose_icon');

var horizontal=cube.style.left;
var vertical=cube.style.top;

range1.addEventListener('input', move_left);
range2.addEventListener('input', move_down);
function move_left(){
    horizontal=horizontal.replace('px', '');
    a=parseInt(horizontal)+parseInt(range1.value);
    cube.style.left=a+'px';
    p_left.textContent=a+'px';
}

function move_down(){
    vertical=vertical.replace('px', '');
    a=parseInt(vertical)+parseInt(range2.value);
    cube.style.top=a+'px';
    p_top.textContent=a+'px';
}

function answer(){
    var left_answer=document.getElementById('answer2');
    l=parseInt(left_answer.value);
    console.log(l);
    var top_answer=document.getElementById('answer1');
    t=parseInt(top_answer.value);
    console.log(t);
    if((l>300 && l<308) && (t>237 && t<246)){
        winning();
    }else{
        losing();
    }
}

/*Анимация выйгрыша*/
function winning(){
    win_background.style.display='block';
    win_result.classList.add('winning_start');
    setTimeout(winning_end, 2000);
}
function winning_end(){
    win_background.style.display='none';
    win_result.classList.remove('winning_start');
}

/*Анимация пройгрыша*/
function losing(){
    lose_background.style.display='block';
    lose_result.classList.add('lose_start');
    setTimeout(lose_end, 2000);
}
function lose_end(){
    lose_background.style.display='none';
    lose_result.classList.remove('lose_start');
}

const page1=document.getElementById('window1');
const page2=document.getElementById('window2');
function absolute_1page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    page2.style.display='block';
    page1.style.display='none';
}
function absolute_close(){
    const background=document.querySelector('#back_window');
    page2.style.display='none';
    page1.style.display='none';
    background.style.display='none';
}
function absolute_next(){
    page2.style.display='none';
    page1.style.display='block';
}
function absolute_prev(){
    page2.style.display='block';
    page1.style.display='none';
}

const tran1=document.getElementById('tran_window1');
const tran2=document.getElementById('tran_window2');
const tran3=document.getElementById('tran_window3');
function tran_2page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    tran1.style.display='none';
    tran2.style.display='block';
    tran3.style.display='none';
}
function tran_close(){
    const background=document.querySelector('#back_window');
    background.style.display='none';
    tran1.style.display='none';
    tran2.style.display='none';
    tran3.style.display='none';
}
function tran_1page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    tran1.style.display='block';
    tran2.style.display='none';
    tran3.style.display='none';
}
function tran_3page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    tran1.style.display='none';
    tran2.style.display='none';
    tran3.style.display='block';
}

function tran_2pageR(n){
    var police=document.querySelector('.police');
    console.log(police);
    if(n==1){
        setTimeout(losing, 2000);
        police.classList.add('tran_tran1');
        setTimeout(tran_again1, 3000);
    }else if(n==2){
        police.classList.add('tran_tran2');
        setTimeout(losing, 1000);
        setTimeout(tran_again1, 3000);
    }else if(n==3){
        police.classList.add('tran_tran3');
        setTimeout(losing, 2000);
        setTimeout(tran_again1, 3000);
    }else if(n==4){
        setTimeout(winning, 2000);
        police.classList.add('tran_tran4');
    }
}
function tran_again1(){
    var police=document.querySelector('.police')
    police.classList.remove('tran_tran1');
    police.classList.remove('tran_tran2');
    police.classList.remove('tran_tran3');
}

function tran_answer2(){
    num=document.getElementById('tran_num');
    arrow=document.getElementById('arrow');
    a='rotate('+num.value+'deg)';
    arrow.style.transform=a;
    x=num.value;
    if(x**2>18225 && x**2<50625){
        setTimeout(winning, 1000);
    }else{
        setTimeout(losing, 1000);
    }
}

/*FLEXBOX*/
const flexbox1=document.querySelector('#flexbox1');
const flexbox2=document.querySelector('#flexbox2');
const flexbox3=document.querySelector('#flexbox3');
const flexbox4=document.querySelector('#flexbox4');

function flexbox_close(){
    const background=document.querySelector('#back_window');
    background.style.display='none';
    flexbox1.style.display='none';
    flexbox2.style.display='none';
    flexbox3.style.display='none';
    flexbox4.style.display='none';
}
function flexbox_1page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    flexbox1.style.display='block';
    flexbox2.style.display='none';
    flexbox3.style.display='none';
    flexbox4.style.display='none';
}
function flexbox_2page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    flexbox1.style.display='none';
    flexbox2.style.display='block';
    flexbox3.style.display='none';
    flexbox4.style.display='none';
}
function flexbox_3page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    flexbox1.style.display='none';
    flexbox2.style.display='none';
    flexbox3.style.display='block';
    flexbox4.style.display='none';
}
function flexbox_4page(){
    const background=document.querySelector('#back_window');
    background.style.display='block';
    flexbox1.style.display='none';
    flexbox2.style.display='none';
    flexbox3.style.display='none';
    flexbox4.style.display='block';
}

function flex_1answer(){
    field=document.getElementById('field1');
    var1=document.getElementById('1.1var');
    var2=document.getElementById('1.2var');
    var3=document.getElementById('1.3var');
    var4=document.getElementById('1.4var');
    var5=document.getElementById('1.5var');
    if(var1.checked){
        field.style.flexDirection='row-reverse';
    }
    if(var2.checked){
        field.style.flexDirection='column';
    }
    if(var3.checked){
        field.style.flexDirection='column-reverse';
    }
    if(var4.checked){
        field.style.alignItems='center';
    }
    if(var5.checked){
        field.style.alignItems='flex-end';
    }
    if(var3.checked && var4.checked){
        setTimeout(winning, 1000);
    }else{
        setTimeout(losing, 1000);
    }
}

function flex_2answer(){
    field=document.getElementById('field2');
    var1=document.getElementById('2.1var');
    var2=document.getElementById('2.2var');
    var3=document.getElementById('2.3var');
    var4=document.getElementById('2.4var');
    var5=document.getElementById('2.5var');
    console.log(var5);
    if(var1.checked){
        field.style.flexDirection='row-reverse';
    }
    if(var2.checked){
        field.style.flexDirection='column';
    }
    if(var3.checked){
        field.style.flexDirection='column-reverse';
    }
    if(var4.checked){
        field.style.alignItems='center';
    }
    if(var5.checked){
        field.style.alignItems='flex-end';
    }
    if(var1.checked && var5.checked){
        setTimeout(winning, 1000);
    }else{
        setTimeout(losing, 1000);
    }
}
function flex_3answer(){
    field=document.getElementById('field3');
    var1=document.getElementById('3.1var');
    var2=document.getElementById('3.2var');
    var3=document.getElementById('3.3var');
    var4=document.getElementById('3.4var');
    var5=document.getElementById('3.5var');
    console.log(var5);
    if(var1.checked){
        field.style.flexDirection='row-reverse';
    }
    if(var2.checked){
        field.style.flexDirection='column';
    }
    if(var3.checked){
        field.style.flexDirection='column-reverse';
    }
    if(var4.checked){
        field.style.alignItems='center';
    }
    if(var5.checked){
        field.style.alignItems='flex-end';
    }
    if(var2.checked && var4.checked){
        setTimeout(winning, 1000);
    }else{
        setTimeout(losing, 1000);
    }
}