<template>
  <div class="body">
    <header
      class="navbar w-full p-4 bg-white bg-opacity-50 backdrop-filter flex items-center justify-between sticky top-0 z-50"
    >
      <div class="flex-1">
        <a href="#">
          <img
            src="/assets/img/logo.png"
            alt=""
            class="w-1/2 mix-blend-multiply"
          />
        </a>
      </div>
      <nav
        class="flex-none gap-x-8 font-bold text-lg tracking-wide uppercase pr-12"
      >
        <a href="#hero" class="text-black">Home</a>
        <a href="#" class="text-black">About</a>
        <a href="#" class="text-black">Clinical Departments</a>
        <a href="#" class="text-black">Contact</a>
      </nav>
    </header>

    <div id="hero" class="hero relative">
      <video
        src="assets/video/SiSh-Video.mp4"
        autoplay
        muted
        loop
        class="w-screen h-auto"
      ></video>
      <div class="absolute inset-0 bg-green-800 mix-blend-overlay"></div>
      <div
        class="absolute left-10 bottom-10 -translate-y-1/2"
        :class="{ 'opacity-100': showPngImage, 'opacity-0': !showPngImage }"
      >
        <img
          ref="pngImageRef"
          src="/assets/img/department.png"
          alt=""
          class="card transition-opacity duration-500"
        />
      </div>
    </div>

    <div class="find-doctor-section w-full h-screen">
      <div class="container mx-auto py-24">
        <h2
          class="text-3xl font-bold text-center mb-4 mt-12 bg-green-800 p-4 rounded-lg text-green-300 font-mono"
        >
          Find Your Doctor
        </h2>
        <div class="relative overflow-hidden pt-32">
          <div
            class="carousel-container flex whitespace-nowrap will-change-transform"
            :style="{ animationDuration: `${duration}s` }"
          >
            <div
              v-for="(doctor, index) in doctorsWithDuplicate"
              :key="index"
              class="doctor-card flex-none mr-8"
            >
              <img
                :src="doctor.image"
                :alt="doctor.name"
                class="w-64 h-96 object-cover rounded-lg"
              />
              <div class="mt-4 text-center">
                <h3 class="text-xl font-semibold">{{ doctor.name }}</h3>
                <p>{{ doctor.speciality }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "animate.css";
import "intersection-observer";

const pngImageRef = ref(null);
const showPngImage = ref(false);

onMounted(() => {
  if (process.client) {
    const heroElement = document.getElementById("hero");

    const pngImageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showPngImage.value = true;
          } else {
            showPngImage.value = false;
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: [0, 1] }
    );

    pngImageObserver.observe(heroElement);

    const sliders = document.querySelectorAll(".card");
    const appearOptions = {
      threshold: 0.5,
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__slideInUp"
            );
            appearOnScroll.unobserve(entry.target);
          } else {
            entry.target.classList.remove("animate__slideInUp");
            entry.target.classList.add("animate__slideOutDown");
          }
        });
      },
      appearOptions
    );

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }
});

const doctors = ref([
  {
    name: "Dr. John Doe",
    speciality: "Cardiology",
    image: "https://via.placeholder.com/250x250?text=Doctor+1",
  },
  {
    name: "Dr. Jane Smith",
    speciality: "Pediatrics",
    image: "https://via.placeholder.com/250x250?text=Doctor+2",
  },
  {
    name: "Dr. Michael Johnson",
    speciality: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+3",
  },
  {
    name: "Dr. Michael Johnson",
    speciality: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+4",
  },
  {
    name: "Dr. Michael Johnson",
    speciality: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+5",
  },
  {
    name: "Dr. Michael Johnson",
    speciality: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+6",
  },
]);

const doctorsWithDuplicate = computed(() => [
  ...doctors.value,
  doctors.value[0],
  doctors.value[1],
  doctors.value[2],
  doctors.value[3],
  doctors.value[4],
]);

const duration = computed(() => {
  const totalWidth = doctorsWithDuplicate.value.length * 280; // Assuming each card is 280px wide (64px image + 200px content + 16px margin)
  const viewportWidth = window.innerWidth;
  return (totalWidth / viewportWidth) * 20; // 20 seconds for one loop
});
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.carousel-container {
  animation: marquee linear infinite;
  animation-duration: inherit;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
