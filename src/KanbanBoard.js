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
        planned: this.props.Planned,
        started: this.props.Started,
        done: this.props.Done
      }

  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps)
    console.log(this.props)
    return true;
  }
  
  static getDerivedStateFromProps(props, state){
    return {Done: true}
  }

  componentDidUpdate(prevProps){
    if(prevProps.Planned != this.props.Planned ){
      this.setState({planned: this.props.Planned})
    }
    if(prevProps.Done != this.props.Done ){
      this.setState({done: this.props.Done})
    }
    if(prevProps.Started != this.props.Started ){
      this.setState({started: this.props.Started})
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

  updateCardDetails(){
    
  }

  render() {
    console.log('props',this.props.Done)
    return(
      <div className="App">
        <CardHolder headerName="Planned" openModal={this.handleOnAddItem} data={this.props.Planned} updateCardDetails={this.updateCardDetails} />
        <CardHolder headerName="Started" openModal={this.handleOnAddItem} data={this.props.Started}/>
        <CardHolder headerName="Done" openModal={this.handleOnAddItem} data={this.props.Done}/>
        {this.state.openTaskAdderForm &&
          <TaskAdderForm
            updateCardDetails={this.props.updateCardDetails}
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
    updateCardDetails: function (cardDetails) {
      dispatch(CardDetailsActions.updateCardDetails(cardDetails))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);
