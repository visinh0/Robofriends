import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
return (
<div>
 <input 
 	className='pa3 ba b--green bg-lightest-blue'
	type='searcg' 
	placeholder='search robot' 
	onChange={searchChange}
 />
</div>
	);
}

export default SearchBox;
