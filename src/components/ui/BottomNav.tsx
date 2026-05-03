'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BottomNavProps {
  role: 'expediteur' | 'destinataire'
}

export default function BottomNav({ role }: BottomNavProps) {
  const pathname = usePathname()
  
  const links = role === 'expediteur' 
    ? [
        { href: '/expediteur', label: 'Accueil', icon: '🏠' },
        { href: '/expediteur', label: 'Envoyer', icon: '✈️' }, // Same as home for now
        { href: '/expediteur/historique', label: 'Historique', icon: '📜' },
      ]
    : [
        { href: '/wallet', label: 'Accueil', icon: '🏠' },
        { href: '/retrait', label: 'Retrait', icon: '💰' },
        { href: '/historique', label: 'Historique', icon: '📜' },
      ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-2">
      <div className="max-w-md mx-auto flex justify-around py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center px-4 py-1 rounded-lg transition ${
              pathname === link.href
                ? 'text-teal-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-xs mt-1">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}