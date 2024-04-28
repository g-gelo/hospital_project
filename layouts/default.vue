<template>
  <div>
    <header
      class="navbar w-full p-4 bg-white bg-opacity-50 backdrop-filter flex items-center justify-between sticky top-0 z-50"
    >
      <div class="flex-1">
        <a href="#">
          <img src="/img/logo.png" alt="" class="w-1/2 mix-blend-multiply" />
        </a>
      </div>
      <nav
        class="flex-none gap-x-8 font-bold text-lg tracking-wide uppercase pr-12"
      >
        <a href="#hero" class="text-[#96C902]">Home</a>
        <a href="#" class="text-[#96C902]">About</a>
        <a href="#" class="text-[#96C902]">Clinical Departments</a>
        <a href="#" class="text-[#96C902]">Contact</a>
      </nav>
    </header>
    <slot />

    <footer
      class="footer footer-center p-10 bg-base-200 text-base-content rounded"
    >
      <nav class="grid grid-flow-col gap-4">
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/sishmain" target="_blank"
            ><img src="/icons/instagram.svg" alt="Instagram"
          /></a>
          <a href="https://www.tiktok.com/@sish_official" target="_blank"
            ><img src="/icons/tiktok.svg" alt="Tiktok"
          /></a>
          <a
            href="https://www.youtube.com/@SouthImusSpecialistHospital"
            target="_blank"
            ><img src="/icons/youtube.svg" alt="Youtube"
          /></a>
          <a
            href="https://www.facebook.com/southimusspecialisthospital"
            target="_blank"
            ><img src="/icons/facebook.svg" alt="Facebook"
          /></a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Sheesh</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
