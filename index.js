const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


window.addEventListener("scroll", () => {
    document.querySelector('#nav').classList.add('window-scroll', window.scrollY > 0)
})

function mouseFollower() {
    window.addEventListener('mousemove', function(details) {
        // console.log(details);
        document.querySelector('#mini-circle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
    })
}

function startingAnimation() {
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to('.animation-elem', {
            y: '0',
            ease: Expo.easeInOut,
            duration: 1.8,
            stageer: 0.2,
            delay: -1,
        })
            .to('.animation-elem-one', {
                y: '0',
                ease: Expo.easeInOut,
                duration: 2.2,
                stageer: 0.1,
                delay: -1.2,
            })
            .from("#hero-footer", {
                y: -10,
                opacity: 0,
                duration: 1.5,
                delay: -1,
                ease: Expo.easeInOut,
              });
}

mouseFollower()
startingAnimation()


document.querySelectorAll('.elem').forEach(function(elem) {
    var rotate = 0;
    var diffrotate = 0;
    elem.addEventListener('mousemove', function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: Power2,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrotate)
        })
    })

    elem.addEventListener('mouseleave', function(dets) {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            ease: Power2,
        })
    })
})