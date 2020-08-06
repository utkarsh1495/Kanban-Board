import React from 'react'
import './CardHolder.css';
import KanbanCard from '../Card/Card'
import TaskAdder from '../TaskAdder/TaskAdder'
class CardHolder extends React.Component {
    render(){
    return (
        <div className='CardHolder'>
            <div className="Header">
                <h1>{this.props.headerName}</h1>
            </div>
            <div className="CardHolderBody">
                {this.props.data.map((item) => (
                    <KanbanCard updateCardDetails={() => this.props.updateCardDetails(item)} cardTitle={item.CardTitle} dueDate={item.Duedate} assignee={item.Assignee} />
                ))
                }
                {/* <KanbanCard cardTitle="GST Filing Flow" dueDate="12/12/2020" assignee="Jon" />
                <KanbanCard cardTitle="ITR Filing Flow" dueDate="12/10/2020" assignee="Tyrion" />
                <KanbanCard cardTitle="ITR Filing Flow" dueDate="12/10/2020" assignee="Tyrion" /> */}
                <TaskAdder openModal={this.props.openModal} />
            </div>
        </div>
    )
}
}

export default CardHolder