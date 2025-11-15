import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
             <img 
                src="https://i.postimg.cc/4HRNb1Fb/Whats-App-Image-2025-10-27-at-8-30-30-AM-(1).jpg"
                alt="Logo del Simposio de Logística e Innovación" 
                className="h-14 w-auto"
            />
        </div>
        <div className="text-center">
            <h1 className="text-lg md:text-xl font-bold text-gray-800">7º Simposio "Logística e Innovación"</h1>
        </div>
        <div className="flex items-center">
            <img 
                src="https://i.postimg.cc/rR2FC9YJ/Whats-App-Image-2025-10-27-at-8-27-04-AM.jpg" 
                alt="Logo del Tecnológico Nacional de México" 
                className="h-14 w-auto"
            />
        </div>
      </div>
    </header>
  );
};

export default Header;