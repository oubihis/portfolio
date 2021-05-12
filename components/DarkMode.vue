<template>
  <div>
    <input class="toggle z-10" @click="toggleDark" type="checkbox" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: "dark-mode",
      light: "light-mode"
    };
  },
  methods: {
    toggleDark() {
      let darkTheme = document.getElementsByTagName("html")[0];
      let classDarkContainsDarkClass = darkTheme.classList.contains(this.dark);
      let classDarkContainsLightClass = darkTheme.classList.contains(
        this.light
      );
      if (!classDarkContainsDarkClass) {
        darkTheme.classList.add(this.dark);
        if (classDarkContainsLightClass) {
          darkTheme.classList.remove(this.light);
        }
      } else {
        darkTheme.classList.remove(this.dark);
        if (!classDarkContainsLightClass) {
          darkTheme.classList.add(this.light);
        }
      }
    }
  }
};
</script>
