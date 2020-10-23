import React, { useState, useRef, memo, useEffect } from 'react';
import List from './component/list'
import AppScroll from './component/AppScroll'
import cityList from './city'
import './style/common.scss'
import { useCallback } from 'react';
function CitySelect(props) {
  const [active, setActive] = useState('A')
  const [city, setCity] = useState(props.city || cityList)
  const [io, setIo] = useState(null)
  const refMap = useRef({})
  const refCb = useCallback((el) => {el && ( refMap.current[el.innerText] = el)},[])
  useEffect(() => {
    var _io = new IntersectionObserver(
      entries => {
        let current = ""
        let arr = entries.filter(item => item.intersectionRatio)
        for (let index = arr.length - 1; index >= 0; index--) {
          if (arr[index].intersectionRatio) {
            current = arr[index].target.classList[1]
            break;
          }
        }
        (active !== current && current) && setActive(current)
      }
    );
    setIo(_io)
    return () => {
    }
  }, [])
const handleSelected  =  useCallback(
    (item) => {
      
        typeof props.citySelect === 'function' &&  props.citySelect(item)
    },
    [props.selected],
  )
  const bs = useRef(null)
  return (
    <div className="CitySelect" id="CitySelect">
      <AppScroll className="citySelect-list-wrap" ref={bs}>
        <div className="citySelect-container">
          {
            Object.entries(city.letterMap).map(([key, val]) => <List title={key} city={val} key={key} className={key} io={io} ref={refCb} select={handleSelected} ></List>)
          }   
        </div>
      </AppScroll>
      <div className="citySelect-nav-right">
        {
          Object.entries(city.letterMap).map(([key, val]) => <div
            className={active === key ? "active" : ""}
            key={key} onClick={(ev) => {
              setActive(key)
              
              bs.current.bs.scrollToElement(refMap.current[key], 0)
            }}  >{key}</div>)
        }
      </div>
    </div>
  );
}
export default memo(CitySelect);
