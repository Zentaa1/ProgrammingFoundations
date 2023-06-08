const car = {
    brand: "Toyota",
    model: "GT86",
    year: 2012,
    whp: 230,
    engineVolume: 2.0,
    suspension: ["Aired Out", "Aired Up"],
    turbo: false,
    supercharged: false,
    naturallyAspirated: true,
    engineRebuild: function(hasTurbo, isSuperCharged, isNaturallyAspirated) {
        this.turbo = hasTurbo;
        this.supercharged = isSuperCharged;
        this.naturallyAspirated = isNaturallyAspirated;

        this.resetWhp();
      
        if (hasTurbo) {
            this.whp *= 1.5;
        }

        if (isSuperCharged) {
            this.whp *= 1.7;
        }
      },
      resetWhp: function() {
        this.whp = 230;
      }
};

const header = document.querySelector('.header');
const buttons = document.createElement('div');
buttons.setAttribute('class', 'buttons');
header.appendChild(buttons);

const turboBtn = document.createElement('input');
turboBtn.setAttribute('type', 'submit');
turboBtn.value = "Install Turbo";
buttons.appendChild(turboBtn);

turboBtn.addEventListener("click", function(event) {
    if (!car.turbo && !car.supercharged) {
        car.engineRebuild(true, false, false);
        console.log(car.whp);
        power.textContent = car.whp + " WHP";
    }
});

const superChargerBtn = document.createElement('input');
superChargerBtn.setAttribute('type', 'submit');
superChargerBtn.value = "Install SuperCharger";
buttons.appendChild(superChargerBtn);

superChargerBtn.addEventListener("click", function(event) {
    if (!car.supercharged) {
        car.engineRebuild(false, true, false)
        console.log(car.whp);
        power.textContent = car.whp + " WHP";
    }
});

function resetCar() {
    car.turbo = false;
    car.supercharged = false;
    car.resetWhp();
  }

const resetBtn = document.createElement('input');
resetBtn.setAttribute('type', 'submit');
resetBtn.value = "Reset";
buttons.appendChild(resetBtn);

resetBtn.addEventListener("click", function(event) {
  resetCar();
  console.log(car.whp);
  power.textContent = car.whp + " WHP";
});

const mainContent = document.querySelector('.container');

const typeOfCar = document.createElement('h2');
typeOfCar.textContent = car.brand + " " + car.model + " " + car.year;
mainContent.appendChild(typeOfCar);

let power = document.createElement('h2');
power.textContent = car.whp + " WHP";
mainContent.appendChild(power);

const pressureValve = document.getElementById('pressure-valve');
const airOutBtn = document.getElementById('air-out-btn');
const airUpBtn = document.getElementById('air-up-btn');

function animatePressureValve(position) {
  pressureValve.style.bottom = position;
}

function fillPressureValve() {
    pressureValve.classList.add('filled');
}

function emptyPressureValve() {
    pressureValve.classList.remove('filled');
}

airOutBtn.addEventListener("click", function(event) {
    emptyPressureValve('0');
});

airUpBtn.addEventListener("click", function(event) {
    fillPressureValve('90%');
})