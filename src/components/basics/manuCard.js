import React from 'react';

const MenuCard = ({ apiObj }) => {

    return ( <
        >
        <section className = "main-card--cointainer">
    	{
            apiObj.map((cj) => {
            	const {id,name,category,description,image} = cj;
            	return (
                	<>
	                    <div className = "card-container">
							<div className = "card">
								<div className = "card-body">
									<span className = "card-number card-circle subtle">{id}</span>
									<span className = "card-author subtle">{category}</span>
									<h2 className = "card-title subtle">{name}</h2>
									<span className = "card-description subtle">{description}</span>
									<div className = "card-read">read</div>
								</div>
								<img src = {image} alt = "images" className = "card-media"></img>
								<span className = "card-tag subtle">Order now</span>
							</div>
						</div> 
					</>

            	)
            })
        }
        </section> <
        />
    )
}
export default MenuCard;