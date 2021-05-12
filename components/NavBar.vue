<template>
  <nav
    :class="[
      isOpen
        ? 'absolute z-50 w-full h-full bg-mobile md:bg-transparent md:w-auto md:relative'
        : ''
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 lg:py-10">
      <div class="flex items-center justify-between h-16">
        <Logo />
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline">
              <nuxt-link class="link-first" to="/projects">Projects</nuxt-link>
              <a href="https://github.com/oubihis" class="link" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/oubihis" class="link" target="_blank">Linkedin</a>
              <a href="#" class="link">Resume <span class="text-xs align-top"><b>.</b> soon <b>.</b></span></a>
              <a href="mailto:oubihis@gmail.com" class="link">Mail</a>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center md:ml-6">
              <DarkMode />
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 text-lg focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-6 pt-3 pb-3 sm:px-3">
        <a href="#" class="link-mobile-first">Github</a>
        <nuxt-link class="link-mobile" to="/projects">Projects</nuxt-link>
        <a href="https://github.com/oubihis" class="link-mobile" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/oubihis" class="link-mobile" target="_blank">Linkedin</a>
        <a href="#" class="link-mobile">Resume <span class="text-xs align-top"><b>.</b> soon <b>.</b></span></a>
        <a href="mailto:oubihis@gmail.com" class="link-mobile">Mail</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
