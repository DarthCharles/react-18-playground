import './styles.css';

import { AutomaticBatching } from './AutomaticBatching';
import { ConcurrentRendering } from './ConcurrentRendering';
import { ConcurrentRenderingSimple } from './ConcurrentRenderingSimple';
import { DeferredValue } from './DeferredValue';
import { SuspenseExample } from './SuspenseExample';

export default function App() {
  return (
    <div className="App">
      {/* <AutomaticBatching /> */}
      {/* <ConcurrentRendering /> */}
      {/* <ConcurrentRenderingSimple /> */}
      {/* <DeferredValue /> */}
      <SuspenseExample />
    </div>
  );
}
