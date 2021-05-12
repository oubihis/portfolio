<template>
  <main
    class="flex-grow container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center"
  >
    <div class="mx-0 md:mx-8 px-4 py-6 sm:px-0 flex-nowrap md:flex gap-4">
      <div class="md:w-1/2 w-full ">
        <h2 class="not-found" v-if="error.statusCode === 404">
          Page not found<br />
          <span>404 Error</span>
        </h2>
        <h2 class="not-found" v-else>An error occurred</h2>
        <nuxt-link class="link-back-to" to="/">Return to home</nuxt-link>
        <hr class="mt-6 w-16" />
      </div>
      <div class="md:w-1/2 w-full">
        <svg
          class="icon-404"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 368 368"
          style="enable-background:new 0 0 368 368;"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M184,0C82.544,0,0,82.544,0,184s82.544,184,184,184c101.464,0,184-82.544,184-184S285.464,0,184,0z M184,352
				c-92.64,0-168-75.36-168-168S91.36,16,184,16c92.632,0,168,75.36,168,168S276.632,352,184,352z"
                />
                <path
                  d="M144,152c0-13.232-10.768-24-24-24s-24,10.768-24,24s10.768,24,24,24S144,165.232,144,152z M112,152c0-4.408,3.592-8,8-8
				s8,3.592,8,8s-3.592,8-8,8S112,156.408,112,152z"
                />
                <path
                  d="M248,128c-13.232,0-24,10.768-24,24s10.768,24,24,24s24-10.768,24-24S261.232,128,248,128z M248,160
				c-4.416,0-8-3.592-8-8s3.584-8,8-8c4.416,0,8,3.592,8,8S252.416,160,248,160z"
                />
                <path
                  d="M184,224c-29.824,0-58.24,12.632-77.96,34.664c-2.944,3.296-2.664,8.352,0.624,11.296
				c3.296,2.952,8.352,2.664,11.296-0.624C134.648,250.688,158.72,240,184,240c25.28,0,49.352,10.688,66.04,29.336
				c1.576,1.768,3.768,2.664,5.96,2.664c1.896,0,3.816-0.672,5.336-2.04c3.288-2.944,3.568-8,0.624-11.296
				C242.24,236.64,213.832,224,184,224z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["error"],
  head() {
    return {
      title: "404"
    };
  }
};
</script>
