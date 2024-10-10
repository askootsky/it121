//Grade Calculator
//Written by: Austin Skootsky
//Written on: 10/10/24

    const grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

    //We split up our initial string into an array of strings of student/score pairs
    studentsAndScores = grades.split(", ");

    //We alphabetize the array of strings
    studentsAndScores.sort();

    //We declare two empty arrays that we will fill with the names and scores
    students = [];
    scores = [];

    //Next we iterate across our student/score array so we can separate
    //the names and the scores into two separate arrays.
    studentsAndScores.forEach(separate);

    function separate(item)
    {
        separation = item.split("|");
        students.push(separation[0]);
        scores.push(separation[1]);
    }

    //Next we capitalize all the names.
    for (let i = 0; i < students.length; i++)
    {
        students[i] = students[i].charAt(0).toUpperCase() + students[i].slice(1);
    }

    //Next we want to determine highest, lowest, and average scores, 
    //as well as count the number of students.
    lowest = parseInt(scores[0]);
    highest = parseInt(scores[0]);
    average = 0;
    totalStudents = students.length;

    for (let i = 1; i < scores.length; i++)
    {
        if (parseInt(scores[i]) < lowest)
        {
            lowest = parseInt(scores[i])
        }
    }

    for (let i = 1; i < scores.length; i++)
    {
        if (parseInt(scores[i]) > highest)
        {
            highest = scores[i]
        }
    }
    
    for (let i = 0; i < scores.length; i++)
    {
        average = (parseInt(scores[i]) + average);
    }

    average = (average / scores.length);