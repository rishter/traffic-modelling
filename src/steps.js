// let everyTwo

export default [
  {
    id: '0',
    title: 'Traffic is a flat circle...',
    text: "Welcome to our traffic simulation! Today we're going to use a simulation to discuss how traffic works. We'll do this by going over how traffic scientists make models to explore how various car behaviors in a system affect the system as a whole. To start, we have a simulation of a car. You can see this car move around the circular track we're simulating by hitting the \"Play\" button below. See how it moves around the screen! When you're ready to explore more, hit the down key or click the button to move forward. You'll notice you have the ability to toggle something called \"Show Grid\". This exists entirely to help you understand the particular way we're simulating a road. Hit the toggle, and you can see that we have 50 distinct \"spaces\" that the car can occupy. In this particular model of the road, each space can hold one car, and each car must be held in one space. This may not be the most realistic way to model our car's behavior, but for now, it allows us to represent the car's behavior on this circular track. Plus, professional traffic scientists use this method too! They call it the \"Cellular Automaton Model\" or the \"Nagel–Schreckenberg Model\" (after the German physicists who developed it in the 90s).",
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
    text: "Here's another way to think about moving through time. Since we're going to be looking at cause and effect, it may benefit us to see how things move at every step of time. So, we're adding another control here, \"Increment Time\", which allows us to move one \"step\" forward in time. Since we're not modeling out in the real world, we don't really have seconds or hours to measure time in the simulation. We can use steps to think about how the cars will change their behavior and where they will be on the road as time changes. If you want to go back to using the \"Play\" control, you'll notice there is a new toggle, \"Step by Step\", which you can turn on and off to control time in different ways.",
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
    text: "We'll introduce one last, powerful tool to think about time, the slider. Just as we'd find it useful to step through time incrementally, we may also want to just skip around, to see how things work in the short, middle, and long term, and to also go backwards. The slider gives us the change to do that. Go ahead, try moving the slider back and forth. You still have access to the other tools! Think about how you might use all of these together to build a stronger understanding of how the car behaves. Something to consider, though, is that we're not fortune tellers, here. We can't actually move back and forth and skip around in time as human beings. So, to make this work, we simulate a finite number of steps forward in time, from the beginning, and we map all of these in our simulation so we can move back and forth between them. Since making these maps of the road over time can be a lot of computational work, we've limited the number of steps you can see forward to 100.",
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
    text: "So far, we've been focusing on just one car, but that will change soon! First, though, let's simulate the behavior of a driver behind the wheel of our car. We'll use the concept of \"velocity\" to discuss this. Maybe you're more comfortable with the terminology \"speed\", but for the purposes of our simulation, they are the same. Normally, we might represent velocity in terms of miles per hour or kilometers per hour. But in this simulation, there are neither miles/meters nor are there hours. So, let's say that our driver drives at a speed of 1 cell per step, or 1 c/s. Now, how might our driver respond to being alone on this freeway? If you drive, you might have a good idea 😉. No use going one step at a time when you're the only one on the road, right? Here, we'll introduce the first of our car's special features, a velocity that changes. Let's say that the driver sees that the road is clear, and they can accelerate. Every step, the increase their velocity by 1, which means that they will travel 1 more cell than they did in the previous step. For example, at the beginning, the car moves at 1 c/s (it does!), it will travel at 2 c/s the following step. Realistically, though drivers don't accelerate forever! Our driver is safe, and knows their limits! So, we'll define our car's maximum velocity—the speed at which the driver no longer accelerates. Since this is also a control, feel free to play with it and see how quickly the car gets to its maximum velocity. If you want to see this play out a few times, you can reset the timeline to refresh the possible ways in which the car's velocity can increase. Even when the maximum acceleration seems realistic, it can get crazy, right? Well, that's why...",
    initialCarIndices: [0],
    components: ['TimeControl', 'UIControl', 'CarControl'],
    timeOptions: {
      showSlider: true,
    },
    uiOptions: {
      showStepByStep: true,
      defaultStepByStep: true

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
    text: "Before doing anything else, go ahead and hit play. Here, we get to see what it looks like when there are multiple cars on the road but they have a healthy spacing to be able to move freely but still reach their maximum velocity. You'll notice we've set the maximum velocity to 3 this time. Think about what maximum velocity works for the number of cars you have on the road. And how might this be different if you added or removed cars? We've given you the control to do just that, so play around with it and see the various effects. Notice, especially, how cars will not overtake or crash into cars in front them. Our drivers are reasonable, safe people, after all. Traffic scientists model the relationship between the number of spaces on the road and the number of cars as \"density\". In this context, we'll think think of density in terms of cars-per-50-cells, which means that our density here is merely the number of cars. When there are so many cars that we bumper to bumper traffic, or cars can't reach a velocity greater than 1, we call it \"jam density\". What do you think the jam density of this circular road is? It might help you to return to Step by Step mode to get a clearer picture of this.face",
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
    text: "We're going to add one more control here, and that's around giving each car the chance to slow down. Maybe our drivers see that there's a higher density on the road and want to drive defensively! In Nagel and Schreckenberg's original model, they gave each car a 50% chance of reducing its velocity by 1 on every time step. Let's recap in detail how our cars decide their velocity. Every step of time, each car: (1) Increases its velocity by 1. (2) Caps its potential movement keeping in mind the next nearest car in front of it. So, for example if the car's velocity is 3 and there is another car 2 cells away, the car will set its velocity to 2. (3) Each car has a _p_ probability of slowing down, and reducing its velocity by 1. You get the chance to control this! We've set it up to start at 0.5, or 50%, but play around and see how different percentages affect the cars. What does it look like when the cars all have a 100% chance of slowing down? Not exactly realistic, but it's cool to have the control. Can you get the cars to come to a complete standstill using the controls you have?",
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
    text: "Why did cars stop moving? If you reduce either the density or the probability of slowing down, you can probably get the traffic jam to clear up. Researchers have been able to graph the relationship between density, this probability, and the expected velocity of different cars, to predict how to prevent a complete standstill from happening. See if you can notice how once a traffic jam begins, it doesn't just go away, it seems to travel around the map and cars will bunch up as they encounter the jam. This is called the \"shockwave theory\". If you hit play with 15 cars and 0.5 shockwave probability, you're very likely to see it! If not, play around with the controls and see if you can make it happen. These drivers do behave unpredictably, after all. Thank you for playing!",
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
