"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const PrivateMenu = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSides, setSelectedSides] = useState([]);
  const [selectedEntrees, setSelectedEntrees] = useState([]);

  const handleEntreesSelection = (e) => {
    const selectedEntree = e.target.value;
    if (selectedEntrees.includes(selectedEntree)) {
      setSelectedEntrees(
        selectedEntrees.filter((side) => side !== selectedEntree)
      );
      e.target.checked = false;
    } else if (selectedEntrees.length < 2) {
      setSelectedEntrees([...selectedEntrees, selectedEntree]);
    }
  };

  const handleSidesSelection = (e) => {
    const selectedSide = e.target.value;
    if (selectedSides.includes(selectedSide)) {
      setSelectedSides(selectedSides.filter((side) => side !== selectedSide));
      e.target.checked = false;
    } else if (selectedSides.length < 2) {
      setSelectedSides([...selectedSides, selectedSide]);
    }
  };

  console.log(selectedSides);
  console.log(selectedEntrees);

  // name and phone handle
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  // Send Email start
  const sendEmail = () => {
    // e.preventDefault();

    const stringEntrees = selectedEntrees.join(", ");
    const stringSides = selectedSides.join(", ");

    var mailSend = {
      full_name: name,
      phone_number: phone,
      entrees: stringEntrees,
      sides: stringSides,
      note: "hello",
    };

    if (name == "" || name == null) {
      toast.error("Please enter your name.", {
        position: "top-center",
      });
    }
    // else if (phone == "" || phone == null) {
    //   toast.error("Please enter phone number.", {
    //     position: "top-center",
    //   });
    // }
    // else if (selectedEntrees.length < 1) {
    //   toast.error("Please select minimum one entrees.", {
    //     position: "top-center",
    //   });
    // } else if (selectedSides.length < 1) {
    //   toast.error("Please select minimum one side.", {
    //     position: "top-center",
    //   });
    // }
    else if (selectedEntrees.length + selectedSides.length < 1) {
      toast.error("Choose any one from entrees or sides.", {
        position: "top-center",
      });
    } else if (
      selectedEntrees.length <= 2 &&
      selectedSides.length <= 2 &&
      !name == ""
      // && !phone == ""
    ) {
      emailjs
        .send(
          "service_ojlgj5a",
          "template_d2ojtuu",
          mailSend,
          "ADFRDlpEp_s23CdOG"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thanks for your order !", {
              position: "top-center",
            });
            // console.log(e.target);
          },
          (error) => {
            console.log(error.text);
          }
        );

      // e.target.reset();
    }
  };
  // Send Email end

  return (
    <div>
      <div
        className="min-h-screen relative bg-cover bg-center flex justify-center w-full"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/N7g004k/private-menu-bg-half-trans-1.png")',
        }}
      >
        <div className="xs:w-[90%] sm:w-[90%] md:w-[60%] lg:w-[30%] py-12">
          <div>
            <h2 className="text-[24px] text-[#9333ea] font-bold text-center">
              Please enjoy the self-serve appetizers
            </h2>
            <div className="w-full mt-6">
              <label className="font-bold text-[16px] text-[#9333ea] uppercase">
                FULL NAME *
              </label>
              <div class="w-full">
                <input
                  type="text"
                  name="full_name"
                  onChange={handleName}
                  className="pl-4 pr-4 py-[8px] text-[16px] border text-black-800 placeholder-black-800 bg-white border-slate-300 rounded outline-none focus:outline-none w-[100%]"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <label className="font-bold text-[16px] text-[#9333ea] uppercase">
                Phone Number
              </label>
              <div class="w-full">
                <input
                  type="text"
                  name="phone_number"
                  onChange={handlePhone}
                  className="pl-4 pr-4 text-[16px] py-[8px] border text-black-800 placeholder-black-800 bg-white border-slate-300 rounded outline-none focus:outline-none w-[100%]"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl text-[#9333ea] font-bold">
                ENTREES (Please choose up to two)
              </h2>
              <div className="">
                <div className="radio mt-4">
                  <input
                    type="checkbox"
                    id="entrees1"
                    value="Jerk Chicken"
                    onChange={handleEntreesSelection}
                    disabled={
                      selectedEntrees.length === 2 &&
                      !selectedEntrees.includes("Jerk Chicken")
                    }
                  />
                  <label for="entrees1">Jerk Chicken</label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="entrees2"
                    value="Roasted Chicken w/ herbs"
                    onChange={handleEntreesSelection}
                    disabled={
                      selectedEntrees.length === 2 &&
                      !selectedEntrees.includes("Roasted Chicken w/ herbs")
                    }
                  />
                  <label for="entrees2">Roasted Chicken w/ herbs</label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="entrees3"
                    value="Asian pepper steak w/ red & yellow peppers & onions"
                    onChange={handleEntreesSelection}
                    disabled={
                      selectedEntrees.length === 2 &&
                      !selectedEntrees.includes(
                        "Asian pepper steak w/ red & yellow peppers & onions"
                      )
                    }
                  />
                  <label for="entrees3">
                    Asian pepper steak w/ red & yellow peppers & onions
                  </label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="entrees4"
                    value="Salmon"
                    onChange={handleEntreesSelection}
                    disabled={
                      selectedEntrees.length === 2 &&
                      !selectedEntrees.includes("Salmon")
                    }
                  />
                  <label for="entrees4">Salmon</label>
                </div>
                {/* <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="entrees5"
                    value="Sweet Chilli Chicken Wings"
                    onChange={handleEntreesSelection}
                    disabled={
                      selectedEntrees.length === 2 &&
                      !selectedEntrees.includes("Sweet Chilli Chicken Wings")
                    }
                  />
                  <label for="entrees5">Sweet Chilli Chicken Wings</label>
                </div> */}
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="entrees6"
                    value="Tassot Turkey"
                    onChange={handleEntreesSelection}
                    disabled={
                      selectedEntrees.length === 2 &&
                      !selectedEntrees.includes("Tassot Turkey")
                    }
                  />
                  <label for="entrees6">Tassot Turkey</label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl text-[#9333ea] font-bold">
                SIDES (Please choose up to two)
              </h2>
              <div className="">
                <div className="radio mt-4">
                  <input
                    type="checkbox"
                    id="sides1"
                    value="Steamed veggies"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Steamed veggies")
                    }
                  />
                  <label className="" for="sides1">
                    Steamed veggies
                  </label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides2"
                    value="Djondjon rice"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Djondjon rice")
                    }
                  />
                  <label for="sides2">Djondjon rice</label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides3"
                    value="Seafood rice"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Seafood rice")
                    }
                  />
                  <label for="sides3">Seafood rice</label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides4"
                    value="Rice w/ red beans"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Rice w/ red beans")
                    }
                  />
                  <label for="sides4">Rice w/ red beans</label>
                </div>
                {/* <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides5"
                    name="options"
                    value="Vegetables rice"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Vegetables rice")
                    }
                  />
                  <label for="sides5">Vegetables rice</label>
                </div> */}
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides6"
                    name="options"
                    value="Mac & cheese"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Mac & cheese")
                    }
                  />
                  <label for="sides6">Mac & cheese</label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides7"
                    name="options"
                    value="Macaroni au gratin"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Macaroni au gratin")
                    }
                  />
                  <label for="sides7">Macaroni au gratin</label>
                </div>
                <div className="radio mt-3">
                  <input
                    type="checkbox"
                    id="sides8"
                    name="options"
                    value="Roasted sweet potatoes"
                    onChange={handleSidesSelection}
                    disabled={
                      selectedSides.length === 2 &&
                      !selectedSides.includes("Roasted sweet potatoes")
                    }
                  />
                  <label for="sides8">Roasted sweet potatoes</label>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={sendEmail}
                className="px-8 font-semibold py-2 text-lg rounded-full border border-[#09001f] hover:bg-[#09001f] hover:transition duration-300 text-red-500 hover:text-[white] font-sans mt-12 flex items-center"
              >
                Continue
                <p>
                  <FaAngleDoubleRight className="ml-2 mt-1" />
                </p>
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateMenu;
