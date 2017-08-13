import Service from 'Lib/network';

/**
 * Class to communicate with LN API of Content Provider
 */
export default class LnService extends Service {
    init(url){
        super.init(url + '/ln');
    }

    createInvoice(){
        return this.get({
            url: this.url + '/addInvoice'
        }).then(response => {
            return response.response;
        })
    }

    checkInvoice(rHash){
        return this.get({
            url: this.url + '/checkInvoice/' + rHash
        }).then(response => {
            return response.response;
        })
    }
}