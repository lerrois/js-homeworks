import EmailService from './EmailService.js';
import PremiumEmailService from "./PremiumEmailService.js";

class EnterpriseEmailService extends EmailService {
  migratePremiumEmails(obj) {
    if (obj instanceof PremiumEmailService) {
      obj.premiumEmail = this.getPremiumEmails();
      EmailService._log(`Emails were migrated from class ${this.constructor.name} to class ${obj.constructor.name}: ${obj.premiumEmail.join(',')}`);
    }
  }
}

export default EnterpriseEmailService;
