<script setup>

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img class="w-24 h-24 border-transparent rounded-full mt-24 mb-4" src="../assets/media/profile_picture.jpeg"
      alt="Profile Picture" />
    <h5 class="text-white text-xl font-bold">Yorick Schilling</h5>
    <p class="text-gray-400 mb-4">Computer Science | Business | Travel</p>
    <!-- START OF LIST -->
    <!--Personal Website-->
    <router-link to="/"
      class="w-10/12 md:max-w-2xl flex items-center justify-between px-3 py-2 my-2 border-transparent rounded-lg hover:scale-105 duration-150"
      style="width: 90vw; background-color: #101010">
      <svg class="w-12 h-12" fill="#FFFFFF" viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
        clip-rule="evenodd">
        <path
          d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z" />
      </svg>

      <h5 class="text-white">Personal Website</h5>
      <div class="w-12 h-12"></div>
    </router-link>
    <!--GitHub-->
    <a class="w-10/12 md:max-w-2xl flex items-center justify-between px-3 py-2 my-2 border-transparent rounded-lg hover:scale-105 duration-150"
      style="width: 90vw; background-color: #101010" href="https://github.com/yschilling" target="_blank">
      <svg class="w-12 h-12" fill="#FFFFFF" viewBox="0 0 128 128">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
        </path>
        <path
          d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
        </path>
      </svg>
      <h5 class="text-white">GitHub</h5>
      <div class="w-12 h-12"></div>
    </a>
    <!--LinkedIn-->
    <a class="w-10/12 md:max-w-2xl flex items-center justify-between px-3 py-2 my-2 border-transparent rounded-lg hover:scale-105 duration-150"
      style="background-color: #101010" href="https://linkedin.com/in/yschilling" target="_blank">
      <img class="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
      <h5 class="text-white">LinkedIn</h5>
      <div class="w-12 h-12"></div>
    </a>
  </div>
</template>

<style scoped></style>