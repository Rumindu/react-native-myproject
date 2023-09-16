* Using *UseState* hook.
```js
import React, { useState } from 'react'; //importing useState react hook
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //adding state
  const [denName, clickKaramaNama] = useState('Rumindu');//name is assigning value "Rumindu"

  const clickKaranna = () => {
    clickKaramaNama('Kavishka'); //updating name 
  };
  return (
    <View style={styles.container}>
      {/*Displaying name */}
      <Text>My name is {denName}</Text>
      <View>
        {/*onPress calling 'clickKaranna' function */}
        <Button title='Click Karanna' onPress={clickKaranna} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});
```
<hr>
* There can be multiple state
* Passing object 
```js
import React, { useState } from 'react'; //importing useState react hook
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //adding state
  const [denName, clickKaramaNama] = useState('Rumindu');//name is assigning value "Rumindu"

  //pass object intend of string
  const [person, setPerson] = useState({ name: 'mario', age: 40 });

  const clickKaranna = () => {
    clickKaramaNama('Kavishka'); //updating name usin
    setPerson({ name: 'Kavindu', age: 50 });
  };
  return (
    <View style={styles.container}>
      {/*Displaying */}
      <Text>My name is {denName}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View>
        {/*onPress calling 'clickKaranna' function */}
        <Button title='Click Karanna' onPress={clickKaranna} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});

```