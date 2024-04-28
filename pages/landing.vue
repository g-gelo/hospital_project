<template>
  <div class="body">
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

    <div id="hero" class="hero relative">
      <video
        ref="videoRef"
        src="/video/SiSh-Hero-Video.mp4"
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
          src="/img/department.png"
          alt=""
          class="card transition-opacity"
        />
      </div>
      <button
        class="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
        @click="toggleMute"
      >
        <img
          v-if="isMuted"
          class="fill-current"
          src="/icons/mute.svg"
          alt="Mute"
        />
        <img v-else class="fill-current" src="/icons/unmute.svg" alt="Unmute" />
      </button>
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
            class="flex carousel-container"
            :style="{ animationDuration: `${duration}s` }"
          >
            <div
              v-for="(doctor, index) in doctorsWithDuplicate"
              :key="index"
              class="doctor-card flex-none mr-8"
            >
              <button
                class="text-white font-bold py-2 px-4 rounded focus:outline-none mb-4"
                @click="
                  ($event) => {
                    showDoctorsModal = true;
                    specificDoctor = doctor;
                  }
                "
              >
                <img
                  :src="doctor.image"
                  :alt="doctor.name"
                  class="w-64 h-96 object-cover rounded-lg"
                />
              </button>

              <div class="mt-4 text-center">
                <h3 class="text-xl font-semibold">{{ doctor.name }}</h3>
                <p>{{ doctor.specialty }}</p>
              </div>
            </div>
          </div>
          <div
            v-if="showDoctorsModal"
            class="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 w-full p-8 rounded-lg shadow-md flex justify-center items-center"
          >
            <div class="flex flex-row bg-white rounded-lg p-6">
              <div class="w-96 shadow-lg rounded-lg">
                <img
                  :src="specificDoctor.image"
                  :alt="specificDoctor.name"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div class="w-96 px-6">
                <div>
                  <h2 class="text-lg font-bold mb-4">
                    Are you sure you wan to delete this job vacancy?
                  </h2>
                  <p class="text-slate-600 mb-4">
                    Title: {{ specificDoctor.name }}
                  </p>
                </div>
                <div class="flex justify-end">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="showDoctorsModal = false"
                  >
                    Cancel
                  </button>
                </div>
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
const showDoctorsModal = ref(false);

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
    name: "Dr. Monica Mampusti",
    specialty: "Pediatrics",
    image: "/doctors/Doctor1.jpg",
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Pediatrics",
    image: "https://via.placeholder.com/250x250?text=Doctor+2",
  },
  {
    name: "Dr. Michael Johnson",
    specialty: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+3",
  },
  {
    name: "Dr. Michael Johnson",
    specialty: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+4",
  },
  {
    name: "Dr. Michael Johnson",
    specialty: "Dermatology",
    image: "https://via.placeholder.com/250x250?text=Doctor+5",
  },
  {
    name: "Dr. Michael Johnson",
    specialty: "Dermatology",
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
  if (process.client && typeof window !== "undefined") {
    const totalWidth = doctorsWithDuplicate.value.length * 280;
    const viewportWidth = window.innerWidth;
    return (totalWidth / viewportWidth) * 20;
  }
});

const videoRef = ref(null);
const isMuted = ref(true);

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value;
  }
};
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
.modal {
  /* Position in the middle of the screen */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Background color with some transparency for a slight darkening effect */
  background-color: rgba(0, 0, 0, 0.5);

  /* Adjust width as needed */
  width: 80%;

  /* Padding for content */
  padding: 2rem;

  /* Rounded corners for a nice look */
  border-radius: 10px;

  /* Shadow for depth */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
