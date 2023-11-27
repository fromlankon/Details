import React, {useRef} from "react";

function Search({setQuery}) {
    const input = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault()
      setQuery(input.current.value);
    };
    return (
        <div className='search'>
            <div className="searchMain">
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Type your text..." ref={input}/>
                        <button type="submit"> <i className = "fa-solid fa-magnifying-glass"></i> </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search