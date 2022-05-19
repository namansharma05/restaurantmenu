import React, {useState} from 'react';
import './styles.css';
import Menu from '../menuApi.js'
import MenuCard from './manuCard';
import NavBar from './NavBar';

const uniqueList = [
	...new Set(
		Menu.map((currele)=>{
			return currele.category;
		})
	),"All"
]

const Restaurant = () => {
	const [menuData, setMenuData] = useState(Menu);
	const [menuList,setMenuList] = useState(uniqueList);
	const filterItems = (category)=>{
		if(category === "All"){
			setMenuData(Menu);
		}else {
			const newList = Menu.filter((currele)=>{
				return currele.category === category;
			});
			setMenuData(newList);
		}
	}
    return ( 
    	<>
    		<NavBar filterItems = {filterItems} menuList = {menuList} />
        	<MenuCard apiObj = {menuData}/>
		</>
    )
}
export default Restaurant;