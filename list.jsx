import React,{useEffect,useRef,memo} from 'react'
import './style/list.scss'
export default memo(React.forwardRef((props,ref)=> {
    
    const { title ,city,className} = props
    
    const listRef = useRef(null)
    useEffect(() => { 
        if(props.io){   
            props.io.observe(listRef.current)
        }
      
        return () => {
            if(props.io){
                props.io.unobserve(listRef.current)
            }           
        }
    }, [props.io])

    return (
        <div className={"citySelect-city-list " + className} ref={listRef} >
            <h1 className="citySelect-city-tit" ref={ref} >{title}</h1>
            <ul>
                {
                    city.map(item => <li key={item.id}  onClick={()=>{
                       props.select(item)
                    }}>{item.chineseFullnm}</li>)
                }
            </ul>
        </div>
    )
}))
