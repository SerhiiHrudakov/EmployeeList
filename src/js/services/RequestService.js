/**
 * Created by Serhiy on 20.03.18.
 */

class RequestService {
	loadData(link) {
		var xhttp = new XMLHttpRequest();

		fetch(link)
			.then(response => response.json())
			.then(data => this.setState({ hits: data.hits }));

		xhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
				return this.response;
			} else {
				return {message:'no data loaded'};
			}
		};

		xhttp.open("GET", link, true);
		xhttp.send();
	}
}

export default new RequestService();