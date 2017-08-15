import React, {PropTypes} from 'react';


class MovSelect extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(events){
         console.log("Movies select handleChange")
        console.log(events.target.value);
        //Wrong Impe
        this.props.onSelectYear(events.target.value)
    }
          
    render() {
        // console.log("this.props === = == =   ");
        // console.log(this.props.movYear);
        if(this.props.movYear == undefined) {
            return false;
        }
       
        return (
            // <div>Select</div>
            <select onChange={(e) => this.handleChange(e)} className="list-group">
                { 
                this.props.movYear.map(yer => 
                <option className="list-group-item" value={yer} key={yer}> {yer} </option>
                )}
            </select>
        );
    }
}


MovSelect.propTypes = {  
   year: PropTypes.array.isRequired
};

export default MovSelect; 