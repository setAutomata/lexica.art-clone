import Card from "../../../ui_elements/Card";
import CheckMark from "../../../../assets/images/checkMark.svg";

function MonthlyPlan({ changePlan }) {
  return (
    <>
      <Card
        plan="Max plan"
        price="60"
        billingMethod="Billing monthly"
        planBtn="Save with annual billing (20% off)"
        genPerMonth="7,000"
        limit="Unlimited"
        gen="slow generations with daily cap"
        changePlan={changePlan}
      >
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          3 concurrent fast jobs <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Images are private <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Full commercial license <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Custom aspect ratios <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Image uploads <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Optional credit top-ups <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Early access to new models <br />
        </div>
      </Card>
      {/* ---------------------------------------------------------- */}
      <Card
        recommended={true}
        plan="Pro plan"
        price="30"
        billingMethod="Billing monthly"
        planBtn="Save with annual billing (20% off)"
        genPerMonth="3,000"
        limit="Unlimited"
        gen="slow generations with daily cap"
        changePlan={changePlan}
      >
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          3 concurrent fast jobs <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Images are private <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Full commercial license <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Custom aspect ratios <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Image uploads <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Optional credit top-ups <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Early access to new models <br />
        </div>
      </Card>
      {/* ---------------------------------------------------------- */}
      <Card
        plan="Starter plan"
        price="10"
        billingMethod="Billing monthly"
        planBtn="Save with annual billing (20% off)"
        genPerMonth="1,000"
        limit="No"
        gen="slow generations"
        changePlan={changePlan}
      >
        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          2 concurrent fast jobs <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Images are private <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Personal commercial license <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Custom aspect ratios <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Image uploads <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Optional credit top-ups <br />
        </div>

        <div className="checkStyle">
          <img className="checkMark" src={CheckMark} alt="check" />
          Early access to new models <br />
        </div>
      </Card>
    </>
  );
}

export default MonthlyPlan;
