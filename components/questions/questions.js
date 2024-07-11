const questions = [
  { id: 1, text: "Quelle est votre âge ?", type: 'numeric' },
  { id: 2, text: "Quelle est votre taille (cm) ?", type: 'numeric' },
  { id: 3, text: "Quel est votre poids (kg) ?", type: 'numeric' },
  { id: 4, text: "Quel est votre objectif principal ?", type: 'select', options: [
      "Perte de poids", 
      "Gain de muscle", 
      "Amélioration de l'endurance", 
      "Amélioration de la souplesse"
    ]
  },
  { id: 5, text: "Avez-vous des restrictions alimentaires ou des allergies ?", type: 'yesno' },
  { id: 6, text: "Quel est votre niveau d'activité physique ?", type: 'select', options: [
      "Sédentaire (peu ou pas d'exercice)",
      "Léger (exercice léger/sport 1-3 jours/semaine)",
      "Modéré (exercice modéré/sport 3-5 jours/semaine)",
      "Intense (exercice intense/sport 6-7 jours/semaine)",
      "Athlète (entraînement intense tous les jours)"
    ]
  },
  { id: 7, text: "Combien de verres d'eau buvez-vous par jour en moyenne ?", type: 'numeric' },
  { id: 8, text: "Êtes-vous fumeur ?", type: 'yesno' },
  { id: 9, text: "Combien de fois par semaine mangez-vous des fruits et légumes ?", type: 'numeric' },
  { id: 10, text: "Avez-vous des antécédents médicaux ?", type: 'select', options: [
      "Aucun",
      "Diabète",
      "Hypertension",
      "Maladie cardiaque",
      "Autre"
    ]
  },
  { id: 11, text: "Quelle est votre qualité de sommeil ?", type: 'select', options: [
      "Bonne",
      "Moyenne",
      "Mauvaise"
    ]
  },
  { id: 12, text: "Combien d'heures dormez-vous en moyenne par nuit ?", type: 'numeric' },
  { id: 13, text: "Consommez-vous régulièrement de l'alcool ?", type: 'yesno' },
  { id: 14, text: "Quelle est votre consommation quotidienne de caféine ?", type: 'select', options: [
      "Aucune",
      "Faible",
      "Modérée",
      "Élevée"
    ]
  },
  { id: 15, text: "Avez-vous des objectifs spécifiques pour améliorer votre bien-être mental ?", type: 'yesno' },
  { id: 16, text: "Êtes-vous actuellement sous médication ?", type: 'yesno' },
];

export default questions;