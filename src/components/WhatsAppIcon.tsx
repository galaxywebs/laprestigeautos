import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic WhatsApp vector icon featuring the complete rounded speech bubble
 * and the telephone handset receiver inside.
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = 'w-4 h-4', size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Outer speech bubble with pointer tail */}
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.1l-.29-.17-3.04.8 1.4-2.96-.19-.3A8.16 8.16 0 013.8 11.91c0-4.54 3.7-8.24 8.25-8.24z" />
      {/* Complete telephone receiver handset positioned inside */}
      <path d="M16.82 14.9c-.2-.1-.7-.35-1.42-.71-.24-.12-.41-.18-.58.07-.17.25-.66.83-.81 1-.15.17-.3.19-.55.07-.25-.12-1.07-.39-2.04-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.58-1.39-.79-1.91-.21-.5-.42-.43-.58-.44-.15-.01-.32-.01-.5-.01s-.46.06-.7.32c-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.17 1.85 2.82 4.48 3.96.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.44-.27z" />
    </svg>
  );
};
