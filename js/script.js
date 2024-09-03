let typed = new Typed('#element', {
    strings: ['Web Developer','Data Science Enthusiasm','Navodayan','Iiitian'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    loop:true,
  });
  setInterval(function () {
    let today = new Date();
    let day = today.getDay();
    currentday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    mahina=["January","Febuary","March","April","May","June","July","August","September","Octoober","November","December"]
    let dates = today.getDate();
    let months = today.getMonth();
    years = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let pam = hour > 12 ? "Pm" : "Am";

    let aajday =  currentday[day];
    let aajdate = dates +' '+ mahina[months];
    hour = hour > 12 ? hour - 12 : hour;
    let aajtime =
      hour +
      " :" +
      minute +
      " :" +
      seconds +
      " " +
      pam;


    document.getElementById("day").innerHTML = aajday;
    document.getElementById("dates").innerHTML = aajdate;
    document.getElementById("time").innerHTML = aajtime;
  }, 1000);


  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function hiddens() {
    var x = document.getElementById("hidden");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
