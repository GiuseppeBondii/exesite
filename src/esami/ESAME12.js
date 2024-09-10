import React from "react";
import './ESAME12.css'

function ESAME12(){

    const API_BASE_URL = 'https://api.opentranslator.com';
    let languages = {};

    async function fetchLanguages() {
        try {
            const response = await fetch(`${API_BASE_URL}/languages`);
            languages = await response.json();
            populateLanguageDropdowns();
        } catch (error) {
            console.error('Errore nel recupero delle lingue:', error);
        }
    }

    function populateLanguageDropdowns() {
        const sourceSelect = document.getElementById('sourceLanguage');
        const targetSelect = document.getElementById('targetLanguage');
        
        for (const [code, name] of Object.entries(languages)) {
            const option = new Option(name, code);
            sourceSelect.add(option.cloneNode(true));
            targetSelect.add(option);
        }
    }

    async function translateText() {
        const inputText = document.getElementById('inputText').value;
        const sourceLanguage = document.getElementById('sourceLanguage').value;
        const targetLanguage = document.getElementById('targetLanguage').value;
        
        try {
            const response = await fetch(`${API_BASE_URL}/translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: inputText,
                    source_language: sourceLanguage,
                    target_language: targetLanguage
                })
            });
            
            const result = await response.json();
            document.getElementById('translatedText').textContent = result.translated_text;
        } catch (error) {
            console.error('Errore nella traduzione:', error);
        }
    }

    async function detectLanguage() {
        const inputText = document.getElementById('inputText').value;
        
        if (inputText.length < 10) {
            alert('Il testo deve contenere almeno 10 caratteri per il rilevamento della lingua.');
            return;
        }
        
        try {
            const response = await fetch(`${API_BASE_URL}/detect-language`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText })
            });
            
            const result = await response.json();
            
            if (inputText.length <= 25) {
                displayDetectedLanguages(result.detected_languages.slice(0, 3));
            } else {
                const detectedLanguage = result.detected_languages[0].language;
                document.getElementById('sourceLanguage').value = detectedLanguage;
                translateText();
            }
        } catch (error) {
            console.error('Errore nel rilevamento della lingua:', error);
        }
    }

    function displayDetectedLanguages(detectedLanguages) {
        const detectedLanguagesDiv = document.getElementById('detectedLanguages');
        detectedLanguagesDiv.innerHTML = '<h3>Lingue rilevate:</h3>';
        const ul = document.createElement('ul');
        
        detectedLanguages.forEach(lang => {
            const li = document.createElement('li');
            li.textContent = `${languages[lang.language]} (${(lang.confidence_score * 100).toFixed(2)}%)`;
            ul.appendChild(li);
        });
        
        detectedLanguagesDiv.appendChild(ul);
    }

    document.getElementById('translateBtn').addEventListener('click', translateText);
    document.getElementById('detectBtn').addEventListener('click', detectLanguage);

    // Inizializza l'applicazione
    fetchLanguages();
    return(
        <div className="traduttore">
            <h1>Traduttore OpenTranslator</h1>
                    
                    <div>
                        <label for="sourceLanguage">Lingua di partenza:</label>
                        <select id="sourceLanguage"></select>
                    </div>
                    
                    <div>
                        <label for="targetLanguage">Lingua di arrivo:</label>
                        <select id="targetLanguage"></select>
                    </div>
                    
                    <div>
                        <label for="inputText">Testo da tradurre:</label>
                        <textarea id="inputText" rows="5"></textarea>
                    </div>
                    
                    <button id="translateBtn">Traduci</button>
                    <button id="detectBtn">Rileva lingua</button>
                    
                    <div>
                        <h3>Testo tradotto:</h3>
                        <div id="translatedText"></div>
                    </div>
                    
                    <div id="detectedLanguages"></div>

        </div>
    );
}
export default ESAME12;