<script setup lang="ts">
  import { provide } from 'vue';
  import {
    contact,
    contactList,
    currentIndex,
    modalEvents,
    modalType,
    setModalType,
    showModal,
  } from './composables';

  provide('currentIndex', currentIndex);
  provide('modalEvents', modalEvents);
  provide('modalType', modalType);
  provide('contact', contact);
  provide('showModal', showModal);
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md mb-6">
    <ul role="list" class="divide-y divide-gray-200">
      <contact-list-item
        v-for="(listItem, itemIndex) in contactList"
        :key="itemIndex"
        :index="itemIndex"
        :item="listItem"
      />
    </ul>
  </div>

  <wc-button class="mx-auto" @click="setModalType('Add')">
    Add Contact
  </wc-button>

  <contact-modal />
</template>
