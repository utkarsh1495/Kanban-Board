let Planned = [{
    Assignee:"Tyrion",
    Duedate:"12/09/2020",
    CardTitle:"GST filing flow",
    Status: "Planned",
    id:1
},
{
    Assignee:"Jon",
    Duedate:"12/09/2020",
    CardTitle:"GST filing flow",
    Status: "Planned",
    id:2
}]

let Started = [
    {
        Assignee:"Jon",
        Duedate:"12/09/2020",
        CardTitle:"Metrics Dashboard",
        Status: "Started",
        id:3
    },
    {
        Assignee:"Tyrion",
        Duedate:"12/09/2020",
        CardTitle:"Error Dashboard",
        Status: "Started",
        id:4
    },
    {
        Assignee:"Dolores",
        Duedate:"12/09/2020",
        CardTitle:"Advance Return flow",
        Status: "Started",
        id:5
    }
]

let Done = [
    {
        Assignee:"Dolores",
        Duedate:"12/09/2020",
        CardTitle:"Analytics Dashboard",
        Status: "Done",
        id:6
    }
]

export default function getInitState(){
    return {
        Planned,
        Started,
        Done
    }
}