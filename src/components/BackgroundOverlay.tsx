import * as React from "react";

const BackgroundOverlay = React.memo(function BackgroundOverlay() {
  return (
    <>
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none gpu-accelerate will-change-transform" 
      >
        {/* Background Gradients */}
        <div 
          className="absolute inset-0"
          style={{
            background: "#050e0a",
            backgroundImage: "linear-gradient(rgba(0,200,140,.065) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,140,.065) 1px, transparent 1px)",
            backgroundSize: "52px 52px"
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[460px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,200,130,.14) 0%, transparent 68%)"
          }}
        />
        
        {/* Orbs */}
        <div className="absolute rounded-full pointer-events-none w-[380px] h-[380px] -top-[120px] -left-[100px]" style={{background: "radial-gradient(circle, rgba(0,220,140,.11) 0%, transparent 68%)"}} />
        <div className="absolute rounded-full pointer-events-none w-[300px] h-[300px] -bottom-[80px] -right-[60px]" style={{background: "radial-gradient(circle, rgba(0,180,120,.13) 0%, transparent 68%)"}} />
        <div className="absolute rounded-full pointer-events-none w-[200px] h-[200px] top-[60px] right-[100px]" style={{background: "radial-gradient(circle, rgba(100,255,180,.07) 0%, transparent 70%)"}} />
        <div className="absolute rounded-full pointer-events-none w-[160px] h-[160px] bottom-[80px] left-[120px]" style={{background: "radial-gradient(circle, rgba(0,210,130,.07) 0%, transparent 70%)"}} />
        
        {/* Corners */}
        <div className="absolute w-[44px] h-[44px] pointer-events-none top-[18px] left-[18px] border-t-[1.5px] border-l-[1.5px] border-[rgba(0,200,130,.28)]" />
        <div className="absolute w-[44px] h-[44px] pointer-events-none top-[18px] right-[18px] border-t-[1.5px] border-r-[1.5px] border-[rgba(0,200,130,.28)]" />
        <div className="absolute w-[44px] h-[44px] pointer-events-none bottom-[18px] left-[18px] border-b-[1.5px] border-l-[1.5px] border-[rgba(0,200,130,.28)]" />
        <div className="absolute w-[44px] h-[44px] pointer-events-none bottom-[18px] right-[18px] border-b-[1.5px] border-r-[1.5px] border-[rgba(0,200,130,.28)]" />

        {/* SVG part */}
        <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:1, shapeRendering:'crispEdges'}} viewBox="0 0 900 580" preserveAspectRatio="xMidYMid slice">
            <line x1="42" y1="60" x2="42" y2="520" stroke="#00c88c" strokeWidth=".6" opacity=".09" strokeDasharray="5 8"/>
            <line x1="858" y1="60" x2="858" y2="520" stroke="#00c88c" strokeWidth=".6" opacity=".09" strokeDasharray="5 8"/>
            <line x1="200" y1="0" x2="200" y2="580" stroke="#00c88c" strokeWidth=".4" opacity=".04" strokeDasharray="3 10"/>
            <line x1="700" y1="0" x2="700" y2="580" stroke="#00c88c" strokeWidth=".4" opacity=".04" strokeDasharray="3 10"/>

            <line x1="0" y1="140" x2="900" y2="140" stroke="#00c88c" strokeWidth=".4" opacity=".05" strokeDasharray="4 9"/>
            <line x1="0" y1="440" x2="900" y2="440" stroke="#00c88c" strokeWidth=".4" opacity=".05" strokeDasharray="4 9"/>

            <circle cx="80" cy="95" r="3" fill="#00c88c" opacity=".22"/>
            <circle cx="80" cy="95" r="7" fill="none" stroke="#00c88c" strokeWidth=".6" opacity=".14"/>
            <circle cx="80" cy="95" r="12" fill="none" stroke="#00c88c" strokeWidth=".4" opacity=".07"/>
            <line x1="80" y1="95" x2="160" y2="95" stroke="#00c88c" strokeWidth=".5" opacity=".1"/>
            <line x1="160" y1="95" x2="160" y2="42" stroke="#00c88c" strokeWidth=".5" opacity=".1"/>
            <circle cx="160" cy="42" r="2.5" fill="#00c88c" opacity=".18"/>
            <line x1="80" y1="95" x2="80" y2="160" stroke="#00c88c" strokeWidth=".5" opacity=".08"/>
            <circle cx="80" cy="160" r="2" fill="#00c88c" opacity=".14"/>

            <circle cx="820" cy="110" r="3" fill="#00c88c" opacity=".22"/>
            <circle cx="820" cy="110" r="7" fill="none" stroke="#00c88c" strokeWidth=".6" opacity=".14"/>
            <circle cx="820" cy="110" r="12" fill="none" stroke="#00c88c" strokeWidth=".4" opacity=".07"/>
            <line x1="820" y1="110" x2="740" y2="110" stroke="#00c88c" strokeWidth=".5" opacity=".1"/>
            <line x1="740" y1="110" x2="740" y2="42" stroke="#00c88c" strokeWidth=".5" opacity=".1"/>
            <circle cx="740" cy="42" r="2.5" fill="#00c88c" opacity=".18"/>
            <line x1="820" y1="110" x2="820" y2="180" stroke="#00c88c" strokeWidth=".5" opacity=".08"/>
            <circle cx="820" cy="180" r="2" fill="#00c88c" opacity=".14"/>

            <circle cx="110" cy="480" r="3" fill="#00c88c" opacity=".18"/>
            <circle cx="110" cy="480" r="7" fill="none" stroke="#00c88c" strokeWidth=".6" opacity=".11"/>
            <line x1="110" y1="480" x2="200" y2="480" stroke="#00c88c" strokeWidth=".5" opacity=".09"/>
            <line x1="200" y1="480" x2="200" y2="540" stroke="#00c88c" strokeWidth=".5" opacity=".07"/>
            <circle cx="200" cy="540" r="2" fill="#00c88c" opacity=".12"/>

            <circle cx="790" cy="470" r="3" fill="#00c88c" opacity=".18"/>
            <circle cx="790" cy="470" r="7" fill="none" stroke="#00c88c" strokeWidth=".6" opacity=".11"/>
            <line x1="790" y1="470" x2="700" y2="470" stroke="#00c88c" strokeWidth=".5" opacity=".09"/>
            <line x1="700" y1="470" x2="700" y2="540" stroke="#00c88c" strokeWidth=".5" opacity=".07"/>
            <circle cx="700" cy="540" r="2" fill="#00c88c" opacity=".12"/>

            <line x1="52" y1="290" x2="76" y2="290" stroke="#00c88c" strokeWidth=".7" opacity=".18"/>
            <line x1="64" y1="278" x2="64" y2="302" stroke="#00c88c" strokeWidth=".7" opacity=".18"/>
            <circle cx="64" cy="290" r="2" fill="#00c88c" opacity=".25"/>

            <line x1="824" y1="310" x2="848" y2="310" stroke="#00c88c" strokeWidth=".7" opacity=".18"/>
            <line x1="836" y1="298" x2="836" y2="322" stroke="#00c88c" strokeWidth=".7" opacity=".18"/>
            <circle cx="836" cy="310" r="2" fill="#00c88c" opacity=".25"/>

            <circle cx="310" cy="55" r="1.5" fill="#00e89a" opacity=".2"/>
            <circle cx="590" cy="55" r="1.5" fill="#00e89a" opacity=".2"/>
            <circle cx="450" cy="30" r="1" fill="#00e89a" opacity=".18"/>
            <circle cx="145" cy="340" r="1.5" fill="#00c88c" opacity=".16"/>
            <circle cx="755" cy="340" r="1.5" fill="#00c88c" opacity=".16"/>
            <circle cx="230" cy="510" r="1.5" fill="#00c88c" opacity=".13"/>
            <circle cx="670" cy="510" r="1.5" fill="#00c88c" opacity=".13"/>
            <circle cx="450" cy="560" r="1.5" fill="#00e89a" opacity=".15"/>

            <line x1="160" y1="0" x2="280" y2="140" stroke="#00c88c" strokeWidth=".4" opacity=".05"/>
            <line x1="740" y1="0" x2="620" y2="140" stroke="#00c88c" strokeWidth=".4" opacity=".05"/>

            <line x1="160" y1="580" x2="280" y2="440" stroke="#00c88c" strokeWidth=".4" opacity=".04"/>
            <line x1="740" y1="580" x2="620" y2="440" stroke="#00c88c" strokeWidth=".4" opacity=".04"/>

            <rect x="0" y="270" width="900" height="1" fill="#00c88c" opacity=".04"/>
            <rect x="0" y="310" width="900" height="1" fill="#00c88c" opacity=".03"/>

            <circle cx="450" cy="18" r="2.5" fill="#00c88c" opacity=".2"/>
            <line x1="450" y1="21" x2="450" y2="50" stroke="#00c88c" strokeWidth=".5" opacity=".1"/>

            <circle cx="450" cy="562" r="2.5" fill="#00c88c" opacity=".18"/>
            <line x1="450" y1="530" x2="450" y2="559" stroke="#00c88c" strokeWidth=".5" opacity=".09"/>
        </svg>
      </div>
    </>
  );
});

export default BackgroundOverlay;
