

export function WhatsAppFloatingButton() {
  const phoneNumber = '5511999999999'; // Placeholder
  const defaultMessage = 'Olá, vim pelo site e gostaria de agendar um horário!';
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M20.52 3.48A11.79 11.79 0 0012.03 0C5.4 0 .03 5.37.03 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.93 11.93 0 0012.03 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.51-8.52zM12.03 21.82c-1.81 0-3.58-.48-5.12-1.39l-.37-.22-3.67.96.98-3.57-.24-.37A9.82 9.82 0 012.21 12c0-5.41 4.41-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.87a9.75 9.75 0 012.89 6.95c0 5.41-4.41 9.82-9.82 9.82zm5.38-7.36c-.29-.14-1.7-.84-1.97-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.89 1.13-.16.19-.32.21-.61.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.36.43-.54.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44.01 1.44 1.03 2.83 1.18 3.03.14.19 2.04 3.12 4.95 4.37.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
      </svg>
    </a>
  );
}
