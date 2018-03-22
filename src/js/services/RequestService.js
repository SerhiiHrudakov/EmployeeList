/**
 * Created by Serhiy on 20.03.18.
 */

class RequestService {
	loadData(link, callBack) {
		fetch(link)
			.then(response => response.json())
			.then(data => callBack(data));
	}
}

export default new RequestService();
