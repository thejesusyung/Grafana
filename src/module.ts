import { PanelPlugin } from '@grafana/data';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin(SimplePanel).setPanelOptions(builder => {
  builder.addTextInput({
    path: 'text',
    name: 'Text',
    description: 'Text to display',
    defaultValue: 'Hello, Grafana!',
  });
});
