"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  company: yup.string().required("Le nom de l'entreprise est requis"),
  projectType: yup.string().required("Le type de projet est requis"),
  budget: yup.string().required("Le budget est requis"),
  message: yup.string().required("Le message est requis"),
  links: yup.array().of(yup.string().url("URL invalide")),
});

const steps = [
  {
    id: "step1",
    title: "Informations de base",
    fields: ["name", "email", "company"],
  },
  {
    id: "step2",
    title: "Détails du projet",
    fields: ["projectType", "budget"],
  },
  {
    id: "step3",
    title: "Message",
    fields: ["message", "links"],
  },
];

export default function FormContactWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [links, setLinks] = useState([""]);
  const [touchedFields, setTouchedFields] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    setError,
    clearErrors,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      links: [""],
    },
    mode: "onTouched",
  });

  // Watch all fields to clear errors on input
  const watchAllFields = watch();

  // Clear error when field is being edited
  const handleInputChange = (fieldName) => {
    if (errors[fieldName]) {
      clearErrors(fieldName);
    }
  };

  const addLink = () => {
    setLinks([...links, ""]);
    setValue("links", [...links, ""]);
  };

  const removeLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
    setValue("links", newLinks);
  };

  const updateLink = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
    setValue("links", newLinks);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleFieldBlur = (fieldName) => {
    setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (currentStep === steps.length - 1) {
        const isValid = await trigger(steps[currentStep].fields);
        if (isValid) {
          handleSubmit(onSubmit)();
        }
      } else {
        const isValid = await trigger(steps[currentStep].fields);
        if (isValid) {
          nextStep();
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep]);

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-base-300 p-8 rounded-lg text-neutral-content text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="text-2xl font-medium">Merci pour votre message !</h2>
        <p className="text-neutral-content/80">
          Nous avons bien reçu votre demande et nous vous répondrons dans les
          plus brefs délais.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(0);
            setLinks(["", ""]);
          }}
          className="btn btn-primary"
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto bg-base-300 p-8 rounded-lg text-neutral-content"
    >
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index < steps.length - 1 ? "flex-1" : ""
              } ${
                index <= currentStep
                  ? "text-primary"
                  : "text-neutral-content/60"
              }`}
            >
              <div
                className={`min-w-8 min-h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? "bg-primary text-white"
                    : "bg-neutral-content/20 text-neutral-content/60"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-full mx-2 ${
                    index < currentStep ? "bg-primary" : "bg-neutral-content/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-medium text-center text-neutral-content">
          {steps[currentStep].title}
        </h3>
      </div>

      <div className="space-y-8">
        {currentStep === 0 && (
          <div className="flex flex-col gap-6">
            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">
                  Nom complet
                </span>
              </label>
              <input
                type="text"
                {...register("name")}
                onBlur={() => handleFieldBlur("name")}
                className={`input input-bordered bg-base-300 border-base-300 w-full ${
                  errors.name && touchedFields.name ? "input-error" : ""
                }`}
              />
              {errors.name && touchedFields.name && (
                <span className="text-error text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                onBlur={() => handleFieldBlur("email")}
                className={`input input-bordered bg-base-300 border-base-300 w-full ${
                  errors.email && touchedFields.email ? "input-error" : ""
                }`}
              />
              {errors.email && touchedFields.email && (
                <span className="text-error text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">
                  Entreprise
                </span>
              </label>
              <input
                type="text"
                {...register("company")}
                onBlur={() => handleFieldBlur("company")}
                className={`input input-bordered bg-base-300 border-base-300 w-full ${
                  errors.company && touchedFields.company ? "input-error" : ""
                }`}
              />
              {errors.company && touchedFields.company && (
                <span className="text-error text-sm mt-1">
                  {errors.company.message}
                </span>
              )}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="flex flex-col gap-6">
            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">
                  Type de projet
                </span>
              </label>
              <select
                {...register("projectType")}
                onBlur={() => handleFieldBlur("projectType")}
                className={`select select-bordered bg-base-300 border-base-300 w-full ${
                  errors.projectType && touchedFields.projectType ? "select-error" : ""
                }`}
              >
                <option value="">Sélectionnez un type</option>
                <option value="web">Site Web</option>
                <option value="mobile">Application Mobile</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Autre</option>
              </select>
              {errors.projectType && (
                <span className="text-error text-sm mt-1">
                  {errors.projectType.message}
                </span>
              )}
            </div>

            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">Budget</span>
              </label>
              <select
                {...register("budget")}
                onChange={() => handleInputChange("budget")}
                onKeyDown={handleKeyDown}
                className={`select select-bordered bg-base-300 border-base-300 w-full ${
                  errors.budget ? "select-error" : ""
                }`}
              >
                <option value="">Sélectionnez un budget</option>
                <option value="5k">5 000€ - 10 000€</option>
                <option value="10k">10 000€ - 25 000€</option>
                <option value="25k">25 000€ - 50 000€</option>
                <option value="50k">50 000€+</option>
              </select>
              {errors.budget && (
                <span className="text-error text-sm mt-1">
                  {errors.budget.message}
                </span>
              )}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">Message</span>
              </label>
              <textarea
                {...register("message")}
                onChange={() => handleInputChange("message")}
                onKeyDown={handleKeyDown}
                className={`textarea textarea-bordered bg-base-300 border-base-300 w-full h-32 rounded-[0.5rem] ${
                  errors.message && watch("message") ? "textarea-error" : ""
                }`}
              />
              {errors.message && watch("message") && (
                <span className="text-error text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text text-neutral-content">
                  Liens utiles (optionnel)
                </span>
              </label>
              <div className="space-y-3">
                {links.map((link, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      value={link}
                      onChange={(e) => updateLink(index, e.target.value)}
                      placeholder="https://..."
                      className={`input input-bordered bg-base-300 border-base-300 w-full ${
                        errors.links?.[index] ? "input-error" : ""
                      }`}
                    />
                    {index === links.length - 1 ? (
                      <button
                        type="button"
                        onClick={addLink}
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => removeLink(index)}
                        className="btn btn-square btn-ghost"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {errors.links && (
                <span className="text-error text-sm mt-1">
                  {errors.links.message}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          className={`btn ${currentStep === 0 ? "invisible" : "btn-link"}`}
          disabled={currentStep === 0}
        >
          Précédent
        </button>

        {currentStep === steps.length - 1 ? (
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        ) : (
          <button type="button" onClick={nextStep} className="btn">
            Suivant
          </button>
        )}
      </div>
    </form>
  );
}
