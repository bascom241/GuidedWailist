import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface ToastModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const ToastModal: React.FC<ToastModalProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-50 flex items-start justify-end p-4">
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <Dialog.Panel className="w-full max-w-sm rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-4">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-base font-semibold text-white">
                {title}
              </Dialog.Title>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white text-xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="mt-3 text-sm text-white/80">
              {content}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ToastModal;
