<template>
  <main>
    <div class="pt-24 relative max-w-screen-xl mx-auto xl-max:px-10">
      <span class="font-sans text-3xl leading-9">Сотрудники</span>

      <div class="min-h-[628px] mt-6 mb-4" v-if="paginatedEmployees">
        <table class="w-full border border-custom-border bg-white border-spacing-4">
          <thead class="border">
          <tr>
            <th class="pl-8 pr-0 py-4">Сотрудник</th>
            <th class="pl-4 px-0 py-4">Должность</th>
            <th class="pl-4 px-0 py-4">Email</th>
            <th class="pl-4 px-0 py-4">С нами в команде</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="employee in paginatedEmployees" :key="employee.id" class="border">
            <td @click="openModal(employee)" class="employee-cell">
              <NuxtImg v-if="employee.avatar" :src="employee.avatar" alt="avatar" class="avatar"/>
              <span v-else class="avatar-placeholder"/>
              <span class="cursor-pointer">{{ employee.name }}</span>
            </td>
            <td class="py-2 pl-4 text-secondary-color">{{ employee.position }}</td>
            <td class="py-2 text-secondary-color">{{ employee.email }}</td>
            <td class="py-2 text-tertiary-color">{{ employee.timeInCompany }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p v-else>Загрузка данных сотрудников...</p>

      <Pagination :page="page" :totalPages="totalPages" @goToPage="goToPage"/>
    </div>

    <EmployeeModal/>
  </main>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {useEmployeeStore} from '@/stores/employeeStore';
import Pagination from '@/components/Pagination.vue';

const employeesPerPage = 10;
const route = useRoute();
const router = useRouter();
const page = ref(+route.query.page || 1);
const employeeStore = useEmployeeStore();

onMounted(() => {
  employeeStore.fetchEmployees();
});

const paginatedEmployees = computed(() => {
  const start = (page.value - 1) * employeesPerPage;
  return employeeStore.employees.slice(start, start + employeesPerPage);
});

function calculateTotalPages() {
  return Math.ceil(employeeStore.employees.length / employeesPerPage);
}

const totalPages = computed(() => calculateTotalPages());

function goToPage(p) {
  page.value = p;
  updateUrl();
}

function updateUrl() {
  router.push({query: {page: page.value}});
}

function openModal(employee) {
  employeeStore.selectEmployee(employee);
  employeeStore.openModal();
}
</script>

<style scoped>
.employee-cell {
  @apply px-0 py-2 text-main-color flex items-center gap-4 pl-8 max-w-[532px] break-words cursor-pointer hover:bg-gray-100 transition-colors;
}

.avatar {
  @apply border rounded-full border-white w-10 h-10 overflow-hidden min-w-[40px];
}

.avatar-placeholder {
  @apply w-10 h-10 block bg-avatar-color rounded-full;
}
</style>
