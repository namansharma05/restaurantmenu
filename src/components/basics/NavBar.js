import react,{useState} from 'react';

const NavBar = ({filterItems, menuList})=>{
	return (
		<>
			<div className = "navbar">
				<div className = "btn-group">
					{
						menuList.map((currele)=>{
							return(
								<button className = "btn-group__item" 
								onClick = {()=>filterItems(currele)}>{currele}
								</button>
							)
						})
					}
				</div>
			</div>
		</>
		)
}
export default NavBar;