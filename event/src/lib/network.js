import querystring from 'querystring';

/**
 * Base class for network requests
 */
export default class Service {
    init(url) {
        this.url = url;
    }

    static Methods = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        PATCH: 'PATCH',
        DELETE: 'DELETE'
    };

    static getBaseUrl(url) {
        const
            split = url.split('://'),
            protocol = split[0],
            appUri = split[1],
            baseUri = appUri.substr(4);
        return protocol + '://' + baseUri;
    }

    static parseJSON(data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }

    constructRequest({method = Service.Methods.GET, headers = {}, url = this.url, params = {}}) {
        params.uid = Math.random().toString(16).slice(8);
        url += '?' + querystring.stringify(params);

        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.withCredentials = true;

        for (let headerType in headers) {
            if (headers.hasOwnProperty(headerType)) {
                xhr.setRequestHeader(headerType, headers[headerType]);
            }
        }

        return xhr;
    }

    sendRequest(xhr, data) {
        return new Promise((resolve, reject) => {
            xhr.onload = () => {
                return xhr.status >= 200 && xhr.status < 300 ?
                    resolve(Service.parseJSON(xhr.responseText)) :
                    reject(this._composeError.call(xhr));
            };

            xhr.onerror = () => reject(this._composeError.call(xhr));

            if (data) {
                const body = data instanceof FormData || data instanceof Blob
                    ? data : JSON.stringify(data);
                xhr.send(body);
            } else {
                xhr.send();
            }
        });
    }

    get(config) {
        const xhr = this._makeShortMethod(Service.Methods.GET, config);
        return this.sendRequest(xhr);
    }

    post({body, ...restConfig}) {
        const xhr = this._makeShortMethod(Service.Methods.POST, restConfig);
        return this.sendRequest(xhr, body);
    }

    put({body, ...restConfig}) {
        const xhr = this._makeShortMethod(Service.Methods.PUT, restConfig);
        return this.sendRequest(xhr, body);
    }

    patch({body, ...restConfig}) {
        const xhr = this._makeShortMethod(Service.Methods.PATCH, restConfig);
        return this.sendRequest(xhr, body);
    }

    delete(url = this.url) {
        const xhr = this._makeShortMethod(Service.Methods.DELETE, {url});
        return this.sendRequest(xhr);
    }

    _composeError() {
        let error = new Error();

        error.code = this.responseCode;
        error.status = this.responseStatus;
        error.message = Service.parseJSON(this);

        return error;
    }

    _makeShortMethod(method, config = {}) {
        return this.constructRequest({
            method,
            ...config
        });
    }
}