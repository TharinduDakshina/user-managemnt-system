"use client"

import {useState} from "react"
import Notification from "@/components/notification";
import {useRouter} from "next/navigation";

export default function UserRegistrationForm() {

    const [isSubmit, setIsSubmit] = useState(false);
    const [submitResponse, setSubmitResponse] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", userName: "", email: "", password: "", role: "", status: "Active",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev, [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setIsSubmit(!isSubmit)
        // handle ths submit response match
        setSubmitResponse(true)

        setTimeout(() => {
            handleCloseNotification();
            setFormData({
                firstName: "", lastName: "", userName: "", email: "", password: "", role: "", status: "Active",
            })
            router.push("/")
        }, 2000);
    }

    const handleCloseNotification = ()=>{
        setIsSubmit(false)
    }

    return (<div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* User Name */}
                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                        User Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        required
                        value={formData.userName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Role */}
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Role<span className="text-red-500">*</span>
                    </label>
                    <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            bg-white appearance-none"
                    >
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Status<span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6">
                        <div className="flex items-center pl-20">
                            <input
                                id="active"
                                name="status"
                                type="radio"
                                value="Active"
                                checked={formData.status === "Active"}
                                onChange={handleInputChange}
                                className="h-4 w-4 pl-14 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                                Active
                            </label>
                        </div>
                        <div className="flex items-center pl-14">
                            <input
                                id="inactive"
                                name="status"
                                type="radio"
                                value="Inactive"
                                checked={formData.status === "Inactive"}
                                onChange={handleInputChange}
                                className="h-4 w-4  text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label htmlFor="inactive" className="ml-2 block text-sm text-gray-700">
                                Inactive
                            </label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {isSubmit && (
                <div className="absolute top-25 right-2 ">
                    <Notification status={submitResponse}/>
                </div>
            )}
        </div>

    )
}
