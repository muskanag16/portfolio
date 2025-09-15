'use client'
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFocused, setIsFocused] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setIsFocused(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIsFocused(prev => ({ ...prev, [name]: false }));
    
    // Validate field on blur if it has content
    if (value.trim() === '') {
      setErrors(prev => ({ 
        ...prev, 
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` 
      }));
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors(prev => ({ ...prev, [name]: 'Email is invalid' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2 text-white">Message Sent!</h4>
          <p className="text-gray-300 mb-6">{"Thank you for reaching out. I'll get back to you soon."}</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name input */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`block w-full px-4 py-3 bg-gray-700/50 border ${
                errors.name ? 'border-red-500' : 'border-gray-600'
              } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
              placeholder=" "
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-200 ${
                isFocused.name || formData.name
                  ? 'transform -translate-y-[1.1rem] text-xs text-indigo-400'
                  : 'top-3 text-gray-400'
              }`}
            >
              Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.name}</p>
            )}
          </div>

          {/* Email input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`block w-full px-4 py-3 bg-gray-700/50 border ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 ${
                isFocused.email || formData.email
                  ? 'transform -translate-y-[1.1rem] text-xs text-indigo-400'
                  : 'top-3 text-gray-400'
              }`}
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.email}</p>
            )}
          </div>

          {/* Subject input */}
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`block w-full px-4 py-3 bg-gray-700/50 border ${
                errors.subject ? 'border-red-500' : 'border-gray-600'
              } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
              placeholder=" "
            />
            <label
              htmlFor="subject"
              className={`absolute left-4 transition-all duration-200 ${
                isFocused.subject || formData.subject
                  ? 'transform -translate-y-[1.1rem] text-xs text-indigo-400'
                  : 'top-3 text-gray-400'
              }`}
            >
              Subject
            </label>
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.subject}</p>
            )}
          </div>

          {/* Message input */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows={5}
              className={`block w-full px-4 py-3 bg-gray-700/50 border ${
                errors.message ? 'border-red-500' : 'border-gray-600'
              } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none`}
              placeholder=" "
            />
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 ${
                isFocused.message || formData.message
                  ? 'transform -translate-y-[1.5rem] text-xs text-indigo-400'
                  : 'top-3 text-gray-400'
              }`}
            >
              Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;