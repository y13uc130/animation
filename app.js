gsap.registerPlugin(MotionPathPlugin);

const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    path: '#water',
    align: '#water',
    alignOrigin: [0.5, 0.9],
}


const tl = gsap.timeline();
tl.to('.paper-plane', {
    duration: 13, motionPath: flightPath, ease: Power1.inOut, 
}).to('.police-boat', {
    duration: 24, motionPath: flightPath, ease: Power1.inOut, 
}, '<')
.to('.staticTitle',{
    opacity: 0,
    y: -window.innerHeight,
    duration: 1
}, '-=20')
.fromTo('.title', {
    opacity: 0, 
    y: window.innerHeight,
}, {
    opacity: 1,
    y: 0,
    duration: 2
}, '<')
.to('.title', {
    opacity: 0,
    y: -window.innerHeight,
    duration: 2
}, '-=13')
.fromTo('.desc', {
    opacity: 0, 
    y: window.innerHeight,
}, {
    opacity: 1,
    y: 0,
    duration: 3
}, '<')
// .to('.animation', {
//     y: -window.innerHeight, duration: 3
// }, '-=2')

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    triggerHook: 0,
    duration: 5000,
})
.setTween(tl)
.setPin('.animation')
.addTo(controller);