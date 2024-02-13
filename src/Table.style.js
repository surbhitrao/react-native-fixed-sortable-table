import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  columnHeaderName: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 100,
  },
  columnHeader: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 88,
  },
  columnHeaderTxt: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    color: 'black',
    fontFamily: 'RedHatDisplay-Bold',
  },
  columnRowTxt: {
    width: 88,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20,
    color: '#3C492C',
    height: 38,
    fontFamily: 'RedHatDisplay-Medium',
  },
  columnRowTxtName: {
    width: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#3C492C',
    height: 38,
    fontFamily: 'RedHatDisplay-Bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  tableHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  arrowImage: {
    height: 16,
    width: 16,
    top: 2,
  },
});

export default styles;
