import './App.css';
import styled from 'styled-components' ; 
import { Card  } from './card.component' ; 

const textStyles = {
  color: 'red',
  fontSize: '24px',
};

const Text = styled.div`
color:violet; font-size:13px;
border: ${({isActive}) => isActive? '1px solid yellow' : '3px dotted black' } ; 
`;

function App() {
  return (
    <div className="App-header">
      <Card>
          <Text isActive={true}>Just your friendly neighbor</Text>
      </Card>
    </div>
  );
}

export default App;
