/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar/Navbar";

const CarPage = () => {
  return (
    <div>
      <div
        classNameName="filter"
        id="filter"
        // onClick="inactiveDarkBackground()"
      />

      <Navbar />
      <Jumbotron />

      <div className="container px-lg-5 position-relative form-container">
        <div className="card justify-content-between">
          <div className="row gx-2">
            <div className="col-lg">
              <label for="" className="form-label">
                Tipe Driver
              </label>
              <select
                className="form-select form-item"
                aria-label="Default select example"
                placeholder="Pilih Tipe Driver"
              >
                <option value="1">Dengan Sopir</option>
                <option value="2">Tanpa Sopir(Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-lg">
              <label for="inputDate" className="form-label">
                Tanggal
              </label>
              <input
                type="date"
                className="form-control form-item"
                placeholder="Pilih Waktu"
                required
                id="inputDate"
              />
            </div>
            <div className="col-lg">
              <label for="inputTime" className="form-label">
                Waktu Jemput/Ambil
              </label>
              <input
                type="time"
                placeholder="Pilih Waktu"
                className="form-control form-item"
                required
                id="inputTime"
              />
            </div>
            <div className="col-lg">
              <label for="jumlahPenumpang" className="form-label">
                Jumlah Penumpang (optional)
              </label>
              <input
                type="text"
                placeholder="Jumlah Penumpang "
                className="form-control form-item"
                id="jumlahPenumpang"
              />
            </div>
            <div className="col-lg-2">
              <div className="btn-submit">
                <button className="btn btn-cari" id="submitBtn">
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="display-car">
        <div className="container px-lg-5" id="cars">
          <div
            className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3"
            id="cars-container"
          ></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarPage;
