
"use client";

import { useState } from "react";
import Modal from "./components/modal/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 text-center shadow-md">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Accessible Modal
        </h1>

        <p className="mb-6 text-gray-600">
          Accessible and keyboard-friendly modal dialog.
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Open Modal
        </button>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome!"
      >
        <p className="mb-5 text-gray-600">
          This is an accessible modal dialog. You can close it
          using the Escape key or the close button.
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          Close Modal
        </button>
      </Modal>
    </main>
  );
}
