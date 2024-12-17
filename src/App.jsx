import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import { CORE_CONCEPTS , EXAMPLES} from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  console.log("App component Executing");
  let Tabcontent = <p>{'Please select a topic'}</p>;
  if (selectedTopic) {
    Tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu> 
          {Tabcontent}
        </section>
      </main>
    </div>
  );
}

export default App;