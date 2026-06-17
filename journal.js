// Local Relationship Pattern Journal/Log

const JOURNAL_STORAGE_KEY = 'compatibility_checker_journal';

// Load journal logs from LocalStorage
function getJournalEntries() {
    const data = localStorage.getItem(JOURNAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Save journal logs to LocalStorage
function saveJournalEntries(entries) {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(entries));
}

// Render the timeline list in the DOM
function renderJournalTimeline() {
    const timeline = document.getElementById('journal-timeline-list');
    if (!timeline) return;

    const entries = getJournalEntries();

    if (entries.length === 0) {
        timeline.innerHTML = `
            <div class="empty-state">
                <i class="far fa-calendar-alt" style="font-size: 3rem; margin-bottom: 1rem; display: block; color: var(--text-muted);"></i>
                <p>No entries logged yet. Track daily events, behaviors, and your feelings to see patterns over time.</p>
            </div>
        `;
        return;
    }

    // Sort entries: newest first
    const sortedEntries = entries.sort((a, b) => new Date(b.date) - new Date(a.date));

    timeline.innerHTML = sortedEntries.map(entry => {
        const dateFormatted = new Date(entry.date).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Mood Label mapping
        const moodLabels = {
            1: '😭 Terrible',
            2: '🙁 Bad',
            3: '😐 Average',
            4: '🙂 Good',
            5: '😍 Great'
        };

        // Freedom/Control Label mapping
        const freedomLabels = {
            1: '⚠️ Extremely Controlling',
            2: '⚠️ Possessive',
            3: '😐 Neutral',
            4: '🕊️ Respectful',
            5: '🕊️ Full Freedom'
        };

        // Class determinations based on values
        const moodClass = `metric-mood-${entry.mood}`;
        const freedomClass = entry.freedom <= 2 ? 'metric-mood-1' : (entry.freedom === 3 ? 'metric-mood-3' : 'metric-mood-5');

        return `
            <div class="journal-card" data-id="${entry.id}">
                <button class="journal-delete-btn" title="Delete Entry" onclick="deleteJournalEntry('${entry.id}')">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <div class="journal-card-header">
                    <span class="journal-date">${dateFormatted}</span>
                    <div class="journal-metrics">
                        <span class="metric-badge ${moodClass}">${moodLabels[entry.mood]}</span>
                        <span class="metric-badge ${freedomClass}">${freedomLabels[entry.freedom]}</span>
                    </div>
                </div>
                <p class="journal-notes">${escapeHTML(entry.notes)}</p>
            </div>
        `;
    }).join('');
}

// Escape HTML utility to prevent XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Add a new journal entry
function handleJournalSubmit(e) {
    e.preventDefault();
    
    const dateVal = document.getElementById('journal-date').value;
    const moodVal = parseInt(document.getElementById('journal-mood').value, 10);
    const freedomVal = parseInt(document.getElementById('journal-freedom').value, 10);
    const notesVal = document.getElementById('journal-notes').value.trim();

    if (!notesVal) {
        alert('Please write down some notes about today.');
        return;
    }

    const newEntry = {
        id: Date.now().toString(),
        date: dateVal || new Date().toISOString().split('T')[0],
        mood: moodVal,
        freedom: freedomVal,
        notes: notesVal
    };

    const entries = getJournalEntries();
    entries.push(newEntry);
    saveJournalEntries(entries);

    // Reset Form
    document.getElementById('journal-form-el').reset();
    setDefaultJournalDate();

    // Re-render
    renderJournalTimeline();
}

// Delete a journal entry
function deleteJournalEntry(id) {
    if (confirm('Are you sure you want to delete this log entry?')) {
        let entries = getJournalEntries();
        entries = entries.filter(e => e.id !== id);
        saveJournalEntries(entries);
        renderJournalTimeline();
    }
}

// Set default date input to today
function setDefaultJournalDate() {
    const dateInput = document.getElementById('journal-date');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
}

// Global hook so onclick inside string HTML works
window.deleteJournalEntry = deleteJournalEntry;

// Setup Event Listeners
window.addEventListener('DOMContentLoaded', () => {
    setDefaultJournalDate();
    renderJournalTimeline();

    const form = document.getElementById('journal-form-el');
    if (form) {
        form.addEventListener('submit', handleJournalSubmit);
    }
    
    // Refresh timeline if navigating to journal
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#/journal') {
            renderJournalTimeline();
        }
    });
});
