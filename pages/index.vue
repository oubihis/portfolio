<template>
  <main
    class="flex-grow container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center"
  >
    <div class="mx-0 md:mx-8 px-4 py-6 sm:px-0 flex-nowrap md:flex gap-4">
      <div class="md:w-1/2 w-full ">
        <h2 class="about-me">
          Hey...! <br />
          I’am <span>Saïd Oubihi, aka Oubihis</span>. <br />UI/Front-end Developer from<br />
          Morocco.
        </h2>
        <hr class="mt-8 w-16" />
      </div>
      <div class="md:w-1/2 w-full ">
        <h2 class="m-code">#Coding & more coding</h2>
        <p class="samthing-me">
          in 2013 I enjoy creating things that live on web,
          some of my working is open source available on <a href="https://github.com/oubihis" target="_blank">
          <span class="italic">GitHub.</span></a> or you can just check <nuxt-link class="link-first" to="/projects">
          <span class="italic">My Projects.</span></nuxt-link>
        </p>
        <h3 class="h-project">Have a project in mind ?</h3>
        <div class="link-b-project">
          <nuxt-link class="link-first" to="/projects">What i do ?</nuxt-link>
          <a href="mailto:oubihis@gmail.com">Hire me !</a>
        </div>
      </div>
    </div>
  </main>
</template>
