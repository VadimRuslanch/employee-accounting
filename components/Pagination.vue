<template>
  <div class="flex gap-x-2.5 text-main-color">
    <button
        class="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        @click="prevPage"
        :disabled="page === 1"
    >
      <img src="/img/svg/arrow.svg" alt="Previous">
    </button>

    <button
        v-if="pageControl.showTwoPagesBack"
        class="w-10 h-10 hover:bg-gray-100 rounded-full transition-colors"
        @click="goToPage(page - 2)"
    >
      {{ page - 2 }}
    </button>

    <button
        v-if="pageControl.showPrevButton"
        class="w-10 h-10 hover:bg-gray-100 rounded-full transition-colors"
        @click="goToPage(page - 1)"
    >
      {{ page - 1 }}
    </button>

    <button
        class="w-10 h-10 bg-pagination-color-bg text-white rounded-full outline-none transition-colors hover:bg-opacity-80">
      {{ page }}
    </button>

    <button
        v-if="pageControl.showNextButton"
        class="w-10 h-10 hover:bg-gray-100 rounded-full transition-colors"
        @click="goToPage(page + 1)"
    >
      {{ page + 1 }}
    </button>

    <button
        v-if="pageControl.showTwoPagesForward"
        class="w-10 h-10 hover:bg-gray-100 rounded-full transition-colors"
        @click="goToPage(page + 2)"
    >
      {{ page + 2 }}
    </button>

    <button
        class="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        @click="nextPage"
        :disabled="page === totalPages"
    >
      <img class="rotate-180" src="/img/svg/arrow.svg" alt="Next">
    </button>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['goToPage']);

const pageControl = computed(() => {
  return {
    showPrevButton: props.page > 1 && props.totalPages >= 3,
    showNextButton: props.page < props.totalPages && props.totalPages >= 3,
    showTwoPagesBack: props.page === props.totalPages && props.totalPages > 2,
    showTwoPagesForward: props.page < 2 && props.totalPages > 2,
  };
});

function goToPage(p) {
  emit('goToPage', p);
}

function nextPage() {
  if (props.page < props.totalPages) {
    emit('goToPage', props.page + 1);
  }
}

function prevPage() {
  if (props.page > 1) {
    emit('goToPage', props.page - 1);
  }
}
</script>
