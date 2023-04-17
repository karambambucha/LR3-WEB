class VacationModel {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.area = data.area.name;
        this.employer = data.employer.name;
        this.vacationLink = data.alternate_url;
        this.salary = data.salary;
    }
}

module.exports = VacationModel