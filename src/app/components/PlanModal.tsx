'use client';
import React from 'react';
import { Dialog } from '@headlessui/react';

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}
const PlanModal: React.FC<PlanModalProps> = ({ isOpen, onClose, planName }) => {
    const handleCheckout = async () => {
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        planName: planName, // asegúrate que esta variable esté definida correctamente
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // Redirige a Stripe Checkout
    } else {
      console.error("Stripe error:", data.error || "Unknown error");
    }
  } catch (error) {
    console.error("Checkout error:", error);
  }
};
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-xl font-bold mb-2">Confirm Your Plan</Dialog.Title>
          <Dialog.Description className="mb-4">
            You selected the <strong>{planName}</strong> plan. Please fill in your information to continue.
          </Dialog.Description>

          
          <form action="https://formsubmit.co/robert@rfadatainsights.com" method="POST" className="space-y-3" >
            <input type="text" name="full name" placeholder="Full Name" className="w-full border p-2 rounded" />
            <input type="email" name="email" placeholder="Email" className="w-full border p-2 rounded" />
            <input type="tel" name="phone" placeholder="Phone Number" className="w-full border p-2 rounded" />
            <input type="text" name="company" placeholder="Company Name" className="w-full border p-2 rounded" />

            {/* Aquí se puede integrar Stripe o Paypal después */}
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Proceed to Payment
            </button>
            </form>
          <div className="mt-4 flex justify-between">
          <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">
            Cancel
          </button>
          <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Pay plan
            </button>
            </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PlanModal;


