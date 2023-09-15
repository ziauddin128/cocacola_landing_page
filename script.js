gsap.from(".nav h4",{
    x:-300,
    opacity:0,
    duration: 1
})
gsap.from(".nav_part2 a",{
    y:-20,
    opacity:0,
    duration: 1
})

gsap.from(".red_line",{
    opacity:0,
    duration: 1,
})
gsap.from(".nav_right_icon",{
    x:300,
    opacity:0,
    duration: 1
})

var tl = gsap.timeline({
    ease:Power3
});

tl
.from(".center_left_in h1",{
    y:100,
    duration:1.5,
    opacity:0
},"anim")

.from(".center_left_in p",{
    y:100,
    duration:1.5,
    opacity:0
},"anim")

.from("#center_left_first_btn",{
    x: -100,
    duration:2,
    opacity:0
},"anim")

.from("#center_left_second_btn",{
    x:100,
    duration:1.5,
    opacity:0
},"anim")

.from(".center_mid_in img",{
    scale:1.4,
    duration:1.5,
},"anim")

.from(".center_right_in h4",{
    x: 600,
    duration: 0.6,
    stagger: 0.6
},"anim")





