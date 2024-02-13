import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Table from './src/Table';
import sampleData from './data/tableData';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Table data={sampleData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
