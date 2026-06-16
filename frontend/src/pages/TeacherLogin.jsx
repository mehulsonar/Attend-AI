export default function TeacherLogin() {
return (
  <div
    className="container d-flex justify-content-center align-items-center"
    style={{ minHeight: "100vh" }}
    >

    <div
      className="card shadow-lg border-0 p-4"
      style={{
      width: "500px",
      borderRadius: "20px",
      backgroundColor: "#ffffff"
      }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Teacher Login</h2>
          <p className="text-muted">
            Login your teacher account
          </p>
        </div>

        <form>
          <div className="mb-3">
            <label className="form-label">
              Email/Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a username or email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            <i className="fa-solid fa-right-to-bracket"></i> &nbsp;
            Login Teacher
          </button>

          <p className="text-center mt-3">
            Don't have an account?
            <a href="teacher-register" className="ms-1">
                Register instead
            </a>
          </p>
          <div className="d-flex justify-content-between mb-3">
            <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ms-2">
            Remember Me
            </label>
          </div>

          <a href="#" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
        </form>
    </div>
  </div>

);
}
