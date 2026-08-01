import React, { useState } from "react";

const CommonForm = ({
    fields = [
        {
            name: "name",
            type: "text",
            placeholder: "Name",
            required: true,
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email*",
            required: true,
        },
        {
            name: "message",
            type: "textarea",
            placeholder: "Message",
            rows: 7,
        },
        {
            name: "attachment",
            type: "file",
            placeholder: "Attach Files",
        },
    ],
    submitText = "Send",
    onSubmit,
}) => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files?.[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            if (onSubmit) {
                await onSubmit(formData);
            }

            setFormData({});
            e.target.reset();

        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full space-y-9"
        >

            {fields.map((field) => {

                /* ================= MESSAGE ================= */
                if (field.type === "textarea") {
                    return (
                        <textarea
                            key={field.name}
                            name={field.name}
                            placeholder={field.placeholder || "Message"}
                            required={field.required}
                            rows={field.rows || 7}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className="
                                w-full
                                min-h-[90px]
                                bg-transparent
                                border
                                border-white/30
                                px-6
                                py-6
                                text-lg
                                md:text-xl
                                text-white
                                placeholder:text-white/70
                                outline-none
                                resize-y
                                focus:border-brand
                                transition
                            "
                        />
                    );
                }

                /* ================= FILE ================= */
                if (field.type === "file") {
                    return (
                        <div
                            key={field.name}
                            className="flex items-center justify-between"
                        >
                            <label
                                htmlFor={field.name}
                                className="
                                    cursor-pointer
                                    text-brand
                                    text-lg
                                    md:text-xl
                                    hover:underline
                                    transition
                                "
                            >
                                <span className="mr-2">📎</span>
                                Attach Files

                                <input
                                    id={field.name}
                                    name={field.name}
                                    type="file"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </label>

                            <span className="text-white/60 text-sm md:text-base">
                                {formData[field.name] ? "Attachment (1)" : "Attachments (0)"}
                            </span>
                        </div>
                    );
                }

                /* ================= INPUT ================= */
                return (
                    <input
                        key={field.name}
                        name={field.name}
                        type={field.type || "text"}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="
                            w-full
                            h-[50px]
                            md:h-[50px]
                            bg-transparent
                            border
                            border-white/30
                            px-6
                            text-lg
                            md:text-xl
                            text-white
                            placeholder:text-white/70
                            outline-none
                            focus:border-brand
                            transition
                        "
                    />
                );
            })}

            {/* ================= SEND BUTTON ================= */}
            <button
                type="submit"
                disabled={loading}
                className="
                    w-full
                    h-[50px]
                    md:h-[50px]
                    bg-brand
                    text-black
                    text-lg
                    md:text-xl
                    font-semibold
                    hover:bg-brand-dark
                    transition
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >
                {loading ? "Sending..." : submitText}
            </button>

        </form>
    );
};

export default CommonForm;