import studentPortal from "../assets/studentPortal.png"

export default function StudentScreen(){
    return(
        <div className="card" style={{width: '18rem', background: '#1E293B', borderRadius: '30px', boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.2)'}}>
            <img src={studentPortal} className="card-img-top" alt="..." style={{borderRadius: '30px'}} />
            <div className="card-body">
                <h5 className="card-title mt-2" style={{color: 'white'}}>Student Portal</h5>
                {/* <p className="card-text"></p> */}
                <a href="/student-register" className="btn btn-primary mt-3" style={{borderRadius: '12px'}}>Access Student Portal</a>
            </div>
        </div>
    )
    
}