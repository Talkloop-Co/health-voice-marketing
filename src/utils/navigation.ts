export const scrollToSection = (sectionId: string) => {
  // Small delay to ensure DOM is ready after navigation
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 100);
};

export const handleSectionNavigation = (sectionId: string) => {
  // If we're already on the home page, just scroll
  if (window.location.pathname === '/') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    return false; // Prevent default navigation
  }
  
  // If we're on a different page, navigate to home and then scroll
  window.location.href = `/#${sectionId}`;
  return false;
};