import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class AppScroll extends Component {
    componentDidMount() {
        this.bs = new BetterScroll('.appScrollWrap', {
          scrollX:false,
          scrollY:true,
          click:true,
          tap:true
        })
        this.bs.on('scrollStart',()=>{        
            this.bs.refresh()
        })
    }
    render() {
        return (
            <div className={"appScrollWrap " + this.props.className}>
                <div className="bs_wrap" >
                {this.props.children}
                </div>
            </div>
        )
    }
}
