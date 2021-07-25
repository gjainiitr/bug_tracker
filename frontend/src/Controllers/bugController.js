import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];
    
    data.push(new bugModel({
        _id:23456789,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Gopal Jain",
        created:"Hugh Mongus",
        priority:1,
        time:"19:35"
    }));

    data.push(new bugModel({
        _id:23456754,
        name:"Won't Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Gopal Jain",
        created:"Hugh Mongus",
        priority:3,
        time:"19:35"
    }));

    let sorted = data.sort((a,b) => {return a.priority-b.priority}); 
    return sorted;
}