import {useEffect,useRef} from "react"



function useOutsideAlerter(ref:any) {
    useEffect(() => {
      
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  export default function OutsideAlerter(props:any) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
  
    return <div ref={wrapperRef}>{props.children}</div>;
  }
  