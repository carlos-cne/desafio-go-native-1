import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.90' }) // usei um aparelho android
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;
  tron.clear();
}
