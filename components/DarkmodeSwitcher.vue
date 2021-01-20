<template>
  <label>
    <input type="checkbox" v-model="darkmodeSwitch">
    <div class="planet"></div>
    <div class="elements">
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
      <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="200"/>
      </svg>
    </div>
  </label>
</template>

<script>
  export default {
    data () {
      return {
        darkmodeSwitch: this.$colorMode.preference === 'dark'
      }
    },
    watch: {
      darkmodeSwitch (darkmode) {
        if (darkmode) {
          this.$colorMode.preference = 'dark';
        } else {
          this.$colorMode.preference = 'light';
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  label {
    --bg-planet-bright: #F2C94C;
    --bg-planet-shadow: #828894;
    --bg-planet-lightshadow: #D7D7D820;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    padding: 1em;
    position: relative;

    /* To make outline on mobile invisible */
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    input[type="checkbox"] {
      height: 0;
      width: 0;
      visibility: hidden;
      position: absolute;
    }

    .planet {
      width: 2em;
      height: 2em;
      border-radius: 50%;
      overflow: hidden;
      background-color: var(--bg-planet-bright);
      background-repeat: no-repeat;
      position: relative;
      will-change: background;
      transition: all 400ms ease;

      /* Safari transition issue */
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);

      &::after {
        content: "";
        background-color: var(--bg-planet-shadow);
        width: 2em;
        height: 2em;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        will-change: opacity, transform, background-color;
        opacity: 0;
        transform: translate(2em, -2em);
        transition: opacity 400ms ease, transform 400ms ease, background-color 400ms ease;
      }
    }

    .elements {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 400ms ease;

      svg {
        position: absolute;
        width: 0.43em;
        height: 0.43em;
        top: 0;
        left: 0;
        opacity: 1;
        transition: transform 400ms ease, opacity 200ms ease, width 200ms ease, height 200ms ease;

        circle {
          fill: var(--bg-planet-bright);
          transition: fill 400ms ease;
        }

        &:first-child {
          transform: translate(1.8em, 0.35em);
        }

        &:nth-child(2) {
          transform: translate(2.8em, 0.7em);
        }

        &:nth-child(3) {
          transform: translate(3.2em, 1.8em);
        }

        &:nth-child(4) {
          transform: translate(2.8em, 2.8em);
        }

        &:nth-child(5) {
          transform: translate(1.8em, 3.2em);
        }

        &:nth-child(6) {
          transform: translate(0.7em, 2.8em);
        }

        &:nth-child(7) {
          transform: translate(0.35em, 1.8em);
        }

        &:nth-child(8) {
          transform: translate(0.7em, 0.7em);
        }
      }
    }
  }

  label {

    input:checked {
      & + .planet {
        --bg-planet-bright: #D7D7D8;

        &::after {
          opacity: 1;
          transform: translate(0.6em, -0.5em);
        }
      }

      & ~ .elements {
        transform: rotate(180deg);

        svg {
          &:first-child {
            transform: translate(2em, 1em);
            opacity: 0;
          }

          &:nth-child(2) {
            transform: translate(3em, 1.5em);
            opacity: 0;
          }

          &:nth-child(3) {
            transform: translate(3em, 2em);
            opacity: 0;
          }

          &:nth-child(4) {
            transform: translate(3em, 2em);
            opacity: 0;
          }

          &:nth-child(5) {
            transform: translate(1.9em, 2.6em);
            width: 0.3em;
            height: 0.3em;

            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }

          &:nth-child(6) {
            transform: translate(1.4em, 2.5em);
            width: 0.3em;
            height: 0.3em;

            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }

          &:nth-child(7) {
            transform: translate(1.1em, 1.6em);
            width: 0.7em;
            height: 0.7em;

            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }

          &:nth-child(8) {
            width: 0.45em;
            height: 0.45em;
            transform: translate(1.7em, 2.1em);

            circle {
              fill: var(--bg-planet-lightshadow);
            }
          }
        }
      }
    }
  }
</style>
