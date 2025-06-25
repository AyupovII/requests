import { TRequest } from "@/types";
import { makeAutoObservable } from "mobx";

export class RequestsStore {
  requests: TRequest[] = [{id: '1', title: 'Заявка 1', description: 'Описание заявки 1', status: 'New', date: new Date().toISOString()}];

  constructor() {
    makeAutoObservable(this);
  }

  addRequest(request: TRequest) {
    this.requests.push(request);
    this.saveRequests();
  }

  loadRequests() {
    const requests = localStorage.getItem('requests');
    if (requests) {
      this.requests = JSON.parse(requests);
    }
  }

  saveRequests() {
    localStorage.setItem('requests', JSON.stringify(this.requests));
  }

  removeRequest(id: string) {
    this.requests = this.requests.filter(request => request.id !== id);
  }

  getRequest(id: string) {
    console.log("Ищу id:", id);
    console.log("В списке заявок:", this.requests.map(r => r.id));
    return this.requests.find(request => request.id === id);
  }

  clearAll() {
    this.requests = [];
  }
}

export const requestStore = new RequestsStore();