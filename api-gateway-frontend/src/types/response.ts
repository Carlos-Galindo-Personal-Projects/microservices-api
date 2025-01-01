export interface ResponseMessage {
    message: string;
}

export interface ResponseProducts {
    id: number;
    name: string;
    price: number;
    description: string;
    amount: number;
    category: {
        name: string;
    };
}
