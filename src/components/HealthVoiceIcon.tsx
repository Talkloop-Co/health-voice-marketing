interface HealthVoiceIconProps {
  className?: string;
}

const HealthVoiceIcon = ({ className = "h-5 w-5" }: HealthVoiceIconProps) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z" 
        fill="url(#paint0_linear_32_32)"
      />
      <path 
        d="M17.4656 19.6544C17.6308 19.7303 17.817 19.7476 17.9934 19.7036C18.1697 19.6595 18.3259 19.5567 18.436 19.412L18.72 19.04C18.869 18.8413 19.0623 18.68 19.2845 18.5689C19.5066 18.4578 19.7516 18.4 20 18.4H22.4C22.8243 18.4 23.2313 18.5686 23.5314 18.8686C23.8314 19.1687 24 19.5757 24 20V22.4C24 22.8243 23.8314 23.2313 23.5314 23.5314C23.2313 23.8314 22.8243 24 22.4 24C18.5809 24 14.9182 22.4829 12.2177 19.7823C9.51714 17.0818 8 13.4191 8 9.6C8 9.17565 8.16857 8.76869 8.46863 8.46863C8.76869 8.16857 9.17565 8 9.6 8H12C12.4243 8 12.8313 8.16857 13.1314 8.46863C13.4314 8.76869 13.6 9.17565 13.6 9.6V12C13.6 12.2484 13.5422 12.4934 13.4311 12.7155C13.32 12.9377 13.1587 13.131 12.96 13.28L12.5856 13.5608C12.4387 13.6729 12.3352 13.8325 12.2926 14.0123C12.25 14.1921 12.271 14.3811 12.352 14.5472C13.4453 16.7679 15.2435 18.5638 17.4656 19.6544Z" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="paint0_linear_32_32" x1="0" y1="0" x2="33" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066CC"/>
          <stop offset="1" stopColor="#0D98A5"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HealthVoiceIcon;