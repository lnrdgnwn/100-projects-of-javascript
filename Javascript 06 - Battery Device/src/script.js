const redColor = 'linear-gradient(90deg, hsl(7, 89%, 46%) 15%, hsl(11, 93%, 68%) 100%)';
const orangeColor = 'linear-gradient(90deg, hsl(22, 89%, 46%) 15%, hsl(54, 90%, 68%) 100%)';
const yellowColor = 'linear-gradient(90deg, hsl(54, 89%, 46%) 15%, hsl(92, 90%, 45%) 100%)';
const greenColor = 'linear-gradient(90deg, hsl(92, 89%, 46%) 15%, hsl(92, 90%, 68%) 100%)';

Battery();

function Battery() {
    const batteryLiquid = document.querySelector(".BatteryLiquid");
    const batteryStatus = document.querySelector(".BatteryStatus");
    const batteryPercentage = document.querySelector(".BatteryPercentage");

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            let level = Math.floor(batt.level * 100);
            batteryPercentage.innerHTML = level + "%";
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
            if (level == 100) {
                batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";
            } else if (level <= 20 & !batt.charging) {
                batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (batt.charging) {
                batteryStatus.classList.remove("hidden");
                batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                batteryStatus.innerHTML = "";
            }

            if (level <= 20) {
                batteryLiquid.style.backgroundImage = redColor;
            } else if (level <= 48) {
                batteryLiquid.style.backgroundImage = orangeColor;
            } else if (level <= 80) {
                batteryLiquid.style.backgroundImage = yellowColor;
            } else {
                batteryLiquid.style.backgroundImage = greenColor;
            }


        }
        updateBattery();
        batt.addEventListener("chargingchange", () => { updateBattery() });
        batt.addEventListener("levelchange", () => { updateBattery() });
    })
}