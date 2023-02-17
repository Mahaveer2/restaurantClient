import React, { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import * as api from "../utils/api";
import { useRecoilState } from "recoil";
import { errorAtom, messageAtom, userAtom } from "../state/store";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useRecoilState(messageAtom);
  const [err, setErr] = useRecoilState(errorAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState(false);
  const [loadData, setloadData] = useState(null);

  const handleError = (err) => {
    setErr({
      error: true,
      message: err,
    });

    setTimeout(() => {
      setErr({
        error: false,
        message: "",
      });
    }, 2000);
  };

  if (!user.isAuthenticated) {
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let data = {};
    const form = new FormData(e.target);
    form.forEach((value, key) => {
      if (!Reflect.has(data, key)) {
        data[key] = value;
        return;
      }
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    });

    if (data.dish === "" || data.number === "") {
      handleError("Email is required!");
      return false;
    }

    const res = await api.API.post("/ai/create", data);
    setLoading(false);
    setloadData(res.data.data);
  }

  return (
    <>
      <section id="contact" className="contact">
        {loading ? (
          <>
            <div className="page-header d-flex align-items-center">
              <div className="container position-relative">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-4 text-center">
                    <h5>Loading...</h5>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="page-header d-flex align-items-center">
              <div className="container position-relative">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-4 text-center">
                    <h2>Create</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* End Page Header */}

            <div className="container">
              <div className="row justify-content-center ">
                {loadData && (
                  <>
                    <h4>Description:</h4> <p>{loadData.description}</p>
                    <section id="gallery" className="gallery">
                      <div className="container-fluid">
                        <div className="row gy-4 justify-content-center">
                          {loadData?.images?.map((e) => (
                            <div className="col-xl-3 col-lg-4 col-md-6">
                              <div className="gallery-item h-100">
                                <img src={e.url} className="img-fluid" alt="" />
                                <div className="gallery-links d-flex align-items-center justify-content-center">
                                  <a
                                    href={e.url}
                                    title="Gallery 2"
                                    className="glightbox preview-link"
                                  >
                                    <i className="bi bi-arrows-angle-expand" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </>
                )}
                {!loadData && (
                  <>
                    <div className="col-lg-4">
                      <form
                        onSubmit={(e) => handleSubmit(e)}
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            className="form-control"
                            name="dish"
                            id="name"
                            placeholder="Dish Name"
                            required
                          />
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            className="form-control"
                            name="ingredients"
                            id="ingredients"
                            placeholder="Ingredients"
                            required
                          />
                        </div>
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            className="form-control"
                            name="number"
                            id="number"
                            placeholder="Number of Ingredients"
                            required
                          />
                        </div>
                        <div className="form-group mt-3">
                          <select className="form-control" name="theme">
                            <option value="Bright">Bright</option>
                            <option value="Dark">Dark</option>
                            <option value="Colorful">Colorful</option>
                          </select>
                        </div>
                        <div className="text-center mt-3">
                          <button type="submit">Create Images</button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
                {/* End Contact Form */}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Create;
