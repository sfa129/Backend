import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        qualifications: {
            type: String,
            required: true
        }
    }, {timestamps: true}
);

export const Patient = mongoose.model("Patient", doctorSchema)