export function trafficLightPositionForMac(titlebarHeight: number) {
  const trafficLightsBtnDimension = 20;
  const trafficLightBtnsLeftPos = 12;
  const trafficLightBtnsTopPos =
    (titlebarHeight - trafficLightsBtnDimension) / 2;
  return { x: trafficLightBtnsLeftPos, y: trafficLightBtnsTopPos };
}
