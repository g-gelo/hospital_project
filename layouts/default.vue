<template>
  <div>
    <header
      class="navbar w-full p-4 bg-white bg-opacity-50 backdrop-filter flex items-center justify-between sticky top-0 z-50"
    >
      <div class="flex-1">
        <a href="#">
          <img
            src="/img/logo.png"
            alt="Logo"
            class="w-3/4 sm:w-2/3 lg:w-1/2 mix-blend-multiply"
          />
        </a>
      </div>
      <nav
        class="hidden md:flex gap-x-8 font-bold text-lg tracking-wide uppercase pr-12"
      >
        <a href="#hero" class="text-[#96C902]">Home</a>
        <a href="#" class="text-[#96C902]">About</a>
        <a href="#" class="text-[#96C902]">Clinical Departments</a>
        <a href="#" class="text-[#96C902]">Contact</a>
      </nav>
      <label class="btn btn-circle swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input
          type="checkbox"
          class="hidden"
          onclick="my_modal_2.showModal()"
        />
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <nav
              class="flex flex-col gap-y-4 font-bold text-lg tracking-wide uppercase"
            >
              <NuxtLink to="#hero" class="text-[#96C902]">Home</NuxtLink>
              <NuxtLink to="#" class="text-[#96C902]">About</NuxtLink>
              <NuxtLink to="#" class="text-[#96C902]"
                >Clinical Departments</NuxtLink
              >
              <NuxtLink to="#" class="text-[#96C902]">Contact</NuxtLink>
            </nav>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <!-- hamburger icon -->
        <svg
          class="swap-off fill-current bg-none"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
          />
        </svg>

        <!-- close icon -->
        <svg
          class="swap-on fill-current bg-none"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
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

.modal-box {
  width: 90%; /* Adjust the width for mobile view */
  max-width: 400px; /* Maximum width for the modal */
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
}
</style>
