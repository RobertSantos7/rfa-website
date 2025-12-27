'use client';
import React from 'react';
import { Dialog } from '@headlessui/react';

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

const PlanModal: React.FC<PlanModalProps> = ({ isOpen, onClose, planName }) => {
  
  // Borramos handleCheckout porque ya no existe el endpoint /api/checkout

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-xl font-bold mb-2">Confirm Your Plan</Dialog.Title>
          <Dialog.Description className="mb-4">
            You selected the <strong>{planName}</strong> plan. Please fill in your information to continue.
          </Dialog.Description>
          
          {/* El formulario funciona perfecto para Landing Page */}
          <form action="https://formsubmit.co/robert@rfadatainsights.com" method="POST" className="space-y-3">
            {/* Truco: campo oculto para saber qué plan querían */}
            <input type="hidden" name="selected_plan" value={planName} />
            
            <input type="text" name="full name" placeholder="Full Name" required className="w-full border p-2 rounded" />
            <input type="email" name="email" placeholder="Email" required className="w-full border p-2 rounded" />
            <input type="tel" name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" />
            <input type="text" name="company" placeholder="Company Name" className="w-full border p-2 rounded" />

            {/* Este botón ahora es el principal */}
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Request Plan Info
            </button>
          </form>

          <div className="mt-4 flex justify-end">
            <button onClick={onClose} className="text-sm text-gray-500 hover:underline">
              Cancel
            </button>
            {/* Borramos el botón "Pay plan" que causaba el error */}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PlanModal;
