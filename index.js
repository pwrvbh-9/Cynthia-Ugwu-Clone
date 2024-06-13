const scroll = new LocomotiveScroll({
  el: document.querySelector("#section"),
  smooth: true,
});

document.querySelector("#menu-btn").addEventListener("click", function () {
  const menu = document.querySelector("#nav-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

function mouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (details) {
    document.querySelector("#mini-circle").style.transform = `translate(${
      details.clientX * xscale
    }px, ${details.clientY * yscale}px)`;
  });
}

function startingAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "10",
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
  })
    .to(".animation-elem", {
      y: "0",
      ease: "expo.inOut",
      duration: 2.8,
      stagger: 0.2,
      delay: -1,
    })
    .to(".animation-elem-one", {
      y: "0",
      ease: "expo.inOut",
      duration: 3.2,
      stagger: 0.1,
      delay: -2,
    })
    .from("#hero-footer", {
      y: -10,
      opacity: 0,
      duration: 2,
      delay: -2,
      ease: "expo.inOut",
    });
}

mouseFollower(1, 1);
startingAnimation();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrotate = 0;

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrotate = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "power1",
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrotate),
    });
  });

  elem.addEventListener("mouseover", function () {
    gsap.to(elem.querySelector("h1"), {
      x: 50,
      duration: 0.8,
      ease: "power1",
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: "power2",
    });

    gsap.to(elem.querySelector("h1"), {
      x: 0,
      duration: 0.8,
      ease: "power1",
    });
  });
});

function loadAnime() {
  var load = document.querySelector("#loader");

  setTimeout(function () {
    load.style.top = "-100%";
  }, 1400);
}

loadAnime();

function formatTime(date) {
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString(undefined, options);
}

function displayTime() {
  const timeHeading = document.getElementById("time-heading");
  const currentTime = new Date();
  timeHeading.textContent = formatTime(currentTime);
}

document.addEventListener("DOMContentLoaded", function () {
  displayTime();
  setInterval(displayTime, 1000);
});
