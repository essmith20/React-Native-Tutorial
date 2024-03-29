import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


import EditScreenInfo from '@/components/EditScreenInfo';

import Colors from '@/constants/Colors';
import products from '../products';
import ProductListItem from '@/components/ProductListItem';




 
 

export default function MenuScreen() {
  return(
    <FlatList
      data={products} 
      renderItem= {({item}) => <ProductListItem product={item
      } 
      />}
      numColumns={2} 
      contentContainerStyle={{gap: 10, padding:10}}
      columnWrapperStyle={{gap: 10}}

      />
     

  
  
    );
}
  
  

