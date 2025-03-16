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

  // Get current day name for the header
  const getCurrentDayName = () => {
    return days.find(day => day.id === activeTab)?.name || 'Lundi';
  };
  
  // Get current day number for the header
  const getCurrentDayNumber = () => {
    const date = days.find(day => day.id === activeTab)?.date || '17/02';
    return date.split('/')[0];
  };

  // Get current month
  const getCurrentMonth = () => {
    return 'Février';
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Main content wrapper */}
      <div className="flex-1 overflow-y-auto bg-white max-w-4xl mx-auto shadow-lg rounded-lg">
        {/* Header with large date display */}
        <div className="flex justify-between items-start p-4 border-b">
          <div className="flex items-start">
            <div className="text-left mr-6">
              <h1 className="text-3xl font-bold">{getCurrentDayName()}</h1>
              <p className="text-4xl font-bold">{getCurrentDayNumber()}</p>
            </div>
            <div className="italic text-xl font-semibold transform -rotate-90 mt-6 ml-2">{getCurrentMonth()}</div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-green-100 p-3 rounded-md w-64">
              <div className="text-center font-semibold mb-2">Ne pas oublier</div>
              <div className="flex items-center mb-2">
                <span className="font-bold text-xl mr-1">+</span>
                <span>Fiche rituel</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center mx-auto">
                <span className="text-xl">+</span>
              </div>
            </div>
            
            <div className="bg-blue-200 p-3 rounded-md w-64">
              <div className="text-center font-semibold mb-2">Imprimer</div>
              <div className="flex items-center mb-2">
                <span className="font-bold text-xl mr-1">+</span>
                <span>Fiche rituel</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <span className="text-xl">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="p-4">
          {sessions.map((session) => (
            <div key={session.id} className="mb-2">
              {/* Session header */}
              <div className="flex items-center">
                <div className="w-16 text-center font-bold">
                  {session.time.split('-')[0].trim()}
                </div>
                <div 
                  className="flex-1 rounded-lg p-2 text-center font-semibold"
                  style={{ 
                    backgroundColor: session.color + '40'
                  }}
                  onClick={() => toggleSession(session.id)}
                >
                  {session.title}
                </div>
              </div>
              
              {/* Session content */}
              {expandedSession === session.id && (
                <div className="ml-16 mt-1">
                  {/* Session metadata */}
                  {(session.details.domain || session.details.competence || session.details.objective) && (
                    <div className="px-4 py-2">
                      <div className="flex justify-between flex-wrap">
                        {session.details.domain && (
                          <div>
                            <span className="font-bold">Domaine : </span>
                            <span>{session.details.domain}</span>
                          </div>
                        )}
                        
                        {session.details.competence && (
                          <div>
                            <span className="font-bold">Compétence : </span>
                            <span>{session.details.competence}</span>
                          </div>
                        )}
                      </div>
                      
                      {session.details.objective && (
                        <div className="px-4 py-2">
                          <span className="font-bold">Objectif de la séance : </span>
                          <span>{session.details.objective}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Timeline as table */}
                  <div className="border-2 border-dashed border-gray-400 rounded-lg p-2 mt-2">
                    <table className="w-full table-fixed">
                      <thead>
                        <tr className="border-b">
                          <th className="w-1/4 p-2 text-center">Temps<br/>Déroulé</th>
                          <th className="w-1/4 p-2 text-center">Consignes élèves<br/>Tâches PE</th>
                          <th className="w-1/4 p-2 text-center">Matériel</th>
                          <th className="w-1/4 p-2 text-center">Observations<br/>Différenciation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {session.details.timeline.map((item, index) => (
                          <tr key={index} className={index !== session.details.timeline.length - 1 ? "border-b" : ""}>
                            <td className="p-2 align-top">
                              {item.duration && <p>{item.duration}</p>}
                              {item.grouping && <p>{item.grouping}</p>}
                            </td>
                            <td className="p-2 align-top">
                              {item.tasks && item.tasks.length > 0 && (
                                <ul className="list-disc pl-4">
                                  {item.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                  ))}
                                </ul>
                              )}
                            </td>
                            <td className="p-2 align-top">
                              {item.materials && item.materials.length > 0 && (
                                <ul className="list-disc pl-4">
                                  {item.materials.map((material, materialIndex) => (
                                    <li key={materialIndex}>{material}</li>
                                  ))}
                                </ul>
                              )}
                            </td>
                            <td className="p-2 align-top">
                              {item.notes && <p>{item.notes}</p>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed bottom toolbar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full px-4 py-2 flex space-x-6">
        <button className="p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </button>
        <button 
          className="p-2 rounded-full hover:bg-gray-700"
          onClick={() => setShowAddModal(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
      </div>

      {/* Add session modal - updated styling to match new design */}
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
                    <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></button>
                    <button className="w-8 h-8 rounded-full bg-red-200 border-2 border-white"></button>
                    <button className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white"></button>
                    <button className="w-8 h-8 rounded-full bg-green-200 border-2 border-white"></button>
                    <button className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></button>
                    <button className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white"></button>
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
                
                {/* Session details table-like structure */}
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
                  
                  <div className="border-2 border-dashed border-gray-400 rounded-lg p-2">
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Temps/Déroulé</label>
                        <input 
                          type="text" 
                          className="px-2 py-1 border border-gray-300 rounded-md w-full mb-2"
                          placeholder="Ex: 30 minutes" 
                        />
                        <select className="px-2 py-1 border border-gray-300 rounded-md w-full bg-white text-sm">
                          <option>Collectif</option>
                          <option>Individuel</option>
                          <option>Binômes</option>
                          <option>Groupes</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Consignes élèves/Tâches PE</label>
                        <textarea 
                          className="px-2 py-1 border border-gray-300 rounded-md w-full"
                          rows="4"
                          placeholder="Liste des tâches et consignes"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Matériel</label>
                        <textarea 
                          className="px-2 py-1 border border-gray-300 rounded-md w-full"
                          rows="4"
                          placeholder="Liste du matériel nécessaire"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Observations/Différenciation</label>
                        <textarea 
                          className="px-2 py-1 border border-gray-300 rounded-md w-full"
                          rows="4"
                          placeholder="Notes supplémentaires"
                        ></textarea>
                      </div>
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