"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { authStore } from '../../../store/useAuthStore';

import ToastModal from '../ToastModal';
interface FormProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Form: React.FC<FormProps> = ({ isOpen, setIsOpen }) => {
    const { addToWaitList, addingUser, message, error } = authStore();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [localError, setLocalError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            setLocalError('Full name is required');
            return false;
        }
        if (!formData.email.trim()) {
            setLocalError('Email is required');
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setLocalError('Please enter a valid email');
            return false;
        }
        setLocalError('');
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {


            const success = await addToWaitList(formData);
            if (!success) {
                setLocalError('Failed to join waitlist. Please try again.');
       
                setFormData({
                    fullName: '',
                    email: '',
                    message: ''
                });
                return;
            } else {
                setIsOpen(true);
                setFormData({
                    fullName: '',
                    email: '',
                    message: ''
                });
            }
            // Clear form on successful submission

        } catch (err) {
            console.error('Submission error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black p-6 rounded-2xl shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Join the Waitlist</h2>

            {localError && <p className="text-red-500 text-center">{localError}</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {message &&
                <ToastModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="You're on the GuidEd Waitlist!"
                    content={
                        <div>
                            <p className="mb-2">
                                🎉 <strong>Thank you for signing up!</strong> You’re one step closer to experiencing the future of personalized, AI-powered learning with <strong>GuidEd</strong>.
                            </p>
                            <p className="mb-2">
                                Please check your email — we’ve sent a confirmation message to welcome you. 📩 Make sure to open it so you don't miss important updates about our launch.
                            </p>
                            <p className="mb-2">
                                We’re building something truly special, and we’d love for you to be part of it. 🌟 Share GuidEd with friends, classmates, and colleagues — help us grow our learning community!
                            </p>
                            <p className="font-semibold">
                                Together, we’re creating smarter, more personalized education for everyone. 🚀
                            </p>
                        </div>
                    }
                />


            }

            <input
                type="text"
                name="fullName"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
                name="message"
                placeholder="Your Message (Optional)"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
                type="submit"
                disabled={addingUser}
                className={`w-full p-3 rounded-lg font-semibold transition-colors ${addingUser
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                    }`}
            >
                {addingUser ? 'Submitting...' : 'Join Waitlist'}
            </button>

        </form>
    );
};

export default Form;