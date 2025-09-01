import React, { useState } from 'react';
import { MicOff, Phone, Waves, Volume2 } from 'lucide-react';
import { useConversation } from '@elevenlabs/react';

interface VoiceWidgetProps {
  agentId?: string;
  className?: string;
}

const VoiceWidget: React.FC<VoiceWidgetProps> = ({
  agentId = "agent_4001k3619fe9e61tng0t034d0tmj",
  className = ""
}) => {
  const conversation = useConversation();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCallClick = async () => {
    console.log('Call button clicked', { agentId });

    try {
      setIsLoading(true);

      if (isConnected) {
        // End the conversation if already connected
        console.log('Ending conversation...');
        await conversation.endSession();
        setIsConnected(false);
      } else {
        // Start a new conversation
        console.log('Starting conversation with agent:', agentId);
        const conversationId = await conversation.startSession({
          agentId: agentId,
          connectionType: 'webrtc',
        });

        console.log('Conversation started with ID:', conversationId);
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Error handling conversation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main widget container with enhanced glassmorphism effect */}
      <div className="relative z-10 overflow-hidden rounded-2xl shadow-card glass-enhanced animate-float">
        {/* Abstract swirling gradient background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-blue-50/30 rounded-2xl" />

          {/* Blurred morphing gradient blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-400/40 to-green-400/30 rounded-full blur-3xl animate-morph-1"></div>
          <div className="absolute -top-5 right-0 w-32 h-48 bg-gradient-to-bl from-green-400/35 to-blue-400/25 rounded-full blur-3xl animate-morph-2"></div>
          <div className="absolute bottom-0 -left-5 w-48 h-32 bg-gradient-to-tr from-blue-400/30 to-emerald-400/20 rounded-full blur-2xl animate-morph-3"></div>
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tl from-emerald-300/45 to-green-300/35 rounded-full blur-3xl animate-morph-4"></div>
          <div className="absolute top-1/3 left-1/4 w-28 h-40 bg-gradient-to-br from-green-300/40 to-blue-300/30 rounded-full blur-2xl animate-morph-5"></div>
          <div className="absolute bottom-1/3 right-1/4 w-44 h-28 bg-gradient-to-bl from-blue-300/35 to-emerald-300/25 rounded-full blur-3xl animate-morph-6"></div>
        </div>
        <div className="relative p-8 lg:p-12 space-y-8 z-10 bg-white/70">

          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-health-green/20 text-health-green text-sm font-medium">
              <Volume2 className="h-4 w-4" />
              Live Demo Available
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 px-4 py-2 rounded-lg">
              Try HealthVoice Now
            </h3>
            <p className="text-gray-500 text-lg font-normal px-4 py-2 rounded-lg">
              Experience our AI receptionist in action
            </p>
          </div>

          {/* Simple Call Button */}
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={handleCallClick}
              disabled={isLoading}
              className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-health-green/30 ${
                isConnected
                  ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-2xl shadow-red-500/40'
                  : isLoading
                  ? 'bg-gradient-to-br from-gray-400 to-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-br from-health-green to-health-green/80 hover:from-health-green hover:to-health-green/60 shadow-2xl shadow-health-green/40'
              }`}
            >
              {isLoading ? (
                <Waves className="w-8 h-8 lg:w-10 lg:h-10 text-white mx-auto animate-pulse" />
              ) : isConnected ? (
                <MicOff className="w-8 h-8 lg:w-10 lg:h-10 text-white mx-auto" />
              ) : (
                <Phone className="w-8 h-8 lg:w-10 lg:h-10 text-white mx-auto" />
              )}
            </button>

            <div className="text-center">
              <div className={`px-4 py-2 rounded-full text-sm font-medium border ${
                isConnected
                  ? 'bg-red-50 text-red-600 border-red-200'
                  : isLoading
                  ? 'bg-gray-50 text-gray-600 border-gray-200'
                  : 'bg-white text-health-green border-health-green/20'
              }`}>
                {isConnected ? 'Click to End Call' : isLoading ? 'Connecting...' : 'Click to Start Call'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-health-green/40 rounded-full animate-float" />
      <div className="absolute top-12 right-12 w-1 h-1 bg-health-green/60 rounded-full animate-ping animation-delay-300" />
      <div className="absolute bottom-8 left-4 w-2 h-2 bg-health-green/30 rounded-full animate-pulse animation-delay-150" />
      <div className="absolute bottom-16 left-8 w-1 h-1 bg-health-green/50 rounded-full animate-ping" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-health-green/5 rounded-2xl pointer-events-none" />

    </div>
  );
};

export default VoiceWidget;
