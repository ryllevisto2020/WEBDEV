import {useEffect, useState , useCallback ,useRef} from "react"
export default function Home(){

    //variables
    let id = 0;
    let CreateData = Array();
    let CollectData = Array();

    //useState
    const [createNotes,setCreate] = useState([]); 
    const [collectNotes,setCollect] = useState(null);

    //useRef
    const title = useRef(null);
    const notes = useRef(null);

    //useCallback or Function
    function CreateList(){
        CreateData.push({title:title.current.value,notes:notes.current.value});
        window.localStorage.setItem("notes",JSON.stringify(CreateData));
        setCollect(JSON.parse(window.localStorage.getItem("notes")))
    };

    function load(){
        const checkNotes = window.localStorage.getItem("notes")
        if(checkNotes===null) {
            window.localStorage.setItem("notes",JSON.stringify([]));
            id = id +1;
        }else{
            const noteLength =JSON.parse(checkNotes).length
            if(noteLength===0){
                id = id +1;
            }else{
                CollectData = JSON.parse(window.localStorage.getItem("notes"))
                CollectData.forEach(element => {
                    CreateData.push(element);
                });
            }
        }
    }
    const t = useCallback(function(){
        setCollect(JSON.parse(window.localStorage.getItem("notes")))
    },[setCollect]);

    load();
    
    useEffect(()=>{
        console.log("notes collected")
    },[collectNotes]);
    return(
        <>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" ref={title}/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Notes</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={notes}></textarea>
        </div>
        <button type="button" class="btn btn-primary" onClick={CreateList}>Create</button>

        <br/>
        <br/>
        <h4>LIST</h4>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                    {title.current}
            </tbody>
        </table>
        </>
    )
}