<template>
  <div class="body">
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

    <!-- Find Your Doctor -->
    <div class="find-doctor-section w-full h-screen bg-[#f5f5f5]">
      <div class="container mx-auto py-24">
        <h2
          class="text-3xl font-bold text-center mb-4 mt-12 border-2 bg-white p-4 rounded-lg text-[#96C902]"
        >
          Find Your Doctor
        </h2>

        <div class="mb-6">
          <input
            v-model="searchQuery"
            type="text"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Search doctors..."
          />
        </div>

        <div class="relative overflow-hidden pt-20">
          <div
            class="flex carousel-container"
            :style="{ animationDuration: `${duration}s` }"
          >
            <div
              v-for="(doctor, index) in filteredDoctors"
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
            class="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-60 w-full p-8 flex justify-center items-center z-40"
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
                  <h2 class="text-4xl font-bold mb-6 text-[#96C902]">
                    Meet Your Doctor
                  </h2>
                  <div class="border-b-4 border-gray-400 mb-6"></div>
                  <div class="mb-4">
                    <p class="text-[#96C902] font-semibold text-2xl mb-4">
                      Name:
                    </p>
                    <p class="text-gray-600 text-xl font-medium">
                      {{ specificDoctor.name }}
                    </p>
                  </div>
                  <div class="mb-4">
                    <p class="text-[#96C902] font-semibold text-2xl mb-4">
                      Department:
                    </p>
                    <p class="text-gray-600 text-xl font-medium">
                      {{ specificDoctor.specialty }}
                    </p>
                  </div>
                  <div class="mb-4">
                    <p class="text-[#96C902] font-semibold text-2xl mb-4">
                      Availability:
                    </p>
                    <p class="text-gray-600 text-xl font-medium">
                      {{ specificDoctor.availability }}
                    </p>
                  </div>
                  <div class="mb-4">
                    <p class="text-[#96C902] font-semibold text-2xl mb-4">
                      Contact Number:
                    </p>
                    <p class="text-gray-600 text-xl font-medium">
                      {{ specificDoctor.contact }}
                    </p>
                  </div>
                </div>
                <div class="flex justify-end mt-6">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
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
    <!-- News And Events -->
    <div class="w-full h-screen p-32 leading-loose">
      <h2 id="News" class="text-5xl font-semibold mb-4">News</h2>

      <!-- News Section -->
      <div class="news">
        <div
          v-for="(item, index) in news"
          :key="index"
          class="p-4 grid grid-cols-2"
        >
          <!-- Left Part: Title, Date, Description -->
          <div class="col-start-1 left">
            <!-- Adjusted width for the left part -->
            <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-500 mb-2">{{ item.date }}</p>
            <div class="border-b-4 w-4/5"></div>
            <pre class="text-gray-600">{{ item.description }}</pre>
          </div>

          <!-- Right Part: Image -->
          <div class="col-start-2 right">
            <!-- Adjusted width for the right part -->
            <img
              :src="item.image"
              alt="News Image"
              class="w-3/4 flex justify-end"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Event Section -->
    <div class="w-full h-screen p-32 leading-loose bg-[#f5f5f5]">
      <h2 id="Events" class="text-5xl font-semibold mb-4">Events</h2>

      <!-- Events Section -->
      <div class="events">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="p-4 grid grid-cols-2"
        >
          <!-- Left Part: Image -->
          <div class="col-start-1 left">
            <!-- Adjusted width for the left part -->
            <img
              :src="item.image"
              alt="News Image"
              class="w-3/4 flex justify-end"
            />
          </div>
          <!-- Right Part: Title, Date, Description -->
          <div class="col-start-2 right">
            <!-- Adjusted width for the left part -->
            <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-500 mb-2">{{ item.date }}</p>
            <div class="border-b-4 w-4/5"></div>
            <pre class="text-gray-600">{{ item.description }}</pre>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full relative">
      <h2 class="text-3xl font-semibold mb-4 text-center pt-8">Testimonials</h2>
      <!-- Left Arrow Button -->
      <button
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 m-6 rounded-full z-10"
        @click="navigateCarousel('left')"
      >
        &lt;
      </button>

      <!-- Right Arrow Button -->
      <button
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 m-6 rounded-full z-10"
        @click="navigateCarousel('right')"
      >
        &gt;
      </button>

      <!-- Testimonial Carousel -->
      <div class="carousel w-full p-12">
        <div
          v-show="currentSlide === 0"
          id="item1"
          class="carousel-item w-full flex justify-center items-center"
        >
          <iframe
            :src="testimonials[0].src"
            class="size-96"
            frameborder="0"
          ></iframe>
        </div>
        <div
          v-show="currentSlide === 1"
          id="item2"
          class="carousel-item w-full flex justify-center items-center"
        >
          <iframe
            :src="testimonials[1].src"
            class="size-96"
            frameborder="0"
          ></iframe>
        </div>
        <div
          v-show="currentSlide === 2"
          id="item3"
          class="carousel-item w-full flex justify-center items-center"
        >
          <iframe
            :src="testimonials[2].src"
            class="size-96"
            frameborder="0"
          ></iframe>
        </div>
        <div
          v-show="currentSlide === 3"
          id="item4"
          class="carousel-item w-full flex justify-center items-center"
        >
          <iframe
            :src="testimonials[3].src"
            class="size-96"
            frameborder="0"
          ></iframe>
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
    name: "Dr. Paulin Pugay",
    specialty: "Pedia Clinic 2",
    availability: "Tuesday, Thursday, and Saturday, 3:00 PM - 5:00 PM",
    contact: "0964-198-2283",
    image: "/doctors/Pedia/Pauline-Pugay.jpg",
  },
  {
    name: "Dr. Francesca Isabel Bunyi",
    availability: "Monday, Wednesday and Friday, 8:00 AM - 10 AM",
    specialty: "OPD Clinic",
    contact: "0905-563-4633",
    image: "/doctors/ObGyne/Francesca-Isabel-Bunyi.jpg",
  },
  {
    name: "Dr. Annalyn Pangan",
    availability: "Monday and Wednesday, 1:00 AM - 3 PM",
    specialty: "OPD Clinic",
    contact: "0905-563-4633",
    image: "/doctors/ObGyne/Annalyn-Pangan.jpg",
  },
  {
    name: "Dr. Catherine Costa",
    availability: "Tuesday, Thursday and Saturday, 1:00 AM - 3 PM",
    specialty: "OPD Clinic",
    contact: "0905-563-4633",
    image: "/doctors/ObGyne/Catherine-Costa.jpg",
  },
  {
    name: "Dr. Andrew Villafuerte",
    availability: "Wednesday 1:00 AM - 3:00 PM, Saturday 8:00 AM - 10:00 AM",
    specialty: "OPD Clinic",
    contact: "0963-712-5160",
    image: "/doctors/InternMedi/Andrew-Villafuerte.jpg",
  },
  {
    name: "Dr. Carl Angelo Amante",
    availability: "Monday 12:00 NN - 2:00 PM",
    specialty: "OPD Clinic",
    contact: "0963-712-5160",
    image: "/doctors/InternMedi/Carl-Angelo-Amante.jpg",
  },
  {
    name: "Dr. Jindra Fatima Abear",
    availability: "Monday and Friday 1:00 PM - 3:00 PM",
    specialty: "OPD Clinic",
    contact: "0963-712-5160",
    image: "/doctors/InternMedi/Jindra-Fatima-Abear.jpg",
  },
  {
    name: "Dr. Joyce Angelie Cantada",
    availability: "Monday 1:00 PM - 3:00 PM, Tuesday 9:00 AM - 12:00 NN",
    specialty: "OPD Clinic",
    contact: "0963-712-5160",
    image: "/doctors/InternMedi/Joyce-Angelie-Cantada.jpg",
  },
  {
    name: "Dr. Troy Dizon",
    availability: "Monday, Wednesday, and Friday, 10:00 AM - 12:00 NN",
    specialty: "OPD Clinic",
    contact: "0963-712-5160",
    image: "/doctors/InternMedi/Troy-Dizon.jpg",
  },
  {
    name: "Dr. Troy Dizon",
    availability: "Monday, Wednesday, and Friday, 10:00 AM - 12:00 NN",
    specialty: "OPD Clinic",
    contact: "0963-712-5160",
    image: "/doctors/InternMedi/Troy-Dizon.jpg",
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

const searchQuery = ref("");

const filteredDoctors = computed(() => {
  if (!searchQuery.value) {
    return doctorsWithDuplicate.value;
  }

  const query = searchQuery.value.toLowerCase();
  return doctorsWithDuplicate.value.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialty.toLowerCase().includes(query)
  );
});

const duration = ref(20); // Initial duration for the marquee animation

watch(searchQuery, (newValue) => {
  if (newValue) {
    duration.value = 0; // Stop the animation when there is a search query
  } else {
    duration.value = computeDuration(); // Restore the animation when the search query is empty
  }
});

const computeDuration = () => {
  if (process.client && typeof window !== "undefined") {
    const totalWidth = doctorsWithDuplicate.value.length * 280;
    const viewportWidth = window.innerWidth;
    return (totalWidth / viewportWidth) * 20;
  }
  return 20; // Default duration if window is not available
};

const videoRef = ref(null);
const isMuted = ref(true);

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value;
  }
};

const news = [
  {
    title:
      "Confronting Malaria: Battling the Tiny Villain Carried by Mosquitoes",
    date: "April 25, 2024",
    description: `To fight malaria here are some  𝙃𝙚𝙖𝙡𝙩𝙝 𝙏𝙞𝙥𝙨  📝
  ✅ 𝙈𝙤𝙨𝙦𝙪𝙞𝙩𝙤 𝙣𝙚𝙩𝙨 𝙛𝙤𝙧 𝙨𝙡𝙚𝙚𝙥: Sleep under special nets to keep
  mosquitoes away at night.
  ✅ 𝘾𝙤𝙫𝙚𝙧 𝙪𝙥: Wear long clothes to protect your skin from
  mosquito bites.
  ✅ 𝙎𝙩𝙖𝙮 𝙞𝙣𝙨𝙞𝙙𝙚: Try to stay indoors when mosquitoes are out,
  especially in the evening.
  ✅ 𝙉𝙤 𝙢𝙤𝙨𝙦𝙪𝙞𝙩𝙤 𝙝𝙤𝙢𝙚𝙨: Make sure there's no water standing around
  your house where mosquitoes can lay eggs.
  ✅ 𝙏𝙖𝙠𝙚 𝙨𝙥𝙚𝙘𝙞𝙖𝙡 𝙢𝙚𝙙𝙞𝙘𝙞𝙣𝙚: If you're going to a place with lots of
  mosquitoes, take special medicine to stay safe from malaria, please
  consult your doctor for the best medical advise. `,
    image: "/img/malaria.jpg",
  },
];

onMounted(() => {
  if (process.client) {
    const sliders = document.querySelectorAll(".left");

    const appearOptions = {
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__slideInLeft"
            );
            appearOnScroll.unobserve(entry.target);
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
onMounted(() => {
  if (process.client) {
    const sliders = document.querySelectorAll(".right");

    const appearOptions = {
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__slideInRight"
            );
            appearOnScroll.unobserve(entry.target);
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

const events = [
  {
    title:
      "𝗟𝗲𝗰𝘁𝘂𝗿𝗲 𝗼𝗻 𝗳𝗿𝗲𝗾𝘂𝗲𝗻𝘁𝗹𝘆 𝗮𝘀𝗸𝗲𝗱 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗼𝗻 𝗩𝗮𝗰𝗰𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗣𝗲𝗿𝘁𝘂𝘀𝘀𝗶𝘀 𝗗𝗶𝘀𝗲𝗮𝘀𝗲",
    date: "April 29, 2024",
    description: `Guarding Against Pertussis: Empowering Communities Through
    Vaccine Education today 𝗔𝗽𝗿𝗶𝗹 𝟮𝟵, 𝟮𝟬𝟮𝟰, 𝟯:𝟯𝟬 𝗽𝗺 𝘁𝗼 𝟱:𝟬𝟬 𝗽𝗺 𝗮𝘁 𝟳𝘁𝗵 𝗙𝗹𝗼𝗼𝗿
    𝗥𝗼𝗼𝗳𝘁𝗼𝗽 𝗦𝗼𝘂𝘁𝗵 𝗜𝗺𝘂𝘀 𝗦𝗽𝗲𝗰𝗶𝗮𝗹𝗶𝘀𝘁 𝗛𝗼𝘀𝗽𝗶𝘁𝗮𝗹.
    Join us today to empower your knowledge against pertussis, Register Now
    Here!  https://forms.gle/eH7FVjSBnG9sV6gf8 🩺`,
    image: "/img/pertussis.jpg",
  },
];

const currentSlide = ref(0);

const testimonials = [
  { src: "https://www.youtube.com/embed/ciMaxHshvro?si=tewRJtuJL2M6V0Kl" },
  { src: "https://www.youtube.com/embed/QujpCRDhncs?si=dmW6jBhXoQE-JYyh" },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJulesceilteoshan%2Fposts%2Fpfbid02rNBd9kUbkJryjRxsQph6sp4VPxz6AX1c7AdiDGuFE4jvTdJKh8D7gtC3h9y4F7rpl&show_text=true&width=500&is_preview=true",
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvincent.jacinto.56%2Fposts%2Fpfbid02VpbKNSZeJjaAHf1QKN3BsLakUcypVHE4Kx1nZDj7Fwzb6pvkJr5jr1PVRnkTGMfJl&show_text=true&width=500&is_preview=true",
  },
];

const navigateCarousel = (direction) => {
  if (direction === "left") {
    currentSlide.value =
      currentSlide.value === 0
        ? testimonials.length - 1
        : currentSlide.value - 1;
  } else if (direction === "right") {
    currentSlide.value =
      currentSlide.value === testimonials.length - 1
        ? 0
        : currentSlide.value + 1;
  }
};
</script>

<style scoped>
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

.carousel-item {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
</style>
