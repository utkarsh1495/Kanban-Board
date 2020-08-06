import React, { Component} from 'react';
import ModalPopUp from '../../components/ModalPopUp/ModalPopUp'
import { isThisHour } from 'date-fns';
import { th } from 'date-fns/locale';
class TaskAdderForm extends Component{
    constructor(props){
        super(props)
        this.state={ 
            assigneeList:[{name:"Tyrion", id:1}, {name:"Jon", id:2}, {name:"Dolores", id:3}],
            statusList: [{name:"Planned", id:1}, {name:"Started", id:2}, {name:"Done", id:3}],
            cardDetails:{
               statusName:'',
               assigneeName:'',
               cardTitle:''
            },
            isOpen:props.isOpen
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.isOpen !== this.props.isOpen){
            this.setState({isOpen: this.props.isOpen})
        }
    }

    onInputChange=(listname,event)=>{
        const cardDetails={...this.state.cardDetails};
        switch(listname){
        case 'Assignee List':{
            cardDetails.assigneeName=event.target.value;
            this.setState({cardDetails:cardDetails});
            break;

        }
            
        case 'In List Started':{
            cardDetails.statusName=event.target.value;
            this.setState({cardDetails:cardDetails});
            break;
        }
     
    }
}

createNewCard=(date) => {
    const cardDetails = {
        Assignee:this.state.cardDetails.assigneeName,
        Duedate:date,
        CardTitle:this.state.cardDetails.cardTitle,
        Status: this.state.cardDetails.statusName
    }
    if(this.props.isUpdate){
        this.props.updateCardDetails(cardDetails)
    }
    else{
        this.props.createNewCard(cardDetails)
    }
}

onChange=(event)=>{
    let cardDetails={...this.state.cardDetails}
    cardDetails.cardTitle = event.target.value
    this.setState({cardDetails})
}

setOpen=()=> {
    this.props.handleModal()
}

    render(){
        console.log(this.state.cardDetails)
        return(
            <div>
                <ModalPopUp 
                    assigneeList={this.state.assigneeList} 
                    statusList={this.state.statusList}
                    onInputChange={this.onInputChange}
                    createNewCard={this.createNewCard}
                    onChange={this.onChange}
                    setOpen = {this.setOpen}
                    isOpen={this.state.isOpen}/>
               <h1>{JSON.stringify(this.state.statusWithAssigne)}</h1> 
            </div>
        )
    }
}

export default TaskAdderForm;