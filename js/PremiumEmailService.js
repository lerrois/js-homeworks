import EmailService from './EmailService.js';

class PremiumEmailService extends EmailService {
  addPremiumEmail(email) {
    if (this.premiumEmail.length === 5) {
      throw new Error('Premium email should not be more then 5');
    }
    super.addPremiumEmail(email);
  }
}

export default PremiumEmailService;
