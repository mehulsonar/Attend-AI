export default function TeacherRegister() {
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
}}
> <div className="text-center mb-4"> <h2 className="fw-bold">Teacher Registration</h2> <p className="text-muted">
Create your teacher account </p> </div>

    <form>
      <div className="mb-3">
        <label className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Choose a username"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="mb-4">
        <label className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm password"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
      >
        Register Teacher
      </button>

      <p className="text-center mt-3">
        Already have an account? &nbsp;
        <a href="/teacher-login" className="ms-1">
        <i className="fa-solid fa-right-to-bracket"></i> &nbsp;
          Login instead
        </a>
      </p>
    </form>
  </div>
</div>

);
}
