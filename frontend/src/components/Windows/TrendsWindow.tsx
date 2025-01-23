export function TrendsWindow({entries}){
	return (
		<AreaChart
		h={300}
		data={entries}
		dataKey="day"
		series={[
			{ name: 'protein', color: 'indigo.6' },
			{ name: 'netcarbs', color: 'blue.6' },
			{ name: 'fat', color: 'teal.6' },
		]}
		curveType="linear"
		/>
	);
}