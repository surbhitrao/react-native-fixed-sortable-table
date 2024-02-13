import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import _ from 'lodash';
import styles from './Table.style';

function Table({data}) {
  const scrollableColumns = useMemo(
    () => [
      'Sales',
      'Revenue',
      'Cost',
      'Profit',
      'Inventory',
      'Rating',
      'Category',
      'Supplier',
      'Margin',
    ],
    [],
  );
  const fixedColumn = useMemo(() => ['Name'], []);
  const [direction, setDirection] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const sortTable = useCallback(
    column => {
      const newDirection = direction === 'desc' ? 'asc' : 'desc';
      const sortedData = _.orderBy(
        tableData,
        [column.toLowerCase()],
        [newDirection],
      );
      setSelectedColumn(column);
      setDirection(newDirection);
      setTableData(sortedData);
    },
    [direction, tableData],
  );

  const arrowRotation = useMemo(
    () => ({
      transform: [{rotate: direction === 'desc' ? '270deg' : '90deg'}],
    }),
    [direction],
  );

  const renderTableHeader = useCallback(
    (columns, isFixedHeader) => (
      <View style={styles.tableHeader}>
        {columns.map((column, index) => (
          <TouchableOpacity
            key={index}
            style={
              isFixedHeader ? styles.columnHeaderName : styles.columnHeader
            }
            onPress={() => sortTable(column)}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.columnHeaderTxt}>{column + ' '}</Text>
              {selectedColumn === column && (
                <Image
                  style={[styles.arrowImage, arrowRotation]}
                  source={require('../assets/images/arrow.png')}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    ),
    [arrowRotation, selectedColumn, sortTable],
  );

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <FlatList
          data={tableData}
          ListHeaderComponent={renderTableHeader(fixedColumn, true)}
          keyExtractor={(item, index) => index + ''}
          renderItem={({item}) => {
            return (
              <View style={styles.rowContainer}>
                <Text style={styles.columnRowTxtName}>{item.name}</Text>
              </View>
            );
          }}
        />

        <ScrollView horizontal>
          <FlatList
            data={tableData}
            keyExtractor={(item, index) => index + ''}
            ListHeaderComponent={renderTableHeader(scrollableColumns, false)}
            renderItem={({item}) => {
              return (
                <View style={styles.rowContainer}>
                  <Text style={styles.columnRowTxt}>{item.sales}</Text>
                  <Text style={styles.columnRowTxt}>{item.revenue}</Text>
                  <Text style={styles.columnRowTxt}>{item.cost}</Text>
                  <Text style={styles.columnRowTxt}>{item.profit}</Text>
                  <Text style={styles.columnRowTxt}>{item.inventory}</Text>
                  <Text style={styles.columnRowTxt}>{item.rating}</Text>
                  <Text style={styles.columnRowTxt}>{item.category}</Text>
                  <Text style={styles.columnRowTxt}>{item.supplier}</Text>
                  <Text style={styles.columnRowTxt}>{item.margin}</Text>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default Table;
