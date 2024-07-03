// src/components/FormComponent.tsx

import React, { useState } from "react";
import toast from "react-hot-toast";
import { inquiryEmail } from "../../util/inquiryEmail";

interface FormData {
  companyName: string;
  custNo: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  origin: string;
  weight: string;
  proforma: string;
  destination: string;
  description: string;
  comments: string;
}

interface FormErrors {
  companyName: boolean;
  custNo: boolean;
  firstName: boolean;
  lastName: boolean;
  phone: boolean;
  email: boolean;
  date: boolean;
  origin: boolean;
  weight: boolean;
  proforma: boolean;
  destination: boolean;
  description: boolean;
  comments: boolean;
}

const ShortContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    custNo: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    origin: "",
    weight: "",
    proforma: "",
    destination: "",
    description: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    companyName: false,
    custNo: false,
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    date: false,
    origin: false,
    weight: false,
    proforma: false,
    destination: false,
    description: false,
    comments: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    let valid = true;
    let newErrors: FormErrors = {
      companyName: false,
      custNo: false,
      firstName: false,
      lastName: false,
      phone: false,
      email: false,
      date: false,
      origin: false,
      weight: false,
      proforma: false,
      destination: false,
      description: false,
      comments: false,
    };

    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      if (
        ![
          "custNo",
          "proforma",
          "comments",
          "date",
          "origin",
          "destination",
          "weight",
          "description",
        ].includes(key) &&
        formData[key] === ""
      ) {
        newErrors[key] = true;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Execute function since all required fields are filled
      inquiryEmail(formData, 1);
    } else {
      toast.error("Please fill all required fields.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    // <div className="contentContainer flex flex-col gap-4 w-full">
    <div className="contentContainer flex flex-col gap-4 max-w-[600px] w-full">
      <div className="text-center text-accent text-2xl font-extrabold">
        Get in touch
      </div>

      <div className="w-full border-b-2 border-accent rounded-full mb-2" />

      <div className="flex flex-col bg-base-300 rounded-lg px-1 py-2 gap-4">
        <form
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          className="space-y-4 p-4"
        >
          <div className="flex flex-col">
            <div className="text-xs lg:text-sm p-1">
              Company Name<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="companyName"
              placeholder="Example Company S.A."
              value={formData.companyName}
              onChange={handleChange}
              className={`placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 ${
                errors.companyName ? "border-red-500" : "border-base-100"
              }`}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex flex-col">
              <div className="text-xs lg:text-sm p-1">
                First Name<span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 w-fit ${
                  errors.firstName ? "border-red-500" : "border-base-100"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xs lg:text-sm p-1">
                Last Name<span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 w-fit ${
                  errors.lastName ? "border-red-500" : "border-base-100"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex flex-col">
              <div className="text-xs lg:text-sm p-1">Customer Number</div>
              <input
                type="text"
                name="custNo"
                placeholder="5632434"
                value={formData.custNo}
                onChange={handleChange}
                className="placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 border-base-100 w-fit"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xs lg:text-sm p-1">
                Phone<span className="text-red-500">*</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="+30 145395 23"
                autoComplete="mobile tel"
                value={formData.phone}
                onChange={handleChange}
                className={`placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 ${
                  errors.phone ? "border-red-500" : "border-base-100"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs lg:text-sm p-1">
              Email<span className="text-red-500">*</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={`placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 ${
                errors.email ? "border-red-500" : "border-base-100"
              }`}
            />
          </div>

          <div className="bg-accent rounded-full w-full h-0.5 bg-opacity-50" />

          <div className="flex flex-col">
            <div className="text-xs lg:text-sm p-1">Comments</div>
            <textarea
              name="comments"
              placeholder=""
              value={formData.comments}
              onChange={handleChange}
              className="placeholder:text-xs placeholder:text-gray-300 text-base rounded-md px-2 py-1 border-2 border-base-100"
            />
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="flex justify-center bg-accent px-4 py-2 rounded-lg text-base-100 cursor-pointer hover:bg-slate-500"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShortContactForm;
