<script setup>
import ArrowDownIcon2 from "../../components/icons/ArrowDownIcon2.vue";
</script>

<template>
  <main class="flex flex-col items-center w-screen min-h-screen" style="padding-left: 10vw; padding-right: 10vw">
    <RouterLink to="/creativecoding/explorer" class="text-3xl mt-16 self-end">X</RouterLink>
    <img
      class="w-auto"
      src="https://placehold.co/640x360"
      alt="Sketch"
      width="640"
      height="360"
      style="aspect-ratio: 16/9; height: 70vh" />
    <h2 class="text-3xl my-8">Scroll to learn more</h2>
    <ArrowDownIcon2 class="mb-32" />
    <div class="border border-white p-12" style="margin-bottom: 15vh">
      <h2 class="text-4xl font-poppins font-bold text-highlight">Lorem ipsum dolor</h2>
      <section class="mt-8">
        <p class="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iure similique nisi, doloribus, quidem
          voluptatibus nihil corporis beatae expedita possimus quos nemo qui voluptatum molestiae ea provident? Ex, vel
          iusto.
        </p>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam quaerat harum distinctio, magnam
          consectetur in sunt, dolorem dolore aut ipsum? Magni ea laboriosam expedita omnis? Ad doloremque accusamus
          quisquam.
        </p>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae, exercitationem molestias omnis quos
          facere harum. Eos accusamus nam nostrum magnam expedita tenetur, similique, nesciunt enim aspernatur numquam
          facilis omnis.
        </p>
      </section>
      <section class="border" style="border-color: var(--highlight-color)">
        <p class="font-jetbrains p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt fugiat voluptatem voluptatum? Harum
          nesciunt ex vero qui unde minima dolore, reprehenderit officia incidunt dolores impedit, eaque expedita? Ut,
          libero nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dignissimos nobis numquam
          distinctio ipsam corrupti commodi tempora placeat temporibus! Rem, adipisci hic aut molestias autem pariatur
          iusto saepe eligendi earum!
        </p>
      </section>
    </div>
  </main>
</template>
