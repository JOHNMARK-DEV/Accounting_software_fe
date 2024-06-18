import * as z from "zod";

export const InvoiceSchema = z.object({
    invoice_no: z.string().min(1, {
        message: "Invoice is required!"
    }),
    delivery_receipt_no: z.string().min(1, {
        message: "Delivery receipt no. is required!"
    }),
    client_code: z.string().min(1, {
        message: "Client code is required!"
    }),
    currency_code: z.string().min(1, {
        message: "Currency code is required!"
    }),
    amount: z.number(),
    exchange_rate: z.number(),
    based_rate: z.number(),
    based_amount: z.number(),
    posting_date: z.date({
        required_error: "Posting date is required!"
    }),
    due_date: z.date(),
    purchase_order_no: z.string().min(1, {
        message: "Purchase Order No. is required!"
    }),
    particulars: z.string().optional(),
    details: z.array(z.any()).optional() // Define the specific schema for array items if known
});