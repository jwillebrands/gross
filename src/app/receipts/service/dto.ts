import { Receipt, ReceiptItem } from "src/app/model/receipt";
import {DateTime} from "luxon";
import { Category } from "src/app/model/category";

export interface ReceiptItemDto {
    discount: string;
    name: string;
    price: string;
    category?: string;
}

export interface ReceiptDto {
    _id: string;
    date: string;
    store: string;
    items: ReceiptItemDto[];
}

export const unmarshalReceipt = (dto: ReceiptDto): Receipt => {
    return new Receipt(
        dto.store,
        DateTime.fromFormat(dto.date, "dd-MM-yyyy"),
        dto.items.map(unmarshalReceiptItem)
    )
}

export const unmarshalReceiptItem = (dto: ReceiptItemDto): ReceiptItem => {
    return new ReceiptItem(
        dto.name,
        Number.parseFloat(dto.price),
        dto.category ? new Category(dto.category) : Category.UNCATEGORIZED
    )
}