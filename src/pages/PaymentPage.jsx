import React, { useState, useEffect } from 'react';
import { Copy, Check, Building2, Wallet, Smartphone, AlertCircle, ChevronRight } from 'lucide-react';

// ============================================
// PAYMENT PAGE
// Path: /payment (ikbal.web.id/payment)
// ============================================

const PaymentPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const paymentMethods = [
    {
      id: 'bca',
      name: 'BCA',
      type: 'Bank Transfer',
      icon: Building2,
      accountNumber: '1690575937',
      accountName: 'Ikbal Adi Putra',
      color: '#0066AE',
      logo: '🏦',
      instructions: [
        'Buka aplikasi BCA Mobile atau ATM',
        'Pilih menu Transfer',
        'Masukkan nomor rekening tujuan',
        'Masukkan nominal yang ingin ditransfer',
        'Konfirmasi dan simpan bukti transfer'
      ]
    },
    {
      id: 'bri',
      name: 'BRI',
      type: 'Bank Transfer',
      icon: Building2,
      accountNumber: '089101034680530',
      accountName: 'Ikbal Adi Putra',
      color: '#00529C',
      logo: '🏛️',
      instructions: [
        'Buka aplikasi BRImo atau ATM',
        'Pilih menu Transfer',
        'Masukkan nomor rekening tujuan',
        'Masukkan nominal transfer',
        'Konfirmasi dan simpan bukti transfer'
      ]
    },
    {
      id: 'dana',
      name: 'DANA',
      type: 'E-Wallet',
      icon: Wallet,
      accountNumber: '085877032390',
      accountName: 'Ikbal Adi Putra',
      color: '#118EEA',
      logo: '💳',
      instructions: [
        'Buka aplikasi DANA',
        'Pilih menu Kirim',
        'Masukkan nomor HP atau scan QR',
        'Masukkan nominal',
        'Konfirmasi dan kirim'
      ]
    },
    {
      id: 'shopeepay',
      name: 'ShopeePay',
      type: 'E-Wallet',
      icon: Smartphone,
      accountNumber: '085877032390',
      accountName: 'ikbal_ap',
      color: '#EE4D2D',
      logo: '🛍️',
      instructions: [
        'Buka aplikasi Shopee',
        'Pilih ShopeePay',
        'Pilih Kirim Uang',
        'Masukkan nomor HP atau scan QR',
        'Konfirmasi pembayaran'
      ]
    }
  ];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    const number = value.replace(/\D/g, '');
    return new Intl.NumberFormat('id-ID').format(number);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value);
  };

  const colors = isDark ? {
    primary: "#38BDF8",
    accent: "#A78BFA",
    background: "#0F172A",
    backgroundSecondary: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#CBD5E1",
    textMuted: "#64748B",
    border: "#334155",
  } : {
    primary: "#0EA5E9",
    accent: "#8B5CF6",
    background: "#FFFFFF",
    backgroundSecondary: "#F8FAFC",
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#94A3B8",
    border: "#E2E8F0",
  };

  const bgStyle = isDark 
    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15), transparent 50%), ${colors.background}`
    : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.1), transparent 40%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1), transparent 50%), ${colors.background}`;

  return (
    <div 
      className="min-h-screen p-4 sm:p-8 relative overflow-hidden transition-colors duration-500"
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
      <div className="absolute top-20 right-10 opacity-60 animate-float">
        <div className="w-24 h-24 rounded-full" style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
          filter: 'blur(25px)',
        }} />
      </div>
      
      <div className="absolute bottom-32 left-20 opacity-50 animate-float-delayed">
        <div className="w-32 h-32 rounded-full" style={{
          background: `linear-gradient(225deg, ${colors.accent}, ${colors.primary})`,
          filter: 'blur(30px)',
        }} />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-16 pb-8">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative inline-block mb-4">
            <div 
              className="absolute -top-8 -left-8 w-16 h-16 rounded-full opacity-20"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                filter: 'blur(15px)',
              }}
            />
            
            <h1 
              className="text-5xl sm:text-7xl font-extrabold select-none relative"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: colors.primary,
                letterSpacing: '-0.02em',
                textShadow: isDark 
                  ? `0 0 30px ${colors.primary}40, 0 0 60px ${colors.accent}20`
                  : `0 4px 20px ${colors.primary}30`,
              }}
            >
              PAYMENT
            </h1>
            
            <div 
              className="h-1 rounded-full mx-auto mt-2 transition-all duration-300"
              style={{
                width: '50%',
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

            <div 
              className="absolute -top-6 -right-8 text-5xl opacity-60"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <span style={{ color: colors.primary }}>💳</span>
            </div>
          </div>
          
        </div>

    

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            const isSelected = selectedMethod === method.id;
            
            return (
              <div
                key={method.id}
                className={`backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 ${isSelected ? 'ring-2' : ''}`}
                style={{
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  boxShadow: isSelected ? `0 0 0 2px ${colors.primary}` : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.boxShadow = `0 8px 32px ${isDark ? 'rgba(56, 189, 248, 0.2)' : 'rgba(14, 165, 233, 0.15)'}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 hover:scale-110"
                      style={{ background: method.color }}
                    >
                      {method.logo}
                    </div>
                    <div>
                      <h3 
                        className="text-2xl font-bold transition-colors duration-300"
                        style={{ color: colors.textPrimary }}
                      >
                        {method.name}
                      </h3>
                      <p 
                        className="text-sm transition-colors duration-300"
                        style={{ color: colors.textMuted }}
                      >
                        {method.type}
                      </p>
                    </div>
                  </div>
                  {/* <button
                    onClick={() => setSelectedMethod(isSelected ? null : method.id)}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: isSelected 
                        ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                        : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                      color: isSelected ? '#fff' : colors.textMuted,
                    }}
                  >
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`}
                    />
                  </button> */}
                </div>

                {/* Account Details */}
                <div className="space-y-3 mb-6">
                  <div 
                    className="rounded-xl p-4 transition-colors duration-300"
                    style={{
                      background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <p 
                      className="text-xs font-semibold mb-1 transition-colors duration-300"
                      style={{ color: colors.textMuted }}
                    >
                      {method.type === 'Bank Transfer' ? 'Nomor Rekening' : 'Nomor HP'}
                    </p>
                    <div className="flex items-center justify-between">
                      <p 
                        className="text-lg font-bold font-mono transition-colors duration-300"
                        style={{ color: colors.textPrimary }}
                      >
                        {method.accountNumber}
                      </p>
                      <button
                        onClick={() => copyToClipboard(method.accountNumber, `${method.id}-number`)}
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: copiedId === `${method.id}-number`
                            ? 'linear-gradient(135deg, #10B981, #059669)'
                            : `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                          color: '#fff',
                        }}
                      >
                        {copiedId === `${method.id}-number` ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div 
                    className="rounded-xl p-4 transition-colors duration-300"
                    style={{
                      background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                    }}
                  >
                    <p 
                      className="text-xs font-semibold mb-1 transition-colors duration-300"
                      style={{ color: colors.textMuted }}
                    >
                      Atas Nama
                    </p>
                    <div className="flex items-center justify-between">
                      <p 
                        className="text-lg font-bold transition-colors duration-300"
                        style={{ color: colors.textPrimary }}
                      >
                        {method.accountName}
                      </p>
                      <button
                        onClick={() => copyToClipboard(method.accountName, `${method.id}-name`)}
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: copiedId === `${method.id}-name`
                            ? 'linear-gradient(135deg, #10B981, #059669)'
                            : `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                          color: '#fff',
                        }}
                      >
                        {copiedId === `${method.id}-name` ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                {/* {isSelected && (
                  <div 
                    className="rounded-xl p-4 space-y-3 transition-all duration-500"
                    style={{
                      background: isDark ? 'rgba(56, 189, 248, 0.1)' : 'rgba(14, 165, 233, 0.05)',
                      border: `1px solid ${isDark ? 'rgba(56, 189, 248, 0.2)' : 'rgba(14, 165, 233, 0.15)'}`,
                      animation: 'slideDown 0.3s ease-out',
                    }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle className="w-5 h-5" style={{ color: colors.primary }} />
                      <p 
                        className="font-semibold transition-colors duration-300"
                        style={{ color: colors.textPrimary }}
                      >
                        Cara Pembayaran:
                      </p>
                    </div>
                    {method.instructions.map((instruction, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                            color: '#fff',
                          }}
                        >
                          {idx + 1}
                        </span>
                        <p 
                          className="text-sm flex-1 transition-colors duration-300"
                          style={{ color: colors.textSecondary }}
                        >
                          {instruction}
                        </p>
                      </div>
                    ))}
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        
        * {
          cursor: none !important;
        }
        
        input::placeholder {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default PaymentPage;