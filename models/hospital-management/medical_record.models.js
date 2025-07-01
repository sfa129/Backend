import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
    {
        patientName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },
        fileHeading: {
            type: String,
            required: true
        },
        medicines: [
            {
                type: String,
                required: true
            }
        ],
        history: [
            {
                type: String,
                required: true
            },
        ],
        lastCheckUps: [
            {
                type: String,
                required: tru
            }
        ],
        nextCheckUp: {
            type: String,
            required: true
        },
        mustAvoid: [
            {
                type: String,
                required: true
            }
        ]

    }, {timestamps: true}
);

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);