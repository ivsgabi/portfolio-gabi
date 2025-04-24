'use client';
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Divider from '@mui/material/Divider';
import { VscSend } from "react-icons/vsc";

interface AppGroupConfig {
  buttonLook: string;
}

export default function MailButton({ buttonLook }: AppGroupConfig) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);
  const [form, setForm] = useState({ subject: '', name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const enlargeWindow = () => {
    setIsEnlarge(!isEnlarge);
  };

  const openWindow = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!form.subject || !form.name || !form.email || !form.message) {
      setNotification({ message: "Please fill in all the fields.", type: "error" });
      return;
    }
  
    if (!form.email.includes('@') || !form.email.includes('.')) {
      setNotification({ message: "Please correctly fill the email field.", type: "error" });
      return;
    }
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        setSent(true);
        setNotification({ message: "Message sent successfully.", type: "success" });
        setForm({ subject: '', name: '', email: '', message: '' });
      } else {
        setNotification({ message: "Something went wrong. Please try again.", type: "error" });
      }
    } catch (err) {
      setNotification({ message: "Network error. Please try again.", type: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative group">
        {showNotification && (
          <div className="absolute top-[-10px] right-[0.1] flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full duration-300 group-hover:translate-y-[-10px] z-50">
            <span className="text-[18px]">1</span>
          </div>
        )}
        
        <div className={buttonLook}>
          <Button
            className="h-[85px] w-[85px] rounded-2xl ml-1.5 mt-1.5 transition-transform bg-transparent duration-300 hover:translate-y-[-10px] hover:bg-transparent"
            onClick={openWindow}
          />
        </div>
        
        <div className="absolute bottom-[130%] left-1/2 transform -translate-x-1/2 w-40 transparent-grey text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 text-center pointer-events-none">
          <p className="font-semibold text-sm">Contact me</p>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-all duration-500 ease-out w-[47%] h-[65vh] rounded-[60px] absolute flex justify-center items-center`}
        style={{
          top: isOpen ? "-360%" : "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`${
            isEnlarge
              ? 'fixed mt-12 w-screen h-screen z-[10000]'
              : 'w-[60vw] h-[62vh]'
          } flex items-center justify-center bg-transparent transition-all duration-300`}
        >
          <div
            className={`relative ${
              isEnlarge ? 'w-full h-full' : 'w-full h-[62vh]'
            } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-100 flex items-center justify-between px-4 text-lg font-semibold text-gray-800">
              <div className="flex space-x-2">
                <div
                  className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
                  onClick={openWindow}
                />
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <button
                  className="w-4 h-4 rounded-full bg-green-500 cursor-pointer"
                  onClick={enlargeWindow}
                />
              </div>
              <div className="ml-[-50] text-center w-full">Contact me</div>
            </div>

            <main className="p-5">
              <div className="mb-3 flex items-center">
                <span className="text-[18px] text-gray-400">To:</span>
                <span className="ml-3 text-[18px] text-gray-400 rounded-2xl border border-gray-300 p-2 bg-gray-100">Johana GABA</span>
              </div>
              <Divider sx={{ marginBottom: '10px', borderWidth: 0.2, borderColor: '#e0e0e0' }} />

              <div className="mb-2 flex items-center">
                <span className="text-[18px] text-gray-400">Subject:</span>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="ml-3 text-[18px] bg-transparent border-none focus:ring-0 outline-none placeholder-gray-300"
                  required
                />
              </div>
              <Divider sx={{ marginBottom: '10px', borderWidth: 0.5, borderColor: '#e0e0e0' }} />

              <div className="mb-2 flex items-center">
                <span className="text-[18px] text-gray-400">Name:</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="ml-3 text-[18px] bg-transparent border-none focus:ring-0 outline-none placeholder-gray-300"
                  required
                />
              </div>
              <Divider sx={{ marginBottom: '10px', borderWidth: 0.5, borderColor: '#e0e0e0' }} />

              <div className="mb-2 flex items-center">
                <span className="text-[18px] text-gray-400">From:</span>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="ml-3 text-[18px] bg-transparent border-none focus:ring-0 outline-none placeholder-gray-300"
                  required
                />
              </div>
              <Divider sx={{ marginBottom: '10px', borderWidth: 0.5, borderColor: '#e0e0e0' }} />

              <div className="mb-4 flex items-center">
                <span className="text-[18px] text-gray-400"></span>
                <textarea
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`text-[18px] bg-transparent border-none focus:ring-0 outline-none ${
                    isEnlarge ? 'h-160' : 'h-65' } w-full placeholder-gray-300`}
                  required
                />
              </div>

              <div className="flex justify-end mr-5">
                <button
                  type="submit"
                  className=" bg-gray-200 text-gray-500 py-2 rounded-lg h-15 w-18 hover:bg-gray-300 transition duration-300 border-[2] flex items-center justify-center mb-4"
                  onClick={handleSubmit}
                >
                  <VscSend size={40} />
                </button>
              </div>
              {notification && (
                <div className={`rounded-lg shadow-lg z-[9999] text-center justify-center transition-all duration-300 ease-out transform
                  ${notification.type === 'success' ? 'bg-green-200 border-2 border-green-900' : 'bg-red-200 border-2 border-red-800'}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="px-5 py-2 text-[18px] text-center flex w-full justify-center text-black">{notification.message}</span>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
