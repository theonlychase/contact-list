import { Contact, SortOptions } from '@/components/types';
import { clearValidation } from './validations';
import { reactive, ref, Ref, watch } from 'vue';

const initialContactState: Contact = {
  firstName: '',
  lastName: '',
  email: '',
};

const contactList: Contact[] = reactive([
  {
    firstName: 'Joe',
    lastName: 'John',
    email: 'joe@john.com',
  },
  {
    firstName: 'John',
    lastName: 'James',
    email: 'johnjames@joe.com',
  },
  {
    firstName: 'Adam',
    lastName: 'Doe',
    email: 'adam@doe.com',
  },
]);

const contact: Contact = reactive({ ...initialContactState });
const sortOptions: SortOptions = ['First Name', 'Last Name', 'Email'];
const sortBy = ref('First Name');
const modalType: Ref<string> = ref('');
const showModal: Ref<boolean> = ref(false);
const currentIndex: Ref<number> = ref(-1);

const modalEvents = (value: Contact): void => {
  return modalType.value === 'Add'
    ? addContact(value)
    : modalType.value === 'Update'
    ? updateContact(value)
    : removeContact();
};

const addContact = (value: Contact): void => {
  if (Object.values(value).every((val) => val.length > 0)) {
    contactList.push({ ...value });
    selected(sortBy.value);
    setInitialContactState();
  }
};

const removeContact = (): void => {
  contactList.splice(currentIndex.value, 1);
  setInitialContactState();
};

const updateContact = (value: Contact): void => {
  const current = { ...value };
  contactList.splice(currentIndex.value, 1, current);
  setInitialContactState();
};

const setModalType = (type): void => {
  modalType.value = type;
  showModal.value = true;
};

const setInitialContactState = (): void => {
  Object.assign(contact, initialContactState);
  showModal.value = false;
};

const sort = (contactKey) => {
  contactList.sort((a, b) => {
    const firstKey = a[contactKey].toLowerCase();
    const secondKey = b[contactKey].toLowerCase();

    return firstKey > secondKey ? 1 : firstKey < secondKey ? -1 : 0;
  });
};

const selected = (value) => {
  if (value.includes('First')) {
    sort('firstName');
  } else if (value.includes('Last')) {
    sort('lastName');
  } else {
    sort('email');
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (!value && modalType.value === 'Update') {
      setInitialContactState();
    }
    clearValidation();
  },
);
watch(
  () => sortBy.value,
  (value) => {
    selected(value);
  },
  { immediate: true },
);

export {
  contact,
  contactList,
  currentIndex,
  initialContactState,
  modalEvents,
  modalType,
  setInitialContactState,
  setModalType,
  showModal,
  sortBy,
  sortOptions,
};
