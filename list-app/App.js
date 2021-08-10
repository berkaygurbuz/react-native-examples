import React,{useState} from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";
import Header from './components/header';
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem"
import {uuid} from "uuidv4";



const App = () => {
  const [items,setItems]=useState([
    {id:uuid(),text:"Milk"},
    {id:uuid(),text:"Eggs"},
    {id:uuid(),text:"Bread"},
    {id:uuid(),text:"Juice"},


  ]);

  const deleteItem=(id)=>{
    setItems(prevItems=>{
      console.log("prev item is :",prevItems)
      return prevItems.filter(item=>item.id!=id);
    })
  }

  const addItem=text=>{
    setItems(prevItems=>{
      console.log("text is : ",text);
      return [{id:uuid(),text:text}, ...prevItems]
    });
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
  
  },

})

export default App;
