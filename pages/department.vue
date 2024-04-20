<template>
  <div class="flex">
    <!-- Navbar of Clinical Departments -->
    <div class="w-1/4 bg-gray-200 p-4">
      <!-- Clinical Department List -->
      <ul class="space-y-2">
        <li class="p-2 border border-gray-300 hover:bg-gray-100 cursor-pointer">
          Anesthesiology
        </li>
      </ul>
    </div>

    <!-- Clinical Department Contents -->
    <div class="w-3/4 bg-white p-4">
      <div class="flex justify-center">
        <!-- Logo -->
        <img
          src="/img/Doctor.svg"
          alt="logo_img"
          class="h-3 w-52 doctor-icon"
        />
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <!-- Content Service -->
      <div class="py-4">
        <label class="block text-lg font-semibold">Services Offer:</label>
        <ul class="list-disc list-inside">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
