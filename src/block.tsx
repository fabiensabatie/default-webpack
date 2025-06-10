import React, { useEffect, useState } from 'react';

interface BlockProps {
  message?: string;
  robotColor?: string;
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
}

const Block: React.FC<BlockProps> = ({ 
  message = "AI is doing its magic",
  robotColor = "#4A90E2",
  backgroundColor = "#1a1a2e",
  textColor = "#ffffff",
  duration = 3000
}) => {
  const [dots, setDots] = useState('');
  const [eyeWink, setEyeWink] = useState(false);
  const [robotBounce, setRobotBounce] = useState(false);

  useEffect(() => {
    // Animated dots for the loading text
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Random eye winking
    const winkInterval = setInterval(() => {
      setEyeWink(true);
      setTimeout(() => setEyeWink(false), 150);
    }, 2000 + Math.random() * 3000);

    // Robot bouncing animation
    const bounceInterval = setInterval(() => {
      setRobotBounce(true);
      setTimeout(() => setRobotBounce(false), 600);
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(winkInterval);
      clearInterval(bounceInterval);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
    overflow: 'hidden'
  };

  const robotContainerStyle: React.CSSProperties = {
    position: 'relative',
    marginBottom: '40px',
    transform: robotBounce ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s ease-in-out'
  };

  const robotBodyStyle: React.CSSProperties = {
    width: '100px',
    height: '120px',
    backgroundColor: robotColor,
    borderRadius: '20px',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    border: `3px solid ${robotColor}`,
    background: `linear-gradient(145deg, ${robotColor}, #357ABD)`
  };

  const robotHeadStyle: React.CSSProperties = {
    width: '80px',
    height: '60px',
    backgroundColor: robotColor,
    borderRadius: '15px',
    position: 'absolute',
    top: '-30px',
    left: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    background: `linear-gradient(145deg, ${robotColor}, #357ABD)`
  };

  const eyeStyle: React.CSSProperties = {
    width: '12px',
    height: '12px',
    backgroundColor: '#00ff88',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    boxShadow: '0 0 10px #00ff88',
    animation: 'glow 2s ease-in-out infinite alternate'
  };

  const leftEyeStyle: React.CSSProperties = {
    ...eyeStyle,
    left: '20px',
    transform: eyeWink ? 'scaleY(0.1)' : 'scaleY(1)',
    transition: 'transform 0.1s ease'
  };

  const rightEyeStyle: React.CSSProperties = {
    ...eyeStyle,
    right: '20px'
  };

  const antennaStyle: React.CSSProperties = {
    width: '3px',
    height: '20px',
    backgroundColor: '#666',
    position: 'absolute',
    top: '-15px',
    left: '38px',
    borderRadius: '2px'
  };

  const antennaLightStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    backgroundColor: '#ff4444',
    borderRadius: '50%',
    position: 'absolute',
    top: '-8px',
    left: '-2.5px',
    boxShadow: '0 0 8px #ff4444',
    animation: 'blink 1s ease-in-out infinite'
  };

  const armStyle: React.CSSProperties = {
    width: '15px',
    height: '40px',
    backgroundColor: robotColor,
    position: 'absolute',
    top: '20px',
    borderRadius: '8px'
  };

  const leftArmStyle: React.CSSProperties = {
    ...armStyle,
    left: '-12px',
    transform: 'rotate(-20deg)',
    transformOrigin: 'top center'
  };

  const rightArmStyle: React.CSSProperties = {
    ...armStyle,
    right: '-12px',
    transform: 'rotate(20deg)',
    transformOrigin: 'top center'
  };

  const legStyle: React.CSSProperties = {
    width: '20px',
    height: '30px',
    backgroundColor: robotColor,
    position: 'absolute',
    bottom: '-25px',
    borderRadius: '0 0 10px 10px'
  };

  const leftLegStyle: React.CSSProperties = {
    ...legStyle,
    left: '20px'
  };

  const rightLegStyle: React.CSSProperties = {
    ...legStyle,
    right: '20px'
  };

  const textStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: '600',
    color: textColor,
    textAlign: 'center',
    marginBottom: '20px',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
  };

  const dotsStyle: React.CSSProperties = {
    fontSize: '32px',
    color: robotColor,
    fontWeight: 'bold',
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const sparkleStyle: React.CSSProperties = {
    position: 'absolute',
    color: '#ffd700',
    fontSize: '20px',
    animation: 'sparkle 2s ease-in-out infinite',
    pointerEvents: 'none'
  };

  // CSS animations as a style tag
  const styles = `
    @keyframes glow {
      0% { box-shadow: 0 0 10px #00ff88; }
      100% { box-shadow: 0 0 20px #00ff88, 0 0 30px #00ff88; }
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0.3; }
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
      50% { opacity: 1; transform: scale(1) rotate(180deg); }
    }
    
    @keyframes progress {
      0% { width: 0%; }
      100% { width: 100%; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={containerStyle}>
        {/* Sparkle effects */}
        <div style={{...sparkleStyle, top: '20%', left: '15%', animationDelay: '0s'}}>✨</div>
        <div style={{...sparkleStyle, top: '30%', right: '20%', animationDelay: '0.5s'}}>⭐</div>
        <div style={{...sparkleStyle, bottom: '30%', left: '25%', animationDelay: '1s'}}>✨</div>
        <div style={{...sparkleStyle, top: '15%', right: '15%', animationDelay: '1.5s'}}>💫</div>
        
        {/* Sneaky Robot */}
        <div style={robotContainerStyle}>
          <div style={robotBodyStyle}>
            {/* Robot Head */}
            <div style={robotHeadStyle}>
              <div style={leftEyeStyle}></div>
              <div style={rightEyeStyle}></div>
              <div style={antennaStyle}>
                <div style={antennaLightStyle}></div>
              </div>
            </div>
            
            {/* Robot Arms */}
            <div style={leftArmStyle}></div>
            <div style={rightArmStyle}></div>
            
            {/* Robot Legs */}
            <div style={leftLegStyle}></div>
            <div style={rightLegStyle}></div>
          </div>
        </div>

        {/* Loading Text */}
        <div style={textStyle}>{message}</div>
        
        {/* Animated Dots */}
        <div style={dotsStyle}>{dots}</div>
      </div>
    </>
  );
};

export default Block;
