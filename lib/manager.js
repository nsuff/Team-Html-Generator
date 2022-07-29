const employee = require("./employee");

class manager extends employee{
    constructor (name, id, email, officenumber) {
        super (name, id, email);
        this.officenumber = officenumber;
    };

    getRole() {
        return "Manager";
    };

};

module.exports = manager;