import React from "react";
import axios from "axios";
import CommonForm from "../components/ui/Form";

const Careers = () => {

    const careerFields = [
        {
            name: "name",
            type: "text",
            placeholder: "Name",
            required: true,
        },
        {
            name: "phone",
            type: "tel",
            placeholder: "Phone",
            required: true,
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email*",
            required: true,
        },
        {
            name: "resume",
            type: "file",
            placeholder: "Attach Resume",
            required: true,
        },
    ];

    const handleCareerSubmit = async (formData) => {
        try {
            const data = new FormData();

            data.append("name", formData.name);
            data.append("phone", formData.phone);
            data.append("email", formData.email);
            data.append("resume", formData.resume);

            const response = await axios.post(
                "http://localhost:5000/api/careers/apply",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);

            alert("Application submitted successfully!");

        } catch (error) {
            console.error("Application Error:", error);
            throw error;
        }
    };

    return (
        <section className="bg-black text-white min-h-screen pt-32 md:pt-36 pb-24">

            <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">

                {/* Header */}
                <div className="mb-16 md:mb-20">

                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-brand">
                        We're Hiring
                    </h1>

                    <div className="w-full h-px bg-white/30 mt-8" />

                </div>


                {/* Main */}
                <div className="grid lg:grid-cols-2 gap-20 xl:gap-32">

                    {/* ================= JOB DETAILS ================= */}
                    <div>

                        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
                            Join Our Team
                        </h2>

                        <div className="space-y-4 text-lg md:text-xl text-white/65">

                            <p>
                                Date posted: 19/06/2024.
                            </p>

                            <p className="uppercase">
                                Operations Supervisor
                            </p>

                        </div>


                        {/* Job Information */}
                        <ul className="mt-12 space-y-4 text-lg md:text-xl text-white/65 list-disc pl-8">

                            <li>
                                Location: Barrhead, Alberta T7N 1L1, Canada
                            </li>

                            <li>
                                Salary: $32.00 hourly
                            </li>

                            <li>
                                Terms of employment: Permanent employment / Full time
                            </li>

                            <li>
                                Day, Evening, Morning, Shift, Weekend
                            </li>

                            <li>
                                Start date: Starts as soon as possible
                            </li>

                            <li>
                                Benefits: Health benefits
                            </li>

                        </ul>


                        {/* Overview */}
                        <div className="mt-14">

                            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                                Overview
                            </h3>

                            <div className="space-y-8 text-lg md:text-xl text-white/65">

                                <div>
                                    <h4 className="text-white text-xl mb-3">
                                        Languages
                                    </h4>

                                    <p>English</p>
                                </div>

                                <div>
                                    <h4 className="text-white text-xl mb-3">
                                        Education
                                    </h4>

                                    <p>
                                        Secondary (high) school graduation certificate
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-white text-xl mb-3">
                                        Experience
                                    </h4>

                                    <p>0-1 years</p>
                                </div>

                            </div>

                        </div>


                        {/* Responsibilities */}
                        <div className="mt-14">

                            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                                Responsibilities
                            </h3>

                            <h4 className="text-xl text-white mb-4">
                                Tasks
                            </h4>

                            <ul className="list-disc pl-8 space-y-3 text-lg md:text-xl text-white/65">

                                <li>
                                    Solve work-related issues, offer technical guidance,
                                    and suggest actions to raise output and quality.
                                </li>

                                <li>
                                    Assign, organize, and evaluate tasks.
                                </li>

                                <li>
                                    Order or requisition supplies, equipment, and materials.
                                </li>

                                <li>
                                    Make plans for upkeep and repairs.
                                </li>

                                <li>
                                    Coordinate actions with departments or other work units.
                                </li>

                                <li>
                                    Consult with customers to ensure continued support
                                    following the transaction.
                                </li>

                            </ul>

                        </div>

                    </div>


                    {/* ================= COMMON FORM ================= */}
                    <div className="lg:sticky lg:top-28 lg:self-start">

                        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
                            Apply Now
                        </h2>

                        <CommonForm
                            fields={careerFields}
                            submitText="Submit Application"
                            onSubmit={handleCareerSubmit}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Careers;