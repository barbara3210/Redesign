import React from "react";
import "./Signin.css"

const Signup=()=>{

    return(
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Napravi račun</h3>
            <div className="text-center" style={{color:"aliceblue"}}>
              Već imate račun?{" "}
              <span className="link-primary" >
                <a href="/prijava" style={{color:"#f44336"}}>Prijavi se</a>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Ime i prezime</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="primjer: Ana Anić"
              />
            </div>
            <div className="form-group mt-3">
              <label>E-mail adresa</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="E-mail adresa"
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
              <button type="submit" href="/pocetna" className="btn btn-outline-light">
                <a href="pocetna" style={{textDecoration:"none",color:"#f44336"}}>POTVRDI</a>
              </button>
            </div>
            <p className="text-center mt-2">
                Zaboravili ste <a href="#">lozinku?</a>
            </p>
          </div>
        </form>
      </div>
    )
}
export default Signup