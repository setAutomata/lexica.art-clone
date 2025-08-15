import "./Card.css";

function Card({
  plan,
  price,
  billingMethod,
  planBtn,
  genPerMonth,
  limit,
  gen,
  recommended = false,
  children,
  changePlan,
}) {
  return (
    <div
      className={
        recommended
          ? "card__container card__container__recommended"
          : "card__container"
      }
    >
      <div className="cars__planType">{plan}</div>

      <div style={{ margin: "0.8rem 0" }}>
        <span style={{ fontSize: "2rem" }}>${price}</span>
        <span style={{ fontSize: "1.2rem", color: "#888" }}> / month</span>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>{billingMethod}</div>

      <div>
        <button className="card__btn__sub">Subscribe</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="card__btn__billing" onClick={changePlan}>
          {planBtn}
          <div>
            <svg
              stroke="currentColor"
              fill="#888"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
            </svg>
          </div>
        </button>
      </div>

      <div style={{ fontSize: "1.2rem", margin: "0.5rem 0 0.2rem 0" }}>
        {genPerMonth}
      </div>

      <div className="card__grayTxt">fast generations per month</div>
      <div className="card__limit">{limit}</div>
      <div className="card__grayTxt">{gen}</div>
      <>{children}</>
    </div>
  );
}

export default Card;
