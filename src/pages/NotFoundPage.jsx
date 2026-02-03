import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';

// ============================================
// 404 NOT FOUND PAGE
// Path: * (catch all routes)
// ============================================

const NotFoundPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const colors = isDark ? {
    primary: "#38BDF8",
    accent: "#A78BFA",
    background: "#0F172A",
    backgroundSecondary: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#CBD5E1",
    textMuted: "#64748B",
  } : {
    primary: "#0EA5E9",
    accent: "#8B5CF6",
    background: "#FFFFFF",
    backgroundSecondary: "#F8FAFC",
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#94A3B8",
  };

  const bgStyle = isDark 
    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 40%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 50%), ${colors.background}`
    : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.1), transparent 40%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 50%), ${colors.background}`;

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden transition-colors duration-500"
      style={{ background: bgStyle }}
    >
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-screen"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-300 hover:scale-110 z-40"
        style={{
          background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
          color: colors.textPrimary,
        }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 opacity-60 animate-float">
        <div className="w-20 h-20 rounded-full" style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
          filter: 'blur(20px)',
        }} />
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-50 animate-float-delayed">
        <div className="w-32 h-32 rounded-full" style={{
          background: `linear-gradient(225deg, ${colors.accent}, ${colors.primary})`,
          filter: 'blur(30px)',
        }} />
      </div>

      {/* Main Content */}
      <div 
        className={`w-full max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div 
          className="backdrop-blur-xl rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-300"
          style={{
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: isDark
              ? '0 20px 60px rgba(56, 189, 248, 0.2), 0 8px 16px rgba(14, 165, 233, 0.15)'
              : '0 20px 60px rgba(15, 23, 42, 0.1), 0 8px 16px rgba(15, 23, 42, 0.08)',
          }}
        >
          {/* 404 Number with 3D Effect */}
          <div className="text-center mb-8 relative">
            <div className="relative inline-block">
              {/* Decorative blur circles */}
              <div 
                className="absolute -top-12 -left-12 w-24 h-24 rounded-full opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  filter: 'blur(20px)',
                }}
              />
              
              <div 
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-20"
                style={{
                  background: `linear-gradient(225deg, ${colors.accent}, ${colors.primary})`,
                  filter: 'blur(25px)',
                }}
              />

              {/* 404 Text */}
              <h1 
                className="text-9xl sm:text-[12rem] font-extrabold select-none relative"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: colors.primary,
                  letterSpacing: '-0.05em',
                  textShadow: isDark 
                    ? `0 0 40px ${colors.primary}60, 0 0 80px ${colors.accent}30`
                    : `0 8px 30px ${colors.primary}40`,
                  lineHeight: 1,
                }}
              >
                404
              </h1>

              {/* Floating icons */}
              <div 
                className="absolute -top-8 -left-8 text-5xl opacity-50"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                <span style={{ color: colors.primary }}>❓</span>
              </div>
              
              <div 
                className="absolute -bottom-8 -right-8 text-5xl opacity-50"
                style={{ animation: 'float 6s ease-in-out infinite 1s' }}
              >
                <span style={{ color: colors.accent }}>🔍</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-10">
            <h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: colors.textPrimary,
              }}
            >
              Page Not Found
            </h2>
            
            <div 
              className="h-1 rounded-full mx-auto mb-6"
              style={{
                width: '120px',
                background: `linear-gradient(90deg, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
              }}
            />
            
            <p 
              className="text-lg sm:text-xl max-w-md mx-auto"
              style={{ 
                color: colors.textSecondary,
                lineHeight: 1.6,
              }}
            >
              halamannya ga ada, rasanya yang masih ada
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Go Back Button */}
            <button
              onClick={handleGoBack}
              className="group relative backdrop-blur-lg rounded-2xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.6)',
                border: `2px solid ${colors.primary}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 32px ${isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(14, 165, 233, 0.2)'}`;
                e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.6)';
              }}
            >
              <ArrowLeft 
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
                style={{ color: colors.primary }}
              />
              <span 
                className="font-semibold text-lg"
                style={{ color: colors.textPrimary }}
              >
                Go Back
              </span>
            </button>

            {/* Home Button */}
            <button
              onClick={handleGoHome}
              className="group relative backdrop-blur-lg rounded-2xl px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 40px ${isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(14, 165, 233, 0.3)'}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Home className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold text-lg text-white">
                Back to Home
              </span>
            </button>
          </div>

          {/* Helpful Links */}
          {/* <div 
            className="mt-10 pt-8 text-center"
            style={{
              borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
            }}
          >
            <p 
              className="text-sm mb-4"
              style={{ color: colors.textMuted }}
            >
              Atau kunjungi halaman:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                  color: colors.textSecondary,
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.primary;
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
                }}
              >
                Home
              </a>
              <a
                href="/payment"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                  color: colors.textSecondary,
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.primary;
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
                }}
              >
                Payment
              </a>
            </div>
          </div> */}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 2s;
        }
        
        * {
          cursor: none !important;
        }
        
        a, button {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;