import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: 'green'  }}>
          <Text>Search</Text>
        </View>
        <View style={{ flexGrow: 1,  padding: 16, backgroundColor: 'blue'}}>
          <Text>List</Text>
        </View>
        <ExpoStatusBar style='auto'/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
