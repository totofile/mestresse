import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePlanner = () => {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState(0);
  
  const days = [
    { name: 'Lundi', date: '17/02', id: 'monday' },
    { name: 'Mardi', date: '18/02', id: 'tuesday' },
    { name: 'Mercredi', date: '19/02', id: 'wednesday' },
    { name: 'Jeudi', date: '20/02', id: 'thursday' },
    { name: 'Vendredi', date: '21/02', id: 'friday' }
  ];

  // Sample data for journal summary - updated to match TeacherPlannerUIDesign
  const journalSummaries = [
    [
      { time: '8:30 - 9:00', title: 'RITUEL', color: '#EEEEEE', details: 'Faire l\'appel, rappel sur la couleur du comportement' },
      { time: '9:00 - 10:15', title: 'MATHÉMATIQUES', color: '#FF99C8', details: 'Caractériser les propriétés du rectangle et du carré' },
      { time: '10:15 - 10:30', title: 'RECREATION', color: '#A9DEF9', details: '' },
      { time: '10:30 - 11:30', title: 'FRANÇAIS', color: '#D0F4DE', details: 'Lecture et compréhension' },
      { time: '11:30 - 12:00', title: 'SCIENCES', color: '#E4C1F9', details: 'Comprendre la notion de plan et savoir se repérer sur une carte' },
      { time: '12:00 - 12:15', title: 'GOÛTER', color: '#FCF6BD', details: 'Savoir vivre en collectivité' }
    ],
    [
      { time: '8:30 - 9:00', title: 'RITUEL', color: '#EEEEEE' },
      { time: '9:00 - 10:00', title: 'HISTOIRE', color: '#FCF6BD' },
      { time: '10:00 - 10:15', title: 'RECREATION', color: '#A9DEF9' },
      { time: '10:15 - 11:45', title: 'SCIENCES', color: '#E4C1F9' }
    ],
    [
      { time: '8:30 - 9:00', title: 'RITUEL', color: '#EEEEEE' },
      { time: '9:00 - 10:15', title: 'ARTS', color: '#FCF6BD' },
      { time: '10:15 - 10:30', title: 'RECREATION', color: '#A9DEF9' },
      { time: '10:30 - 11:45', title: 'SPORT', color: '#D0F4DE' }
    ],
    [
      { time: '8:30 - 9:00', title: 'RITUEL', color: '#EEEEEE' },
      { time: '9:00 - 10:15', title: 'GÉOGRAPHIE', color: '#FF99C8' },
      { time: '10:15 - 10:30', title: 'RECREATION', color: '#A9DEF9' },
      { time: '10:30 - 11:45', title: 'MUSIQUE', color: '#E4C1F9' }
    ],
    [
      { time: '8:30 - 9:00', title: 'RITUEL', color: '#EEEEEE' },
      { time: '9:00 - 10:15', title: 'ANGLAIS', color: '#FCF6BD' },
      { time: '10:15 - 10:30', title: 'RECREATION', color: '#A9DEF9' },
      { time: '10:30 - 11:45', title: 'ÉDUCATION CIVIQUE', color: '#D0F4DE' }
    ]
  ];

  return (
    <div className="mx-auto bg-gray-50 min-h-screen">
      {/* Header with navigation and icons */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center">
          <button className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm">accueil vue d'ensemble Cahier Journal</span>
        </div>
        
        <div className="flex space-x-2">
          {/* Home icon */}
          <button className="p-2 bg-gray-100 rounded-full" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          
          {/* Journal icon */}
          <button className="p-2 bg-pink-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </button>
          
          {/* Pen icon */}
          <button className="p-2 bg-yellow-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          
          {/* Calendar icon */}
          <button className="p-2 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          
          {/* People icon */}
          <button className="p-2 bg-blue-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          
          {/* Time icon */}
          <button className="p-2 bg-purple-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          {/* Group icon */}
          <button className="p-2 bg-purple-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
        
        <div className="flex space-x-2">
          {/* Settings icon */}
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          {/* Menu icon */}
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Days of the week navigation */}
        <div className="flex justify-between items-center px-2 py-4">
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2 relative">
            {days.map((day, index) => (
          <div key={index} className="relative">
            <div 
              className={`py-2 px-4 rounded-full text-center ${index === activeDay ? 'bg-pink-200' : 'bg-pink-100'}`}
              onClick={() => setActiveDay(index)}
            >
              <div className="font-semibold flex items-center justify-center">
            {day.name} {day.date}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
              </div>
            </div>
            {/* Plus icon with dropdown menu */}
            <div className="flex justify-center mt-1">
              <div className="relative">
            <button 
              onClick={(e) => {
                e.currentTarget.nextElementSibling.classList.toggle('hidden');
              }}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            <div className="hidden absolute z-10 mt-2 -ml-40 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
              {/* Matières section */}
              <div className="py-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100">
              Matières
                </div>
                <div className="pl-4">
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                Cycle 1
              </button>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                Cycle 2
              </button>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                Cycle 3
              </button>
                </div>
              </div>
              
              {/* Pause section */}
              <div className="py-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100">
              Pause
                </div>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Déjeuner
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Récréation
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Rituels
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Sortie
                </button>
              </div>
              
              {/* Type d'activité section */}
              <div className="py-1">
                <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100">
              Type d'activité
                </div>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Rituels
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Sortie
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Devoirs
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              APC
                </button>
              </div>
              
              {/* Create custom field */}
              <div className="py-1">
                <button className="flex items-center w-full px-4 py-2 text-sm text-indigo-600 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Créer un champ personnalisé
                </button>
              </div>
            </div>
              </div>
            </div>
          </div>
            ))}
          </div>
          
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        
        {/* Weekly overview grid */}
      <div className="flex justify-between px-4 py-2 space-x-2">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="flex-1 border rounded-lg p-2">
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs text-gray-500">Vue synthétique du cahier journal</div>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => navigate(`/teacherplanner/${day.id}`)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </button>
            </div>
            
            {/* Day's journal entries */}
            <div className="space-y-2">
              {journalSummaries[dayIndex].map((entry, entryIndex) => (
                <div 
                  key={entryIndex} 
                  className="rounded-lg border p-2 flex flex-col justify-between"
                  style={{ backgroundColor: entry.color + '30', minHeight: '6rem' }}
                  onClick={() => navigate(`/teacherplanner/${day.id}`)}
                >
                  <div className="text-xs text-gray-600">{entry.time}</div>
                  <div className="font-medium">{entry.title}</div>
                  {entry.details && <div className="text-sm text-gray-600 mt-1 line-clamp-2">{entry.details}</div>}
                  <div className="w-full flex justify-end mt-1">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: entry.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePlanner;