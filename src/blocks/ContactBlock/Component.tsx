'use client'
import React, { useState } from 'react'

type Props = {
  sectionHeading: string; sectionHeadingEmphasis: string; introText: string
  formHeading: string; formSubheading: string; noticeText: string
  contactDetails: {
    address?: string; addressExtra?: string; phone?: string; phoneHours?: string
    email?: string; emailExtra?: string; onlineInfo?: string; onlineExtra?: string
    sessionDuration?: string; sessionExtra?: string
  }
}

export const ContactBlockComponent: React.FC<Props> = ({
  sectionHeading, sectionHeadingEmphasis, introText,
  formHeading, formSubheading, noticeText, contactDetails,
}) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => setSubmitted(true)

  const s = { fontSize: '0.75rem' } as React.CSSProperties

  return (
    <section id="contact-main" aria-label="Contact form" style={{ background: '#080c14', padding: '6rem 5%' }}>
      <div className="contact-grid">
        <div className="contact-info" style={{ position: 'sticky', top: '7rem' }}>
          <h2 className="reveal" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2, color: '#f0e6d0', marginBottom: '0.8rem' }}>
            {sectionHeading.replace(sectionHeadingEmphasis, '')}
            <em style={{ fontStyle: 'italic', color: '#d4b07c' }}>{sectionHeadingEmphasis}</em>
          </h2>
          <p className="info-intro reveal reveal-delay-1">{introText}</p>

          <div className="info-items reveal reveal-delay-2">
            <InfoItem icon={LocationIcon} label="Siedziba" value={contactDetails.address} sub={contactDetails.addressExtra} />
            <InfoItem icon={PhoneIcon} label="Telefon" value={contactDetails.phone} sub={contactDetails.phoneHours} isLink />
            <InfoItem icon={EmailIcon} label="Email" value={contactDetails.email} sub={contactDetails.emailExtra} isEmail />
            <InfoItem icon={MonitorIcon} label="Sessje Onlajn" value={contactDetails.onlineInfo} sub={contactDetails.onlineExtra} />
            <InfoItem icon={ClockIcon} label="Długość Sessji" value={contactDetails.sessionDuration} sub={contactDetails.sessionExtra} />
          </div>

          <div className="availability-tag reveal reveal-delay-3">
            <span className="dot" /> Currently accepting new clients
          </div>
        </div>

        <div className="contact-form-wrap reveal reveal-delay-1">
          {!submitted ? (
            <div>
              <div className="form-heading">{formHeading}</div>
              <p className="form-sub">{formSubheading}</p>

              <div className="form-row">
                <FormGroup label="Imie" required><input type="text" placeholder="Jane" /></FormGroup>
                <FormGroup label="Nazwisko"><input type="text" placeholder="Smith" /></FormGroup>
              </div>
              <FormGroup label="Addres Email" required><input type="email" placeholder="jane@example.com" /></FormGroup>
              <FormGroup label="Numer Telefonu"><input type="tel" placeholder="+44 (0)7700 000000" /></FormGroup>

              <FormGroup label="Przyczyna kontaktu">
                <select>
                  <option value="" disabled>Select an area…</option>
                  {['Anxiety or Stress', 'Phobias or Fears', 'Sleep Problems', 'Self-Confidence', 'Habits (Smoking, Eating, etc.)', 'Trauma or PTSD', 'Something else', 'Not sure yet'].map(o => <option key={o}>{o}</option>)}
                </select>
              </FormGroup>

              <FormGroup label="Typ sessji">
                <div className="radio-group">
                  {['Personalnie (Poznań)', 'Online (Zoom / Teams)', 'Obojętnie'].map(o => (
                    <label key={o} className="radio-label"><input type="radio" name="format" defaultChecked={o === 'In-Person (London)'} /> {o}</label>
                  ))}
                </div>
              </FormGroup>

              <FormGroup label="Dodatkowe informacje (opcjonalne)">
                <textarea placeholder="Napisz coś o sobie, co muszę wiedzieć" />
              </FormGroup>

              <p className="form-notice">{noticeText}</p>
              <button className="btn-submit" onClick={handleSubmit}>Wyślij</button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#8aaf9e' }}>✦</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: '1.6rem', color: '#f0e6d0', marginBottom: '0.8rem' }}>Thank you — message received</h3>
              <p style={{ fontSize: '0.88rem', color: '#c8b89a', fontWeight: 300 }}>I&apos;ll be in touch within one working day to arrange your free consultation. In the meantime, if you have any questions feel free to call or email directly.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 6rem; align-items: start; }
        .info-intro { font-size: 0.9rem; font-weight: 300; color: #c8b89a; line-height: 1.8; margin-bottom: 2.5rem; }
        .info-items { display: flex; flex-direction: column; border: 1px solid rgba(184,151,90,0.1); }
        .availability-tag { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #8aaf9e; background: rgba(106,143,126,0.1); border: 1px solid rgba(106,143,126,0.2); padding: 0.35rem 0.8rem; border-radius: 2px; margin-top: 1.8rem; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: #8aaf9e; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .contact-form-wrap { background: #141b2a; border: 1px solid rgba(184,151,90,0.12); padding: 2.8rem; }
        .form-heading { font-family: var(--font-serif); font-weight: 300; font-size: 1.5rem; color: #f0e6d0; margin-bottom: 0.5rem; }
        .form-sub { font-size: 0.82rem; font-weight: 300; color: #4a5568; margin-bottom: 2.2rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        input, select, textarea { background: rgba(8,12,20,0.6); border: 1px solid rgba(184,151,90,0.18); color: #f0e6d0; font-family: var(--font-sans); font-size: 0.88rem; font-weight: 300; padding: 0.75rem 1rem; border-radius: 2px; width: 100%; transition: border-color 0.25s; outline: none; resize: vertical; }
        textarea { min-height: 130px; }
        input::placeholder, textarea::placeholder { color: #4a5568; }
        input:focus, select:focus, textarea:focus { border-color: rgba(184,151,90,0.5); background: rgba(8,12,20,0.8); }
        select { cursor: pointer; }
        select option { background: #141b2a; color: #f0e6d0; }
        .radio-group { display: flex; gap: 0.8rem; flex-wrap: wrap; }
        .radio-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; font-weight: 300; color: #c8b89a; cursor: pointer; padding: 0.5rem 1rem; border: 1px solid rgba(184,151,90,0.18); border-radius: 2px; transition: all 0.2s; }
        .radio-label:hover { border-color: rgba(184,151,90,0.4); color: #f0e6d0; }
        .form-notice { font-size: 0.75rem; color: #4a5568; line-height: 1.65; margin: 1.6rem 0 2rem; padding-top: 1.4rem; border-top: 1px solid rgba(184,151,90,0.08); }
        .btn-submit { display: block; width: 100%; padding: 1rem; background: #b8975a; color: #080c14; font-family: var(--font-sans); font-size: 0.82rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; border: none; border-radius: 2px; cursor: pointer; transition: background 0.25s, transform 0.2s; }
        .btn-submit:hover { background: #d4b07c; transform: translateY(-1px); }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 3.5rem; } .contact-info { position: static !important; } }
        @media (max-width: 640px) { .contact-form-wrap { padding: 1.8rem; } .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

function FormGroup({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.2rem' }}>
      <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c8b89a' }}>
        {label}{required && <span style={{ color: '#b8975a', marginLeft: '0.2rem' }}>*</span>}
      </label>
      {children}
    </div>
  )
}

function InfoItem({ icon, label, value, sub, isLink, isEmail }: {
  icon: React.ReactNode; label: string; value?: string; sub?: string; isLink?: boolean; isEmail?: boolean
}) {
  return (
    <div style={{ padding: '1.4rem 1.6rem', borderBottom: '1px solid rgba(184,151,90,0.08)', display: 'flex', gap: '1.2rem', alignItems: 'flex-start', transition: 'background 0.2s' }} className="info-item">
      <div style={{ flexShrink: 0, marginTop: '0.1rem' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4a5568', marginBottom: '0.3rem' }}>{label}</div>
        <div style={{ fontSize: '0.88rem', color: '#f0e6d0', fontWeight: 300 }}>
          {isLink ? <a href={`tel:${value}`} style={{ color: '#b8975a', textDecoration: 'none' }}>{value}</a> :
           isEmail ? <a href={`mailto:${value}`} style={{ color: '#b8975a', textDecoration: 'none' }}>{value}</a> :
           (value || '').split('\n').map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>)}
        </div>
        {sub && <div style={{ fontSize: '0.78rem', color: '#4a5568', marginTop: '0.2rem' }}>{sub}</div>}
      </div>
    </div>
  )
}

const LocationIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.4"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
const PhoneIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 3.07 2 2 0 0 1 5.13 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.49 5.49l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const EmailIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const MonitorIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.4"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
const ClockIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
