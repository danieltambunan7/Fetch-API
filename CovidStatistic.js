const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '917759ae6amshda40f8ea9a02f18p1f2004jsnc2ff06a31e3a',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
const getData = async () => {
  const res = await fetch('https://covid-193.p.rapidapi.com/statistics', options)
  const { response } = await res.json()
  addData(response)
}

getData()

const addData = (response) => {
  const sortedCases = response.sort((a, b) => b.cases.total - a.cases.total) .slice(1,20);

  let tab = 
      `<tr>
        <th>Continent</th>
        <th>Country</th>
        <th>Total Deaths</th>
        <th>Total Cases</th>
        <th>Population</th>
       </tr>`

  // Loop to access all rows
  for (let r of sortedCases) {
    tab += 
  `<tr> 
  <td>${r.continent}</td>
  <td>${r.country}</td>
  <td>${r.deaths.total}</td>
  <td>${r.cases.total}</td>    
  <td>${r.population == null ? "not found" : r.population}</td>       
  </tr>`
  }

  tabel.border='2px';

  // Setting innerHTML as tab variable
  document.getElementById('tabel').innerHTML = tab
}

const judul = document.getElementById('judul');
judul.style.textAlign='center';