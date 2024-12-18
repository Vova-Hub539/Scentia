import React from "react";
import BackContainer from "./BackContainer";
import Button from "./Button";

const GeneratedPdgPage = ({ lessonPlan = '', setLessonPlan = () => { } }) => {

    const generatePDF = async (data) => {
        const response = await fetch("https://md-to-pdf.fly.dev", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ markdown: data, engine: "pdflatex" }),
        });

        if (!response.ok) {
            throw new Error("Failed to generate PDF");
        }

        const pdfBlob = await response.blob();
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "lesson_plan.pdf";
        link.click();
        URL.revokeObjectURL(url);
    }

    return <div className="pdf">
        < BackContainer buttonName="Tools" onBack={() => setLessonPlan('')} />
        < div className="page-content border" >
            <div className="subtitle">Generated result:</div>
            <div className="description">
                Edit or download the markdown code
                <span onClick={() => navigator.clipboard.writeText(lessonPlan)} className="link"> (copy)</span>
            </div>
            <div>
                <textarea className="pdg-field" value={lessonPlan} onChange={(e) => setLessonPlan(e.target.value)}></textarea>
            </div>
            <div>
                <Button text="Download PDF" onClick={() => generatePDF(lessonPlan)} />
            </div>
        </div >
    </div >
}

export default GeneratedPdgPage;