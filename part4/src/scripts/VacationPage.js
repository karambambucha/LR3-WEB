function getVacationPage(Vacation){
    let divWrapper = document.createElement("div");
    let divID = document.createElement("div");
    let divName = document.createElement("a");
    let divArea = document.createElement("div");
    let divEmployer = document.createElement("div");
    let divRequirements = document.createElement("div");

    divID.innerHTML = "ID вакансии: " + Vacation.id
    divArea.innerHTML = "Местоположение: " + Vacation.area
    divEmployer.innerHTML = "Работодатель: " + Vacation.employer
    divRequirements.innerHTML = "Зарплата: " + Vacation.salary.from + "-" + Vacation.salary.to + " " + Vacation.salary.currency
    divName.href = Vacation.vacationLink;
    divName.innerHTML = Vacation.name

    divWrapper.append(divID);
    divWrapper.append(divArea);
    divWrapper.append(divEmployer);
    divWrapper.append(divName);
    divWrapper.append(divRequirements);

    divWrapper.className = "border border-primary item div-wrapper"
    divID.className = "border border-secondary job-id"
    divName.className = "border border-secondary job-name"
    divArea.className = "border border-secondary job-area"
    divRequirements.className = "border border-secondary job-reqs"
    divEmployer.className = "border border-secondary job-employer"

    return divWrapper
}

module.exports = getVacationPage