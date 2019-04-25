class ContactView {
    constructor() {
        this.contacts = ko.observableArray([]);
        this.contactController = new ContactController();
    }

    setObservable() {
        this.contactController.getContact(( {contacts} ) => {

            contacts.forEach((contact) => {
                let person = new Person(contact.person.name, contact.person.birthDate);
                let phone = new Phone(contact.phone.DDD, contact.phone.number, contact.phone.type);
                let cellPhone = new Phone(contact.cellPhone.DDD, contact.cellPhone.number, contact.cellPhone.type);
                
                this.contacts.push(new Contact(person, phone, cellPhone));
            });
            
            ko.applyBindings({
                "contacts": this.contacts
            });
        });
    }
}
