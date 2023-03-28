import  { Home }  from './src/screens/Home';
import { StatusBar, Text } from 'react-native';

export default function App() {
  return (
    <>

    <StatusBar 
    barStyle='light-content'
    backgroundColor='transparent'
    translucent
    />

    <Home/>
   
    </>

  );
}


