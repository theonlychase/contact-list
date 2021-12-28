<script setup lang="ts">
  import { inject, watch, Ref } from 'vue';
  import { isValidated, validations } from './validations';
  import { Contact } from './types';

  const contact = inject('contact') as Contact;
  const showModal = inject('showModal');
  const modalEvents = inject('modalEvents') as any;
  const modalType = inject('modalType') as Ref<string>;
  const { firstName, lastName, email } = validations;

  watch(
    () => [contact.firstName, contact.lastName, contact.email],
    (newVal, oldVal) => {
      Object.keys(validations).forEach((key, index) => {
        if (newVal[index] !== oldVal[index]) {
          isValidated({ [key]: newVal[index] });
        }
      });
    },
  );

  const submit = (): void => {
    if (modalType.value === 'Remove') {
      return modalEvents(contact);
    }

    const validated = isValidated(contact);
    validated && modalEvents(contact);
  };
</script>

<template>
  <div v-if="modalType !== 'Remove'" class="grid sm:grid-cols-2 gap-4">
    <wc-input
      v-model:value="contact.firstName"
      icon-left="pencil"
      placeholder="First Name"
      :error="Boolean(firstName.error)"
      :error-message="firstName.error"
    />
    <wc-input
      v-model:value="contact.lastName"
      icon-left="pencil"
      placeholder="Last Name"
      :error="Boolean(lastName.error)"
      :error-message="lastName.error"
    />
    <wc-input
      v-model:value="contact.email"
      custom-classes="col-span-full"
      icon-left="mail"
      placeholder="Email"
      :error="Boolean(email.error)"
      :error-message="email.error"
    />
  </div>

  <div v-else>Are you sure you want to remove this contact?</div>

  <div class="mt-5 flex">
    <wc-button
      class="mr-2"
      :variation="modalType === 'Remove' ? 'error' : 'primary'"
      @click="submit"
    >
      {{ modalType }}
    </wc-button>

    <wc-button variation="white" @click="showModal = false"> Cancel </wc-button>
  </div>
</template>
