import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Calendar from './components/calendar/Calendar'
import CardHolder from './components/CardHolder/CardHolder'
import TaskAdderForm from './container/TaskAdderForm/TaskAdderForm'
import CardDetailsActions from './actions/CardDetailsActions'

export class KanbanBoard extends Component {
  constructor(props)
  {
      super(props)
      this.state={
        openTaskAdderForm:false,
        isUpdate:false,
        updateItem:{}
      }

  }

  openTaskAdder(){
    this.setState({openTaskAdderForm:true})
  }

  handleOnAddItem=()=> {
    this.setState((prevState, props) => ({
      openTaskAdderForm:!prevState.openTaskAdderForm
    }));    
  }

  updateCard = (item) => {
    console.log('update click -------')
    this.setState({
      updateItem: item,
      isUpdate:true
    })
  }

  updateCardDetails = (newCardDetails) => {
    this.props.updateCardDetails(this.state.updateItem,newCardDetails)
  }

  render() {
    console.log('props',this.props.Done)
    return(
      <div className="App">
        <CardHolder headerName="Planned" openModal={this.handleOnAddItem} data={this.props.Planned} updateCardDetails={this.updateCard} />
        <CardHolder headerName="Started" openModal={this.handleOnAddItem} data={this.props.Started} updateCardDetails={this.updateCard}/>
        <CardHolder headerName="Done" openModal={this.handleOnAddItem} data={this.props.Done} updateCardDetails={this.updateCard}/>
        {(this.state.openTaskAdderForm || this.state.isUpdate) &&
          <TaskAdderForm
            isUpdate={this.state.isUpdate}
            updateCardDetails={this.updateCardDetails}
            createNewCard={this.props.createNewCard}
          />
        }
      </div>
    );
  }
}
export function mapStateToProps(state) {
    return {
      Planned: state.CardDetails.Planned,
      Started: state.CardDetails.Started,
      Done: state.CardDetails.Done,
    }
}

export function mapDispatchToProps(dispatch) {
  return {
    createNewCard: function (cardDetails) {
      (CardDetailsActions.createNewCard(cardDetails)(dispatch))
    },
    updateCardDetails: function (item,cardDetails) {
      (CardDetailsActions.updateCardDetails(item,cardDetails)(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);
