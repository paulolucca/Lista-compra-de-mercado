import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participante } from '../../components/Participante';
import { Produto } from '../../components/Produto'


export function Home() {

  const [participantes,setParticipantes] = useState <string[]> ([]);

  const [produtoValor, setProdutoValor] = useState <string[]> ([]);

  const [participanteName, setParticipanteName] = useState('');

  const [produtoName, setProdutoName] = useState('');

 

  function handleParticipanAdd() {

    if(participantes.includes(participanteName)){

     return  Alert.alert("Participante já existe","Já existe participante com esse nome");


    }

    setParticipantes(prevState => [...prevState, participanteName]);
    setParticipanteName('');

   
  }

  

  function handleProdutoAdd() {

    if(produtoValor.includes(produtoName)){

     return   Alert.alert("Participante já existe","Já existe participante com esse nome");



    }

    setProdutoValor(prevState => [...prevState, produtoName]);
    setProdutoName('');

   

   
  }

  function handleParticipantRemove(name: string) {

      

   setParticipantes(prevState => prevState.filter (participante => participante !== name));



    Alert.alert("Deseja remover o itens selecionado", `Remover o itens ${name}? `,  [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não'
        
      }

      
    ]
  
    
    );

  }



      function handleProdutoAddRemove (name: string) {

      

        setProdutoValor(prevState => prevState.filter (produtoValor => produtoValor !== name));
    
    
    
        Alert.alert("Deseja remover o itens selecionado", `Remover o itens ${name}? `,  [
          {
            text: 'Sim',
            onPress: () => Alert.alert("Deletado!")
          },
          {
            text: 'Não'
            
          }

        

    ]);

    

  }

  /*function SumaValorProduto(produtoValor){

    ( produtoValor ++ {produtoValor} )

  }*/
  
  


  return (

    <View style={styles.container}>
      <Text style={styles.nameEvent}>
        Lista de Mercado
      </Text>

      <Text style={styles.dateEvent}>
        Adicionar os ítens..
      </Text>
     

      <View style={styles.form} >

      

      
        <TextInput
          style={styles.input}
          //texto no input enquanto nada foi digitado
          placeholder='Nome do produto'
          //cor do texto placeholder
          placeholderTextColor='#6B6B6B'
        //opções de teclado = keyboardType=""
        onChangeText={ text => setParticipanteName(text)}

        value={participanteName}
        />

         <TouchableOpacity style={styles.button}
          onPress={handleParticipanAdd}
        >

          
          <Text style={styles.buttonText}>
            +
          </Text>

        </TouchableOpacity>

        
        </View>

        <View style={styles.form} >
      

        <TextInput
          style={styles.input}
          //texto no input enquanto nada foi digitado
          placeholder='Valor do Produto'
          //cor do texto placeholder
          placeholderTextColor='#6B6B6B'
        //opções de teclado = keyboardType=""
        onChangeText={ number => setProdutoName(number)}

        value={produtoName}
        />
        
        <TouchableOpacity style={styles.button}
          onPress={handleProdutoAdd}
        >

          

          
          <Text style={styles.buttonText}>
            +
          </Text>

          

        </TouchableOpacity>

      </View>

      

      
      <Text style={styles.titulo}>
        Nomes dos itens
      </Text>
      

      
      
     <FlatList 
     data={participantes}
     keyExtractor={item => item}
     renderItem={({item}) => (
      
      
      <Participante

      key={item}
      name={item}
      onRemove={() => handleParticipantRemove(item)}
        />

        
     )

     }


     showsVerticalScrollIndicator={false}
     
     />



     
        <Text style={styles.titulo}>
          Valores dos itens
        </Text>
    
    
    
    
    <FlatList 
     data={produtoValor}
     keyExtractor={item => item}
     renderItem={({item}) => (
      
      
      <Produto

      key={item}
      name={item}
      onRemove={() => handleProdutoAddRemove(item)}
        />

        
     )

     }


     showsVerticalScrollIndicator={true}
     
     />


     <View style={styles.valor}>
        <Text style={styles.valorDentro}>
          Total:   
          <Text style={styles.valorDentroNumber}>
        {produtoValor}  
          </Text>
        </Text>
     </View>





     </View>
  );
  }



  
