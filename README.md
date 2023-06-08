# ProgrammingFoundations
Course Assignment for Programming Foundations

My object have the different properties

-Brand (String), The brand of the car.
-Model (String), What car model this is.
-Year (Number), What year this car is.
-Whp (Number), how much Wheel horse power the car have.
-EngineVolume (number), How big the engine is, measured in Litres.
-Suspension (Array), if the suspension is aired out or aired up.
-Turbo (Boolean), If the car have a turbo installed
-supercharged (Boolean), If the car have a supercharger installed.
-naturallyAspirated (Boolean), if the engine has none of the above its natrually aspired, which in this case is default.
-engineRebuild (function), if you want to rebuild the engine to install a turbo or a supercharger.

I started out by making two buttons, one for Turbo and one for Supercharger, to make the WHP multiply with the corresponding values,
but i ended up getting a issue where i can click them more to multiply the value even more, so i had to make a function where it resets the value.
When i made the buttons i wanted to visualize it so, it actually dynamic HTML with the values. so i constructed the different elements in JS.
and just added "power.textContent = car.whp + " WHP";" to each of the buttons so they update the h2 element within the EventListener.

When that part was done, i wanted to make more out of the project so i figured out i could make a animated "pressurevalve" for the suspension part,
with buttons that just fills or empty the valve.

In all i found this project very fun to work on, javascript is frustruating when you dont know anything and everything just outputs errors,
but when you start to understand it, its very fun to just play around with!

