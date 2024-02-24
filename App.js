import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <StatusBar hidden={true} />
          <RecoilRoot>
            <SafeAreaProvider>
              <AuthProvider AuthComponent={AuthScreen}>
                <RootRouter />
              </AuthProvider>
            </SafeAreaProvider>
          </RecoilRoot>
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
