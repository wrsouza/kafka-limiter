export class SendOrderEvent {
  constructor(
    readonly orderId: string,
    readonly userId: string,
  ) {}

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
    });
  }
}
