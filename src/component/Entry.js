import React from 'react';



class Entry extends React.Component{
    render() {
        return (
            <div className='term'>
              <div className='dt'>
                <span className='emoji'>{this.props.icon}</span>
                <span>{this.props.name}</span>

              </div>
              <div className='dd'>
                <span>{this.props.meaning}</span>
              </div>
            </div>
        
        )
      }
    }
    
    export default Entry;

