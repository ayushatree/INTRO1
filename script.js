var tl = gsap.timeline()

tl.from( "#nav h3",{
    y:-50,
    opacity:0,
    dealy:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from( "#main h1",{
    x: -500,
    opacity:0,
    dealy:2,
    duration:2,
    stagger:0.3
})
tl.from( "img",{
    x: 100,
    opacity:0,
    rotate:40,
    dealy:2,
    duration:2,
    stagger:0.5
})





















// var tl = gsap.timeline()



// tl.to("#box1",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2.5,
//     // dealy:0.2
   
// })
// tl.to("#box2",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     // dealy:1
   
// })
// tl.to("#box3",{
//     x:1200,
//     rotate:360,
//     scale:0.5,
//     duration:1.5,
//     // dealy:1
   
// })