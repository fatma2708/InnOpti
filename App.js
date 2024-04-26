import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, TouchableOpacity, Image, TextInput, Text } from 'react-native';

export default function App() {
  const [showImage, setShowImage] = useState(true);
  const [firstTouch, setFirstTouch] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [TopRightbuttonPressed, setTopRightButtonPressed] = useState(false);
  const [BottomRightbuttonPressed, setBottomRightButtonPressed] = useState(false);
  const [TopLeftbuttonPressed, setTopLeftButtonPressed] = useState(false);
  const [BottomLeftbuttonPressed, setBottomLeftButtonPressed] = useState(false);
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleButtonPressLeftTop = () => {
    setTopLeftButtonPressed(true);
    setShowImage(true);
    console.log("topleft is pressed");
  };
  
  const handleButtonPressRightTop = () => {
    setTopRightButtonPressed(true);
    setShowImage(false);
  };
  
  const handleButtonPressLeftBottom = () => {
    setBottomLeftButtonPressed(true);
    setShowImage(false);
  };
  
  const handleButtonPressRightBottom = () => {
    setBottomRightButtonPressed(true);
    setShowImage(false);
  };
  
  const handleFirstTouch = () => {
    if (firstTouch) {
      setFirstTouch(false);
      console.log("Navigating to new page");
    }
  };

  const handleButtonPress = () => {
    setButtonPressed(true);
    setShowImage(false); 
  };

  const handleImagePress = () => {
    setButtonPressed(false);
    setShowImage(true); 
  };

  const handleBackPress = () => {
    setButtonPressed(false);
    setShowImage(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container} onTouchStart={handleFirstTouch}>
        {/* Render content based on firstTouch and buttonPressed */}
        {firstTouch ? (
          <Image
            source={require('./assets/innopti 1.png')}
            style={styles.image}
          />
          
        ) : (
          
          <View style={styles.content}>
            {buttonPressed ? (
              <>
                <Image
                  source={require('./assets/innopti 2.png')} // Change this to your image source
                  style={styles.minilogo}
                />
                <Text style={styles.welcometext}>Bonjour Fatma</Text>
                <Image
                  source={require('./assets/innp.png')} // Change this to your image source
                  style={styles.lunettes}
                />
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                  <Image
                    source={require('./assets/Back.png')} // Replace this with your image source
                    style={styles.back}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPressLeftTop} style={styles.backButton}>
                  <Image
                    source={require('./assets/cc.png')} // Replace this with your image source
                    style={styles.dashboardbuttontopleft}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPressRightTop} style={styles.backButton}>
                  <Image
                    source={require('./assets/ts.png')} // Replace this with your image source
                    style={styles.dashboardbuttontopright}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPressLeftBottom} style={styles.backButton}>
                  <Image
                    source={require('./assets/mc.png')} // Replace this with your image source
                    style={styles.dashboardbuttonbottomleft}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPressRightBottom} style={styles.backButton}>
                  <Image
                    source={require('./assets/ep.png')} // Replace this with your image source
                    style={styles.dashboardbuttonbottomright}
                  />
                </TouchableOpacity>
                <Text style={styles.habittext}>Habit tracker</Text>
                <Image
                  source={require('./assets/Habits.png')} // Replace this with your image source
                  style={styles.habittracker1}
                />
                <Image
                  source={require('./assets/Habits-1.png')} // Replace this with your image source
                  style={styles.habittracker2}
                />
                <TouchableOpacity onPress={handleButtonPressRightBottom}>
                  <Image
                    source={require('./assets/habit.png')} // Replace this with your image source
                    style={styles.habitbutton}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                
                <Image
                  source={require('./assets/innopti 1.png')}
                  style={styles.image}
                />
                <Text style={styles.createprofile}>Créer un profil d’utilisateur</Text>

                <TextInput
                  style={styles.inputfield}
                  onChangeText={text => setPseudo(text)}
                  value={pseudo}
                  placeholder="Pseudo"
                />
                <TextInput
                  style={styles.inputfield}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.inputfield}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  placeholder="Mot de passe"
                  secureTextEntry={true}
                />
                <TextInput
                  style={styles.inputfield}
                  onChangeText={text => setAge(text)}
                  value={age}
                  placeholder="Age"
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={handleButtonPress}>
                  <Image
                    source={require('./assets/continuer.png')}
                    style={styles.button2}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 90,
    width: 200,
    height: 200,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%', // Ensure that the content is at least as tall as the screen
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: -10,
  },
  back:{
    height:50,
    width:50,
  },
  inputfield:{
    width:327,
    height:53,
    marginBottom:35,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#DDDDDD', // Light border color
    padding: 10,
    
  },
  createprofile:{
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 35,
    marginTop:-35,
  },
  minilogo:{
    width:96,
    height:82,
    top: -360,
    left: -150,
    marginTop:-150,
  },
  welcometext:{
    fontSize:20,
    top: -360,
    left: -120,
    marginBottom:-80,
  },
  lunettes:{
    width:378,
    height:105,
    marginTop:-250,
  },
  dashboardbuttontopleft:{
    position: 'absolute',
    top: '85%', // Adjusted position
    left: '35%', // Adjusted position
    transform: [{ translateX: 30 }, { translateY: 330 }], // Adjusted values
    height: 108,
    width: 145,
  },
  dashboardbuttontopright:{
    position: 'absolute',
    top: '85%', // Adjusted position
    left: '65%', // Adjusted position
    transform: [{ translateX: 210 }, { translateY: 330 }], // Adjusted values
    height: 108,
    width: 145,
  },
  dashboardbuttonbottomleft:{
    position: 'absolute',
    top: '95%', // Adjusted position
    left: '35%', // Adjusted position
    transform: [{ translateX: 30 }, { translateY: 480 }], // Adjusted values
    height: 108,
    width: 145,
  },
  dashboardbuttonbottomright:{
    position: 'absolute',
    top: '95%', // Adjusted position
    left: '65%', // Adjusted position
    transform: [{ translateX: 210 }, { translateY: 480 }], // Adjusted values
    height: 108,
    width: 145,
  },
  habittext:{
    fontSize:16,
    position:'absolute',
    top: '95%', 
    transform: [ { translateY: -230 }],
    fontWeight: 'bold',
    color:'#45B5FE'
  },
  habittracker1:{
    width:325,
    height:108,
    position:'absolute',
    top: '95%', 
    transform: [ { translateY: -200 }],
  },
  habittracker2:{
    width:325,
    height:108,
    position:'absolute',
    top: '95%', 
    transform: [ { translateY: -80 }],
  },
  habitbutton:{
    width:231,
    height:44,
    transform: [ { translateY: 600 }],
  },
});
