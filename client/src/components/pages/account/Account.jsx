import "./Account.css";
import { useLayoutEffect, useState } from "react";
import YearlyPlan from "./plans/YearlyPlan";
import MonthlyPlan from "./plans/MonthlyPlan";

function Account() {
  const [plans, setPlans] = useState({ monthlyPlan: false });

  function togglePlan() {
    setPlans((prev) => ({ monthlyPlan: !prev.monthlyPlan }));
  }

  useLayoutEffect(() => {
    document.title = "Account - Lexica";
  }, []);

  return (
    <div className="acc__container">
      <div className="acc__title">Account</div>
      <div className="acc__subTitle">Choose the plan that's right for you</div>
      <div className="acc__planBtn__container">
        <div className="acc__saveTxt">Save 20%</div>
        <div className="acc__planBtn">
          <button
            className={plans.monthlyPlan ? "acc_plan btn-active" : "acc__plan"}
            onClick={togglePlan}
          >
            Monthly Plans
          </button>

          <button
            className={!plans.monthlyPlan ? "acc_plan btn-active" : "acc__plan"}
            onClick={togglePlan}
          >
            Yearly Plans
          </button>
        </div>
      </div>

      <section className="acc__planCards">
        {plans.monthlyPlan ? (
          <MonthlyPlan changePlan={togglePlan} />
        ) : (
          <YearlyPlan changePlan={togglePlan} />
        )}
      </section>

      <section className="acc__faq">
        <div className="acc__row">
          <h3>How does the plan limit work?</h3>
          <div>
            If you go over your limit we'll nicely ask you to upgrade. The only
            way to generate images is by subscribing to a plan, as there is
            currently no free plan.
          </div>
        </div>

        <div className="acc__row">
          <h3>What are fast and slow generations?</h3>
          <div>
            Each prompt submission uses 4 image generation credits. Every plan
            gets a set number of fast generations where your images are created
            using our fastest servers. On the Pro and Max plan you get unlimited
            generations with a daily cap, but we'll switch you over to the slow
            queue once you've hit your fast generation limit.
          </div>
        </div>

        <div className="acc__row">
          <h3>Can I buy more fast generations?</h3>
          <div>
            Yes, you can buy fast generations for $0.05 per generation. These
            never expire, but you must have an active plan to use them. They're
            perfect for months where you need to go beyond your plan's limit.
            Just click the "Buy extra" button on your plan above.
          </div>
        </div>

        <div className="acc__row">
          <h3>Can I upgrade or downgrade my plan?</h3>
          <div>
            You can change plans at any time by choosing a new plan above. If
            you decide to upgrade, your payment will be prorated which means
            you'll only pay the difference. If you downgrade then you'll have a
            discount applied to future months.
          </div>
        </div>

        <div className="acc__row">
          <h3>How do I cancel my plan?</h3>
          <div>
            You can cancel your plan at any time and keep access until the end
            of your billing period. To manage your plan, click the Manage Plan
            button above.
          </div>
        </div>

        <div className="acc__row">
          <h3>Do you accept PayPal?</h3>
          <div>
            We don't currently accept PayPal. You'll see all available payment
            methods on the checkout page after choosing a plan.
          </div>
        </div>

        <div className="acc__row">
          <h3>Can I keep my images private?</h3>
          <div>
            Images created under the Starter and Pro plans will show up in our
            search engine. If you subscribe to the Max plan then all your images
            will be private unless you decide to share them.
          </div>
        </div>

        <div className="acc__row">
          <h3>Can I use images for commercial purposes?</h3>
          <div>
            You can use any image you find on Lexica for personal use. For
            commercial use of images created with Lexica you must have a paid
            plan, with some restrictions on company size. If your company has
            2-5 people, then you need the Pro plan. Companies with 5+ employees
            need the Max plan. Please see our license page for more details on
            allowed usage.
          </div>
        </div>

        <div className="acc__row">
          <h3>Can you give me a receipt or invoice for tax purposes?</h3>
          <div>
            Yes, you can download receipts and invoices once subscribed to a
            plan.
          </div>
        </div>

        <div className="acc__row">
          <h3>Where can I ask more questions?</h3>
          <div>You can contact us at support@lexica.art.</div>
        </div>
      </section>
    </div>
  );
}

export default Account;
