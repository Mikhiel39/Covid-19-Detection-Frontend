import hero from "../public/hero.svg"; // Adjust the path as necessary
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function Form() {
  const [redirectToResult, setRedirectToResult] = useState(false);
  const [breathe, setBreathe] = useState(0);
  const [fever, setFever] = useState(0);
  const [cough, setCough] = useState(0);
  const [throat, setThroat] = useState(0);
  const [nose, setNose] = useState(0);
  const [asthma, setAsthma] = useState(0);
  const [lung, setLung] = useState(0);
  const [headache, setHeadache] = useState(0);
  const [heart, setHeart] = useState(0);
  const [diabetes, setDiabetes] = useState(0);
  const [tension, setTension] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [gastrointestinal, setGastrointestinal] = useState(0);
  const [travel, setTravel] = useState(0);
  const [covid, setCOVID] = useState(0);
  const [gathering, setGathering] = useState(0);
  const [publicPlace, setPublicPlace] = useState(0);
  const [family, setFamily] = useState(0);
  const [market, setMarket] = useState(0);
  const [mask, setMask] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: `url(${hero})`,
  };

  type PayloadType = {
    breathe: number;
    fever: number;
    cough: number;
    throat: number;
    nose: number;
    asthma: number;
    lung: number;
    headache: number;
    heart: number;
    diabetes: number;
    tension: number;
    travel: number;
    covid: number;
    gathering: number;
    publicPlace: number;
    family: number;
    mask: number;
    market: number;
    gastrointestinal: number;
    fatigue: number;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const payload: PayloadType = {
        breathe,
        fever,
        cough,
        throat,
        nose,
        asthma,
        lung,
        headache,
        heart,
        diabetes,
        tension,
        travel,
        covid,
        gathering,
        publicPlace,
        family,
        mask,
        market,
        gastrointestinal,
        fatigue,
      };

      // Validate the payload
      for (const key in payload) {
        if ((payload as PayloadType)[key as keyof PayloadType] === undefined) {
          throw new Error(`Missing value for ${key}`);
        }
      }

      const response = await axios.post(
        "https://covid-19-detection-backend.onrender.com/predict",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      Cookies.set("name", response.data.prediction_text, { expires: 5 });
      setRedirectToResult(true);
    } catch (error) {
      <Navigate to="/error" />
    }

    resetForm();
  }

  function resetForm() {
    setBreathe(0);
    setFever(0);
    setCough(0);
    setThroat(0);
    setNose(0);
    setAsthma(0);
    setLung(0);
    setHeadache(0);
    setHeart(0);
    setDiabetes(0);
    setTension(0);
    setFatigue(0);
    setGastrointestinal(0);
    setTravel(0);
    setCOVID(0);
    setGathering(0);
    setPublicPlace(0);
    setFamily(0);
    setMarket(0);
    setMask(0);
  }

  useEffect(() => {
    resetForm();
  }, []);

  if (redirectToResult) {
    return <Navigate to="/result" />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={backgroundImageStyle}
      ></div>

      {/* Glassmorphism card */}
      <div className="relative z-10 w-full max-w-md h-3/4 overflow-y-auto mt-10 mb-10">
        <div className="bg-gray-100 dark:bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm p-10 rounded-lg shadow-lg ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="breathingProblem"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Breathing Problem?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="breathingProblemYes"
                    type="radio"
                    name="breathingProblem"
                    onChange={() => setBreathe(1)}
                    value="yes"
                    checked={breathe === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="breathingProblemYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="breathingProblemNo"
                    type="radio"
                    name="breathingProblem"
                    onChange={() => setBreathe(0)}
                    value="no"
                    checked={breathe === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="breathingProblemNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="feverProblem"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300 mt-4"
              >
                Do you have a Fever Problem?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="feverProblemYes"
                    type="radio"
                    name="feverProblem"
                    value="yes"
                    onChange={() => setFever(1)}
                    checked={fever === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="feverProblemYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="feverProblemNo"
                    type="radio"
                    name="feverProblem"
                    onChange={() => setFever(0)}
                    value="no"
                    checked={fever === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="feverProblemNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="dryCoughProblem"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300 mt-4"
              >
                Do you have a Dry Cough Problem?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="dryCoughProblemYes"
                    type="radio"
                    name="dryCoughProblem"
                    onChange={() => setCough(1)}
                    value="yes"
                    checked={cough === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="dryCoughProblemYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="dryCoughProblemNo"
                    type="radio"
                    name="dryCoughProblem"
                    onChange={() => setCough(0)}
                    value="no"
                    checked={cough === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="dryCoughProblemNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="soreThroatProblem"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300 mt-4"
              >
                Do you have a Sore throat?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="soreThroatProblemYes"
                    type="radio"
                    name="soreThroatProblem"
                    onChange={() => setThroat(1)}
                    value="yes"
                    checked={throat === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="soreThroatProblemYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="soreThroatProblemNo"
                    type="radio"
                    name="soreThroatProblem"
                    onChange={() => setThroat(0)}
                    value="no"
                    checked={throat === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="soreThroatProblemNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="runningNoseProblem"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300 mt-4"
              >
                Do you have a Running Nose?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="runningNoseProblemYes"
                    type="radio"
                    name="runningNoseProblem"
                    onChange={() => setNose(1)}
                    value="yes"
                    checked={nose === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="runningNoseProblemYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="runningNoseProblemNo"
                    type="radio"
                    name="runningNoseProblem"
                    onChange={() => setNose(0)}
                    value="no"
                    checked={nose === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="runningNoseProblemNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="asthmaProblem"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300 mt-4"
              >
                Do you have Asthma?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="asthmaProblemYes"
                    type="radio"
                    name="asthmaProblem"
                    onChange={() => setAsthma(1)}
                    value="yes"
                    checked={asthma === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="asthmaProblemYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="asthmaProblemNo"
                    type="radio"
                    name="asthmaProblem"
                    onChange={() => setAsthma(0)}
                    value="no"
                    checked={asthma === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="asthmaProblemNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="lungdisease"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Chronic Lung Disease ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="lungdiseaseYes"
                    type="radio"
                    name="lungdisease"
                    onChange={() => setLung(1)}
                    value="yes"
                    checked={lung === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="lungdiseaseYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="lungdiseaseNo"
                    type="radio"
                    name="lungdisease"
                    onChange={() => setLung(0)}
                    value="no"
                    checked={lung === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="lungdiseaseNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="headache"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Headache ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="headacheYes"
                    type="radio"
                    name="headache"
                    onChange={() => setHeadache(1)}
                    value="yes"
                    checked={headache === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="headacheYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="headacheNo"
                    type="radio"
                    name="headache"
                    onChange={() => setHeadache(0)}
                    value="no"
                    checked={headache === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="headacheNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="heartdisease"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Heart Disease ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="heartdiseaseYes"
                    type="radio"
                    name="heartdisease"
                    onChange={() => setHeart(1)}
                    value="yes"
                    checked={heart === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="heartdiseaseYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="heartdiseaseNo"
                    type="radio"
                    name="heartdisease"
                    onChange={() => setHeart(0)}
                    value="no"
                    checked={heart === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="heartdiseaseNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="diabetes"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Diabetes ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="diabetesYes"
                    type="radio"
                    name="diabetes"
                    onChange={() => setDiabetes(1)}
                    value="yes"
                    checked={diabetes === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="diabetesYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="diabetesNo"
                    type="radio"
                    name="diabetes"
                    onChange={() => setDiabetes(0)}
                    value="no"
                    checked={diabetes === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="diabetesNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="hypertension"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Hyper Tension ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="hypertensionYes"
                    type="radio"
                    name="hypertension"
                    onChange={() => setTension(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={tension === 1}
                  />
                  <label
                    htmlFor="hypertensionYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="hypertensionNo"
                    type="radio"
                    name="hypertension"
                    onChange={() => setTension(0)}
                    value="no"
                    checked={tension === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="hypertensionNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="fatigue"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Fatigue ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="fatigueYes"
                    type="radio"
                    name="fatigue"
                    onChange={() => setFatigue(1)}
                    value="yes"
                    checked={fatigue === 1}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked
                  />
                  <label
                    htmlFor="fatigueYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="fatigueNo"
                    type="radio"
                    name="fatigue"
                    onChange={() => setFatigue(0)}
                    value="no"
                    checked={fatigue === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="fatigueNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="gastrointestinal"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you have a Gastrointestinal ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="gastrointestinalYes"
                    type="radio"
                    name="gastrointestinal"
                    onChange={() => setGastrointestinal(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={gastrointestinal === 1}
                  />
                  <label
                    htmlFor="gastrointestinalYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="gastrointestinalNo"
                    type="radio"
                    name="gastrointestinal"
                    onChange={() => setGastrointestinal(0)}
                    value="no"
                    checked={gastrointestinal === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="gastrointestinalNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="abroad"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you had a Abroad travel?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="abroadYes"
                    type="radio"
                    name="abroad"
                    onChange={() => setTravel(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={travel === 1}
                  />
                  <label
                    htmlFor="abroadYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="abroadNo"
                    type="radio"
                    name="abroad"
                    onChange={() => setTravel(0)}
                    value="no"
                    checked={travel === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="abroadNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="covid"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you had a Contact with COVID Patient ?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="covidYes"
                    type="radio"
                    name="covid"
                    onChange={() => setCOVID(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={covid === 1}
                  />
                  <label
                    htmlFor="covidYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="covidNo"
                    type="radio"
                    name="covid"
                    onChange={() => setCOVID(0)}
                    value="no"
                    checked={covid === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="covidNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="gathering"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you Attended Large Gathering?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="gatheringYes"
                    type="radio"
                    name="gathering"
                    onChange={() => setGathering(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={gathering === 1}
                  />
                  <label
                    htmlFor="gatheringYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="gatheringNo"
                    type="radio"
                    name="gathering"
                    onChange={() => setGathering(0)}
                    value="no"
                    checked={gathering === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="gatheringNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="places"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you Visited Public Exposed Places?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="placesYes"
                    type="radio"
                    name="places"
                    onChange={() => setPublicPlace(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={publicPlace === 1}
                  />
                  <label
                    htmlFor="placesYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="placesNo"
                    type="radio"
                    name="places"
                    onChange={() => setPublicPlace(0)}
                    value="no"
                    checked={publicPlace === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="placesNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="sanitize"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Did you sanitize yourself first whenever you came home from a
                publicly visited place?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="sanitizeYes"
                    type="radio"
                    name="sanitize"
                    onChange={() => setMarket(1)}
                    value="yes"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={market === 1}
                  />
                  <label
                    htmlFor="sanitizeYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sanitizeNo"
                    type="radio"
                    name="sanitize"
                    onChange={() => setMarket(0)}
                    value="no"
                    checked={market === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="sanitizeNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="mask"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Do you wear a mask while going to functions and events?
              </label>
              <div className="space-y-2 mt-1">
                <div className="flex items-center">
                  <input
                    id="maskYes"
                    type="radio"
                    name="mask"
                    value="yes"
                    onChange={() => setMask(1)}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked={mask === 1}
                  />
                  <label
                    htmlFor="maskYes"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="maskNo"
                    type="radio"
                    name="mask"
                    onChange={() => setMask(0)}
                    value="no"
                    checked={mask === 0}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="maskNo"
                    className="ml-2 text-sm text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex space-x-20 ml-14">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-white text-white hover:text-black py-2 px-4 rounded-lg"
              >
                Submit
              </button>
              <Link to="/">
                <button className="bg-orange-500 hover:bg-white text-white hover:text-black py-2 px-4 rounded-lg">
                  Go Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
