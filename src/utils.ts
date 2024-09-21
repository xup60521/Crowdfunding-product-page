export type Unpacked<T> = T extends (infer U)[] ? U : T;

export const Data = [
    {
        title: "Bamboo Stand",
        price_tag: "Pledge $25 or more",
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.`,
        left: 101,
    },
    {
        title: "Black Edition Stand",
        price_tag: "Pledge $75 or more",
        description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.`,
        left: 64,
    },
    {
        title: "Mahogany Special Edition",
        price_tag: "Pledge $200 or more",
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.`,
        left: 0,
    },
] as {
    title: string;
    price_tag: string;
    description: string;
    left: number | undefined;
}[];
