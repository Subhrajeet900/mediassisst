"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const StoreBadge = ({ type }: { type: 'apple' | 'google' }) => {
  if (type === 'apple') {
    return (
      <a href="#" className="flex items-center gap-3 bg-black hover:bg-black/80 text-white px-5 py-2.5 rounded-2xl border border-white/20 hover:border-white/50 transition-all shadow-lg hover:scale-105">
        <svg viewBox="0 0 384 512" fill="currentColor" className="w-7 h-7">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-none mb-1 text-white/70">Download on the</div>
          <div className="text-lg font-semibold leading-none tracking-tight">App Store</div>
        </div>
      </a>
    );
  }
  return (
    <a href="#" className="flex items-center gap-3 bg-black hover:bg-black/80 text-white px-5 py-2.5 rounded-2xl border border-white/20 hover:border-white/50 transition-all shadow-lg hover:scale-105">
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-7 h-7">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none mb-1 text-white/70">GET IT ON</div>
        <div className="text-lg font-semibold leading-none tracking-tight">Google Play</div>
      </div>
    </a>
  );
};

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
    
    /* ── ClinicXpert screen ── */
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
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="section-tag">Ecosystem</div>
          <h2 className="text-4xl md:text-[56px] font-bold font-heading text-text mb-4 leading-none tracking-tight">
            Our Ecosystem <br />
            <em>Three Powerful Apps.</em>
          </h2>
          <p className="text-lg text-sub font-body max-w-2xl mt-4 font-light">One unified platform to connect doctors, patients, and pharmacies.</p>
        </div>

        <div className="flex flex-col gap-32">
          {/* Card 1: ClinicXpert */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
          >
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start gap-2 xl:gap-8">
              {/* Splash Phone */}
              <div className="phone-card-container group hidden lg:flex transform translate-y-12 scale-90 xl:scale-100 origin-right">
                <div className="phone">
                  <div className="frame">
                    <div className="side-btn vol1"></div>
                    <div className="side-btn vol2"></div>
                    <div className="side-btn pwr"></div>
                    <div className="screen bg-[#0b1e14] flex flex-col items-center justify-center">
                      <div className="dynamic-island"></div>
                      <div className="flex flex-col items-center justify-center h-full space-y-4">
                        <div className="w-20 h-20 rounded-3xl bg-[#00c896]/10 flex items-center justify-center mb-2 border border-[#00c896]/20 shadow-[0_0_30px_rgba(0,200,150,0.15)]">
                           <span className="text-5xl font-heading font-bold text-[#00c896]">C</span>
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-[#00c896] tracking-tight mt-4">ClinicXpert</h3>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-[#6ee6b4]/70">Doctors in Control</p>
                      </div>
                      <div className="home-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-card-container group scale-90 xl:scale-100 origin-left">
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
                      <div className="cx-logo">ClinicXpert</div>
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
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:pl-10">
              <h3 className="text-4xl md:text-5xl font-bold text-primary font-heading tracking-tight">ClinicXpert</h3>
              <p className="text-xl text-accent font-mono uppercase tracking-widest text-sm">Doctors in Control</p>
              <p className="text-lg text-sub font-light leading-relaxed max-w-lg">
                ClinicXpert empowers doctors with real-time patient oversight, deep clinical analytics, and AI-assisted diagnostics — putting complete control back in the hands of healthcare professionals. Reduce administrative overhead and focus on what matters most: patient care.
              </p>
              
              <ul className="text-base text-text space-y-3 my-6">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Real-time Patient Monitoring & Alerts</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Seamless EHR Management & Integration</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> <span>AI-Assisted Diagnostics & Insights</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Automated Prescription Generation</span></li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                <a href="https://clinicxpert.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-p text-center">
                  Explore ClinicXpert
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/5 w-full mt-6 max-w-md">
                <p className="text-[10px] text-muted uppercase tracking-widest font-mono mb-4">Available on</p>
                <div className="flex flex-row gap-4">
                  <StoreBadge type="apple" />
                  <StoreBadge type="google" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: HealthBuddy */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24"
          >
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end gap-2 xl:gap-8">
              <div className="phone-card-container group scale-90 xl:scale-100 origin-right">
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
              </div>
              {/* Splash Phone */}
              <div className="phone-card-container group hidden lg:flex transform translate-y-12 scale-90 xl:scale-100 origin-left">
                <div className="phone">
                  <div className="frame">
                    <div className="side-btn vol1"></div>
                    <div className="side-btn vol2"></div>
                    <div className="side-btn pwr"></div>
                    <div className="screen bg-[#00a86b] flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/20 to-transparent"></div>
                      <div className="dynamic-island" style={{background: '#000'}}></div>
                      <div className="flex flex-col items-center justify-center h-full space-y-4 relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-2 border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                           <span className="text-5xl font-heading font-bold text-white">H</span>
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white tracking-tight mt-4">HealthBuddy</h3>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/80">Personal Companion</p>
                      </div>
                      <div className="home-bar" style={{ background: 'rgba(255,255,255,0.4)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:pr-10">
              <h3 className="text-4xl md:text-5xl font-bold text-[#00a86b] font-heading tracking-tight">HealthBuddy</h3>
              <p className="text-xl text-[#00a86b] font-mono uppercase tracking-widest text-sm opacity-80">Your Personal Companion</p>
              <p className="text-lg text-sub font-light leading-relaxed max-w-lg">
                HealthBuddy is the ultimate patient companion. Book appointments, manage prescriptions, track vitals, and stay on top of your health journey—all from one highly secure, easy-to-use application designed for everyone.
              </p>
              
              <ul className="text-base text-text space-y-3 my-6">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00a86b] w-5 h-5" /> <span>Instant Doctor Appointments</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00a86b] w-5 h-5" /> <span>Centralized Health Records</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00a86b] w-5 h-5" /> <span>Automated Medicine Reminders</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00a86b] w-5 h-5" /> <span>Vitals & Wellness Tracking</span></li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                <a href="https://healthbuddy-md.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-p text-center" style={{ background: '#00a86b', color: '#0a0a0b', borderColor: '#00a86b' }}>
                  Explore HealthBuddy
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/5 w-full mt-6 max-w-md">
                <p className="text-[10px] text-muted uppercase tracking-widest font-mono mb-4">Available on</p>
                <div className="flex flex-row gap-4">
                  <StoreBadge type="apple" />
                  <StoreBadge type="google" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: PharmaMate */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
          >
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start gap-2 xl:gap-8">
              {/* Splash Phone */}
              <div className="phone-card-container group hidden lg:flex transform translate-y-12 scale-90 xl:scale-100 origin-right">
                <div className="phone">
                  <div className="frame">
                    <div className="side-btn vol1"></div>
                    <div className="side-btn vol2"></div>
                    <div className="side-btn pwr"></div>
                    <div className="screen bg-[#1a7a4a] flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#20965a]/20 to-transparent"></div>
                      <div className="dynamic-island" style={{background: '#000'}}></div>
                      <div className="flex flex-col items-center justify-center h-full space-y-4 relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-2 border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                           <span className="text-5xl font-heading font-bold text-white">P</span>
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white tracking-tight mt-4">PharmaMate</h3>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/80">Pharmacy Delivered</p>
                      </div>
                      <div className="home-bar" style={{ background: 'rgba(255,255,255,0.4)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone-card-container group scale-90 xl:scale-100 origin-left">
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
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6 lg:pl-10">
              <h3 className="text-4xl md:text-5xl font-bold text-[#1a7a4a] font-heading tracking-tight">PharmaMate</h3>
              <p className="text-xl text-[#1a7a4a] font-mono uppercase tracking-widest text-sm opacity-80">Pharmacy at Your Doorstep</p>
              <p className="text-lg text-sub font-light leading-relaxed max-w-lg">
                PharmaMate connects local pharmacies directly to patients, enabling fast, reliable delivery of prescribed medicines right to the doorstep. Manage inventory, process e-prescriptions, and expand your pharmacy's reach seamlessly.
              </p>
              
              <ul className="text-base text-text space-y-3 my-6">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1a7a4a] w-5 h-5" /> <span>Express Prescription Delivery</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1a7a4a] w-5 h-5" /> <span>Direct E-Prescription Processing</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1a7a4a] w-5 h-5" /> <span>Real-time Inventory Management</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-[#1a7a4a] w-5 h-5" /> <span>Expanded Patient Network</span></li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                <a href="https://pharmamate-md.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-p text-center" style={{ background: '#1a7a4a', color: '#fff', borderColor: '#1a7a4a' }}>
                  Explore PharmaMate
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/5 w-full mt-6 max-w-md">
                <p className="text-[10px] text-muted uppercase tracking-widest font-mono mb-4">Available on</p>
                <div className="flex flex-row gap-4">
                  <StoreBadge type="apple" />
                  <StoreBadge type="google" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
