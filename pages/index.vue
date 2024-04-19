<template>
  <div>
    Prisma ORM Data from the database, received
    {{ departments?.length || 0 }} records:
    <pre>{{ departments }}</pre>
    <div v-for="MisnVis in departments" :key="MisnVis.id">
      <h1>{{ MisnVis.title }}</h1>
      <h4>{{ MisnVis.description }}</h4>
    </div>
    <!-- Form Modal -->
    <div class="modal h-screen w-full">
      <div class="modal-wrapper bg-white p-4 rounded-lg w-10/12">
        <h1 class="font-bold text-lg mb-4 mt-2">Report an Incident</h1>
        <form class="space-y-4" @submit.prevent="addDepartment(department)">
          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-700 mb-2"
              >Title:</label
            >
            <textarea
              v-model="department.title"
              class="w-full p-2 border rounded mb-4"
              placeholder="Brief Description of an Incident"
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
              placeholder="Brief Description of an Incident"
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
    </div>
  </div>
</template>

<script setup>
const { data: departments } = useFetch("/api/departments");

// Creating Report Incident Logic
const department = ref({
  title: "",
  description: "",
});

const addDepartment = async (department) => {
  try {
    const addedReport = await $fetch("/api/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: department.title,
        description: department.description,
      }),
    });
    if (addedReport) {
      // Reset form fields
      department.title = "";
      department.description = "";

      // Update the list of report
      incidents.value = await $fetch("/api/departments");
    } else {
      console.error("Error adding report:", addedReport);
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
