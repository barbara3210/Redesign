import React from "react";
import './Signin.css'


const Signin =()=>{

    return(
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Prijavi se</h3>
          <div className="form-group mt-3">
            <label>E-mail adresa</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="E-mail"
            />
          </div>
          <div className="form-group mt-3">
            <label>Lozinka</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Lozinka"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-light">
              <a href="/pocetna" style={{textDecoration:"none",color:"#f44336"}}>POTVRDI</a>
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Zaboravili ste <a href="#">lozinku?</a>
          </p>
        </div>
      </form>
    </div>
    )
}
export default Signin