import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlannerEditor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    domain: '',
    competence: '',
    objective: '',
    timeMinutes: '',
    grouping: 'Binome',
    studentInstructions: '',
    materials: '',
    observations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Form submitted:', formData);
    // Navigate back to HomePlanner after submission
    navigate('/homeplanner');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/homeplanner')} 
          className="mr-3 p-2 rounded-full hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-blue-800">Ajouter une section Mathématiques</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre de la séance</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex: Géométrie - Rectangles et carrés"
              />
            </div>
            
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700">Domaine</label>
              <input
                type="text"
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex: Espace et géométrie"
              />
            </div>
            
            <div>
              <label htmlFor="competence" className="block text-sm font-medium text-gray-700">Compétence</label>
              <input
                type="text"
                id="competence"
                name="competence"
                value={formData.competence}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex: chercher, raisonner"
              />
            </div>
            
            <div>
              <label htmlFor="objective" className="block text-sm font-medium text-gray-700">Objectif de la séance</label>
              <input
                type="text"
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex: Caractériser les propriétés du rectangle et du carré"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="timeMinutes" className="block text-sm font-medium text-gray-700">Durée (minutes)</label>
                <input
                  type="number"
                  id="timeMinutes"
                  name="timeMinutes"
                  value={formData.timeMinutes}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ex: 30"
                />
              </div>
              
              <div className="w-1/2">
                <label htmlFor="grouping" className="block text-sm font-medium text-gray-700">Organisation</label>
                <select
                  id="grouping"
                  name="grouping"
                  value={formData.grouping}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Individuel">Individuel</option>
                  <option value="Binome">Binôme</option>
                  <option value="Groupe">Groupe</option>
                  <option value="Collectif">Collectif</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="studentInstructions" className="block text-sm font-medium text-gray-700">Consignes élèves / Tâches PE</label>
              <textarea
                id="studentInstructions"
                name="studentInstructions"
                value={formData.studentInstructions}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex: Voici un carré et un rectangle, qu'est-ce que vous pouvez me dire sur eux: comment les reconnaître?"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="materials" className="block text-sm font-medium text-gray-700">Matériel</label>
              <textarea
                id="materials"
                name="materials"
                value={formData.materials}
                onChange={handleChange}
                rows="2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="ex: Photocopie du rectangle/carré, gabarit angle droit"
              ></textarea>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="observations" className="block text-sm font-medium text-gray-700">Observations / Différenciation</label>
          <textarea
            id="observations"
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            rows="2"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="ex: Prévoir des figures supplémentaires pour les élèves rapides"
          ></textarea>
        </div>
        
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => navigate('/homeplanner')}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            Ajouter au cahier journal
          </button>
        </div>
      </form>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-medium text-blue-800 mb-2">Aperçu</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-r border-gray-300">Temps<br/>Déroulé</th>
                <th className="px-4 py-2 text-left border-r border-gray-300">Consignes élèves<br/>Tâches PE</th>
                <th className="px-4 py-2 text-left border-r border-gray-300">Matériel</th>
                <th className="px-4 py-2 text-left">Observations<br/>Différenciation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-r border-t border-gray-300">
                  {formData.timeMinutes ? `${formData.timeMinutes} minutes` : ""}
                  <br/>
                  {formData.grouping || ""}
                </td>
                <td className="px-4 py-2 border-r border-t border-gray-300">
                  {formData.studentInstructions ? formData.studentInstructions.split('\n').map((line, i) => (
                    <div key={i}>• {line}</div>
                  )) : ""}
                </td>
                <td className="px-4 py-2 border-r border-t border-gray-300">
                  {formData.materials ? formData.materials.split('\n').map((line, i) => (
                    <div key={i}>• {line}</div>
                  )) : ""}
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {formData.observations}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlannerEditor;