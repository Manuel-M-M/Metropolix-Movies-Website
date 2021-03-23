import {useContext, useState, useEffect} from "react";
import { Context } from '../../context/Context';
import './Searcher.css';
import '../modalSearchs/ModalSearchs.css';
import ModalSearchs from '../modalSearchs/ModalSearchs';


function Searcher () {

    const { setSearchArray, show, setShow } = useContext(Context);
    const [searchPath, setSearchPath] = useState('http://localhost:8000/getMovies?page=1');
    
    useEffect(() => {
        
        fetch(searchPath)
            .then(response => {              
                if (!response.ok) {
                    throw new Error("Algo no funciona...");
                }
                return response.json();
            })
            .then(data => {
                setSearchArray([...data]);                  
            })
            .catch(error => alert("Algo no funciona correctamente..."))
    }, [searchPath]);
    

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            setShow(true);
            setSearchArray([]);
            setSearchPath(`http://localhost:8000/Search?title=${e.target.value}`);
        } else {
            setSearchArray([]);
            setShow(false);
        }      
      };
      

    return (
        <>
        <div className="container-searcher mt-3">
            <div className="row justify-content-center align-items-center wrapSearcher">
                <div className="div-searcher col-6">
                    <input 
                        className="form-control" 
                        type="text"  
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={handleSearch} 
                        onClick={() => { 
                            setShow(true);
                            setSearchArray([]);
                        }}
                    >
                    </input>
                </div>
            </div>
        </div>
        <div 
            className="modal-container" 
            onClick={() => setShow(false)}
        >
            <ModalSearchs onClose={() => setShow(false)} show={show} />
        </div>
        </>
    );
}

export default Searcher;
