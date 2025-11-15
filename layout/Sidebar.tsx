import React from 'react';
import { ActiveView } from '../App';
import { 
    PanelIcon, AsistentesIcon, CheckinIcon, ReportesIcon, TalleresIcon, 
    ConferenciasIcon, BoxLunchIcon, CheckInProIcon 
} from '../components/Icons';

interface SidebarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

const NavItem: React.FC<{
    viewName: ActiveView;
    label: string;
    icon: React.ReactElement;
    isActive: boolean;
    onClick: () => void;
}> = ({ viewName, label, icon, isActive, onClick }) => (
    <li className="px-2">
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); onClick(); }}
            className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200
            ${isActive 
                ? 'bg-blue-100 text-blue-700 font-semibold' 
                : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
            }`}
        >
            <span className="mr-3">{icon}</span>
            {label}
        </a>
    </li>
);

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
    const navItems: { view: ActiveView; label: string; icon: React.ReactElement }[] = [
        { view: 'panel', label: 'Panel', icon: <PanelIcon /> },
        { view: 'asistentes', label: 'Asistentes', icon: <AsistentesIcon /> },
        { view: 'check-in', label: 'Check-in', icon: <CheckinIcon /> },
        { view: 'reportes', label: 'Reportes', icon: <ReportesIcon /> },
        { view: 'talleres', label: 'Talleres', icon: <TalleresIcon /> },
        { view: 'conferencias', label: 'Conferencias', icon: <ConferenciasIcon /> },
        { view: 'box-lunch', label: 'Box Lunch', icon: <BoxLunchIcon /> },
    ];

    return (
        <aside className="w-64 bg-white flex-shrink-0 border-r border-gray-200 flex flex-col">
            <div className="h-20 flex items-center justify-center px-4 border-b border-gray-200">
                <div className="flex items-center text-xl font-bold text-gray-800">
                    <CheckInProIcon />
                    <span>Check-in Pro</span>
                </div>
            </div>
            <nav className="flex-1 py-4">
                <ul>
                    {navItems.map(item => (
                        <NavItem 
                            key={item.view}
                            viewName={item.view}
                            label={item.label}
                            icon={item.icon}
                            isActive={activeView === item.view}
                            onClick={() => setActiveView(item.view)}
                        />
                    ))}
                </ul>
            </nav>
            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                        N
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-gray-800">Admin</p>
                        <p className="text-xs text-gray-500">admin@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
