import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const MiCV = () => {
  return (
    <ScrollView style={styles.container}>


      <View style={styles.bg}>

        {/* <View style={styles.bg}/> */}
        <Text style={styles.hi}>HOLA</Text>

        <Image style={styles.ds} source={require('./img/diseno-web.png')} />
        
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Angel Reyes</Text>

        <View style={styles.about}>
          <Image style={styles.image} source={require('./img/perfil.png')} />
          <Text style={styles.sectionTitle}>Sobre mi</Text>
          <Text style={styles.txt}>Nombre: Angel Reyes</Text>
          <Text  style={styles.txt}>Edad: 25 años</Text>
          <Text  style={styles.txt} >Desarrolador FrontEnd</Text>
          <View style={styles.social}>
            <Image style={styles.icons} source={require('./img/linkedin.png')} />
            <Image style={styles.icons} source={require('./img/github.png')} />
            <Image style={styles.icons} source={require('./img/dribbble.png')} />
          </View>
        </View>
      </View>

      <View style={styles.section2}>
        <View>
          <Image style={styles.imageT} source={require('./img/bg.jpg')} fsfsds />
        </View> 
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mis Habilidades</Text>
        <Text style={styles.TitleS}>Resolución de Problemas</Text>
        <View style={styles.skills}>
          <Text style={styles.txtS}>Soy capaz de identificar y abordar desafíos de manera eficiente y creativa.</Text>
          <Image style={styles.imageS} source={require('./img/problemas.jpg')} />
        </View>
        <Text style={styles.TitleS}>Trabajo en Equipo</Text>
        <View style={styles.skills}>
          <Image style={styles.imageS} source={require('./img/teamwork.jpg')} />
          <Text style={styles.txtS}>Soy un colaborador excepcional y puedo trabajar eficazmente con otros programadores, diseñadores y profesionales en proyectos conjuntos.</Text>
        </View>
        <Text style={styles.TitleS}>Pensamiento Lógico</Text>
        <View style={styles.skills}>
          <Text style={styles.txtS}>Poseo una mente analítica y estructurada, lo que me permite abordar problemas de programación de manera lógica.</Text>
          <Image style={styles.imageS} source={require('./img/logico.jpg')} />
        </View>
        <Text style={styles.TitleS}>Comunicación Efectiva</Text>
        <View style={styles.skills}>
          <Image style={styles.imageS} source={require('./img/comunicacion.jpg')} />
          <Text style={styles.txtS}>Poseo habilidades de comunicación tanto oral como escrita.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tecnologías</Text>
        <View style={styles.tech} >
          <Image style={styles.imageTe} source={require('./img/html.png')} />
          <Text style={styles.sectionTitle}>HTML</Text>
        </View> 
        <View style={styles.tech} >
          <Image style={styles.imageTe} source={require('./img/js.png')} />
          <Text style={styles.sectionTitle}>JavaScript</Text>
        </View> 
        <View style={styles.tech} >
          <Image style={styles.imageTe} source={require('./img/bs.png')} />
          <Text style={styles.sectionTitle}>Bootsrap</Text>
        </View> 
        <View style={styles.tech} >
          <Image style={styles.imageTe} source={require('./img/angular.png')} />
          <Text style={styles.sectionTitle}>Angular</Text>
        </View> 
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Portafolio</Text>
        <View style={styles.port}>
          <Image style={styles.imageP} source={require('./img/proyecto_1.png')} />
          <Image style={styles.imageP} source={require('./img/proyecto_2.png')} />
          <Image style={styles.imageP} source={require('./img/proyecto_3.png')} />
        </View> 
      </View>

      <View style={styles.bg2}>
        <Text style={styles.sectionTitle}>Contacto</Text>
            <Image style={styles.icons2} source={require('./img/facebook.png')} />
            <Image style={styles.icons2} source={require('./img/instagram.png')} />
            <Image style={styles.icons2} source={require('./img/gorjeo.png')} />

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1116',
  },
  section: {
    marginBottom: 30,
    padding: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  TitleS: {

    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
  hi: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7039b6',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: '#2a3b47',
  },
  imageS: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 20,
  },
  imageP: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  imageTe: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
  },
  ds: {
    width: 200,
    height: 200,
  },
  bg: {
    backgroundColor: '#161b22',
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bg2: {
    backgroundColor: '#161b22',
    height: 200,
    width: '100%',
    alignItems: 'left',
    flexDirection: 'row',
    padding: 20,
  },
  txt: {
    color: '#60696d',
    marginBottom: 7,
    padding: 5,
  },
  txtS: {
    color: '#60696d',
    marginBottom: 7,
    padding: 28,
  },
  about: {
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  social: {
    flexDirection: 'row',
  },
  imageT: {
    width: '100%',
    height: 200,
  },
  icons:{
    width: 20,
    height: 20,
    margin: 15,
  },
  icons2:{
    width: 20,
    height: 20,
    marginTop:50,
    margin: 25,
  },
  section2: {
    marginBottom: 30,

  },
  skills: {
    flexDirection:'row',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    alignItems:'center',
    width: '100%',
  },
  tech: {
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    textAlign: 'center',
    marginBottom: 15,
    
  },
  port: {
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8, 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 15,
    width: '100%',
    flexDirection: 'row',
  }
});

export default MiCV;
