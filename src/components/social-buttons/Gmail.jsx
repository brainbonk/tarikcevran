"use client";
import React, { useState } from 'react';
import { CONTACT_INFO } from '@/constants/contact';

export default function Gmail() {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        try {
            navigator.clipboard.writeText(CONTACT_INFO.gmailLink);
            console.info("Copied the email: " + CONTACT_INFO.gmailLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            console.error("Failed to copy email:", err);
            setCopied(false);
        }
    }

    return (
        <a href="#" title="Gmail Tarık ÇEVRAN" rel="noopener noreferrer" onClick={() => handleClick()}
            className="relative bg-gray-400 p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100">
            {!copied ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72"
                fill="none">
                <path
                    d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"
                    fill="#111827" />
                <path
                    d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"
                    fill="#111827" />
                <path
                    d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"
                    fill="#111827" />
                <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"
                    fill="#111827" />
                <path
                    d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"
                    fill="#111827" />
            </svg>) : (
                <>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm transition-all duration-300 whitespace-nowrap border border-gray-500">
                        Copied the email
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </>
            )}
        </a>
    );
}