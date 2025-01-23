export function Menu({buttonNameList, stateChanger, activeButton}){
	return (
		<>
		{
			buttonNameList.map(
				(name) => 
				<MenuButton 
					onClick={() => {
						stateChanger(name);
					}} 
					name={name} 
					currentPage={activeButton}
				/>
			)
		}
		</>
	)
}