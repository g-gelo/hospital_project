<template>
  <div>
    <div class="flex">
      <!-- Navbar of Clinical Departments -->
      <div class="w-1/4 bg-gray-200 p-4">
        <!-- Clinical Department List -->
        <ul class="space-y-2">
          <li
            v-for="department in departments"
            :key="department.id"
            class="p-2 border border-gray-300 hover:bg-gray-100 cursor-pointer"
            @click="selectDepartment(department)"
          >
            {{ department.department }}
          </li>
        </ul>
      </div>

      <!-- Clinical Department Contents -->
      <div v-if="selectedDepartment" class="w-3/4 bg-white p-4">
        <div class="flex justify-center">
          <!-- Logo -->
          <img src="/img/Doctor.svg" alt="logo_img" class="w-52 doctor-icon" />
        </div>

        <div class="flex justify-center">
          <!-- Content Image -->
          <img
            src="/img/Department.svg"
            alt="content_img"
            class="w-1/2 department-icon"
          />
        </div>

        <!-- Content Details -->
        <div class="py-4">
          <p class="px-4 py-2 border border-gray-300 rounded">
            {{ selectedDepartment.description }}
          </p>
        </div>

        <!-- Content Service -->
        <div class="py-4">
          <label class="block text-lg font-semibold">Services Offer:</label>
          <ul class="list-disc list-inside">
            <li>{{ selectedDepartment.services }}</li>
          </ul>
        </div>
      </div>
    </div>
    <h1
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
    >
      CvSU Account Lang ha
    </h1>
    <NuxtLink
      to="/admin"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Admin
    </NuxtLink>
    <small class="m-2">Log in first before going to admin</small>
    <NuxtLink
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10 mt-44 btn"
      @click="signIn('google')"
      >Login with Google</NuxtLink
    >
  </div>
</template>

<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
const { data: departments } = useFetch("/api/departments");
const selectedDepartment = ref(null);

const selectDepartment = (department) => {
  selectedDepartment.value = department;
};

const { signIn } = useAuth();
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
