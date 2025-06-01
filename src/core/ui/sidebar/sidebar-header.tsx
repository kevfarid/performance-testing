import { Menu, X } from "lucide-react"

interface SidebarHeaderProps {
  isOpen: boolean
  onToggle: () => void
}

export default function SidebarHeader({ isOpen, onToggle }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
      {isOpen && <h1 className="text-xl font-bold truncate">My App</h1>}
      <button onClick={onToggle} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  )
}
