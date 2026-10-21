import React from 'react';

interface RoundedStarIconProps {
  className?: string;
}

/**
 * A luxury 5-pointed star with smoothly rounded tips and rounded valleys
 * styled in our gold brand aesthetic.
 */
export const RoundedStarIcon: React.FC<RoundedStarIconProps> = ({
  className = 'w-4 h-4 text-[#D4AF37] fill-[#D4AF37]',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.6L14.75 8.25L20.9 9.05L16.4 13.35L17.55 19.45L12 16.45L6.45 19.45L7.6 13.35L3.1 9.05L9.25 8.25L12 2.6Z" />
    </svg>
  );
};
