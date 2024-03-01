export class ReceiveOrderEvent {
  constructor(
    readonly orderId: string,
    readonly userId: string,
  ) {}
}
