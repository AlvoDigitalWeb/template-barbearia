import React, { createContext, useContext, useState, useEffect } from 'react';

export type CookieConsent = {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
};

interface ConsentContextType {
  consent: CookieConsent;
  hasResponded: boolean;
  isManagerOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<CookieConsent>) => void;
  openManager: () => void;
  closeManager: () => void;
}

const STORAGE_KEY = 'gdpr-cookie-consent';

const DEFAULT_CONSENT: CookieConsent = {
  essential: true,
  statistics: false,
  marketing: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);
  const [hasResponded, setHasResponded] = useState<boolean>(false);
  const [isManagerOpen, setIsManagerOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConsent({ ...DEFAULT_CONSENT, ...parsed });
        setHasResponded(true);
      } catch (e) {
        console.error('Error parsing cookie consent', e);
      }
    }
  }, []);

  const saveToStorage = (newConsent: CookieConsent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setHasResponded(true);
    setIsManagerOpen(false);
  };

  const acceptAll = () => {
    saveToStorage({
      essential: true,
      statistics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveToStorage({
      essential: true,
      statistics: false,
      marketing: false,
    });
  };

  const savePreferences = (prefs: Partial<CookieConsent>) => {
    saveToStorage({
      ...consent,
      ...prefs,
      essential: true, // Always true
    });
  };

  const openManager = () => setIsManagerOpen(true);
  const closeManager = () => setIsManagerOpen(false);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasResponded,
        isManagerOpen,
        acceptAll,
        rejectAll,
        savePreferences,
        openManager,
        closeManager,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};
