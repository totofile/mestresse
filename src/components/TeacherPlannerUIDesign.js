import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CahierJournal = () => {
  const navigate = useNavigate();
  const { dayId } = useParams();
  // Données des sections du cahier journal
  const initialSections = [
    {
      id: 'rituel',
      time: '8:30',
      title: 'RITUEL',
      color: 'bg-gray-100',
      expanded: true,
      content: null
    },
    {
      id: 'mathematiques',
      time: '9:00',
      title: 'MATHÉMATIQUES',
      color: 'bg-pink-100',
      expanded: true,
      content: {
        domain: 'Espace et géométrie',
        competence: 'chercher, raisonner',
        objective: 'Caractériser les propriétés du rectangle et du carré',
        activities: [
          {
            duration: '30 minutes',
            group: 'Collectif',
            instructions: [
              '"voici un carré et un rectangle, qu\'est-ce que vous pouvez me dire sur eux: comment les reconnaître?"',
              '=> Inciter les élèves à utiliser leurs outils de géométrie.'
            ],
            materials: [
              'Photocopie du rectangle/carré',
              'gabarit angle droit'
            ],
            observations: ''
          },
          {
            duration: '45 minutes',
            group: 'Individuel',
            instructions: [
              '"nous allons lire les consignes ensemble, vous avez 30 min pour finir vos ex"',
              '=> Correction au tableau à la fin des 30 min'
            ],
            materials: [
              'Fichier de maths p.93'
            ],
            observations: ''
          }
        ]
      }
    },
    {
      id: 'recreation',
      time: '10:15',
      title: 'RECREATION',
      color: 'bg-blue-100',
      expanded: true,
      content: null
    },
    {
      id: 'francais',
      time: '10:30',
      title: 'FRANÇAIS',
      color: 'bg-blue-200',
      expanded: true,
      content: {
        domain: 'Lecture et compréhension',
        competence: 'lire, comprendre',
        objective: 'Savoir repérer et comprendre l\'enchainement d\'une lecture',
        activities: [
          {
            duration: '20 minutes',
            group: 'Collectif',
            instructions: [
              'Lecture offerte du chapitre 3',
              'Questions de compréhension'
            ],
            materials: [
              'Livre "Les trois brigands"'
            ],
            observations: 'Faire reformuler par les élèves ayant des difficultés'
          },
          {
            duration: '40 minutes',
            group: 'Individuel',
            instructions: [
              '"complétez la fiche de lecture, vous avez 30 minutes"',
              '=> Accompagner les élèves en difficulté'
            ],
            materials: [
              'Fiche de lecture'
            ],
            observations: 'Adapter la quantité pour certains élèves'
          }
        ]
      }
    },
    {
      id: 'sciences',
      time: '11:30',
      title: 'SCIENCES',
      color: 'bg-green-100',
      expanded: true,
      content: {
        domain: 'Questionner l\'espace et le temps',
        competence: 'Se situer dans l\'espace',
        objective: 'Comprendre la notion de plan et savoir se repérer sur une carte',
        activities: [
          {
            duration: '15 minutes',
            group: 'Collectif',
            instructions: [
              '"Qu\'est-ce qu\'un plan? À quoi ça sert?"',
              'Recueillir les représentations initiales'
            ],
            materials: [
              'Tableau'
            ],
            observations: ''
          },
          {
            duration: '35 minutes',
            group: 'Groupes',
            instructions: [
              '"Je vous donne un plan de l\'école, vous devez retrouver où sont placés les objets marqués sur le plan"',
              'Chasse au trésor dans l\'école'
            ],
            materials: [
              'Plans de l\'école',
              'Objets à retrouver'
            ],
            observations: 'Former des groupes hétérogènes pour favoriser l\'entraide'
          }
        ]
      }
    },
    {
      id: 'gouter',
      time: '12:00',
      title: 'GOÛTER',
      color: 'bg-orange-100',
      expanded: true,
      content: {
        domain: 'Compétences Vivre',
        competence: 'Compétences sociales',
        objective: 'Savoir vivre en collectivité',
        activities: [
          {
            duration: '15 minutes',
            group: 'Collectif',
            instructions: [
              'Se laver les mains',
              'Prendre son goûter calmement'
            ],
            materials: [
              'Savon, serviettes'
            ],
            observations: ''
          }
        ]
      }
    }
  ];

  // État pour gérer l'état d'expansion des sections
  const [sections, setSections] = useState(initialSections);

  // Fonction pour basculer l'état d'expansion d'une section
  const toggleSection = (id) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, expanded: !section.expanded } : section
    ));
  };

  // Fonction pour tout étendre
  const expandAll = () => {
    setSections(sections.map(section => ({ ...section, expanded: true })));
  };

  // Fonction pour tout réduire
  const collapseAll = () => {
    setSections(sections.map(section => ({ ...section, expanded: false })));
  };

  // Fonction pour formater l'heure suivante
  const getNextTime = (index) => {
    if (index + 1 < sections.length) {
      return sections[index + 1].time;
    }
    return '13:00'; // Heure par défaut pour la fin
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow">
      {/* En-tête et boutons de contrôle */}
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white p-2 border-b z-10">
        <div className="flex items-center">
          <button 
            onClick={() => navigate('/homeplanner')} 
            className="mr-3 p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Cahier Journal - Lundi 17 Février</h1>
        </div>
        <div className="space-x-2">
          <button 
            onClick={expandAll}
            className="px-4 py-2 bg-blue text-white rounded hover:bg-blue-600 text-sm"
          >
            Tout étendre
          </button>
          <button 
            onClick={collapseAll}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
          >
            Tout réduire
          </button>
        </div>
      </div>

      {/* Sections du cahier journal */}
      <div className="space-y-2">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className={`border rounded-lg overflow-hidden ${section.color}`}
          >
            {/* En-tête de section avec horaire et titre */}
            <div 
              className="flex justify-between items-center p-2 cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center">
                <div className="w-16 text-center font-bold border-r pr-2">{section.time}</div>
                <h2 className="font-bold text-lg ml-4">{section.title}</h2>
              </div>
              <button className="p-1 rounded hover:bg-gray-200">
                {section.expanded ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                )}
              </button>
            </div>

            {/* Contenu de la section (visible seulement si expanded=true) */}
            {section.expanded && section.content && (
              <div className="bg-white border-t">
                {/* En-tête avec domaine, compétence et objectif */}
                <div className="p-2 border-b">
                  <div className="flex flex-wrap gap-2">
                    <div className="flex-1">
                      <span className="font-semibold">Domaine: </span>
                      <span>{section.content.domain}</span>
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold">Compétence: </span>
                      <span>{section.content.competence}</span>
                    </div>
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold">Objectif de la séance: </span>
                    <span>{section.content.objective}</span>
                  </div>
                </div>

                {/* Tableau des activités */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left border-r w-1/6">Temps<br/>Déroulé</th>
                      <th className="p-2 text-left border-r w-2/5">Consignes élèves<br/>Tâches PE</th>
                      <th className="p-2 text-left border-r w-1/5">Matériel</th>
                      <th className="p-2 text-left w-1/5">Observations<br/>Différenciation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.content.activities.map((activity, actIndex) => (
                      <tr key={actIndex} className="border-b">
                        <td className="p-2 border-r align-top">
                          <div>{activity.duration}</div>
                          <div>{activity.group}</div>
                        </td>
                        <td className="p-2 border-r align-top">
                          <ul className="list-disc pl-5 space-y-1">
                            {activity.instructions.map((instr, i) => (
                              <li key={i}>{instr}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-2 border-r align-top">
                          <ul className="list-disc pl-5 space-y-1">
                            {activity.materials.map((mat, i) => (
                              <li key={i}>{mat}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-2 align-top">{activity.observations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pied de page */}
      <div className="mt-4 text-right text-sm text-gray-500">
        <p>Mis à jour le 17/02/2025</p>
      </div>
    </div>
  );
};

export default CahierJournal;