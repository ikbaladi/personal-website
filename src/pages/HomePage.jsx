import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Instagram, Twitter } from 'lucide-react';

// ============================================
// HOME PAGE - Contact Card
// Path: / (ikbal.web.id)
// ============================================

const HomePage = () => {
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

  const socialLinks = [
    { icon: Github, label: 'GitHub', value: 'ikbaladi', href: 'https://github.com/ikbaladi' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Ikbal Adi Putra', href: 'https://linkedin.com/in/ikbaladi' },
    { icon: Mail, label: 'Email', value: 'me@ikbal.web.id', href: 'mailto:me@ikbal.web.id' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+62 858-7703-2390', href: 'https://wa.me/6285877032390' },
    { icon: Instagram, label: 'Instagram', value: '@ikbalaputra', href: 'https://instagram.com/ikbalaputra' },
    // { icon: Twitter, label: 'Twitter', value: '@ikbaladiputa', href: 'https://twitter.com/ikbaladiputa' },
  ];

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
    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 40%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15), transparent 50%), ${colors.background}`
    : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.1), transparent 40%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1), transparent 50%), ${colors.background}`;

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

      {/* Main Card */}
      <div 
        className={`w-full max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div 
          className="backdrop-blur-xl rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
          style={{
            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: isDark
              ? '0 20px 60px rgba(56, 189, 248, 0.2), 0 8px 16px rgba(14, 165, 233, 0.15)'
              : '0 20px 60px rgba(15, 23, 42, 0.1), 0 8px 16px rgba(15, 23, 42, 0.08)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-12 relative">
            <div className="relative inline-block mb-4">
              <div 
                className="absolute -top-8 -left-8 w-16 h-16 rounded-full opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  filter: 'blur(15px)',
                }}
              />
              
              <h1 
                className="text-5xl sm:text-6xl font-extrabold mb-2 select-none relative"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: colors.primary,
                  letterSpacing: '-0.02em',
                  transition: 'all 0.3s ease',
                  textShadow: isDark 
                    ? `0 0 30px ${colors.primary}40, 0 0 60px ${colors.accent}20`
                    : `0 4px 20px ${colors.primary}30`,
                }}
              >
                IKBAL ADI PUTRA
              </h1>
              
              <div 
                className="h-1 rounded-full mx-auto transition-all duration-300"
                style={{
                  width: '60%',
                  background: `linear-gradient(90deg, transparent, ${colors.primary}, ${colors.accent}, transparent)`,
                }}
              />
              
              <div 
                className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full opacity-20"
                style={{
                  background: `linear-gradient(225deg, ${colors.accent}, ${colors.primary})`,
                  filter: 'blur(20px)',
                }}
              />
            </div>
            
            <p 
              className="text-lg sm:text-xl mt-6 transition-colors duration-300"
              style={{ 
                color: colors.textSecondary,
                fontWeight: 500,
              }}
            >
              Let's Connect & Collaborate
            </p>

            {/* <div 
              className="absolute -top-4 -right-4 text-4xl opacity-60"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <span style={{ color: colors.primary }}>@</span>
            </div> */}
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.6)',
                    border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 32px ${isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(14, 165, 233, 0.2)'}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="font-semibold mb-1 transition-colors duration-300"
                        style={{ color: colors.textPrimary }}
                      >
                        {contact.label}
                      </h3>
                      <p 
                        className="text-sm truncate transition-colors duration-300"
                        style={{ color: colors.textMuted }}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${isDark ? 'rgba(56, 189, 248, 0.1)' : 'rgba(14, 165, 233, 0.05)'}, transparent 70%)`,
                    }}
                  />
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p 
              className="text-sm transition-colors duration-300"
              style={{ color: colors.textMuted }}
            >
              Available for freelance projects & collaborations
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 2s;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

export default HomePage;