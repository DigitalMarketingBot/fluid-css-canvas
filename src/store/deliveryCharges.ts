export interface DeliveryCharge {
  id: number;
  name: string;
  price: string;
  status: string;
}

let nextId = 4;

const defaultCharges: DeliveryCharge[] = [
  { id: 1, name: "Dhaka", price: "70 Tk", status: "Active" },
  { id: 2, name: "Out Side Dhaka", price: "140 Tk", status: "Active" },
  { id: 3, name: "Shoes", price: "10 Tk", status: "Inactive" },
];

let charges = [...defaultCharges];
let listeners: (() => void)[] = [];

function notify() {
  listeners.forEach((l) => l());
}

export function getCharges() {
  return charges;
}

export function addCharge(name: string, price: string, status: string) {
  charges = [...charges, { id: nextId++, name, price, status }];
  notify();
}

export function updateCharge(id: number, name: string, price: string, status: string) {
  charges = charges.map((c) => (c.id === id ? { ...c, name, price, status } : c));
  notify();
}

export function getChargeById(id: number) {
  return charges.find((c) => c.id === id);
}

export function deleteCharge(id: number) {
  charges = charges.filter((c) => c.id !== id);
  notify();
}

export function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
