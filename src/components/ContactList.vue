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
    sortBy,
    sortOptions,
  } from './composables';

  provide('currentIndex', currentIndex);
  provide('modalEvents', modalEvents);
  provide('modalType', modalType);
  provide('contact', contact);
  provide('showModal', showModal);
</script>

<template>
  <div class="flex justify-between items-end gap-x-4 mb-6">
    <wc-button @click="setModalType('Add')">
      <template #icon-left>
        <wc-icon name="plus" size="xSmall" />
      </template>
      Add Contact
    </wc-button>

    <wc-listbox
      v-model:value="sortBy"
      class="min-w-[10rem]"
      label="Sort By"
      :options="sortOptions"
    />
  </div>

  <div
    class="bg-white shadow shadow-blue-900/50 overflow-hidden sm:rounded-md mb-6"
  >
    <ul role="list" class="divide-y divide-gray-200">
      <contact-list-item
        v-for="(listItem, itemIndex) in contactList"
        :key="itemIndex"
        :index="itemIndex"
        :item="listItem"
      />
    </ul>
  </div>

  <contact-modal />
</template>
