import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        //ocupe 100 da largura disponivel 
        width: '100%',
        //cor de fundo
        backgroundColor:'#1F1E25',
        //bordar redonda
        borderRadius: 5,
        // alinhando na mesma linha
        flexDirection: 'row',
        // alinhando
        alignItems: 'center',
        //margin Inferior
        marginBottom:10,

        

    },
    name:{
        //ocupando a tela 
        flex:1,
        //cor da letra
        color: '#FFFF',
        //fonte do texto
        fontSize:22,
        //espaçamento interno letras
        marginLeft:16,
        
    
        




    },

    button:{
        //largura 
        width: 56,
        //altura
        height: 56,
        //bordas laterais 
        borderRadius:5,
        //cor interna
        backgroundColor:'#E23C44',
        //alinhando no centro horizontal
        alignItems:'center',
        //alinhando no centro da vertical
        justifyContent: 'center',
    },

    buttonText:{
        color: '#FDFCFE',
        fontSize: 35,
        
        
    },

});

 
