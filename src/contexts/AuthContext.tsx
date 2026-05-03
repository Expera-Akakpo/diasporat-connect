import { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "expediteur" | "destinataire";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => void;
  isLoading: boolean;
}

const DEMO_USERS: (AuthUser & { password: string })[] = [
  {
    id: "1",
    name: "Kouassi Georges",
    email: "kouassi@diaspora.io",
    password: "demo",
    role: "expediteur",
    avatar: "/figmaAssets/background-border-6.svg",
  },
  {
    id: "2",
    name: "Amadou Mbaye",
    email: "amadou@diaspora.io",
    password: "demo",
    role: "destinataire",
    avatar: "/figmaAssets/background-border-4.svg",
  },
  {
    id: "3",
    name: "Aminata Diallo",
    email: "aminata@diaspora.io",
    password: "demo",
    role: "destinataire",
    avatar: "/figmaAssets/background-border-8.svg",
  },
];

const STORAGE_KEY = "diaspora_auth_user";

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<AuthUser> => {
    await new Promise((r) => setTimeout(r, 800));
    const match = DEMO_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!match) throw new Error("Email ou mot de passe incorrect");
    const { password: _, ...authUser } = match;
    setUser(authUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
    return authUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
