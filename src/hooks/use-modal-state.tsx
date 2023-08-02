import { useState } from 'react';

export const useModalState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(prevState => !prevState);

  return { isOpen, closeModal, openModal, toggleModal };
};
