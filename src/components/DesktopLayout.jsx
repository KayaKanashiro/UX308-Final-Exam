import { View, Text, StyleSheet, Platform } from 'react-native';
import { LotusLarge } from './SpaIcons';

const serif = Platform.OS === 'web' ? 'Georgia, "Times New Roman", serif' : 'Georgia';
const sans = Platform.OS === 'web' ? '"Helvetica Neue", Helvetica, Arial, sans-serif' : undefined;

const SERVICES = [
  { icon: '◈', label: 'Full Body Massage' },
  { icon: '◈', label: 'Anti-Aging' },
  { icon: '◈', label: 'Facial' },
  { icon: '◈', label: 'Herbal Body Wrap' },
  { icon: '◈', label: 'Manicure' },
  { icon: '◈', label: 'Pedicure' },
  { icon: '◈', label: 'Waxing' },
];

export default function DesktopLayout({ children }) {
  return (
    <View style={styles.root}>

      {/* Left sidebar */}
      <View style={styles.sidebar}>
        <View style={styles.sidebarTop}>
          <LotusLarge />
          <Text style={[styles.brandName, { fontFamily: serif }]}>Quiet Oasis</Text>
          <Text style={[styles.brandTagline, { fontFamily: serif }]}>Luxury Day Spa</Text>
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerOrn}>✦</Text>
            <View style={styles.dividerLine} />
          </View>
        </View>

        <View style={styles.sidebarMenu}>
          <Text style={[styles.menuHeading, { fontFamily: serif }]}>Our Services</Text>
          {SERVICES.map((s, i) => (
            <View key={i} style={styles.menuItem}>
              <Text style={styles.menuDot}>—</Text>
              <Text style={[styles.menuLabel, { fontFamily: serif }]}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sidebarFooter}>
          <Text style={[styles.footerText, { fontFamily: sans }]}>Open daily · 9am – 7pm</Text>
          <Text style={[styles.footerText, { fontFamily: sans }]}>quietoasis.com</Text>
        </View>
      </View>

      {/* Right chat panel */}
      <View style={styles.main}>
        {children}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#F7F3ED',
  },

  // Sidebar
  sidebar: {
    width: 280,
    backgroundColor: '#EDE8DF',
    borderRightWidth: 1,
    borderRightColor: '#D5CEC3',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 48,
    paddingHorizontal: 32,
  },
  sidebarTop: {
    alignItems: 'center',
    gap: 6,
  },
  brandName: {
    fontSize: 22,
    fontWeight: '400',
    color: '#3B3028',
    letterSpacing: 3,
    marginTop: 16,
    textAlign: 'center',
  },
  brandTagline: {
    fontSize: 12,
    color: '#8B9E7E',
    letterSpacing: 2,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    marginTop: 8,
  },
  dividerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#C0B8AC',
  },
  dividerOrn: {
    fontSize: 10,
    color: '#8B9E7E',
  },

  // Menu
  sidebarMenu: {
    flex: 1,
    paddingTop: 36,
    gap: 14,
  },
  menuHeading: {
    fontSize: 11,
    color: '#8B9E7E',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuDot: {
    fontSize: 13,
    color: '#B8C9AF',
  },
  menuLabel: {
    fontSize: 14,
    color: '#5C5347',
    fontStyle: 'italic',
  },

  // Footer
  sidebarFooter: {
    gap: 4,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#A89E93',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  // Main chat area
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7F3ED',
  },
});