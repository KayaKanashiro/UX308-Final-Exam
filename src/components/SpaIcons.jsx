import { View } from 'react-native';

export function LotusLarge() {
  return (
    <View style={{ width: 90, height: 90 }}>
      <div dangerouslySetInnerHTML={{ __html: `
        <svg width="90" height="90" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#EAE5D9"/>
          <ellipse cx="40" cy="48" rx="13" ry="8" fill="#8B9E7E"/>
          <path d="M40 48 Q32 34 40 24 Q48 34 40 48Z" fill="#A3B899"/>
          <path d="M40 48 Q26 40 22 30 Q30 26 40 48Z" fill="#B8C9AF"/>
          <path d="M40 48 Q54 40 58 30 Q50 26 40 48Z" fill="#B8C9AF"/>
          <path d="M40 48 Q20 44 18 34 Q27 30 40 48Z" fill="#CDD9C7"/>
          <path d="M40 48 Q60 44 62 34 Q53 30 40 48Z" fill="#CDD9C7"/>
          <ellipse cx="40" cy="48" rx="5" ry="3.5" fill="#6B8260"/>
          <line x1="32" y1="54" x2="48" y2="54" stroke="#A3B899" stroke-width="1.2" stroke-linecap="round"/>
          <line x1="28" y1="58" x2="52" y2="58" stroke="#B8C9AF" stroke-width="1" stroke-linecap="round"/>
        </svg>
      ` }} />
    </View>
  );
}

export function LotusSmall() {
  return (
    <View style={{ width: 32, height: 32, marginRight: 10, flexShrink: 0 }}>
      <div dangerouslySetInnerHTML={{ __html: `
        <svg width="32" height="32" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#EAE5D9"/>
          <ellipse cx="40" cy="48" rx="13" ry="8" fill="#8B9E7E"/>
          <path d="M40 48 Q32 34 40 24 Q48 34 40 48Z" fill="#A3B899"/>
          <path d="M40 48 Q26 40 22 30 Q30 26 40 48Z" fill="#B8C9AF"/>
          <path d="M40 48 Q54 40 58 30 Q50 26 40 48Z" fill="#B8C9AF"/>
          <path d="M40 48 Q20 44 18 34 Q27 30 40 48Z" fill="#CDD9C7"/>
          <path d="M40 48 Q60 44 62 34 Q53 30 40 48Z" fill="#CDD9C7"/>
          <ellipse cx="40" cy="48" rx="5" ry="3.5" fill="#6B8260"/>
        </svg>
      ` }} />
    </View>
  );
}