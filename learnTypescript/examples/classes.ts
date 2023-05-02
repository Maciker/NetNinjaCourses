class InvoiceExample {
    /*   public client: string;
      private details: string;
      readonly amount: number;
    
      constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
      } */
      constructor(
        readonly client:string,
        private details: string,
        public amount: number,
      ){}
    
      format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
      }
    }
    
    const invOne = new InvoiceExample("Mario", "Work on the Mario website", 250);
    const invTwo = new InvoiceExample("Luigi", "Work on the Luigi website", 100);
    
    let invoices: InvoiceExample[] = [];
    
    invoices.push(invOne);
    invoices.push(invTwo);
    
    console.log(invoices);