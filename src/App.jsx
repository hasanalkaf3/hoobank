import styles from "./style";
import * as Components from "./components";

const App = () => (
  <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Components.Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Components.Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Components.Stats />
        <Components.Business />
        <Components.Billing />
        <Components.CardDeal />
        <Components.Testimonials />
        <Components.Clients />
        <Components.CTA />
        <Components.Footer />
      </div>
    </div>
  </div>
);

export default App;
