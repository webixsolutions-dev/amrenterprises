import React, { useState } from "react";
import axios from "axios";
import CommonForm from "../components/ui/Form";
import { Helmet } from "react-helmet-async";

const Careers = () => {
  // ===================== JOB 1: OPERATIONS SUPERVISOR =====================
  const job1 = {
    id: 1,
    title: "Operations Supervisor",
    salary: "$32.00 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Solve work-related issues, offer technical guidance, and suggest actions to raise output and caliber of output.",
      "Assign, organize, and evaluate tasks.",
      "Order or requisition supplies, equipment, and materials.",
      "Make plans for upkeep and repairs.",
      "Coordinate actions with departments or other work units.",
      "Consult with customers to ensure continued support following the transaction.",
    ],
    conditions: [
      "Fast-paced environment",
      "Work under pressure",
      "Tight deadlines",
      "Attention to detail"
    ],
    suitability: [
      "Efficient interpersonal skills",
      "Excellent oral communication",
      "Flexibility",
      "Initiative",
      "Organized",
      "Reliability",
      "Team player"
    ],
    whoCanApply: [
      "Canadian citizens and permanent or temporary residents of Canada.",
      "Other candidates with or without a valid Canadian work permit."
    ],
  };

  // ===================== JOB 2: RECEPTIONIST =====================
  const job2 = {
    id: 2,
    title: "Receptionist",
    salary: "$21.25 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Carry out a range of secretarial and other clerical tasks.",
      "Serve as a receptionist, greeting and guiding guests and residents, taking phone calls, giving out information when needed, and redirecting as needed.",
      "Help clinical and administrative staff with ongoing projects, initiatives, and the upkeep of various statistical data and reports. When necessary, assist in putting approved procedures into place.",
    ],
    conditions: [
      "Capability to type at 55 wpm.",
      "Capacity to perform the job's physical requirements.",
      "Fast-paced environment.",
      "Attention to detail.",
      "Sitting."
    ],
    suitability: [
      "Excellent oral communication",
      "Excellent written communication",
      "Flexibility",
      "Reliability",
      "Team player"
    ],
    whoCanApply: [
      "You are a Canadian citizen, a permanent or a temporary resident of Canada.",
      "You have a valid Canadian work permit."
    ],
  };

  // ===================== JOB 3: OFFICE CLERK =====================
  const job3 = {
    id: 3,
    title: "Office Clerk",
    salary: "$25.50 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Type and edit forms, letters, and other documents.",
      "Accept and transmit phone calls or email inquiries.",
      "Complete reports from databases, inventories, and manual or electronic files.",
      "Handle incoming and outgoing mail either electronically or manually.",
      "Transmit and receive messages.",
      "Give the general public and clients access to information.",
      "Documents should be photocopied and compiled for distribution, mailing, and filing.",
      "Purchase office supplies and keep track of your inventory.",
    ],
    conditions: [
      "Tight deadlines",
      "Repetitive tasks",
      "Attention to detail"
    ],
    suitability: [
      "Hardworking",
      "Positive attitude",
      "Quick learner",
      "Time management",
      "Client focus",
      "Excellent oral communication",
      "Team player"
    ],
    whoCanApply: [
      "Canadian citizens and permanent or temporary residents of Canada.",
      "Other candidates with or without a valid Canadian work permit."
    ],
  };

  // ===================== JOB 4: DATA ENTRY CLERK =====================
  const job4 = {
    id: 4,
    title: "Data Entry Clerk",
    salary: "$24.04 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "To enter data, get and register papers.",
      "Use the designated format when entering data.",
      "Data exchange between applications.",
      "Verify the accuracy and completeness of the data.",
      "Updating, storing, and maintaining databases.",
      "Implement backup procedures to ensure data preservation.",
      "Perform standard office duties.",
      "Data drives, disks, and tapes should be sorted, labeled, and stored. To generate digital records, use a scanner.",
      "Transform handwritten data into spreadsheets in Word or Excel.",
    ],
    conditions: [
      "Fast-paced environment",
      "Repetitive tasks",
      "Attention to detail",
      "Hand-eye co-ordination"
    ],
    suitability: [
      "Hardworking",
      "Positive attitude",
      "Quick learner",
      "Time management"
    ],
    tech: [
      "MS Excel",
      "MS PowerPoint",
      "MS Word",
      "MS Windows"
    ],
    whoCanApply: [
      "Canadian citizens and permanent or temporary residents of Canada.",
      "Other candidates with or without a valid Canadian work permit."
    ],
  };

  // ===================== JOB 5: BOOKKEEPER =====================
  const job5 = {
    id: 5,
    title: "Bookkeeper",
    salary: "$28.00 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Verify the accuracy of financial transactions.",
      "Enter all transactions in the appropriate ledger.",
      "Balance bank and other account balances.",
      "Remit payments to vendors when they're due.",
      "Fill out the necessary tax paperwork.",
      "Record all cash receipts and make deposits.",
      "Notify clients by phone when payments are overdue.",
      "Oversee the office's petty cash reserve.",
      "Handle the payroll for the company.",
    ],
    conditions: [
      "Attention to detail",
      "Positive attitude",
      "Time management"
    ],
    suitability: [
      "Excellent oral communication",
      "Excellent written communication",
      "Organized",
      "Time management"
    ],
    whoCanApply: [
      "You are a Canadian citizen, a permanent or a temporary resident of Canada.",
      "You have a valid Canadian work permit."
    ],
  };

  // ===================== JOB 6: OFFICE MANAGER =====================
  const job6 = {
    id: 6,
    title: "Office Manager",
    salary: "$26.54 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 2,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Examine and assess any newly implemented administrative processes.",
      "Set priorities for your task, make sure that protocol is followed, and meet deadlines.",
      "Perform establishment administration tasks.",
      "Handle requests for records release under government access to information and privacy laws by following policies and procedures.",
      "Plan and organize office services, including lodging, moving, forms, equipment, supplies, asset disposal, parking, maintenance, and security.",
    ],
    conditions: [
      "Ability to work independently",
      "Fast-paced environment",
      "Work under pressure",
      "Attention to detail"
    ],
    suitability: [
      "Efficient interpersonal skills",
      "Organized",
      "Reliability",
      "Ability to multitask",
      "Time management"
    ],
    tech: [
      "Electronic mail",
      "MS Excel",
      "MS Office",
      "MS Outlook",
      "MS PowerPoint",
      "MS Windows",
      "MS Word",
      "Google Drive"
    ],
    whoCanApply: [
      "Canadian citizens and permanent or temporary residents of Canada.",
      "Other candidates with or without a valid Canadian work permit."
    ],
  };

  // ===================== JOB 7: OFFICE ADMINISTRATOR =====================
  const job7 = {
    id: 7,
    title: "Office Administrator",
    salary: "$30.00 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Oversee and coordinate office administrative procedures and review, evaluate and implement new procedures.",
      "Establish work priorities, delegate work to office support staff, and ensure deadlines are met and procedures are followed.",
      "Coordinate and plan for office services, such as accommodation, relocations, equipment, supplies, forms, disposal of assets, parking, maintenance and security services.",
      "Assist in preparation of operating budget and maintain inventory and budgetary controls.",
      "Assemble data and prepare periodic and special reports, manuals and correspondence.",
      "May supervise records management technicians and related staff.",
    ],
    conditions: [
      "Ability to work independently",
      "Work under pressure",
      "Attention to detail"
    ],
    suitability: [
      "Efficient interpersonal skills",
      "Excellent oral communication",
      "Excellent written communication",
      "Organized",
      "Ability to multitask",
      "Time management"
    ],
    whoCanApply: [
      "You are a Canadian citizen, a permanent or a temporary resident of Canada.",
      "You have a valid Canadian work permit."
    ],
  };

  // ===================== JOB 8: FINANCIAL ANALYST =====================
  const job8 = {
    id: 8,
    title: "Financial Analyst",
    salary: "$39.00 hourly",
    type: "Permanent employment / Full time",
    shifts: "Day, Evening, Morning, Shift, Weekend",
    startDate: "Starts as soon as possible",
    benefits: "Health benefits",
    vacancies: 1,
    education: "Secondary (high) school graduation certificate",
    experience: "0-1 years",
    tasks: [
      "Evaluate financial risks, prepare financial forecasts, financing scenarios and other documents concerning capital management, and write reports and recommendations.",
      "Plan short- and long-term cash flows and assess financial performance.",
      "Analyze investment projects.",
      "Advise on and participate in the financial aspects of contracts and calls for tender.",
      "Follow up on financing projects with financial backers.",
      "Develop, implement and use tools for managing and analyzing financial portfolio.",
      "Prepare a regular risk profile for debt portfolios.",
      "Assist in preparing operating and investment budgets.",
      "Develop and update financial or treasury policies.",
    ],
    conditions: [
      "Fast-paced environment",
      "Work under pressure",
      "Tight deadlines",
      "Attention to detail"
    ],
    suitability: [
      "Excellent oral communication",
      "Excellent written communication"
    ],
    whoCanApply: [
      "You are a Canadian citizen, a permanent or a temporary resident of Canada.",
      "You have a valid Canadian work permit."
    ],
  };

  // ===================== ALL JOBS ARRAY =====================
  const allJobs = [job1, job2, job3, job4, job5, job6, job7, job8];

  // ===================== FORM FIELDS =====================
  const careerFields = [
    { name: "name", type: "text", placeholder: "Name", required: true },
    { name: "phone", type: "tel", placeholder: "Phone", required: true },
    { name: "email", type: "email", placeholder: "Email*", required: true },
    { name: "resume", type: "file", placeholder: "Attach Resume", required: true },
  ];

  // ===================== FORM SUBMIT =====================
  const handleCareerSubmit = async (formData, jobTitle) => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("resume", formData.resume);
      data.append("jobTitle", jobTitle);

      const response = await axios.post(
        "http://localhost:5000/api/careers/apply",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Application Error:", error);
      alert("Error submitting application. Please try again.");
    }
  };

  // ===================== REUSABLE JOB CARD RENDERER =====================
  const renderJob = (job, isLast = false) => (
    <React.Fragment key={job.id}>
      <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 mb-14">
        <div>
          <p className="text-white/50 text-xs mb-3">Date posted: 19/06/2024</p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 uppercase">{job.title}</h2>
          <ul className="space-y-1.5 text-white/65 text-xs sm:text-sm list-disc pl-5">
            <li>Location: Barrhead, Alberta T7N 1L1, Canada</li>
            <li>Salary: <span className="text-white">{job.salary}</span></li>
            <li>{job.type}</li>
            <li>{job.shifts}</li>
            <li>{job.startDate}</li>
            <li>{job.benefits}</li>
            {job.vacancies > 1 && (<li>{job.vacancies} vacancies available</li>)}
          </ul>
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Overview</h3>
            <div className="mb-3"><h4 className="text-white/70 font-medium text-xs sm:text-sm mb-0.5">Languages</h4><p className="text-white/65 text-xs sm:text-sm pl-5">English</p></div>
            <div className="mb-3"><h4 className="text-white/70 font-medium text-xs sm:text-sm mb-0.5">Education</h4><p className="text-white/65 text-xs sm:text-sm pl-5">{job.education}</p></div>
            <div className="mb-3"><h4 className="text-white/70 font-medium text-xs sm:text-sm mb-0.5">Experience</h4><p className="text-white/65 text-xs sm:text-sm pl-5">{job.experience}</p></div>
          </div>
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Responsibilities</h3>
            <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Tasks</h4>
            <ul className="list-disc pl-8 space-y-1 text-white/65 text-xs sm:text-sm">
              {job.tasks.map((task, idx) => (<li key={idx}>{task}</li>))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Additional Information</h3>
            <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Work conditions and physical capabilities</h4>
            <ul className="list-disc pl-8 space-y-0.5 text-white/65 text-xs sm:text-sm">
              {job.conditions.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
          <div className="mt-5">
            <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Personal suitability</h4>
            <ul className="list-disc pl-8 space-y-0.5 text-white/65 text-xs sm:text-sm">
              {job.suitability.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
          </div>
          {job.tech && (
            <div className="mt-5">
              <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Tech Knowledge</h4>
              <ul className="list-disc pl-8 space-y-0.5 text-white/65 text-xs sm:text-sm">
                {job.tech.map((item, idx) => (<li key={idx}>{item}</li>))}
              </ul>
            </div>
          )}
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Benefits</h3>
            <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Health benefits</h4>
            <ul className="list-disc pl-8 space-y-0.5 text-white/65 text-xs sm:text-sm">
              <li>Health/Dental Benefits</li>
            </ul>
          </div>
          <div className="mt-5">
            <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Benefits</h4>
            <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-0.5">Health benefits</h4>
            <ul className="list-disc pl-8 space-y-0.5 text-white/65 text-xs sm:text-sm">
              <li>Health/Dental Benefits</li>
            </ul>
          </div>
          {job.whoCanApply && (
            <div className="mt-5">
              <h4 className="text-white/70 font-medium text-xs sm:text-sm mb-1.5">Who can apply to this job?</h4>
              <p className="text-white/65 text-xs sm:text-sm mb-1">The employer accepts applications from:</p>
              <ul className="list-disc pl-8 space-y-0.5 text-white/65 text-xs sm:text-sm">
                {job.whoCanApply.map((item, idx) => (<li key={idx}>{item}</li>))}
              </ul>
            </div>
          )}
          <div className="mt-6 p-4 border border-white/10 rounded">
            <h3 className="text-sm sm:text-base font-semibold mb-1.5">How to apply</h3>
            <p className="text-white/65 text-xs sm:text-sm">By email: <a href="mailto:info@amr-enterprise.com" className="text-brand hover:underline">info@amr-enterprise.com</a></p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-8">
            Apply Now
            <span className="text-sm font-normal text-white/50 block mt-1.5">{job.title}</span>
          </h2>
          <CommonForm fields={careerFields} submitText="Submit Application" onSubmit={(data) => handleCareerSubmit(data, job.title)} />
        </div>
      </div>

      {!isLast && (
        <div className="mb-12 md:mb-16">
          <div className="w-full h-px bg-white/30" />
        </div>
      )}
    </React.Fragment>
  );

  // ===================== RENDER =====================
  return (
    <>
      <Helmet>
        <title>Careers | Amayra Enterprises</title>
        <meta name="description" content="Join our team at Amayra Enterprises - Explore career opportunities and apply now" />
        <meta name="keywords" content="careers, jobs, hiring, employment, Amayra Enterprises" />
      </Helmet>

      <section className="bg-black text-white min-h-screen pt-20 md:pt-25 pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="mb-10 md:mb-14">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold text-brand">
              We're Hiring
            </h1>
            <div className="w-full h-px bg-white/30 mt-4" />
          </div>

          {allJobs.map((job, idx) => renderJob(job, idx === allJobs.length - 1))}
        </div>
      </section>
    </>
  );
};

export default Careers;
