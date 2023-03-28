import { StyleSheet, TextComponent } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      // selecionando a tela inteira
      flex: 1,
      //cor de fundo
      backgroundColor: '#FFFFFF',
      //margin superior
      padding: 24,

      position:'absolute',

      flexDirection:'column',

      

      


      
      
    },
    nameEvent: {
      //cor usado na letra
      color: '#123244',
      //fonte da palavra
      fontSize: 35,
      //alinhamento de item
      alignItems: 'center',
      // estilo de letra
      fontWeight: 'bold',
      //margin do top
      marginTop:48,


  
  
    },
    dateEvent:{
        //cor da letra
      color: '#333333',
      //tamanho da letra
      fontSize: 26,
      //espaçamento inferior
      marginTop: 10,

      flex:1,
      

  
    },

    input:{
        //altura
        height:70,
        //largura
        width:500,
        //cor de fundo
        backgroundColor: '#1F1E25',
        //bordas laterais
        borderRadius:5,
        //cor das letras internas
        color: '#FDFCFE',
        //espaçamento interno
        padding: 16,
        //tamanho de texto
        fontSize:22,
        //selecionando esoaçamento da tela
        flex: 5,
        //margin lado direito
        //marginRight: 2,
        //margin inferior
        marginBottom:16,

        



        

        

        

        

        

       
        

      



    },

    button:{
        //largura 
        width: 50,
        //altura
        height: 70,
        //bordas laterais 
        borderRadius:5,
        //cor interna
        backgroundColor:'#31CF67',
        //alinhando no centro horizontal
        alignItems:'center',
        //alinhando no centro da vertical
        justifyContent: 'center',
        
    

        
        

       

        



      
        


        
       
    },

    buttonText:{
        color: '#FDFCFE',
        fontSize:24,
        
        
        
        
       
        
    },

    form:{
      //ocupando 100 de largura 
      width: '100%',
      //alinhando na mesma linha
      flexDirection:'row',
      //margin do topo
      marginTop:36,
      //margin Inferior
      marginBotton:42,

      

      

      


    },
    titulo:{
        fontSize:24,
        //alinhando no centro horizontal
        alignItems:'center',
        //alinhando no centro da vertical
        justifyContent: 'center',

        textAlign: 'center',
        flex:1,
        

        


    },

    valor:{

       //altura
        height:'auto',
        //largura
        width:"100%",
        //cor de fundo
        backgroundColor: '#A020F0',
        //bordas laterais
        borderRadius:5,
        //cor das letras internas
        color: '#FDFCFE',
        //espaçamento interno
        padding: 16,
        //tamanho de texto
        fontSize:28,

        
        
        
        
        



    },

    valorDentro:{
        color: '#ffffff',
        fontSize:25,
        flex:1,
        



    },

    valorDentroNumber:{
      color: '#FFFFFF',
      
    }
  });