import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useEmployeeStore = defineStore('employee', () => {
    const employees = ref([]);
    const selectedEmployee = ref(null);
    const isModalOpen = ref(false);

    const fetchEmployees = async () => {
        try {
            const data = await $fetch('/api/employees');
            employees.value = data;
        } catch (error) {
        }
    };

    function openModal() {
        isModalOpen.value = true;
    }

    function closeModal() {
        isModalOpen.value = false;
    }

    function selectEmployee(employee) {
        selectedEmployee.value = employee;
    }

    function updateEmployeeContact(newEmail) {
        if (selectedEmployee.value) {
            selectedEmployee.value.email = newEmail;
        }
    }

    return {
        employees,
        fetchEmployees,
        selectedEmployee,
        isModalOpen,
        selectEmployee,
        openModal,
        closeModal,
        updateEmployeeContact
    };
});
