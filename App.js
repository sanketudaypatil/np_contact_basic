import React, {useEffect, useState} from 'react';
import {FlatList, Image, PermissionsAndroid, Text, TouchableOpacity, View} from 'react-native';
import Contact from 'react-native-contacts';




const App = () => {
  
  const [contactList, setContactList] = useState( [{
    name:"sanket Patil",
    contact:"8530880988",
    email:"sanketudaypatil@gmail.com"
  },
  { name:"swapnil Patil",
  contact:"8530881092",
  email:"swapnil@gmail.com"
  
  },{
    name:"gaurav Patil",
    contact:"9373680220",
    email:"gaurav@gmail.com"
  }, 
{
  name:"Vishal Patil",
    contact:"9823721928",
    email:"Vishal@gmail.com"
}]);
 

  
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '90%',
                height: 70,
                alignSelf: 'center',
                borderWidth: 0.5,
                borderColor: '#fff',
                borderRadius: 10,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('./src/Images/user.png')}
                  style={{width: 40, height: 40, marginLeft: 15}}
                />
                <View style={{padding: 10}}>
                  <Text style={{color: '#fff'}}>{item.name}</Text>
                  <Text style={{color: '#fff', marginTop: 4}}>
                    {item.contact}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingRight: 15}}>
                <TouchableOpacity
                  >
                  <Image
                    source={require('./src/Images/message.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: '#fff',
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  >
                  <Image
                    source={require('./src/Images/call.png')}
                    style={{width: 20, height: 20, tintColor: '#fff'}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#fff',
          position: 'absolute',
          right: 30,
          bottom: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <Image
          source={require('./src/Images/call.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
