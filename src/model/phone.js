class Phone {
    constructor(DDD, number, type) {
        this.DDD = DDD;
        this.number = number;
        this.type = type;
    }

    formatPhone() {
        return `(${ this.DDD }) ${ this.number }`
    }
}
