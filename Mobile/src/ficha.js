const fichas = {
  aluno: 'Guilherme',
  exercicioTipo: [
    {
      id:0,
    tipo: 'abdominal',
      exercicios: [
      {
        nome: 'Abdominal Obliquio',
        series: 0,
        carga: 0,
        repetições: 3
      },
      {
        nome: 'Abdominal Bola',
        series: 0,
        carga: 0,
        repetições: 3
      },
      ]    
    },

    {
      id:1,
      tipo: 'aerobico',
      exercicios: [
        {
          nome: 'biscicleta',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'esteira',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Corrida extensa',series: 0,
          carga: 0,
          repetições: 3,
        }
      ]
    },
    {id:2,
      tipo: 'biceps/antebraço',
      exercicios: [
        {
          nome: 'Rosca Martelo com Alteres',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Direta',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Alternada',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Concentrada',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Scott',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Polia',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Punho',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca 21',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Rosca Martelo',series: 0,
          carga: 0,
          repetições: 3
        },
      ]
    },
    {id:3,
      tipo: 'Costa',
      exercicios: [
        {
          nome: 'Puxador Frontal',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Puxador Costa',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Remada Baixa',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Remada Unilateral',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Remada Curvada',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Remada I',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Cruxifixo Invertido',series: 0,
          carga: 0,
          repetições: 3
        },
      ]
    },
    {id:4,
      tipo: 'Membros Inferiores',
      exercicios: [
        {
          nome: 'Agachamento',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Agachamento Guiado',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Agachamento Livre',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Agachamento Sumo',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Avanço Guiado',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Avanço Livre',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Leg Press',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Extensora',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Flexora',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Stiff',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Abdução',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Gluteo Solo',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Gluteo na Ponta',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Graviton',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Elevação Pelvica',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Panturrilha Leve',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Panturrilha Sentada',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Panturrilha em Pé',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Agachamento com bola',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Peso Frontal',series: 0,
          carga: 0,
          repetições: 3
        },
      ]
    },
    {id:5,
      tipo: 'Ombro/Trapezio',
      exercicios: [
        {
          nome: 'Desenvolvimento Frontal',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Desenvolvimento Costa',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Remada Alta',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Elevação frontal',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Elevação Lateral',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Encolhimento com barra',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Encolhimento com Alteres',series: 0,
          carga: 0,
          repetições: 3
        },
      ]
    },
    {id:6,
      tipo: 'Peitoral',
      exercicios: [
        {
          nome: 'Supino reto',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Supino Inclinado',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Supino Declinado',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Cruxifixo com alteres',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Pull Over',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Cross Over',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Peck Deck',series: 0,
          carga: 0,
          repetições: 3
        },
      ]
    },
    {id:7,
      tipo: 'Triceps',
      exercicios: [
        {
          nome: 'Triceps no puxador',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps na testa',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps no Francês',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps no Supinado',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps no Inverso',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps na Corda',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps no Unilateral',series: 0,
          carga: 0,
          repetições: 3
        },
        {
          nome: 'Triceps Banco',series: 0,
          carga: 0,
          repetições: 3
        },
      ]
    },

  ]
};

export default fichas;