import React, { useState } from 'react';

const TeacherPlannerUIDesign = () => {
  const [activeTab, setActiveTab] = useState('monday');
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedSession, setExpandedSession] = useState(2);
  
  // Color palette from provided image
  const colors = {
    pink: '#FF99C8',
    yellow: '#FCF6BD',
    mint: '#D0F4DE',
    blue: '#A9DEF9',
    purple: '#E4C1F9',
    darkText: '#333333',
    lightText: '#666666',
    background: '#FFFFFF',
    border: '#EEEEEE'
  };
  
  const days = [
    { id: 'monday', name: 'Lundi', date: '17/02' },
    { id: 'tuesday', name: 'Mardi', date: '18/02' },
    { id: 'wednesday', name: 'Mercredi', date: '19/02' },
    { id: 'thursday', name: 'Jeudi', date: '20/02' },
    { id: 'friday', name: 'Vendredi', date: '21/02' }
  ];
  
  const sessions = [
    { 
      id: 1, 
      time: '8:30 - 9:00', 
      title: 'RITUEL', 
      color: colors.border,
      details: {
        domain: '',
        competence: '',
        objective: '',
        timeline: [
          {
            duration: '30 minutes',
            grouping: 'Individuel',
            tasks: [
              'Faire l\'appel',
              'rappel sur la couleur du comportement',
              'demander date et météo',
              'voir mot des parents',
              'pendant ce temps les élèves feront leur fiche'
            ],
            materials: ['Fiches rituel sur les heures'],
            notes: ''
          }
        ]
      }
    },
    { 
      id: 2, 
      time: '9:00 - 10:15', 
      title: 'MATHÉMATIQUES', 
      color: colors.pink,
      details: {
        domain: 'Espace et géométrie',
        competence: 'chercher, raisonner',
        objective: 'Caractériser les propriétés du rectangle et du carré',
        timeline: [
          {
            duration: '30 minutes',
            grouping: 'Collectif',
            tasks: [
              '"voici un carré et un rectangle, qu\'est-ce que vous pouvez me dire sur eux: comment les reconnaître?"',
              '=> Inciter les élèves à utiliser leurs outils de géométrie.'
            ],
            materials: [
              'Photocopie du rectangle/carré',
              'gabarit angle droit'
            ],
            notes: ''
          },
          {
            duration: '45 minutes',
            grouping: 'Individuel',
            tasks: [
              '"nous allons lire les consignes ensemble, vous avez 30 min pour finir vos ex"',
              '=> Correction au tableau à la fin des 30 min'
            ],
            materials: ['Fichier de maths p.93'],
            notes: ''
          }
        ]
      }
    },
    { 
      id: 3, 
      time: '10:15 - 10:30', 
      title: 'RECREATION', 
      color: colors.blue,
      details: {
        domain: '',
        competence: '',
        objective: '',
        timeline: []
      }
    },
    { 
      id: 4, 
      time: '10:30 - 11:45', 
      title: 'FRANÇAIS', 
      color: colors.mint,
      details: {
        domain: 'Lecture et compréhension de l\'écrit',
        competence: 'Comprendre le fonctionnement',
        objective: 'Comprendre les différents types de textes',
        timeline: [
          {
            duration: '25 minutes',
            grouping: 'Collectif',
            tasks: [
              'Rappel des différents types de textes vus précédemment',
              'Lecture à voix haute des exemples'
            ],
            materials: [
              'Manuel de français p.45',
              'Tableau des types de textes'
            ],
            notes: 'Adapter pour les élèves en difficulté'
          },
          {
            duration: '50 minutes',
            grouping: 'Individuel puis binômes',
            tasks: [
              'Exercices de reconnaissance des types de textes',
              'Travail en binômes sur la création d\'un texte descriptif'
            ],
            materials: [
              'Fiches d\'exercices',
              'Modèles de textes'
            ],
            notes: ''
          }
        ]
      }
    }
  ];
  
  const toggleSession = (id) => {
    if (expandedSession === id) {
      setExpandedSession(null);
    } else {
      setExpandedSession(id);
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Cahier Journal</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-1">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" style={{ color: colors.pink }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" style={{ color: colors.yellow }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" style={{ color: colors.mint }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" style={{ color: colors.blue }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100" style={{ color: colors.purple }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Week navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex flex-1 justify-center">
              <div className="flex space-x-1">
                {days.map((day) => (
                  <button
                    key={day.id}
                    className={`px-4 py-2 rounded-full text-sm ${activeTab === day.id ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveTab(day.id)}
                  >
                    <span className="hidden md:inline">{day.name}</span>
                    <span className="inline md:hidden">{day.name.substring(0, 3)}</span>
                    <span className="text-xs text-gray-500 ml-1">({day.date})</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Date header */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {days.find(day => day.id === activeTab)?.name} {days.find(day => day.id === activeTab)?.date}
            </h2>
            
            <div className="flex items-center space-x-2">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                onClick={() => setShowAddModal(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Ajouter
              </button>
              
              <button className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button className="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Sessions */}
          <div className="space-y-4">
            {sessions.map((session) => (
              <div 
                key={session.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Session header */}
                <div 
                  className="px-4 py-3 flex items-center justify-between cursor-pointer"
                  style={{ backgroundColor: session.color + '30' }}
                  onClick={() => toggleSession(session.id)}
                >
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3" 
                      style={{ backgroundColor: session.color }}
                    ></div>
                    <div>
                      <div className="text-sm text-gray-500">{session.time}</div>
                      <div className="font-semibold">{session.title}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <button className="p-1.5 rounded-full hover:bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform ${expandedSession === session.id ? 'transform rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Session details */}
                {expandedSession === session.id && (
                  <div className="px-4 py-3 border-t border-gray-100">
                    {/* Session metadata */}
                    {(session.details.domain || session.details.competence || session.details.objective) && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-3 mb-3 border-b border-gray-100">
                        {session.details.domain && (
                          <div>
                            <div className="text-xs font-medium text-gray-500 mb-1">Domaine</div>
                            <div className="text-sm">{session.details.domain}</div>
                          </div>
                        )}
                        
                        {session.details.competence && (
                          <div>
                            <div className="text-xs font-medium text-gray-500 mb-1">Compétence</div>
                            <div className="text-sm">{session.details.competence}</div>
                          </div>
                        )}
                        
                        {session.details.objective && (
                          <div>
                            <div className="text-xs font-medium text-gray-500 mb-1">Objectif</div>
                            <div className="text-sm">{session.details.objective}</div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Timeline */}
                    {session.details.timeline.length > 0 && (
                      <div className="space-y-4">
                        {session.details.timeline.map((item, index) => (
                          <div key={index} className="border-l-2 pl-4" style={{ borderColor: session.color }}>
                            <div className="flex flex-wrap items-center mb-2">
                              {item.duration && (
                                <div className="mr-3 mb-1">
                                  <span className="text-xs font-medium text-gray-500">Durée:</span>
                                  <span className="text-sm ml-1">{item.duration}</span>
                                </div>
                              )}
                              
                              {item.grouping && (
                                <div className="mb-1">
                                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">{item.grouping}</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Tasks */}
                            {item.tasks && item.tasks.length > 0 && (
                              <div className="mb-3">
                                <div className="text-xs font-medium text-gray-500 mb-1">Tâches</div>
                                <ul className="space-y-1 pl-5 list-disc text-sm">
                                  {item.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {/* Materials */}
                            {item.materials && item.materials.length > 0 && (
                              <div className="mb-2">
                                <div className="text-xs font-medium text-gray-500 mb-1">Matériel</div>
                                <ul className="space-y-1 pl-5 list-disc text-sm">
                                  {item.materials.map((material, materialIndex) => (
                                    <li key={materialIndex}>{material}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {/* Notes */}
                            {item.notes && (
                              <div>
                                <div className="text-xs font-medium text-gray-500 mb-1">Notes</div>
                                <div className="text-sm bg-yellow-50 p-2 rounded">{item.notes}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add session modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">Ajouter une séance</h3>
              <button 
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setShowAddModal(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {/* Time selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horaire</label>
                  <div className="flex space-x-4">
                    <input 
                      type="time" 
                      className="px-3 py-2 border border-gray-300 rounded-md w-full"
                      placeholder="Début" 
                    />
                    <input 
                      type="time" 
                      className="px-3 py-2 border border-gray-300 rounded-md w-full"
                      placeholder="Fin" 
                    />
                  </div>
                </div>
                
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Titre de la séance</label>
                  <input 
                    type="text" 
                    className="px-3 py-2 border border-gray-300 rounded-md w-full"
                    placeholder="Ex: MATHÉMATIQUES" 
                  />
                </div>
                
                {/* Color selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Couleur</label>
                  <div className="flex space-x-2">
                    {Object.values(colors).map((color, index) => (
                      <button 
                        key={index} 
                        className="w-8 h-8 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        style={{ 
                          backgroundColor: color,
                          boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                        }}
                      ></button>
                    ))}
                  </div>
                </div>
                
                {/* Domain */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Domaine</label>
                  <input 
                    type="text" 
                    className="px-3 py-2 border border-gray-300 rounded-md w-full"
                    placeholder="Ex: Espace et géométrie" 
                  />
                </div>
                
                {/* Competence */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Compétence</label>
                  <input 
                    type="text" 
                    className="px-3 py-2 border border-gray-300 rounded-md w-full"
                    placeholder="Ex: chercher, raisonner" 
                  />
                </div>
                
                {/* Objective */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Objectif de la séance</label>
                  <input 
                    type="text" 
                    className="px-3 py-2 border border-gray-300 rounded-md w-full"
                    placeholder="Ex: Caractériser les propriétés du rectangle et du carré" 
                  />
                </div>
                
                {/* Timeline builder */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-700">Déroulé de la séance</label>
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Ajouter une étape
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md p-4 space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <div className="w-full sm:w-auto">
                        <label className="block text-xs font-medium text-gray-500 mb-1">Durée</label>
                        <input 
                          type="text" 
                          className="px-3 py-2 border border-gray-300 rounded-md w-full"
                          placeholder="Ex: 30 minutes" 
                        />
                      </div>
                      
                      <div className="w-full sm:w-auto">
                        <label className="block text-xs font-medium text-gray-500 mb-1">Organisation</label>
                        <select className="px-3 py-2 border border-gray-300 rounded-md w-full bg-white">
                          <option>Collectif</option>
                          <option>Individuel</option>
                          <option>Binômes</option>
                          <option>Groupes</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Tâches</label>
                      <textarea 
                        className="px-3 py-2 border border-gray-300 rounded-md w-full"
                        rows="3"
                        placeholder="Liste des tâches et consignes (une par ligne)"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Matériel</label>
                      <textarea 
                        className="px-3 py-2 border border-gray-300 rounded-md w-full"
                        rows="2"
                        placeholder="Liste du matériel nécessaire (un par ligne)"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Notes / Différenciation</label>
                      <textarea 
                        className="px-3 py-2 border border-gray-300 rounded-md w-full"
                        rows="2"
                        placeholder="Notes supplémentaires ou adaptations pour certains élèves"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 px-6 py-4 border-t">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setShowAddModal(false)}
              >
                Annuler
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => setShowAddModal(false)}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherPlannerUIDesign;