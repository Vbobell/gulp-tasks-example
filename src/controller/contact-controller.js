class ContactController {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    getContact(callback) {
        this.xhr.open('GET', "/node-knockout-example/static/contacts.json", true);

        this.xhr.onload = () => {
            this.xhr.status === 200 ? 
            console.log(this.xhr.response) :
            console.error('error');

            return callback(JSON.parse(this.xhr.response));
        };

        this.xhr.send();
    }
}