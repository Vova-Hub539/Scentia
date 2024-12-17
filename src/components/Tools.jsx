import React, { useState } from "react";
import BackContainer from "./BackContainer";
import lessonPlanner from "./../assets/lessonPlanner.png"
import Button from "./Button";
import { jsPDF } from "jspdf";

const Tools = () => {
    const [gradeLevel, setGradeLevel] = useState('1st');
    const [duration, setDuration] = useState('60');
    const [topic, setTopic] = useState("");

    const handleGenerateLesson = async () => {
        const requestBody = {
            topic: topic,
            duration: duration,
            gradeLevel: gradeLevel
        };

        try {
            const response = await fetch('https://scentia-api-app-esd2apfgcyhyhwdg.swedencentral-01.azurewebsites.net/ai_tools/lesson_planner', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer k8Kx4w0Zr6qT9yB1U5nM7A2p',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Error generating lesson plan');
            }

            const data = await response.text();
            generatePDF(data);
        } catch (err) {
            console.log('Failed to generate lesson plan: ' + err.message);
        }
    };

    const generatePDF = (data) => {
        const doc = new jsPDF();
        const lines = data.split('\n');

        let yPosition = 10;

        lines.forEach(line => {
            if (line.startsWith("-")) {
                doc.setFont("helvetica", "italic");
                doc.text(line, 10, yPosition);
                yPosition += 10;
            }
            else if (line.startsWith("**") && line.endsWith("**")) {
                doc.setFont("helvetica", "bold");
                doc.text(line.slice(2, -2), 10, yPosition);
                yPosition += 10;
            }
            else {
                doc.setFont("helvetica", "normal");
                doc.text(line, 10, yPosition);
                yPosition += 10;
            }
        });

        doc.save("lesson_plan.pdf");
    };

    return <div className="tools">
        <BackContainer buttonName={'Lesson Planner'} />
        <div className="tools-content border">
            <div>
                <img src={lessonPlanner}></img>
            </div>
            <div className="tools-block">
                <div className="title">Lesson Planner</div>
                <div className="description">This AI tool helps you with creating lesson plans for your class!</div>
            </div>
            <div>
                <div className="tools-block">
                    <div className="subtitle">Grade level:</div>
                    <div>
                        <select value={gradeLevel} onChange={(e) => setGradeLevel(e)}>
                            <option value="1st">1st grade</option>
                        </select>
                    </div>
                </div>
                <div className="tools-block">
                    <div className="subtitle">Lecture duration (in minutes)</div>
                    <div>
                        <select value={duration} onChange={(e) => setDuration(e)}>
                            <option value="60">60</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className="tools-block">
                    <div className="subtitle">Topic, Standart, or Objective:*</div>
                    <div className="small-description">Provide how the assignment should open the conversation.</div>
                    <div>
                        <textarea value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Student last lesson was on the geography of the United States, have the lesson include group work, etc. The lesson plan should include standards (CCSS, TEKS)"></textarea>
                    </div>
                </div>
            </div>
            <div className="tools-button-container">
                <div className="create-button">
                    <Button onClick={handleGenerateLesson} className="create" text="Create lesson plan" />
                </div>
                <div className="cancel-button">
                    <Button className="cancel" text="Cancel" />
                </div>
            </div>
        </div>
    </div>
}

export default Tools;