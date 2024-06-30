import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 1
  color?: string;  // Optional color for the progress bar
  height?: number; // Optional height for the progress bar
  showLabel?: boolean; // Optional flag to show progress percentage as label
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = '#3b5998', height = 10, showLabel = false }) => {
  return (
    <View style={[styles.container, { height }]}>
      <View style={[styles.progress, { width: `${progress * 100}%`, backgroundColor: color }]} />
      {showLabel && <Text style={styles.label}>{`${Math.round(progress * 100)}%`}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progress: {
    height: '100%',
    borderRadius: 5,
  },
  label: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProgressBar;
