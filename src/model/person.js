class Person {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = new Date(birthDate);
    }

    formatDate() {
        return `${ this.birthDate.getDay() }/${ this.birthDate.getDate() }/${this.birthDate.getFullYear()}`
    }
}