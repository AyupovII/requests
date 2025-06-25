import { TRequest } from "@/types";
import { makeAutoObservable } from "mobx";

export class RequestsStore {
  requests: TRequest[] = [];

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
  changeRequest(request: TRequest) {
    this.requests = this.requests.map(req => req.id === request.id ? request : req);
  }

  getRequest(id: string) {
    return this.requests.find(request => request.id === id);
  }

  clearAll() {
    this.requests = [];
  }
}

export const requestStore = new RequestsStore();