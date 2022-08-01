import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

interface SideNavigationItem {
  name: string
  to: string
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

const SideNavigation = () => {
  const navigation = [
    { name: 'home', to: '.' },
    { name: 'demo', to: '/demo' },
  ].filter(Boolean) as SideNavigationItem[]

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          key={item.name}
          to={item.to}
          className={clsx(
            'text-gray-300 hover:bg-gray-700 hover:text-white',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
          )}
          // active="bg-gray-900 text-white"
        >
          {item.name}
        </NavLink>
      ))}
    </>
  )
}

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
    <div className="mt-5 overflow-y-auto">
      <nav className="px-2 space-y-1">
        <SideNavigation />
      </nav>
    </div>
    <div className="flex flex-col pt-3 flex-1 overflow-hidden">
      <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
    </div>
  </div>
)
