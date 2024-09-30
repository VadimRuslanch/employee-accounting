<template>
  <transition
      name="fade"
      appear
      mode="out-in"
  >
    <div ref="modalRef"
         @click.self="closeModal"
         @keyup.esc="closeModal"
         tabindex="0"
         v-if="isModalOpen"
         class="absolute top-0 left-0 inset-0 bg-main-bg-color outline-none">
      <div class="max-w-[875px] mt-24 mx-auto" @click.stop>
        <p class="mb-6 text-main-color text-3xl">{{ selectedEmployee.name }}</p>
        <div class="bg-white border border-custom-border p-8 flex gap-6 flex-col">
          <span class="text-xl">Основные данные</span>
          <div class="text-sm flex gap-4">
            <span class="text-additional-popup-color w-[90px]">Должность:</span>
            <span class="text-main-color">{{ selectedEmployee.position }}</span>
          </div>
          <div class="text-sm flex gap-4">
            <span class="text-additional-popup-color w-[90px]">В команде:</span>
            <span>{{ selectedEmployee.timeInCompany }}</span>
          </div>
          <div class="text-sm flex flex-col gap-4">
            <span class="text-xl">Контактные данные</span>
            <div class="flex gap-4">
              <label class="text-additional-popup-color w-[90px]">Email:</label>

              <input
                  v-if="isEdit"
                  v-model="newEmail"
                  @keyup.enter="saveContact"
                  :style="{ width: inputWidth + 'px' }"
                  @input="adjustWidth"
                  class="outline-none block bg-gray-50 border-b"
              />
              <span v-else>{{ selectedEmployee.email }}</span>

              <button class="w-5 h-5 outline-none hover:bg-gray-100 transition-colors rounded-full" @click="toggleEdit">
                <img src="@/public/img/svg/edit.svg" alt="icon-edit">
              </button>

              <span ref="emailWidthRef" class="invisible absolute whitespace-nowrap">{{ newEmail }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import {ref, watch, computed, nextTick} from 'vue';
import {useEmployeeStore} from '@/stores/employeeStore';

const store = useEmployeeStore();
const isModalOpen = computed(() => store.isModalOpen);
const selectedEmployee = computed(() => store.selectedEmployee);
const newEmail = ref('');
const modalRef = ref(null);
const isEdit = ref(false);
const inputWidth = ref(0);
const emailWidthRef = ref(null);

const toggleEdit = () => {
  if (!isEdit.value) {
    newEmail.value = selectedEmployee.value.email;
  }
  isEdit.value = !isEdit.value;
  adjustWidth();
};

const adjustWidth = () => {
  if (emailWidthRef.value) {
    inputWidth.value = emailWidthRef.value.offsetWidth;
  }
};

watch(selectedEmployee, (newEmployee) => {
  newEmail.value = newEmployee?.email || '';
  adjustWidth();
});

watch(isModalOpen, async (newVal) => {
  if (newVal) {
    await nextTick();
    if (modalRef.value) {
      modalRef.value.focus();
    }
    adjustWidth();
  }
});

const closeModal = () => {
  if (isEdit.value) {
    newEmail.value = selectedEmployee.value.email;
    isEdit.value = false;
  }
  store.closeModal();
};

const saveContact = () => {
  store.updateEmployeeContact(newEmail.value);
  isEdit.value = false;
  closeModal();
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, transform 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-from .modal__content, .fade-leave-to .modal__content {
  transform: scale(0.6);
}

.fade-enter-to .modal__content, .fade-leave-from .modal__content {
  transform: scale(1);
}

.modal__content {
  transform-origin: center;
}

.invisible {
  visibility: hidden;
}
</style>
