<script setup lang="ts">
  import { inject } from 'vue';

  const showModal = inject('showModal');
  const modalType = inject('modalType');
</script>

<template>
  <wc-modal v-model:value="showModal">
    <div class="sm:flex sm:items-start">
      <div class="mt-2 text-center sm:ml-4 sm:text-left">
        <h3
          id="modal-title"
          class="text-xl leading-6 font-medium text-gray-900 mb-3"
        >
          {{ modalType }} Contact
        </h3>

        <contact-form />
      </div>
    </div>
  </wc-modal>
</template>
