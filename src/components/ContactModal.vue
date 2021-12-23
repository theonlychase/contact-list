<script setup lang="ts">
  import { inject } from 'vue';

  const showModal = inject('showModal');
  const modalType = inject('modalType');
</script>

<template>
  <wc-modal v-model:value="showModal">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          id="modal-title"
          class="text-lg leading-6 font-medium text-gray-900"
        >
          {{ modalType }} Contact
        </h3>
        <div class="mt-2">
          <contact-form />
        </div>
      </div>
    </div>
  </wc-modal>
</template>
