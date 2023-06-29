const url = 'https://streaming-availability.p.rapidapi.com/v2/get/basic?country=us&imdb_id=tt1877830&output_language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b8288340emsh49563d03d680f3dp1cd1b4jsnc18ca48273a1',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
// javascript