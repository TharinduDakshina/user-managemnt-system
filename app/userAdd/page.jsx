import React from 'react'
import UserRegistrationForm from "@/components/userRegistrationForm";

export default function page() {
  return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <UserRegistrationForm />
        </div>
      </div>
  )
}

