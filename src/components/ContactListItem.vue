<script setup lang="ts">
  import { inject, PropType, Ref } from 'vue';
  import { initialContactState, setModalType } from '@/components/composables';
  import { Contact } from './types';

  const props = defineProps({
    index: {
      type: Number,
      default: -1,
    },
    item: {
      type: Object as PropType<Contact>,
      default: (): Contact => initialContactState,
    },
  });

  const contact = inject('contact') as Contact;
  const currentIndex = inject('currentIndex') as Ref<number>;

  const modifyContact = (type) => {
    setModalType(type);
    currentIndex.value = props.index;

    if (type === 'Update') {
      Object.assign(contact, props.item);
    }
  };
</script>

<template>
  <li class="block hover:bg-gray-50">
    <div class="px-4 py-4 flex items-center sm:px-6">
      <div
        class="min-w-[4rem] flex-1 sm:flex sm:items-center sm:justify-between"
      >
        <div class="truncate">
          <div class="flex text-sm">
            <p class="font-medium text-indigo-600 truncate">
              {{ item.firstName }} {{ item.lastName }}
            </p>
          </div>
          <div class="mt-2">
            <div class="flex items-center text-sm text-gray-500">
              <wc-icon
                name="mail"
                color="blue400"
                size="xSmall"
                class="flex-shrink-0"
              />

              <div class="ml-2 truncate">
                {{ item.email }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <wc-button
          size="small"
          class="mr-2"
          variation="secondary"
          @click="modifyContact('Update')"
        >
          Update
        </wc-button>

        <wc-button
          class="!bg-red-500 !border-red-500 hover:!bg-red-600"
          size="small"
          @click="modifyContact('Remove')"
        >
          Remove
        </wc-button>
      </div>
    </div>
  </li>
</template>
