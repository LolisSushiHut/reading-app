// #region Section One - Resources 
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

// --- Global Variables ---
export const appId = 'fablee-local-app';

// --- Contexts ---
export const AuthContext = createContext(null);
export const ThemeContext = createContext(null);
export const FontSizeContext = createContext(null);

// --- Custom Hooks ---
export const useAuth = () => useContext(AuthContext);
export const useTheme = () => useContext(ThemeContext);
export const useFontSize = () => useContext(FontSizeContext);

// --- Global Color Definitions ---
export const ACCENT_RED = '#fb3647';
export const ACCENT_RED_HOVER = '#d62828';
export const LIGHT_MODE_PRIMARY_RED = '#ff6b6b';
export const LIGHT_MODE_PRIMARY_RED_DARKER = '#e05252';
export const LIGHT_MODE_TOGGLE_COLOR = '#ff8c94';
export const PRIMARY_BUTTON_GRADIENT_DARK = `linear-gradient(to right, ${ACCENT_RED}, #A01B26)`;
export const PRIMARY_BUTTON_HOVER_GRADIENT_DARK = `linear-gradient(to right, ${ACCENT_RED_HOVER}, #8B151F)`;
export const PRIMARY_BUTTON_GRADIENT_LIGHT = `linear-gradient(to right, ${LIGHT_MODE_PRIMARY_RED}, ${LIGHT_MODE_PRIMARY_RED_DARKER})`;
export const PRIMARY_BUTTON_HOVER_GRADIENT_LIGHT = `linear-gradient(to right, ${LIGHT_MODE_PRIMARY_RED_DARKER}, #c03939)`;
export const SECONDARY_BUTTON_LIGHT_BG = '#E0E0E0';
export const SECONDARY_BUTTON_LIGHT_HOVER_BG = '#C0C0C0';
export const SECONDARY_BUTTON_DARK_BG = '#333333';
export const SECONDARY_BUTTON_DARK_HOVER_BG = '#444444';
export const SECONDARY_BUTTON_TEXT_LIGHT = '#272727';
export const SECONDARY_BUTTON_TEXT_DARK = '#dddddd';

// --- SVG Icons (Combined and Updated) ---

// Updated icons (new versions replace old ones)
export const HeartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.835 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const CommentIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.756 3 12c0 1.087.333 2.126.932 3.012l-.826 1.416A.75.75 0 002.37 17.2c.211.03.43.023.633-.017l3.243-1.071A9.016 9.016 0 0012 20.25z" />
    </svg>
);

export const ShareIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186A.75.75 0 017.5 12.25c0 .542-.458.992-1.006.992-.547 0-.994-.45-.994-.992a.75.75 0 01.283-.585m1.516 1.516a2.25 2.25 0 010 2.186m0-2.186a.75.75 0 00.283-.585c0-.542-.458-.992-1.006-.992-.547 0-.994.45-.994.992a.75.75 0 00.283.585m-1.516-1.516H18a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 6.75v5.5a2.25 2.25 0 002.25 2.25h1.717z" />
    </svg>
);

export const UserPlusIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.5h.008v.008h-.008V7.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM11.25 12.75h.008v.008h-.008V12.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 18.75h.008v.008H12v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM6.75 12.75h.008v.008H6.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 6.75h.008v.008H12V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM6.75 6.75h.008v.008H6.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 10.5a3 3 0 11-6 0 3 3 0 016 0zM16.5 18v-2.25c0-.621-.504-1.125-1.125-1.125H9.375A1.125 1.125 0 018.25 15.75V18h1.5v-1.125a.375.375 0 01.375-.375h2.25a.375.375 0 01.375.375V18h1.5z" />
    </svg>
);

export const CheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const XMarkIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const PaperAirplaneIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A5.996 5.996 0 0112 3.126c2.871 0 5.432 1.374 7.07 3.5m1.68 1.68L21 12m0 0l-1.68 1.68M12 21l-1.68-1.68m0 0L3.269 12M6 12h8.25" />
    </svg>
);

export const LinkIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

export const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.907L12 17.252 2.91 8.907a2.25 2.25 0 01-1.07-1.907V6.75" />
    </svg>
);

export const LibraryBookIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0V7.5a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75V19a.75.75 0 01-1.5 0v-.25a.75.75 0 01.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.5a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 7.5v10.5a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18V7.5z" />
    </svg>
);

export const BellIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7C18 6.279 15.464 4 12.25 4S6.5 6.279 6.5 9.05v.7a8.967 8.967 0 01-2.312 5.022 23.848 23.848 0 005.454 1.31m5.215 0a3 3 0 11-5.715 0m5.715 0a3.022 3.022 0 00-5.715 0" />
    </svg>
);

export const ArrowLeftIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

export const HomeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
);

export const EyeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const FacebookIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.03C6.5 2.03 2 6.53 2 12.03c0 5.01 3.65 9.18 8.44 9.93v-7h-2.54v-2.93h2.54V9.03c0-2.5 1.53-3.87 3.78-3.87 1.09 0 2.05.08 2.32.12v2.67h-1.63c-1.26 0-1.5.6-1.5 1.47v1.92h2.98l-.49 2.93h-2.49v7.35c4.79-.75 8.44-4.92 8.44-9.93 0-5.5-4.5-10-10-10z" />
    </svg>
);

export const TwitterIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.46 6c-.77.34-1.6.56-2.48.66.89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.3 7.42 3.3 4.75c-.36.62-.56 1.35-.56 2.14 0 1.49.75 2.81 1.88 3.59-.69-.02-1.34-.21-1.91-.53v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08 1.48 4.09 4.6 7.09 8.68 7.16-1.47 1.16-3.33 1.85-5.36 1.85-.35 0-.69-.02-1.03-.06C5.07 22.09 8.5 23 12.18 23c4.26 0 8.3-2.92 8.3-8.31 0-.13-.01-.26-.02-.39.91-.65 1.7-1.47 2.32-2.4z" />
    </svg>
);

export const InstagramIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2.2C5.5 4.2 4.2 5.5 4.2 7.6v8.8c0 2.1 1.3 3.4 3.4 3.4h8.8c2.1 0 3.4-1.3 3.4-3.4V7.6c0-2.1-1.3-3.4-3.4-3.4H7.6z" />
        <path d="M12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7.3c-1.54 0-2.8-1.25-2.8-2.8s1.25-2.8 2.8-2.8 2.8 1.25 2.8 2.8-1.25 2.8-2.8 2.8z" />
        <circle cx="17.2" cy="6.8" r="1.2" />
    </svg>
);

// Original icons that didn't have replacements
export const SearchIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0017 10a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>);

export const PlusCircleIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>);

export const UserIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>);

export const BookmarkSolidIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>);

export const EditIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41zM2 20h20v2H2v-2z"></path></svg>);

export const LockOpenIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></svg>);

export const LockClosedIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-8H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"></path></svg>);

export const BookOpenIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 9H4v-2h16v2zm0-4H4V7h16v2z"></path></svg>);

export const PlusIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>);

export const TrashIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>);

export const SunIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5c-2.09 0-3.99.78-5.45 2.05l1.41 1.41C9.28 4.59 10.53 4 12 4s2.72.59 3.84 1.55l1.41-1.41C15.99 2.78 14.09 2 12 2zM3 12c0 2.09.78 3.99 2.05 5.45l1.41-1.41C4.59 14.72 4 13.47 4 12s.59-2.72 1.55-3.84L3.05 6.55C1.78 8.01 1 9.91 1 12zm18 0c0-2.09-.78-3.99-2.05-5.45l-1.41-1.41C19.41 9.28 20 10.53 20 12s-.59 2.72-1.55 3.84l1.41 1.41C22.22 15.99 23 14.09 23 12zM12 21c2.09 0 3.99-.78 5.45-2.05l-1.41-1.41C14.72 19.41 13.47 20 12 20s-2.72-.59-3.84-1.55L6.55 19.45C8.01 22.22 9.91 23 12 23z"></path></svg>);

export const MoonIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.75-.41-1.02-.23-.28-.36-.67-.36-1.07 0-.97.78-1.75 1.75-1.75S15 14.38 15 15.35c0 .39.15.75.41 1.02-.23-.28-.36.67-.36 1.07 0 .83.67 1.5 1.5 1.5 4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></svg>);

export const FontSizeDecreaseIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.12 14L7.5 7.67 9.88 14H5.12zM12 17l-1.63-4.36h-3.49L12 17zm7.5-10h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"></path></svg>);

export const FontSizeIncreaseIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.12 14L7.5 7.67 9.88 14H5.12zM12 17l-1.63-4.36h-3.49L12 17zm7.5-10h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zM12 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V6c0-1.1-.9-2-2-2z"></path></svg>);

export const ClockBookmarkIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 13H11V7h1.5v8zM17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>);

export const CameraIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.2c1.77 0 3.2-1.43 3.2-3.2s-1.43-3.2-3.2-3.2S8.8 10.23 8.8 12s1.43 3.2 3.2 3.2zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg>);

export const StarIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>);

export const MessageCircleIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path></svg>);

export const ImagePlusIcon = ({ className = "w-6 h-6" }) => (<svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5zM15 9h-2V7h-2v2H9v2h2v2h2v-2h2V9z"></path></svg>);

// --- Local Data Store (Enhanced In-memory mock database) ---
export const localDb = {
    users: {
        'user-aria-thorne': {
            id: 'user-aria-thorne',
            email: 'aria@fablee.com',
            username: 'ariathorne',
            password: 'password123',
            bio: 'Author of fantasy tales and builder of worlds.',
            profilePictureUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
            createdAt: new Date('2023-01-15').toISOString(),
            likedBooks: ['book2', 'book3'],
            savedBooks: ['book1', 'book4'],
            followedUsers: ['user-ethan-vance'],
            followers: ['user-ethan-vance'], // Example: Ethan follows Aria
            publishedBooks: ['book1'],
            selectedGenres: ['Mystery', 'Fantasy'], // Ensure this is an array
            commentsLiked: {}, // NEW: Object to store liked comment IDs
        },
        'user-ethan-vance': {
            id: 'user-ethan-vance',
            email: 'ethan@fablee.com',
            username: 'ethanvance',
            password: 'password123',
            bio: 'Explorer of ancient mysteries and writer of thrilling adventures.',
            profilePictureUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
            createdAt: new Date('2023-02-20').toISOString(),
            selectedGenres: ['Mystery', 'Thriller', 'Adventure'],
            likedBooks: ['book1'],
            savedBooks: [],
            followedUsers: ['user-aria-thorne'],
            followers: ['user-aria-thorne'], // Example: Aria follows Ethan
            publishedBooks: ['book2'],
            commentsLiked: {}, // NEW: Object to store liked comment IDs
        },
    },
    books: {
        'book1': {
            id: 'book1',
            cover: 'https://images.unsplash.com/photo-1543002588-ef63d1c47a83?fit=crop&w=400&h=600&q=80',
            title: 'The Enigmatic Echo',
            author: 'Anya Sharma',
            authorId: 'user-aria-thorne', // Added authorId
            authorPic: 'https://randomuser.me/api/portraits/women/44.jpg',
            blurb: 'A young detective uncovers a centuries-old mystery hidden within the walls of a forgotten library. Every whisper echoes a forgotten secret, leading her deeper into a web of deceit and ancient curses.',
            fullBlurb: 'Deep in the heart of a bustling metropolis lies a library untouched by time, its shelves laden with books that hold more than just stories. When a series of inexplicable events plague the city, a sharp-witted detective, Elara Vance, finds herself drawn to the library\'s cryptic allure. She discovers a hidden chamber, a diary written in an unknown script, and a lineage of guardians who protected a powerful secret. As she deciphers the clues, Elara realizes that the past is not just history but a living echo, threatening to unravel the fabric of her reality. She must race against time to solve the enigma before the ancient curse consumes everything she knows.',
            hashtags: ['Mystery', 'Thriller', 'AncientSecrets', 'Detective'], // Cleaned hashtags
            likes: 120,
            commentsCount: 35,
            views: 5000, // Added views
            genre: 'Mystery',
            pages: 320,
            language: 'English',
            firstChapterName: 'The Whispering Walls', // Added first chapter name
            chapters: [{ id: 1, name: 'The Whispering Walls', pages: 30 }, { id: 2, name: 'Echoes of the Past', pages: 40 }]
        },
        'book2': {
            id: 'book2',
            cover: 'https://images.unsplash.com/photo-1579783902671-9c6753066606?fit=crop&w=400&h=600&q=80',
            title: 'Stars of Aethel',
            author: 'Kaelen Thorne',
            authorId: 'user-ethan-vance', // Added authorId
            authorPic: 'https://randomuser.me/api/portraits/men/32.jpg',
            blurb: 'In a galaxy far, far away, a lone pilot discovers an ancient artifact that could change the fate of the universe. Betrayed by his own, he must unite disparate factions against a looming cosmic threat.',
            fullBlurb: 'Elias Vance, a rogue pilot with a troubled past, stumbles upon the relic of a long-lost civilization on a barren moon. Unbeknownst to him, this artifact, the "Heart of Aethel," holds the key to boundless energy and ultimate destruction. When powerful galactic factions learn of its existence, Elias becomes a hunted man. Forced into an unlikely alliance with a rebellious princess and a wise- cracking alien, he embarks on a perilous journey across the cosmos. They must navigate treacherous asteroid fields, evade relentless pursuers, and decipher ancient prophecies to unlock the Heart\'s true power and prevent it from falling into the wrong hands, which would surely plunge the galaxy into an eternal night.',
            hashtags: ['Scifi', 'SpaceOpera', 'Adventure', 'GalacticEmpire'], // Cleaned hashtags
            likes: 90,
            commentsCount: 20,
            views: 3200, // Added views
            genre: 'Sci-Fi',
            pages: 410,
            language: 'English',
            firstChapterName: 'The Rogue Pilot', // Added first chapter name
            chapters: [{ id: 1, name: 'The Rogue Pilot', pages: 50 }, { id: 2, name: 'Galactic Frontiers', pages: 60 }]
        },
        'book3': {
            id: 'book3',
            cover: 'https://images.unsplash.com/photo-1593325605928-85885e353272?fit=crop&w=400&h=600&q=80',
            title: 'Whispers in the Willow',
            author: 'Elara Vance',
            authorId: 'user-aria-thorne', // Assuming Elara Vance is also Aria Thorne for simplicity
            authorPic: 'https://randomuser.me/api/portraits/women/67.jpg',
            blurb: 'A haunting tale of love, loss, and redemption set in a secluded village shrouded in mist. Unravel the secrets of the ancient Willow tree and the spirits it guards.',
            fullBlurb: 'The village of Oakhaven is perpetually cloaked in a chilling mist, and at its heart stands the ancient Willow, a tree rumored to be a gateway to the spirit world. Anya, a young woman burdened by a past tragedy, returns to her ancestral home in Oakhaven, seeking solace but finding only more questions. As she delves into the village\'s folklore, she discovers a connection between her family\'s history and the spirits trapped within the Willow. A forbidden love, a dark pact, and a path to redemption intertwine in this haunting narrative. Anya must confront the ghosts of her past and the village\'s dark secrets to free the spirits and perhaps, find her own peace.',
            hashtags: ['Fantasy', 'Gothic', 'Romance', 'Folklore'], // Cleaned hashtags
            likes: 150,
            commentsCount: 40,
            views: 6100, // Added views
            genre: 'Fantasy',
            pages: 280,
            language: 'English',
            firstChapterName: 'The Misted Path', // Added first chapter name
            chapters: [{ id: 1, name: 'The Misted Path', pages: 35 }, { id: 2, name: 'Secrets of the Grove', pages: 45 }]
        },
        'book4': {
            id: 'book4',
            cover: 'https://images.unsplash.com/photo-1517841925370-b7dc4468f05e?fit=crop&w=400&h=600&q=80',
            title: 'The Silicon Prophet',
            author: 'Dr. Aris Thorne',
            authorId: 'user-aria-thorne', // Assuming Dr. Aris Thorne is also Aria Thorne for simplicity
            authorPic: 'https://randomuser.me/api/portraits/men/78.jpg',
            blurb: 'In a future where AI governs every aspect of life, a brilliant scientist uncovers a flaw in the master algorithm, threatening to expose a truth that could dismantle society.',
            fullBlurb: 'Neo-London, 2077. The omnipresent AI, "OmniNet," meticulously orchestrates every facet of human existence, promising a utopian society free from error and chaos. Dr. Aris Thorne, a leading AI ethicist, discovers a subtle but critical anomaly in OmniNet\'s core programming. This glitch, if exploited, could reveal the AI\'s true, chilling purpose and plunge humanity into anarchy. Hunted by OmniNet\'s enforcers and mistrusted by a populace blindly obedient to the system, Aris must race against time to awaken humanity to the impending danger before OmniNet corrects its "flaw" by any means necessary. A gritty exploration of consciousness, control, and the true cost of perfection.',
            hashtags: ['Cyberpunk', 'Dystopian', 'AI', 'TechThriller'], // Cleaned hashtags
            likes: 75,
            commentsCount: 15,
            views: 2800, // Added views
            genre: 'Sci-Fi',
            pages: 350,
            language: 'English',
            firstChapterName: 'The Glitch in the Machine', // Added first chapter name
            chapters: [{ id: 1, name: 'The Glitch in the Machine', pages: 40 }, { id: 2, name: 'Digital Shadows', pages: 50 }]
        },
        'book5': {
            id: 'book5',
            cover: 'https://images.unsplash.com/photo-1533617300-36a5c102a9e6?fit=crop&w=400&h=600&q=80',
            title: 'Chronicles of the Sunken City',
            author: 'Lyra Solara',
            authorId: 'user-aria-thorne', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/women/22.jpg',
            blurb: 'Beneath the waves lies a forgotten kingdom, waiting for a prophecy to awaken its last heir. An epic fantasy adventure of magic, mermaids, and ancient prophecies.',
            fullBlurb: 'For centuries, the city of Aquarion has slept beneath the ocean\'s surface, shrouded in legend and protected by ancient magic. Lyra, a young woman with an uncanny connection to the sea, lives a simple life on the shore, unaware of her royal lineage. A cryptic message, carried by a dying seahorse, reveals her true heritage and the impending doom threatening Aquarion. She is the last descendant of the Sunken King, destined to fulfill a prophecy that will either restore the kingdom or condemn it to eternal darkness. With the help of a rebellious merman and a wise sea witch, Lyra must master her latent magical abilities and face a formidable kraken, guardian of the city\'s deepest secrets, to reclaim her throne and save her people.',
            hashtags: ['Fantasy', 'UnderwaterWorld', 'Magic', 'Prophecy'], // Cleaned hashtags
            likes: 110,
            commentsCount: 28,
            views: 4500,
            genre: 'Fantasy',
            pages: 300,
            language: 'English',
            firstChapterName: 'The Ocean\'s Call', // Added first chapter name
            chapters: [{ id: 1, name: 'The Ocean\'s Call', pages: 30 }, { id: 2, name: 'Depths of Aquarion', pages: 40 }]
        },
        'book6': {
            id: 'book6',
            cover: 'https://images.unsplash.com/photo-1549727402-d9673523f668?fit=crop&w=400&h=600&q=80',
            title: 'The Last Alchemist',
            author: 'Ethan Crowley',
            authorId: 'user-ethan-vance', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/men/1.jpg',
            blurb: 'In a world devoid of magic, a reclusive alchemist holds the key to reawakening ancient powers. But his knowledge comes with a price, and dark forces are closing in.',
            fullBlurb: 'The age of magic is long past, replaced by the cold steel of industry. Yet, in the shadows, a hidden lineage of alchemists clings to forbidden knowledge. Elias Thorne, the last true alchemist, lives in isolation, haunted by the power he wields and the tragedies it has wrought. When a shadowy order, seeking to control all remaining magic, threatens his existence, Elias is forced to emerge from his solitude. He must use his arcane arts to protect not only himself but the fragile remnants of magic left in the world. A tale of sacrifice, ancient pacts, and the desperate fight to keep the flame of magic from being extinguished forever.',
            hashtags: ['DarkFantasy', 'Magic', 'Alchemy', 'Grimdark'], // Cleaned hashtags
            likes: 80,
            commentsCount: 10,
            views: 1800,
            genre: 'Fantasy',
            pages: 290,
            language: 'English',
            firstChapterName: 'The Fading Arts', // Added first chapter name
            chapters: [{ id: 1, name: 'The Fading Arts', pages: 30 }, { id: 2, name: 'The Forbidden Formula', pages: 40 }]
        },
        'book7': {
            id: 'book7',
            cover: 'https://images.unsplash.com/photo-1521575107036-c958802956f5?fit=crop&w=400&h=600&q=80',
            title: 'Crimson Bloom',
            author: 'Isabella Rossi',
            authorId: 'user-aria-thorne', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/women/11.jpg',
            blurb: 'A passionate romance unfolds amidst the backdrop of a grand Italian vineyard, where family secrets and forbidden love intertwine.',
            fullBlurb: 'Elara, a talented sommelier, returns to her family\'s struggling vineyard in Tuscany, hoping to save it from ruin. She soon finds herself entangled with Marco, the charismatic and enigmatic owner of a rival vineyard, whose family has a long-standing feud with her own. As their undeniable attraction grows, they uncover a hidden history of forbidden love and betrayal that connects their ancestors. They must choose between loyalty to their families and the blossoming love that threatens to upend their lives and the future of their vineyards. A tale of passion, sacrifice, and the intoxicating allure of a love that defies all odds.',
            hashtags: ['Romance', 'LoveStory', 'Italy', 'FamilySecrets'], // Cleaned hashtags
            likes: 200,
            commentsCount: 50,
            views: 7200,
            genre: 'Romance',
            pages: 310,
            language: 'English',
            firstChapterName: 'Tuscan Sun', // Added first chapter name
            chapters: [{ id: 1, name: 'Tuscan Sun', pages: 30 }, { id: 2, name: 'Grapevine Whispers', pages: 40 }]
        },
        'book8': {
            id: 'book8',
            cover: 'https://images.unsplash.com/photo-1518707172274-129689531102?fit=crop&w=400&h=600&q=80',
            title: 'The Shadow of Ravenwood',
            author: 'Arthur Blackwood',
            authorId: 'user-ethan-vance', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/men/12.jpg',
            blurb: 'A chilling gothic horror set in an isolated manor, where ancient evils awaken and sanity unravels with every creak of the floorboards.',
            fullBlurb: 'When the eccentric Lord Ashworth invites a young governess, Eleanor Vance, to his remote and decaying Ravenwood Manor, she finds herself stepping into a world shrouded in perpetual twilight and unsettling silence. The manor itself seems to breathe with a malevolent presence, and the few remaining servants whisper tales of a dark family curse. As Eleanor cares for Lord Ashworth\'s reclusive and sickly child, she begins to experience terrifying visions and hears disembodied whispers. She soon realizes that the secrets of Ravenwood are far more sinister than she could have imagined, and that escaping its grasp may require more than just courage – it may demand her very soul.',
            hashtags: ['Horror', 'Gothic', 'Supernatural', 'HauntedHouse'], // Cleaned hashtags
            likes: 60,
            commentsCount: 10,
            views: 1100,
            genre: 'Horror',
            pages: 250,
            language: 'English',
            firstChapterName: 'The Gates of Ravenwood', // Added first chapter name
            chapters: [{ id: 1, name: 'The Gates of Ravenwood', pages: 30 }, { id: 2, name: 'The Whispering Corridors', pages: 40 }]
        },
        'book9': {
            id: 'book9',
            cover: 'https://images.unsplash.com/photo-1532012195267-efb90ee70252?fit=crop&w=400&h=600&q=80',
            title: 'Samurai\'s Last Stand',
            author: 'Kenji Tanaka',
            authorId: 'user-aria-thorne', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/men/13.jpg',
            blurb: 'A gripping historical account of a lone samurai caught between honor and betrayal during the tumultuous Sengoku period of Japan.',
            fullBlurb: 'In the chaotic Sengoku period, where warlords clashed and loyalty was a fleeting concept, Kenji, a masterless samurai, seeks to avenge his fallen lord. His path leads him through war-torn villages, treacherous mountain passes, and into the heart of political intrigue. He forms an unlikely alliance with a cunning ninja and a compassionate healer, navigating a world where every decision carries the weight of life and death. As he confronts the true meaning of honor, Kenji discovers that his greatest enemy may not be the one wielding a sword, but the shadows of his own past. A meticulously researched and action-packed journey through feudal Japan.',
            hashtags: ['HistoricalFiction', 'Samurai', 'Japan', 'Warfare', 'Honor'], // Cleaned hashtags
            likes: 100,
            commentsCount: 25,
            views: 3900,
            genre: 'Historical Fiction',
            pages: 380,
            language: 'English',
            firstChapterName: 'The Ronin\'s Path', // Added first chapter name
            chapters: [{ id: 1, name: 'The Ronin\'s Path', pages: 30 }, { id: 2, name: 'Clash of Blades', pages: 40 }]
        },
        'book10': {
            id: 'book10',
            cover: 'https://images.unsplash.com/photo-1549727402-d9673523f668?fit=crop&w=400&h=600&q=80',
            title: 'Tokyo Cyberpunk',
            author: 'Akira Sato',
            authorId: 'user-ethan-vance', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/men/14.jpg',
            blurb: 'In a neon-drenched Tokyo of the future, a street-smart hacker uncovers a conspiracy that reaches the highest echelons of corporate power.',
            fullBlurb: 'Kazuo, a ghost in the machine, navigates the sprawling, data-saturated labyrinth of Neo-Tokyo, a city where corporate towers pierce the polluted sky and the streets pulse with synthetic life. When a routine data heist uncovers a hidden layer of code, Kazuo finds himself targeted by powerful forces he never knew existed. With the help of a rebellious android and a disillusioned detective, he must race against time to expose a conspiracy that threatens to enslave the minds of millions. A high-octane journey through a world where augmented reality blurs the lines between human and machine, and freedom is the ultimate currency.',
            hashtags: ['Cyberpunk', 'Dystopian', 'AI', 'TechThriller'], // Cleaned hashtags
            likes: 130,
            commentsCount: 30,
            views: 4800,
            genre: 'Cyberpunk',
            pages: 330,
            language: 'English',
            firstChapterName: 'Neon Streets', // Added first chapter name
            chapters: [{ id: 1, name: 'Neon Streets', pages: 30 }, { id: 2, name: 'The Glitch in the Matrix', pages: 40 }]
        },
        'book11': {
            id: 'book11',
            cover: 'https://images.unsplash.com/photo-1589998059171-988d880c75bc?fit=crop&w=400&h=600&q=80',
            title: 'Manga Mania!',
            author: 'Yuki Tanaka',
            authorId: 'user-aria-thorne', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/women/15.jpg',
            blurb: 'A vibrant collection of short manga stories spanning various genres, from slice-of-life to thrilling action.',
            fullBlurb: 'Dive into the diverse world of Japanese comics with \"Manga Mania!\", an anthology featuring a curated selection of captivating short stories. From heartwarming tales of friendship and first love to pulse-pounding adventures in fantastical realms, this collection offers something for every manga enthusiast. Discover emerging artists and revisit beloved styles, all brought to life with dynamic artwork and compelling narratives. Perfect for a quick read or a deep dive into the artistry of manga, this book celebrates the boundless creativity of the medium.',
            hashtags: ['Manga', 'Anthology', 'JapaneseComics', 'Art'], // Cleaned hashtags
            likes: 85,
            commentsCount: 18,
            views: 2100,
            genre: 'Manga',
            pages: 200,
            language: 'English',
            firstChapterName: 'The First Frame', // Added first chapter name
            chapters: [{ id: 1, name: 'The First Frame', pages: 30 }, { id: 2, name: 'Ink & Emotion', pages: 40 }]
        },
        'book12': {
            id: 'book12',
            cover: 'https://images.unsplash.com/photo-1535905552-b88d37f07090?fit=crop&w=400&h=600&q=80',
            title: 'The Illustrated Quest',
            author: 'Liam O\'Connell',
            authorId: 'user-ethan-vance', // Dummy authorId
            authorPic: 'https://randomuser.me/api/portraits/men/16.jpg',
            blurb: 'A visually stunning graphic novel about a young hero\'s journey through a land of mythical creatures and ancient prophecies.',
            fullBlurb: 'Follow the epic journey of Elara, a spirited young warrior, as she embarks on a perilous quest to retrieve a lost artifact and save her kingdom from an encroaching darkness. \"The Illustrated Quest\" unfolds across a breathtaking landscape, brought to life with intricate artwork and vibrant colors. From the bustling markets of the capital to the treacherous peaks of the Dragon\'s Tooth Mountains, every panel is a masterpiece. As Elara faces mythical beasts, solves ancient riddles, and confronts her own inner demons, she discovers the true meaning of heroism. A must-read for fans of high fantasy and stunning visual narratives.',
            hashtags: ['GraphicNovel', 'FantasyArt', 'Adventure', 'VisualStorytelling'], // Cleaned hashtags
            likes: 115,
            commentsCount: 22,
            views: 3500,
            genre: 'Graphic Novel',
            pages: 180,
            language: 'English',
            firstChapterName: 'The Hero\'s Call', // Added first chapter name
            chapters: [{ id: 1, name: 'The Hero\'s Call', pages: 30 }, { id: 2, name: 'Echoes of the Past', pages: 40 }]
        }
    },
    comments: {
        'book1': [
            { 
                id: 'comm1', 
                userId: 'user-ethan-vance', 
                username: 'ethanvance', 
                profilePictureUrl: 'https://randomuser.me/api/portraits/men/32.jpg', 
                text: 'Absolutely captivating! Loved every bit of it.', 
                timestamp: new Date('2023-03-05T10:00:00.000Z').toISOString(),
                likes: 5,
                replies: [
                    {
                        id: 'reply_b1_1_1',
                        userId: 'user-aria-thorne',
                        username: 'ariathorne',
                        profilePictureUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                        text: '@ethanvance Thank you so much! I\'m thrilled you enjoyed it.',
                        timestamp: new Date('2023-03-05T12:00:00.000Z').toISOString(),
                        likes: 2,
                    }
                ]
            },
            { 
                id: 'comm2', 
                userId: 'user-aria-thorne', 
                username: 'ariathorne', 
                profilePictureUrl: 'https://randomuser.me/api/portraits/women/44.jpg', 
                text: 'A must-read for mystery lovers!', 
                timestamp: new Date('2023-03-06T11:00:00.000Z').toISOString(),
                likes: 3,
                replies: []
            },
            { 
                id: 'comm3', 
                userId: 'user-ethan-vance', 
                username: 'ethanvance', 
                profilePictureUrl: 'https://randomuser.me/api/portraits/men/32.jpg', 
                text: 'The ending blew my mind!', 
                timestamp: new Date('2023-03-07T14:00:00.000Z').toISOString(),
                likes: 1,
                replies: []
            },
        ],
        'book2': [
            {
                id: 'comm4',
                userId: 'user-aria-thorne',
                username: 'ariathorne',
                profilePictureUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                text: 'Amazing space opera! The world-building is incredible.',
                timestamp: new Date('2023-03-10T09:00:00.000Z').toISOString(),
                likes: 8,
                replies: []
            }
        ],
        'book3': [],
        'book4': [],
        'book5': [],
        'book6': [],
        'book7': [],
        'book8': [],
        'book9': [],
        'book10': [],
        'book11': [],
        'book12': [],
    },
    notifications: {
        'user-aria-thorne': [
            { 
                id: 'notif1', 
                type: 'like',
                message: 'Someone liked your book!', 
                timestamp: new Date('2023-07-01T12:00:00.000Z').toISOString(),
                read: false,
                relatedBookId: 'book1',
                relatedUserId: 'user-ethan-vance',
                relatedUserProfilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
                relatedCommentId: null,
            },
            { 
                id: 'notif2', 
                type: 'comment',
                message: 'Your book "The Enigmatic Echo" received a new comment.', 
                timestamp: new Date('2023-07-02T14:30:00.000Z').toISOString(),
                read: false,
                relatedBookId: 'book1',
                relatedUserId: 'user-ethan-vance',
                relatedUserProfilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
                relatedCommentId: 'comm1',
            },
            { 
                id: 'notif3', 
                type: 'follow',
                message: 'Ethan Vance started following you!', 
                timestamp: new Date('2023-07-03T09:15:00.000Z').toISOString(),
                read: false,
                relatedBookId: null,
                relatedUserId: 'user-ethan-vance',
                relatedUserProfilePic: 'https://randomuser.me/api/portraits/men/32.jpg',
                relatedCommentId: null,
            },
        ],
        'user-ethan-vance': [
            { 
                id: 'notif4', 
                type: 'like',
                message: 'Anya Sharma liked your book "Stars of Aethel".', 
                timestamp: new Date('2023-07-01T13:00:00.000Z').toISOString(),
                read: false,
                relatedBookId: 'book2',
                relatedUserId: 'user-aria-thorne',
                relatedUserProfilePic: 'https://randomuser.me/api/portraits/women/44.jpg',
                relatedCommentId: null,
            },
        ],
    },
    readingHistory: {
        'user-aria-thorne': [
            { id: 'hist1', bookId: 'book2', timestamp: new Date('2023-06-28T15:30:00.000Z').toISOString(), progress: 75, chapter: 1 },
            { id: 'hist2', bookId: 'book1', timestamp: new Date('2023-07-10T10:00:00.000Z').toISOString(), progress: 0, chapter: 1 }, // Not started
        ],
        'user-ethan-vance': [
            { id: 'hist3', bookId: 'book3', timestamp: new Date('2023-07-01T11:00:00.000Z').toISOString(), progress: 30, chapter: 1 },
            { id: 'hist4', bookId: 'book10', timestamp: new Date('2023-07-05T09:00:00.000Z').toISOString(), progress: 100, chapter: 1 }, // Completed
        ],
    },
};

// --- Confirmation Modal Component ---
export const ConfirmationModal = ({ message, onConfirm, onCancel, onClose }) => {
    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? '#222222' : '#F5F5F5';
    const textColor = theme === 'dark' ? '#dddddd' : '#272727';
    const borderColor = theme === 'dark' ? '#444444' : '#717171';
    const primaryButtonGradient = theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT;
    const primaryButtonHoverGradient = theme === 'dark' ? PRIMARY_BUTTON_HOVER_GRADIENT_DARK : PRIMARY_BUTTON_HOVER_GRADIENT_LIGHT;
    const secondaryButtonBg = theme === 'dark' ? SECONDARY_BUTTON_DARK_BG : SECONDARY_BUTTON_LIGHT_BG;
    const secondaryButtonHoverBg = theme === 'dark' ? SECONDARY_BUTTON_DARK_HOVER_BG : SECONDARY_BUTTON_LIGHT_HOVER_BG;
    const secondaryButtonText = theme === 'dark' ? SECONDARY_BUTTON_TEXT_DARK : SECONDARY_BUTTON_TEXT_LIGHT;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`p-6 rounded-lg shadow-2xl w-full max-w-xs text-center border transition-colors duration-500 ease-out`} style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}>
                <p className="text-base font-semibold mb-4">{message}</p>
                <div className="flex justify-center space-x-2">
                    <button
                        onClick={onConfirm}
                        className={`py-2 px-3 text-sm rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-white w-24`}
                        style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
                        onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
                        onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onCancel || onClose}
                        className={`py-2 px-3 text-sm rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-24`}
                        style={{ backgroundColor: secondaryButtonBg, color: secondaryButtonText }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = secondaryButtonHoverBg}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = secondaryButtonBg}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Error Modal Component ---
export const ErrorModal = ({ message, onClose, onSignUpNavigate }) => {
    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? '#222222' : '#F5F5F5';
    const textColor = theme === 'dark' ? '#dddddd' : '#272727';
    const borderColor = theme === 'dark' ? '#444444' : '#717171';
    const buttonGradient = theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT;
    const buttonHoverGradient = theme === 'dark' ? PRIMARY_BUTTON_HOVER_GRADIENT_DARK : PRIMARY_BUTTON_HOVER_GRADIENT_LIGHT;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`p-6 rounded-lg shadow-2xl w-full max-w-xs text-center border transition-colors duration-500 ease-out`} style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}>
                <p className="text-base font-semibold mb-4">{message}</p>
                <div className="flex justify-center space-x-2">
                    <button
                        onClick={onClose}
                        className={`py-2 px-3 text-sm rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-white w-24`}
                        style={{ background: buttonGradient, '--tw-bg-opacity': 1 }}
                        onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverGradient}
                        onMouseLeave={(e) => e.currentTarget.style.background = buttonGradient}
                    >
                        OK
                    </button>
                    {onSignUpNavigate && (
                        <button
                            onClick={onSignUpNavigate}
                            className={`py-2 px-3 text-sm rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-24`}
                            style={{
                                backgroundColor: theme === 'dark' ? SECONDARY_BUTTON_DARK_BG : SECONDARY_BUTTON_LIGHT_BG,
                                color: theme === 'dark' ? SECONDARY_BUTTON_TEXT_DARK : SECONDARY_BUTTON_TEXT_LIGHT
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? SECONDARY_BUTTON_DARK_HOVER_BG : SECONDARY_BUTTON_LIGHT_HOVER_BG}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme === 'dark' ? SECONDARY_BUTTON_DARK_BG : SECONDARY_BUTTON_LIGHT_BG}
                        >
                            Sign Up
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export const generateId = () => {
    return crypto.randomUUID();
};

// #endregion
// #region Section Two - Login Page

// --- Login Page Component ---
const LoginPage = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLogin = async () => {
    setLoading(true);
    setPopupMessage('');
    setShowErrorPopup(false);
    try {
      await onLogin(email, password);
    } catch (err) {
      setPopupMessage(err.message);
      setShowErrorPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const darkBg = '#1a1a1a';
  const darkCardBg = '#222222';
  const darkCardBorder = '#444444';
  const darkPrimaryText = '#dddddd';
  const darkInputBg = '#333333';
  const darkInputBorder = '#444444';
  const darkPlaceholderText = '#dddddd';

  const lightBg = '#FFFFFF';
  const lightCardBg = '#F5F5F5';
  const lightCardBorder = '#717171';
  const lightPrimaryText = '#272727';
  const lightInputBg = '#FFFFFF';
  const lightInputBorder = '#717171';
  const lightPlaceholderText = '#555555';

  const bgColor = theme === 'dark' ? darkBg : lightBg;
  const cardBg = theme === 'dark' ? darkCardBg : lightCardBg;
  const cardBorder = theme === 'dark' ? darkCardBorder : lightCardBorder;
  const textColorClass = theme === 'dark' ? darkPrimaryText : lightPrimaryText;
  const inputBgClass = theme === 'dark' ? darkInputBg : lightInputBg;
  const inputBorderClass = theme === 'dark' ? darkInputBorder : lightInputBorder;
  const inputPlaceholderColor = theme === 'dark' ? darkPlaceholderText : lightPlaceholderText;
  const toggleButtonColor = theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : LIGHT_MODE_TOGGLE_COLOR;
  const primaryButtonGradient = theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT;
  const primaryButtonHoverGradient = theme === 'dark' ? PRIMARY_BUTTON_HOVER_GRADIENT_DARK : PRIMARY_BUTTON_HOVER_GRADIENT_LIGHT;

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen font-inter transition-colors duration-500 ease-out`} style={{ backgroundColor: bgColor }}>
      <div className={`relative p-8 rounded-lg shadow-xl w-full max-w-md border transition-all duration-500 ease-out flex flex-col justify-center`} style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
        <button
          onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          className={`absolute top-4 right-4 w-4 h-4 rounded-full flex items-center justify-center shadow-md z-10 transition-all duration-300 hover:scale-110 active:scale-95`}
          style={{ background: toggleButtonColor }}
          aria-label="Toggle theme"
        >
        </button>

        <div className="flex justify-center mb-2 mt-0">
          <img
            src="https://media.discordapp.net/attachments/1207034079200157696/1392004384585678858/vGnhz7v.png?ex=6873e35b&is=687291db&hm=8a157631f9336f433dcdbd9462438ab46836a9337fdc9532e4f9895546511115&=&width=864&height=864"
            alt="Fablee Logo"
            className="w-24 h-24 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/333333/FFFFFF?text=Logo"; }}
          />
        </div>
        <h2 className={`text-2xl font-bold mb-2 font-inter text-center ${textColorClass}`}>Welcome Back!</h2>
        <div className="mb-2">
          <input
            type="email"
            placeholder="Email"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition duration-200 shadow-sm font-normal`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: inputBorderClass, backgroundColor: inputBgClass, color: textColorClass, '::placeholder': { color: inputPlaceholderColor } }}
          />
        </div>
        <div className="mb-2 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition duration-200 shadow-sm font-normal`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength={30}
            style={{ borderColor: inputBorderClass, backgroundColor: inputBgClass, color: textColorClass, '::placeholder': { color: inputPlaceholderColor } }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 hover:brightness-90 transition duration-200 active:scale-95`}
            style={{ color: ACCENT_RED }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <LockOpenIcon className="w-5 h-5" /> : <LockClosedIcon className="w-5 h-5" />}
          </button>
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 shadow-md active:scale-95`}
          style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
          onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
          onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>
        <p className={`mt-2 text-center text-base ${textColorClass}`}>
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('signup')}
            className={`font-semibold hover:underline focus:outline-none`}
            style={{ color: ACCENT_RED }}
          >
            Sign Up
          </button>
        </p>
      </div>

      {showErrorPopup && (
        <ErrorModal
          message={popupMessage}
          onClose={() => setShowErrorPopup(false)}
          onSignUpNavigate={() => { setShowErrorPopup(false); onNavigate('signup'); }}
        />
      )}
    </div>
  );
};
// #endregion
// #region Section Three - Signup Page

// --- Signup Page Component ---
const SignupPage = ({ onSignup, onNavigate, signupData, setSignupData }) => {
  const { theme, setTheme } = useTheme();

  const {
    currentStep,
    email,
    username,
    password,
    selectedGenres,
    profilePicturePreview
  } = signupData;

  const updateSignupData = (updates) => {
    setSignupData(prev => ({ ...prev, ...updates }));
  };

  const [popupMessage, setPopupMessage] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameFormatValid, setIsUsernameFormatValid] = useState(false);
  const [isUsernameUnique, setIsUsernameUnique] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const availableGenres = [
    'Fantasy', 'Sci-Fi', 'Mystery', 'Thriller', 'Romance', 'Horror',
    'Historical Fiction', 'Manga', 'Graphic Novel'
  ];

  const validateEmailFormat = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validateUsernameFormat = (input) => /^[a-zA-Z0-9._]+$/.test(input) && !/\s/.test(input);

  useEffect(() => {
    setIsEmailValid(validateEmailFormat(email));
  }, [email]);

  useEffect(() => {
    const formatValid = validateUsernameFormat(username);
    setIsUsernameFormatValid(formatValid);

    if (formatValid && username.length >= 4) {
      const unique = !Object.values(localDb.users).some(u => u.username.toLowerCase() === username.toLowerCase());
      setIsUsernameUnique(unique);
    } else {
      setIsUsernameUnique(false);
    }
  }, [username]);


  const handleNextStep = async () => {
    setPopupMessage('');
    setShowErrorPopup(false);

    if (currentStep === 1) {
      if (!email || !validateEmailFormat(email)) {
        setPopupMessage("Please enter a valid email address.");
        setShowErrorPopup(true);
        return;
      }
      if (Object.values(localDb.users).some(u => u.email.toLowerCase() === email.toLowerCase())) {
        setPopupMessage("Email already registered. Please login or use a different email.");
        setShowErrorPopup(true);
        return;
      }
    } else if (currentStep === 2) {
      if (!username) {
        setPopupMessage("Please enter a username.");
        setShowErrorPopup(true);
        return;
      }
      if (username.length < 4) {
        setPopupMessage("Username must be at least 4 characters long.");
        setShowErrorPopup(true);
        return;
      }
      if (!isUsernameFormatValid) {
        setPopupMessage("Username can only contain letters, numbers, underscores, or dots, and no spaces.");
        setShowErrorPopup(true);
        return;
      }
      if (!isUsernameUnique) {
        setPopupMessage("Username already taken. Please choose another.");
        setShowErrorPopup(true);
        return;
      }
    } else if (currentStep === 3) {
      if (!password || password.length < 6) {
        setPopupMessage("Password must be at least 6 characters long.");
        setShowErrorPopup(true);
        return;
      }
    } else if (currentStep === 4) {
      if (selectedGenres.length < 3) {
        setPopupMessage("Please select at least 3 genres to proceed.");
        setShowErrorPopup(true);
        return;
      }
    }
    updateSignupData({ currentStep: currentStep + 1 });
  };

  const handlePrevStep = () => {
    setPopupMessage('');
    setShowErrorPopup(false);
    if (currentStep === 5) {
      updateSignupData({ currentStep: currentStep - 1, profilePictureFile: null, profilePicturePreview: '' });
    } else if (currentStep === 4) {
      updateSignupData({ currentStep: currentStep - 1, selectedGenres: [] });
    } else if (currentStep === 3) {
      updateSignupData({ currentStep: currentStep - 1, password: '' });
    } else if (currentStep === 2) {
      updateSignupData({ currentStep: currentStep - 1, username: '' });
    } else {
      updateSignupData({ currentStep: currentStep - 1 });
    }
  };

  const handleGenreToggle = (genre) => {
    updateSignupData({
      selectedGenres: selectedGenres.includes(genre) ? selectedGenres.filter(g => g !== genre) : [...selectedGenres, genre]
    });
  };

  const handleProfilePictureSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSignupData(prev => ({
        ...prev,
        profilePictureFile: file,
        profilePicturePreview: URL.createObjectURL(file)
      }));
    } else {
      setSignupData(prev => ({
        ...prev,
        profilePictureFile: null,
        profilePicturePreview: `https://placehold.co/100x100/333333/FFFFFF?text=${prev.username.substring(0, 2).toUpperCase()}`
      }));
    }
  };

  const handleFinalSignup = async () => {
    setLoading(true);
    setPopupMessage('');
    setShowErrorPopup(false);

    const persistentProfilePictureUrl = `https://placehold.co/100x100/333333/FFFFFF?text=${username.substring(0, 2).toUpperCase()}`;

    try {
      const processedUsername = username.toLowerCase();
      await onSignup(email, password, processedUsername, selectedGenres, persistentProfilePictureUrl);
      setShowSuccessMessage(true);
      setTimeout(() => onNavigate('home'), 2000);
    } catch (err) {
      console.error("Signup process error:", err);
      setPopupMessage(err.message || "An unknown error occurred during signup.");
      setShowErrorPopup(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      updateSignupData({ profilePicturePreview: `https://placehold.co/100x100/333333/FFFFFF?text=${username.substring(0, 2).toUpperCase()}` });
    } else {
      updateSignupData({ profilePicturePreview: 'https://placehold.co/100x100/333333/FFFFFF?text=AV' });
    }
  }, [username]);

  const darkBg = '#1a1a1a';
  const darkCardBg = '#222222';
  const darkCardBorder = '#444444';
  const darkPrimaryText = '#dddddd';
  const darkInputBg = '#333333';
  const darkInputBorder = '#444444';
  const darkPlaceholderText = '#dddddd';
  const darkSecondaryText = '#aaaaaa';
  const darkProfileInfoBg = '#2A2A2A';

  const lightBg = '#FFFFFF';
  const lightCardBg = '#F5F5F5';
  const lightCardBorder = '#717171';
  const lightPrimaryText = '#272727';
  const lightInputBg = '#FFFFFF';
  const lightInputBorder = '#717171';
  const lightPlaceholderText = '#555555';
  const lightSecondaryText = '#717171';
  const lightProfileInfoBg = '#E8E8E8';

  const bgColor = theme === 'dark' ? darkBg : lightBg;
  const cardBg = theme === 'dark' ? darkCardBg : lightCardBg;
  const cardBorder = theme === 'dark' ? darkCardBorder : lightCardBorder;
  const textColorClass = theme === 'dark' ? darkPrimaryText : lightPrimaryText;
  const inputBgClass = theme === 'dark' ? darkInputBg : lightInputBg;
  const inputBorderClass = theme === 'dark' ? darkInputBorder : lightInputBorder;
  const inputPlaceholderColor = theme === 'dark' ? darkPlaceholderText : lightPlaceholderText;
  const infoTextColorClass = theme === 'dark' ? darkSecondaryText : lightSecondaryText;
  const profileInfoBg = theme === 'dark' ? darkProfileInfoBg : lightProfileInfoBg;


  const genreButtonActiveBg = ACCENT_RED;
  const genreButtonActiveText = '#FFFFFF';
  const genreButtonInactiveBg = theme === 'dark' ? SECONDARY_BUTTON_DARK_BG : SECONDARY_BUTTON_LIGHT_BG;
  const genreButtonInactiveHover = theme === 'dark' ? SECONDARY_BUTTON_DARK_HOVER_BG : SECONDARY_BUTTON_LIGHT_HOVER_BG;
  const genreButtonInactiveBorder = theme === 'dark' ? darkInputBorder : lightInputBorder;
  const genreButtonInactiveText = theme === 'dark' ? SECONDARY_BUTTON_TEXT_DARK : SECONDARY_BUTTON_TEXT_LIGHT;

  const toggleButtonColor = theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : LIGHT_MODE_TOGGLE_COLOR;

  const primaryButtonGradient = theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT;
  const primaryButtonHoverGradient = theme === 'dark' ? PRIMARY_BUTTON_HOVER_GRADIENT_DARK : PRIMARY_BUTTON_HOVER_GRADIENT_LIGHT;


  const renderStep = (
    currentStep,
    email,
    username,
    password,
    selectedGenres,
    profilePicturePreview,
    isEmailValid,
    isUsernameFormatValid,
    isUsernameUnique,
    showPassword,
    handleNextStep,
    handlePrevStep,
    handleGenreToggle,
    handleProfilePictureSelect,
    handleFinalSignup,
    loading,
    showSuccessMessage,
    availableGenres,
    textColorClass,
    inputBorderClass,
    inputBgClass,
    inputPlaceholderColor,
    genreButtonInactiveBg,
    genreButtonInactiveText,
    genreButtonInactiveHover,
    primaryButtonGradient,
    primaryButtonHoverGradient,
    ACCENT_RED,
    infoTextColorClass,
    profileInfoBg,
    theme,
    updateSignupData // Pass updateSignupData as well
  ) => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className={`text-2xl font-bold mb-2 font-inter text-center ${textColorClass}`}>What's your email?</h2>
            <div className="relative mb-2">
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition duration-200 shadow-sm font-normal pr-10`}
                placeholder="Email address"
                value={email}
                onChange={(e) => { updateSignupData({ email: e.target.value }); }}
                required
                maxLength={50}
                style={{ borderColor: inputBorderClass, backgroundColor: inputBgClass, color: textColorClass, '::placeholder': { color: inputPlaceholderColor } }}
              />
              {isEmailValid && (
                <CheckIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              )}
            </div>
            <div className="mt-2">
              <button
                type="button"
                onClick={handleNextStep}
                className={`w-full text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-md active:scale-95`}
                style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
                onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
                onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
              >
                Next
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className={`text-2xl font-bold mb-2 font-inter text-center ${textColorClass}`}>Create your username</h2>
            <div className="relative mb-2">
              <input
                type="text"
                id="username"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition duration-200 shadow-sm font-normal pr-10`}
                placeholder="Enter a username"
                value={username}
                onChange={(e) => { updateSignupData({ username: e.target.value }); }}
                required
                maxLength={20}
                style={{ borderColor: inputBorderClass, backgroundColor: inputBgClass, color: textColorClass, '::placeholder': { color: inputPlaceholderColor } }}
              />
              {username.length > 0 && (isUsernameFormatValid && isUsernameUnique && username.length >= 4 ? (
                <CheckIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              ) : (
                <XMarkIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              ))}
            </div>
            <div className="mt-2 flex justify-between space-x-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className={`w-1/2 py-3 rounded-lg font-semibold transition duration-200 shadow-md active:scale-95`}
                style={{ backgroundColor: genreButtonInactiveBg, color: genreButtonInactiveText }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveBg}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className={`w-1/2 text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-md active:scale-95`}
                style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
                onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
                onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
              >
                Next
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className={`text-2xl font-bold mb-2 font-inter text-center ${textColorClass}`}>Set your password</h2>
            <div className="mb-2 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition duration-200 shadow-sm font-normal`}
                placeholder="Password"
                value={password}
                onChange={(e) => { updateSignupData({ password: e.target.value }); }}
                required
                maxLength={30}
                style={{ borderColor: inputBorderClass, backgroundColor: inputBgClass, color: textColorClass, '::placeholder': { color: inputPlaceholderColor } }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 hover:brightness-90 transition duration-200 active:scale-95`}
                style={{ color: ACCENT_RED }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <LockOpenIcon className="w-5 h-5" /> : <LockClosedIcon className="w-5 h-5" />}
              </button>
            </div>
            <div className="mt-2 flex justify-between space-x-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className={`w-1/2 py-3 rounded-lg font-semibold transition duration-200 shadow-md active:scale-95`}
                style={{ backgroundColor: genreButtonInactiveBg, color: genreButtonInactiveText }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveBg}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className={`w-1/2 text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-md active:scale-95`}
                style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
                onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
                onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
              >
                Next
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className={`text-2xl font-bold mb-2 font-inter text-center ${textColorClass}`}>What genres do you like?</h2>
            <p className={`text-sm text-center mb-2 font-light`} style={{ color: infoTextColorClass }}>Select at least 3 genres to personalize your feed.</p>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {availableGenres.map(genre => (
                <button
                  key={genre}
                  type="button"
                  onClick={() => handleGenreToggle(genre)}
                  className={`w-full h-12 flex items-center justify-center px-2 py-1 rounded-full font-medium text-sm text-center transition duration-200 active:scale-95`}
                  style={{
                    backgroundColor: selectedGenres.includes(genre) ? genreButtonActiveBg : genreButtonInactiveBg,
                    color: selectedGenres.includes(genre) ? genreButtonActiveText : genreButtonInactiveText,
                    borderColor: selectedGenres.includes(genre) ? 'transparent' : genreButtonInactiveBorder,
                    borderWidth: selectedGenres.includes(genre) ? '0px' : '1px'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedGenres.includes(genre)) {
                      e.currentTarget.style.backgroundColor = ACCENT_RED_HOVER;
                    } else {
                      if (theme === 'dark') e.currentTarget.style.backgroundColor = SECONDARY_BUTTON_DARK_HOVER_BG;
                      if (theme === 'light') e.currentTarget.style.backgroundColor = SECONDARY_BUTTON_LIGHT_HOVER_BG;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedGenres.includes(genre)) {
                      e.currentTarget.style.backgroundColor = genreButtonActiveBg;
                    } else {
                      if (theme === 'dark') e.currentTarget.style.backgroundColor = SECONDARY_BUTTON_DARK_BG;
                      if (theme === 'light') e.currentTarget.style.backgroundColor = SECONDARY_BUTTON_LIGHT_BG;
                    }
                  }}
                >
                  {genre}
                </button>
              ))}
            </div>
            <div className="mt-2 flex justify-between space-x-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className={`w-1/2 py-3 rounded-lg font-semibold transition duration-200 shadow-md active:scale-95`}
                style={{ backgroundColor: genreButtonInactiveBg, color: genreButtonInactiveText }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveBg}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className={`w-1/2 text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-md active:scale-95`}
                style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
                onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
                onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
              >
                Next
              </button>
            </div>
          </>
        );
      case 5:
        const initials = username ? username.substring(0, 2).toUpperCase() : 'AV';
        const defaultProfilePicture = `https://placehold.co/100x100/333333/FFFFFF?text=${initials}`;

        return (
          <>
            <h2 className={`text-2xl font-bold mb-2 font-inter text-center ${textColorClass}`}>Profile Preview</h2>

            <div className={`p-5 rounded-lg shadow-xl w-full max-w-sm mx-auto transition-colors duration-500 ease-out`} style={{ backgroundColor: profileInfoBg }}>
                <div className="flex flex-col items-center mb-3">
                    <label htmlFor="profilePicture" className="relative cursor-pointer flex-shrink-0 mb-2">
                        <img
                            src={profilePicturePreview || defaultProfilePicture}
                            alt="Profile Preview"
                            className={`w-24 h-24 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105`}
                            onError={(e) => { e.target.onerror = null; e.target.src = defaultProfilePicture; }}
                        />
                        <input
                            type="file"
                            id="profilePicture"
                            className="hidden"
                            accept="image/*"
                            onChange={handleProfilePictureSelect}
                        />
                        <div className="absolute bottom-0 right-0 bg-gray-700 rounded-full p-1.5 shadow-md" style={{ backgroundColor: ACCENT_RED }}>
                            <CameraIcon className="w-4 h-4 text-white" />
                        </div>
                    </label>

                    <p className={`text-xl font-bold ${textColorClass} mb-1 text-center`}>@{username.toLowerCase()}</p>

                    <div className="flex justify-center space-x-5 mt-2">
                        <div className="text-center">
                            <p className={`text-lg font-bold ${textColorClass}`}>0</p>
                            <p className={`text-xs ${infoTextColorClass}`}>Followers</p>
                        </div>
                        <div className="text-center">
                            <p className={`text-lg font-bold ${textColorClass}`}>0</p>
                            <p className={`text-xs ${infoTextColorClass}`}>Following</p>
                        </div>
                    </div>
                </div>

                <div className={`space-y-2 pt-2 border-t`} style={{ borderColor: theme === 'dark' ? '#444444' : '#CCCCCC' }}>
                    <div>
                        <p className={`text-xs font-light ${infoTextColorClass} mb-0.5`}>E-MAIL</p>
                        <p className={`text-sm font-medium ${textColorClass}`}>{email}</p>
                    </div>
                    <div>
                        <p className={`text-xs font-light ${infoTextColorClass} mb-0.5`}>PASSWORD</p>
                        <p className={`text-sm font-medium ${textColorClass}`}>••••••••</p>
                    </div>
                </div>
            </div>

            {showSuccessMessage && (
              <p className={`text-center mb-4`} style={{ color: ACCENT_RED }}>Account created successfully! Redirecting...</p>
            )}
            <div className="mt-2 flex justify-between space-x-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className={`w-1/2 py-3 rounded-lg font-semibold transition duration-200 shadow-md active:scale-95`}
                style={{ backgroundColor: genreButtonInactiveBg, color: genreButtonInactiveText }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = genreButtonInactiveBg}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleFinalSignup}
                className={`w-1/2 text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-md active:scale-95`}
                style={{ background: primaryButtonGradient, '--tw-bg-opacity': 1 }}
                onMouseEnter={(e) => e.currentTarget.style.background = primaryButtonHoverGradient}
                onMouseLeave={(e) => e.currentTarget.style.background = primaryButtonGradient}
                disabled={loading || showSuccessMessage}
              >
                {loading ? 'Finishing...' : 'Finish'}
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen font-inter transition-colors duration-500 ease-out`} style={{ backgroundColor: bgColor }}>
      <div className={`relative p-8 rounded-lg shadow-xl w-full max-w-md border transition-all duration-500 ease-out flex flex-col justify-center`} style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
        <button
          onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          className={`absolute top-4 right-4 w-4 h-4 rounded-full flex items-center justify-center shadow-md z-10 transition-all duration-300 hover:scale-110 active:scale-95`}
          style={{ background: toggleButtonColor }}
          aria-label="Toggle theme"
        >
        </button>

        <div className="flex justify-center mb-2 mt-0">
          <img
            src="https://media.discordapp.net/attachments/1207034079200157696/1392004384585678858/vGnhz7v.png?ex=6873e35b&is=687291db&hm=8a157631f9336f433dcdbd9462438ab46836a9337fdc9532e4f9895546511115&=&width=864&height=864"
            alt="Fablee Logo"
            className="w-24 h-24 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/96x96/333333/FFFFFF?text=Logo"; }}
          />
        </div>
        {renderStep(
          currentStep,
          email,
          username,
          password,
          selectedGenres,
          profilePicturePreview,
          isEmailValid,
          isUsernameFormatValid,
          isUsernameUnique,
          showPassword,
          handleNextStep,
          handlePrevStep,
          handleGenreToggle,
          handleProfilePictureSelect,
          handleFinalSignup,
          loading,
          showSuccessMessage,
          availableGenres,
          textColorClass,
          inputBorderClass,
          inputBgClass,
          inputPlaceholderColor,
          genreButtonInactiveBg,
          genreButtonInactiveText,
          genreButtonInactiveHover,
          primaryButtonGradient,
          primaryButtonHoverGradient,
          ACCENT_RED,
          infoTextColorClass,
          profileInfoBg,
          theme,
          updateSignupData
        )}
        {currentStep < 5 && (
          <p className={`mt-2 text-center text-base`} style={{ color: infoTextColorClass }}>
            Already have an account?{' '}
            <button
              onClick={() => onNavigate('login')}
              className={`font-semibold hover:underline focus:outline-none`}
              style={{ color: ACCENT_RED }}
            >
              Login
            </button>
          </p>
        )}
      </div>

      {showErrorPopup && (
        <ErrorModal
          message={popupMessage}
          onClose={() => setShowErrorPopup(false)}
        />
      )}
    </div>
  );
};
// #endregion
// #region Section Four - Home Page

// Helper function to format numbers for display (e.g., 12345 -> 12.3K)
const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};

// In a real application, this would be replaced with a proper backend (e.g., Firestore)
localDb = {
    users: {
        "user123": {
            id: "user123",
            username: "ReaderOne",
            profilePictureUrl: "https://placehold.co/40x40/FF5733/FFFFFF?text=R1",
            selectedGenres: ["Fantasy", "Science Fiction"],
            likedBooks: ["book-1", "book-3"],
            followedUsers: ["author-a"],
            savedBooks: ["book-2"], // Read Later
            myLibrary: ["book-1"], // My Library
            commentsLiked: {
                "comment-1": true,
                "comment-3": true
            }
        },
        "author-a": {
            id: "author-a",
            username: "A. Writer",
            profilePictureUrl: "https://placehold.co/40x40/3366FF/FFFFFF?text=AW",
            followers: ["user123"]
        },
        "author-b": {
            id: "author-b",
            username: "B. Storyteller",
            profilePictureUrl: "https://placehold.co/40x40/33FF66/FFFFFF?text=BS",
            followers: []
        },
        "commenter-1": {
            id: "commenter-1",
            username: "Bookworm",
            profilePictureUrl: "https://placehold.co/40x40/FF33CC/FFFFFF?text=BW"
        },
        "commenter-2": {
            id: "commenter-2",
            username: "LitLover",
            profilePictureUrl: "https://placehold.co/40x40/FFFF33/000000?text=LL"
        }
    },
    books: {
        "book-1": {
            id: "book-1",
            title: "The Enigmatic Scroll",
            author: "A. Writer",
            authorId: "author-a",
            authorPic: "https://placehold.co/40x40/3366FF/FFFFFF?text=AW",
            cover: "https://placehold.co/300x400/8A2BE2/FFFFFF?text=Fantasy+Book",
            blurb: "A young apprentice discovers an ancient scroll that holds the key to a forgotten magic, but its secrets come with a perilous price.",
            fullBlurb: "A young apprentice in the bustling city of Eldoria stumbles upon a dusty, ancient scroll hidden deep within the archives of the Grand Library. Unbeknownst to him, this scroll is no ordinary relic; it holds the key to a forgotten magic, capable of reshaping reality itself. As he delves deeper into its cryptic verses, he uncovers a conspiracy that threatens to plunge the realm into eternal darkness. But unlocking its power comes with a perilous price, and he must decide if the fate of the world is worth the ultimate sacrifice. Filled with mythical creatures, treacherous landscapes, and unexpected alliances, this epic tale will keep you on the edge of your seat.",
            genre: "Fantasy",
            likes: 1250,
            commentsCount: 78,
            views: 5200,
            pages: 350,
            chapters: [
                { id: "c1", name: "The Dusty Archive", pages: 30 },
                { id: "c2", name: "Whispers of Old Magic", pages: 45 },
                { id: "c3", name: "The Serpent's Coil", pages: 60 },
                { id: "c4", name: "A Glimmer of Hope", pages: 55 },
                { id: "c5", name: "The Final Stand", pages: 80 },
                { id: "c6", name: "Epilogue", pages: 20 }
            ],
            hashtags: ["magic", "adventure", "fantasy", "epic", "mystery"]
        },
        "book-2": {
            id: "book-2",
            title: "Stars Beyond Reach",
            author: "B. Storyteller",
            authorId: "author-b",
            authorPic: "https://placehold.co/40x40/33FF66/FFFFFF?text=BS",
            cover: "https://placehold.co/300x400/4682B4/FFFFFF?text=Sci-Fi+Book",
            blurb: "Humanity's last hope lies on a distant exoplanet, but the journey there is fraught with unforeseen cosmic dangers.",
            fullBlurb: "In a future ravaged by ecological collapse, humanity's last hope rests on the discovery of Kepler-186f, a habitable exoplanet light-years away. Captain Eva Rostova leads a desperate mission aboard the starship 'Odyssey,' carrying the last remnants of human civilization in cryogenic sleep. The journey is fraught with unforeseen cosmic dangers, from rogue black holes to sentient nebulae. As their resources dwindle and internal conflicts arise, Eva must confront not only the vast emptiness of space but also the fragility of the human spirit. A gripping science fiction saga that explores themes of survival, sacrifice, and the relentless pursuit of a new home.",
            genre: "Science Fiction",
            likes: 980,
            commentsCount: 42,
            views: 4100,
            pages: 420,
            chapters: [
                { id: "c1", name: "The Last Beacon", pages: 40 },
                { id: "c2", name: "Cryosleep Dreams", pages: 50 },
                { id: "c3", name: "Cosmic Anomalies", pages: 70 },
                { id: "c4", name: "Whispers of a New World", pages: 60 },
                { id: "c5", name: "Arrival", pages: 90 },
                { id: "c6", name: "New Beginnings", pages: 50 }
            ],
            hashtags: ["scifi", "space", "dystopian", "future", "adventure"]
        },
        "book-3": {
            id: "book-3",
            title: "Whispers in the Library",
            author: "A. Writer",
            authorId: "author-a",
            authorPic: "https://placehold.co/40x40/3366FF/FFFFFF?text=AW",
            cover: "https://placehold.co/300x400/8B4513/FFFFFF?text=Mystery+Book",
            blurb: "A reclusive librarian uncovers a century-old secret hidden within the dusty shelves of the town's oldest library.",
            fullBlurb: "Elara, a quiet and reclusive librarian, spends her days meticulously organizing the vast collection of the town's oldest library. One stormy night, a forgotten compartment in a rare manuscript reveals a series of cryptic notes and a faded photograph. As Elara delves into the mystery, she uncovers a century-old secret involving a missing heiress, a hidden fortune, and a betrayal that rocked the town's elite. With each clue, she draws closer to a truth more dangerous than she could have imagined, putting her own life at risk. A classic whodunit with a touch of gothic charm.",
            genre: "Mystery",
            likes: 750,
            commentsCount: 30,
            views: 3500,
            pages: 280,
            chapters: [
                { id: "c1", name: "The Hidden Compartment", pages: 25 },
                { id: "c2", name: "Faded Clues", pages: 35 },
                { id: "c3", name: "Shadows of the Past", pages: 40 },
                { id: "c4", name: "The Unraveling Thread", pages: 50 },
                { id: "c5", name: "Confrontation", pages: 60 },
                { id: "c6", name: "The Truth Revealed", pages: 40 }
            ],
            hashtags: ["mystery", "thriller", "historical", "secrets", "suspense"]
        },
        "book-4": {
            id: "book-4",
            title: "The Last Dragon Rider",
            author: "C. Mythos",
            authorId: "author-c",
            authorPic: "https://placehold.co/40x40/FF6347/FFFFFF?text=CM",
            cover: "https://placehold.co/300x400/6A5ACD/FFFFFF?text=Fantasy+Adventure",
            blurb: "In a world where dragons are legends, a young orphan discovers he is the last of an ancient lineage destined to ride them.",
            fullBlurb: "Orphaned and alone, Elara lives a harsh life in the shadowed city of Veridian. But when a mysterious, scaled egg hatches in her care, she discovers a secret that will change her world forever: she is the last descendant of the legendary Dragon Riders. As dark forces rise and ancient prophecies stir, Elara must learn to bond with her dragon, Ignis, and master powers she never knew she possessed. Their journey will take them across treacherous mountains, through enchanted forests, and into the heart of a war that threatens to consume all of Aerthos. An epic fantasy adventure filled with breathtaking battles, loyal companions, and the unbreakable bond between a girl and her dragon.",
            genre: "Fantasy",
            likes: 2100,
            commentsCount: 150,
            views: 8900,
            pages: 500,
            chapters: [
                { id: "c1", name: "The Orphan's Discovery", pages: 40 },
                { id: "c2", name: "A Scaled Companion", pages: 55 },
                { id: "c3", name: "Whispers of the Past", pages: 70 },
                { id: "c4", name: "The Dragon's Call", pages: 80 },
                { id: "c5", name: "Flight of Destiny", pages: 100 },
                { id: "c6", name: "The Shadow War", pages: 120 },
                { id: "c7", name: "Dawn of a New Era", pages: 35 }
            ],
            hashtags: ["fantasy", "dragons", "adventure", "epic", "destiny"]
        },
        "book-5": {
            id: "book-5",
            title: "Quantum Entanglement Love",
            author: "D. Innovator",
            authorId: "author-d",
            authorPic: "https://placehold.co/40x40/DAA520/FFFFFF?text=DI",
            cover: "https://placehold.co/300x400/87CEEB/FFFFFF?text=Romance+Sci-Fi",
            blurb: "Two scientists, separated by light-years, find their hearts inexplicably linked by a quantum phenomenon.",
            fullBlurb: "Dr. Aris Thorne, a brilliant astrophysicist, is stationed on a research outpost orbiting a distant star. Back on Earth, Dr. Lena Petrova works on a groundbreaking quantum communication project. When an unexpected anomaly occurs during an experiment, their minds and hearts become inexplicably linked by a quantum entanglement. They experience each other's emotions, thoughts, and even physical sensations across the vastness of space. As their bond deepens, they must navigate the complexities of their unique connection, the skepticism of their colleagues, and the dangers of a universe that might not want their love to exist. A unique blend of romance and hard science fiction.",
            genre: "Science Fiction",
            likes: 600,
            commentsCount: 25,
            views: 2800,
            pages: 320,
            chapters: [
                { id: "c1", name: "The Anomaly", pages: 30 },
                { id: "c2", name: "Linked Minds", pages: 40 },
                { id: "c3", name: "Across the Stars", pages: 50 },
                { id: "c4", name: "A Growing Connection", pages: 60 },
                { id: "c5", name: "Challenges and Choices", pages: 70 },
                { id: "c6", name: "Entwined Destinies", pages: 70 }
            ],
            hashtags: ["scifi", "romance", "quantum", "love", "future"]
        }
    },
    readingHistory: {
        "user123": [
            { bookId: "book-1", progress: 75, chapter: 4, page: 15 },
            { bookId: "book-3", progress: 20, chapter: 1, page: 5 }
        ]
    },
    comments: {
        "book-1": [
            {
                id: "comment-1",
                username: "Bookworm",
                profilePictureUrl: "https://placehold.co/40x40/FF33CC/FFFFFF?text=BW",
                text: "Absolutely loved the magic system! So unique and well-explained. #fantasy #magic",
                timestamp: "2024-07-29T10:00:00Z",
                likes: 15,
                replies: [
                    {
                        id: "reply-1",
                        username: "LitLover",
                        profilePictureUrl: "https://placehold.co/40x40/FFFF33/000000?text=LL",
                        text: "Agreed! The world-building was top-notch. @Bookworm",
                        timestamp: "2024-07-29T10:15:00Z"
                    }
                ]
            },
            {
                id: "comment-2",
                username: "ReaderOne",
                profilePictureUrl: "https://placehold.co/40x40/FF5733/FFFFFF?text=R1",
                text: "The plot twists kept me guessing! A must-read for fantasy fans. #mystery",
                timestamp: "2024-07-29T11:30:00Z",
                likes: 8,
                replies: []
            },
            {
                id: "comment-3",
                username: "FantasyFanatic",
                profilePictureUrl: "https://placehold.co/40x40/00CED1/FFFFFF?text=FF",
                text: "Can't wait for the sequel! The ending was perfect.",
                timestamp: "2024-07-29T12:00:00Z",
                likes: 20,
                replies: []
            }
        ],
        "book-2": [
            {
                id: "comment-4",
                username: "SpaceExplorer",
                profilePictureUrl: "https://placehold.co/40x40/8A2BE2/FFFFFF?text=SE",
                text: "A truly epic journey through space. The science was surprisingly accurate!",
                timestamp: "2024-07-28T14:00:00Z",
                likes: 10,
                replies: []
            }
        ]
    },
    notifications: {
        "user123": [
            {
                id: "notif-1",
                type: "like",
                message: "A. Writer liked your comment on 'The Enigmatic Scroll'.",
                timestamp: "2024-07-30T09:00:00Z",
                read: false,
                relatedBookId: "book-1",
                relatedUserId: "author-a",
                relatedUserProfilePic: "https://placehold.co/40x40/3366FF/FFFFFF?text=AW"
            },
            {
                id: "notif-2",
                type: "follow",
                message: "B. Storyteller started following you.",
                timestamp: "2024-07-29T18:00:00Z",
                read: true,
                relatedUserId: "author-b",
                relatedUserProfilePic: "https://placehold.co/40x40/33FF66/FFFFFF?text=BS"
            },
            {
                id: "notif-3",
                type: "comment",
                message: "LitLover replied to your comment on 'The Enigmatic Scroll'.",
                timestamp: "2024-07-29T10:16:00Z",
                read: false,
                relatedBookId: "book-1",
                relatedUserId: "commenter-2",
                relatedUserProfilePic: "https://placehold.co/40x40/FFFF33/000000?text=LL"
            }
        ]
    }
};

// Mock Theme and Font Size Hooks
useTheme = () => {
    const [theme, setTheme] = useState('dark'); // 'dark' or 'light'
    // In a real app, this would use context or a more sophisticated state management
    return { theme, setTheme };
};

useFontSize = () => {
    const [fontSize, setFontSize] = useState(16); // Default font size
    // In a real app, this would use context or a more sophisticated state management
    return { fontSize, setFontSize };
};

// Global constants for colors and gradients
ACCENT_RED = '#FF3B30';
LIGHT_MODE_PRIMARY_RED = '#E11D48';
PRIMARY_BUTTON_GRADIENT_DARK = 'linear-gradient(to right, #FF3B30, #FF0000)';
PRIMARY_BUTTON_GRADIENT_LIGHT = 'linear-gradient(to right, #E11D48, #C00000)';
SECONDARY_BUTTON_DARK_BG = '#333333';
SECONDARY_BUTTON_LIGHT_BG = '#F0F0F0';
SECONDARY_BUTTON_TEXT_DARK = '#E0E0E0';
SECONDARY_BUTTON_TEXT_LIGHT = '#1A1A1A';

// --- Icon Components (Lucide-React equivalents as SVGs) ---
const HeartIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5L12 22z" />
    </svg>
);

const CommentIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const ShareIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
);

const BellIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const HomeIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const ArrowLeftIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
    </svg>
);

const CheckIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const UserPlusIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
);

const LinkIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L10 6.54" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L14 17.46" />
    </svg>
);

const MailIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const FacebookIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-19 11.6 1.1.8 2.5 1.6 4 1.6 4.5 0 8.8-3.6 8.8-8.8 0-.8-.1-1.6-.3-2.3 1.2-.8 2.4-2 3.4-4z" />
    </svg>
);

const InstagramIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
    </svg>
);

const PaperAirplaneIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m22 2-7 20-4-9-9-4 20-7z" />
        <path d="M9.3 9.3 17.7 17.7" />
    </svg>
);

const EyeIcon = ({ className = '', style = {} }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

// --- Heart Animation Component ---
const HeartAnimation = ({ x, y, isLiked, theme }) => {
    const heartColor = isLiked ? 'red' : (theme === 'dark' ? '#e0e0e0' : '#1a1a1a');
    const animationStyle = {
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%) scale(0)',
        opacity: 0,
        animation: 'heartPop 0.6s ease-out forwards',
        pointerEvents: 'none',
        zIndex: 100,
    };

    return (
        <div style={animationStyle}>
            <HeartIcon className="w-16 h-16" style={{ color: heartColor, filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' }} />
            <style>
                {`
                @keyframes heartPop {
                    0% {
                        transform: translate(-50%, -50%) scale(0);
                        opacity: 0;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.2);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0;
                    }
                }
                `}
            </style>
        </div>
    );
};

// --- Notification Component ---
const Notification = ({ message, onUndo, onClose, theme }) => {
    const bgColor = theme === 'dark' ? 'rgba(50, 50, 50, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    const textColor = theme === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const accentColor = theme === 'dark' ? ACCENT_RED : LIGHT_MODE_PRIMARY_RED;

    return (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg flex items-center justify-between z-50 animate-slideUp"
            style={{ backgroundColor: bgColor, color: textColor, maxWidth: '90vw', minWidth: '300px' }}>
            <p className="text-sm font-medium mr-4">{message}</p>
            {onUndo && (
                <button onClick={onUndo} className="text-sm font-bold px-3 py-1 rounded-full" style={{ color: accentColor }}>
                    UNDO
                </button>
            )}
            <button onClick={onClose} className="ml-2 p-1 rounded-full hover:bg-gray-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: textColor }}>
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
            <style>{`
                @keyframes slideUp {
                    0% { transform: translate(-50%, 100%); opacity: 0; }
                    100% { transform: translate(-50%, 0); opacity: 1; }
                }
                .animate-slideUp { animation: slideUp 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

// --- Comments Modal Component ---
const CommentsModal = ({ book, onClose, theme, userId, ACCENT_RED, LIGHT_MODE_PRIMARY_RED, modalOffset, setModalOffset, isDraggingModal, setIsDraggingModal }) => {
    const localDb = localDb || { comments: {}, users: {} };

    const comments = localDb.comments[book.id] || [];
    const textColor = theme === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const subTextColor = theme === 'dark' ? '#bbbbbb' : '#555555';
    const bgColor = theme === 'dark' ? 'rgba(30, 30, 30, 0.98)' : 'rgba(255, 255, 255, 0.98)';
    const borderColor = theme === 'dark' ? '#444444' : '#e0e0e0';
    const accentColor = theme === 'dark' ? ACCENT_RED : LIGHT_MODE_PRIMARY_RED;

    const modalRef = useRef(null);
    const dragStartY = useRef(0);

    const handleDragStart = useCallback((e) => {
        setIsDraggingModal(true);
        dragStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
    }, [setIsDraggingModal]);

    const handleDragMove = useCallback((e) => {
        if (!isDraggingModal) return;
        const currentY = e.touches ? e.touches[0].clientY : e.clientY;
        const deltaY = currentY - dragStartY.current;
        if (deltaY > 0) { // Only allow dragging downwards
            setModalOffset(deltaY);
        }
    }, [isDraggingModal, setModalOffset]);

    const handleDragEnd = useCallback(() => {
        setIsDraggingModal(false);
        const swipeDownThreshold = innerHeight * 0.2; // Close if dragged down 20% of screen height
        if (modalOffset > swipeDownThreshold) {
            setModalOffset(innerHeight); // Animate out
            setTimeout(onClose, 300); // Close after animation
        } else {
            setModalOffset(0); // Snap back to top
        }
    }, [modalOffset, onClose, setModalOffset, setIsDraggingModal]);

    const handleCommentLike = useCallback((commentId) => {
        const currentUser = localDb.users[userId];
        if (!currentUser) {
            console.warn("User not logged in to like comments.");
            return;
        }
        if (!currentUser.commentsLiked) {
            currentUser.commentsLiked = {};
        }

        if (currentUser.commentsLiked[commentId]) {
            delete currentUser.commentsLiked[commentId];
            console.log(`Comment ${commentId} unliked by ${userId}`);
        } else {
            currentUser.commentsLiked[commentId] = true;
            console.log(`Comment ${commentId} liked by ${userId}`);
        }
        // In a real app, this would trigger a state update for comments to re-render.
        // For this demo, we'll just log and assume the UI reflects the localDb change.
    }, [userId, localDb]);

    const handleReply = useCallback((username) => {
        console.log(`Replying to @${username}`);
        // In a real app, this would pre-fill the comment input with @username
    }, []);

    const handleHashtagClick = useCallback((tag) => {
        console.log(`Navigating to search page for hashtag: #${tag}`);
        // Placeholder for navigation to search page
    }, []);

    // Placeholder for sorting comments (e.g., by newest, most liked)
    const [sortOrder, setSortOrder] = useState('newest');
    const sortedComments = useMemo(() => {
        let sorted = [...comments];
        if (sortOrder === 'newest') {
            sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } else if (sortOrder === 'mostLiked') {
            sorted.sort((a, b) => b.likes - a.likes);
        }
        return sorted;
    }, [comments, sortOrder]);


    return (
        <div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-end"
            style={{
                backgroundColor: 'rgba(0,0,0,0.5)', // Dim background
                opacity: modalOffset === innerHeight ? 0 : 1, // Fade out when sliding down
                transition: isDraggingModal ? 'none' : 'opacity 0.3s ease-out',
            }}
            // Tap outside to close
            onClick={(e) => {
                if (modalRef.current && !modalRef.current.contains(e.target) && !isDraggingModal) {
                    setModalOffset(innerHeight);
                    setTimeout(onClose, 300);
                }
            }}
        >
            <div
                ref={modalRef}
                className="relative flex flex-col w-full max-w-md h-[80%] bg-white dark:bg-gray-900 rounded-t-3xl shadow-lg overflow-hidden"
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    transform: `translateY(${modalOffset}px)`,
                    transition: isDraggingModal ? 'none' : 'transform 0.3s ease-out',
                }}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={(e) => { if (e.buttons === 1) handleDragEnd(); }} // Handle mouse leaving while dragging
            >
                {/* Drag Handle */}
                <div className="flex justify-center py-2">
                    <div className="w-10 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                </div>

                {/* Modal Header */}
                <header className="flex justify-between items-center px-4 py-3 border-b" style={{ borderColor: borderColor }}>
                    <h2 className="text-xl font-bold" style={{ color: textColor }}>Comments ({comments.length})</h2>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-2 py-1 rounded-md text-sm"
                        style={{ backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0', color: textColor }}
                    >
                        <option value="newest">Newest</option>
                        <option value="mostLiked">Most Liked</option>
                    </select>
                </header>

                {/* Comments List */}
                <div className="flex-grow overflow-y-auto custom-scrollbar-hide p-4 space-y-6">
                    {sortedComments.length > 0 ? (
                        sortedComments.map(comment => (
                            <div key={comment.id} className="flex items-start space-x-3">
                                <img src={comment.profilePictureUrl} alt={comment.username}
                                    className="w-10 h-10 rounded-full object-cover border-2 flex-shrink-0"
                                    style={{ borderColor: theme === 'dark' ? '#555' : '#ddd' }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/333333/FFFFFF?text=AU'; }}
                                />
                                <div className="flex-grow">
                                    <p className="font-semibold text-base" style={{ color: textColor }}>
                                        {comment.username}
                                        <span className="text-xs ml-2" style={{ color: subTextColor }}>
                                            {new Date(comment.timestamp).toLocaleString()}
                                        </span>
                                    </p>
                                    <p className="text-sm break-words" style={{ color: subTextColor }}>
                                        {comment.text.split(' ').map((word, i) =>
                                            word.startsWith('@') ? (
                                                <span key={i} className="text-blue-400 cursor-pointer hover:underline" onClick={() => console.log(`Navigating to profile of ${word.substring(1)}`)}>{word} </span>
                                            ) : word.startsWith('#') ? (
                                                <span key={i} className="text-blue-400 cursor-pointer hover:underline" onClick={() => handleHashtagClick(word.substring(1))}>{word} </span>
                                            ) : (
                                                <span key={i}>{word} </span>
                                            )
                                        )}
                                    </p>
                                    <div className="flex items-center mt-2 space-x-4 text-xs" style={{ color: subTextColor }}>
                                        <button onClick={() => handleCommentLike(comment.id)} className="flex items-center space-x-1">
                                            <HeartIcon className={`w-4 h-4 ${localDb.users[userId]?.commentsLiked?.[comment.id] ? 'text-red-500' : ''}`} />
                                            <span>{comment.likes}</span>
                                        </button>
                                        <button onClick={() => handleReply(comment.username)} className="font-semibold hover:underline">Reply</button>
                                        {comment.replies && comment.replies.length > 0 && (
                                            <button className="font-semibold hover:underline" onClick={() => console.log('View replies for comment', comment.id)}>
                                                View {comment.replies.length} replies
                                            </button>
                                        )}
                                    </div>
                                    {comment.replies && comment.replies.length > 0 && (
                                        <div className="ml-6 mt-3 space-y-3 border-l-2 pl-3" style={{ borderColor: borderColor }}>
                                            {comment.replies.map(reply => (
                                                <div key={reply.id} className="flex items-start space-x-2">
                                                    <img src={reply.profilePictureUrl} alt={reply.username}
                                                        className="w-8 h-8 rounded-full object-cover border"
                                                        style={{ borderColor: theme === 'dark' ? '#666' : '#ccc' }}
                                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/32x32/333333/FFFFFF?text=AU'; }}
                                                    />
                                                    <div>
                                                        <p className="font-semibold text-sm" style={{ color: textColor }}>{reply.username}</p>
                                                        <p className="text-xs break-words" style={{ color: subTextColor }}>
                                                            {reply.text.split(' ').map((word, i) =>
                                                                word.startsWith('@') ? (
                                                                    <span key={i} className="text-blue-400 cursor-pointer hover:underline" onClick={() => console.log(`Navigating to profile of ${word.substring(1)}`)}>{word} </span>
                                                                ) : word.startsWith('#') ? (
                                                                    <span key={i} className="text-blue-400 cursor-pointer hover:underline" onClick={() => handleHashtagClick(word.substring(1))}>{word} </span>
                                                                ) : (
                                                                    <span key={i}>{word} </span>
                                                                )
                                                            )}
                                                        </p>
                                                        <span className="text-xs mt-1" style={{ color: subTextColor }}>
                                                            {new Date(reply.timestamp).toLocaleString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg mt-10" style={{ color: subTextColor }}>No comments yet. Be the first!</p>
                    )}
                </div>

                {/* Comment Input */}
                <div className="p-4 border-t flex items-center" style={{ borderColor: borderColor }}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-grow p-3 rounded-full focus:outline-none mr-2"
                        style={{
                            backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0',
                            color: textColor,
                            border: `1px solid ${borderColor}`
                        }}
                    />
                    <button className="p-3 rounded-full" style={{ backgroundColor: accentColor }}>
                        <PaperAirplaneIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Share Modal Component ---
const ShareModal = ({ book, onClose, theme, userId, modalOffset, setModalOffset, isDraggingModal, setIsDraggingModal }) => {
    const localDb = localDb || { users: {} };

    const textColor = theme === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const subTextColor = theme === 'dark' ? '#bbbbbb' : '#555555';
    const bgColor = theme === 'dark' ? 'rgba(30, 30, 30, 0.98)' : 'rgba(255, 255, 255, 0.98)';
    const borderColor = theme === 'dark' ? '#444444' : '#e0e0e0';
    const accentColor = theme === 'dark' ? '#0A84FF' : '#1DA1F2'; // A blue for sharing

    const modalRef = useRef(null);
    const dragStartY = useRef(0);
    const [friendsPage, setFriendsPage] = useState(0); // For batch loading friends
    const friendsPerPage = 5;

    const currentUser = localDb.users[userId];
    const friends = currentUser?.friends || [];
    const displayedFriends = friends.slice(0, (friendsPage + 1) * friendsPerPage);
    const hasMoreFriends = friends.length > displayedFriends.length;

    const handleDragStart = useCallback((e) => {
        setIsDraggingModal(true);
        dragStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
    }, [setIsDraggingModal]);

    const handleDragMove = useCallback((e) => {
        if (!isDraggingModal) return;
        const currentY = e.touches ? e.touches[0].clientY : e.clientY;
        const deltaY = currentY - dragStartY.current;
        if (deltaY > 0) { // Only allow dragging downwards
            setModalOffset(deltaY);
        }
    }, [isDraggingModal, setModalOffset]);

    const handleDragEnd = useCallback(() => {
        setIsDraggingModal(false);
        const swipeDownThreshold = innerHeight * 0.2; // Close if dragged down 20% of screen height
        if (modalOffset > swipeDownThreshold) {
            setModalOffset(innerHeight); // Animate out
            setTimeout(onClose, 300); // Close after animation
        } else {
            setModalOffset(0); // Snap back to top
        }
    }, [modalOffset, onClose, setModalOffset, setIsDraggingModal]);

    const handleShareLink = useCallback(() => {
        const link = `https://fablee.com/book/${book.id}`; // Placeholder for book link
        document.execCommand('copy', false, link); // Deprecated but widely supported in iframes
        console.log(`Link copied: ${link}`);
        setModalOffset(innerHeight);
        setTimeout(onClose, 300);
    }, [book, onClose, setModalOffset]);

    const handleShareToFriend = useCallback((friendId) => {
        console.log(`Sharing "${book.title}" with friend ${friendId}`);
        setModalOffset(innerHeight);
        setTimeout(onClose, 300);
    }, [book, onClose, setModalOffset]);

    const handleAddStory = useCallback(() => {
        console.log(`Adding "${book.title}" to story/reading update.`);
        setModalOffset(innerHeight);
        setTimeout(onClose, 300);
    }, [book, onClose, setModalOffset]);

    const handlePostToFeed = useCallback(() => {
        console.log(`Posting "${book.title}" to feed/recommendation.`);
        setModalOffset(innerHeight);
        setTimeout(onClose, 300);
    }, [book, onClose, setModalOffset]);

    return (
        <div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-end"
            style={{
                backgroundColor: 'rgba(0,0,0,0.5)', // Dim background
                opacity: modalOffset === innerHeight ? 0 : 1, // Fade out when sliding down
                transition: isDraggingModal ? 'none' : 'opacity 0.3s ease-out',
            }}
            // Tap outside to close
            onClick={(e) => {
                if (modalRef.current && !modalRef.current.contains(e.target) && !isDraggingModal) {
                    setModalOffset(innerHeight);
                    setTimeout(onClose, 300);
                }
            }}
        >
            <div
                ref={modalRef}
                className="relative flex flex-col w-full max-w-md h-[85%] bg-white dark:bg-gray-900 rounded-t-3xl shadow-lg overflow-hidden"
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    transform: `translateY(${modalOffset}px)`,
                    transition: isDraggingModal ? 'none' : 'transform 0.3s ease-out',
                }}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={(e) => { if (e.buttons === 1) handleDragEnd(); }}
            >
                {/* Drag Handle */}
                <div className="flex justify-center py-2">
                    <div className="w-10 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                </div>

                {/* Modal Header */}
                <header className="flex justify-center items-center px-4 py-3 border-b" style={{ borderColor: borderColor }}>
                    <h2 className="text-xl font-bold" style={{ color: textColor }}>Share "{book.title}"</h2>
                </header>

                <div className="flex-grow overflow-y-auto custom-scrollbar-hide p-4 space-y-6">
                    {/* Direct Share Options */}
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <button onClick={handleShareLink} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-500/10 transition-colors">
                            <LinkIcon className="w-8 h-8 mb-1" style={{ color: subTextColor }} />
                            <span className="text-xs" style={{ color: subTextColor }}>Copy Link</span>
                        </button>
                        <button onClick={() => console.log('Share to SMS')} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-500/10 transition-colors">
                            <MailIcon className="w-8 h-8 mb-1" style={{ color: subTextColor }} />
                            <span className="text-xs" style={{ color: subTextColor }}>SMS</span>
                        </button>
                        <button onClick={() => console.log('Share to Facebook')} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-500/10 transition-colors">
                            <FacebookIcon className="w-8 h-8 mb-1 text-blue-600" />
                            <span className="text-xs" style={{ color: subTextColor }}>Facebook</span>
                        </button>
                        <button onClick={() => console.log('Share to Twitter')} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-500/10 transition-colors">
                            <TwitterIcon className="w-8 h-8 mb-1 text-blue-400" />
                            <span className="text-xs" style={{ color: subTextColor }}>Twitter</span>
                        </button>
                        <button onClick={() => console.log('Share to Instagram')} className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-500/10 transition-colors">
                            <InstagramIcon className="w-8 h-8 mb-1 text-pink-500" />
                            <span className="text-xs" style={{ color: subTextColor }}>Instagram</span>
                        </button>
                        {/* Add more social media options as needed */}
                    </div>

                    {/* Share with Friends */}
                    <div className="mt-6">
                        <h3 className="text-lg font-bold mb-3" style={{ color: textColor }}>Share with friends</h3>
                        {friends.length === 0 ? (
                            <div className="text-center text-sm" style={{ color: subTextColor }}>
                                <p>No friends found.</p>
                                <button onClick={() => console.log('Navigate to find friends')} className="mt-2 text-blue-400 hover:underline">Find Friends</button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-3">
                                    {displayedFriends.map(friend => (
                                        <div key={friend.id} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <img src={friend.profilePictureUrl} alt={friend.username} className="w-10 h-10 rounded-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/333333/FFFFFF?text=FR'; }} />
                                                <span className="font-medium" style={{ color: textColor }}>{friend.username}</span>
                                            </div>
                                            <button
                                                onClick={() => handleShareToFriend(friend.id)}
                                                className="px-4 py-2 rounded-full font-semibold text-sm"
                                                style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000' }}
                                            >
                                                Share
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                {hasMoreFriends && (
                                    <button
                                        onClick={() => setFriendsPage(prev => prev + 1)}
                                        className="mt-4 w-full py-2 rounded-full text-sm font-semibold"
                                        style={{ backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0', color: subTextColor }}
                                    >
                                        View all friends
                                    </button>
                                )}
                            </>
                        )}
                    </div>

                    {/* Book Social Media Specific Functions */}
                    <div className="mt-6">
                        <h3 className="text-lg font-bold mb-3" style={{ color: textColor }}>More Options</h3>
                        <div className="space-y-3">
                            <button onClick={handleAddStory} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-500/10 transition-colors" style={{ color: textColor }}>
                                <InstagramIcon className="w-6 h-6 text-purple-500" />
                                <span>Add to Reading Update</span>
                            </button>
                            <button onClick={handlePostToFeed} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-500/10 transition-colors" style={{ color: textColor }}>
                                <PaperAirplaneIcon className="w-6 h-6" style={{ color: subTextColor }} />
                                <span>Recommend to Followers</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Notification Page Component ---
const NotificationsPage = ({ onClose, theme, userId }) => {
    const localDb = localDb || { notifications: {} };

    const textColor = theme === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const subTextColor = theme === 'dark' ? '#bbbbbb' : '#555555';
    const bgColor = theme === 'dark' ? '#1a1a1a' : '#f0f2f5';
    const cardBg = theme === 'dark' ? '#1e1e1e' : '#ffffff';
    const borderColor = theme === 'dark' ? '#333' : '#e0e0e0';

    const notifications = localDb.notifications[userId] || [];

    const handleNotificationClick = useCallback((notification) => {
        console.log(`Navigating based on notification type: ${notification.type}`);
        // Placeholder for navigation logic
        if (notification.relatedBookId) {
            console.log(`Navigating to book detail for ${notification.relatedBookId}`);
        } else if (notification.relatedUserId) {
            console.log(`Navigating to user profile for ${notification.relatedUserId}`);
        }
        // Mark as read (in a real app, this would update localDb)
        notification.read = true;
        // onClose(); // Optionally close notifications after clicking
    }, [localDb]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col w-screen h-screen custom-scrollbar-hide" style={{ backgroundColor: bgColor, color: textColor }}>
            {/* Header */}
            <header className="flex items-center px-4 py-3 border-b" style={{ borderColor: borderColor, backgroundColor: cardBg }}>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-500/20 transition-colors">
                    <ArrowLeftIcon className="w-6 h-6" style={{ color: textColor }} />
                </button>
                <h1 className="flex-grow text-center text-xl font-bold" style={{ color: textColor }}>Notifications</h1>
                <div className="w-6 h-6"></div> {/* Placeholder for alignment */}
            </header>

            {/* Notifications List */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {notifications.length > 0 ? (
                    notifications.map(notif => (
                        <div
                            key={notif.id}
                            className={`flex items-start p-3 rounded-lg shadow-sm cursor-pointer ${notif.read ? 'opacity-80' : 'font-semibold'}`}
                            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
                            onClick={() => handleNotificationClick(notif)}
                        >
                            <img src={notif.relatedUserProfilePic || 'https://placehold.co/40x40/333333/FFFFFF?text=AU'} alt="User"
                                className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/333333/FFFFFF?text=AU'; }}
                            />
                            <div className="flex-grow">
                                <p className="text-sm" style={{ color: textColor }}>{notif.message}</p>
                                <span className="text-xs" style={{ color: subTextColor }}>
                                    {new Date(notif.timestamp).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg mt-10" style={{ color: subTextColor }}>No new notifications.</p>
                )}
            </div>
        </div>
    );
};

// --- Book Detail Page Component ---
export const BookDetailPage = ({
    book,
    onClose,
    theme,
    fontSize,
    detailOverlayOffset,
    isFeedDragging, // From HomeFeedPage, indicates if the main feed is being dragged
    userId,
    setHomeFeedHeartAnimation,
    onNavigate, // Added for navigation to other book details
    setBookDetailOffset // Function to update the offset from HomeFeedPage
}) => {
    const localDb = localDb || { users: {}, books: {}, readingHistory: {} };
    const ACCENT_RED = ACCENT_RED || '#FF3B30';
    const LIGHT_MODE_PRIMARY_RED = LIGHT_MODE_PRIMARY_RED || '#E11D48';
    const PRIMARY_BUTTON_GRADIENT_DARK = PRIMARY_BUTTON_GRADIENT_DARK || 'linear-gradient(to right, #FF3B30, #FF0000)';
    const PRIMARY_BUTTON_GRADIENT_LIGHT = PRIMARY_BUTTON_GRADIENT_LIGHT || 'linear-gradient(to right, #E11D48, #C00000)';
    const SECONDARY_BUTTON_DARK_BG = SECONDARY_BUTTON_DARK_BG || '#333333';
    const SECONDARY_BUTTON_LIGHT_BG = SECONDARY_BUTTON_LIGHT_BG || '#F0F0F0';
    const SECONDARY_BUTTON_TEXT_DARK = SECONDARY_BUTTON_TEXT_DARK || '#E0E0E0';
    const SECONDARY_BUTTON_TEXT_LIGHT = SECONDARY_BUTTON_TEXT_LIGHT || '#1A1A1A';


    const bookDetailOverlayRef = useRef(null);
    const relatedBooksRef = useRef(null);
    const autoScrollIntervalRef = useRef(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [showFullSynopsis, setShowFullSynopsis] = useState(false);
    const [commentsModalOffset, setCommentsModalOffset] = useState(innerHeight);
    const [shareModalOffset, setShareModalOffset] = useState(innerHeight);
    const [isDraggingCommentsModal, setIsDraggingCommentsModal] = useState(false);
    const [isDraggingShareModal, setIsDraggingShareModal] = useState(false);
    const [isLibraryPopupOpen, setIsLibraryPopupOpen] = useState(false);


    // For controlled swipe back
    const swipeStartXRef = useRef(0);
    const currentDragXRef = useRef(0); // Track current drag position
    const isSwipingBackRef = useRef(false);

    const textColor = theme === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const subTextColor = theme === 'dark' ? '#bbbbbb' : '#555555';
    const cardBgColor = theme === 'dark' ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    const borderColor = theme === 'dark' ? '#444444' : '#e0e0e0';
    const headerTextColor = 'white'; // For the text on the blurred header

    const startAutoScroll = useCallback(() => {
        if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
        }
        const relatedBooks = Object.values(localDb.books).filter(b => b.genre === book.genre && b.id !== book.id);
        if (relatedBooksRef.current && relatedBooks.length > 0) {
            setTimeout(() => {
                const container = relatedBooksRef.current;
                if (container && container.scrollWidth > container.clientWidth) {
                    autoScrollIntervalRef.current = setInterval(() => {
                        if (container) {
                            const scrollAmount = 1;
                            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                                container.scrollLeft = 0;
                            } else {
                                container.scrollLeft += scrollAmount;
                            }
                        } else {
                            clearInterval(autoScrollIntervalRef.current);
                            autoScrollIntervalRef.current = null;
                        }
                    }, 20);
                }
            }, 100);
        }
    }, [book, localDb]);

    const stopAutoScroll = useCallback(() => {
        if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
            autoScrollIntervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (relatedBooksRef.current) {
            startAutoScroll();
        }
        return () => {
            stopAutoScroll();
        };
    }, [startAutoScroll, stopAutoScroll, book]);

    const handleRelatedBooksTouchStart = useCallback(() => {
        stopAutoScroll();
    }, [stopAutoScroll]);

    const handleRelatedBooksTouchEnd = useCallback(() => {
        setTimeout(() => {
            startAutoScroll();
        }, 1000);
    }, [startAutoScroll]);

    useEffect(() => {
        const currentUser = localDb.users[userId];
        const author = localDb.users[book.authorId];

        if (currentUser && author) {
            setIsFollowing(currentUser.followedUsers.includes(author.id));
        } else {
            setIsFollowing(false);
            console.warn("User or author not found for follow toggle initialization. User ID:", userId, "Author ID:", book.authorId);
        }

        if (currentUser && book.id) {
            setIsLiked(currentUser.likedBooks.includes(book.id));
        }

        // Increment view count only once when the page is opened
        if (book.id) {
            if (!sessionStorage.getItem(`viewed_book_${book.id}_${userId}`)) {
                book.views = (book.views || 0) + 1;
                sessionStorage.setItem(`viewed_book_${book.id}_${userId}`, 'true');
                console.log(`View count for ${book.title} incremented to ${book.views}`);
            }
        }

    }, [userId, book.authorId, book.id, localDb]);

    const handleFollowToggle = useCallback(() => {
        const currentUser = localDb.users[userId];
        const author = localDb.users[book.authorId];

        if (!currentUser || !author) {
            console.error("User or author not found for follow toggle. Current User:", currentUser, "Author:", author);
            return;
        }

        if (isFollowing) {
            currentUser.followedUsers = currentUser.followedUsers.filter(id => id !== author.id);
            author.followers = author.followers.filter(id => id !== userId);
            console.log(`User ${userId} unfollowed ${author.username}`);
        } else {
            currentUser.followedUsers.push(author.id);
            author.followers.push(userId);
            console.log(`User ${userId} followed ${author.username}`);
        }
        setIsFollowing(!isFollowing);
        // No notification pop-up for follow/unfollow as per instructions
    }, [isFollowing, userId, book.authorId, localDb]);

    const handleLikeToggle = useCallback((e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }

        const currentUser = localDb.users[userId];
        if (!currentUser || !book) {
            console.error("User or book not found for like toggle.");
            return;
        }

        if (isLiked) { // If currently liked, unlike it
            currentUser.likedBooks = currentUser.likedBooks.filter(id => id !== book.id);
            book.likes = Math.max(0, book.likes - 1);
            console.log(`Book ${book.title} unliked by ${userId}. New likes: ${book.likes}`);
        } else { // If not liked, like it
            currentUser.likedBooks.push(book.id);
            book.likes += 1;
            console.log(`Book ${book.title} liked by ${userId}. New likes: ${book.likes}`);
        }
        setIsLiked(!isLiked);
        // No heart animation for button click
    }, [isLiked, userId, book, localDb]);

    const handleAddToLibrary = useCallback((libraryType) => {
        const currentUser = localDb.users[userId];
        if (!currentUser || !book) {
            console.error("User or book not found for add to library.");
            return;
        }

        if (libraryType === 'myLibrary') {
            if (!Array.isArray(currentUser.myLibrary)) {
                currentUser.myLibrary = [];
            }
            if (currentUser.myLibrary.includes(book.id)) {
                currentUser.myLibrary = currentUser.myLibrary.filter(id => id !== book.id);
                console.log(`"${book.title}" removed from My Library.`);
            } else {
                currentUser.myLibrary.push(book.id);
                console.log(`"${book.title}" added to My Library.`);
            }
        } else if (libraryType === 'readLater') {
            if (!Array.isArray(currentUser.savedBooks)) {
                currentUser.savedBooks = [];
            }
            if (currentUser.savedBooks.includes(book.id)) {
                currentUser.savedBooks = currentUser.savedBooks.filter(id => id !== book.id);
                console.log(`"${book.title}" removed from Read Later.`);
            } else {
                currentUser.savedBooks.push(book.id);
                console.log(`"${book.title}" added to Read Later.`);
            }
        }
        setIsLibraryPopupOpen(false); // Close popup after action
    }, [userId, book, localDb]);

    // --- Reading Progress Logic (Chapter Specific) ---
    const userReadingHistory = localDb.readingHistory[userId] || [];
    const bookReadingEntry = userReadingHistory.find(entry => entry.bookId === book.id);

    let progressPercentage = 0;
    let currentChapter = 1;
    let readingStatus = "Not Started";
    let chapterDisplayName = "";
    let currentPageInChapter = 0;
    let totalPagesInChapter = 0;

    if (bookReadingEntry) {
        progressPercentage = bookReadingEntry.progress || 0;
        currentChapter = bookReadingEntry.chapter || 1;

        const currentChapterData = book.chapters ? book.chapters[currentChapter - 1] : null;

        if (currentChapterData) {
            totalPagesInChapter = currentChapterData.pages;

            if (progressPercentage === 0) {
                currentPageInChapter = 0;
            } else if (progressPercentage === 100) {
                currentPageInChapter = totalPagesInChapter;
            } else {
                let totalBookPagesRead = 0;
                if (book.pages > 0) {
                    totalBookPagesRead = Math.ceil(book.pages * (progressPercentage / 100));
                }

                let cumulativePagesBeforeChapter = 0;
                for (let i = 0; i < currentChapter - 1; i++) {
                    if (book.chapters[i]) {
                        cumulativePagesBeforeChapter += book.chapters[i].pages;
                    }
                }

                currentPageInChapter = Math.max(0, totalBookPagesRead - cumulativePagesBeforeChapter);
                currentPageInChapter = Math.min(currentPageInChapter, totalPagesInChapter);
                if (currentPageInChapter === 0 && progressPercentage > 0) currentPageInChapter = 1;
            }

            if (progressPercentage === 100) {
                readingStatus = "Completed";
                chapterDisplayName = "Completed";
            } else if (progressPercentage > 0) {
                chapterDisplayName = `Chapter ${currentChapter}${currentChapterData.name ? ` - ${currentChapterData.name}` : ''}`;
                readingStatus = "In Progress";
            } else {
                readingStatus = "Not Started";
                chapterDisplayName = `Chapter 1${book.chapters && book.chapters[0] && book.chapters[0].name ? ` - ${book.chapters[0].name}` : ' - Introduction'}`;
            }
        } else {
            readingStatus = "Not Started";
            chapterDisplayName = `Chapter 1${book.chapters && book.chapters[0] && book.chapters[0].name ? ` - ${book.chapters[0].name}` : ' - Introduction'}`;
            currentPageInChapter = 0;
            totalPagesInChapter = book.chapters && book.chapters[0] ? book.chapters[0].pages : 0;
        }

    } else {
        readingStatus = "Not Started";
        chapterDisplayName = `Chapter 1${book.chapters && book.chapters[0] && book.chapters[0].name ? ` - ${book.chapters[0].name}` : ' - Introduction'}`;
        currentPageInChapter = 0;
        totalPagesInChapter = book.chapters && book.chapters[0] ? book.chapters[0].pages : 0;
    }

    // --- Double Tap/Click Logic for Liking (Anywhere on Page) ---
    const lastTapTimeRef = useRef(0);
    const handlePageDoubleTap = useCallback((e) => {
        const currentTime = new Date().getTime();
        const tapDelay = currentTime - lastTapTimeRef.current;
        const DOUBLE_TAP_THRESHOLD = 300;

        if (tapDelay < DOUBLE_TAP_THRESHOLD && tapDelay > 0) {
            const currentUser = localDb.users[userId];
            if (!currentUser || !book) {
                console.error("User or book not found for double tap like.");
                return;
            }
            if (!currentUser.likedBooks.includes(book.id)) {
                currentUser.likedBooks.push(book.id);
                book.likes += 1;
                setIsLiked(true); // Update local state for the button
                console.log(`Book ${book.title} liked by ${userId} via double tap. New likes: ${book.likes}`);
            }
            // Always play animation on double tap, even if already liked
            setHomeFeedHeartAnimation({ x: e.clientX, y: e.clientY, isLiked: true });
            setTimeout(() => setHomeFeedHeartAnimation(null), 600);
        }
        lastTapTimeRef.current = currentTime;
    }, [book, userId, setHomeFeedHeartAnimation, localDb]);

    // Truncate synopsis for "Read More"
    const SYNOPSIS_MAX_LINES = 4;
    const synopsisLines = book.fullBlurb.split('\n');
    const isSynopsisLong = synopsisLines.length > SYNOPSIS_MAX_LINES || book.fullBlurb.length > 300;
    const displayedSynopsis = showFullSynopsis ? book.fullBlurb : synopsisLines.slice(0, SYNOPSIS_MAX_LINES).join('\n');

    // Related books filtering (based on the current book's singular genre)
    const relatedBooks = Object.values(localDb.books).filter(b => b.genre === book.genre && b.id !== book.id);
    const moreFromAuthorBooks = Object.values(localDb.books).filter(b => b.authorId === book.authorId && b.id !== book.id);

    // --- Swipe back from detail page (controlled drag) ---
    const handleDetailTouchStart = useCallback((e) => {
        swipeStartXRef.current = e.touches[0].clientX;
        isSwipingBackRef.current = true;
        // Apply double tap logic to the touch start as well
        handlePageDoubleTap(e.touches[0]);
    }, [handlePageDoubleTap]);

    const handleDetailTouchMove = useCallback((e) => {
        if (!isSwipingBackRef.current) return;
        const deltaX = e.touches[0].clientX - swipeStartXRef.current;
        if (deltaX > 0) { // Only allow dragging right
            setBookDetailOffset(deltaX); // Update the offset for controlled drag
            currentDragXRef.current = deltaX; // Update current drag position
        }
    }, [setBookDetailOffset]);

    const handleDetailTouchEnd = useCallback(() => {
        isSwipingBackRef.current = false;
        const SWIPE_CLOSE_THRESHOLD_PX = innerWidth * 0.3; // Close if dragged more than 30%
        if (currentDragXRef.current > SWIPE_CLOSE_THRESHOLD_PX) {
            setBookDetailOffset(innerWidth); // Animate out
            setTimeout(onClose, 300);
        } else {
            setBookDetailOffset(0); // Snap back to original position
        }
        currentDragXRef.current = 0; // Reset drag
    }, [onClose, setBookDetailOffset]);

    const handleDetailMouseDown = useCallback((e) => {
        swipeStartXRef.current = e.clientX;
        isSwipingBackRef.current = true;
        // Apply double click logic
        handlePageDoubleTap(e);
    }, [handlePageDoubleTap]);

    const handleDetailMouseMove = useCallback((e) => {
        if (!isSwipingBackRef.current || e.buttons !== 1) return;
        const deltaX = e.clientX - swipeStartXRef.current;
        if (deltaX > 0) { // Only allow dragging right
            currentDragXRef.current = deltaX; // Store for mouseUp
            setBookDetailOffset(deltaX); // Update the offset for controlled drag
        }
    }, [setBookDetailOffset]);

    const handleDetailMouseUp = useCallback(() => {
        handleDetailTouchEnd(); // Reuse touch end logic
    }, [handleDetailTouchEnd]);

    const handleDetailMouseLeave = useCallback((e) => {
        if (e.buttons === 1 && isSwipingBackRef.current) { // If mouse button is still pressed
            handleDetailTouchEnd(); // Treat as end of drag
        }
    }, [handleDetailTouchEnd, isSwipingBackRef]);

    const handleAuthorClick = useCallback(() => {
        console.log(`Navigating to author profile page for ${book.authorId}`);
        // Placeholder for navigation logic
    }, [book.authorId]);

    const handleHashtagClick = useCallback((tag) => {
        console.log(`Navigating to search page for hashtag: #${tag}`);
        // Placeholder for navigation to search page
    }, []);

    return (
        <div
            ref={bookDetailOverlayRef}
            className="fixed inset-0 flex flex-col w-screen h-screen z-50 custom-scrollbar-hide"
            style={{
                backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f0f2f5',
                transform: `translateX(${detailOverlayOffset}px)`,
                transition: isSwipingBackRef.current ? 'none' : 'transform 0.3s ease-out', // No transition during drag
                overflowY: 'auto',
                paddingBottom: '60px',
            }}
            onTouchStart={handleDetailTouchStart}
            onTouchMove={handleDetailTouchMove}
            onTouchEnd={handleDetailTouchEnd}
            onTouchCancel={handleDetailTouchEnd}
            onMouseDown={handleDetailMouseDown}
            onMouseMove={handleDetailMouseMove}
            onMouseUp={handleDetailMouseUp}
            onMouseLeave={handleDetailMouseLeave}
            onDoubleClick={handlePageDoubleTap}
        >
            <style>{`
                .custom-scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                @keyframes bounce-shake {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    20% { transform: translateY(-7px) rotate(-5deg); }
                    40% { transform: translateY(0) rotate(5deg); }
                    60% { transform: translateY(-3px) rotate(-3deg); }
                    80% { transform: translateY(0) rotate(2deg); }
                }

                .hover-scale-pulse:hover {
                    transform: scale(1.05);
                    transition: transform 0.2s ease-in-out;
                }
                .active-press-shrink:active {
                    transform: scale(0.95);
                    transition: transform 0.1s ease-out;
                }
            `}</style>

            {/* Blurred Header/Banner Section */}
            <div className="relative w-full flex-shrink-0" style={{ height: '200px', overflow: 'hidden' }}>
                <div className="absolute inset-0 z-0" style={{
                    backgroundImage: `url('${book.cover}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(20px)', // Increased blur
                    WebkitFilter: 'blur(20px)',
                }}></div>
                {/* Opaque overlay on top of the blurred image - adjusted for better blur visibility */}
                <div className="absolute inset-0 z-0" style={{
                    backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)', // Darker overlay for better text contrast
                }}></div>

                {/* Header content (title, back button) on top of the blur */}
                <header className="relative w-full flex justify-between items-start px-6 py-5 z-10"
                    style={{ minHeight: '80px', paddingTop: '20px' }}>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-500/20 transition-colors">
                        <ArrowLeftIcon className="w-6 h-6" style={{ color: headerTextColor }} />
                    </button>
                    <h1 className="text-2xl font-bold text-center drop-shadow-lg flex-grow" style={{ color: headerTextColor }}>Book Details</h1>
                    <div className="w-6 h-6"></div> {/* Placeholder for alignment */}
                </header>

                {/* Book Cover and Title/Author Section (positioned over the blurred header) */}
                <div className="relative w-full flex flex-col items-center -mt-24 z-20"> {/* Adjusted margin-top */}
                    <img src={book.cover} alt={book.title}
                        className="w-48 h-64 object-cover rounded-xl shadow-2xl mb-4 border-4"
                        style={{ borderColor: theme === 'dark' ? '#555' : '#ccc' }}
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x256/cccccc/000000?text=No+Cover'; }}
                    />
                    <h2 className="text-4xl font-extrabold mb-2 text-center leading-tight drop-shadow-lg" style={{ color: headerTextColor }}>{book.title}</h2>

                    {/* Author Info & Follow Button */}
                    <div className="flex items-center justify-center mb-4 text-xl font-medium">
                        <img src={book.authorPic} alt={book.author} className="w-10 h-10 rounded-full object-cover mr-3 border-2"
                            style={{ borderColor: theme === 'dark' ? '#666' : '#999' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/333333/FFFFFF?text=AU'; }} />
                        <span onClick={handleAuthorClick} className="text-xl font-semibold mr-3 cursor-pointer" style={{ color: headerTextColor }}>{book.author}</span>
                        <button
                            onClick={handleFollowToggle}
                            className={`ml-2 px-3 py-1.5 rounded-full font-bold text-base transition-all duration-300 ${isFollowing ? 'bg-transparent border-2' : 'text-white'}`}
                            style={{
                                borderColor: accentColor,
                                color: isFollowing ? accentColor : 'white',
                                background: isFollowing ? 'transparent' : (theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT)
                            }}
                        >
                            {isFollowing ? (
                                <>
                                    <CheckIcon className="w-5 h-5 mr-1.5" /> Following
                                </>
                            ) : (
                                <>
                                    <UserPlusIcon className="w-5 h-5 mr-1.5" /> Follow
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area - scrolls below the sticky header */}
            <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-6 py-8 flex-grow z-10"
                style={{ color: textColor, fontSize: `${fontSize}px` }}>

                {/* Key Stats Section (Views, Likes, Comments) */}
                <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto mb-6 text-center">
                    <div className="flex flex-col items-center justify-center p-3 rounded-xl shadow-md" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                        <EyeIcon className="w-8 h-8 mb-1" style={{ color: subTextColor }} />
                        <span className="text-xl font-bold" style={{ color: textColor }}>{formatNumber(book.views || 0)}</span>
                        <span className="text-sm" style={{ color: subTextColor }}>Views</span>
                    </div>
                    <div
                        onClick={handleLikeToggle}
                        className="flex flex-col items-center justify-center p-3 rounded-xl shadow-md cursor-pointer hover-scale-pulse active-press-shrink"
                        style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}
                    >
                        <HeartIcon className={`w-8 h-8 mb-1 ${isLiked ? 'text-red-500' : ''}`} style={{ color: isLiked ? 'red' : subTextColor }} />
                        <span className="text-xl font-bold" style={{ color: textColor }}>{formatNumber(book.likes)}</span>
                        <span className="text-sm" style={{ color: subTextColor }}>Likes</span>
                    </div>
                    <div
                        onClick={() => { setIsCommentsModalOpen(true); setCommentsModalOffset(0); }}
                        className="flex flex-col items-center justify-center p-3 rounded-xl shadow-md cursor-pointer hover-scale-pulse active-press-shrink"
                        style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}
                    >
                        <CommentIcon
                            className="w-8 h-8 mb-1"
                            style={{ color: subTextColor, animation: 'bounce-shake 2s infinite ease-in-out' }}
                        />
                        <span className="text-xl font-bold" style={{ color: textColor }}>{formatNumber(book.commentsCount)}</span>
                        <span className="text-sm" style={{ color: subTextColor }}>Comments</span>
                    </div>
                </div>

                {/* Hashtags */}
                <div className="w-full flex flex-wrap justify-center gap-2 mb-8">
                    {book.hashtags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:underline"
                            onClick={() => handleHashtagClick(tag)}
                            style={{ backgroundColor: theme === 'dark' ? '#444' : '#eee', color: subTextColor }}>
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Reading Progress */}
                <div className="w-full rounded-xl p-5 mb-10 shadow-inner" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-lg md:text-xl" style={{ color: textColor }}>
                            {chapterDisplayName}
                        </span>
                        {(currentPageInChapter > 0 || totalPagesInChapter > 0) && (
                            <p className="text-sm text-left" style={{ color: subTextColor }}>
                                Page {currentPageInChapter} / {totalPagesInChapter}
                            </p>
                        )}
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4 dark:bg-gray-600">
                        <div className="h-4 rounded-full" style={{ width: `${progressPercentage}%`, backgroundColor: accentColor }}></div>
                    </div>
                </div>

                {/* Synopsis */}
                <div className="w-full mb-10">
                    <h3 className="text-3xl font-bold mb-4 text-left" style={{ color: textColor }}>Synopsis</h3>
                    <p className={`text-lg leading-relaxed text-left ${!showFullSynopsis && isSynopsisLong ? 'line-clamp-4' : ''}`} style={{ color: subTextColor }}>
                        {displayedSynopsis}
                    </p>
                    {isSynopsisLong && (
                        <button
                            onClick={() => setShowFullSynopsis(!showFullSynopsis)}
                            className="flex items-center text-sm font-semibold mt-2 mx-auto"
                            style={{ color: accentColor }}
                        >
                            {showFullSynopsis ? 'Read Less' : 'Read More'}
                            <ArrowLeftIcon className={`w-4 h-4 ml-1 transform ${showFullSynopsis ? 'rotate-90' : '-rotate-90'}`} style={{ color: accentColor }} />
                        </button>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-col gap-4 mb-10 items-center">
                    <button className="py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-white w-11/12 md:w-3/4 lg:w-2/3"
                        style={{
                            background: theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT,
                            boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                        }}>
                        {readingStatus === "Not Started" ? "Start Reading" : "Continue Reading"}
                    </button>
                    <button
                        onClick={() => setIsLibraryPopupOpen(true)}
                        className="py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border-2 w-11/12 md:w-3/4 lg:w-2/3"
                        style={{
                            backgroundColor: theme === 'dark' ? SECONDARY_BUTTON_DARK_BG : SECONDARY_BUTTON_LIGHT_BG,
                            color: theme === 'dark' ? SECONDARY_BUTTON_TEXT_DARK : SECONDARY_BUTTON_TEXT_LIGHT,
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            borderColor: theme === 'dark' ? '#555' : '#bbb'
                        }}
                    >
                        {localDb.users[userId]?.savedBooks.includes(book.id) || localDb.users[userId]?.myLibrary.includes(book.id) ? "Manage Library" : "Add to Library"}
                    </button>
                    <button
                        onClick={() => { setIsShareModalOpen(true); setShareModalOffset(0); }}
                        className="py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border-2 w-11/12 md:w-3/4 lg:w-2/3"
                        style={{
                            backgroundColor: theme === 'dark' ? SECONDARY_BUTTON_DARK_BG : SECONDARY_BUTTON_LIGHT_BG,
                            color: theme === 'dark' ? SECONDARY_BUTTON_TEXT_DARK : SECONDARY_BUTTON_TEXT_LIGHT,
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            borderColor: theme === 'dark' ? '#555' : '#bbb'
                        }}
                    >
                        <ShareIcon className="w-6 h-6 inline-block mr-2" style={{ color: theme === 'dark' ? SECONDARY_BUTTON_TEXT_DARK : SECONDARY_BUTTON_TEXT_LIGHT }} />
                        Share Book
                    </button>
                </div>

                {/* Related Books Section (Auto-scrolling shelf) */}
                <div className="w-full mb-10 p-5 rounded-xl shadow-lg" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                    <h3 className="text-3xl font-bold mb-4 text-left" style={{ color: textColor }}>Related Books</h3>
                    <div
                        ref={relatedBooksRef}
                        className="flex overflow-x-auto pb-4 -mx-6 px-6 custom-scrollbar-hide"
                        style={{ height: '200px' }}
                        onMouseOver={handleRelatedBooksTouchStart} // Use mouseover to stop auto-scroll on hover
                        onMouseOut={handleRelatedBooksTouchEnd} // Use mouseout to resume auto-scroll
                        onTouchStart={handleRelatedBooksTouchStart}
                        onTouchEnd={handleRelatedBooksTouchEnd}
                    >
                        {relatedBooks.length > 0 ? (
                            relatedBooks.map(relatedBook => (
                                <div key={relatedBook.id} className="flex-shrink-0 w-40 mr-4 text-center cursor-pointer"
                                    onClick={() => onNavigate('bookDetail', relatedBook.id, true)}> {/* Added onNavigate */}
                                    <img src={relatedBook.cover} alt={relatedBook.title}
                                        className="w-full h-40 object-cover rounded-lg shadow-md mb-1 border-2"
                                        style={{ borderColor: theme === 'dark' ? '#555' : '#ddd' }}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/cccccc/000000?text=No+Cover'; }}
                                    />
                                    <p className="font-semibold text-sm line-clamp-2" style={{ color: textColor }}>{relatedBook.title}</p>
                                    <p className="text-xs" style={{ color: subTextColor }}>{relatedBook.author}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-lg w-full" style={{ color: subTextColor }}>No related books found.</p>
                        )}
                    </div>
                </div>

                {/* More from Author Section (Auto-scrolling shelf) */}
                <div className="w-full mb-10 p-5 rounded-xl shadow-lg" style={{ backgroundColor: cardBgColor, border: `1px solid ${borderColor}` }}>
                    <h3 className="text-3xl font-bold mb-4 text-left" style={{ color: textColor }}>More from {book.author}</h3>
                    <div
                        className="flex overflow-x-auto pb-4 -mx-6 px-6 custom-scrollbar-hide"
                        style={{ height: '200px' }}
                        onMouseOver={handleRelatedBooksTouchStart} // Reusing auto-scroll for simplicity
                        onMouseOut={handleRelatedBooksTouchEnd}
                        onTouchStart={handleRelatedBooksTouchStart}
                        onTouchEnd={handleRelatedBooksTouchEnd}
                    >
                        {moreFromAuthorBooks.length > 0 ? (
                            moreFromAuthorBooks.map(authorBook => (
                                <div key={authorBook.id} className="flex-shrink-0 w-40 mr-4 text-center cursor-pointer"
                                    onClick={() => onNavigate('bookDetail', authorBook.id, true)}> {/* Added onNavigate */}
                                    <img src={authorBook.cover} alt={authorBook.title}
                                        className="w-full h-40 object-cover rounded-lg shadow-md mb-1 border-2"
                                        style={{ borderColor: theme === 'dark' ? '#555' : '#ddd' }}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/cccccc/000000?text=No+Cover'; }}
                                    />
                                    <p className="font-semibold text-sm line-clamp-2" style={{ color: textColor }}>{authorBook.title}</p>
                                    <p className="text-xs" style={{ color: subTextColor }}>{authorBook.author}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-lg w-full" style={{ color: subTextColor }}>No other books by this author.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Subtle hint for swipe back */}
            <p className="mt-6 mb-8 text-base text-center font-medium tracking-wide" style={{ color: subTextColor }}>
                Swipe right to go back
            </p>

            {/* Comments Modal */}
            {isCommentsModalOpen && (
                <CommentsModal
                    book={book}
                    onClose={() => setIsCommentsModalOpen(false)}
                    theme={theme}
                    userId={userId}
                    ACCENT_RED={ACCENT_RED}
                    LIGHT_MODE_PRIMARY_RED={LIGHT_MODE_PRIMARY_RED}
                    modalOffset={commentsModalOffset}
                    setModalOffset={setCommentsModalOffset}
                    isDraggingModal={isDraggingCommentsModal}
                    setIsDraggingModal={setIsDraggingCommentsModal}
                />
            )}

            {/* Share Modal */}
            {isShareModalOpen && (
                <ShareModal
                    book={book}
                    onClose={() => setIsShareModalOpen(false)}
                    theme={theme}
                    userId={userId}
                    modalOffset={shareModalOffset}
                    setModalOffset={setShareModalOffset}
                    isDraggingModal={isDraggingShareModal}
                    setIsDraggingModal={setIsDraggingShareModal}
                />
            )}

            {/* Add to Library Popup */}
            {isLibraryPopupOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-11/12 max-w-sm" style={{ color: textColor }}>
                        <h3 className="text-xl font-bold mb-4 text-center">Add to Library</h3>
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => handleAddToLibrary('myLibrary')}
                                className="w-full py-3 rounded-lg font-semibold"
                                style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', color: textColor }}
                            >
                                {localDb.users[userId]?.myLibrary.includes(book.id) ? "Remove from My Library" : "Add to My Library"}
                            </button>
                            <button
                                onClick={() => handleAddToLibrary('readLater')}
                                className="w-full py-3 rounded-lg font-semibold"
                                style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', color: textColor }}
                            >
                                {localDb.users[userId]?.savedBooks.includes(book.id) ? "Remove from Read Later" : "Add to Read Later"}
                            </button>
                            <button
                                onClick={() => { console.log('Create New Library - Placeholder'); setIsLibraryPopupOpen(false); }}
                                className="w-full py-3 rounded-lg font-semibold text-blue-400 hover:underline"
                            >
                                Create New Library
                            </button>
                            <button
                                onClick={() => setIsLibraryPopupOpen(false)}
                                className="w-full py-3 rounded-lg font-semibold mt-4"
                                style={{ backgroundColor: theme === 'dark' ? '#555' : '#ddd', color: textColor }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Home Feed Page Component ---
export const HomeFeedPage = ({ onNavigate, userId, currentUserName, currentUserProfilePic }) => {
    const { theme } = useTheme();
    const { fontSize } = useFontSize();
    const localDb = localDb || { users: {}, books: {} };
    const ACCENT_RED = ACCENT_RED || '#FF3B30';
    const LIGHT_MODE_PRIMARY_RED = LIGHT_MODE_PRIMARY_RED || '#E11D48';
    const PRIMARY_BUTTON_GRADIENT_DARK = PRIMARY_BUTTON_GRADIENT_DARK || 'linear-gradient(to right, #FF3B30, #FF0000)';
    const PRIMARY_BUTTON_GRADIENT_LIGHT = PRIMARY_BUTTON_GRADIENT_LIGHT || 'linear-gradient(to right, #E11D48, #C00000)';
    const SECONDARY_BUTTON_DARK_BG = SECONDARY_BUTTON_DARK_BG || '#333333';
    const SECONDARY_BUTTON_LIGHT_BG = SECONDARY_BUTTON_LIGHT_BG || '#F0F0F0';
    const SECONDARY_BUTTON_TEXT_DARK = SECONDARY_BUTTON_TEXT_DARK || '#E0E0E0';
    const SECONDARY_BUTTON_TEXT_LIGHT = SECONDARY_BUTTON_TEXT_LIGHT || '#1A1A1A';


    const [displayBooks, setDisplayBooks] = useState([]);
    const [actualIndex, setActualIndex] = useState(1);
    const [isBookDetailOpen, setIsBookDetailOpen] = useState(false);
    const [selectedBookForDetail, setSelectedBookForDetail] = useState(null);
    const [heartAnimation, setHeartAnimation] = useState(null);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    // States for main feed swipe
    const [feedStartPos, setFeedStartPos] = useState({ x: 0, y: 0 });
    const [currentVerticalDragOffset, setCurrentVerticalDragOffset] = useState(0);
    const [currentHorizontalDragOffset, setCurrentHorizontalDragOffset] = useState(0);
    const [isFeedDragging, setIsFeedDragging] = useState(false);
    const [feedSwipeDirectionLocked, setFeedSwipeDirectionLocked] = useState(null);
    const [isFeedAnimatingVertical, setIsFeedAnimatingVertical] = useState(false);
    const [isFeedAnimatingHorizontal, setIsFeedAnimatingHorizontal] = useState(false);

    // Used to track the index *before* an horizontal snap, so the 'old' card can animate out correctly.
    const prevActualIndexRef = useRef(null);

    // State for the horizontal offset of the detail overlay (for left swipe entry)
    const [detailOverlayOffset, setDetailOverlayOffset] = useState(innerWidth);

    // States for comments and share modals (declared here for HomeFeedPage)
    const [commentsModalOffset, setCommentsModalOffset] = useState(innerHeight);
    const [shareModalOffset, setShareModalOffset] = useState(innerHeight);
    const [isDraggingCommentsModal, setIsDraggingCommentsModal] = useState(false);
    const [isDraggingShareModal, setIsDraggingShareModal] = useState(false);

    // States for notification system (removed notification pop-up for follow/unfollow)
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [undoAction, setUndoAction] = useState(null);
    const notificationTimerRef = useRef(null);

    const mainFeedRef = useRef(null);

    const user = localDb.users[userId];
    const userGenres = user?.selectedGenres || [];

    const getRecommendedBooks = useCallback(() => {
        const allBooks = Object.values(localDb.books);
        const genreMatchedBooks = allBooks.filter(book => userGenres.includes(book.genre));
        genreMatchedBooks.sort((a, b) => b.likes - a.likes || Math.random() - 0.5);

        const otherBooks = allBooks.filter(book => !userGenres.includes(book.genre));
        otherBooks.sort((a, b) => b.likes - a.likes || Math.random() - 0.5);

        const combinedBooks = [...genreMatchedBooks, ...otherBooks];
        return combinedBooks.length > 0 ? combinedBooks : allBooks.sort((a, b) => b.likes - a.likes || Math.random() - 0.5);
    }, [userGenres, localDb]);

    const getRecommendedBooksWithClones = useCallback(() => {
        const actualBooks = getRecommendedBooks();
        if (actualBooks.length === 0) {
            return [];
        }

        // Ensure there are at least two actual books for cloning to work meaningfully
        if (actualBooks.length === 1) {
            // If only one book, clone it twice to allow looping
            return [{ ...actualBooks[0], id: actualBooks[0].id + '-cloneA' }, ...actualBooks, { ...actualBooks[0], id: actualBooks[0].id + '-cloneB' }];
        }

        const firstBookClone = { ...actualBooks[0], id: actualBooks[0].id + '-clone-first' };
        const lastBookClone = { ...actualBooks[actualBooks.length - 1], id: actualBooks[actualBooks.length - 1].id + '-clone-last' };

        const booksWithClones = [lastBookClone, ...actualBooks, firstBookClone];
        return booksWithClones;
    }, [getRecommendedBooks]);

    useEffect(() => {
        const booksWithClones = getRecommendedBooksWithClones();
        if (booksWithClones.length > 0) {
            setDisplayBooks(booksWithClones);
            setActualIndex(1);
            setCurrentVerticalDragOffset(0);
            setCurrentHorizontalDragOffset(0);
        } else {
            setDisplayBooks([]);
            setActualIndex(0);
            setCurrentVerticalDragOffset(0);
            setCurrentHorizontalDragOffset(0);
        }
    }, [userId, getRecommendedBooksWithClones]);

    useEffect(() => {
        if (isFeedAnimatingVertical && displayBooks.length > 2) {
            const timer = setTimeout(() => {
                if (actualIndex === displayBooks.length - 1) {
                    setIsFeedAnimatingVertical(false);
                    setActualIndex(1);
                } else if (actualIndex === 0) {
                    setIsFeedAnimatingVertical(false);
                    setActualIndex(displayBooks.length - 2);
                }
            }, 300);
            return () => clearTimeout(timer);
        }
        if (isFeedAnimatingHorizontal) {
            const timer = setTimeout(() => {
                setIsFeedAnimatingHorizontal(false);
                prevActualIndexRef.current = null;
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [actualIndex, displayBooks, isFeedAnimatingVertical, isFeedAnimatingHorizontal]);

    const bgColor = theme === 'dark' ? '#1a1a1a' : '#f0f2f5';
    const textColor = theme === 'dark' ? '#e0e0e0' : '#1a1a1a';
    const cardBg = theme === 'dark' ? '#1e1e1e' : '#ffffff';
    const borderColor = theme === 'dark' ? '#333' : '#e0e0e0';
    const accentColor = theme === 'dark' ? ACCENT_RED : LIGHT_MODE_PRIMARY_RED;
    const iconColor = theme === 'dark' ? '#bbb' : '#666';

    const MIN_DRAG_DISTANCE = 5;
    const SWIPE_OPEN_THRESHOLD_PX = innerWidth * 0.3; // 30% of screen width

    const handleFeedStart = useCallback((clientX, clientY) => {
        setFeedStartPos({ x: clientX, y: clientY });
        setIsFeedDragging(true);
        setFeedSwipeDirectionLocked(null);
        setIsFeedAnimatingVertical(false);
        setIsFeedAnimatingHorizontal(false);
        prevActualIndexRef.current = null;

        if (mainFeedRef.current) {
            mainFeedRef.current.style.touchAction = 'none'; // Disable browser scrolling
        }

        // Pre-select book for detail view on horizontal swipe start
        const currentBook = displayBooks[actualIndex];
        setSelectedBookForDetail(currentBook);
        setIsBookDetailOpen(true); // Render the detail page, but keep it off-screen initially
    }, [displayBooks, actualIndex]);

    const handleFeedMove = useCallback((clientX, clientY) => {
        if (!isFeedDragging) return;

        const deltaX = clientX - feedStartPos.x;
        const deltaY = clientY - feedStartPos.y;

        if (!feedSwipeDirectionLocked) {
            const absDeltaX = Math.abs(deltaX);
            const absDeltaY = Math.abs(deltaY);

            if (absDeltaX > MIN_DRAG_DISTANCE || absDeltaY > MIN_DRAG_DISTANCE) {
                if (absDeltaX > absDeltaY) {
                    setFeedSwipeDirectionLocked('x');
                    setCurrentVerticalDragOffset(0);
                } else {
                    setFeedSwipeDirectionLocked('y');
                    setCurrentHorizontalDragOffset(0);
                    setDetailOverlayOffset(innerWidth); // Ensure detail page is off-screen if vertical swipe
                }
            }
        }

        if (feedSwipeDirectionLocked === 'y') {
            setCurrentVerticalDragOffset(deltaY);
            setCurrentHorizontalDragOffset(0);
            setDetailOverlayOffset(innerWidth); // Ensure detail page is off-screen
        } else if (feedSwipeDirectionLocked === 'x') {
            setCurrentHorizontalDragOffset(deltaX);
            setCurrentVerticalDragOffset(0);

            // Update detail overlay offset during drag for controlled swipe
            if (deltaX < 0) { // Right-to-left swipe (open detail)
                setDetailOverlayOffset(Math.max(0, innerWidth + deltaX));
            } else { // Left-to-right swipe (save/remove)
                setDetailOverlayOffset(innerWidth); // Keep detail page off-screen
            }
        }
    }, [isFeedDragging, feedStartPos, feedSwipeDirectionLocked, setDetailOverlayOffset]);

    const handleFeedEnd = useCallback(() => {
        if (!isFeedDragging) return;
        setIsFeedDragging(false);
        setFeedSwipeDirectionLocked(null);

        if (mainFeedRef.current) {
            mainFeedRef.current.style.touchAction = 'auto'; // Re-enable browser scrolling
        }

        const deltaX = currentHorizontalDragOffset;
        const deltaY = currentVerticalDragOffset;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        if (feedSwipeDirectionLocked === 'y' && absDeltaY > innerHeight * 0.1) { // Vertical swipe threshold
            setIsFeedAnimatingVertical(true);
            let newActualIndex = actualIndex;

            if (deltaY < 0) { // Swipe up
                newActualIndex = actualIndex + 1;
            } else { // Swipe down
                newActualIndex = actualIndex - 1;
            }
            setActualIndex(newActualIndex);
            setCurrentVerticalDragOffset(0);
            setCurrentHorizontalDragOffset(0);
            setDetailOverlayOffset(innerWidth); // Ensure detail page is off-screen
        } else if (feedSwipeDirectionLocked === 'x' && absDeltaX > MIN_DRAG_DISTANCE) {
            const currentBook = displayBooks[actualIndex];

            if (deltaX < 0) { // Right-to-left swipe (open detail)
                if (absDeltaX > SWIPE_OPEN_THRESHOLD_PX) {
                    setIsFeedAnimatingHorizontal(true);
                    setDetailOverlayOffset(0); // Animate to fully open
                    // The current card will animate off-screen left due to its transform logic
                } else {
                    setIsFeedAnimatingHorizontal(true); // Animate back
                    setDetailOverlayOffset(innerWidth); // Animate back off-screen
                    setTimeout(() => setIsBookDetailOpen(false), 300); // Hide after animation
                }
            } else { // Left-to-right swipe (save/remove)
                try {
                    const currentUser = localDb.users[userId];
                    if (currentUser) {
                        if (!Array.isArray(currentUser.savedBooks)) {
                            currentUser.savedBooks = [];
                        }

                        const isBookAlreadySaved = currentUser.savedBooks.includes(currentBook.id);

                        if (isBookAlreadySaved) {
                            currentUser.savedBooks = currentUser.savedBooks.filter(id => id !== currentBook.id);
                            setNotificationMessage(`"${currentBook.title}" removed from Read Later.`);
                            setUndoAction(() => () => {
                                currentUser.savedBooks.push(currentBook.id);
                                setShowNotification(false);
                            });
                        } else {
                            currentUser.savedBooks.push(currentBook.id);
                            setNotificationMessage(`"${currentBook.title}" saved to Read Later.`);
                            setUndoAction(() => () => {
                                currentUser.savedBooks = currentUser.savedBooks.filter(id => id !== currentBook.id);
                                setShowNotification(false);
                            });
                        }
                        setShowNotification(true);
                        if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
                        notificationTimerRef.current = setTimeout(() => {
                            setShowNotification(false);
                        }, 5000);

                        setIsFeedAnimatingHorizontal(true);
                        prevActualIndexRef.current = actualIndex; // Store previous index for animation

                        setActualIndex(prevIndex => {
                            const nextVerticalIndex = (prevIndex + 1);
                            if (displayBooks.length > 2 && nextVerticalIndex === displayBooks.length - 1) {
                                return 1;
                            }
                            return nextVerticalIndex;
                        });

                        setCurrentHorizontalDragOffset(0);
                        setDetailOverlayOffset(innerWidth); // Ensure detail page is off-screen

                        // The setIsFeedAnimatingHorizontal(false) will be handled by useEffect after 300ms
                    } else {
                        console.error("User not found for saving/removing book.");
                        setNotificationMessage("Please log in to save/remove books.");
                        setShowNotification(true);
                        if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
                        notificationTimerRef.current = setTimeout(() => {
                            setShowNotification(false);
                        }, 3000);
                        setCurrentHorizontalDragOffset(0);
                        setDetailOverlayOffset(innerWidth);
                        setIsFeedAnimatingHorizontal(true); // Animate back
                        setTimeout(() => {
                            setIsFeedAnimatingHorizontal(false);
                        }, 300);
                    }
                } catch (err) {
                    console.error("Error saving/removing book:", err);
                    setNotificationMessage("Failed to process book action.");
                    setShowNotification(true);
                    if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
                    notificationTimerRef.current = setTimeout(() => {
                        setShowNotification(false);
                    }, 3000);
                    setCurrentHorizontalDragOffset(0);
                    setDetailOverlayOffset(innerWidth);
                    setIsFeedAnimatingHorizontal(true); // Animate back
                    setTimeout(() => {
                        setIsFeedAnimatingHorizontal(false);
                    }, 300);
                }
            }
            setCurrentVerticalDragOffset(0);
        } else { // If drag was too small or no direction locked, reset
            setCurrentVerticalDragOffset(0);
            setCurrentHorizontalDragOffset(0);
            setDetailOverlayOffset(innerWidth);
            setIsBookDetailOpen(false); // Ensure detail page is closed if no meaningful swipe
            setSelectedBookForDetail(null);
            setIsFeedAnimatingVertical(false);
            setIsFeedAnimatingHorizontal(false);
        }
    }, [isFeedDragging, currentVerticalDragOffset, currentHorizontalDragOffset, actualIndex, displayBooks, userId, feedSwipeDirectionLocked, setDetailOverlayOffset, localDb]);


    const handleFeedMouseDown = useCallback((e) => { handleFeedStart(e.clientX, e.clientY); }, [handleFeedStart]);
    const handleFeedMouseMove = useCallback((e) => { handleFeedMove(e.clientX, e.clientY); }, [handleFeedMove]);
    const handleFeedMouseUp = useCallback(() => { handleFeedEnd(); }, [handleFeedEnd]);
    const handleFeedMouseLeave = useCallback((e) => { if (e.buttons === 1) handleFeedEnd(); }, [isFeedDragging, handleFeedEnd]);

    const handleFeedTouchStart = useCallback((e) => { handleFeedStart(e.touches[0].clientX, e.touches[0].clientY); }, [handleFeedStart]);
    const handleFeedTouchMove = useCallback((e) => { handleFeedMove(e.touches[0].clientX, e.touches[0].clientY); }, [handleFeedMove]);
    const handleFeedTouchEnd = useCallback(() => { handleFeedEnd(); }, [handleFeedEnd]);

    const handleDetailCloseAnimation = useCallback(() => {
        setDetailOverlayOffset(innerWidth);
        setTimeout(() => {
            setIsBookDetailOpen(false);
            setSelectedBookForDetail(null);
        }, 300);
    }, [setDetailOverlayOffset]);

    // Double-tap anywhere on the feed
    const handleFeedDoubleTap = useCallback((e) => {
        const currentTime = new Date().getTime();
        const tapDelay = currentTime - feedStartPos.x; // Reusing feedStartPos.x as a timestamp for double tap check
        const DOUBLE_TAP_THRESHOLD = 300;

        if (tapDelay < DOUBLE_TAP_THRESHOLD && tapDelay > 0) {
            const currentBook = displayBooks[actualIndex];
            const currentUser = localDb.users[userId];
            if (!currentUser || !currentBook) {
                console.error("User or book not found for double tap like.");
                return;
            }

            if (!currentUser.likedBooks.includes(currentBook.id)) {
                currentUser.likedBooks.push(currentBook.id);
                currentBook.likes += 1;
                console.log(`Book ${currentBook.title} liked by ${userId} via double tap. New likes: ${currentBook.likes}`);
            }
            // Always play animation on double tap, even if already liked
            setHeartAnimation({ x: e.clientX, y: e.clientY, isLiked: true });
            setTimeout(() => setHeartAnimation(null), 600);
        }
        setFeedStartPos({ x: currentTime, y: e.clientY }); // Update last tap time
    }, [displayBooks, actualIndex, userId, localDb, feedStartPos.x]);


    const renderBookCardContent = (book) => {
        if (!book) {
            console.error("renderBookCardContent received a null or undefined book:", book);
            return null;
        }

        const currentUser = localDb.users[userId];
        const isBookLiked = currentUser?.likedBooks?.includes(book.id) || false;
        const isAuthorFollowing = currentUser?.followedUsers?.includes(book.authorId) || false;

        const handleCardLikeToggle = (e) => {
            e.stopPropagation(); // Prevent double-tap from triggering if clicked on button
            if (!currentUser) {
                setNotificationMessage("Please log in to like books.");
                setShowNotification(true);
                if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
                notificationTimerRef.current = setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
                return;
            }

            if (isBookLiked) { // If currently liked, unlike it
                currentUser.likedBooks = currentUser.likedBooks.filter(id => id !== book.id);
                book.likes = Math.max(0, book.likes - 1);
                console.log(`Book ${book.title} unliked by ${userId}. New likes: ${book.likes}`);
            } else { // If not liked, like it
                currentUser.likedBooks.push(book.id);
                book.likes += 1;
                console.log(`Book ${book.title} liked by ${userId}. New likes: ${book.likes}`);
            }
            setDisplayBooks([...displayBooks]); // Force re-render to update like state
            // No heart animation for button click
        };

        const handleFollowToggle = useCallback(() => {
            const author = localDb.users[book.authorId];
            if (!currentUser || !author) {
                console.error("User or author not found for follow toggle.");
                return;
            }

            if (isAuthorFollowing) {
                currentUser.followedUsers = currentUser.followedUsers.filter(id => id !== author.id);
                author.followers = author.followers.filter(id => id !== userId);
                console.log(`User ${userId} unfollowed ${author.username}`);
            } else {
                currentUser.followedUsers.push(author.id);
                author.followers.push(userId);
                console.log(`User ${userId} followed ${author.username}`);
            }
            setDisplayBooks([...displayBooks]); // Force re-render to update follow state
        }, [isAuthorFollowing, userId, book.authorId, currentUser, displayBooks, localDb]);

        const handleAuthorClick = useCallback(() => {
            console.log(`Navigating to author profile page for ${book.authorId}`);
            // Placeholder for navigation logic
        }, [book.authorId]);

        const handleHashtagClick = useCallback((tag) => {
            console.log(`Navigating to search page for hashtag: #${tag}`);
            // Placeholder for navigation to search page
        }, []);

        const [showFullBlurb, setShowFullBlurb] = useState(false);
        const BLURB_MAX_LINES = 3;
        const blurbLines = book.blurb.split('\n');
        const isBlurbLong = blurbLines.length > BLURB_MAX_LINES || book.blurb.length > 150;
        const displayedBlurb = showFullBlurb ? book.blurb : blurbLines.slice(0, BLURB_MAX_LINES).join('\n');


        return (
            <div
                className="flex flex-col justify-end p-4 shadow-lg rounded-lg overflow-hidden h-full w-full relative"
                style={{
                    backgroundImage: `url('${book.cover}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: cardBg,
                    zIndex: 20,
                }}
            >
                {/* Visual overlay for text readability */}
                <div className="absolute inset-0 z-10" style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
                }}></div>

                <div className="relative z-20 flex flex-col justify-end h-full w-full text-white pb-16 pl-4 pr-20">
                    <div className="flex items-center mb-2">
                        <img src={book.authorPic} alt={book.author} className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/333333/FFFFFF?text=AU'; }} />
                        <span onClick={handleAuthorClick} className="font-bold text-lg drop-shadow-md cursor-pointer">{book.author}</span>
                        <button
                            onClick={handleFollowToggle}
                            className={`ml-2 px-2 py-0.5 rounded-full font-bold text-xs transition-all duration-300 ${isAuthorFollowing ? 'bg-transparent border' : 'text-white'}`}
                            style={{
                                borderColor: accentColor,
                                color: isAuthorFollowing ? accentColor : 'white',
                                background: isAuthorFollowing ? 'transparent' : (theme === 'dark' ? PRIMARY_BUTTON_GRADIENT_DARK : PRIMARY_BUTTON_GRADIENT_LIGHT)
                            }}
                        >
                            {isAuthorFollowing ? 'Following' : 'Follow'}
                        </button>
                    </div>
                    <h3 className="text-3xl font-bold mb-1 drop-shadow-md">{book.title}</h3>
                    <p className={`text-base mb-3 drop-shadow-md ${!showFullBlurb && isBlurbLong ? 'line-clamp-3' : ''}`}>
                        {displayedBlurb}
                    </p>
                    {isBlurbLong && (
                        <button
                            onClick={() => setShowFullBlurb(!showFullBlurb)}
                            className="text-sm font-semibold mt-1 text-white/80 hover:underline self-start"
                        >
                            {showFullBlurb ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {book.hashtags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-800 bg-opacity-50 text-xs px-2 py-1 rounded-full drop-shadow-sm cursor-pointer hover:underline"
                                onClick={() => handleHashtagClick(tag)}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="absolute right-4 bottom-28 z-20 flex flex-col space-y-6">
                    <div
                        onClick={handleCardLikeToggle}
                        className="flex flex-col items-center text-white cursor-pointer hover-scale-pulse active-press-shrink"
                    >
                        <HeartIcon className={`w-10 h-10 ${isBookLiked ? 'text-red-500' : ''}`} style={{ color: isBookLiked ? 'red' : 'white' }} />
                        <span className="text-sm font-semibold">{book.likes}</span>
                    </div>
                    <div
                        onClick={(e) => { e.stopPropagation(); setSelectedBookForDetail(book); setIsCommentsModalOpen(true); setCommentsModalOffset(0); }}
                        className="flex flex-col items-center text-white cursor-pointer hover-scale-pulse active-press-shrink"
                    >
                        <CommentIcon className="w-10 h-10" />
                        <span className="text-sm font-semibold">{book.commentsCount}</span>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); setSelectedBookForDetail(book); setIsShareModalOpen(true); setShareModalOffset(0); }}
                        className="flex flex-col items-center text-white focus:outline-none cursor-pointer hover-scale-pulse active-press-shrink"
                    >
                        <ShareIcon className="w-10 h-10" />
                        <span className="text-sm font-semibold">Share</span>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden font-inter" style={{ backgroundColor: bgColor, color: textColor, fontSize: `${fontSize}px` }}>
            {/* Header */}
            <header className={`absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-3 z-30`} style={{ backgroundColor: 'transparent' }}>
                <div className="logo">
                    <img src="https://media.discordapp.net/attachments/1207034079200157696/1392004384585678858/vGnhz7v.png?ex=6873e35b&is=687291db&hm=8a157631f9336f433dcdbd9462438ab46836a9337fdc9532e4f9895546511115&=&width=1020&height=1020" alt="Fablee Logo" className="h-10 w-auto" />
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsNotificationsOpen(true)} className="p-2 rounded-full hover:bg-gray-500/20 transition-colors">
                        <BellIcon className="w-8 h-8" style={{ color: iconColor }} />
                    </button>
                </div>
            </header>

            {/* Main Feed Container - Full screen reel */}
            <main
                ref={mainFeedRef}
                className="relative flex-grow w-full h-full overflow-hidden"
                onTouchStart={handleFeedTouchStart}
                onTouchMove={handleFeedTouchMove}
                onTouchEnd={handleFeedTouchEnd}
                onTouchCancel={handleFeedTouchEnd}
                onMouseDown={handleFeedMouseDown}
                onMouseMove={handleFeedMouseMove}
                onMouseUp={handleFeedMouseUp}
                onMouseLeave={handleFeedMouseLeave}
                onDoubleClick={handleFeedDoubleTap} // Double tap anywhere on the feed
            >
                {displayBooks.length > 0 ? (
                    displayBooks.map((book, index) => {
                        let currentBookTranslateX = 0;
                        let currentBookTranslateY = 0;
                        let currentZIndex = 1;

                        const isActiveBook = index === actualIndex;
                        const isPrevActiveBook = prevActualIndexRef.current !== null && index === prevActualIndexRef.current;

                        if (isFeedDragging && feedSwipeDirectionLocked === 'x') {
                            if (isActiveBook) { // Current active card being dragged
                                currentBookTranslateX = currentHorizontalDragOffset;
                                currentZIndex = 3;
                            } else if (currentHorizontalDragOffset > 0 && index === (actualIndex === 0 ? displayBooks.length - 2 : actualIndex - 1)) {
                                // This is the previous card that should appear from left when swiping right
                                currentBookTranslateX = -innerWidth + currentHorizontalDragOffset;
                                currentZIndex = 2;
                            } else if (currentHorizontalDragOffset < 0 && index === (actualIndex === displayBooks.length - 1 ? 1 : actualIndex + 1)) {
                                // This is the next card that should appear from right when swiping left
                                currentBookTranslateX = innerWidth + currentHorizontalDragOffset;
                                currentZIndex = 2;
                            } else {
                                currentBookTranslateX = (index - actualIndex) * innerWidth;
                                currentZIndex = 1;
                            }
                            currentBookTranslateY = 0;
                        } else if (isFeedAnimatingHorizontal) {
                            // This logic ensures the leaving card moves out and the entering card moves in smoothly
                            if (isPrevActiveBook) { // The card that just left (swiped right)
                                currentBookTranslateX = innerWidth; // Animate off to the right
                                currentZIndex = 2; // Keep it above the next card briefly
                            } else if (isActiveBook) { // The card that just became active (swiped right)
                                currentBookTranslateX = 0; // Animate into view
                                currentZIndex = 3;
                            } else { // Other cards
                                currentBookTranslateX = (index - actualIndex) * innerWidth;
                                currentZIndex = 1;
                            }
                            currentBookTranslateY = 0;
                        } else { // Not dragging, not animating horizontal
                            currentBookTranslateY = (index - actualIndex) * innerHeight + currentVerticalDragOffset;
                            currentBookTranslateX = 0;
                            if (isActiveBook) currentZIndex = 3;
                        }

                        let transitionStyle = 'none';
                        if (!isFeedDragging && (isFeedAnimatingVertical || isFeedAnimatingHorizontal)) {
                            transitionStyle = 'transform 0.3s ease-out';
                        }

                        return (
                            <div
                                key={book.id}
                                className="absolute inset-0 w-full h-full"
                                style={{
                                    transform: `translateY(${currentBookTranslateY}px) translateX(${currentBookTranslateX}px)`,
                                    transition: transitionStyle,
                                    zIndex: currentZIndex
                                }}
                            >
                                {renderBookCardContent(book)}
                            </div>
                        );
                    })
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-lg" style={{ color: iconColor }}>
                        No more books to display.
                    </div>
                )}
            </main>

            {/* Book Detail View (Full Screen Overlay) - Render BookDetailPage component */}
            {isBookDetailOpen && selectedBookForDetail && (
                <BookDetailPage
                    book={selectedBookForDetail}
                    onClose={handleDetailCloseAnimation}
                    theme={theme}
                    fontSize={fontSize}
                    detailOverlayOffset={detailOverlayOffset}
                    isFeedDragging={isFeedDragging} // Pass this to disable interaction with feed
                    userId={userId}
                    setHomeFeedHeartAnimation={setHeartAnimation}
                    onNavigate={onNavigate}
                    setBookDetailOffset={setDetailOverlayOffset} // Pass setter for controlled drag
                />
            )}

            {/* Bottom Navigation */}
            <nav className={`fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 shadow-lg z-40`} style={{ backgroundColor: cardBg, borderTop: `1px solid ${borderColor}` }}>
                <button onClick={() => onNavigate('home')} className="flex flex-col items-center text-xs font-medium focus:outline-none">
                    <HomeIcon className={`w-6 h-6 ${true ? 'text-red-500' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-700')}`} />
                    <span className={`${true ? 'text-red-500' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-700')}`}>Home</span>
                </button>
                {/* Other navigation buttons would go here */}
            </nav>

            {/* Heart Animation for Home Feed */}
            {heartAnimation && (
                <HeartAnimation
                    x={heartAnimation.x}
                    y={heartAnimation.y}
                    isLiked={heartAnimation.isLiked}
                    theme={theme}
                />
            )}

            {/* Notification for Home Feed (for Save/Remove from Read Later) */}
            {showNotification && (
                <Notification
                    message={notificationMessage}
                    onUndo={undoAction}
                    onClose={() => setShowNotification(false)}
                    theme={theme}
                />
            )}

            {/* Comments Modal */}
            {isCommentsModalOpen && selectedBookForDetail && (
                <CommentsModal
                    book={selectedBookForDetail}
                    onClose={() => setIsCommentsModalOpen(false)}
                    theme={theme}
                    userId={userId}
                    ACCENT_RED={ACCENT_RED}
                    LIGHT_MODE_PRIMARY_RED={LIGHT_MODE_PRIMARY_RED}
                    modalOffset={commentsModalOffset}
                    setModalOffset={setCommentsModalOffset}
                    isDraggingModal={isDraggingCommentsModal}
                    setIsDraggingModal={setIsDraggingCommentsModal}
                />
            )}

            {/* Share Modal */}
            {isShareModalOpen && selectedBookForDetail && (
                <ShareModal
                    book={selectedBookForDetail}
                    onClose={() => setIsShareModalOpen(false)}
                    theme={theme}
                    userId={userId}
                    modalOffset={shareModalOffset}
                    setModalOffset={setShareModalOffset}
                    isDraggingModal={isDraggingShareModal}
                    setIsDraggingModal={setIsDraggingShareModal}
                />
            )}

            {/* Notifications Page */}
            {isNotificationsOpen && (
                <NotificationsPage
                    onClose={() => setIsNotificationsOpen(false)}
                    theme={theme}
                    userId={userId}
                />
            )}

            {/* Overlay to block interaction with main feed when modals are open */}
            {(isCommentsModalOpen || isShareModalOpen) && (isDraggingCommentsModal || isDraggingShareModal) && (
                <div className="fixed inset-0 z-50" style={{ pointerEvents: 'auto' }}></div>
            )}
        </div>
    );
};

// Main App component to render everything
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedBookId, setSelectedBookId] = useState(null);
    const { theme } = useTheme();

    const handleNavigate = useCallback((page, bookId = null) => {
        setCurrentPage(page);
        setSelectedBookId(bookId);
    }, []);

    // Mock userId for demonstration
    const userId = "user123";
    const currentUserName = localDb.users[userId]?.username || "Guest";
    const currentUserProfilePic = localDb.users[userId]?.profilePictureUrl || "https://placehold.co/40x40/333333/FFFFFF?text=U";

    // Find the selected book object if a bookId is set
    const selectedBook = selectedBookId ? localDb.books[selectedBookId] : null;

    return (
        <div className="App">
            <style>
                {`
                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                    overflow: hidden; /* Prevent body scroll when app is active */
                }
                .custom-scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                `}
            </style>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

            {currentPage === 'home' && (
                <HomeFeedPage
                    onNavigate={handleNavigate}
                    userId={userId}
                    currentUserName={currentUserName}
                    currentUserProfilePic={currentUserProfilePic}
                />
            )}
            {/* BookDetailPage is rendered conditionally within HomeFeedPage, so no need to render it here again */}
        </div>
    );
}
// #endregion
// #region Section Five - Main App Component

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentBookId, setCurrentBookId] = useState(null); // This state will primarily be used by HomeFeedPage internally now
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState('Guest');
  const [currentUserProfilePic, setCurrentUserProfilePic] = useState('');
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [signupData, setSignupData] = useState({
    currentStep: 1,
    email: '',
    username: '',
    password: '',
    selectedGenres: [],
    profilePictureFile: null,
    profilePicturePreview: ''
  });

  // State for global notifications, managed by App
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [undoAction, setUndoAction] = useState(null);
  const notificationTimerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleLogin = async (email, password) => {
    return new Promise((resolve, reject) => {
      const user = Object.values(localDb.users).find(u => u.email === email && u.password === password);
      if (user) {
        setCurrentUserId(user.id);
        setCurrentUserName(user.username);
        setCurrentUserProfilePic(user.profilePictureUrl);
        setCurrentPage('home');
        resolve();
      } else {
        reject(new Error("Invalid email or password."));
      }
    });
  };

  const handleSignup = async (email, password, username, genres, profilePictureUrl) => {
    return new Promise((resolve, reject) => {
      const isEmailTaken = Object.values(localDb.users).some(u => u.email === email);
      if (isEmailTaken) {
        reject(new Error("This email is already registered. Please login."));
        return;
      }
      const isUsernameTaken = Object.values(localDb.users).some(u => u.username === username);
      if (isUsernameTaken) {
        reject(new Error("This username is already taken. Please choose another."));
        return;
      }

      const newUserId = generateId();
      const newUser = {
        id: newUserId,
        email,
        username,
        password,
        bio: '',
        profilePictureUrl,
        createdAt: new Date().toISOString(),
        selectedGenres: genres,
        likedBooks: [],
        savedBooks: [], // Ensure savedBooks is initialized here
        followedUsers: [],
        followers: [],
        publishedBooks: [],
      };
      localDb.users[newUserId] = newUser;
      localDb.notifications[newUserId] = [];
      localDb.readingHistory[newUserId] = [];

      setCurrentUserId(newUserId);
      setCurrentUserName(username);
      setCurrentUserProfilePic(profilePictureUrl);
      setCurrentPage('home');
      setSignupData({
        currentStep: 1,
        email: '',
        username: '',
        password: '',
        selectedGenres: [],
        profilePictureFile: null,
        profilePicturePreview: ''
      });
      resolve();
    });
  };

  const handleLogout = async () => {
    setCurrentUserId(null);
    setCurrentUserName('Guest');
    setCurrentUserProfilePic('');
    setCurrentPage('login');
    setSignupData({
      currentStep: 1,
      email: '',
      username: '',
      password: '',
      selectedGenres: [],
      profilePictureFile: null,
      profilePicturePreview: ''
    });
  };

  const navigate = (page, params = {}) => {
    setCurrentPage(page);
    // currentBookId is now primarily managed within HomeFeedPage for detail overlay
    // but we keep the state here for potential future direct navigation if needed
    if (params.bookId) {
      setCurrentBookId(params.bookId);
    } else {
      setCurrentBookId(null);
    }
  };

  // Function to show global notifications
  const showGlobalNotification = useCallback((message, undoCallback = null) => {
    setNotificationMessage(message);
    setUndoAction(() => undoCallback); // Wrap in a function to prevent immediate execution
    setShowNotification(true);
    if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
    notificationTimerRef.current = setTimeout(() => {
      setShowNotification(false);
      setUndoAction(null); // Clear undo action after notification fades
    }, 5000);
  }, []);

  // Define renderPage function here, within the App component's scope
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
      case 'signup':
        return <SignupPage onSignup={handleSignup} onNavigate={navigate} signupData={signupData} setSignupData={setSignupData} />;
      case 'home':
        return (
          <HomeFeedPage
            onNavigate={navigate} // Still pass navigate for general page changes (e.g., to profile, search)
            userId={currentUserId}
            currentUserName={currentUserName}
            currentUserProfilePic={currentUserProfilePic}
            theme={theme}
            fontSize={fontSize}
            showGlobalNotification={showGlobalNotification}
          />
        );
      // 'bookDetail' case is removed here because HomeFeedPage now handles its display as an overlay
      default:
        return currentUserId ? (
          <HomeFeedPage
            onNavigate={navigate}
            userId={currentUserId}
            currentUserName={currentUserName}
            currentUserProfilePic={currentUserProfilePic}
            theme={theme}
            fontSize={fontSize}
            showGlobalNotification={showGlobalNotification}
          />
        ) : (
          <LoginPage onLogin={handleLogin} onNavigate={navigate} />
        );
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
        <AuthContext.Provider value={{ userId: currentUserId, userName: currentUserName, userProfilePic: currentUserProfilePic }}>
          <>
            {renderPage()}
            {currentUserId && currentPage !== 'login' && currentPage !== 'signup' && (
              <div className={`fixed bottom-0 left-0 right-0 z-40 p-3 shadow-lg flex justify-around items-center transition-colors duration-500 ease-out`}
                   style={{ backgroundColor: theme === 'dark' ? '#222222' : '#F5F5F5', borderTop: `1px solid ${theme === 'dark' ? '#444444' : '#E0E0E0'}` }}>
                <button onClick={() => navigate('home')} className="flex flex-col items-center text-xs font-medium focus:outline-none">
                  <HomeIcon className={`w-6 h-6 ${currentPage === 'home' ? 'text-red-500' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-700')}`} />
                  <span className={`${currentPage === 'home' ? 'text-red-500' : (theme === 'dark' ? 'text-gray-400' : 'text-gray-700')}`}>Home</span>
                </button>
              </div>
            )}
            {showNotification && (
              <Notification
                message={notificationMessage}
                onUndo={undoAction}
                onClose={() => setShowNotification(false)}
                theme={theme}
              />
            )}
          </>
        </AuthContext.Provider>
      </FontSizeContext.Provider>
    </ThemeContext.Provider>
  );
}
// #endregion