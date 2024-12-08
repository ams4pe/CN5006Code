const dateofbirth = "25/01/2003";

const getStudentName = () => {
    return "Write your name here:"
}

const getCampusName = () => {
    return "UEL Docklands Campus"
}

exports.getCampusName = getStudentName
exports.location = getCampusName
exports.dob = dateofbirth

exports.studentgrade= (marks) => {
    if (marks > 50 && marks < 70) return "B grade"
    else "A grade"    
}

