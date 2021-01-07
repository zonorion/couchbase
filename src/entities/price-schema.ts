import { Schema } from 'ottoman';

export const PriceSchema = new Schema({
  propertyId: { type: String, required: true },
  roomId: { type: String, required: true },
  agreementId: { type: String, required: true },
  rateId: { type: String, required: true },
  rateType: { type: String, required: true },
  allotment: Number,
  price: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
  status: String,
  date: { type: String, required: true },
});
