import { Contact } from '@/components/types';
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
]);

const contact: Contact = reactive({ ...initialContactState });

const modalType: Ref<string> = ref('');
const showModal: Ref<boolean> = ref(false);
const currentIndex: Ref<number> = ref(-1);

const addContact = (value: Contact): void => {
  if (Object.values(value).every((val) => val.length > 0)) {
    contactList.push({ ...value });
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

const modalEvents = (value: Contact): void => {
  return modalType.value === 'Add'
    ? addContact(value)
    : modalType.value === 'Update'
    ? updateContact(value)
    : removeContact();
};

const setModalType = (type): void => {
  modalType.value = type;
  showModal.value = true;
};

const setInitialContactState = (): void => {
  Object.assign(contact, initialContactState);
  showModal.value = false;
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
};
