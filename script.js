// Jeopardy Game Data - Spanish Christmas Theme
const gameData = [
    // Category 0: Tradiciones Navideñas
    [
        {
            value: 100,
            question: "¿Cómo se llama la lotería especial que se celebra el 22 de diciembre en España?",
            answer: "El Gordo de Navidad",
            image: "loteria.png"
        },
        {
            value: 200,
            question: "¿Qué hacen las familias españolas la noche del 24 de diciembre?",
            answer: "Cenan juntos en Nochebuena",
            image: "nochebuena.png"
        },
        {
            value: 300,
            question: "¿Cómo se llama la tradición de tocar las 12 campanadas a medianoche el 31 de diciembre?",
            answer: "Las 12 uvas de la suerte",
            image: "uvas.png"
        },
        {
            value: 400,
            question: "¿Qué bailan los niños alrededor del Belén mientras cantan villancicos?",
            answer: "La Danza de los Seises o bailes tradicionales",
            image: "belen.png"
        },
        {
            value: 500,
            question: "¿Cuándo se celebra el Día de los Inocentes en España, similar al April Fools?",
            answer: "El 28 de diciembre",
            image: "inocentes.png"
        }
    ],
    // Category 1: Comida Festiva
    [
        {
            value: 100,
            question: "¿Cómo se llama el dulce navideño español hecho de almendras y miel?",
            answer: "Turrón",
            image: "turron.png"
        },
        {
            value: 200,
            question: "¿Qué tipo de marisco es muy popular en la cena de Nochebuena?",
            answer: "Langostinos y gambas",
            image: "marisco.png"
        },
        {
            value: 300,
            question: "¿Cómo se llama el pan dulce redondo con frutas que se come en Navidad?",
            answer: "Roscón de Reyes",
            image: "roscon.png"
        },
        {
            value: 400,
            question: "¿Qué cordero especial se cocina para la cena de Navidad?",
            answer: "Cordero asado",
            image: "cordero.png"
        },
        {
            value: 500,
            question: "¿Cómo se llaman los dulces pequeños de mazapán que tienen forma de frutas?",
            answer: "Mazapanes o figuritas de mazapán",
            image: "mazapan.png"
        }
    ],
    // Category 2: Los Reyes Magos
    [
        {
            value: 100,
            question: "¿Cuántos Reyes Magos hay?",
            answer: "Tres Reyes Magos",
            image: "reyes.png"
        },
        {
            value: 200,
            question: "¿Qué día del año traen los Reyes Magos los regalos a los niños?",
            answer: "El 6 de enero",
            image: "regalos.png"
        },
        {
            value: 300,
            question: "¿Cómo se llama el Rey Mago que lleva barba blanca?",
            answer: "Melchor",
            image: "melchor.png"
        },
        {
            value: 400,
            question: "¿Qué dejan los niños para los Reyes Magos y sus camellos?",
            answer: "Agua, turrón o galletas para los Reyes y agua para los camellos",
            image: "camellos.png"
        },
        {
            value: 500,
            question: "¿Cómo se llama el desfile nocturno del 5 de enero donde los Reyes Magos lanzan caramelos?",
            answer: "La Cabalgata de Reyes",
            image: "cabalgata.png"
        }
    ],
    // Category 3: Fechas Importantes
    [
        {
            value: 100,
            question: "¿Qué se celebra el 25 de diciembre?",
            answer: "El Día de Navidad (nacimiento de Jesús)",
            image: "navidad.png"
        },
        {
            value: 200,
            question: "¿Qué se celebra el 1 de enero?",
            answer: "El Año Nuevo",
            image: "ano_nuevo.png"
        },
        {
            value: 300,
            question: "¿Qué noche especial se celebra el 24 de diciembre?",
            answer: "Nochebuena",
            image: "nochebuena2.png"
        },
        {
            value: 400,
            question: "¿Qué noche especial se celebra el 31 de diciembre?",
            answer: "Nochevieja",
            image: "nochevieja.png"
        },
        {
            value: 500,
            question: "¿Qué se celebra el 6 de enero además de los regalos?",
            answer: "La Epifanía o Día de Reyes",
            image: "epifania.png"
        }
    ],
    // Category 4: Símbolos Navideños
    [
        {
            value: 100,
            question: "¿Cómo se llama el árbol que se decora en Navidad?",
            answer: "El árbol de Navidad o abeto",
            image: "arbol.png"
        },
        {
            value: 200,
            question: "¿Cómo se llama la representación del nacimiento de Jesús con figuras?",
            answer: "El Belén o Nacimiento",
            image: "belen2.png"
        },
        {
            value: 300,
            question: "¿Qué estrella especial se pone en la punta del árbol de Navidad?",
            answer: "La Estrella de Belén",
            image: "estrella.png"
        },
        {
            value: 400,
            question: "¿Cómo se llaman las canciones tradicionales que se cantan en Navidad?",
            answer: "Villancicos",
            image: "villancicos.png"
        },
        {
            value: 500,
            question: "¿Qué figura especial y traviesa se esconde en el Belén catalán?",
            answer: "El Caganer (figura tradicional catalana)",
            image: "caganer.png"
        }
    ]
];

// Game State
let score = 0;
let usedQuestions = new Set();

// DOM Elements
const questionsGrid = document.getElementById('questionsGrid');
const questionModal = document.getElementById('questionModal');
const questionText = document.getElementById('questionText');
const answerText = document.getElementById('answerText');
const questionImage = document.getElementById('questionImage');
const revealBtn = document.getElementById('revealBtn');
const closeBtn = document.getElementById('closeBtn');
const scoreDisplay = document.getElementById('score');

// Initialize Game
function initGame() {
    createQuestionCards();
    setupEventListeners();
}

// Create Question Cards
function createQuestionCards() {
    questionsGrid.innerHTML = '';
    
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 5; row++) {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.textContent = gameData[col][row].value;
            card.dataset.category = col;
            card.dataset.question = row;
            
            card.addEventListener('click', () => handleQuestionClick(col, row, card));
            questionsGrid.appendChild(card);
        }
    }
}

// Handle Question Click
function handleQuestionClick(category, questionIndex, card) {
    const questionId = `${category}-${questionIndex}`;
    
    if (usedQuestions.has(questionId)) {
        return;
    }
    
    const questionData = gameData[category][questionIndex];
    
    // Mark as used
    usedQuestions.add(questionId);
    card.classList.add('used');
    
    // Show question modal
    showQuestion(questionData);
}

// Show Question Modal
function showQuestion(questionData) {
    questionText.textContent = questionData.question;
    answerText.textContent = `✅ ${questionData.answer}`;
    questionImage.src = `images/${questionData.image}`;
    questionImage.alt = questionData.question;
    
    answerText.classList.add('hidden');
    closeBtn.classList.add('hidden');
    revealBtn.classList.remove('hidden');
    
    questionModal.classList.add('active');
    
    // Store current question value for scoring
    questionModal.dataset.value = questionData.value;
}

// Setup Event Listeners
function setupEventListeners() {
    revealBtn.addEventListener('click', () => {
        answerText.classList.remove('hidden');
        closeBtn.classList.remove('hidden');
        revealBtn.classList.add('hidden');
        
        // Add points
        const points = parseInt(questionModal.dataset.value);
        updateScore(points);
        
        // Trigger confetti
        triggerConfetti();
    });
    
    closeBtn.addEventListener('click', () => {
        questionModal.classList.remove('active');
    });
    
    // Close modal on background click
    questionModal.addEventListener('click', (e) => {
        if (e.target === questionModal) {
            questionModal.classList.remove('active');
        }
    });
}

// Update Score
function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
    
    // Animate score
    scoreDisplay.parentElement.style.animation = 'none';
    setTimeout(() => {
        scoreDisplay.parentElement.style.animation = 'pulse 0.5s ease';
    }, 10);
}

// Confetti Animation
function triggerConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    const colors = ['#D42426', '#165B33', '#FFD700', '#4169E1', '#FF69B4'];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * particleCount,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
    
    let animationFrame;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tilt = Math.sin(p.tiltAngle - p.r / 4) * 15;
            
            if (p.y > canvas.height) {
                particles[index] = {
                    x: Math.random() * canvas.width,
                    y: -10,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngleIncremental: p.tiltAngleIncremental,
                    tiltAngle: p.tiltAngle
                };
            }
        });
        
        animationFrame = requestAnimationFrame(draw);
    }
    
    draw();
    
    // Stop confetti after 3 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 3000);
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
