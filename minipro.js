function ChangeTab1(){
  var tab = document.getElementsByClassName('tab');
  tab[0].style.display = "block";
  tab[1].style.display = "none";
  tab[2].style.display = "none";
}

function ChangeTab2(){
  var tab = document.getElementsByClassName('tab');
  tab[0].style.display = "none";
  tab[1].style.display = "block";
  tab[2].style.display = "none";
}

function ChangeTab3(){
  var tab = document.getElementsByClassName('tab');
  tab[0].style.display = "none";
  tab[1].style.display = "none";
  tab[2].style.display = "block";
}




//var menu;
var setcount = 1;
var training = 30;
var rest = 10;
var interval = 60;
var menulist = ["menu1"];
var menucount;
var idname;
var buttonid;
var deleteid;
//var delete_id_value;


//var addmenutext = document.getElementById('addmenu')
//addmenutext.style.visibility = "hidden";


function Editmenu(){
  var edit_value = document.getElementById('editmenu');
  var addtext = document.getElementById('addmenu');
  var addbutton = document.getElementById('add');

  if(edit_value.value == "編集"){
    edit_value.value = "保存";
    addtext.style.visibility = "visible";
    addbutton.style.visibility = "visible";
  }else{
    edit_value.value = "編集";
    addtext.style.visibility = "hidden";
    addbutton.style.visibility = "hidden";
  }

  for(var n = 1; n <= menulist.length; n++){
    var buttonid_value = "button" + n;
    var deleteid_value = "delete" + n;

    var button_visibility = document.getElementById(buttonid_value);
    if(button_visibility.style.visibility == "visible"){
      button_visibility.style.visibility = "hidden";
    }else{
      button_visibility.style.visibility = "visible";
    }

    var delete_visibility = document.getElementById(deleteid_value);
    if(delete_visibility.style.visibility == "visible"){
      delete_visibility.style.visibility = "hidden";
    }else{
      delete_visibility.style.visibility = "visible";
    }

  }

}

function Edittime(){
  var edit_value = document.getElementById('edittime');
  var set = document.getElementById('setcountchange');
  var interval = document.getElementById('intervalchange');
  var time = document.getElementById('settimechange');
  var rest = document.getElementById('resttimechange');

  if(edit_value.value == "編集"){
    edit_value.value = "保存";
    set.style.visibility = "visible";
    interval.style.visibility = "visible";
    time.style.visibility = "visible";
    rest.style.visibility = "visible";
  }else{
    edit_value.value = "編集";
    set.style.visibility = "hidden";
    interval.style.visibility = "hidden";
    time.style.visibility = "hidden";
    rest.style.visibility = "hidden";
  }
}






//タイトルの変更
function change(){
  var set1 = prompt('変更するメニュー名を入力してください');
  document.getElementById('set1').innerHTML = set1;
  document.getElementById('settab1').innerHTML = set1;
}


//メニューリストの追加
function add(){
  //menucount = menucount + 1;

   var menu = document.getElementById('addmenu').value;

  var p = document.getElementById('menu').innerHTML;
  p = p + "<li id='menunum'>" + menu + "<input type='button' value='変更' id='buttonnum' onclick='ChangeMenu(this);'><input type='button' value='削除'  id='deletenum' onclick='DeleteMenu(this);'></li>";
  document.getElementById('menu').innerHTML = p;

  menulist.push(menu);
  //alert(menulist);

  idname = document.getElementById('menunum');
  idname.id = "menu" + menulist.length;

  buttonid = document.getElementById('buttonnum');
  buttonid.id = "button" + menulist.length;

  deleteid = document.getElementById('deletenum');
  deleteid.id = "delete" + menulist.length;

  var button_visible = document.getElementById(buttonid.id);
  button_visible.style.visibility = "visible";

  var delete_visible = document.getElementById(deleteid.id);
  delete_visible.style.visibility = "visible";
  //alert(idname.id);


  menucount = menulist.length;
  document.getElementById('menustate').innerHTML = menulist.length;

}

//メニューリストの変更
function ChangeMenu(ele){
  var id_value = ele.id;
  //alert(id_value);
  var int_id_value = id_value.replace(/[^0-9]/g, '');
  //alert(int_id_value);
  var textid = "menu" + int_id_value;
  //alert(textid);
  var newmenu = prompt('新しいメニューを入力してください');
  document.getElementById(textid).innerHTML = newmenu + "<input type='button' value='変更' id='buttonnum' onclick='ChangeMenu(this);'><input type='button' value='削除'  id='deletenum' onclick='DeleteMenu(this);'></li>";
  menulist[int_id_value - 1] = newmenu;

  var newbuttonid = document.getElementById('buttonnum');
  newbuttonid.id = id_value;

  var newdeleteid = document.getElementById('deletenum');
  newdeleteid.id = "delete" + int_id_value;

  var button_visible = document.getElementById(newbuttonid.id);
  button_visible.style.visibility = "visible";

  var delete_visible = document.getElementById(newdeleteid.id);
  delete_visible.style.visibility = "visible";
  //alert(newdeleteid.id);
}

//メニューの削除
function DeleteMenu(him){
  var d_id_value = him.id;
  //alert(d_id_value);
  var d_int_id_value = d_id_value.replace(/[^0-9]/g, '');
  //alert(d_int_id_value);
  menulist.splice(d_int_id_value - 1, 1);
  //alert(menulist.length);

  menucount = menulist.length;
  document.getElementById('menustate').innerHTML = menucount;

  for(var n = 0; n <= menulist.length; n++){
    var nplus = n + 1;
    var delete_id_value = "menu" + nplus;
    if(n < menulist.length){
      //var nplus = n + 1;
      //delete_id_value = "menu" + nplus;
      document.getElementById(delete_id_value).innerHTML = menulist[n] + "<input type='button' value='変更' id='buttonnum' onclick='ChangeMenu(this);'><input type='button' value='削除'  id='deletenum' onclick='DeleteMenu(this);'></li>";

      var createbuttonid = document.getElementById('buttonnum');
      createbuttonid.id = "button" + nplus;

      var createdeleteid = document.getElementById('deletenum');
      createdeleteid.id = "delete" + nplus;

      var button_visible = document.getElementById(createbuttonid.id);
      button_visible.style.visibility = "visible";

      var delete_visible = document.getElementById(createdeleteid.id);
      delete_visible.style.visibility = "visible";

    }
    else if(n = menulist.length){
      document.getElementById(delete_id_value).remove();
    }
    //alert(delete_id_value);
  }

  //document.getElementById(menulist.length).innerHTML = "";

}

//セット数の変更
function ChangeSetCount(){
  setcount = prompt('セット数を入力してください');
  document.getElementById('setcount').innerHTML = setcount;
}

//インターバルの変更
function ChangeInterval(){
  interval = prompt('インターバルの秒数を入力してください');
  document.getElementById('interval').innerHTML = interval;
}

//トレーニングの秒数の変更
function ChangeSetTime(){
  training = prompt('多レーニングの秒数を入力してください');
  document.getElementById('training').innerHTML = training;
  document.getElementById('timervalue').innerHTML = training;
}

//レストの秒数の変更
function ChangeRestTime(){
  rest = prompt('レストの秒数を入力してください');
  document.getElementById('rest').innerHTML = rest;
}



var timer = null;
var countdowntimer = null;
var counter = 0;
var setcounter = 0;

//トレーニングの秒数のカウント
function countstart() {
  //training_value = training;
  //alert('start');

  menucount = menucount - 1;
  document.getElementById('menustate').innerHTML = menucount + 1;
  document.getElementById('timervalue').innerHTML = training;
  document.getElementById('setstate').innerHTML = setcounter + 1;
  countdown = training - 1;
  document.getElementById('state').innerHTML = "Let's Go!!";
  document.getElementById('menuvalue').innerHTML = "Menu : " + menulist[counter];
        timer = setTimeout(countrest, training*1000);
        countdowntimer = setInterval(count_down, 1000);
}

//レストの時間のカウント
function countrest(){
  //alert('stop')
  //document.getElementById('state').innerHTML = "Rest!!";
  counter = counter + 1;
  if (counter < menulist.length){
    document.getElementById('timervalue').innerHTML = rest;
    countdown = rest - 1;
    document.getElementById('state').innerHTML = "Rest!!";
    timer = setTimeout(countstart, rest*1000);
    countdowntimer = setInterval(count_down, 1000);
    document.getElementById('menuvalue').innerHTML = "Next Menu : " + menulist[counter];
  }

  else if(menulist.length <= counter){
    //alert('rest');
    document.getElementById('state').innerHTML = "Interval!!";
    timer = setTimeout(countInterval);
  }
}

//インターバルのカウント
function countInterval(){
  setcounter = setcounter + 1;
  if(setcounter < setcount){
    counter = 0;
    document.getElementById('menuvalue').innerHTML = "Next Menu : " + menulist[counter];
    document.getElementById('timervalue').innerHTML = interval;
    menucount = menulist.length;
    document.getElementById('menustate').innerHTML = menucount;
    countdown = interval - 1;
    timer = setTimeout(countstart, interval*1000);
    countdowntimer = setInterval(count_down, 1000);
  }

  else if(setcount <= setcounter){
    //alert('finish');
    document.getElementById('timervalue').innerHTML = "0";
    document.getElementById('state').innerHTML = "Finish!!";
    timer = setTimeout(countstop);
  }
}

//カウントのストップ
function countstop() {
  counter = 0;
  setcounter = 0;
  document.getElementById('timervalue').innerHTML = training;
  document.getElementById('menuvalue').innerHTML = "Menu : ";

  menucount = menulist.length;
  document.getElementById('menustate').innerHTML = "0";

    if (timer != null)
        clearInterval(timer);
        countdownstop();
    timer = null;
}

//var training_value;
//var rest_value;
//var interval_value;
var countdown;

//カウントダウンの表示
function count_down(){
  document.getElementById('timervalue').innerHTML = countdown;
  countdown--;
  if(countdown <= 0)
        countdownstop();
}

//カウントダウン表示のストップ
function countdownstop(){
  if (countdowntimer != null)
      clearInterval(countdowntimer);
  countdowntimer = null;
}





//////////////////////////
//////////////////////////






//var menu;
var setcount2 = 1;
var training2 = 30;
var rest2 = 10;
var interval2 = 60;
var menulist2 = ["menu1"];
var menucount2;
var idname2;
var buttonid2;
var deleteid2;
//var delete_id_value;


//var addmenutext = document.getElementById('addmenu')
//addmenutext.style.visibility = "hidden";


function Editmenu2(){
  var edit_value = document.getElementById('editmenu2');
  var addtext = document.getElementById('addmenu2');
  var addbutton = document.getElementById('add2');

  if(edit_value.value == "編集"){
    edit_value.value = "保存";
    addtext.style.visibility = "visible";
    addbutton.style.visibility = "visible";
  }else{
    edit_value.value = "編集";
    addtext.style.visibility = "hidden";
    addbutton.style.visibility = "hidden";
  }

  for(var n = 1; n <= menulist2.length; n++){
    var buttonid_value = "buttontwo" + n;
    var deleteid_value = "deletetwo" + n;

    var button_visibility = document.getElementById(buttonid_value);
    if(button_visibility.style.visibility == "visible"){
      button_visibility.style.visibility = "hidden";
    }else{
      button_visibility.style.visibility = "visible";
    }

    var delete_visibility = document.getElementById(deleteid_value);
    if(delete_visibility.style.visibility == "visible"){
      delete_visibility.style.visibility = "hidden";
    }else{
      delete_visibility.style.visibility = "visible";
    }

  }

}

function Edittime2(){
  var edit_value = document.getElementById('edittime2');
  var set = document.getElementById('setcountchange2');
  var interval = document.getElementById('intervalchange2');
  var time = document.getElementById('settimechange2');
  var rest = document.getElementById('resttimechange2');

  if(edit_value.value == "編集"){
    edit_value.value = "保存";
    set.style.visibility = "visible";
    interval.style.visibility = "visible";
    time.style.visibility = "visible";
    rest.style.visibility = "visible";
  }else{
    edit_value.value = "編集";
    set.style.visibility = "hidden";
    interval.style.visibility = "hidden";
    time.style.visibility = "hidden";
    rest.style.visibility = "hidden";
  }
}






//タイトルの変更
function change2(){
  var set2 = prompt('変更するメニュー名を入力してください');
  document.getElementById('set2').innerHTML = set2;
  document.getElementById('settab2').innerHTML = set2;
}


//メニューリストの追加
function add2(){
  //menucount = menucount + 1;

   var menu = document.getElementById('addmenu2').value;

  var p = document.getElementById('menu2').innerHTML;
  p = p + "<li id='menunum2'>" + menu + "<input type='button' value='変更' id='buttonnum2' onclick='ChangeMenu2(this);'><input type='button' value='削除'  id='deletenum2' onclick='DeleteMenu2(this);'></li>";
  document.getElementById('menu2').innerHTML = p;

  menulist2.push(menu);
  //alert(menulist);

  idname2 = document.getElementById('menunum2');
  idname2.id = "menutwo" + menulist2.length;

  buttonid2 = document.getElementById('buttonnum2');
  buttonid2.id = "buttontwo" + menulist2.length;

  deleteid2 = document.getElementById('deletenum2');
  deleteid2.id = "deletetwo" + menulist2.length;

  var button_visible = document.getElementById(buttonid2.id);
  button_visible.style.visibility = "visible";

  var delete_visible = document.getElementById(deleteid2.id);
  delete_visible.style.visibility = "visible";
  //alert(idname.id);


  menucount2 = menulist2.length;
  document.getElementById('menustate2').innerHTML = menulist2.length;

}

//メニューリストの変更
function ChangeMenu2(ele){
  var id_value = ele.id;
  //alert(id_value);
  var int_id_value = id_value.replace(/[^0-9]/g, '');
  //alert(int_id_value);
  var textid = "menutwo" + int_id_value;
  //alert(textid);
  var newmenu = prompt('新しいメニューを入力してください');
  document.getElementById(textid).innerHTML = newmenu + "<input type='button' value='変更' id='buttonnum2' onclick='ChangeMenu2(this);'><input type='button' value='削除'  id='deletenum2' onclick='DeleteMenu2(this);'></li>";
  menulist2[int_id_value - 1] = newmenu;

  var newbuttonid = document.getElementById('buttonnum2');
  newbuttonid.id = id_value;

  var newdeleteid = document.getElementById('deletenum2');
  newdeleteid.id = "deletetwo" + int_id_value;

  var button_visible = document.getElementById(newbuttonid.id);
  button_visible.style.visibility = "visible";

  var delete_visible = document.getElementById(newdeleteid.id);
  delete_visible.style.visibility = "visible";
  //alert(newdeleteid.id);
}

//メニューの削除
function DeleteMenu2(him){
  var d_id_value = him.id;
  //alert(d_id_value);
  var d_int_id_value = d_id_value.replace(/[^0-9]/g, '');
  //alert(d_int_id_value);
  menulist2.splice(d_int_id_value - 1, 1);
  //alert(menulist.length);

  menucount2 = menulist2.length;
  document.getElementById('menustate2').innerHTML = menucount2;

  for(var n = 0; n <= menulist2.length; n++){
    var nplus = n + 1;
     var delete_id_value = "menutwo" + nplus;
    if(n < menulist2.length){
      //var nplus = n + 1;
      //delete_id_value = "menu" + nplus;
      document.getElementById(delete_id_value).innerHTML = menulist2[n] + "<input type='button' value='変更' id='buttonnum2' onclick='ChangeMenu2(this);'><input type='button' value='削除'  id='deletenum2' onclick='DeleteMenu2(this);'></li>";

      var createbuttonid = document.getElementById('buttonnum2');
      createbuttonid.id = "buttontwo" + nplus;

      var createdeleteid = document.getElementById('deletenum2');
      createdeleteid.id = "deletetwo" + nplus;

      var button_visible = document.getElementById(createbuttonid.id);
      button_visible.style.visibility = "visible";

      var delete_visible = document.getElementById(createdeleteid.id);
      delete_visible.style.visibility = "visible";

    }
    else if(n = menulist2.length){
      document.getElementById(delete_id_value).remove();
    }
    //alert(delete_id_value);
  }

  //document.getElementById(menulist.length).innerHTML = "";

}

//セット数の変更
function ChangeSetCount2(){
  setcount2 = prompt('セット数を入力してください');
  document.getElementById('setcount2').innerHTML = setcount2;
}

//インターバルの変更
function ChangeInterval2(){
  interval2 = prompt('インターバルの秒数を入力してください');
  document.getElementById('interval2').innerHTML = interval2;
}

//トレーニングの秒数の変更
function ChangeSetTime2(){
  training2 = prompt('多レーニングの秒数を入力してください');
  document.getElementById('training2').innerHTML = training2;
  document.getElementById('timervalue2').innerHTML = training2;
}

//レストの秒数の変更
function ChangeRestTime2(){
  rest2 = prompt('レストの秒数を入力してください');
  document.getElementById('rest2').innerHTML = rest2;
}



var timer2 = null;
var countdowntimer2 = null;
var counter2 = 0;
var setcounter2 = 0;

//トレーニングの秒数のカウント
function countstart2() {
  //training_value = training;
  //alert('start');

  menucount2 = menucount2 - 1;
  document.getElementById('menustate2').innerHTML = menucount2 + 1;
  document.getElementById('timervalue2').innerHTML = training2;
  document.getElementById('setstate2').innerHTML = setcounter2 + 1;
  countdown2 = training2 - 1;
  document.getElementById('state2').innerHTML = "Let's Go!!";
  document.getElementById('menuvalue2').innerHTML = "Menu : " + menulist2[counter2];
        timer2 = setTimeout(countrest2, training2*1000);
        countdowntimer2 = setInterval(count_down2, 1000);
}

//レストの時間のカウント
function countrest2(){
  //alert('stop')
  //document.getElementById('state').innerHTML = "Rest!!";
  counter2 = counter2 + 1;
  if (counter2 < menulist2.length){
    document.getElementById('timervalue2').innerHTML = rest2;
    countdown2 = rest2 - 1;
    document.getElementById('state2').innerHTML = "Rest!!";
    timer2 = setTimeout(countstart2, rest2*1000);
    countdowntimer2 = setInterval(count_down2, 1000);
    document.getElementById('menuvalue2').innerHTML = "Next Menu : " + menulist2[counter2];
  }

  else if(menulist2.length <= counter2){
    //alert('rest');
    document.getElementById('state2').innerHTML = "Interval!!";
    timer2 = setTimeout(countInterval2);
  }
}

//インターバルのカウント
function countInterval2(){
  setcounter2 = setcounter2 + 1;
  if(setcounter2 < setcount2){
    counter2 = 0;
    document.getElementById('menuvalue2').innerHTML = "Next Menu : " + menulist2[counter2];
    document.getElementById('timervalue2').innerHTML = interval2;
    menucount2 = menulist2.length;
    document.getElementById('menustate2').innerHTML = menucount2;
    countdown2 = interval2 - 1;
    timer2 = setTimeout(countstart2, interval2*1000);
    countdowntimer2 = setInterval(count_down2, 1000);
  }

  else if(setcount2 <= setcounter2){
    //alert('finish');
    document.getElementById('timervalue2').innerHTML = "0";
    document.getElementById('state2').innerHTML = "Finish!!";
    timer2 = setTimeout(countstop2);
  }
}

//カウントのストップ
function countstop2() {
  counter2 = 0;
  setcounter2 = 0;
  document.getElementById('timervalue2').innerHTML = training2;
  document.getElementById('menuvalue2').innerHTML = "Menu : ";

  menucount2 = menulist2.length;
  document.getElementById('menustate2').innerHTML = "0";

    if (timer2 != null)
        clearInterval(timer2);
        countdownstop2();
    timer2 = null;
}

//var training_value;
//var rest_value;
//var interval_value;
var countdown2;

//カウントダウンの表示
function count_down2(){
  document.getElementById('timervalue2').innerHTML = countdown2;
  countdown2--;
  if(countdown2 <= 0)
        countdownstop2();
}

//カウントダウン表示のストップ
function countdownstop2(){
  if (countdowntimer2 != null)
      clearInterval(countdowntimer2);
  countdowntimer2 = null;
}






///////////////////////////
///////////////////////////






//var menu;
var setcount3 = 1;
var training3 = 30;
var rest3 = 10;
var interval3 = 60;
var menulist3 = ["menu1"];
var menucount3;
var idname3;
var buttonid3;
var deleteid3;
//var delete_id_value;


//var addmenutext = document.getElementById('addmenu')
//addmenutext.style.visibility = "hidden";


function Editmenu3(){
  var edit_value = document.getElementById('editmenu3');
  var addtext = document.getElementById('addmenu3');
  var addbutton = document.getElementById('add3');

  if(edit_value.value == "編集"){
    edit_value.value = "保存";
    addtext.style.visibility = "visible";
    addbutton.style.visibility = "visible";
  }else{
    edit_value.value = "編集";
    addtext.style.visibility = "hidden";
    addbutton.style.visibility = "hidden";
  }

  for(var n = 1; n <= menulist3.length; n++){
    var buttonid_value = "buttonthree" + n;
    var deleteid_value = "deletethree" + n;

    var button_visibility = document.getElementById(buttonid_value);
    if(button_visibility.style.visibility == "visible"){
      button_visibility.style.visibility = "hidden";
    }else{
      button_visibility.style.visibility = "visible";
    }

    var delete_visibility = document.getElementById(deleteid_value);
    if(delete_visibility.style.visibility == "visible"){
      delete_visibility.style.visibility = "hidden";
    }else{
      delete_visibility.style.visibility = "visible";
    }

  }

}

function Edittime3(){
  var edit_value = document.getElementById('edittime3');
  var set = document.getElementById('setcountchange3');
  var interval = document.getElementById('intervalchange3');
  var time = document.getElementById('settimechange3');
  var rest = document.getElementById('resttimechange3');

  if(edit_value.value == "編集"){
    edit_value.value = "保存";
    set.style.visibility = "visible";
    interval.style.visibility = "visible";
    time.style.visibility = "visible";
    rest.style.visibility = "visible";
  }else{
    edit_value.value = "編集";
    set.style.visibility = "hidden";
    interval.style.visibility = "hidden";
    time.style.visibility = "hidden";
    rest.style.visibility = "hidden";
  }
}






//タイトルの変更
function change3(){
  var set3 = prompt('変更するメニュー名を入力してください');
  document.getElementById('set3').innerHTML = set3;
  document.getElementById('settab3').innerHTML = set3;
}


//メニューリストの追加
function add3(){
  //menucount = menucount + 1;

   var menu = document.getElementById('addmenu3').value;

  var p = document.getElementById('menu3').innerHTML;
  p = p + "<li id='menunum3'>" + menu + "<input type='button' value='変更' id='buttonnum3' onclick='ChangeMenu3(this);'><input type='button' value='削除'  id='deletenum3' onclick='DeleteMenu3(this);'></li>";
  document.getElementById('menu3').innerHTML = p;

  menulist3.push(menu);
  //alert(menulist);

  idname3 = document.getElementById('menunum3');
  idname3.id = "menuthree" + menulist3.length;

  buttonid3 = document.getElementById('buttonnum3');
  buttonid3.id = "buttonthree" + menulist3.length;

  deleteid3 = document.getElementById('deletenum3');
  deleteid3.id = "deletethree" + menulist3.length;

  var button_visible = document.getElementById(buttonid3.id);
  button_visible.style.visibility = "visible";

  var delete_visible = document.getElementById(deleteid3.id);
  delete_visible.style.visibility = "visible";
  //alert(idname.id);


  menucount3 = menulist3.length;
  document.getElementById('menustate3').innerHTML = menulist3.length;

}

//メニューリストの変更
function ChangeMenu3(ele){
  var id_value = ele.id;
  //alert(id_value);
  var int_id_value = id_value.replace(/[^0-9]/g, '');
  //alert(int_id_value);
  var textid = "menuthree" + int_id_value;
  //alert(textid);
  var newmenu = prompt('新しいメニューを入力してください');
  document.getElementById(textid).innerHTML = newmenu + "<input type='button' value='変更' id='buttonnum3' onclick='ChangeMenu3(this);'><input type='button' value='削除'  id='deletenum3' onclick='DeleteMenu3(this);'></li>";
  menulist3[int_id_value - 1] = newmenu;

  var newbuttonid = document.getElementById('buttonnum3');
  newbuttonid.id = id_value;

  var newdeleteid = document.getElementById('deletenum3');
  newdeleteid.id = "deletethree" + int_id_value;

  var button_visible = document.getElementById(newbuttonid.id);
  button_visible.style.visibility = "visible";

  var delete_visible = document.getElementById(newdeleteid.id);
  delete_visible.style.visibility = "visible";
  //alert(newdeleteid.id);
}

//メニューの削除
function DeleteMenu3(him){
  var d_id_value = him.id;
  //alert(d_id_value);
  var d_int_id_value = d_id_value.replace(/[^0-9]/g, '');
  //alert(d_int_id_value);
  menulist3.splice(d_int_id_value - 1, 1);
  //alert(menulist.length);

  menucount3 = menulist3.length;
  document.getElementById('menustate3').innerHTML = menucount3;

  for(var n = 0; n <= menulist3.length; n++){
    var nplus = n + 1;
     var delete_id_value = "menuthree" + nplus;
    if(n < menulist3.length){
      //var nplus = n + 1;
      //delete_id_value = "menu" + nplus;
      document.getElementById(delete_id_value).innerHTML = menulist3[n] + "<input type='button' value='変更' id='buttonnum3' onclick='ChangeMenu3(this);'><input type='button' value='削除'  id='deletenum3' onclick='DeleteMenu3(this);'></li>";

      var createbuttonid = document.getElementById('buttonnum3');
      createbuttonid.id = "buttonthree" + nplus;

      var createdeleteid = document.getElementById('deletenum3');
      createdeleteid.id = "deletethree" + nplus;

      var button_visible = document.getElementById(createbuttonid.id);
      button_visible.style.visibility = "visible";

      var delete_visible = document.getElementById(createdeleteid.id);
      delete_visible.style.visibility = "visible";

    }
    else if(n = menulist3.length){
      document.getElementById(delete_id_value).remove();
    }
    //alert(delete_id_value);
  }

  //document.getElementById(menulist.length).innerHTML = "";

}

//セット数の変更
function ChangeSetCount3(){
  setcount2 = prompt('セット数を入力してください');
  document.getElementById('setcount3').innerHTML = setcount3;
}

//インターバルの変更
function ChangeInterval3(){
  interval3 = prompt('インターバルの秒数を入力してください');
  document.getElementById('interval3').innerHTML = interval3;
}

//トレーニングの秒数の変更
function ChangeSetTime3(){
  training3 = prompt('多レーニングの秒数を入力してください');
  document.getElementById('training3').innerHTML = training3;
  document.getElementById('timervalue3').innerHTML = training3;
}

//レストの秒数の変更
function ChangeRestTime3(){
  rest3 = prompt('レストの秒数を入力してください');
  document.getElementById('rest3').innerHTML = rest3;
}



var timer3 = null;
var countdowntimer3 = null;
var counter3 = 0;
var setcounter3 = 0;

//トレーニングの秒数のカウント
function countstart3() {
  //training_value = training;
  //alert('start');

  menucount3 = menucount3 - 1;
  document.getElementById('menustate3').innerHTML = menucount3 + 1;
  document.getElementById('timervalue3').innerHTML = training3;
  document.getElementById('setstate3').innerHTML = setcounter3 + 1;
  countdown3 = training3 - 1;
  document.getElementById('state3').innerHTML = "Let's Go!!";
  document.getElementById('menuvalue3').innerHTML = "Menu : " + menulist3[counter3];
        timer3 = setTimeout(countrest3, training3*1000);
        countdowntimer3 = setInterval(count_down3, 1000);
}

//レストの時間のカウント
function countrest3(){
  //alert('stop')
  //document.getElementById('state').innerHTML = "Rest!!";
  counter3 = counter3 + 1;
  if (counter3 < menulist3.length){
    document.getElementById('timervalue3').innerHTML = rest3;
    countdown3 = rest3 - 1;
    document.getElementById('state3').innerHTML = "Rest!!";
    timer3 = setTimeout(countstart3, rest3*1000);
    countdowntimer3 = setInterval(count_down3, 1000);
    document.getElementById('menuvalue3').innerHTML = "Next Menu : " + menulist3[counter3];
  }

  else if(menulist3.length <= counter3){
    //alert('rest');
    document.getElementById('state3').innerHTML = "Interval!!";
    timer3 = setTimeout(countInterval3);
  }
}

//インターバルのカウント
function countInterval3(){
  setcounter3 = setcounter3 + 1;
  if(setcounter3 < setcount3){
    counter3 = 0;
    document.getElementById('menuvalue3').innerHTML = "Next Menu : " + menulist3[counter3];
    document.getElementById('timervalue3').innerHTML = interval3;
    menucount3 = menulist3.length;
    document.getElementById('menustate3').innerHTML = menucount3;
    countdown3 = interval3 - 1;
    timer3 = setTimeout(countstart3, interval3*1000);
    countdowntimer3 = setInterval(count_down3, 1000);
  }

  else if(setcount3 <= setcounter3){
    //alert('finish');
    document.getElementById('timervalue3').innerHTML = "0";
    document.getElementById('state3').innerHTML = "Finish!!";
    timer3 = setTimeout(countstop3);
  }
}

//カウントのストップ
function countstop3() {
  counter3 = 0;
  setcounter3 = 0;
  document.getElementById('timervalue3').innerHTML = training3;
  document.getElementById('menuvalue3').innerHTML = "Menu : ";

  menucount3 = menulist3.length;
  document.getElementById('menustate3').innerHTML = "0";

    if (timer3 != null)
        clearInterval(timer3);
        countdownstop3();
    timer3 = null;
}

//var training_value;
//var rest_value;
//var interval_value;
var countdown3;

//カウントダウンの表示
function count_down3(){
  document.getElementById('timervalue3').innerHTML = countdown3;
  countdown3--;
  if(countdown3 <= 0)
        countdownstop3();
}

//カウントダウン表示のストップ
function countdownstop3(){
  if (countdowntimer3 != null)
      clearInterval(countdowntimer3);
  countdowntimer3 = null;
}
