function projectsCreation(input){
    let architectName = input[0];
    let projectsNumber = input[1];

    let timeForEndProject = projectsNumber * 3;

    console.log(`The architect ${architectName} will need ${timeForEndProject} hours to complete ${projectsNumber} project/s.`);

}
projectsCreation(['NIK0','5'])