# Jana Neufeld · Fachfußpflege — Website

Eine fertige One-Page-Website (Onepager) für die Fachfußpflege Jana Neufeld in Zülpich.

## Aufbau
```
website/
├── index.html      ← die Seite
├── styles.css      ← Design (Farben, Schriften, Layout)
├── script.js       ← Menü, Animationen, Termin-Formular
└── assets/         ← Bilder aus dem Branding
    ├── visitenkarte.png
    ├── jana-portrait.png
    └── neueroeffnung.png
```

## Ansehen
Doppelklick auf `index.html` – die Seite öffnet sich im Browser. Es ist keine Installation nötig.

## Termine buchen
Das Formular im Abschnitt **„Termin buchen“** speichert keine Daten, sondern
bereitet die Anfrage als Nachricht vor:
- **Per WhatsApp** → öffnet WhatsApp mit fertiger Nachricht an `0177 2586443`
- **Per E-Mail** → öffnet die E-Mail-App an `neufeld.jana@gmx.de`

Jana bestätigt den Termin dann persönlich. Das ist die einfachste Lösung ohne
laufende Kosten oder Buchungssoftware.

> Möchtest du echte Online-Buchung mit Kalender (z. B. mit freien Zeitfenstern,
> automatischer Bestätigung)? Dann lässt sich ein Dienst wie **Calendly**,
> **Treatwell** oder **Shore** einbinden – sag einfach Bescheid.

## Online stellen (kostenlos)
Empfohlen: per Drag & Drop des `website`-Ordners auf:
- **Netlify Drop** → https://app.netlify.com/drop
- oder **Cloudflare Pages** / **GitHub Pages**

Danach ggf. eine eigene Domain (z. B. `jana-neufeld-fusspflege.de`) verbinden.

## Anpassen
- **Texte/Telefon/Adresse:** in `index.html`
- **Farben/Schriften:** ganz oben in `styles.css` unter `:root`
- **WhatsApp-Nummer / E-Mail:** oben in `script.js` (`PHONE_WHATSAPP`, `EMAIL`)
