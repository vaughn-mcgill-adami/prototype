export function RefreshButton( {onClick} ){
	return (
		<Button
			onClick={onClick} 
			//variant={name === currentPage ? 'light' : 'transparent'}
			//color={name === currentPage ? '#ffa94d' : '#fff3bf'}
		>
			<img src={refresh}/>
		</Button>
	)
}