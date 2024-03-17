import { animate, cubicBezier, easeIn } from "popmotion";

export const distortPingPong = (distort: Ref<number>) => {
  const isStopped = ref(false);
  const stopAll = () => {
    isStopped.value = true;
  };

  animate({
    from: distort.value,
    to: 0.3,
    duration: 200,
    ease: easeIn,
    onUpdate: (value) => {
      if (value > 0) {
        distort.value = value;
      }
    },
    onComplete: () => {
      animate({
        from: distort.value,
        to: 0,
        duration: 4000,
        ease: cubicBezier(0.31, -1.33, 0.37, 1.07),
        onComplete: () => {},
        onUpdate: (value) => {
          if (value > 0 && !isStopped.value) {
            distort.value = value;
          }
        },
      });
    },
  });

  return { stopAll };
};

var s = 1.70158;

export function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
}

export function easeInOutSine(t, b, c, d) {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
}

export function easeInExpo(t, b, c, d) {
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

export function easeOutExpo(t, b, c, d) {
  return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}

export function easeInElastic(t, b, c, d) {
  var s = 1.70158;
  var p = 0;
  var a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * 0.3;
  if (a < Math.abs(c)) {
    a = c;
    var s = p / 4;
  } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
  return (
    -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p)
    ) + b
  );
}

export function easeInOutBack(t, b, c, d) {
  if (s == undefined) s = 1.70158;
  if ((t /= d / 2) < 1)
    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}
