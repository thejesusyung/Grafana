import React, { useState, useEffect } from 'react';
import { PanelProps } from '@grafana/data';

interface SimplePanelOptions {
  text: string;
}

interface Props extends PanelProps<SimplePanelOptions> {}

export const SimplePanel: React.FC<Props> = ({ options }) => {
  const [pressedKey, setPressedKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        setPressedKey(event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>{options.text}</p>
      <p>Pressed Key: {pressedKey}</p>
    </div>
  );
};
