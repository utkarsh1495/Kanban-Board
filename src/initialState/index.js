let Planned = [{
    Assignee:"Tyrion",
    Duedate:"12/09/2020",
    CardTitle:"GST filing flow",
    Status: "Planned"
},
{
    Assignee:"Jon",
    Duedate:"12/09/2020",
    CardTitle:"GST filing flow",
    Status: "Planned"
}]

let Started = [
    {
        Assignee:"Jon",
        Duedate:"12/09/2020",
        CardTitle:"Metrics Dashboard",
        Status: "Started"
    },
    {
        Assignee:"Tyrion",
        Duedate:"12/09/2020",
        CardTitle:"Error Dashboard",
        Status: "Started"
    },
    {
        Assignee:"Dolores",
        Duedate:"12/09/2020",
        CardTitle:"Advance Return flow",
        Status: "Started"
    }
]

let Done = [
    {
        Assignee:"Dolores",
        Duedate:"12/09/2020",
        CardTitle:"Analytics Dashboard",
        Status: "Done"
    }
]

export default function getInitState(){
    return {
        Planned,
        Started,
        Done
    }
}