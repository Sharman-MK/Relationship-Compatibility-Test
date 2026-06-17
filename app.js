// Quiz Question Data
const questions = [
    // Category 1: Connection & Communication (Positive)
    {
        id: 1,
        category: 'comm',
        categoryLabel: 'Communication & Connection',
        text: 'We talk openly about our feelings and listen to each other without judgment.',
        isNegative: false
    },
    {
        id: 2,
        category: 'comm',
        categoryLabel: 'Communication & Connection',
        text: 'When we have disagreements, we solve them through calm discussion rather than shouting or silent treatment.',
        isNegative: false
    },
    {
        id: 3,
        category: 'comm',
        categoryLabel: 'Communication & Connection',
        text: 'I feel safe telling my partner when something is bothering me, without fearing their reaction.',
        isNegative: false
    },
    {
        id: 4,
        category: 'comm',
        categoryLabel: 'Communication & Connection',
        text: 'My partner respects my opinions and perspective, even when we disagree on important matters.',
        isNegative: false
    },
    {
        id: 5,
        category: 'comm',
        categoryLabel: 'Communication & Connection',
        text: 'We can share physical and emotional space comfortably while maintaining our own separate lives.',
        isNegative: false
    },

    // Category 2: Freedom & Independence (Positive)
    {
        id: 6,
        category: 'indep',
        categoryLabel: 'Freedom & Independence',
        text: 'My partner actively encourages my personal goals, studies, career, and individual hobbies.',
        isNegative: false
    },
    {
        id: 7,
        category: 'indep',
        categoryLabel: 'Freedom & Independence',
        text: 'I feel completely free to express my personal style, make clothing choices, and change my appearance.',
        isNegative: false
    },
    {
        id: 8,
        category: 'indep',
        categoryLabel: 'Freedom & Independence',
        text: 'My partner respects my schedule and my need for alone time, without demanding constant text responses.',
        isNegative: false
    },
    {
        id: 9,
        category: 'indep',
        categoryLabel: 'Freedom & Independence',
        text: 'I don\'t feel like I have to walk on eggshells or hide certain parts of my personality from my partner.',
        isNegative: false
    },
    {
        id: 10,
        category: 'indep',
        categoryLabel: 'Freedom & Independence',
        text: 'My partner treats my friends and family with respect and doesn\'t make me feel guilty for spending time with them.',
        isNegative: false
    },

    // Category 3: Boundaries & Respect (Positive)
    {
        id: 11,
        category: 'respect',
        categoryLabel: 'Boundaries & Respect',
        text: 'My partner respects my physical boundaries, comfort level, and consent in all situations.',
        isNegative: false
    },
    {
        id: 12,
        category: 'respect',
        categoryLabel: 'Boundaries & Respect',
        text: 'We respect each other\'s privacy (phones, diaries, passwords) and don\'t feel the need to snoop.',
        isNegative: false
    },
    {
        id: 13,
        category: 'respect',
        categoryLabel: 'Boundaries & Respect',
        text: 'When I set a firm boundary (e.g. saying no to something), my partner accepts it without whining or arguing.',
        isNegative: false
    },
    {
        id: 14,
        category: 'respect',
        categoryLabel: 'Boundaries & Respect',
        text: 'Even during arguments, my partner avoids name-calling, insults, or bringing up my insecurities.',
        isNegative: false
    },
    {
        id: 15,
        category: 'respect',
        categoryLabel: 'Boundaries & Respect',
        text: 'I feel equal to my partner in terms of decision-making power and importance in the relationship.',
        isNegative: false
    },

    // Category 4: Control & Possessiveness (Negative)
    {
        id: 16,
        category: 'control',
        categoryLabel: 'Control & Possessiveness',
        text: 'My partner demands to know where I am at all times and checks in constantly if I am out without them.',
        isNegative: true
    },
    {
        id: 17,
        category: 'control',
        categoryLabel: 'Control & Possessiveness',
        text: 'My partner goes through my phone, emails, social media messages, or bank records without asking.',
        isNegative: true
    },
    {
        id: 18,
        category: 'control',
        categoryLabel: 'Control & Possessiveness',
        text: 'My partner gets jealous, angry, or suspicious when I talk to other people, including coworkers, classmates, or old friends.',
        isNegative: true
    },
    {
        id: 19,
        category: 'control',
        categoryLabel: 'Control & Possessiveness',
        text: 'My partner tries to isolate me from my support systems, discouraging me from visiting my family or close friends.',
        isNegative: true
    },
    {
        id: 20,
        category: 'control',
        categoryLabel: 'Control & Possessiveness',
        text: 'My partner threatens to hurt themselves, end the relationship, or share personal secrets to force me to do what they want.',
        isNegative: true
    },

    // Category 5: Pace & Pressure (Negative)
    {
        id: 21,
        category: 'pace',
        categoryLabel: 'Pace & Pressure',
        text: 'My partner rushed the early stages of our relationship, declaring love or pushing for extreme commitment very quickly.',
        isNegative: true
    },
    {
        id: 22,
        category: 'pace',
        categoryLabel: 'Pace & Pressure',
        text: 'My partner pressures me to take permanent steps (like moving in together or getting married) before I feel ready.',
        isNegative: true
    },
    {
        id: 23,
        category: 'pace',
        categoryLabel: 'Pace & Pressure',
        text: 'My partner gets angry, cold, or uses guilt trips if I suggest slowing down or taking time to consider our future.',
        isNegative: true
    },
    {
        id: 24,
        category: 'pace',
        categoryLabel: 'Pace & Pressure',
        text: 'I feel pressured to agree to marriage or long-term commitment just to keep the peace and prevent arguments.',
        isNegative: true
    },
    {
        id: 25,
        category: 'pace',
        categoryLabel: 'Pace & Pressure',
        text: 'My partner uses threats, blackmail, or emotional manipulation to force decisions about our official relationship status.',
        isNegative: true
    }
];

// App State
let userAnswers = {}; // id: answer value (1-5)
let currentQuestionIndex = 0;

// Option Definitions
const options = [
    { label: 'Strongly Disagree', value: 1, emoji: '😠' },
    { label: 'Disagree', value: 2, emoji: '🙁' },
    { label: 'Neutral', value: 3, emoji: '😐' },
    { label: 'Agree', value: 4, emoji: '🙂' },
    { label: 'Strongly Agree', value: 5, emoji: '😍' }
];

// Router Configuration
const routes = {
    home: 'home-view',
    quiz: 'quiz-view',
    results: 'results-view',
    resources: 'resources-view',
    journal: 'journal-view'
};

function initRouter() {
    function handleRoute() {
        const hash = window.location.hash.slice(2) || 'home'; // Extract route from #/route
        const activeViewId = routes[hash] || 'home-view';
        
        // Toggle view visibility
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        const activeView = document.getElementById(activeViewId);
        if (activeView) {
            activeView.classList.add('active');
            window.scrollTo(0, 0);
        }
        
        // Update nav links active state
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === `#/${hash}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Trigger specific logic when navigating to pages
        if (hash === 'quiz') {
            resetQuiz();
            renderQuestion();
        } else if (hash === 'results') {
            // Check if quiz has been filled out
            if (Object.keys(userAnswers).length < questions.length) {
                window.location.hash = '#/quiz';
            } else {
                calculateAndRenderResults();
            }
        }
    }

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('DOMContentLoaded', handleRoute);
}

// Quick Hide Safety Feature
function setupQuickHide() {
    const hideButtons = document.querySelectorAll('.quick-hide-btn');
    const escapeAction = () => {
        // Redirect to a completely neutral page instantly
        window.location.replace('https://www.google.com/search?q=local+weather+radar');
    };

    hideButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            escapeAction();
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            escapeAction();
        }
    });
}

// Quiz Logic
function resetQuiz() {
    userAnswers = {};
    currentQuestionIndex = 0;
    const prevBtn = document.getElementById('prev-question-btn');
    if (prevBtn) prevBtn.style.display = 'none';
}

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const quizArea = document.getElementById('quiz-question-area');
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('quiz-progress-text').innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Compile dynamic HTML for current question
    quizArea.innerHTML = `
        <div class="question-card active">
            <span class="category-badge cat-${question.category}">${question.categoryLabel}</span>
            <h3 class="question-text">${question.text}</h3>
            <div class="options-grid">
                ${options.map(opt => {
                    const isSelected = userAnswers[question.id] === opt.value ? 'selected' : '';
                    return `
                        <button class="option-btn ${isSelected}" data-val="${opt.value}">
                            <span class="option-emoji">${opt.emoji}</span>
                            <span>${opt.label}</span>
                        </button>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // Hook click event to options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const val = parseInt(e.currentTarget.getAttribute('data-val'), 10);
            selectAnswer(question.id, val);
        });
    });

    // Update navigation buttons
    const prevBtn = document.getElementById('prev-question-btn');
    if (currentQuestionIndex > 0) {
        prevBtn.style.display = 'inline-flex';
    } else {
        prevBtn.style.display = 'none';
    }
}

function selectAnswer(questionId, val) {
    userAnswers[questionId] = val;
    
    // Highlight visually
    document.querySelectorAll('.option-btn').forEach(btn => {
        if (parseInt(btn.getAttribute('data-val'), 10) === val) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Smooth advance after selection delay
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            // Last question answered, redirect to results page
            window.location.hash = '#/results';
        }
    }, 250);
}

// Hook Prev/Next buttons
function setupQuizNav() {
    const prevBtn = document.getElementById('prev-question-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderQuestion();
            }
        });
    }
}

// Results Processing Algorithm
function calculateAndRenderResults() {
    // 1. Calculate General Compatibility Score based on positive traits (comm + respect + indep)
    // Scale: 15 positive questions. Max points = 15 * 5 = 75. Min points = 15 * 1 = 15.
    const posQuestions = questions.filter(q => !q.isNegative);
    let totalPosScore = 0;
    posQuestions.forEach(q => {
        totalPosScore += (userAnswers[q.id] || 3); // Default neutral
    });
    
    // Let's normalize it to 0-100%
    // Min is 15, Max is 75. Range is 60.
    const compScore = Math.round(((totalPosScore - 15) / 60) * 100);

    // 2. Calculate Relationship Health & Safety Score
    // We base health on positive safety categories (indep [Q6-Q10] + respect [Q11-Q15]) 
    // and negative control categories (control [Q16-Q20] + pace [Q21-Q25]).
    // Total questions for health = 20. Max points = 20 * 4 = 80.
    let totalHealthPoints = 0;
    let redFlagsCount = 0;
    const triggeredRedFlags = [];

    questions.forEach(q => {
        const answer = userAnswers[q.id] || 3; // Default neutral
        
        if (q.isNegative) {
            // Negative questions (Q16-Q25): Strongly Disagree (1) is healthy (4 pts), Strongly Agree (5) is toxic (0 pts)
            totalHealthPoints += (5 - answer);
            
            // Check for red flags (Agree or Strongly Agree to controlling behaviors)
            if (answer >= 4) {
                redFlagsCount++;
                triggeredRedFlags.push(q.text);
            }
        } else {
            // We count Independence and Respect categories for relationship health
            if (q.category === 'indep' || q.category === 'respect') {
                // Positive questions (Q6-Q15): Strongly Agree (5) is healthy (4 pts), Strongly Disagree (1) is toxic (0 pts)
                totalHealthPoints += (answer - 1);
                
                // If they disagree with basic respect or independence questions (Strongly Disagree or Disagree)
                if (answer <= 2) {
                    redFlagsCount++;
                    triggeredRedFlags.push(`Concern regarding respect/freedom: "${q.text}"`);
                }
            }
        }
    });

    // Calculate health percentage based on 20 health questions (max points = 80)
    let healthScore = Math.round((totalHealthPoints / 80) * 100);

    // Clamp healthScore between 0 and 100
    healthScore = Math.max(0, Math.min(100, healthScore));

    // Update gauge values
    animateGauge('compat-gauge', compScore, '#a74eff');
    animateGauge('health-gauge', healthScore, healthScore >= 70 ? '#38ef7d' : (healthScore >= 50 ? '#f59e0b' : '#ff416c'));

    // Select Verdict and Recommendations based on scores
    const verdictBanner = document.getElementById('results-verdict-banner');
    const verdictTitle = document.getElementById('results-verdict-title');
    const verdictDesc = document.getElementById('results-verdict-desc');
    const recommendationArea = document.getElementById('results-recommendation-details');

    let verdictStatus = ''; // success, warning, danger
    let title = '';
    let description = '';
    let recommendationHTML = '';

    // Safety Override: boyfriend is possessive/coercing marriage
    const marriageCoercionPresent = [22, 24, 25].some(id => userAnswers[id] >= 4);

    if (healthScore < 65 || redFlagsCount >= 3 || marriageCoercionPresent) {
        // HIGH DANGER / TOXIC
        verdictStatus = 'danger';
        title = 'Critical Safety Concern Detected';
        description = 'The assessment indicates high levels of possessiveness, pressure, or controlling behaviors in your relationship. Standard compatibility does not make up for a lack of respect, freedom, and personal safety.';
        
        recommendationHTML = `
            <div class="glass-card" style="border-color: rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.02);">
                <h3 style="color: #ef4444; margin-bottom: 1rem;"><i class="fas fa-exclamation-triangle"></i> Essential Safety Advice: Break Up Safely</h3>
                <p style="margin-bottom: 1.25rem;">
                    When a relationship features high possessiveness, control, and pressure (such as forced marriage), ending it is the healthiest option. However, leaving a possessive partner requires careful planning. A sudden breakup can escalate their anger.
                </p>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
                    <div class="info-bullet warning">
                        <i class="fas fa-shield-alt"></i>
                        <span><strong>Safety First:</strong> Avoid breaking up in private. If you plan to end it, do so over the phone, in a public place, or with supportive friends/family nearby.</span>
                    </div>
                    <div class="info-bullet warning">
                        <i class="fas fa-user-friends"></i>
                        <span><strong>Break the Isolation:</strong> Let family, friends, or trusted mentors know what you are going through. Controlling partners thrive when you have no support.</span>
                    </div>
                    <div class="info-bullet warning">
                        <i class="fas fa-lock"></i>
                        <span><strong>Secure Your Data:</strong> Change passwords to your email, social accounts, and banking. Check your phone settings to ensure location sharing is off.</span>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="#/resources" class="btn btn-danger"><i class="fas fa-phone-alt"></i> Get Safety & Support Resources</a>
                    <button class="btn btn-secondary" onclick="window.location.hash='#/journal'"><i class="fas fa-journal-whills"></i> Log daily behaviors anonymously</button>
                </div>
            </div>
        `;
    } else if (healthScore < 85 || redFlagsCount >= 1) {
        // WARNING / CONCERNING
        verdictStatus = 'warning';
        title = 'Warning Signs Detected';
        description = 'While there is connection, some possessive or pressure-related red flags are starting to emerge. It is vital to set firm boundaries now before patterns solidify.';
        
        recommendationHTML = `
            <div class="glass-card" style="border-color: rgba(245, 158, 11, 0.3);">
                <h3 style="color: #f59e0b; margin-bottom: 1rem;"><i class="fas fa-exclamation-circle"></i> Boundary Action Plan</h3>
                <p style="margin-bottom: 1.25rem;">
                    Healthy relationships are built on freedom and mutual respect. Certain boundary violations should be addressed directly:
                </p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    <li><strong>Set Firm Boundaries:</strong> Clearly communicate that check-ins, phone checking, and pace-pressure are not acceptable.</li>
                    <li><strong>Observe Reactions:</strong> If they react with anger, guilt, or manipulation when you state your boundaries, it indicates they value control over your well-being.</li>
                    <li><strong>Maintain Independence:</strong> Intentionally spend time with your friends and family away from your partner. Do not let your social circle shrink.</li>
                </ul>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="#/resources" class="btn btn-secondary"><i class="fas fa-book-open"></i> Read Boundary Tips</a>
                    <button class="btn btn-secondary" onclick="window.location.hash='#/journal'"><i class="fas fa-plus"></i> Track patterns in the Journal</button>
                </div>
            </div>
        `;
    } else {
        // HEALTHY RELATIONSHIP
        if (compScore >= 70) {
            verdictStatus = 'success';
            title = 'Highly Compatible & Healthy';
            description = 'Your relationship scores very high in communication, boundaries, and mutual respect. This is a supportive foundation for a lasting partnership.';
            
            recommendationHTML = `
                <div class="glass-card" style="border-color: rgba(20, 184, 166, 0.3);">
                    <h3 style="color: #14b8a6; margin-bottom: 1rem;"><i class="fas fa-heart"></i> Growing Together</h3>
                    <p style="margin-bottom: 1.25rem;">
                        You have built a healthy space where both of you are respected as individuals. Continue prioritizing open communication, and take relationship milestones at a pace that feels comfortable for both of you.
                    </p>
                    <button class="btn btn-primary" onclick="window.location.hash='#/home'"><i class="fas fa-arrow-left"></i> Back to Home</button>
                </div>
            `;
        } else {
            verdictStatus = 'success';
            title = 'Healthy but Incompatible';
            description = 'While you treat each other with deep respect and maintain healthy boundaries, you share low compatibility in communication styles, future vision, or general connection.';
            
            recommendationHTML = `
                <div class="glass-card">
                    <h3 style="color: #8b5cf6; margin-bottom: 1rem;"><i class="fas fa-user-friends"></i> Best as Friends</h3>
                    <p style="margin-bottom: 1.25rem;">
                        Since your relationship has strong mutual respect (high health) but low alignment on compatibility, you are excellent candidates to step back from romantic partnership and transition into friends.
                    </p>
                    <p style="margin-bottom: 1.5rem;">
                        Ending romance doesn\'t mean you have to lose the person entirely, provided both of you agree to a clean, mutual transition with healthy boundaries.
                    </p>
                    <button class="btn btn-secondary" onclick="window.location.hash='#/home'"><i class="fas fa-arrow-left"></i> Back to Home</button>
                </div>
            `;
        }
    }

    // Render verdicts
    verdictBanner.className = `verdict-banner ${verdictStatus}`;
    verdictTitle.innerText = title;
    verdictDesc.innerText = description;
    recommendationArea.innerHTML = recommendationHTML;

    // Show Red Flags Box if any
    const redFlagsBox = document.getElementById('results-red-flags-box');
    if (redFlagsCount > 0) {
        redFlagsBox.style.display = 'block';
        const flagsList = document.getElementById('results-red-flags-list');
        flagsList.innerHTML = triggeredRedFlags.map(flag => `<li>${flag}</li>`).join('');
    } else {
        redFlagsBox.style.display = 'none';
    }
}

// SVG Gauge Animation Helper
function animateGauge(circleId, score, color) {
    const circle = document.getElementById(circleId);
    if (!circle) return;
    
    const container = circle.closest('.gauge-svg-container');
    if (!container) return;
    
    const text = container.querySelector('.gauge-value');
    if (text) {
        text.innerText = `${score}%`;
    }
    
    // Animate stroke offset
    // Radius = 70, Circumference = 2 * Math.PI * 70 = 439.82
    const circumference = 2 * Math.PI * 70;
    circle.style.strokeDasharray = circumference;
    
    const offset = circumference - (score / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    circle.style.stroke = color;
}

// Initialise everything on load
window.addEventListener('DOMContentLoaded', () => {
    initRouter();
    setupQuickHide();
    setupQuizNav();
});
