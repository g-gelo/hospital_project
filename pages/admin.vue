<template>
  <div>
    <h1 class="mt-3 mb-10">Hi pi 👉👈 {{ data?.user?.name }}</h1>
    <NuxtLink
      to="/department"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Department
    </NuxtLink>
    <div class="modal-wrapper bg-white p-4 rounded-lg w-10/12">
      <h1 class="font-bold text-lg mb-4 mt-2">Add Department</h1>
      <form class="space-y-4" @submit.prevent="addDepartment(department)">
        <div>
          <label
            for="department"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Department:</label
          >
          <textarea
            v-model="department.department"
            class="w-full p-2 border rounded mb-4"
            placeholder="Department"
            rows="2"
            required
          ></textarea>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Description:</label
          >
          <textarea
            v-model="department.description"
            class="w-full p-2 border rounded mb-4"
            placeholder="Description of Department"
            rows="2"
            required
          ></textarea>
          <label
            for="description"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Services:</label
          >
          <textarea
            v-model="department.services"
            class="w-full p-2 border rounded mb-4"
            placeholder="Services"
            rows="2"
            required
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button
            type="button"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            @click="showReportIncidentForm = false"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>

    <v-btn class="rounded-xl shadow-xl p-2 m-2" @click="signOut()">
      sign out
    </v-btn>
  </div>
</template>

<script setup>
definePageMeta({ middleware: "auth" });
const { data, signOut } = useAuth();
// Creating Report Incident Logic
const department = ref({
  departments: "",
  description: "",
  services: "",
});

const addDepartment = async (department) => {
  try {
    const addedDepartment = await $fetch("/api/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        department: department.department,
        description: department.description,
        services: department.services,
      }),
    });
    if (addedDepartment) {
      // Reset form fields
      department.department = "";
      department.description = "";
      department.services = "";

      // Update the list of report
      incidents.value = await $fetch("/api/departments");
    } else {
      console.error("Error adding report:", addedDepartment);
      // Handle the case where the report was not added successfully
    }
  } catch (error) {
    console.error("Error in addReport:", error);
    // Handle any other errors that might occur
  }
};
</script>

<style scoped>
/*  */
</style>
