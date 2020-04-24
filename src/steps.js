// let everyTwo

export default [
  {
    id: '0',
    title: 'Traffic is a flat circle...',
    texts: [`Welcome to our traffic model! Today we're going to use a simulation to discuss how traffic works. We'll do this by going over how traffic scientists make models to explore various driving behaviors in a system, and how these behaviors effect the system as a whole.`, `To start, we'll simulate a car. You can see this car move around the circular track by hitting the ***Play*** button below. See how it moves around the screen!`, `You'll notice you have a toggle on this screen labeled ***Show Grid***. This exists to explain how we're simulating our road. Hit the toggle, and you can see that we have 50 distinct "spaces" that the car can occupy. Each space holds one car, and each car must exist in only one space. Perhaps this isn't fully realistic, but for now, it allows us to model and reflect on the car's behavior.`, `If it helps seal the deal, professional traffic scientists use this model too! They call it the "Cellular Automaton Model" or the [Nagel–Schreckenberg Model](https://en.wikipedia.org/wiki/Nagel%E2%80%93Schreckenberg_model) (after the German physicists who developed it in the 90s).`, `If your screen is too small to see all of the controls, you can scroll down! When you're ready to explore more, press your keyboard's down key or ***click the down arrow*** to move forward.`],
    initialCarIndices: [0],
    components: ['TimeControl', 'UIControl'],
    timeOptions: {
      showSlider: false,
    },
    uiOptions: {
      showStepByStep: false,
      defaultStepByStep: false
    },
    interactiveOptions: {}
  },
  {
    id: '1',
    title: 'Step by Step',
    texts: [`Before, we treated the car like a movie: playing, pausing, and resetting to control what we saw. Here's another way to think about moving through time. Since we want to inspect cause and effect relationships, it may benefit us to see how the car moves at each individual step of time. We've added a new control here.`, `***Increment Time*** allows us to move one "step" forward in time. Since we're not modeling a real world car (yet!), we don't really have seconds or hours to measure time in the simulation. We can use steps to think about how the car changes its behavior and where it might be on the road as time progresses.`, `If you want to go back to using the ***Play*** control, you'll notice there is a new toggle, ***Step by Step***, which you can turn on and off to control time in different ways.`],
    initialCarIndices: [0],
    components: ['TimeControl', 'UIControl'],
    timeOptions: {
      showSlider: false,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: true
    },
    interactiveOptions: {}
  },
  {
    id: '2',
    title: "Slide on 'em",
    texts: [`Now we can introduce our most powerful tool to reason about time, the ***slider***. Just as we might find it useful to step through time incrementally, we also want to skip around, to see how things work in the short, middle, and long term, and also to go backwards. The slider gives us the chance to do that. Go ahead, try moving the slider back and forth.`, `You still have access to the other tools! Think about how you might use all of these together to build a stronger understanding of how the car behaves.`, `Something to consider about time is that we're not fortune tellers, here. We can't *actually* move back and forth and skip around in time as human beings. So, to make this work, we ask the simulation to remember a finite number of steps forward in time, starting at 1, and we map all of these in our simulation so we can move back and forth between them. *Kiiinda* like traveling through time!`, `Since it may ask a lot of the simulation to make all these maps of the road over time, we've limited the number of steps you can see in the future to 100.`],
    initialCarIndices: [0],
    components: ['TimeControl', 'UIControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: true
    },
    interactiveOptions: {}
  },
  {
    id: '3',
    title: 'Enter...driver!',
    texts: [`So far, we've been focusing on the one car, but that will change soon!`, `First, though, let's simulate the behavior of a driver behind the wheel of our car. We'll use the concept of ***velocity*** to discuss this. Maybe you're more used to the term ***speed***, but for our purposes, they are the same.`, `Normally, we might represent velocity in terms of *miles per hour* or *kilometers per hour*. Here, though, there are neither miles/meters nor are there hours. So, let's say that our driver drives at a speed of 1 *cell per step*, or 1 c/s.`, `How might the driver respond to being alone on this freeway? If you drive, you might have a good idea 😉. No use going one step at a time when you're the only one on the road, right? We'll introduce the first of our car's special features, a velocity that changes over time, or ***accelerates***.`, `Let's say that the driver sees that the road is clear, so they pump the gas. Every step, the car's velocity increases by 1, which means that it travels 1 more cell than it did in the previous step.`, `For example, if at first the car moves at 1 c/s—it does!—it will travel at 2 c/s the following step.`, `Realistically, drivers don't accelerate forever! Our driver is safe, and knows their limits. So, we'll define our car's ***maximum velocity***—the speed at which the driver no longer accelerates.`, `We've made this a control as well, so feel free to play with it and see how quickly the car gets to its maximum velocity. If you want to see this play out a few times, you can reset the timeline to see how the car accelerates with different maximum velocities. Even when this value seems realistic, it can get crazy, right? Well, that's why...`],
    initialCarIndices: [0],
    components: ['TimeControl', 'UIControl', 'CarControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: false

    },
    carOptions: {
      defaultMaxVelocity: 5,
    },
    interactiveOptions: {
      variableVelocity: true
    }
  },
  {
    id: '4',
    title: "Playing nicely with others",
    texts: [`Before doing anything else, go ahead and hit play. You'll get to see what it looks like when there are multiple cars on the road, and when they have a healthy spacing to be able to move freely and reach their maximum velocity. You can see that we've set the maximum velocity to 3 this time.`, `If your goal is for the cars to stay out of one another's way, think about what maximum velocity works for the number of cars you currently have on the road. How might this be different if you ***added or removed cars***?`, `We've given you the control to do just that, so play around with it and look for various effects. Notice, especially, how cars will not overtake or crash into other cars in front them. Our drivers are reasonable, safe people, after all.`, `Traffic scientists model the relationship between the number of spaces on the road and the number of cars as ***density***. In this context, we'll think think of density in terms of cars-per-50-cells, which means that our density here is simply the number of cars on the road!`, `When there are so many cars that we have bumper to bumper traffic, or cars can't reach a velocity greater than 1, we call it ***jam density***.`, `What do you think the jam density of this circular road is? It might help you to return to ***Step by Step*** mode to get a clearer picture of this.`],
    initialCarIndices: new Array(5),
    components: ['TimeControl', 'UIControl', 'CarControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: false
    },
    carOptions: {
      defaultMaxVelocity: 3,
      showCarNumber: true
    },
    interactiveOptions: {
      variableVelocity: true
    }
  },
  {
    id: '5',
    title: 'Going steady',
    texts: [`We're going to add one more control here, and that's around giving each car the chance to slow down. Maybe our drivers see that there's a higher density on the road and want to drive defensively!`, `In Nagel and Schreckenberg's original model, they gave each car a 50% chance of reducing its velocity by 1 on every time step. Let's recap in detail how our cars decide their velocity.`, `Each step of time, a car:`,`1. Increases its velocity by 1.`,`2. Caps its potential movement keeping in mind the next nearest car in front of it. For example, if the car's velocity is 3 and there is another car 2 cells away, the car will set its velocity to 2.`, `3. Slows down at a ***probability _p_***. That means that for _p_, in our example 0.5 (or 50% of the time), the car will reduce its velocity by 1.`, `4. Moves forward by its final velocity.`, `You get the chance to control this _p_! Play around and see how different percentages affect the cars's behaviors. What does it look like when the cars all have a 100% chance of slowing down (_p_=1)? It's not exactly realistic, but it's cool to have the control and see how it affects the simulation. Can you get the cars to come to a complete standstill using the controls you have?`, `_Note: If you remember the mention of the [Nagel–Schreckenberg Model](https://en.wikipedia.org/wiki/Nagel%E2%80%93Schreckenberg_model) from earlier, you might find it cool that the steps laid out here are exactly the same used in that initial experiment! It's considered a foundational work of Traffic Modelling, so feel good about what you've learned so far!_`],
    initialCarIndices: new Array(10),
    components: ['TimeControl', 'UIControl', 'CarControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: false
    },
    carOptions: {
      defaultMaxVelocity: 5,
      showCarNumber: true,
      slowdownProbability: 0.5
    },
    interactiveOptions: {
      variableVelocity: true,
      slowdown: true
    }
  },
  {
    id: '6',
    title: 'A Jam is Born',
    texts: [`Ask yourself, why did the cars stop moving? If you reduce either the density or the probability of slowing down, you can probably get the traffic jam to clear up. Researchers have been able to graph the relationship between density, slowdown probability _p_, and the expected velocity of different cars to predict how to prevent a complete standstill from happening.`, `See if you notice how once a traffic jam begins, it doesn't just go away immediately. Instead, it seems to travel around the road, with cars bunching up as they encounter the jam. This is called the ***shockwave theory***, and some models call the travelling traffic jam a ***jamiton***.`, `If you hit play with 15 cars and a 0.5 slowdown probability, you're very likely to see it! If not, play around with the controls and see if you can make it happen. These drivers do behave unpredictably, after all.`],
    initialCarIndices: new Array(15),
    components: ['TimeControl', 'UIControl', 'CarControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: false
    },
    carOptions: {
      defaultMaxVelocity: 5,
      showCarNumber: true,
      slowdownProbability: 0.5
    },
    interactiveOptions: {
      variableVelocity: true,
      slowdown: true,
      showJamCars: false,
      startFast: false
    }
  },
  {
    id: '7',
    title: 'Congrats!',
    texts: [`Well done! You've learned about Cellular Automaton Modelling to model traffic, and even caused your own traffic jams! There's a lot more to learn, but you deserve a pat on the back. Here are the final controls on the simulation if you'd like to play around. Thank you for playing!`],
    initialCarIndices: new Array(15),
    components: ['TimeControl', 'UIControl', 'CarControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: false
    },
    carOptions: {
      defaultMaxVelocity: 5,
      showCarNumber: true,
      slowdownProbability: 0.5
    },
    interactiveOptions: {
      variableVelocity: true,
      slowdown: true,
      showJamCars: false,
      startFast: false
    }
  }
]
