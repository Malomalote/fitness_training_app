class TrainingApp {
    constructor() {
        this.currentDay = 'sesion1';
        this.currentExercises = [];
        this.carouselStates = {}; // Track carousel position for each exercise
        this.completedExercises = this.loadCompletedExercises();
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;
        this.isMobile = window.innerWidth <= 767;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadDay(this.currentDay);
        this.updateResponsiveFeatures();
        this.updateTrackingStats();
        
        // Listen for window resize
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 767;
            if (wasMobile !== this.isMobile) {
                this.updateResponsiveFeatures();
            }
        });
    }

    // Storage methods for tracking
    loadCompletedExercises() {
        const stored = localStorage.getItem('trainingAppCompleted');
        return stored ? JSON.parse(stored) : {};
    }

    saveCompletedExercises() {
        localStorage.setItem('trainingAppCompleted', JSON.stringify(this.completedExercises));
    }

    getTotalExercisesCount() {
        let total = 0;
        Object.values(trainingData).forEach(session => {
            total += session.exercises.length;
        });
        return total;
    }

    getCompletedExercisesCount() {
        let completed = 0;
        Object.values(this.completedExercises).forEach(sessionExercises => {
            Object.values(sessionExercises).forEach(isCompleted => {
                if (isCompleted) completed++;
            });
        });
        return completed;
    }

    updateTrackingStats() {
        const totalExercises = this.getTotalExercisesCount();
        const completedExercises = this.getCompletedExercisesCount();
        const percentage = Math.round((completedExercises / totalExercises) * 100);

        document.getElementById('completed-exercises').textContent = completedExercises;
        document.getElementById('total-exercises-global').textContent = totalExercises;
        document.getElementById('completion-percentage').textContent = `${percentage}%`;
        document.getElementById('progress-fill').style.width = `${percentage}%`;

        // Auto-reset if all exercises completed
        if (completedExercises === totalExercises && completedExercises > 0) {
            setTimeout(() => {
                if (confirm('¡Felicidades! Has completado todos los ejercicios. ¿Quieres resetear el progreso para empezar una nueva ronda?')) {
                    this.resetTracking();
                }
            }, 1000);
        }
    }

    resetTracking() {
        this.completedExercises = {};
        this.saveCompletedExercises();
        this.updateTrackingStats();
        this.loadDay(this.currentDay); // Reload current day to update UI
    }

    toggleExerciseCompletion(sessionKey, exerciseIndex) {
        if (!this.completedExercises[sessionKey]) {
            this.completedExercises[sessionKey] = {};
        }
        
        this.completedExercises[sessionKey][exerciseIndex] = !this.completedExercises[sessionKey][exerciseIndex];
        this.saveCompletedExercises();
        this.updateTrackingStats();
        
        // Update UI - Find the exercise card and update ALL complete buttons within it
        const exerciseCard = document.querySelector(`[data-exercise-index="${exerciseIndex}"]`);
        const completeButtons = exerciseCard.querySelectorAll('.complete-btn');
        
        if (this.completedExercises[sessionKey][exerciseIndex]) {
            // Mark as completed - update card and all buttons
            exerciseCard.classList.add('completed');
            completeButtons.forEach(btn => {
                btn.textContent = '✓ Completado';
                btn.classList.add('completed');
            });
        } else {
            // Mark as not completed - update card and all buttons
            exerciseCard.classList.remove('completed');
            completeButtons.forEach(btn => {
                btn.textContent = 'Marcar como completado';
                btn.classList.remove('completed');
            });
        }
    }

    isExerciseCompleted(sessionKey, exerciseIndex) {
        return this.completedExercises[sessionKey] && this.completedExercises[sessionKey][exerciseIndex];
    }

    bindEvents() {
        // Day selector buttons
        const dayButtons = document.querySelectorAll('.day-btn');
        dayButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const day = e.target.dataset.day;
                this.selectDay(day);
            });
        });

        // Reset tracking button
        document.getElementById('reset-tracking').addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres resetear todo el progreso?')) {
                this.resetTracking();
            }
        });
    }

    updateResponsiveFeatures() {
        // Update navigation buttons visibility
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.style.display = this.isMobile ? 'none' : 'flex';
        });
    }

    selectDay(day) {
        // Update active day button
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-day="${day}"]`).classList.add('active');
        
        this.currentDay = day;
        this.loadDay(day);
    }

    loadDay(day) {
        const dayData = trainingData[day];
        if (!dayData) return;

        // Update day info
        document.getElementById('day-title').textContent = dayData.day;
        document.getElementById('day-description').textContent = dayData.title;
        document.getElementById('day-duration').textContent = dayData.duration;

        // Update progress indicator
        document.getElementById('total-exercises').textContent = dayData.exercises.length;
        document.getElementById('current-exercise').textContent = '1';

        this.currentExercises = dayData.exercises;
        this.carouselStates = {}; // Reset carousel states
        this.renderExercises();
    }

    renderExercises() {
        const container = document.getElementById('exercises-container');
        container.innerHTML = '';

        this.currentExercises.forEach((exercise, index) => {
            const exerciseCard = this.createExerciseCard(exercise, index);
            container.appendChild(exerciseCard);
        });

        this.bindCarouselEvents();
    }

    createExerciseCard(exercise, index) {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.dataset.exerciseIndex = index;

        // Initialize carousel state
        this.carouselStates[index] = 0;

        // Check if exercise is completed
        const isCompleted = this.isExerciseCompleted(this.currentDay, index);
        if (isCompleted) {
            card.classList.add('completed');
        }

        const alternatives = exercise.alternatives || [];
        const allExercises = [exercise, ...alternatives];
        const totalItems = allExercises.length;

        card.innerHTML = `
            <div class="exercise-header">
                <div class="exercise-number">${index + 1}</div>
                <div class="exercise-title">
                    <h3>${exercise.name}</h3>
                    <div class="exercise-sets">${exercise.sets}</div>
                </div>
            </div>
            <div class="carousel-container">
                <div class="carousel-track" data-exercise="${index}">
                    ${allExercises.map((ex, i) => `
                        <div class="carousel-item">
                            ${ex.image ? 
                                `<img src="images/${ex.image}" alt="${ex.name}" class="exercise-image" onerror="this.parentElement.classList.add('no-image'); this.style.display='none';">` :
                                `<div class="exercise-image no-image">📷 Sin imagen</div>`
                            }
                            <div class="exercise-info">
                                ${i > 0 ? '<div class="alternative-badge">Alternativa</div>' : ''}
                                <div class="exercise-name">${ex.name}</div>
                                <div class="exercise-description">${ex.sets}</div>
                                ${ex.videoUrl ? `<a href="${ex.videoUrl}" target="_blank" class="video-btn">📺 Ver video</a>` : ''}
                                <button class="complete-btn ${isCompleted ? 'completed' : ''}" data-session="${this.currentDay}" data-exercise="${index}">
                                    ${isCompleted ? '✓ Completado' : 'Marcar como completado'}
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${!this.isMobile ? `
                    <button class="nav-btn prev" data-exercise="${index}" data-direction="prev">‹</button>
                    <button class="nav-btn next" data-exercise="${index}" data-direction="next">›</button>
                ` : ''}
                ${totalItems > 1 ? `
                    <div class="carousel-indicators">
                        ${allExercises.map((_, i) => `
                            <div class="indicator ${i === 0 ? 'active' : ''}" data-exercise="${index}" data-slide="${i}"></div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;

        return card;
    }

    bindCarouselEvents() {
        // Navigation buttons (desktop)
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const exerciseIndex = parseInt(e.target.dataset.exercise);
                const direction = e.target.dataset.direction;
                
                if (direction === 'next') {
                    this.nextSlide(exerciseIndex);
                } else {
                    this.prevSlide(exerciseIndex);
                }
            });
        });

        // Complete exercise buttons
        const completeButtons = document.querySelectorAll('.complete-btn');
        completeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                const sessionKey = e.target.dataset.session;
                const exerciseIndex = parseInt(e.target.dataset.exercise);
                this.toggleExerciseCompletion(sessionKey, exerciseIndex);
            });
        });

        // Indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const exerciseIndex = parseInt(e.target.dataset.exercise);
                const slideIndex = parseInt(e.target.dataset.slide);
                this.goToSlide(exerciseIndex, slideIndex);
            });
        });

        // Touch events for mobile
        const carouselTracks = document.querySelectorAll('.carousel-track');
        carouselTracks.forEach(track => {
            this.bindTouchEvents(track);
        });
    }

    bindTouchEvents(track) {
        const exerciseIndex = parseInt(track.dataset.exercise);
        
        // Touch events
        track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.isDragging = true;
            track.classList.add('dragging');
        }, { passive: true });

        track.addEventListener('touchmove', (e) => {
            if (!this.isDragging) return;
            this.touchEndX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            if (!this.isDragging) return;
            
            track.classList.remove('dragging');
            this.isDragging = false;
            
            const touchDiff = this.touchStartX - this.touchEndX;
            const minSwipeDistance = 50;
            
            if (Math.abs(touchDiff) > minSwipeDistance) {
                if (touchDiff > 0) {
                    // Swipe left - next slide
                    this.nextSlide(exerciseIndex);
                } else {
                    // Swipe right - previous slide
                    this.prevSlide(exerciseIndex);
                }
            }
        }, { passive: true });

        // Mouse events for desktop
        if (!this.isMobile) {
            track.addEventListener('mousedown', (e) => {
                e.preventDefault();
                this.touchStartX = e.clientX;
                this.isDragging = true;
                track.classList.add('dragging');
            });

            track.addEventListener('mousemove', (e) => {
                if (!this.isDragging) return;
                e.preventDefault();
                this.touchEndX = e.clientX;
            });

            track.addEventListener('mouseup', (e) => {
                if (!this.isDragging) return;
                
                track.classList.remove('dragging');
                this.isDragging = false;
                
                const touchDiff = this.touchStartX - this.touchEndX;
                const minSwipeDistance = 50;
                
                if (Math.abs(touchDiff) > minSwipeDistance) {
                    if (touchDiff > 0) {
                        this.nextSlide(exerciseIndex);
                    } else {
                        this.prevSlide(exerciseIndex);
                    }
                }
            });

            track.addEventListener('mouseleave', () => {
                if (this.isDragging) {
                    track.classList.remove('dragging');
                    this.isDragging = false;
                }
            });
        }
    }

    nextSlide(exerciseIndex) {
        const exercise = this.currentExercises[exerciseIndex];
        const totalSlides = 1 + (exercise.alternatives ? exercise.alternatives.length : 0);
        
        this.carouselStates[exerciseIndex] = (this.carouselStates[exerciseIndex] + 1) % totalSlides;
        this.updateCarousel(exerciseIndex);
    }

    prevSlide(exerciseIndex) {
        const exercise = this.currentExercises[exerciseIndex];
        const totalSlides = 1 + (exercise.alternatives ? exercise.alternatives.length : 0);
        
        this.carouselStates[exerciseIndex] = this.carouselStates[exerciseIndex] === 0 
            ? totalSlides - 1 
            : this.carouselStates[exerciseIndex] - 1;
        
        this.updateCarousel(exerciseIndex);
    }

    goToSlide(exerciseIndex, slideIndex) {
        this.carouselStates[exerciseIndex] = slideIndex;
        this.updateCarousel(exerciseIndex);
    }

    updateCarousel(exerciseIndex) {
        const track = document.querySelector(`[data-exercise="${exerciseIndex}"]`);
        const currentSlide = this.carouselStates[exerciseIndex];
        
        // Update transform
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indicators
        const indicators = document.querySelectorAll(`[data-exercise="${exerciseIndex}"].indicator`);
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });

        // Update progress indicator when scrolling through exercises
        this.updateProgressIndicator();
    }

    updateProgressIndicator() {
        // Find the first visible exercise card
        const cards = document.querySelectorAll('.exercise-card');
        let visibleCardIndex = 0;

        // Simple approach: just use the first card as current
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cardIndex = parseInt(entry.target.dataset.exerciseIndex);
                    document.getElementById('current-exercise').textContent = cardIndex + 1;
                }
            });
        }, { threshold: 0.5 });

        cards.forEach(card => observer.observe(card));
    }

    // Method to get current exercise info (useful for future features)
    getCurrentExerciseInfo(exerciseIndex) {
        const exercise = this.currentExercises[exerciseIndex];
        const currentSlide = this.carouselStates[exerciseIndex];
        
        if (currentSlide === 0) {
            return exercise;
        } else {
            return exercise.alternatives[currentSlide - 1];
        }
    }

    // Method to reset all carousels to main exercise
    resetAllCarousels() {
        Object.keys(this.carouselStates).forEach(exerciseIndex => {
            this.carouselStates[exerciseIndex] = 0;
            this.updateCarousel(parseInt(exerciseIndex));
        });
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    window.trainingApp = new TrainingApp();
});

// PWA-like features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker could be registered here for offline functionality
        console.log('Training app loaded successfully!');
    });
}

// Utility function to preload images
function preloadImages() {
    const imagePromises = [];
    
    Object.values(trainingData).forEach(day => {
        day.exercises.forEach(exercise => {
            if (exercise.image) {
                const img = new Image();
                img.src = `images/${exercise.image}`;
                imagePromises.push(new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve; // Don't fail if image doesn't load
                }));
            }
            
            if (exercise.alternatives) {
                exercise.alternatives.forEach(alt => {
                    if (alt.image) {
                        const img = new Image();
                        img.src = `images/${alt.image}`;
                        imagePromises.push(new Promise(resolve => {
                            img.onload = resolve;
                            img.onerror = resolve;
                        }));
                    }
                });
            }
        });
    });
    
    return Promise.all(imagePromises);
}

// Preload images when the app starts
preloadImages().then(() => {
    console.log('Images preloaded for better performance');
});
