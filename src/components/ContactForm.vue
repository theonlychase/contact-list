<script setup lang="ts">
  import { inject } from 'vue';
  import { setInitialContactState } from './composables';

  const contact = inject('contact');
  const showModal = inject('showModal');
  const modalEvents = inject('modalEvents');
  const modalType = inject('modalType');

  const submit = (): void => {
    modalEvents(contact);
  };

  const cancel = () => {
    if (modalType.value === 'Update') {
      setInitialContactState();
    } else {
      showModal.value = false;
    }
  };
</script>

<template>
  <div v-if="modalType !== 'Remove'" class="grid sm:grid-cols-2 gap-3">
    <wc-input v-model:value="contact.firstName" placeholder="First Name" />
    <wc-input v-model:value="contact.lastName" placeholder="Last Name" />
    <wc-input v-model:value="contact.email" placeholder="Email" />
  </div>

  <div v-else>Are you sure you want to remove this contact?</div>

  <div class="mt-5 sm:mt-4 flex">
    <wc-button
      class="mr-2"
      :class="{
        '!bg-red-500 !border-red-500 hover:!bg-red-600': modalType === 'Remove',
      }"
      @click="submit"
    >
      {{ modalType }}
    </wc-button>

    <wc-button variation="secondary" @click="cancel"> Cancel </wc-button>
  </div>
</template>
