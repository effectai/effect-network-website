import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxt) => {
  return {
    provide: {
      aos: () => AOS,
    },
  };
});
