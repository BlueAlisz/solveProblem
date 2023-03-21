function canCompleteCircuit(gas, cost) {
    for (let gasStation = 0; gasStation < gas.length; gasStation++) {
        let start = gasStation; // 3
        let tank = 0;
        let loop = 0;
        //let stationLoop = gasStation
        console.log("start-------------------" + start);
        for (let stationLoop = gasStation; stationLoop < gas.length; stationLoop++) {
            console.log("station:" + stationLoop);
            tank += gas[stationLoop]; // 0 + 4
            console.log(`tank: ${tank} cost: ${cost[stationLoop]}`);
            if (tank < cost[stationLoop]) {
                console.log(`tank: ${tank} cost: ${cost[stationLoop]}`);
                console.log('out');
                break;
            }
            else {
                tank -= cost[stationLoop];
            }
            console.log(tank);
            if (loop > 0) {
                if (stationLoop == start) {
                    return start;
                }
            }
            if (stationLoop == gas.length - 1) {
                stationLoop = -1;
                loop++;
            }
        }
    }
    return -1;
}
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
