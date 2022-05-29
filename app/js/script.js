const yes = document.getElementById("yes");
const no = document.getElementById("no");
const htmlb = document.getElementById("htmlb");
const pollo = document.querySelector(".pollo");
const soon = document.querySelector(".soon");
const trap1 = document.querySelector(".trapezoid1");
const trap2 = document.querySelector(".trapezoid2");
const hyper = document.querySelector(".s1");
const tera = document.querySelector(".s2");
const master = document.querySelector(".s3");
const laser = document.querySelector(".s4");
const circle = document.querySelector(".circle");

yes.addEventListener("click", function() {
  if(trap1.classList.contains("fade-in")) {
    circle.classList.remove("grow");
    trap1.classList.remove("fade-in");
    trap2.classList.remove("fade-in");
    hyper.classList.remove("fade-in");
    tera.classList.remove("fade-in");
    master.classList.remove("fade-in");
    laser.classList.remove("fade-in");
    trap1.classList.add("fade-out");
    trap2.classList.add("fade-out");
    hyper.classList.add("fade-out");
    tera.classList.add("fade-out");
    master.classList.add("fade-out");
    laser.classList.add("fade-out");
  }

  pollo.classList.remove("fade-out");
  pollo.classList.add("fade-in");

  if(soon.classList.contains("fade-in")) {
    soon.classList.remove("fade-in");
    soon.classList.add("fade-out");
  }
});

no.addEventListener("click", function() {
  if(trap1.classList.contains("fade-in")) {
    circle.classList.remove("grow");
    trap1.classList.remove("fade-in");
    trap2.classList.remove("fade-in");
    hyper.classList.remove("fade-in");
    tera.classList.remove("fade-in");
    master.classList.remove("fade-in");
    laser.classList.remove("fade-in");
    trap1.classList.add("fade-out");
    trap2.classList.add("fade-out");
    hyper.classList.add("fade-out");
    tera.classList.add("fade-out");
    master.classList.add("fade-out");
    laser.classList.add("fade-out");
  }

  soon.classList.remove("fade-out");
  soon.classList.add("fade-in");

  if(pollo.classList.contains("fade-in")) {
    pollo.classList.remove("fade-in");
    pollo.classList.add("fade-out");
  }
});



htmlb.addEventListener("click", function() {

  if(hyper.classList.contains("fade-in")) {
    if(trap1.classList.contains("fade-in")) {
      circle.classList.remove("grow");
      trap1.classList.remove("fade-in");
      trap2.classList.remove("fade-in");
      hyper.classList.remove("fade-in");
      tera.classList.remove("fade-in");
      master.classList.remove("fade-in");
      laser.classList.remove("fade-in");
      trap1.classList.add("fade-out");
      trap2.classList.add("fade-out");
      hyper.classList.add("fade-out");
      tera.classList.add("fade-out");
      master.classList.add("fade-out");
      laser.classList.add("fade-out");
    }
  }
  else {
    if(pollo.classList.contains("fade-in")) {
      pollo.classList.remove("fade-in");
      pollo.classList.add("fade-out");
    }

    if(soon.classList.contains("fade-in")) {
      soon.classList.remove("fade-in");
      soon.classList.add("fade-out");
    }

    setTimeout (function() {
      circle.classList.add("grow");
    }, 0);

    setTimeout (function() {
      hyper.classList.remove("fade-out");
      hyper.classList.add("fade-in");
    }, 300);
    
    setTimeout (function() {
      tera.classList.remove("fade-out");
      tera.classList.add("fade-in");
    }, 600);

    setTimeout (function() {
      master.classList.remove("fade-out");
      master.classList.add("fade-in");
    }, 900);

    setTimeout (function() {
      laser.classList.remove("fade-out");
      laser.classList.add("fade-in");
    }, 1200);

    setTimeout (function() {
      let i=0;
      var laser = setInterval(function() {
        i++;    // i=1
        if(i>6) {   // after 7 laser strikes
          clearInterval(laser);
        }
        trap1.classList.remove("fade-out");
        trap2.classList.remove("fade-out");
        trap1.classList.add("fade-in");
        trap2.classList.add("fade-in");
        setTimeout(function() {
          trap1.classList.remove("fade-in");
          trap2.classList.remove("fade-in");
          trap1.classList.add("fade-out");
          trap2.classList.add("fade-out");
        }, 50);
      }, 100);

      setTimeout(function() {
        trap1.classList.remove("fade-out");
        trap2.classList.remove("fade-out");
        trap1.classList.add("fade-in");
        trap2.classList.add("fade-in");
      }, 800)
    }, 1500);
  }
});





  