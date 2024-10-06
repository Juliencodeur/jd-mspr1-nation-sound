// Importer les fonctions depuis rgpd.js
const { acceptCookies, refuseCookies, manageCookies, saveCookieSettings } = require('./rgpd');

beforeEach(() => {
    document.body.innerHTML = `
        <div id="cookieConsent" style="display:block;">Cookie consent banner</div>
        <div id="cookieManagementModal" class="modal">Modal Content</div>
        <button id="performanceCookies">Activé</button>
        <button id="advertisingCookies">Désactivé</button>
    `;
});

describe('acceptCookies', () => {
    test('should hide the cookie consent banner', () => {
        acceptCookies();
        const consent = document.getElementById('cookieConsent');
        setTimeout(() => {
            expect(consent.style.display).toBe('none');
        }, 500);
    });
});

describe('refuseCookies', () => {
    test('should hide the cookie consent banner', () => {
        refuseCookies();
        const consent = document.getElementById('cookieConsent');
        setTimeout(() => {
            expect(consent.style.display).toBe('none');
        }, 500);
    });
});

// Ajoutez d'autres tests pour `manageCookies` et `saveCookieSettings` si nécessaire
