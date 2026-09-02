'use client';

import { useEffect, useState } from 'react';

const tickerItems = [
  'Commercial & General Litigation',
  'Labour & Employment Law',
  'Public, Administrative Law & Procurement',
  'Property, Conveyancing & Developments',
  'Trusts & Estates',
  'Family Law',
  'Social Justice & Human Rights',
  'Sports, Media & Entertainment',
  'Technology & Telecommunications',
];

function getPretoriaTime() {
  return new Intl.DateTimeFormat('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
}

export default function LiveTicker() {
  const [pretoriaTime, setPretoriaTime] = useState('--:--:--');

  useEffect(() => {
    const updateClock = () => setPretoriaTime(getPretoriaTime());
    updateClock();
    const intervalId = window.setInterval(updateClock, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="legal-ticker" aria-label="M&M Legal chambers bulletin">
      <div className="legal-ticker__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="legal-ticker__lead" aria-hidden="true">
          <span className="legal-ticker__live-dot" />
          <span className="legal-ticker__lead-label">
            <span>Chambers</span>
            <span>Live</span>
          </span>
          <span className="legal-ticker__time">{pretoriaTime} SAST</span>
        </div>

        <div className="legal-ticker__viewport" aria-hidden="true">
          <div className="legal-ticker__track">
            {tickerItems.map((item) => (
              <span key={item} className="legal-ticker__item">{item}</span>
            ))}
            {tickerItems.map((item) => (
              <span key={`duplicate-${item}`} className="legal-ticker__item">{item}</span>
            ))}
          </div>
        </div>

        <span className="sr-only">
          M&M Legal practice focus includes Commercial and General Litigation, Labour and Employment Law, Public, Administrative Law and Procurement, Property, Conveyancing and Developments, Trusts and Estates, Family Law, Social Justice and Human Rights, Sports, Media and Entertainment, and Technology and Telecommunications.
        </span>
      </div>
    </section>
  );
}
