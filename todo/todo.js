import React, { Component } from 'react';
class Darshit extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      task:[{name:"Gajjar"}],
      update:"",
    }
    this.task=this.task.bind(this);
    this.addtask=this.addtask.bind(this);
    this.change=this.change.bind(this);
    this.delete=this.delete.bind(this);
    this.editask=this.editask.bind(this);
  }
  task()
  {
    this.setState({
      task:this.state.task,
    })
  }
  addtask(newValue)
  {
    this.setState({
      update:newValue.target.value,//target value use value leva mate thay
    })
  }
  change(event)
  {
      event.preventDefault();
     let task=this.state.task;
     let update=this.state.update;
     task.push({
       name:update,
     })
     this.setState({
       task:task,
     })
  }
  delete(index)
  {
    let task=this.state.task;
    task.splice(index,1);
    this.setState({
      task:task
    })
  }
  editask(array,vaue)
  {
    var tasks=this.state.task;
    var task=tasks[array];
    task['name']=vaue;
  }
  render()
  {
    return(
        <div>
         <form onSubmit={this.change}>
          <h1 align="center">I am Gajjar Darshit todo app</h1>
          <input type="text" class="text" value={this.state.update} onChange={this.addtask}/>
          <button type="button" onClick={this.change} class="ks">Submit</button>
         <h1 class="lk">my daily challange</h1>  
         </form>
         <ul class="hp">
          {
            this.state.task.map((name,i)=>{
             return  <Todo key={name.name} name={name} editask={this.editask} delete={this.delete} index={i}/>
           })

          }
         </ul>
        </div>
    );
  }
}
class Todo extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      Edit:false,
    }
    this.reactfrom=this.reactfrom.bind(this);
    this.reactprint=this.reactprint.bind(this);
    this.toggle=this.toggle.bind(this);
    this.updatechange=this.updatechange.bind(this);
  }
  toggle()
  {
    let {Edit}=this.state;
    this.setState({
      Edit:!Edit,
    })
  }
  updatechange(eve)
  {
    eve.preventDefault();
    this.props.editask(this.props.index,this.input.value);
    this.toggle();
  }
  reactfrom()
  {
    return(
      <form onSubmit={this.updatechange}>
        <section>
          <input type="text" ref={(value)=>{this.input=value}}defaultValue={this.props.name.name}/>
          <button type="submit" onClick={this.updatechange}>update item</button>
        </section>
      </form>
      )
  }
  reactprint()
  {
    return(
                <li>
                 {this.props.name.name}
                   <button type="button" onClick={(event)=>{event.stopPropagation();this.props.delete(this.props.index)}}>remove</button>
                   <button type="button" onClick={(event)=>{event.stopPropagation();this.toggle()}}>edit</button>
                </li>
      )
  }
  render()
  {
    let {Edit}=this.state;
    return(
        <div>
        <section>
            {
              Edit?this.reactfrom():this.reactprint()
            }
            </section>
        </div>
    );
  }
}
export default Darshit;