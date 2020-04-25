/*------------------------------------------------------*/
var boxno = 0;

function allotnum(boxno, r) {

  var ids = "";
  ids = ids + boxno;
  var str = "";
  str = str + r;
  document.getElementById(ids).innerHTML = str;
  /*alert(ids);*/
}


function setnumber() {

  /*alert("entered");*/



  /*  var boxno = 0;


    function allotnum(boxno, r) {

      var ids = "";
      ids = ids + boxno;
      var str = "";
      str = str + r;
      document.getElementById(ids).innerHTML = str;
      alert(ids);


    }
    */
  var j = 1;
  var l = 25;
  var i = 0;

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  while (j <= 25) {
    /*  alert(j);*/
    i = 0;
    i = Math.floor(Math.random() * (l - 1) + 0);
    allotnum(j, arr[i]);
    arr[i] = arr[l - 1];
    arr[l - 1] = 0;
    arr.pop();

    j++;
    l--;
  }


}
var status = 0;
var check = 1;

function myfunction(classnm) {
  /* alert("clicked")*/



  function execute() {

    var cls = "";
    cls = classnm;
    cls = cls.replace("_", "");
    cls = cls.replace("box", "");
    var n = parseInt(cls, 10);

    /*  alert(n);*/
    var s = document.getElementsByClassName("box");
    var q = parseInt(s[n - 1].innerText);
    if (q <= 25) {
      document.getElementById(n).innerText = q + 25;
      /*  alert("changed");*/
    }
    if (q == 1) {
      status = 1;
      startStop();
    }
    if (q == 50) {
      status = 0;
      startStop();
    }
    if (q > 25) {
      s[n - 1].classList.add("invisible");
    }

  }




  var cls1 = "";
  cls1 = classnm;
  cls1 = cls1.replace("_", "");
  cls1 = cls1.replace("box", "");
  var n1 = parseInt(cls1, 10);
  /*    alert(n1);*/
  if (parseInt(document.getElementById(n1).innerHTML) == check) {
    execute();
    /*  alert(n1);*/
    check++;
  }

}
/*------------------------------------------------------------------*/
setnumber();
let centiseconds = 0;
let seconds = 0;
let minutes = 0;


let displayCentiseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;



let interval = null;





function stopWatch() {

  centiseconds++;


  if (centiseconds / 100 === 1) {
    centiseconds = 0;
    seconds++;
  }
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }





  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (centiseconds < 10) {
    displayCentiseconds = "0" + centiseconds.toString();
  } else
   {
    displayCentiseconds = centiseconds.toString();
  }


  document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds + "." + displayCentiseconds;

}



function startStop() {

  if (status == 1) {


    interval = window.setInterval(stopWatch, 10);


  } else {

    window.clearInterval(interval);


  }

}
