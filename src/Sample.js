import React, {Component} from 'react';
import './Sample.css'
import NavBar from './NavBar'
import QuickStart from './spreadContainer/QuickStart'
import SpreadSheetsCon from './spreadContainer/SpreadSheetsCon'
import WorkSheetCon from './spreadContainer/WorkSheetCon'
import ColumnCon from './spreadContainer/ColumnCon'
import DataBingingCon from './spreadContainer/DataBingingCon'
import StyleCon from './spreadContainer/StyleCon'
import OutlineCon from './spreadContainer/OutlineCon'

class Sample extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeIndex:0
        };
    }

    changeActiveIndex(index){
        this.setState({
            activeIndex:index
        })
    }

    render(){
        let spreadCom;
        switch (this.state.activeIndex){
            case 0:
                spreadCom = <QuickStart />;
                break;
            case 1:
                spreadCom = <SpreadSheetsCon />;
                break;
            case 2:
                spreadCom = <WorkSheetCon />;
                break;
            case 3:
                spreadCom = <ColumnCon />;
                break;
            case 4:
                spreadCom = <DataBingingCon />;
                break;
            case 5:
                spreadCom = <StyleCon />;
                break;
            case 6:
                spreadCom = <OutlineCon />;
                break;
            default:
                spreadCom = '';
                break;
        }
        return(
            <div className='app-container'>
                
                <div className="body-container">
                    <NavBar
                        activeIndex = {this.state.activeIndex}
                        changeActiveIndex={(index)=>{this.changeActiveIndex(index)}}
                    />
                    {spreadCom}
                </div>
                
            </div>
        )
    }
}



export default Sample