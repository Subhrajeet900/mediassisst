"use client";

import { motion } from "framer-motion";

export default function AppShowcase() {

  const customStyles = `
    .phones-wrap { display: flex; gap: 40px; justify-content: center; align-items: flex-start; padding: 32px 16px 24px; flex-wrap: wrap; }
    .phone-card-container { 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      max-width: 320px; 
      transition: all 0.3s ease; 
      will-change: transform;
      transform: translateZ(0);
    }
    .phone-card-container:hover { transform: translateY(-10px); }
    .phone { 
      width: 220px; 
      flex-shrink: 0; 
      transition: all 0.4s ease; 
      margin-bottom: 24px; 
      will-change: transform, box-shadow;
    }
    .phone-card-container:hover .phone { 
      box-shadow: 0 20px 40px rgba(0, 200, 150, 0.25);
      border-radius: 40px;
    }
    .frame { width: 220px; height: 460px; background: #000; border-radius: 40px; border: 2px solid #333; position: relative; overflow: hidden; box-shadow: inset 0 0 0 1px #555; }
    .dynamic-island { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 80px; height: 22px; background: #000; border-radius: 12px; z-index: 10; }
    .screen { position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 38px; overflow: hidden; }
    .side-btn { position: absolute; background: #222; border-radius: 2px; }
    .vol1 { left: -3px; top: 90px; width: 3px; height: 28px; }
    .vol2 { left: -3px; top: 126px; width: 3px; height: 28px; }
    .pwr { right: -3px; top: 108px; width: 3px; height: 44px; }
    .home-bar { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); width: 80px; height: 4px; background: rgba(255,255,255,0.25); border-radius: 3px; z-index: 10; }
    
    /* ── ClinXpert screen ── */
    .cx-screen{background:#0b1e14;width:100%;height:100%;font-family:system-ui,sans-serif;position:relative;}
    .cx-status{display:flex;justify-content:space-between;align-items:center;padding:52px 16px 0;font-size:9px;color:#aaa;}
    .cx-header{padding:8px 16px 10px;display:flex;justify-content:space-between;align-items:center;}
    .cx-logo{font-size:14px;font-weight:700;color:#00c896;}
    .cx-avatar{width:26px;height:26px;border-radius:13px;background:#1a4a32;display:flex;align-items:center;justify-content:center;font-size:10px;color:#00c896;font-weight:700;}
    .cx-greeting{padding:0 16px 10px;font-size:11px;color:#6ee6b4;}
    .cx-greeting strong{display:block;font-size:15px;color:#fff;font-weight:600;}
    .cx-card{margin:0 12px 8px;background:#122b1c;border-radius:12px;padding:10px 12px;}
    .cx-card-title{font-size:9px;color:#6ee6b4;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;}
    .cx-patient-row{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
    .cx-dot{width:8px;height:8px;border-radius:4px;background:#00c896;}
    .cx-dot.red{background:#ff4d4d;}
    .cx-pt-name{font-size:12px;font-weight:600;color:#fff;flex:1;}
    .cx-pt-badge{font-size:8px;padding:2px 6px;border-radius:8px;background:#1a4a32;color:#00c896;}
    .cx-stats-row{display:flex;gap:6px;margin:0 12px 8px;}
    .cx-stat{flex:1;background:#122b1c;border-radius:10px;padding:8px;text-align:center;}
    .cx-stat-n{font-size:16px;font-weight:700;color:#00c896;}
    .cx-stat-l{font-size:8px;color:#6ee6b4;margin-top:1px;}
    .cx-chart-wrap{margin:0 12px 0;background:#122b1c;border-radius:10px;padding:8px 10px;}
    .cx-chart-label{font-size:8px;color:#6ee6b4;margin-bottom:5px;}
    .cx-bars{display:flex;align-items:flex-end;gap:4px;height:40px;}
    .cx-bar{flex:1;border-radius:2px 2px 0 0;background:#00c896;}
    .cx-nav{position:absolute;bottom:0;left:0;right:0;height:60px;background:#0d2318;display:flex;justify-content:space-around;align-items:center;padding-bottom:12px;padding-top:4px;}
    .cx-nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;}
    .cx-nav-icon{width:18px;height:18px;border-radius:5px;}
    .cx-nav-dot{width:4px;height:4px;border-radius:2px;background:#00c896;}
    .cx-nav-lbl{font-size:9px;color:#6ee6b4;}

    /* ── HealthBuddy screen ── */
    .hb-screen{background:#f4faf7;width:100%;height:100%;font-family:system-ui,sans-serif;position:relative;}
    .hb-status{display:flex;justify-content:space-between;padding:52px 16px 0;font-size:9px;color:#555;}
    .hb-header{padding:8px 16px 8px;display:flex;justify-content:space-between;align-items:center;}
    .hb-logo{font-size:14px;font-weight:700;color:#00a86b;}
    .hb-bell{width:22px;height:22px;border-radius:11px;background:#e0f5eb;display:flex;align-items:center;justify-content:center;font-size:11px;}
    .hb-banner{margin:0 12px 10px;background:#00a86b;border-radius:14px;padding:12px 14px;}
    .hb-banner-top{font-size:9px;color:#c8ffe5;margin-bottom:2px;}
    .hb-banner-name{font-size:15px;font-weight:700;color:#fff;}
    .hb-banner-sub{font-size:9px;color:#c8ffe5;margin-top:3px;}
    .hb-section-title{font-size:11px;font-weight:600;color:#333;padding:0 14px 6px;}
    .hb-appt-card{margin:0 12px 8px;background:#fff;border-radius:12px;padding:10px 12px;border:1px solid #d4f0e2;}
    .hb-appt-top{display:flex;align-items:center;gap:8px;margin-bottom:6px;}
    .hb-dr-avatar{width:28px;height:28px;border-radius:14px;background:#e0f5eb;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#00a86b;}
    .hb-dr-name{font-size:12px;font-weight:600;color:#111;}
    .hb-dr-spec{font-size:9px;color:#777;}
    .hb-appt-time{font-size:10px;color:#00a86b;font-weight:600;}
    .hb-vitals-row{display:flex;gap:6px;margin:0 12px 8px;}
    .hb-vital{flex:1;background:#fff;border-radius:10px;padding:10px 4px;border:1px solid #d4f0e2;text-align:center;}
    .hb-vital-n{font-size:16px;font-weight:700;color:#00a86b;}
    .hb-vital-l{font-size:8px;color:#888;margin-top:2px;}
    .hb-rx-card{margin:0 12px 0;background:#fff;border-radius:12px;padding:10px 12px;border:1px solid #d4f0e2;}
    .hb-rx-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;}
    .hb-rx-name{font-size:11px;color:#333;font-weight:500;}
    .hb-rx-time{font-size:10px;color:#00a86b;font-weight:600;}
    .hb-nav{position:absolute;bottom:0;left:0;right:0;height:60px;background:#fff;border-top:1px solid #d4f0e2;display:flex;justify-content:space-around;align-items:center;padding-bottom:12px;padding-top:4px;}
    .hb-nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;}
    .hb-nav-lbl{font-size:9px;color:#999;}
    .hb-nav-lbl.active{color:#00a86b;}

    /* ── PharmaMate screen ── */
    .pm-screen{background:#fff;width:100%;height:100%;font-family:system-ui,sans-serif;position:relative;}
    .pm-status{display:flex;justify-content:space-between;padding:52px 16px 0;font-size:9px;color:#555;}
    .pm-header{padding:8px 16px 8px;display:flex;justify-content:space-between;align-items:center;}
    .pm-logo{font-size:14px;font-weight:700;color:#1a7a4a;}
    .pm-cart{width:24px;height:24px;border-radius:12px;background:#e8f7ef;display:flex;align-items:center;justify-content:center;font-size:12px;position:relative;}
    .pm-badge{position:absolute;top:-3px;right:-3px;width:12px;height:12px;border-radius:6px;background:#e04b4b;font-size:7px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;}
    .pm-search{margin:0 12px 10px;background:#f2f2f5;border-radius:10px;padding:10px 12px;font-size:11px;color:#aaa;display:flex;align-items:center;gap:6px;}
    .pm-search-icon{width:10px;height:10px;border-radius:5px;border:1.5px solid #aaa;}
    .pm-order-card{margin:0 12px 10px;background:#e8f7ef;border-radius:14px;padding:12px;}
    .pm-order-label{font-size:9px;color:#1a7a4a;font-weight:600;text-transform:uppercase;letter-spacing:.3px;margin-bottom:4px;}
    .pm-order-id{font-size:13px;font-weight:700;color:#111;margin-bottom:6px;}
    .pm-progress-bar{height:6px;background:#c8ead8;border-radius:3px;margin-bottom:6px;overflow:hidden;}
    .pm-progress-fill{height:100%;width:68%;background:#1a7a4a;border-radius:3px;}
    .pm-eta{font-size:10px;color:#1a7a4a;font-weight:500;}
    .pm-list-title{font-size:11px;font-weight:600;color:#333;padding:0 14px 6px;}
    .pm-med-row{display:flex;justify-content:space-between;align-items:center;margin:0 12px 6px;background:#f9f9f9;border-radius:10px;padding:8px 10px;}
    .pm-med-icon{width:22px;height:22px;border-radius:6px;background:#ddf2e8;display:flex;align-items:center;justify-content:center;font-size:11px;margin-right:8px;}
    .pm-med-name{font-size:11px;color:#222;flex:1;font-weight:500;}
    .pm-med-price{font-size:11px;font-weight:600;color:#1a7a4a;}
    .pm-add-btn{width:20px;height:20px;border-radius:10px;background:#1a7a4a;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;line-height:1;margin-left:8px;}
    .pm-nav{position:absolute;bottom:0;left:0;right:0;height:60px;background:#fff;border-top:1px solid #e2e2e2;display:flex;justify-content:space-around;align-items:center;padding-bottom:12px;padding-top:4px;}
    .pm-nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;}
    .pm-nav-lbl{font-size:9px;color:#bbb;}
    .pm-nav-lbl.active{color:#1a7a4a;}
  `;

  return (
    <section id="apps" className="py-24 bg-surface relative">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Our Ecosystem Apps</h2>
          <p className="text-xl text-muted font-body">Three powerful apps. One unified platform.</p>
        </div>

        <div className="phones-wrap">
          {/* Card 1: ClinXpert */}
          <div className="phone-card-container group">
            <div className="phone">
              <div className="frame">
                <div className="side-btn vol1"></div>
                <div className="side-btn vol2"></div>
                <div className="side-btn pwr"></div>
                <div className="screen">
                  <div className="cx-screen">
                    <div className="dynamic-island"></div>
                    <div className="cx-status"><span>9:41</span><span>●●●</span></div>
                    <div className="cx-header">
                      <div className="cx-logo">ClinXpert</div>
                      <div className="cx-avatar">DK</div>
                    </div>
                    <div className="cx-greeting">Good morning,<strong>Dr. Kapoor</strong></div>
                    <div className="cx-card">
                      <div className="cx-card-title">Active Patients</div>
                      <div className="cx-patient-row"><div className="cx-dot"></div><span className="cx-pt-name">Rohit Sharma</span><span className="cx-pt-badge">Stable</span></div>
                      <div className="cx-patient-row"><div className="cx-dot red"></div><span className="cx-pt-name">Meena Joshi</span><span className="cx-pt-badge" style={{ background: '#3a1a1a', color: '#ff6b6b' }}>Review</span></div>
                      <div className="cx-patient-row"><div className="cx-dot"></div><span className="cx-pt-name">Arjun Singh</span><span className="cx-pt-badge">Stable</span></div>
                    </div>
                    <div className="cx-stats-row">
                      <div className="cx-stat"><div className="cx-stat-n">24</div><div className="cx-stat-l">Patients</div></div>
                      <div className="cx-stat"><div className="cx-stat-n">3</div><div className="cx-stat-l">Alerts</div></div>
                      <div className="cx-stat"><div className="cx-stat-n">11</div><div className="cx-stat-l">Appts</div></div>
                    </div>
                    <div className="cx-chart-wrap">
                      <div className="cx-chart-label">Weekly Consultations</div>
                      <div className="cx-bars">
                        <div className="cx-bar" style={{ height: '50%', opacity: 0.5 }}></div>
                        <div className="cx-bar" style={{ height: '70%', opacity: 0.6 }}></div>
                        <div className="cx-bar" style={{ height: '55%', opacity: 0.55 }}></div>
                        <div className="cx-bar" style={{ height: '90%' }}></div>
                        <div className="cx-bar" style={{ height: '75%', opacity: 0.7 }}></div>
                        <div className="cx-bar" style={{ height: '60%', opacity: 0.6 }}></div>
                        <div className="cx-bar" style={{ height: '80%', opacity: 0.8 }}></div>
                      </div>
                    </div>
                    <div className="cx-nav">
                      <div className="cx-nav-item"><div style={{ width: 18, height: 18, borderRadius: 5, background: '#00c896', opacity: .9 }}></div><div className="cx-nav-dot"></div><div className="cx-nav-lbl">Home</div></div>
                      <div className="cx-nav-item"><div style={{ width: 18, height: 18, borderRadius: 9, background: '#1a4a32' }}></div><div className="cx-nav-lbl" style={{ color: '#4a7a60' }}>Patients</div></div>
                      <div className="cx-nav-item"><div style={{ width: 18, height: 18, borderRadius: 5, background: '#1a4a32' }}></div><div className="cx-nav-lbl" style={{ color: '#4a7a60' }}>EHR</div></div>
                      <div className="cx-nav-item"><div style={{ width: 18, height: 18, borderRadius: 9, background: '#1a4a32' }}></div><div className="cx-nav-lbl" style={{ color: '#4a7a60' }}>Profile</div></div>
                    </div>
                    <div className="home-bar"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Context/Description Card underneath */}
            <div className="bg-dark/80 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl w-full text-center transition-all">
              <h3 className="text-2xl font-bold text-primary mb-1">ClinXpert</h3>
              <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wider">Doctors in Control</p>
              <ul className="text-sm text-foreground space-y-2 mb-4 text-left grid grid-cols-1 gap-1">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Patient Monitoring</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> EHR Management</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Smart Diagnostics</li>
              </ul>
              <p className="text-xs text-muted mb-6 text-left leading-relaxed">
                ClinXpert empowers doctors with real-time patient oversight, deep clinical analytics, and AI-assisted diagnostics — putting complete control back in the hands of healthcare professionals.
              </p>
              <a href="https://clinicxpert.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary/10 hover:bg-primary border border-primary text-primary hover:text-dark px-6 py-2 rounded-full text-sm font-bold transition-colors">
                Read More →
              </a>
            </div>
          </div>

          {/* Card 2: HealthBuddy */}
          <div className="phone-card-container group">
            <div className="phone">
              <div className="frame">
                <div className="side-btn vol1"></div>
                <div className="side-btn vol2"></div>
                <div className="side-btn pwr"></div>
                <div className="screen">
                  <div className="hb-screen">
                    <div className="dynamic-island" style={{ background: '#000' }}></div>
                    <div className="hb-status"><span>9:41</span><span>●●●</span></div>
                    <div className="hb-header">
                      <div className="hb-logo">HealthBuddy</div>
                      <div className="hb-bell">🔔</div>
                    </div>
                    <div className="hb-banner">
                      <div className="hb-banner-top">Good morning 👋</div>
                      <div className="hb-banner-name">Aarav Mehta</div>
                      <div className="hb-banner-sub">1 appointment today · 2 medicines due</div>
                    </div>
                    <div className="hb-section-title">Today's Appointment</div>
                    <div className="hb-appt-card">
                      <div className="hb-appt-top">
                        <div className="hb-dr-avatar">PM</div>
                        <div><div className="hb-dr-name">Dr. Priya Menon</div><div className="hb-dr-spec">Cardiology · Apollo Clinic</div></div>
                      </div>
                      <div className="hb-appt-time">Today · 11:30 AM</div>
                    </div>
                    <div className="hb-section-title">Vitals</div>
                    <div className="hb-vitals-row">
                      <div className="hb-vital"><div className="hb-vital-n">72</div><div className="hb-vital-l">Heart Rate</div></div>
                      <div className="hb-vital"><div className="hb-vital-n">98.4</div><div className="hb-vital-l">Temp °F</div></div>
                      <div className="hb-vital"><div className="hb-vital-n">6.4k</div><div className="hb-vital-l">Steps</div></div>
                    </div>
                    <div className="hb-section-title" style={{ marginTop: 8 }}>Medicines</div>
                    <div className="hb-rx-card">
                      <div className="hb-rx-row"><span className="hb-rx-name">Metformin 500mg</span><span className="hb-rx-time">8:00 AM ✓</span></div>
                      <div className="hb-rx-row"><span className="hb-rx-name">Atorvastatin 10mg</span><span className="hb-rx-time">2:00 PM</span></div>
                    </div>
                    <div className="hb-nav">
                      <div className="hb-nav-item"><div style={{ width: 18, height: 18, borderRadius: 5, background: '#e0f5eb' }}></div><div className="hb-nav-lbl active">Home</div></div>
                      <div className="hb-nav-item"><div style={{ width: 18, height: 18, borderRadius: 9, background: '#f0f0f0' }}></div><div className="hb-nav-lbl">Appts</div></div>
                      <div className="hb-nav-item"><div style={{ width: 18, height: 18, borderRadius: 5, background: '#f0f0f0' }}></div><div className="hb-nav-lbl">Records</div></div>
                      <div className="hb-nav-item"><div style={{ width: 18, height: 18, borderRadius: 9, background: '#f0f0f0' }}></div><div className="hb-nav-lbl">Profile</div></div>
                    </div>
                    <div className="home-bar" style={{ background: 'rgba(0,0,0,0.15)' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark/80 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl w-full text-center transition-all">
              <h3 className="text-2xl font-bold text-[#00a86b] mb-1">HealthBuddy</h3>
              <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wider">Your Personal Companion</p>
              <ul className="text-sm text-foreground space-y-2 mb-4 text-left grid grid-cols-1 gap-1">
                <li className="flex items-center gap-2"><span className="text-[#00a86b]">✓</span> Doctor Appointments</li>
                <li className="flex items-center gap-2"><span className="text-[#00a86b]">✓</span> Health Records</li>
                <li className="flex items-center gap-2"><span className="text-[#00a86b]">✓</span> Wellness Tracking</li>
              </ul>
              <p className="text-xs text-muted mb-6 text-left leading-relaxed">
                HealthBuddy is the patient's ultimate companion — book appointments, manage prescriptions, track vitals, and stay on top of your health journey, all from one place.
              </p>
              <a href="https://healthbuddy-md.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00a86b]/10 hover:bg-[#00a86b] border border-[#00a86b] text-[#00a86b] hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
                Read More →
              </a>
            </div>
          </div>

          {/* Card 3: PharmaMate */}
          <div className="phone-card-container group">
            <div className="phone">
              <div className="frame">
                <div className="side-btn vol1"></div>
                <div className="side-btn vol2"></div>
                <div className="side-btn pwr"></div>
                <div className="screen">
                  <div className="pm-screen">
                    <div className="dynamic-island" style={{ background: '#000' }}></div>
                    <div className="pm-status"><span>9:41</span><span>●●●</span></div>
                    <div className="pm-header">
                      <div className="pm-logo">PharmaMate</div>
                      <div className="pm-cart">🛒<div className="pm-badge">3</div></div>
                    </div>
                    <div className="pm-search"><div className="pm-search-icon"></div>Search medicines...</div>
                    <div className="pm-order-card">
                      <div className="pm-order-label">Active Order</div>
                      <div className="pm-order-id">Order #PH-2048</div>
                      <div className="pm-progress-bar"><div className="pm-progress-fill"></div></div>
                      <div className="pm-eta">Out for delivery · ETA 35 min</div>
                    </div>
                    <div className="pm-list-title" style={{ marginTop: 8 }}>Your Medicines</div>
                    <div className="pm-med-row"><div className="pm-med-icon">💊</div><span className="pm-med-name">Metformin 500mg</span><span className="pm-med-price">₹45</span><div className="pm-add-btn">+</div></div>
                    <div className="pm-med-row"><div className="pm-med-icon">💊</div><span className="pm-med-name">Atorvastatin 10mg</span><span className="pm-med-price">₹62</span><div className="pm-add-btn">+</div></div>
                    <div className="pm-med-row"><div className="pm-med-icon">💊</div><span className="pm-med-name">Paracetamol 650mg</span><span className="pm-med-price">₹18</span><div className="pm-add-btn">+</div></div>
                    <div className="pm-nav">
                      <div className="pm-nav-item"><div style={{ width: 18, height: 18, borderRadius: 5, background: '#e8f7ef' }}></div><div className="pm-nav-lbl active">Home</div></div>
                      <div className="pm-nav-item"><div style={{ width: 18, height: 18, borderRadius: 5, background: '#f0f0f0' }}></div><div className="pm-nav-lbl">Orders</div></div>
                      <div className="pm-nav-item"><div style={{ width: 18, height: 18, borderRadius: 9, background: '#f0f0f0' }}></div><div className="pm-nav-lbl">Upload Rx</div></div>
                      <div className="pm-nav-item"><div style={{ width: 18, height: 18, borderRadius: 9, background: '#f0f0f0' }}></div><div className="pm-nav-lbl">Profile</div></div>
                    </div>
                    <div className="home-bar" style={{ background: 'rgba(0,0,0,0.15)' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark/80 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl w-full text-center transition-all">
              <h3 className="text-2xl font-bold text-[#1a7a4a] mb-1">PharmaMate</h3>
              <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wider">Pharmacy at Your Doorstep</p>
              <ul className="text-sm text-foreground space-y-2 mb-4 text-left grid grid-cols-1 gap-1">
                <li className="flex items-center gap-2"><span className="text-[#1a7a4a]">✓</span> Prescription Delivery</li>
                <li className="flex items-center gap-2"><span className="text-[#1a7a4a]">✓</span> Medicine Tracker</li>
                <li className="flex items-center gap-2"><span className="text-[#1a7a4a]">✓</span> Pharmacy Network</li>
              </ul>
              <p className="text-xs text-muted mb-6 text-left leading-relaxed">
                PharmaMate connects pharmacies to patients, enabling fast, reliable delivery of prescribed medicines directly to the patient's home — zero friction, full care.
              </p>
              <a href="https://pharmamate-md.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1a7a4a]/10 hover:bg-[#1a7a4a] border border-[#1a7a4a] text-[#1a7a4a] hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
