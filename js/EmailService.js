class EmailService {
  static #instance = false;

  premiumEmail = [];

  static #logs = [];

  constructor() {
    EmailService.#instance = this;
    EmailService._log(`Was created instance ${this.constructor.name}`);
  }

  addPremiumEmail(email) {
    if (typeof email !== 'string') {
      throw new Error('Email must be provided as a string');
    }
    EmailService._log(`${email} was added in class ${this.constructor.name}`);
    this.premiumEmail.push(email);
  }

  getPremiumEmails() {
    EmailService._log(`Emails were returned in class ${this.constructor.name}: ${this.premiumEmail.join(',')}`);
    return this.premiumEmail;
  }

  static _log(message) {
    this.#logs.push(message);
  }

  getLogs() {
    return EmailService.#logs;
  }
}
export default EmailService;
