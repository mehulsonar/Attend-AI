import CameraCapture from "../components/CameraCapture";

export default function StudentRegister(){
    return(
        <div
        className="containe d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
        >
            <div
            className="card shadow-lg border-0 p-4"
            style={{
                width: "500px",
                borderRadius: "20px",
                backgroundColor: "#ffffff"
            }}
            >
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Student Register</h2>
                    <p className="text-muted">Register your student account</p>
                </div>

                <CameraCapture/>
                
                <br />
                <a href="/">
                    <button
                        className="btn btn-primary"
                        style={{ width: "12rem"}}
                        >
                         Go to home screen
                    </button>
                </a>
                <p className="text-center mt-3">
                    Already have an account? &nbsp;
                    <a href="/student-login" className="ms-1">
                        <i className="fa-solid fa-right-to-bracket"></i> &nbsp;
                        Login instead
                    </a>
                </p>
            </div>
        </div>
    )
}