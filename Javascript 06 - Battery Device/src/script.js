const redColor = 'red-gradient';
const orangeColor = 'orange-gradient';
const yellowColor = 'yellow-gradient';
const greenColor = 'green-gradient';

Battery();

function Battery() {
    const batteryLiquid = document.querySelector(".BatteryLiquid");
    const batteryStatus = document.querySelector(".BatteryStatus");
    const batteryPercentage = document.querySelector(".BatteryPercentage");

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            let bLevel = Math.floor(batt.bLevel * 100);
            batteryPercentage.innerHTML = bLevel + "%";
            batteryLiquid.style.height = `${parseInt(batt.bLevel * 100)}%`;
            if (bLevel == 100) {
                batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";
            } else if (bLevel <= 20 & !batt.charging) {
                batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (batt.charging) {
                batteryStatus.classList.remove("hidden");
                batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                batteryStatus.innerHTML = "";
            }

            if (bLevel <= 20) {
                batteryLiquid.classList.add(redColor);
                batteryLiquid.classList.remove("greenColor", "orangeColor", "yellowColor");
            } else if (bLevel <= 48) {
                batteryLiquid.classList.add("orangeColor");
                batteryLiquid.classList.remove("greenColor", redColor, "yellowColor");
            } else if (bLevel <= 80) {
                batteryLiquid.classList.add("yellowColor");
                batteryLiquid.classList.remove("greenColor", "orangeColor", redColor);
            } else {
                batteryLiquid.classList.add("greenColor");
                batteryLiquid.classList.remove(redColor, "orangeColor", "yellowColor");
            }

        }
        updateBattery();
        batt.addEventListener("chargingchange", () => { updateBattery() });
        batt.addEventListener("levelchange", () => { updateBattery() });
    })
}