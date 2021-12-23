<script setup lang="ts">
  import { PropType } from 'vue';
  import { Contact } from './types';
  import { WcIcon } from 'wc-ui-library';
  const props = defineProps({
    contact: {
      type: Object as PropType<Contact>,
      default: () => ({
        firstName: '',
        lastName: '',
        email: '',
      }),
    },
  });
</script>

<template>
  <li class="block hover:bg-gray-50 cursor-pointer">
    <div class="px-4 py-4 flex items-center sm:px-6">
      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="truncate">
          <div class="flex text-sm">
            <p class="font-medium text-indigo-600 truncate">
              {{ contact.firstName }} {{ contact.lastName }}
            </p>
          </div>
          <div class="mt-2 flex">
            <div class="flex items-center text-sm text-gray-500">
              <wc-icon name="mail" color="blue400" size="xSmall" />

              <div class="ml-2">
                {{ contact.email }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-5 flex-shrink-0">
        <!-- Heroicon name: solid/chevron-right -->
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </li>
</template>
