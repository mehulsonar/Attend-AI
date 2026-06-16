import CameraCapture from "../components/CameraCapture";

export default function StudentLogin() {
    return(
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}>

                <div
                    className="card shadow-lg border-0 p-4"
                    style={{
                        width: "500px",
                        borderRadius: "20px",
                        backgroundColor: "#ffffff"
                    }}>
                        <div className="text-center mb-4">
                            <h2 className="fw-bold">Student Login</h2>
                            <p className="text-muted">
                                Login your student account
                            </p>
                        </div>
                        <form>
                            <CameraCapture/>
                        </form>
                    </div>

        </div>
    )
}