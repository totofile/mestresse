import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationCahierJournal = () => {
  const navigate = useNavigate();
  
  // États pour gérer les menus et la navigation
  const [hoveredMainCategory, setHoveredMainCategory] = useState(null);
  const [hoveredCycle, setHoveredCycle] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]);
  
  // Refs pour gérer les délais des menus
  const mainMenuTimeoutRef = useRef(null);
  const cycleMenuTimeoutRef = useRef(null);
  
  // Structure des menus
  const menus = {
    categories: [
      { id: 'matieres', label: 'Matières', icon: 'book' },
      { id: 'activites', label: 'Types d\'activités', icon: 'clock' }
    ],
    activites: [
      { id: 'rituel', label: 'Rituel' },
      { id: 'recreation', label: 'Récréation' },
      { id: 'dejeuner', label: 'Déjeuner' },
      { id: 'sortie', label: 'Sortie scolaire' },
      { id: 'devoirs', label: 'Devoirs' },
      { id: 'apc', label: 'APC (Activités Pédagogiques Complémentaires)' }
    ],
    cycles: [
      { id: 'cycle1', label: 'Cycle 1', description: 'Maternelle (3-6 ans)' },
      { id: 'cycle2', label: 'Cycle 2', description: 'Apprentissages fondamentaux (CP-CE2)' },
      { id: 'cycle3', label: 'Cycle 3', description: 'Consolidation (CM1-6ème)' }
    ],
    matieresByCycle: {
      cycle1: [
        { id: 'langage', label: 'Mobiliser le langage dans toutes ses dimensions' },
        { id: 'math', label: 'Acquérir les premiers outils mathématiques' },
        { id: 'eps', label: 'Agir, s\'exprimer, comprendre à travers l\'activité physique' },
        { id: 'arts', label: 'Agir, s\'exprimer, comprendre à travers les activités artistiques' },
        { id: 'explorer', label: 'Explorer le monde' }
      ],
      cycle2: [
        { id: 'mathematiques', label: 'Mathématiques' },
        { id: 'francais', label: 'Français' },
        { id: 'eps', label: 'Éducation physique et sportive' },
        { id: 'langues', label: 'Langues vivantes' },
        { id: 'emc', label: 'Enseignement moral et civique' },
        { id: 'questionner', label: 'Questionner le monde' },
        { id: 'musique', label: 'Éducation musicale' },
        { id: 'arts', label: 'Arts plastiques' }
      ],
      cycle3: [
        { id: 'mathematiques', label: 'Mathématiques' },
        { id: 'francais', label: 'Français' },
        { id: 'eps', label: 'Éducation physique et sportive' },
        { id: 'langues', label: 'Langues vivantes' },
        { id: 'emc', label: 'Enseignement moral et civique' },
        { id: 'sciences', label: 'Sciences et technologie' },
        { id: 'musique', label: 'Éducation musicale' },
        { id: 'histoire', label: 'Histoire' },
        { id: 'geographie', label: 'Géographie' },
        { id: 'arts', label: 'Arts plastiques' },
        { id: 'histoire-arts', label: 'Histoire des arts' }
      ]
    }
  };
  
  // Gestion du survol sur les catégories principales
  const handleCategoryMouseEnter = (categoryId) => {
    clearTimeout(mainMenuTimeoutRef.current);
    setHoveredMainCategory(categoryId);
  };
  
  const handleCategoryMouseLeave = () => {
    mainMenuTimeoutRef.current = setTimeout(() => {
      setHoveredMainCategory(null);
    }, 300);
  };
  
  // Gestion du survol sur les cycles
  const handleCycleMouseEnter = (cycleId) => {
    clearTimeout(cycleMenuTimeoutRef.current);
    setHoveredCycle(cycleId);
  };
  
  const handleCycleMouseLeave = () => {
    cycleMenuTimeoutRef.current = setTimeout(() => {
      setHoveredCycle(null);
    }, 300);
  };
  
  // Gestion du clic sur une activité
  const handleActivityClick = (activityId, activityLabel) => {
    setSelectedPath(['activites', { id: activityId, label: activityLabel }]);
    setFormType(activityId);
    setShowForm(true);
  };
  
  // Gestion du clic sur une matière
  const handleSubjectClick = (cycleId, subjectId, subjectLabel) => {
    const cycleName = menus.cycles.find(c => c.id === cycleId)?.label;
    
    // Ajouter au chemin de navigation
    setSelectedPath(['matieres', { id: cycleId, label: cycleName }, { id: subjectId, label: subjectLabel }]);
    
    // Rediriger vers le planificateur avec les paramètres contextuels
    navigate('/planner-editor', {
      state: {
        cycleId: cycleId,
        subjectId: subjectId,
        subjectLabel: subjectLabel,
        cycleName: cycleName
      }
    });
  };
  
  // Nettoyage des timeouts
  useEffect(() => {
    return () => {
      clearTimeout(mainMenuTimeoutRef.current);
      clearTimeout(cycleMenuTimeoutRef.current);
    };
  }, []);
  
  // Rendu du formulaire pour les activités
  const renderActivityForm = () => {
    if (!formType) return null;
    
    switch(formType) {
      case 'recreation':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-blue-800">Récréation</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">Début</label>
                <input type="time" defaultValue="10:15" className="w-full border rounded p-2 text-center" />
              </div>
              
              <div className="flex items-center justify-center text-gray-400 px-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">Fin</label>
                <input type="time" defaultValue="10:30" className="w-full border rounded p-2 text-center" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Commentaire (optionnel)</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="2"
                placeholder="Commentaire ou instructions particulières..."
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => {
                  setShowForm(false);
                  setFormType(null);
                }}
              >
                Annuler
              </button>
              <button 
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/homeplanner')}
              >
                Ajouter au cahier journal
              </button>
            </div>
          </div>
        );
        
      case 'dejeuner':
        return (
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-blue-800">Déjeuner</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">Début</label>
                <input type="time" defaultValue="12:00" className="w-full border rounded p-2 text-center" />
              </div>
              
              <div className="flex items-center justify-center text-gray-400 px-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">Fin</label>
                <input type="time" defaultValue="14:00" className="w-full border rounded p-2 text-center" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Activité pendant le déjeuner</label>
              <input 
                type="text" 
                className="w-full border rounded p-2"
                placeholder="Ex: Surveillance, correction de cahiers..."
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => {
                  setShowForm(false);
                  setFormType(null);
                }}
              >
                Annuler
              </button>
              <button 
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/homeplanner')}
              >
                Ajouter au cahier journal
              </button>
            </div>
          </div>
        );
        
      case 'rituel':
      case 'sortie':
      case 'devoirs':
      case 'apc':
        // Pour les autres types d'activités, formulaires similaires adaptés
        return (
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-blue-800">
              {formType === 'rituel' && 'Rituel'}
              {formType === 'sortie' && 'Sortie scolaire'}
              {formType === 'devoirs' && 'Devoirs'}
              {formType === 'apc' && 'APC (Activités Pédagogiques Complémentaires)'}
            </h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">Début</label>
                <input type="time" className="w-full border rounded p-2 text-center" />
              </div>
              
              <div className="flex items-center justify-center text-gray-400 px-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="flex-1">
                <label className="block mb-1 text-sm font-medium text-gray-700">Fin</label>
                <input type="time" className="w-full border rounded p-2 text-center" />
              </div>
            </div>
            
            {/* Champs spécifiques selon le type d'activité */}
            {formType === 'rituel' && (
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">Type de rituel</label>
                <select className="w-full border rounded p-2">
                  <option>Appel et date</option>
                  <option>Lecture offerte</option>
                  <option>Calcul mental</option>
                  <option>Météo du jour</option>
                  <option>Poésie / Chant</option>
                  <option>Autre</option>
                </select>
              </div>
            )}
            
            {formType === 'sortie' && (
              <>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Titre de la sortie</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="Ex: Visite du musée" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Lieu</label>
                  <input type="text" className="w-full border rounded p-2" placeholder="Adresse ou nom du lieu" />
                </div>
              </>
            )}
            
            {formType === 'devoirs' && (
              <>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Pour quelle date</label>
                  <input type="date" className="w-full border rounded p-2" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Matière</label>
                  <select className="w-full border rounded p-2">
                    <option>Français</option>
                    <option>Mathématiques</option>
                    <option>Histoire-Géographie</option>
                    <option>Sciences</option>
                    <option>Autre</option>
                  </select>
                </div>
              </>
            )}
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
                placeholder="Description ou consignes..."
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => {
                  setShowForm(false);
                  setFormType(null);
                }}
              >
                Annuler
              </button>
              <button 
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate('/homeplanner')}
              >
                Ajouter au cahier journal
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  // Rendu du fil d'Ariane
  const renderBreadcrumbs = () => {
    if (!selectedPath.length) return null;
    
    return (
      <div className="flex items-center text-sm text-gray-600 mb-6">
        {selectedPath.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-2">›</span>}
            <span className={`${index === selectedPath.length - 1 ? "font-semibold text-blue-800" : ""}`}>
              {typeof item === 'string' ? 
                (item === 'matieres' ? 'Matières' : 
                 item === 'activites' ? 'Types d\'activités' : item) 
                : item.label}
            </span>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button 
          onClick={() => navigate('/homeplanner')} 
          className="mr-3 p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Retour"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Ajouter au cahier journal</h1>
      </div>
      
      {/* Fil d'Ariane */}
      {renderBreadcrumbs()}
      
      {/* Contenu principal */}
      {showForm ? (
        /* Affichage du formulaire d'activité */
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-blue-50 p-4 border-b">
            <h2 className="text-xl font-bold text-blue-800">
              {formType === 'recreation' && "Ajout d'une récréation"}
              {formType === 'dejeuner' && "Ajout d'une pause déjeuner"}
              {formType === 'rituel' && "Ajout d'un rituel"}
              {formType === 'sortie' && "Ajout d'une sortie scolaire"}
              {formType === 'devoirs' && "Ajout des devoirs"}
              {formType === 'apc' && "Ajout d'APC"}
            </h2>
          </div>
          <div className="p-6">
            {renderActivityForm()}
          </div>
        </div>
      ) : (
        /* Affichage du menu de navigation principal */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
          {/* Catégorie Matières */}
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
            onMouseEnter={() => handleCategoryMouseEnter('matieres')}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-center mb-4 text-blue-600">
                <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Matières</h2>
              <p className="text-gray-600 text-center">
                Sélectionnez un cycle puis une matière pour créer une séance d'enseignement
              </p>
            </div>
            
            {/* Menu cycles qui apparaît au survol */}
            {hoveredMainCategory === 'matieres' && (
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium mb-3 text-blue-800">Sélectionnez un cycle</h3>
                <div className="space-y-2">
                  {menus.cycles.map(cycle => (
                    <div
                      key={cycle.id}
                      className={`p-3 rounded-md flex items-center justify-between ${hoveredCycle === cycle.id ? 'bg-blue-50' : ''} hover:bg-blue-50 cursor-pointer transition-colors`}
                      onMouseEnter={() => handleCycleMouseEnter(cycle.id)}
                      onMouseLeave={handleCycleMouseLeave}
                    >
                      <div>
                        <div className="font-medium">{cycle.label}</div>
                        <div className="text-xs text-gray-500">{cycle.description}</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>

                      {/* Menu matières qui apparaît au survol du cycle */}
                      {hoveredCycle === cycle.id && (
                        <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                          <div className="p-4">
                            <h3 className="font-medium mb-3 text-blue-800">
                              Matières du {cycle.label}
                            </h3>
                            <div className="space-y-1">
                              {menus.matieresByCycle[cycle.id].map(subject => (
                                <div
                                  key={subject.id}
                                  className="p-2 rounded-md hover:bg-blue-50 cursor-pointer transition-colors"
                                  onClick={() => handleSubjectClick(cycle.id, subject.id, subject.label)}
                                >
                                  {subject.label}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Catégorie Types d'activités */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
            onMouseEnter={() => handleCategoryMouseEnter('activites')}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-center mb-4 text-blue-600">
                <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Types d'activités</h2>
              <p className="text-gray-600 text-center">
                Sélectionnez une activité pour l'ajouter à votre emploi du temps
              </p>
            </div>
            
            {/* Menu activités qui apparaît au survol */}
            {hoveredMainCategory === 'activites' && (
              <div className="p-4 bg-gray-50">
                <h3 className="font-medium mb-3 text-blue-800">Sélectionnez un type d'activité</h3>
                <div className="grid grid-cols-2 gap-2">
                  {menus.activites.map(activity => (
                    <div
                      key={activity.id}
                      className="p-3 rounded-md hover:bg-blue-50 cursor-pointer transition-colors"
                      onClick={() => handleActivityClick(activity.id, activity.label)}
                    >
                      {activity.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Texte d'aide */}
      {!showForm && !hoveredMainCategory && (
        <div className="mt-8 bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-blue-800">
            Survolez une catégorie pour voir les options disponibles.
          </p>
        </div>
      )}
      
      {/* Bouton d'aide flottant */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Aide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  );
};

export default NavigationCahierJournal;