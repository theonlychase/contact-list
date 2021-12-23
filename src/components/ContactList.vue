<script setup lang="ts">
  import { reactive } from 'vue';
  import ContactListItem from './ContactListItem.vue';
  import { Contact } from './types';

  const contactList: Contact[] = reactive([
    {
      firstName: 'Joe',
      lastName: 'John',
      email: 'joe@john.com',
    },
  ]);
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <contact-list-item
        v-for="contact in contactList"
        :key="contact.email"
        :contact="contact"
      />
    </ul>
  </div>
</template>
