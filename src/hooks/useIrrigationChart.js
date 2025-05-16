import { useMemo } from "react";
import { toMinutes, fromMinutes } from "../utils";

export default function useIrrigationChart(
    plots,
    motors,
    startTime,
    endTime,
    motorRuntime,
    interval
) {
    return useMemo(() => {
        if (
            !plots ||
            !motors ||
            !startTime ||
            !endTime ||
            !motorRuntime ||
            !interval
        )
            return [];

        const plotList = Array.from({ length: plots }, (_, i) => `D${i + 1}`);
        const motorList = Array.from({ length: motors }, (_, i) => `M${i + 1}`);

        const chart = [];
        let index = 0;
        let cycleStart = toMinutes(startTime);
        const cycleEnd = toMinutes(endTime);

        // Calculate total batches needed
        const totalBatches = Math.ceil(plots / motors);

        while (cycleStart + motorRuntime <= cycleEnd) {
            for (let batchIdx = 0; batchIdx < totalBatches; batchIdx++) {
                const batchStart = batchIdx * motors;
                const batchEnd = Math.min(batchStart + motors, plots);

                for (let j = batchStart; j < batchEnd; j++) {
                    const plot = plotList[j];
                    const motor = motorList[(j - batchStart) % motors];
                    chart.push({
                        index: index++,
                        plot,
                        startTime: fromMinutes(cycleStart),
                        endTime: fromMinutes(cycleStart + motorRuntime - 1),
                        RunBy: motor,
                    });
                }
                cycleStart += motorRuntime;
                if (cycleStart + motorRuntime > cycleEnd) break;
            }
            cycleStart += interval;
        }

        return chart;
    }, [plots, motors, startTime, endTime, motorRuntime, interval]);
}
