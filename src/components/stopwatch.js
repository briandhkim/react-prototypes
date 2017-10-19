import React, {Component} from 'react';
import Time from './format_time';

class Stopwatch extends Component{
	constructor(props){
		super(props);
		this.state ={
			status : 'stopped',
			start : null,
			elapsed : 0
		};
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
		this.update = this.update.bind(this);
	};

	render(){
		const {status, elapsed} = this.state;
		return(
			<div className="jumbotron">
				<h1 className="display-3"> <Time elapsed={elapsed}/> </h1>
				<hr className="my-3"/>
				<p className="lead text-center"> {status} </p>
				<button className="btn btn-outline-success mx-3" onClick={this.start}>start</button>
				<button className="btn btn-outline-danger mx-3" onClick={this.stop}>stop</button>
				<button className="btn btn-outline-warning mx-3" onClick={this.reset}>reset</button>
			</div>
		)
	};

	start(){
		this.setState({
			status : 'running',
			start : new Date().getTime()
		});
		setTimeout(this.update, 10);
	};
	stop(){
		this.setState({
			status : 'stopped'
		});
	};
	reset(){
		this.setState({
			status : 'stopped',
			start : null,
			elapsed : 0
		});
	};

	update(){
		const{status, start} = this.state;
		if(status=='running'){
			this.setState({
				elapsed : new Date().getTime() - start
			});
			setTimeout(this.update,10);
		}
	};
}

export default Stopwatch;